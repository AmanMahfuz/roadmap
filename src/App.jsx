import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector';
import LanguageRoadmapView from './components/LanguageRoadmapView';
import DayTaskWindow from './components/DayTaskWindow';
import ProfileStatsView from './components/ProfileStatsView';
import LevelUpModal from './components/LevelUpModal';
import FrontendProjectsHub from './components/FrontendProjectsHub';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import CodePlayground from './components/CodePlayground';
import SkillTreeView from './components/SkillTreeView';
import MainDashboard from './components/MainDashboard';
import LeaderboardPage from './components/LeaderboardPage';
import AchievementsPage from './components/AchievementsPage';
import GoalsPage from './components/GoalsPage';
import AiMentorModal from './components/AiMentorModal';
import PortfolioProofSystem from './components/PortfolioProofSystem';
import RoadmapDetail from './components/RoadmapDetail';
import { SIX_LANGUAGES } from './data/sixLanguagesData';
import { getLevelFromXp, evaluateBadges } from './services/gamificationEngine';

import { 
  supabase, 
  getCurrentUser, 
  signOutUser,
  syncUserStateToSupabase, 
  fetchUserProgressFromSupabase 
} from './services/supabaseClient';

import './App.css';

const LOCAL_STORAGE_KEY = 'devquik_six_languages_user_v2';

