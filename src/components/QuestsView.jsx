import React from 'react';
import { Target, Sparkles, Flame, Crown, Trophy, Award } from 'lucide-react';

export default function QuestsView({ userState }) {
  const completedDaysCount = Object.keys(userState?.completedDays || {}).length;
  const currentStreak = userState?.streak || 1;
  const currentXp = userState?.xp || 0;

  const QUESTS_DATA = {
    daily: [
      { id: 'd1', title: 'Complete Daily Mission', description: 'Finish today\'s 7-step mission', progress: completedDaysCount > 0 ? 1 : 0, target: 1, xpReward: 100, icon: Sparkles },
      { id: 'd2', title: 'Practice 15 Minutes', description: 'Spend time editing examples or code', progress: completedDaysCount > 0 ? 15 : 0, target: 15, xpReward: 50, icon: Flame }
    ],
    weekly: [
      { id: 'w1', title: 'Build Two Mini Projects', description: 'Complete & verify 2 portfolio mini projects', progress: Math.min(2, completedDaysCount), target: 2, xpReward: 400, icon: Crown },
      { id: 'w2', title: 'Maintain 7-Day Streak', description: 'Log in and code 7 days in a row', progress: Math.min(7, currentStreak), target: 7, xpReward: 300, icon: Flame }
    ],
    monthly: [
      { id: 'm1', title: 'Complete HTML & CSS Roadmap', description: 'Finish all nodes & boss battle in HTML track', progress: Math.min(10, completedDaysCount), target: 10, xpReward: 1000, icon: Award }
    ]
  };

  const COSMETIC_REWARDS = [
    { id: 'c1', title: 'DevQuik Vibrant Light Theme', cost: '0 XP', unlocked: true, icon: '🎨' },
    { id: 'c2', title: 'Cadet Developer Avatar Frame', cost: '500 XP', unlocked: currentXp >= 500, icon: '🥷' },
    { id: 'c3', title: 'Neon Code Syntax Highlighting', cost: '1500 XP', unlocked: currentXp >= 1500, icon: '✨' },
    { id: 'c4', title: 'Golden Streak Flame Badge', cost: '2000 XP', unlocked: currentXp >= 2000, icon: '🔥' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 font-body-md text-on-surface space-y-8 animate-fadeIn text-left">
      
      {/* Header Banner */}
      <div className="p-8 bg-surface border border-outline-variant rounded-2xl shadow-sm space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed text-primary font-mono text-xs font-bold rounded-full uppercase tracking-wider">
          <Target size={14} /> Quests & Milestones
        </div>
        <h1 className="text-3xl font-extrabold font-display-lg text-on-surface">
          Daily, Weekly & Monthly Quests
        </h1>
        <p className="text-xs text-on-surface-variant max-w-2xl">
          Complete challenges to earn XP, unlock cosmetic rewards, and climb developer levels!
        </p>
      </div>

      {/* Daily Quests */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold font-display-lg text-on-surface flex items-center gap-2">
          ⚡ Daily Quests <span className="text-xs font-mono font-bold text-primary">(+100 XP)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QUESTS_DATA.daily.map((quest) => {
            const IconComp = quest.icon;
            const isCompleted = quest.progress >= quest.target;
            const percent = Math.min(100, Math.round((quest.progress / quest.target) * 100));

            return (
              <div key={quest.id} className={`p-5 bg-surface border rounded-2xl flex items-center gap-4 transition-all shadow-sm ${isCompleted ? 'border-primary/40 bg-primary-fixed/20' : 'border-outline-variant'}`}>
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <IconComp size={24} />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-sm text-on-surface">{quest.title}</h4>
                  <p className="text-xs text-on-surface-variant">{quest.description}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex-1 bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${percent}%` }}></div>
                    </div>
                    <span className="font-mono text-xs font-bold text-on-surface">{quest.progress}/{quest.target}</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-amber-500/10 text-amber-600 font-mono font-bold text-xs rounded-full flex items-center gap-1 shrink-0">
                  <Trophy size={14} /> +{quest.xpReward} XP
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Quests */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold font-display-lg text-on-surface flex items-center gap-2">
          👑 Weekly Quests <span className="text-xs font-mono font-bold text-primary">(+400 XP)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QUESTS_DATA.weekly.map((quest) => {
            const IconComp = quest.icon;
            const percent = Math.min(100, Math.round((quest.progress / quest.target) * 100));

            return (
              <div key={quest.id} className="p-5 bg-surface border border-outline-variant rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <IconComp size={24} />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-sm text-on-surface">{quest.title}</h4>
                  <p className="text-xs text-on-surface-variant">{quest.description}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex-1 bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${percent}%` }}></div>
                    </div>
                    <span className="font-mono text-xs font-bold text-on-surface">{quest.progress}/{quest.target}</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-amber-500/10 text-amber-600 font-mono font-bold text-xs rounded-full flex items-center gap-1 shrink-0">
                  <Trophy size={14} /> +{quest.xpReward} XP
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cosmetic Rewards Shop */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold font-display-lg text-on-surface">
          🎁 Cosmetic Rewards Shop
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {COSMETIC_REWARDS.map(reward => (
            <div key={reward.id} className="p-5 bg-surface border border-outline-variant rounded-2xl space-y-2 text-center shadow-sm">
              <div className="text-3xl mb-1">{reward.icon}</div>
              <h4 className="font-bold text-xs text-on-surface">{reward.title}</h4>
              <span className={`inline-block px-3 py-1 rounded-full font-mono text-[10px] font-bold ${reward.unlocked ? 'bg-emerald-500/10 text-emerald-600' : 'bg-surface-container-high text-on-surface-variant'}`}>
                {reward.unlocked ? 'UNLOCKED' : reward.cost}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
