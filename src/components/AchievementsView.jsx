import React from 'react';
import { Award, Flame, CheckCircle2, Trophy, Star, Crown, Zap, ShieldCheck, Lock } from 'lucide-react';

export default function AchievementsView({ userState }) {
  const completedLessons = Object.keys(userState.completedDays).length;

  const milestoneCards = [
    {
      id: 'm1',
      title: '7-Day Streak Master',
      desc: 'Maintain a 7-day daily learning streak',
      unlocked: userState.streak >= 7,
      progress: Math.min(7, userState.streak),
      target: 7,
      icon: Flame
    },
    {
      id: 'm2',
      title: '30 Micro-Lessons Done',
      desc: 'Complete 30 guided interactive lessons',
      unlocked: completedLessons >= 30,
      progress: Math.min(30, completedLessons),
      target: 30,
      icon: CheckCircle2
    },
    {
      id: 'm3',
      title: 'HTML & CSS Master',
      desc: 'Conquer Unit 1 & Unit 2 Boss Challenges',
      unlocked: userState.completedDays['html-day-7'] || completedLessons >= 5,
      progress: completedLessons >= 5 ? 1 : 0,
      target: 1,
      icon: Crown
    },
    {
      id: 'm4',
      title: 'Perfect Score Streak',
      desc: 'Get 100% accuracy on 5 micro challenges',
      unlocked: completedLessons >= 3,
      progress: Math.min(5, completedLessons),
      target: 5,
      icon: Star
    }
  ];

  return (
    <div className="achievements-view-container">
      <div className="achievements-hero-header">
        <div className="hero-tag"><Award size={16} /> Motivational Badges</div>
        <h2>Achievements & Milestones</h2>
        <p>Celebrate your consistency, mastered skills, and milestone streaks!</p>
      </div>

      {/* Milestones Section */}
      <div className="achievements-section">
        <h3>🏆 Milestone Challenges</h3>
        <div className="milestones-grid">
          {milestoneCards.map((m) => {
            const IconComp = m.icon;
            const percent = Math.round((m.progress / m.target) * 100);

            return (
              <div key={m.id} className={`milestone-card ${m.unlocked ? 'unlocked' : 'locked'}`}>
                <div className="m-icon-box">
                  <IconComp size={24} />
                  {m.unlocked ? <CheckCircle2 size={16} className="check-corner" /> : <Lock size={16} className="lock-corner" />}
                </div>

                <div className="m-info">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                  
                  <div className="m-progress-row">
                    <div className="m-progress-bar">
                      <div className="m-progress-fill" style={{ width: `${percent}%` }}></div>
                    </div>
                    <span className="m-count">{m.progress} / {m.target}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges Collection Grid */}
      <div className="achievements-section">
        <h3>🎖️ Unlocked Skill Badges</h3>
        <div className="badges-grid-container">
          {userState.badges.map((badge) => (
            <div key={badge.id} className={`badge-item-box ${badge.unlocked ? 'unlocked' : 'locked'}`}>
              <Award size={32} color={badge.unlocked ? '#f59e0b' : '#64748b'} />
              <h4>{badge.name}</h4>
              <p>{badge.description}</p>
              {badge.unlocked ? <span className="badge-status-tag">Unlocked</span> : <span className="badge-status-tag locked">Locked</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
