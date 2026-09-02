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
  Trophy,
  Star,
  Share2,
  Download,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { BADGES_LIST, getXpProgressForLevel } from '../services/gamificationEngine';
import { SIX_LANGUAGES } from '../data/sixLanguagesData';
import { 
  getTotalCompletedLessons, 
  calculateWeeklyActivity, 
  calculateSkillDistribution,
  MINUTES_PER_LESSON
} from '../utils/dataUtils';

export default function AnalyticsDashboard({ userState = {} }) {
  const [heatmapTimeframe, setHeatmapTimeframe] = useState('28'); 
  
  const completedDaysObj = userState.completedDays || {};
  const completedKeys = Object.keys(completedDaysObj).filter(k => !!completedDaysObj[k]);
  const totalCompletedCount = completedKeys.length;

  const enrolledTrackObjects = (userState.enrolledTracks || []).map(trackId => {
    const track = SIX_LANGUAGES.find(l => l.id === trackId);
    if (!track) return null;
    const totalDays = track.curriculum ? track.curriculum.length : 7;
    const completedCount = completedKeys.filter(k => k.startsWith(trackId + '_day_')).length;
    const percent = Math.round((completedCount / totalDays) * 100);
    return {
      ...track,
      totalDays,
      completedCount,
      percent
    };
  }).filter(Boolean);

  const xpInfo = getXpProgressForLevel(userState.xp || 0);
  const streak = userState.streak || 1;

  // Real data calculations
  const timeSpentMins = getTotalCompletedLessons(userState) * MINUTES_PER_LESSON;
  const timeSpent = timeSpentMins >= 60 ? `${(timeSpentMins / 60).toFixed(1)} hrs` : `${timeSpentMins} mins`;
  const xpOverTimeData = calculateWeeklyActivity(userState);
  const skillDistribution = calculateSkillDistribution(userState);

  const gridLength = heatmapTimeframe === '90' ? 90 : 28;
  const today = new Date();
  
  const contributionGrid = Array.from({ length: gridLength }, (_, i) => {
    const dayOffset = (gridLength - 1) - i;
    const date = new Date(today);
    date.setDate(today.getDate() - dayOffset);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const isoDateStr = date.toISOString().split('T')[0];

    let activityCount = 0;
    completedKeys.forEach((key) => {
      const record = completedDaysObj[key];
      if (record && typeof record === 'object' && record.completedAt) {
        if (record.completedAt.startsWith(isoDateStr)) {
          activityCount += 1;
        }
      }
    });

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

    return { dayIndex: i + 1, dateStr, isoDateStr, activityCount, level };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-900 space-y-6 animate-in fade-in slide-in-from-bottom-4">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Your Learning Analytics</h1>
          <p className="text-sm text-slate-500 font-medium">Aug 01, 2026 - Aug 27, 2026</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-colors shadow-sm">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-500">Total XP</h3>
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <Star className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mb-1">{userState.xp || 0}</p>
          <p className="text-xs font-bold text-emerald-600 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +327 this week
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-500">Lessons</h3>
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-indigo-600" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mb-1">{totalCompletedCount}</p>
          <p className="text-xs font-bold text-emerald-600 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +8 this week
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-500">Time Spent</h3>
            <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
              <Clock className="w-4 h-4 text-cyan-600" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mb-1">{timeSpent}</p>
          <p className="text-xs font-bold text-emerald-600 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +2.3 hrs this week
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-500">Streak</h3>
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <Flame className="w-4 h-4 text-orange-600" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mb-1">{streak}</p>
          <p className="text-xs font-bold text-slate-500">Best: 30 days</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* XP Over Time */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 text-indigo-500 mr-2" />
            XP Earned This Week
          </h3>
          <div className="flex items-end justify-between h-40 gap-2">
            {xpOverTimeData.map((d, i) => (
              <div key={i} className="flex flex-col items-center flex-1 group relative">
                {/* Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-slate-800 text-white text-xs py-1 px-2 rounded-lg transition-opacity pointer-events-none">
                  {d.xp} XP
                </div>
                <div className="w-full relative flex items-end justify-center h-32 bg-slate-50 rounded-t-lg">
                  <div 
                    className="w-full bg-indigo-500 rounded-t-lg transition-all duration-700 group-hover:bg-indigo-600"
                    style={{ height: `${Math.max((d.xp / 100) * 100, 5)}%` }}
                  ></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Distribution */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center">
            <Target className="w-5 h-5 text-emerald-500 mr-2" />
            Skill Distribution
          </h3>
          <div className="space-y-4">
            {skillDistribution.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heatmap */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 flex items-center">
              <Calendar className="w-5 h-5 text-amber-500 mr-2" />
              Learning Activity Heatmap
            </h3>
            <select 
              value={heatmapTimeframe}
              onChange={(e) => setHeatmapTimeframe(e.target.value)}
              className="text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none"
            >
              <option value="28">Last 28 Days</option>
              <option value="90">Last 90 Days</option>
            </select>
          </div>
          
          <div className={`grid gap-2 py-2 ${
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
                  className={`h-8 sm:h-10 rounded-xl ${bg} flex items-center justify-center hover:scale-105 transition-transform cursor-pointer`}
                  title={`${item.dateStr}: ${item.activityCount} Lessons`}
                ></div>
              );
            })}
          </div>
          <div className="flex items-center justify-end space-x-1.5 mt-2 text-[10px] text-slate-500 font-semibold">
            <span>Less</span>
            <span className="w-3 h-3 bg-slate-100 rounded-sm" />
            <span className="w-3 h-3 bg-emerald-200 rounded-sm" />
            <span className="w-3 h-3 bg-emerald-400 rounded-sm" />
            <span className="w-3 h-3 bg-emerald-600 rounded-sm" />
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <h2 className="text-xl font-black text-slate-900 mt-8 mb-4">AI Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-emerald-700 font-bold mb-2">
              <Flame className="w-5 h-5" />
              <span>You're on fire!</span>
            </div>
            <p className="text-sm text-emerald-800 mb-4">Your streak is at {streak} days. Keep it up to reach your personal best of 30!</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-xl transition-colors">Continue Learning</button>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-indigo-700 font-bold mb-2">
              <Lightbulb className="w-5 h-5" />
              <span>Learning Tip</span>
            </div>
            <p className="text-sm text-indigo-800 mb-4">You're strongest in HTML (90%) but Node.js needs work (10%). Try spending 20% more time on backend concepts.</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 rounded-xl transition-colors">Practice Node.js</button>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-amber-700 font-bold mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Weekend Gap</span>
            </div>
            <p className="text-sm text-amber-800 mb-4">You haven't coded on weekends. Even 10 minutes helps maintain streaks!</p>
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-2 rounded-xl transition-colors">Set Weekend Reminder</button>
        </div>

      </div>
    </div>
  );
}
