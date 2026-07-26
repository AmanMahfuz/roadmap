import React from 'react';
import { X, BookOpen, Crown, CheckCircle2, Lock, PlayCircle, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { DUOLINGO_UNITS } from '../data/duolingoCurriculum';

export default function UnitOverviewModal({ 
  unitId = 'unit-1', 
  userState, 
  onClose, 
  onSelectLesson, 
  onOpenGuidebook, 
  onOpenBoss 
}) {
  const unit = DUOLINGO_UNITS.find(u => u.id === unitId) || DUOLINGO_UNITS[0];
  const completedCount = unit.lessons.filter(l => userState.completedDays[l.id]).length;
  const percent = Math.round((completedCount / unit.lessons.length) * 100);

  return (
    <div className="modal-backdrop">
      <div className="day-modal-card unit-overview-modal">
        {/* Header */}
        <div className="modal-header">
          <div className="header-info">
            <span className="modal-day-chip"><Layers size={14} /> UNIT OVERVIEW</span>
            <h2 className="modal-title-ml">{unit.title}</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-scroll">
          {/* Unit Hero Card */}
          <div className="unit-hero-card" style={{ borderLeftColor: unit.color }}>
            <p>{unit.subtitle}</p>
            <div className="unit-progress-bar-row">
              <span>Unit Completion: {completedCount}/{unit.lessons.length} Lessons</span>
              <span className="percent-tag">{percent}%</span>
            </div>
            <div className="unit-progress-track">
              <div className="unit-progress-fill" style={{ width: `${percent}%`, backgroundColor: unit.color }}></div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="unit-actions-row">
            <button onClick={() => onOpenGuidebook(unit.id)} className="btn-secondary-sm">
              <BookOpen size={16} /> Open Unit Guidebook
            </button>
            <button onClick={() => onOpenBoss(unit.skillId)} className="btn-primary-sm">
              <Crown size={16} /> Boss Challenge
            </button>
          </div>

          {/* Lesson Ladder */}
          <div className="unit-ladder-section">
            <h4>📋 Unit Lesson Ladder:</h4>
            <div className="ladder-list">
              {unit.lessons.map((lesson, idx) => {
                const isCompleted = !!userState.completedDays[lesson.id];
                const isPrevDone = idx === 0 || !!userState.completedDays[unit.lessons[idx - 1].id];
                const isUnlocked = isCompleted || isPrevDone;

                return (
                  <div 
                    key={lesson.id} 
                    className={`ladder-item-row ${isCompleted ? 'completed' : isUnlocked ? 'unlocked' : 'locked'}`}
                    onClick={() => isUnlocked && onSelectLesson(lesson)}
                  >
                    <div className="ladder-icon">
                      {isCompleted ? <CheckCircle2 size={20} color="#10b981" /> : isUnlocked ? <PlayCircle size={20} color="#6366f1" /> : <Lock size={18} color="#64748b" />}
                    </div>
                    <div className="ladder-info">
                      <h5>{lesson.title}</h5>
                      <p>{lesson.objective}</p>
                    </div>
                    <div className="ladder-xp">
                      +{lesson.xpReward || 20} XP
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
