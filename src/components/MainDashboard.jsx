import React from 'react';
import { 
  Flame, 
  Trophy, 
  Star, 
  CheckCircle, 
  Map, 
  Activity, 
  BookOpen, 
  Award,
  Zap,
  Terminal,
  Rocket,
  Play
} from 'lucide-react';
import { BADGES_LIST } from '../services/gamificationEngine';
import { 
  getLessonsCompletedOnDate, 
  calculateWeeklyActivity, 
  XP_PER_LESSON 
} from '../utils/dataUtils';
import { SIX_LANGUAGES } from '../data/sixLanguagesData';
import { CAREER_ROADMAPS } from '../data/careerRoadmaps';

export default function MainDashboard({ userState, onNavigate, onResumeTrack }) {
  const currentLevel = userState?.level || 1;
  const currentXp = userState?.xp || 0;
  const streak = userState?.streak || 1;
  const completedDays = userState?.completedDays || {};
  
  const todayIso = new Date().toISOString().split('T')[0];
  const lessonsToday = getLessonsCompletedOnDate(userState, todayIso);
  const todayXp = lessonsToday * XP_PER_LESSON; 
  const dailyGoal = 50;
  
  const weeklyData = calculateWeeklyActivity(userState);

  // Roadmap Progress (Active Track)
  const activeTrackId = userState?.enrolledTracks?.[0];
  let activeTrackObj = null;
  let activeTrackProgress = 0;
  let isCareerRoadmap = false;

  if (activeTrackId) {
    // 1. Check if it's a Career Roadmap
    const careerTrack = CAREER_ROADMAPS.find(r => r.slug === activeTrackId);
    if (careerTrack) {
      isCareerRoadmap = true;
      let totalNodes = 0;
      let completedNodes = 0;
      
      careerTrack.phases.forEach(phase => {
        if (phase.nodes) {
          totalNodes += phase.nodes.length;
          completedNodes += phase.nodes.filter(nodeId => !!completedDays[nodeId]).length;
        }
      });

      activeTrackProgress = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;
      activeTrackObj = { 
        name: careerTrack.roleTitle, 
        progress: activeTrackProgress,
        estimatedMonths: careerTrack.estimatedMonths,
        color: careerTrack.color
      };
    } else {
      // 2. Fallback to Six Languages
      const track = SIX_LANGUAGES.find(l => l.id === activeTrackId);
      if (track) {
        const completedKeys = Object.keys(completedDays).filter(k => !!completedDays[k]);
        const totalDays = track.curriculum ? track.curriculum.length : 7;
        const completedCount = completedKeys.filter(k => k.startsWith(activeTrackId + '_day_')).length;
        activeTrackProgress = Math.round((completedCount / totalDays) * 100);
        activeTrackObj = { 
          name: track.name, 
          progress: activeTrackProgress,
          estimatedMonths: null
        };
      }
    }
  }

  // Recent Badges
  const unlockedBadgeIds = userState?.unlockedBadges || ['badge_first_step'];
  const recentBadges = BADGES_LIST.filter(b => unlockedBadgeIds.includes(b.id)).slice(0, 3);

  const handleResumeClick = () => {
    if (onResumeTrack && activeTrackId) {
      onResumeTrack(activeTrackId, isCareerRoadmap);
    } else {
      isCareerRoadmap ? onNavigate('roadmaps') : onNavigate('languages');
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Stats Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Level {currentLevel}</p>
              <p className="text-lg font-black text-slate-900">{currentXp} XP</p>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Day Streak</p>
              <p className="text-lg font-black text-slate-900">{streak} Days</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 max-w-xs">
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-slate-500">Daily Goal</span>
            <span className="text-indigo-600">{todayXp} / {dailyGoal} XP</span>
          </div>
          <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${Math.min((todayXp / dailyGoal) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (60%) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Daily Quest Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl shadow-lg shadow-indigo-200 p-6 sm:p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 transform group-hover:scale-110 transition-transform duration-700">
              <Star className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Today's Challenge</span>
              </div>
              <h2 className="text-3xl font-black mb-2">Complete 2 lessons</h2>
              <p className="text-indigo-100 mb-6 max-w-md">You're almost at your daily goal! Complete two more lessons in your current roadmap to keep your streak burning.</p>
              
              <button 
                onClick={handleResumeClick}
                className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 flex items-center space-x-2"
              >
                <span>Continue Learning</span>
                <Play className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Roadmap Progress */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
              <Map className="w-5 h-5 text-emerald-500" />
              <span>Current Roadmap Progress</span>
            </h3>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-100" />
                  <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="175" strokeDashoffset={175 - (175 * activeTrackProgress) / 100} className="text-emerald-500 transition-all duration-1000" />
                </svg>
                <span className="font-bold text-slate-700 text-sm z-10">{activeTrackProgress}%</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                  <span>{activeTrackObj ? activeTrackObj.name : 'No Active Track'}</span>
                  {activeTrackObj?.estimatedMonths && (
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase rounded-md border border-indigo-100">
                      {activeTrackObj.estimatedMonths} Months
                    </span>
                  )}
                </h4>
                <p className="text-sm text-slate-500 mb-2">Keep up the momentum!</p>
                {activeTrackObj && (
                  <div className="flex items-center space-x-2 text-xs font-semibold">
                    <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">In Progress</span>
                  </div>
                )}
              </div>
              <button 
                onClick={handleResumeClick}
                className="hidden sm:flex px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl text-sm font-bold transition-colors items-center space-x-1 border border-emerald-200"
              >
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center space-x-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span>Weekly Activity</span>
            </h3>
            <div className="flex items-end justify-between h-32 gap-2">
              {weeklyData.map((d, i) => (
                <div key={i} className="flex flex-col items-center flex-1 group">
                  <div className="w-full relative flex items-end justify-center h-24 bg-slate-50 rounded-t-lg">
                    <div 
                      className="w-full bg-blue-500 rounded-t-lg transition-all duration-700 group-hover:bg-blue-600"
                      style={{ height: `${(d.xp / 100) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (40%) */}
        <div className="space-y-6">
          
          {/* Quick Actions */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => onNavigate('languages')} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                <BookOpen className="w-6 h-6 text-indigo-500 mb-2" />
                <span className="text-xs font-bold text-slate-700">Roadmaps</span>
              </button>
              <button onClick={() => onNavigate('playground')} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                <Terminal className="w-6 h-6 text-cyan-600 mb-2" />
                <span className="text-xs font-bold text-slate-700">Playground</span>
              </button>
              <button onClick={() => onNavigate('projects')} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                <Rocket className="w-6 h-6 text-orange-500 mb-2" />
                <span className="text-xs font-bold text-slate-700">Projects</span>
              </button>
              <button onClick={() => onNavigate('analytics')} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                <Activity className="w-6 h-6 text-amber-500 mb-2" />
                <span className="text-xs font-bold text-slate-700">Analytics</span>
              </button>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Recent Badges</span>
              </h3>
              <button onClick={() => onNavigate('profile')} className="text-xs font-bold text-indigo-600 hover:text-indigo-700">View All</button>
            </div>
            
            <div className="space-y-3">
              {recentBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl">{badge.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{badge.title}</p>
                    <p className="text-xs text-slate-500">Unlocked</p>
                  </div>
                </div>
              ))}
              {recentBadges.length === 0 && (
                <p className="text-xs text-slate-500">No badges earned yet. Start completing lessons!</p>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
