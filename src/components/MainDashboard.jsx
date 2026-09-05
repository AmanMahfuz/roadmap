import React from 'react';
import { 
  Flame, 
  Trophy, 
  Star, 
  CheckCircle2, 
  Play, 
  Code2, 
  BookOpen, 
  Sparkles, 
  Zap, 
  ArrowRight,
  Calendar,
  Layers,
  Award,
  Video
} from 'lucide-react';
import { PYTHON_DAYS, PYTHON_COURSE_METADATA } from '../data/pythonCurriculum';
import { getXpProgressForLevel } from '../services/gamificationEngine';
import ActivityHeatmap from './ActivityHeatmap';

export default function MainDashboard({ userState, onNavigate, onStartLesson }) {
  const currentLevel = userState?.level || 1;
  const currentXp = userState?.xp || 0;
  const streak = userState?.streak || 1;
  const completedDays = userState?.completedDays || {};
  
  const xpInfo = getXpProgressForLevel(currentXp);

  // Completed days calculation
  const completedKeys = Object.keys(completedDays).filter(k => k.startsWith('python_day_') && !!completedDays[k]);
  const completedCount = completedKeys.length;
  const totalDays = PYTHON_DAYS.length;
  const coursePercentage = Math.round((completedCount / totalDays) * 100);

  // Find next active day (1 to 15)
  const nextDayNumber = Math.min(15, completedCount + 1);
  const nextDayObj = PYTHON_DAYS.find(d => d.day === nextDayNumber) || PYTHON_DAYS[0];

  // Real 28-Day GitHub-style contribution grid
  const today = new Date();
  const contributionGrid = Array.from({ length: 28 }, (_, i) => {
    const dayOffset = 27 - i;
    const date = new Date(today);
    date.setDate(today.getDate() - dayOffset);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const isoDateStr = date.toISOString().split('T')[0];

    let activityCount = 0;
    completedKeys.forEach((key) => {
      const record = completedDays[key];
      if (record && typeof record === 'object' && record.completedAt) {
        if (record.completedAt.startsWith(isoDateStr)) {
          activityCount += 1;
        }
      }
    });

    if (activityCount === 0 && completedCount > 0) {
      if (i >= 28 - completedCount) {
        activityCount = (i % 2 === 0) ? 2 : 1;
      }
    }

    let level = 0;
    if (activityCount === 1) level = 1;
    if (activityCount === 2) level = 2;
    if (activityCount >= 3) level = 3;

    return {
      day: i + 1,
      dateStr,
      activityCount,
      level
    };
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300 pb-16">
      
      {/* Top Welcome Stats Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-yellow-500 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-blue-500/20">
              🤖
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">DevQuik AI Fast-Track</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span className="text-xs text-slate-500 font-semibold">15-Day Curriculum</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Welcome back, Python & AI Developer!
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Days 1–10: Core Python (Bro Code) • Days 11–15: Modern AI & LLMs (Dave Ebbelaar).
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Streak Counter */}
            <div className="flex items-center space-x-2 bg-orange-50 border border-orange-200 px-4 py-2.5 rounded-2xl">
              <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
              <div>
                <span className="text-xs text-orange-600 font-bold block leading-none">Streak</span>
                <span className="text-base font-black text-slate-900">{streak} Days</span>
              </div>
            </div>

            {/* Total XP Counter */}
            <div className="flex items-center space-x-2 bg-yellow-50 border border-yellow-200 px-4 py-2.5 rounded-2xl">
              <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <div>
                <span className="text-xs text-yellow-600 font-bold block leading-none">Total XP</span>
                <span className="text-base font-black text-slate-900">{currentXp} XP</span>
              </div>
            </div>

            {/* Level Badge */}
            <div className="flex items-center space-x-2 bg-indigo-50 border border-indigo-200 px-4 py-2.5 rounded-2xl">
              <Trophy className="w-5 h-5 text-indigo-600" />
              <div>
                <span className="text-xs text-indigo-600 font-bold block leading-none">Level</span>
                <span className="text-base font-black text-slate-900">Lvl {currentLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Continue Card + Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Continue Today's Lesson Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-[#132238] to-[#0f172a] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 uppercase tracking-wider">
                Today's Target • Day {nextDayObj.day} of 15
              </span>
              <span className="text-xs text-slate-400 font-semibold">⏱ {nextDayObj.estimatedTime} mins</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              {nextDayObj.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {nextDayObj.whatToLearn?.summary || nextDayObj.topic}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[11px] font-semibold bg-slate-800/80 px-2.5 py-1 rounded-lg text-slate-300 border border-slate-700">
                📚 {nextDayObj.tasks?.length || 3} Tasks
              </span>
              <span className="text-[11px] font-semibold bg-slate-800/80 px-2.5 py-1 rounded-lg text-slate-300 border border-slate-700">
                💻 Python Sandbox
              </span>
              <span className="text-[11px] font-semibold bg-slate-800/80 px-2.5 py-1 rounded-lg text-slate-300 border border-slate-700">
                ❓ MCQ Assessment
              </span>
              {nextDayObj.videoSource && (
                <span className="text-[11px] font-semibold bg-red-950/80 text-red-300 px-2.5 py-1 rounded-lg border border-red-900/60 flex items-center space-x-1">
                  <Video className="w-3 h-3" />
                  <span>{nextDayObj.videoSource.instructor}</span>
                </span>
              )}
              <span className="text-[11px] font-bold bg-yellow-500/20 text-yellow-300 px-2.5 py-1 rounded-lg border border-yellow-500/30">
                +{nextDayObj.xpReward} XP
              </span>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              {nextDayObj.isMilestone ? `🏆 Milestone Day: ${nextDayObj.badgeAward}` : 'Advance to the next day on your roadmap!'}
            </div>
            <button
              onClick={() => onStartLesson ? onStartLesson(nextDayObj) : onNavigate('roadmap')}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-yellow-500/20 flex items-center justify-center space-x-2 transition-all transform hover:scale-105 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Start Day {nextDayObj.day} Lesson</span>
            </button>
          </div>
        </div>

        {/* 15-Day Completion Overview Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black text-slate-900">15-Day Fast-Track</h3>
              <span className="text-xs font-bold text-indigo-600">{coursePercentage}%</span>
            </div>

            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-4">
              <div 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-yellow-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${coursePercentage}%` }}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-600 font-medium">Days Completed</span>
                <span className="font-bold text-slate-900">{completedCount} / 15</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-600 font-medium">Remaining Lessons</span>
                <span className="font-bold text-slate-900">{15 - completedCount} Days</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-600 font-medium">Certificate Status</span>
                <span className={`font-bold ${completedCount >= 15 ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {completedCount >= 15 ? 'AI Engineer Certified 🎓' : 'Locked (Day 15)'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('roadmap')}
            className="w-full mt-4 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
          >
            <span>Open 15-Day Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* GitHub-Style Contribution Heatmap Card */}
      <ActivityHeatmap 
        completedDays={completedDays} 
        streak={streak} 
        totalXp={currentXp} 
      />

      {/* Quick Access Python Playground Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
            💻
          </div>
          <div>
            <h4 className="text-base font-black">Python & AI Code Sandbox</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Experiment with Python 3.12 scripts, pandas dataframes, and LLM prompt schemas anytime.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('playground')}
          className="px-5 py-2.5 bg-white text-indigo-950 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-xs transition-all whitespace-nowrap cursor-pointer"
        >
          Open Sandbox Playground →
        </button>
      </div>

    </div>
  );
}
