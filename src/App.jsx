import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';
import MainDashboard from './components/MainDashboard';
import PythonRoadmapView from './components/PythonRoadmapView';
import DayTaskWindow from './components/DayTaskWindow';
import CodePlayground from './components/CodePlayground';
import ProfileStatsView from './components/ProfileStatsView';
import LevelUpModal from './components/LevelUpModal';
import { PYTHON_DAYS, PYTHON_COURSE_METADATA } from './data/pythonCurriculum';
import { getLevelFromXp, evaluateBadges } from './services/gamificationEngine';

import { 
  supabase, 
  getCurrentUser, 
  signOutUser,
  syncUserStateToSupabase, 
  fetchUserProgressFromSupabase 
} from './services/supabaseClient';

import './App.css';

const getStorageKey = (userId) => {
  return userId ? `devquik_python_user_${userId}` : 'devquik_python_guest_v1';
};

const INITIAL_USER_STATE = {
  xp: 0,
  level: 1,
  streak: 1,
  enrolledTracks: ['python'],
  completedDays: {},
  taskProgress: {},
  lastActiveDate: new Date().toISOString().split('T')[0],
  unlockedBadges: ['badge_first_step']
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedDayObj, setSelectedDayObj] = useState(null);
  const [levelUpLevel, setLevelUpLevel] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true);

  // Initialize state from scoped localStorage
  const [userState, setUserState] = useState(() => {
    try {
      const cached = localStorage.getItem(getStorageKey(null));
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {
      console.warn('Local storage error', e);
    }
    return INITIAL_USER_STATE;
  });

  // Save to user-scoped localStorage whenever userState or currentUser updates
  useEffect(() => {
    try {
      const key = getStorageKey(currentUser?.id);
      localStorage.setItem(key, JSON.stringify(userState));
    } catch (e) {
      console.warn('Failed to save to local storage', e);
    }
  }, [userState, currentUser]);

  // Auth & Supabase Progress Listener
  useEffect(() => {
    getCurrentUser().then(user => {
      if (user) {
        setCurrentUser(user);
        loadDbUserProgress(user.id);
        setCurrentPage('dashboard');
      } else {
        setIsDataLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user || null;
      if (user?.id !== currentUser?.id) {
        setCurrentUser(user);
        if (user) {
          setIsDataLoading(true);
          loadDbUserProgress(user.id);
          setCurrentPage('dashboard');
        } else {
          // If logged out
          setUserState(INITIAL_USER_STATE);
          setIsDataLoading(false);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadDbUserProgress = async (userId) => {
    if (!userId) return;
    try {
      // First try to load from user-specific local storage cache
      const cached = localStorage.getItem(getStorageKey(userId));
      let initialBase = INITIAL_USER_STATE;
      if (cached) {
        try {
          initialBase = JSON.parse(cached);
        } catch (err) {
          console.warn('Error reading user cache', err);
        }
      }

      const dbData = await fetchUserProgressFromSupabase(userId);
      if (dbData) {
        const loadedXp = dbData.xp ?? initialBase.xp ?? 0;
        const loadedLevel = getLevelFromXp(loadedXp);
        setUserState({
          xp: loadedXp,
          level: loadedLevel,
          streak: dbData.streak ?? initialBase.streak ?? 1,
          enrolledTracks: ['python'],
          completedDays: dbData.completed_days ?? initialBase.completedDays ?? {},
          taskProgress: dbData.task_progress ?? initialBase.taskProgress ?? {},
          unlockedBadges: dbData.unlocked_badges ?? dbData.badges ?? initialBase.unlockedBadges ?? ['badge_first_step'],
          lastActiveDate: dbData.last_active_date ?? initialBase.lastActiveDate ?? new Date().toISOString().split('T')[0]
        });
      } else {
        // Brand new user in database: start completely clean
        setUserState({
          ...initialBase,
          lastActiveDate: new Date().toISOString().split('T')[0]
        });
      }
    } catch (err) {
      console.error('Error fetching user progress', err);
    } finally {
      setIsDataLoading(false);
    }
  };

  // Sync to Supabase strictly scoped to authenticated user ID
  useEffect(() => {
    try {
      if (currentUser?.id && !isDataLoading) {
        syncUserStateToSupabase(userState, currentUser.id);
      }
    } catch (e) {
      console.error('Failed to sync user state safely', e);
    }
  }, [userState, currentUser, isDataLoading]);

  // Streak calculations on daily login
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastActive = userState.lastActiveDate;

    if (lastActive !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (lastActive === yesterdayStr) {
        setUserState(prev => ({ ...prev, streak: prev.streak + 1, lastActiveDate: today }));
      } else {
        setUserState(prev => ({ ...prev, streak: 1, lastActiveDate: today }));
      }
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage, selectedDayObj]);

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    loadDbUserProgress(user.id);
    setCurrentPage('dashboard');
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (e) {
      console.error('Sign out error', e);
    }
    setCurrentUser(null);
    setUserState(INITIAL_USER_STATE);
    setSelectedDayObj(null);
    setCurrentPage('landing');
  };

  const handleAddXp = (amount) => {
    if (!amount || amount <= 0) return;
    setUserState(prev => {
      const oldXp = prev.xp || 0;
      const newXp = oldXp + amount;
      const oldLevel = getLevelFromXp(oldXp);
      const newLevel = getLevelFromXp(newXp);

      if (newLevel > oldLevel) {
        setLevelUpLevel(newLevel);
      }

      const newBadges = evaluateBadges({
        ...prev,
        xp: newXp
      });

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        unlockedBadges: newBadges
      };
    });
  };

  const handleCompleteDay = (dayKey, xpReward = 150) => {
    setUserState(prev => {
      const todayIso = new Date().toISOString();
      const newCompletedDays = { 
        ...prev.completedDays, 
        [dayKey]: { completedAt: todayIso } 
      };
      
      const newXp = (prev.xp || 0) + xpReward;
      const oldLevel = getLevelFromXp(prev.xp || 0);
      const newLevel = getLevelFromXp(newXp);

      if (newLevel > oldLevel) {
        setLevelUpLevel(newLevel);
      }

      const newBadges = evaluateBadges({
        ...prev,
        xp: newXp,
        completedDays: newCompletedDays
      });

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        completedDays: newCompletedDays,
        unlockedBadges: newBadges
      };
    });
  };

  const handleNextDay = () => {
    if (!selectedDayObj) return;
    const nextDayObj = PYTHON_DAYS.find(d => d.day === selectedDayObj.day + 1);
    if (nextDayObj) {
      setSelectedDayObj(nextDayObj);
    }
  };

  const handlePrevDay = () => {
    if (!selectedDayObj) return;
    const prevDayObj = PYTHON_DAYS.find(d => d.day === selectedDayObj.day - 1);
    if (prevDayObj) {
      setSelectedDayObj(prevDayObj);
    }
  };

  const handleResetProgress = () => {
    const key = getStorageKey(currentUser?.id);
    localStorage.removeItem(key);
    setUserState(INITIAL_USER_STATE);
    if (currentUser?.id) {
      syncUserStateToSupabase(INITIAL_USER_STATE, currentUser.id);
    }
    setCurrentPage('dashboard');
  };

  const handleUpdateTaskProgress = (dayKey, taskId, isCompleted) => {
    setUserState(prev => {
      const currentDayTasks = prev.taskProgress[dayKey] || {};
      return {
        ...prev,
        taskProgress: {
          ...prev.taskProgress,
          [dayKey]: {
            ...currentDayTasks,
            [taskId]: isCompleted
          }
        }
      };
    });
  };

  if (isDataLoading && !['landing', 'signin', 'signup'].includes(currentPage)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600 font-bold text-sm">Loading DevQuik Python...</p>
        </div>
      </div>
    );
  }

  if (currentPage === 'landing') {
    return (
      <LandingPage
        currentUser={currentUser}
        onStartLearning={() => {
          if (currentUser) {
            setCurrentPage('dashboard');
          } else {
            setCurrentPage('signup');
          }
        }}
        onOpenSignIn={() => setCurrentPage('signin')}
        onOpenSignUp={() => setCurrentPage('signup')}
        onExploreGuest={() => setCurrentPage('roadmap')}
      />
    );
  }

  if (currentPage === 'signin') {
    return (
      <SignInPage
        onAuthSuccess={handleAuthSuccess}
        onNavigateToSignUp={() => setCurrentPage('signup')}
        onBackToLanding={() => setCurrentPage('landing')}
      />
    );
  }

  if (currentPage === 'signup') {
    return (
      <SignUpPage
        onAuthSuccess={handleAuthSuccess}
        onNavigateToSignIn={() => setCurrentPage('signin')}
        onBackToLanding={() => setCurrentPage('landing')}
      />
    );
  }

  const handleOpenDay = (dayObj) => {
    setSelectedDayObj(dayObj);
    setCurrentPage('day-task');
  };

  const handleCloseDay = () => {
    setSelectedDayObj(null);
    setCurrentPage('roadmap');
  };

  const handleSelectNavView = (view) => {
    setSelectedDayObj(null);
    setCurrentPage(view);
  };

  return (
    <div className="app-layout min-h-screen bg-[#f8f9ff] text-slate-900 flex flex-col font-sans">
      <Navbar
        activeView={currentPage === 'day-task' ? 'roadmap' : currentPage}
        onSelectView={handleSelectNavView}
        userState={userState}
        currentUser={currentUser}
        onOpenAuth={() => setCurrentPage('signin')}
        onOpenProfile={() => {
          setSelectedDayObj(null);
          setCurrentPage('profile');
        }}
        onSignOut={handleSignOut}
      />

      <main className="app-main-content flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-24">
        {currentPage === 'day-task' && selectedDayObj && (
          <DayTaskWindow
            dayObj={selectedDayObj}
            languageId="python"
            totalDays={PYTHON_DAYS.length}
            isCompleted={!!userState.completedDays[`python_day_${selectedDayObj.day}`]}
            taskProgress={userState.taskProgress[`python_day_${selectedDayObj.day}`] || {}}
            onUpdateTaskProgress={handleUpdateTaskProgress}
            onClose={handleCloseDay}
            onCompleteDay={handleCompleteDay}
            onAddXp={handleAddXp}
            onNextDay={handleNextDay}
            onPrevDay={handlePrevDay}
          />
        )}

        {currentPage === 'dashboard' && (
          <MainDashboard 
            userState={userState}
            onNavigate={(page) => setCurrentPage(page)}
            onStartLesson={handleOpenDay}
          />
        )}

        {currentPage === 'roadmap' && (
          <PythonRoadmapView 
            userCompletedDays={userState.completedDays}
            onSelectDay={handleOpenDay}
            onBackToDashboard={() => setCurrentPage('dashboard')}
            currentUser={currentUser}
          />
        )}

        {currentPage === 'playground' && (
          <CodePlayground />
        )}

        {currentPage === 'profile' && (
          <ProfileStatsView
            userState={userState}
            currentUser={currentUser}
            onBackToDashboard={() => setCurrentPage('dashboard')}
            onResetProgress={handleResetProgress}
            onSignOut={handleSignOut}
          />
        )}
      </main>

      {/* Level Up Celebration Modal */}
      {levelUpLevel && (
        <LevelUpModal
          level={levelUpLevel}
          xp={userState.xp}
          onClose={() => setLevelUpLevel(null)}
        />
      )}

      {/* Simplified Modern Footer */}
      <footer className="border-t border-slate-200 py-6 px-6 text-center text-xs text-slate-500 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-800">DevQuik Python to AI Fast-Track</span>
            <span>•</span>
            <span>15-Day Interactive Mastery</span>
          </div>
          <p>© {new Date().getFullYear()} DevQuik. Built for daily consistent learning.</p>
        </div>
      </footer>
    </div>
  );
}
