import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Lock, 
  PlayCircle, 
  Crown, 
  Search, 
  Sparkles, 
  BookOpen, 
  Zap,
  Server,
  Terminal,
  Layers,
  ChevronRight
} from 'lucide-react';
import { UPCOMING_SKILLS } from '../data/roadmapsData';

const UPCOMING_ICON_MAP = {
  Server,
  Terminal,
  Layers
};

export default function RoadmapTimeline({ 
  skill, 
  days, 
  completedDays, 
  onSelectDay 
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const completedCount = days.filter(day => completedDays[day.id]).length;
  const progressPercent = Math.round((completedCount / days.length) * 100);

  const filteredDays = days.filter(day => 
    day.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (day.titleMl && day.titleMl.toLowerCase().includes(searchQuery.toLowerCase())) ||
    day.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="roadmap-container">
      {/* Skill Banner */}
      <div className="skill-banner-card" style={{ '--skill-accent': skill.accentColor }}>
        <div className="banner-content">
          <div className="banner-badge">{skill.categoryTag}</div>
          <h2 className="banner-title">{skill.name} <span className="banner-sub">Roadmap</span></h2>
          <p className="banner-desc">{skill.description}</p>
          
          {/* Skill Overall Progress Bar */}
          <div className="overall-progress-wrapper">
            <div className="progress-text-row">
              <span>Progress: {completedCount} / {days.length} Days Completed</span>
              <span className="progress-percent-badge">{progressPercent}%</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill-glow" 
                style={{ width: `${progressPercent}%`, backgroundColor: skill.accentColor }}
              ></div>
            </div>
          </div>
        </div>

        <div className="banner-search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Gamified Timeline Path */}
      <div className="timeline-quest-map">
        <div className="timeline-vertical-line" style={{ '--line-color': skill.color }}></div>

        {filteredDays.map((day, index) => {
          const isCompleted = !!completedDays[day.id];
          const isPrevCompleted = index === 0 || !!completedDays[days[index - 1].id];
          const isUnlocked = isCompleted || isPrevCompleted;
          const isBoss = day.dayNumber === days.length;
          const isCurrentActive = isUnlocked && !isCompleted;

          return (
            <div 
              key={day.id} 
              className={`quest-node-wrapper ${isCompleted ? 'state-completed' : isCurrentActive ? 'state-current' : 'state-locked'} ${isBoss ? 'boss-node' : ''}`}
            >
              {/* Connector Point */}
              <div 
                className="node-status-indicator" 
                style={{ '--node-color': isUnlocked ? skill.accentColor : '#475569' }}
              >
                {isCompleted ? (
                  <CheckCircle2 className="icon-check" size={24} />
                ) : isBoss ? (
                  <Crown className="icon-crown" size={24} />
                ) : isUnlocked ? (
                  <PlayCircle className="icon-play" size={24} />
                ) : (
                  <Lock className="icon-lock" size={20} />
                )}
              </div>

              {/* Day Card */}
              <div 
                className={`quest-day-card ${isUnlocked ? 'interactive' : 'disabled'}`}
                onClick={() => isUnlocked && onSelectDay(day)}
              >
                <div className="card-header-row">
                  <span className="day-number-tag" style={{ backgroundColor: isUnlocked ? skill.color : '#334155' }}>
                    DAY {day.dayNumber}
                  </span>
                  <div className="card-xp-badge">
                    <Zap size={14} />
                    <span>+{day.xp} XP</span>
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="day-title">{day.title}</h3>
                  <p className="day-summary">{day.summary}</p>
                </div>

                <div className="card-footer">
                  <div className="yt-channel-tag">
                    <BookOpen size={14} />
                    <span>{day.youtubeChannel}</span>
                  </div>

                  <div className="action-link">
                    {isCompleted ? (
                      <span className="text-completed">Review Lesson <ChevronRight size={16} /></span>
                    ) : isUnlocked ? (
                      <span className="text-start">Start Mission <ChevronRight size={16} /></span>
                    ) : (
                      <span className="text-locked">Locked <Lock size={14} /></span>
                    )}
                  </div>
                </div>

                {isCurrentActive && (
                  <div className="current-active-ribbon">
                    <Sparkles size={14} /> Today's Mission
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Expansion Skills */}
      <section className="upcoming-skills-section">
        <h3 className="section-title">
          <Sparkles className="sparkle-gold" size={20} /> Upcoming Courses (Coming Soon)
        </h3>
        <div className="upcoming-cards-grid">
          {UPCOMING_SKILLS.map((item) => {
            const IconComp = UPCOMING_ICON_MAP[item.icon] || Server;
            return (
              <div key={item.id} className="upcoming-card">
                <div className="upcoming-icon" style={{ backgroundColor: item.color + '22', color: item.color }}>
                  <IconComp size={24} />
                </div>
                <div className="upcoming-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="soon-badge">Coming Soon</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
