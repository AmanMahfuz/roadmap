import React, { useState } from 'react';
import { RefreshCw, CheckCircle2, HelpCircle, Eye, EyeOff, Brain, Sparkles } from 'lucide-react';
import { FLASHCARD_REVIEWS } from '../data/revisionData';

export default function SpacedRevisionQueue({ 
  userState, 
  onMarkRevised 
}) {
  const [revealedCards, setRevealedCards] = useState({});
  const [langMode, setLangMode] = useState('en');

  // Filter completed lessons that are due for revision
  const completedIds = Object.keys(userState.completedDays);
  const reviewableList = completedIds
    .map(id => FLASHCARD_REVIEWS[id])
    .filter(Boolean);

  const toggleReveal = (id) => {
    setRevealedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="spaced-revision-container">
      <div className="revision-header-card">
        <div className="r-header-left">
          <div className="r-icon-box">
            <Brain size={28} className="brain-glow" />
          </div>
          <div>
            <h3>Spaced Revision Queue</h3>
            <p>Review key concepts at 2, 7, and 14 day intervals for long-term memory retention.</p>
          </div>
        </div>

        <div className="r-memory-score">
          <span className="m-score-num">92%</span>
          <span className="m-score-label">Memory Retention</span>
        </div>
      </div>

      {reviewableList.length === 0 ? (
        <div className="revision-empty-state">
          <Sparkles size={32} color="#10b981" />
          <h4>Your Revision Queue is Clear!</h4>
          <p>Complete daily lessons to automatically queue spaced repetition reviews.</p>
        </div>
      ) : (
        <div className="revision-cards-grid">
          {reviewableList.map(card => {
            const isRevealed = revealedCards[card.lessonId];
            return (
              <div key={card.lessonId} className="flashcard-item-card">
                <div className="card-top-tag">
                  <span className="topic-chip">{card.topic}</span>
                  <span className="interval-chip">2-Day Review Due</span>
                </div>

                <h4 className="card-question">{card.question}</h4>

                {isRevealed && (
                  <div className="card-answer-box">
                    💡 <strong>Answer:</strong> {langMode === 'ml' ? card.answerMl : card.answerEn}
                  </div>
                )}

                <div className="card-action-bar">
                  <button onClick={() => toggleReveal(card.lessonId)} className="btn-secondary-sm">
                    {isRevealed ? <EyeOff size={14} /> : <Eye size={14} />} {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
                  </button>
                  <button onClick={() => onMarkRevised(card.lessonId)} className="btn-primary-sm">
                    <CheckCircle2 size={14} /> Mark Revised
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
