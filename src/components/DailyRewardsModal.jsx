import React from 'react';
import { X, Gift, Flame, Trophy, Award, Sparkles, Crown } from 'lucide-react';
import { STREAK_REWARDS_GRID } from '../data/dailyRewardsData';

export default function DailyRewardsModal({ 
  userStreak = 1, 
  onClose, 
  onClaimReward 
}) {
  return (
    <div className="modal-backdrop">
      <div className="daily-reward-modal-card">
        <div className="modal-header">
          <div className="header-info">
            <h2 className="modal-title-ml">🎁 Daily Login Rewards & Streak Chests</h2>
            <p className="modal-title-en">Log in daily to claim bonus XP & rewards!</p>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-scroll">
          <div className="streak-hero-box">
            <Flame size={36} color="#ff6b4a" className="flame-animated" />
            <div>
              <h3>{userStreak} Day Active Streak!</h3>
              <p>Keep your daily streak alive to unlock bonus chests.</p>
            </div>
          </div>

          {/* 7-Day Rewards Grid */}
          <div className="streak-grid-container">
            {STREAK_REWARDS_GRID.map((item) => {
              const isClaimed = userStreak >= item.day;
              const isToday = userStreak === item.day;

              return (
                <div 
                  key={item.day} 
                  className={`reward-day-card ${isClaimed ? 'claimed' : 'unclaimed'} ${isToday ? 'today-highlight' : ''}`}
                >
                  <span className="day-badge">DAY {item.day}</span>
                  <div className="reward-icon-wrap">
                    {item.type === 'badge' ? <Crown size={32} color="#f59e0b" /> : item.type === 'chest' ? <Gift size={32} color="#10b981" /> : <Sparkles size={32} color="#6366f1" />}
                  </div>
                  <span className="reward-text">{item.rewardText}</span>
                  
                  {isClaimed ? (
                    <span className="claimed-tag">✅ Claimed</span>
                  ) : (
                    <button onClick={() => onClaimReward(item)} className="btn-claim-reward">
                      Claim Reward
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
