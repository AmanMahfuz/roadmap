import React, { useState } from 'react';
import { SIX_LANGUAGES } from '../data/sixLanguagesData';
import CertificateModal from './CertificateModal';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Lock, 
  Play, 
  Star, 
  CheckSquare, 
  Trophy,
  Award
} from 'lucide-react';

export default function LanguageRoadmapView({ 
  languageId, 
  userCompletedDays = {}, 
  onSelectDay, 
  onBackToLanguages,
  currentUser
}) {
  const [showCertificate, setShowCertificate] = useState(false);
  const language = SIX_LANGUAGES.find(l => l.id === languageId) || SIX_LANGUAGES[0];

  // Calculate completed count
  const completedDaysCount = language.days.filter(d => {
    const key = `${language.id}_day_${d.day}`;
    return !!userCompletedDays[key];
  }).length;

  const totalDays = language.days.length;
  const overallPercentage = Math.round((completedDaysCount / totalDays) * 100);

  const handleNodeClick = (dayObj, isUnlocked) => {
    if (!isUnlocked) {
      alert(`🔒 Day ${dayObj.day} is Locked!\n\nPlease complete Day ${dayObj.day - 1} first to unlock this lesson and advance your developer path.`);
      return;
    }
    onSelectDay(dayObj);
  };

  return (
    <div className="roadmap-path-container">
      {/* Top Header Navigation */}
      <div className="roadmap-header-banner" style={{ '--theme-gradient': language.gradient }}>
        <button className="back-to-hub-btn" onClick={onBackToLanguages}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          All Languages
        </button>

        <div className="banner-content">
          <div className="banner-icon-box" style={{ background: language.bgColor }}>
            <span className="text-4xl">{language.icon}</span>
          </div>

          <div className="banner-text">
            <div className="flex items-center space-x-2 mb-1">
              <span className="lang-pill-badge" style={{ color: language.textColor, borderColor: language.color }}>
                {language.badge}
              </span>
              <span className="text-xs text-gray-400 font-medium">{language.difficulty}</span>
            </div>
            <h1 className="banner-title">{language.name} Roadmap</h1>
            <p className="banner-desc">{language.tagline}</p>
          </div>

          <div className="banner-stats">
            <div className="stat-pill">
              <Trophy className="w-4 h-4 text-yellow-400 mr-1.5" />
              <span>{completedDaysCount} / {totalDays} Days Done</span>
            </div>
            <div className="stat-pill">
              <Star className="w-4 h-4 text-amber-400 mr-1.5" />
              <span>{overallPercentage}% Complete</span>
            </div>
            {overallPercentage === 100 && (
              <button 
                onClick={() => setShowCertificate(true)}
                className="stat-pill cursor-pointer hover:scale-105 transition-transform bg-amber-400 text-amber-950 font-bold border-none"
              >
                <Award className="w-4 h-4 mr-1.5" />
                <span>Claim Certificate</span>
              </button>
            )}
          </div>
        </div>

        {/* Global Progress Line */}
        <div className="banner-progress-track">
          <div className="banner-progress-bar" style={{ width: `${overallPercentage}%`, background: language.gradient }} />
        </div>
      </div>

      {showCertificate && (
        <CertificateModal
          skillId={language.id}
          userName={currentUser?.user_metadata?.full_name || currentUser?.email || 'Dev Learner'}
          onClose={() => setShowCertificate(false)}
        />
      )}

      {/* Duolingo Style Path */}
      <div className="path-roadmap-wrapper">
        <div className="path-nodes-list">
          {language.days.map((dayObj, index) => {
            const dayKey = `${language.id}_day_${dayObj.day}`;
            const isCompleted = !!userCompletedDays[dayKey];
            
            // Unlocked if completed OR first day OR previous day completed
            const prevDayKey = `${language.id}_day_${dayObj.day - 1}`;
            const isUnlocked = dayObj.day === 1 || isCompleted || !!userCompletedDays[prevDayKey];
            
            const isCurrent = isUnlocked && !isCompleted;

            // Offset path positions for Duolingo serpentine look
            const offsets = [0, 40, 70, 30, -30, -70, -40];
            const xOffset = offsets[index % offsets.length];

            return (
              <div 
                key={dayObj.day} 
                className={`path-node-row ${isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'}`}
                style={{ transform: `translateX(${xOffset}px)` }}
              >
                {/* Connecting Line */}
                {index < language.days.length - 1 && (
                  <div className={`node-connector ${isCompleted ? 'connector-active' : ''}`} />
                )}

                <button
                  className={`duo-node-btn ${isCompleted ? 'node-done' : isCurrent ? 'node-active' : 'node-disabled'}`}
                  onClick={() => handleNodeClick(dayObj, isUnlocked)}
                  title={isUnlocked ? `Day ${dayObj.day}` : `🔒 Complete Day ${dayObj.day - 1} to unlock`}
                  style={{
                    '--node-accent': language.color
                  }}
                >
                  <div className="node-inner">
                    {isCompleted ? (
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    ) : isUnlocked ? (
                      <Play className="w-7 h-7 text-white fill-current ml-1" />
                    ) : (
                      <Lock className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                  
                  {isCurrent && (
                    <div className="current-pulse-ring" />
                  )}
                </button>

                {/* Node Tooltip Info Card */}
                <div 
                  className={`node-info-card ${isUnlocked ? 'clickable' : 'disabled'}`}
                  onClick={() => handleNodeClick(dayObj, isUnlocked)}
                >
                  <div className="card-unit-label">
                    <span>Day {dayObj.day}</span>
                    <span className="unit-subtitle">{dayObj.unit}</span>
                  </div>
                  <h3 className="card-day-title">{dayObj.title}</h3>
                  <p className="card-day-topic">{dayObj.topic}</p>
                  
                  <div className="card-meta">
                    <span className="meta-badge tasks">
                      <CheckSquare className="w-3.5 h-3.5 mr-1" />
                      {dayObj.tasks.length} Daily Tasks
                    </span>
                    <span className="meta-badge xp">
                      <Star className="w-3.5 h-3.5 mr-1 text-yellow-400 fill-yellow-400" />
                      +200 XP
                    </span>
                    {isCompleted ? (
                      <span className="meta-badge done">
                        Completed
                      </span>
                    ) : !isUnlocked && (
                      <span className="meta-badge locked flex items-center text-slate-400">
                        <Lock className="w-3 h-3 mr-1" /> Locked
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
