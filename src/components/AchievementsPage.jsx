import React from 'react';
import { Award, Lock, CheckCircle2 } from 'lucide-react';
import { BADGES_LIST } from '../services/gamificationEngine';

export default function AchievementsPage({ userState }) {
  const unlockedBadges = userState?.unlockedBadges || ['badge_first_step'];
  const totalBadges = BADGES_LIST.length;
  const completionPercent = Math.round((unlockedBadges.length / totalBadges) * 100);

  // Categorize badges (mock categorization based on ID or simple split)
  const learningMilestones = BADGES_LIST.slice(0, 4);
  const skillMastery = BADGES_LIST.slice(4, 8);
  const bossBattles = BADGES_LIST.slice(8);

  const renderBadge = (badge) => {
    const isUnlocked = unlockedBadges.includes(badge.id);
    return (
      <div 
        key={badge.id}
        className={`relative p-5 rounded-3xl border-2 transition-all flex flex-col items-center text-center ${
          isUnlocked 
            ? 'bg-amber-50/50 border-amber-200 hover:border-amber-400 hover:shadow-md' 
            : 'bg-slate-50 border-slate-100 opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
        }`}
      >
        {!isUnlocked && (
          <div className="absolute top-3 right-3 text-slate-300">
            <Lock className="w-4 h-4" />
          </div>
        )}
        {isUnlocked && (
          <div className="absolute top-3 right-3 text-amber-500">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        )}
        <div className="text-4xl mb-3 filter drop-shadow-sm">{badge.icon}</div>
        <h4 className={`font-black text-sm mb-1 ${isUnlocked ? 'text-slate-900' : 'text-slate-500'}`}>
          {badge.title}
        </h4>
        <p className="text-xs text-slate-500 line-clamp-2">
          {badge.description}
        </p>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-900 space-y-8 animate-in fade-in slide-in-from-bottom-4">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 mb-1">Achievements</h1>
            <p className="text-sm text-slate-500 font-medium">Earn badges by completing challenges and maintaining streaks</p>
          </div>
        </div>
        <div className="w-full md:w-64">
          <div className="flex justify-between text-sm font-bold mb-2">
            <span className="text-slate-700">Completion</span>
            <span className="text-amber-600">{unlockedBadges.length} / {totalBadges}</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-1000"
              style={{ width: `${completionPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        
        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center">
            <span className="mr-2">🎯</span> Learning Milestones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {learningMilestones.map(renderBadge)}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center">
            <span className="mr-2">🧠</span> Skill Mastery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillMastery.map(renderBadge)}
          </div>
        </section>

        {bossBattles.length > 0 && (
          <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center">
              <span className="mr-2">⚔️</span> Boss Battles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bossBattles.map(renderBadge)}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