const INITIAL_USER_STATE = {
  xp: 0,
  level: 1,
  streak: 1,
  hearts: 5,
  enrolledTracks: ['html_css', 'javascript'],
  completedDays: {},
  taskProgress: {},
  lastActiveDate: new Date().toISOString().split('T')[0],
  unlockedBadges: ['badge_first_step']
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [activeLanguageId, setActiveLanguageId] = useState('html_css');
  const [activeRoadmapSlug, setActiveRoadmapSlug] = useState(null);
  const [selectedDayObj, setSelectedDayObj] = useState(null);
  const [isAiMentorOpen, setIsAiMentorOpen] = useState(false);
  const [levelUpLevel, setLevelUpLevel] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const [userState, setUserState] = useState(INITIAL_USER_STATE);

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
      setCurrentUser(user);
      if (user) {
        setIsDataLoading(true);
        loadDbUserProgress(user.id);
        setCurrentPage('dashboard');
      } else {
        setUserState(INITIAL_USER_STATE);
        setIsDataLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadDbUserProgress = async (userId) => {
    if (!userId) return;
    const dbData = await fetchUserProgressFromSupabase(userId);
    if (dbData) {
      setUserState(prev => {
        const loadedXp = dbData.xp || prev.xp;
        const loadedLevel = getLevelFromXp(loadedXp);
        return {
          ...prev,
          xp: loadedXp,
          level: loadedLevel,
          streak: dbData.streak || prev.streak,
          hearts: dbData.hearts !== undefined ? dbData.hearts : (prev.hearts || 5),
          enrolledTracks: dbData.enrolled_tracks || prev.enrolledTracks || ['html_css', 'javascript'],
          completedDays: dbData.completed_days || prev.completedDays,
          taskProgress: dbData.task_progress || prev.taskProgress || {},
          unlockedBadges: dbData.badges || prev.unlockedBadges || ['badge_first_step'],
          lastActiveDate: dbData.last_active_date || prev.lastActiveDate
        };
      });
    }
    setIsDataLoading(false);
  };

  useEffect(() => {
    try {
      if (currentUser?.id && !isDataLoading) {
        syncUserStateToSupabase(userState, currentUser.id);
      }
    } catch (e) {
      console.error('Failed to sync user state safely', e);
    }
  }, [userState, currentUser, isDataLoading]);

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
  }, [currentPage, activeLanguageId, selectedDayObj]);

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
    setCurrentPage('landing');
  };

  const handleSelectLanguage = (langId) => {
    setActiveLanguageId(langId);
    setCurrentPage('roadmap');
  };

  const handleEnrollTrack = (trackId, type = 'language') => {
    setUserState(prev => {
      const current = prev.enrolledTracks || ['html_css', 'javascript', 'python'];
      return {
        ...prev,
        // Prepend so it becomes the primary active track on the dashboard
        enrolledTracks: [trackId, ...current.filter(id => id !== trackId)]
      };
    });
    
    // Only navigate if it's a language, since we might already be on the detail page for a career roadmap
    if (type === 'language') {
      handleSelectLanguage(trackId);
    }
  };

  const handleUnenrollTrack = (trackId) => {
    setUserState(prev => {
      const current = prev.enrolledTracks || ['html_css', 'javascript'];
      return {
        ...prev,
        enrolledTracks: current.filter(id => id !== trackId)
      };
    });
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

  const handleCompleteDay = (dayKey, xpReward = 200) => {
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
    const currentLang = SIX_LANGUAGES.find(l => l.id === activeLanguageId) || SIX_LANGUAGES[0];
    const nextDayObj = currentLang.days.find(d => d.day === selectedDayObj.day + 1);
    if (nextDayObj) {
      setSelectedDayObj(nextDayObj);
    }
  };

  const handlePrevDay = () => {
    if (!selectedDayObj) return;
    const currentLang = SIX_LANGUAGES.find(l => l.id === activeLanguageId) || SIX_LANGUAGES[0];
    const prevDayObj = currentLang.days.find(d => d.day === selectedDayObj.day - 1);
    if (prevDayObj) {
      setSelectedDayObj(prevDayObj);
    }
  };

  const handleResetProgress = () => {
    setUserState(INITIAL_USER_STATE);
    setCurrentPage('languages');
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

  const activeLanguageObj = SIX_LANGUAGES.find(l => l.id === activeLanguageId) || SIX_LANGUAGES[0];

  if (isDataLoading && !['landing', 'signin', 'signup'].includes(currentPage)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600 font-medium">Syncing with server...</p>
        </div>
      </div>
    );
  }

  if (currentPage === 'landing') {
    return (
      <LandingPage
        onStartLearning={() => setCurrentPage('roadmaps')}
        onOpenSignIn={() => setCurrentPage('signin')}
        onOpenSignUp={() => setCurrentPage('signup')}
        onExploreRoadmaps={() => setCurrentPage('roadmaps')}
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

  if (selectedDayObj) {
    return (
      <DayTaskWindow
        dayObj={selectedDayObj}
        languageId={activeLanguageId}
        totalDays={activeLanguageObj.days.length}
        isCompleted={!!userState.completedDays[`${activeLanguageId}_day_${selectedDayObj.day}`]}
        taskProgress={userState.taskProgress[`${activeLanguageId}_day_${selectedDayObj.day}`] || {}}
        onUpdateTaskProgress={handleUpdateTaskProgress}
        onClose={() => setSelectedDayObj(null)}
        onCompleteDay={handleCompleteDay}
        onAddXp={handleAddXp}
        onNextDay={handleNextDay}
        onPrevDay={handlePrevDay}
      />
    );
  }

  return (
    <div className="app-layout min-h-screen bg-[#f8f9ff] text-slate-900 flex flex-col font-sans">
      <Navbar
        activeView={currentPage}
        activeLanguage={activeLanguageObj}
        onSelectView={(view) => setCurrentPage(view)}
        userState={userState}
        currentUser={currentUser}
        onOpenAuth={() => setCurrentPage('signin')}
        onOpenProfile={() => setCurrentPage('profile')}
        onOpenAiMentor={() => setIsAiMentorOpen(true)}
        onSignOut={handleSignOut}
      />

      <main className={`app-main-content flex-1 w-full pb-24 md:pb-8 ${
        currentPage === 'playground' 
          ? 'max-w-none px-0 pt-0' 
          : 'max-w-7xl mx-auto px-4 sm:px-6 pt-4'
      }`}>
        {currentPage === 'dashboard' && (
          <MainDashboard 
            userState={userState}
            onNavigate={(page) => setCurrentPage(page)}
            onResumeTrack={(trackId, isCareer) => {
              if (isCareer) {
                setActiveRoadmapSlug(trackId);
                setCurrentPage('roadmap_detail');
              } else {
                setActiveLanguageId(trackId);
                setCurrentPage('roadmap');
              }
            }}
          />
        )}

        {currentPage === 'roadmaps' && (
          <RoadmapHub 
            onSelectRoadmap={(slug) => {
              setActiveRoadmapSlug(slug);
              setCurrentPage('roadmap_detail');
            }}
          />
        )}

        {currentPage === 'roadmap_detail' && activeRoadmapSlug && (
          <RoadmapDetail 
            slug={activeRoadmapSlug}
            onBack={() => setCurrentPage('roadmaps')}
            onSelectDay={(dayObj, langId) => {
              setActiveLanguageId(langId);
              setSelectedDayObj(dayObj);
            }}
            userCompletedDays={userState.completedDays}
            currentUser={currentUser}
            userState={userState}
            onEnrollTrack={handleEnrollTrack}
            onUnenrollTrack={handleUnenrollTrack}
          />
        )}

        {currentPage === 'languages' && (
          <LanguageSelector
            activeLanguageId={activeLanguageId}
            onSelectLanguage={handleSelectLanguage}
            userState={userState}
            userCompletedDays={userState.completedDays}
            onEnrollTrack={handleEnrollTrack}
            onUnenrollTrack={handleUnenrollTrack}
            onResumeTrack={(trackId, isCareer) => {
              if (isCareer) {
                setActiveRoadmapSlug(trackId);
                setCurrentPage('roadmap_detail');
              } else {
                handleSelectLanguage(trackId);
              }
            }}
          />
        )}

        {currentPage === 'roadmap' && (
          <LanguageRoadmapView
            languageId={activeLanguageId}
            userCompletedDays={userState.completedDays}
            onSelectDay={(dayObj) => setSelectedDayObj(dayObj)}
            onBackToLanguages={() => setCurrentPage('languages')}
            currentUser={currentUser}
          />
        )}

        {currentPage === 'projects' && (
          <FrontendProjectsHub
            userCompletedDays={userState.completedDays}
            onBackToRoadmap={() => setCurrentPage('languages')}
          />
        )}

        {currentPage === 'analytics' && (
          <AnalyticsDashboard
            userState={userState}
          />
        )}

        {currentPage === 'playground' && (
          <CodePlayground />
        )}

        {currentPage === 'skilltree' && (
          <SkillTreeView userState={userState} />
        )}

        {currentPage === 'proof' && (
          <PortfolioProofSystem />
        )}

        {currentPage === 'leaderboard' && (
          <LeaderboardPage userState={userState} />
        )}

        {currentPage === 'achievements' && (
          <AchievementsPage userState={userState} />
        )}

        {currentPage === 'goals' && (
          <GoalsPage userState={userState} />
        )}

        {currentPage === 'profile' && (
          <ProfileStatsView
            userState={userState}
            currentUser={currentUser}
            onBackToDashboard={() => setCurrentPage('languages')}
            onResetProgress={handleResetProgress}
            onSignOut={handleSignOut}
          />
        )}
      </main>

      {isAiMentorOpen && (
        <AiMentorModal
          onClose={() => setIsAiMentorOpen(false)}
        />
      )}

      {levelUpLevel && (
        <LevelUpModal
          level={levelUpLevel}
          xp={userState.xp}
          onClose={() => setLevelUpLevel(null)}
        />
      )}

      <footer className="app-footer border-t border-slate-200 py-6 px-6 text-center text-xs text-slate-500 bg-white hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-slate-700">DevQuik Developer Ecosystem</span>
            <span>•</span>
            <span>Learn • Practice • Build • Track</span>
          </div>
          <p>© {new Date().getFullYear()} DevQuik. Built for developers mastering HTML, CSS, JavaScript, Python, TypeScript, Java, C++, and Go.</p>
        </div>
      </footer>
    </div>
  );
}
