import React, { useState } from 'react';
import { Target, CalendarDays, CheckCircle2, Circle, Clock, Flame, BookOpen, AlertCircle } from 'lucide-react';
import { getLessonsCompletedOnDate, XP_PER_LESSON } from '../utils/dataUtils';
import { SIX_LANGUAGES } from '../data/sixLanguagesData';

export default function GoalsPage({ userState }) {
  const todayIso = new Date().toISOString().split('T')[0];
  const lessonsToday = getLessonsCompletedOnDate(userState, todayIso);
  const xpToday = lessonsToday * XP_PER_LESSON;
  const streak = userState?.streak || 0;
  
  // Calculate Roadmap Progress
  const activeTrackId = userState?.enrolledTracks?.[0];
  let activeTrackProgress = 0;
  if (activeTrackId) {
    const track = SIX_LANGUAGES.find(l => l.id === activeTrackId);
    if (track) {
      const completedDays = userState?.completedDays || {};
      const completedKeys = Object.keys(completedDays).filter(k => !!completedDays[k]);
      const totalDays = track.curriculum ? track.curriculum.length : 7;
      const completedCount = completedKeys.filter(k => k.startsWith(activeTrackId + '_day_')).length;
      activeTrackProgress = Math.round((completedCount / totalDays) * 100);
    }
  }

  const [goals, setGoals] = useState([
    { id: 1, type: 'daily', title: 'Complete 3 Lessons', target: 3, current: lessonsToday, unit: 'lessons', completed: lessonsToday >= 3 },
    { id: 2, type: 'daily', title: 'Earn 100 XP', target: 100, current: xpToday, unit: 'XP', completed: xpToday >= 100 },
    { id: 3, type: 'weekly', title: 'Maintain 7-day Streak', target: 7, current: streak, unit: 'days', completed: streak >= 7 },
    { id: 4, type: 'weekly', title: 'Finish HTML Module', target: 1, current: 0, unit: 'module', completed: false }, // Still mock
    { id: 5, type: 'roadmap', title: 'Master Current Roadmap', target: 100, current: activeTrackProgress, unit: '%', completed: activeTrackProgress >= 100 }
  ]);

  const completedGoalsCount = goals.filter(g => g.completed).length;
  const totalGoalsCount = goals.length;
  const overallGoalProgress = Math.round((completedGoalsCount / totalGoalsCount) * 100);
  
  const completedDaily = goals.filter(g => g.type === 'daily' && g.completed).length;
  const totalDaily = goals.filter(g => g.type === 'daily').length;
  
  const completedWeekly = goals.filter(g => g.type === 'weekly' && g.completed).length;
  const totalWeekly = goals.filter(g => g.type === 'weekly').length;

  const toggleGoal = (id) => {
    setGoals(goals.map(g => {
      if (g.id === id) {
        return { ...g, completed: !g.completed, current: !g.completed ? g.target : 0 };
      }
      return g;
    }));
  };

  const renderGoalList = (type, title, icon, colorClass, bgClass) => {
    const filteredGoals = goals.filter(g => g.type === type);
    
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className={`px-6 py-4 border-b border-slate-100 flex items-center ${bgClass}`}>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${colorClass} bg-white shadow-sm`}>
            {icon}
          </div>
          <h2 className="text-lg font-black text-slate-800">{title}</h2>
        </div>
        
        <div className="p-2">
          {filteredGoals.map((goal) => (
            <div 
              key={goal.id} 
              className={`flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer ${
                goal.completed ? 'bg-slate-50 opacity-75' : 'hover:bg-slate-50'
              }`}
              onClick={() => toggleGoal(goal.id)}
            >
              <div className="flex items-center space-x-4">
                <button className={`flex-shrink-0 transition-colors ${goal.completed ? 'text-emerald-500' : 'text-slate-300 hover:text-indigo-400'}`}>
                  {goal.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                </button>
                <div>
                  <h3 className={`font-bold text-sm ${goal.completed ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                    {goal.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {goal.current} / {goal.target} {goal.unit}
                  </p>
                </div>
              </div>
              
              {!goal.completed && goal.current > 0 && (
                <div className="hidden sm:block w-32">
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-500 rounded-full transition-all"
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-900 space-y-6 animate-in fade-in slide-in-from-bottom-4">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
            <Target className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900">Your Goals</h1>
            <p className="text-sm text-slate-500 font-medium">Track your daily, weekly, and long-term targets</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition-colors shadow-sm">
          + Set New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Goals Area */}
        <div className="lg:col-span-2 space-y-6">
          {renderGoalList('daily', 'Daily Goals', <Clock className="w-4 h-4" />, 'text-amber-500', 'bg-amber-50/50')}
          {renderGoalList('weekly', 'Weekly Targets', <CalendarDays className="w-4 h-4" />, 'text-indigo-500', 'bg-indigo-50/50')}
          {renderGoalList('roadmap', 'Roadmap Milestones', <BookOpen className="w-4 h-4" />, 'text-emerald-500', 'bg-emerald-50/50')}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* Goal Summary */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl shadow-sm p-6 text-white">
            <h3 className="font-bold text-indigo-100 mb-4">Goal Progress</h3>
            <div className="flex items-end space-x-2 mb-2">
              <span className="text-5xl font-black">{overallGoalProgress}%</span>
            </div>
            <p className="text-sm text-indigo-200 mb-6">of all goals completed this week</p>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-indigo-100">Daily</span>
                <span className="font-bold text-white">{completedDaily}/{totalDaily}</span>
              </div>
              <div className="w-full h-1.5 bg-indigo-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${(completedDaily/totalDaily)*100}%` }}></div>
              </div>
              
              <div className="flex justify-between text-sm pt-2">
                <span className="text-indigo-100">Weekly</span>
                <span className="font-bold text-white">{completedWeekly}/{totalWeekly}</span>
              </div>
              <div className="w-full h-1.5 bg-indigo-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${(completedWeekly/totalWeekly)*100}%` }}></div>
              </div>
            </div>
          </div>

          {/* Reminders Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
              Reminders
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <Flame className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-800">Streak at risk!</p>
                  <p className="text-xs text-slate-500 mt-1">Complete a lesson in the next 4 hours to keep your 4-day streak alive.</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              Manage Reminders
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
