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
import AiMentorModal from './components/AiMentorModal';
import PortfolioProofSystem from './components/PortfolioProofSystem';
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

const LOCAL_STORAGE_KEY = 'skillforge_six_languages_user_v2';

const INITIAL_USER_STATE = {
  xp: 0,
  level: 1,
  streak: 1,
  hearts: 5,
  enrolledTracks: ['html_css', 'javascript'],
  completedDays: {},
  lastActiveDate: new Date().toISOString().split('T')[0],
  unlockedBadges: ['badge_first_step']
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [activeLanguageId, setActiveLanguageId] = useState('html_css');
  const [selectedDayObj, setSelectedDayObj] = useState(null);
  const [isAiMentorOpen, setIsAiMentorOpen] = useState(false);
  const [levelUpLevel, setLevelUpLevel] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [userState, setUserState] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load user state safely', e);
    }
    return INITIAL_USER_STATE;
  });

  useEffect(() => {
    getCurrentUser().then(user => {
      if (user) {
        setCurrentUser(user);
        loadDbUserProgress(user.id);
        setCurrentPage('languages');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user || null;
      setCurrentUser(user);
      if (user) {
        loadDbUserProgress(user.id);
        setCurrentPage('languages');
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
          hearts: dbData.hearts || prev.hearts || 5,
          enrolledTracks: dbData.enrolled_tracks || prev.enrolledTracks || ['html_css', 'javascript'],
          completedDays: dbData.completed_days || prev.completedDays
        };
      });
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userState));
      if (currentUser?.id) {
        syncUserStateToSupabase(userState, currentUser.id);
      }
    } catch (e) {
      console.error('Failed to save user state safely', e);
    }
  }, [userState, currentUser]);

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

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    loadDbUserProgress(user.id);
    setCurrentPage('languages');
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

  const handleEnrollTrack = (trackId) => {
    setUserState(prev => {
      const current = prev.enrolledTracks || ['html_css', 'javascript'];
      if (current.includes(trackId)) return prev;
      if (current.length >= 2) return prev;
      return {
        ...prev,
        enrolledTracks: [...current, trackId]
      };
    });
    handleSelectLanguage(trackId);
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
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setCurrentPage('languages');
  };

  const activeLanguageObj = SIX_LANGUAGES.find(l => l.id === activeLanguageId) || SIX_LANGUAGES[0];

  if (currentPage === 'landing') {
    return (
      <LandingPage
        onStartLearning={() => setCurrentPage('languages')}
        onOpenSignIn={() => setCurrentPage('signin')}
        onOpenSignUp={() => setCurrentPage('signup')}
        onExploreRoadmaps={() => setCurrentPage('languages')}
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

      {/* Main Mobile-First Single-Page Application Layout Container */}
      <main className="app-main-content flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-4 pb-24 md:pb-8">
        {currentPage === 'languages' && (
          <LanguageSelector
            activeLanguageId={activeLanguageId}
            onSelectLanguage={handleSelectLanguage}
            userState={userState}
            userCompletedDays={userState.completedDays}
            onEnrollTrack={handleEnrollTrack}
            onUnenrollTrack={handleUnenrollTrack}
          />
        )}

        {currentPage === 'roadmap' && (
          <LanguageRoadmapView
            languageId={activeLanguageId}
            userCompletedDays={userState.completedDays}
            onSelectDay={(dayObj) => setSelectedDayObj(dayObj)}
            onBackToLanguages={() => setCurrentPage('languages')}
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

        {currentPage === 'profile' && (
          <ProfileStatsView
            userState={userState}
            currentUser={currentUser}
            onBackToDashboard={() => setCurrentPage('languages')}
            onResetProgress={handleResetProgress}
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
            <span className="font-semibold text-slate-700">SkillForge Developer Ecosystem</span>
            <span>•</span>
            <span>Learn • Practice • Build • Track</span>
          </div>
          <p>© {new Date().getFullYear()} SkillForge. Built for developers mastering HTML, CSS, JavaScript, Python, TypeScript, Java, C++, and Go.</p>
        </div>
      </footer>
    </div>
  );
}
