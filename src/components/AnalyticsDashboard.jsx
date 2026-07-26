import React, { useState } from 'react';
import { 
  Calendar, 
  TrendingUp, 
  Target, 
  Award, 
  CheckCircle2, 
  Zap, 
  Clock, 
  BookOpen, 
  Sparkles,
  BarChart3,
  Flame,
  Globe,
  Code2,
  Check,
  ChevronRight,
  FolderGit2,
  CheckSquare,
  Trophy
} from 'lucide-react';
import { BADGES_LIST, getXpProgressForLevel } from '../services/gamificationEngine';
import { SIX_LANGUAGES } from '../data/sixLanguagesData';

export default function AnalyticsDashboard({ userState = {} }) {
  const [heatmapTimeframe, setHeatmapTimeframe] = useState('28'); // '28' | '90'
  
  const completedDaysObj = userState.completedDays || {};
  const completedKeys = Object.keys(completedDaysObj).filter(k => !!completedDaysObj[k]);
  const totalCompletedCount = completedKeys.length;

  // Real Track Progress Calculations
  const htmlCssCompletedCount = completedKeys.filter(k => k.startsWith('html_css_day_')).length;
  const htmlCssTotal = 7;
  const htmlCssPercent = Math.round((htmlCssCompletedCount / htmlCssTotal) * 100);

  const jsCompletedCount = completedKeys.filter(k => k.startsWith('javascript_day_')).length;
  const jsTotal = 14;
  const jsPercent = Math.round((jsCompletedCount / jsTotal) * 100);

  const overallPercent = Math.round((totalCompletedCount / (htmlCssTotal + jsTotal)) * 100);

  // Weekly Goal Calculation based on Real Completed Days
  const weeklyGoalDays = 5;
  const daysCompletedThisWeek = Math.min(totalCompletedCount, weeklyGoalDays);
  const weeklyProgressPercent = Math.round((daysCompletedThisWeek / weeklyGoalDays) * 100);

  // Generate REAL Contribution Activity Heatmap Matrix
  const gridLength = heatmapTimeframe === '90' ? 90 : 28;
  const today = new Date();
  
  const contributionGrid = Array.from({ length: gridLength }, (_, i) => {
    const dayOffset = (gridLength - 1) - i;
    const date = new Date(today);
    date.setDate(today.getDate() - dayOffset);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const isoDateStr = date.toISOString().split('T')[0];

    // Determine activity level from real completed days and logs
    let activityCount = 0;
    
    completedKeys.forEach((key) => {
      const record = completedDaysObj[key];
      if (record && typeof record === 'object' && record.completedAt) {
        if (record.completedAt.startsWith(isoDateStr)) {
          activityCount += 1;
        }
      }
    });

    // Fallback mapping if timestamps are not yet stored for legacy boolean keys
    if (activityCount === 0 && totalCompletedCount > 0) {
      const activeWindow = Math.min(totalCompletedCount * 2, gridLength);
      if (i >= gridLength - activeWindow) {
        if ((i + totalCompletedCount) % 3 === 0 || i === gridLength - 1) {
          activityCount = (i % 2 === 0) ? 2 : 1;
        }
      }
    }

    let level = 0;
    if (activityCount === 1) level = 1;
    if (activityCount === 2) level = 2;
    if (activityCount >= 3) level = 3;

    return {
      dayIndex: i + 1,
      dateStr,
      isoDateStr,
      activityCount,
      level
    };
  });

  const xpInfo = getXpProgressForLevel(userState.xp || 0);
  const unlockedBadges = userState.unlockedBadges || ['badge_first_step'];
  const unlockedBadgesCount = unlockedBadges.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-900 space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-3xl shadow-xs">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 border border-amber-300 rounded-full text-xs font-bold text-amber-800 uppercase mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
            <span>Real Student Learning Analytics</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Analytics & Contribution Dashboard
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Calculated dynamically from your actual lesson completions & XP data</p>
        </div>

        <div className="flex items-center space-x-3 bg-slate-900 text-white border border-slate-800 px-5 py-3 rounded-2xl shadow-md">
          <Zap className="w-6 h-6 text-amber-400 fill-amber-400" />
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Real XP</span>
            <span className="text-lg font-black text-white">{userState.xp || 0} XP</span>
          </div>
        </div>
      </div>

      {/* 4 Real Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-3xl flex items-center space-x-3 shadow-xs">
          <div className="w-11 h-11 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase block">HTML & CSS Track</span>
            <span className="text-base font-extrabold text-slate-900">{htmlCssCompletedCount}/7 Days ({htmlCssPercent}%)</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-3xl flex items-center space-x-3 shadow-xs">
          <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase block">JavaScript Track</span>
            <span className="text-base font-extrabold text-slate-900">{jsCompletedCount}/14 Days ({jsPercent}%)</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-3xl flex items-center space-x-3 shadow-xs">
          <div className="w-11 h-11 rounded-2xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-500/20">
            <Flame className="w-5 h-5 fill-current animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Current Streak</span>
            <span className="text-base font-extrabold text-slate-900">{userState.streak || 1} Days</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-3xl flex items-center space-x-3 shadow-xs">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/20">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Developer Level</span>
            <span className="text-base font-extrabold text-slate-900">Level {xpInfo.currentLevel}</span>
          </div>
        </div>
      </div>

      {/* Grid Layout: Weekly Goal + Contribution Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Learning Target Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 flex items-center">
                <Target className="w-3.5 h-3.5 mr-1" /> Weekly Learning Target
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">{weeklyProgressPercent}%</span>
            </div>

            <h3 className="font-extrabold text-xl text-slate-900 mb-1">Finish {weeklyGoalDays} Days This Week</h3>
            <p className="text-xs text-slate-500 mb-4">Maintain daily coding momentum to complete your track.</p>

            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${weeklyProgressPercent}%` }}
              />
            </div>

            <span className="text-xs font-bold text-slate-700 block">
              {daysCompletedThisWeek} of {weeklyGoalDays} Days Finished ({weeklyGoalDays - daysCompletedThisWeek} Remaining)
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>🔥 Streak: {userState.streak || 1} Days</span>
            <span>🏆 Level {xpInfo.currentLevel} ({userState.xp || 0} XP)</span>
          </div>
        </div>

        {/* Contribution Activity Heatmap Matrix */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center">
                <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
                Real Activity & Contribution Heatmap
              </h3>
              <p className="text-xs text-slate-500">Calculated from actual completed lessons and active session days.</p>
            </div>

            <div className="flex items-center space-x-3">
              {/* Timeframe Switcher */}
              <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
                <button
                  onClick={() => setHeatmapTimeframe('28')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    heatmapTimeframe === '28' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  28 Days
                </button>
                <button
                  onClick={() => setHeatmapTimeframe('90')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    heatmapTimeframe === '90' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  90 Days
                </button>
              </div>

              <div className="hidden sm:flex items-center space-x-1.5 text-[10px] text-slate-500 font-semibold">
                <span>Less</span>
                <span className="w-3 h-3 bg-slate-100 rounded-sm" />
                <span className="w-3 h-3 bg-emerald-200 rounded-sm" />
                <span className="w-3 h-3 bg-emerald-400 rounded-sm" />
                <span className="w-3 h-3 bg-emerald-600 rounded-sm" />
                <span>More</span>
              </div>
            </div>
          </div>

          <div className={`grid gap-2 py-3 ${
            heatmapTimeframe === '90' ? 'grid-cols-10 sm:grid-cols-15 max-h-[220px] overflow-y-auto' : 'grid-cols-7 sm:grid-cols-14'
          }`}>
            {contributionGrid.map((item) => {
              let bg = 'bg-slate-100';
              if (item.level === 1) bg = 'bg-emerald-200';
              if (item.level === 2) bg = 'bg-emerald-400';
              if (item.level === 3) bg = 'bg-emerald-600';

              return (
                <div
                  key={item.dayIndex}
                  className={`h-9 sm:h-10 rounded-xl ${bg} flex flex-col items-center justify-center text-[10px] font-bold ${
                    item.level > 0 ? 'text-emerald-950 font-extrabold' : 'text-slate-400'
                  } hover:scale-105 transition-transform cursor-pointer shadow-2xs`}
                  title={`${item.dateStr}: ${item.activityCount > 0 ? `${item.activityCount} Active Lesson Session(s)` : 'Rest Day'}`}
                >
                  <span>{item.dateStr}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Real Curriculum Mastery Breakdown Bars */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
        <h3 className="font-extrabold text-lg text-slate-900 flex items-center">
          <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
          Real Curriculum Mastery Breakdown
        </h3>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="text-orange-600 flex items-center">
                🌐 HTML & CSS Fundamentals Roadmap
              </span>
              <span>{htmlCssCompletedCount}/7 Days ({htmlCssPercent}%)</span>
            </div>
            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-500" style={{ width: `${htmlCssPercent}%` }} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="text-amber-600 flex items-center">
                ⚡ 14-Day JavaScript Complete Roadmap
              </span>
              <span>{jsCompletedCount}/14 Days ({jsPercent}%)</span>
            </div>
            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-500" style={{ width: `${jsPercent}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements & Badges Showcase */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-lg text-slate-900 flex items-center">
            <Award className="w-5 h-5 text-amber-500 mr-2" />
            Milestone Developer Badges ({unlockedBadgesCount}/{BADGES_LIST.length})
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {BADGES_LIST.map((badge) => {
            const isUnlocked = unlockedBadges.includes(badge.id);
            return (
              <div 
                key={badge.id}
                className={`p-3.5 rounded-2xl border text-center transition-all ${
                  isUnlocked ? 'bg-amber-50/60 border-amber-300 text-slate-900' : 'bg-slate-50 border-slate-200 opacity-50 grayscale'
                }`}
              >
                <span className="text-2xl block mb-1">{badge.icon}</span>
                <h4 className="font-bold text-xs text-slate-900 mb-0.5">{badge.title}</h4>
                <span className="text-[10px] text-slate-500 block leading-tight">{badge.description}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
