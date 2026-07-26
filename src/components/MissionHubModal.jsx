import React, { useState } from 'react';
import { 
  X, 
  Play, 
  FileText, 
  HelpCircle, 
  Code, 
  CheckCircle2, 
  Zap, 
  Award, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  AlertTriangle,
  Target,
  Clock,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import AdvancedPlayground from './AdvancedPlayground';
import LanguageToggle from './LanguageToggle';

export default function MissionHubModal({ 
  day, 
  isCompleted, 
  onClose, 
  onCompleteDay 
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [langMode, setLangMode] = useState('ml'); // 'ml' for Malayalam Concept, 'en' for English Code Meaning
  const [stepCompleted, setStepCompleted] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [checkedCheckpoints, setCheckedCheckpoints] = useState({});

  const toggleCheckpoint = (idx) => {
    setCheckedCheckpoints(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const markStepDone = (stepNum) => {
    setStepCompleted(prev => ({ ...prev, [stepNum]: true }));
  };

  const handleFinishMission = () => {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    onCompleteDay(day);
  };

  const stepsList = [
    { num: 1, title: 'Day Goal & Video', xp: 20, icon: Play },
    { num: 2, title: 'Learn & Vocabulary', xp: 20, icon: FileText },
    { num: 3, title: 'Guided Practice & Mistakes', xp: 30, icon: AlertTriangle },
    { num: 4, title: 'Build Artifact & Checkpoints', xp: 50, icon: Code },
    { num: 5, title: 'Reflection & Revision', xp: 20, icon: Sparkles }
  ];

  const defaultCheckpoints = day.checkpoints || [
    'Syntactically valid tags and boilerplate included',
    'Proper nesting and formatting applied',
    'Code executes cleanly in live preview sandbox'
  ];

  return (
    <div className="modal-backdrop">
      <div className="day-modal-card mission-modal-large">
        {/* Header */}
        <div className="modal-header">
          <div className="header-info">
            <div className="modal-meta-row">
              <span className="modal-day-chip">DAY {day.dayNumber}</span>
              <span className="meta-diff-chip">{day.difficulty || 'Beginner'}</span>
              <span className="meta-time-chip"><Clock size={12} /> {day.effortMins || 20} Mins</span>
            </div>
            <h2 className="modal-title-ml">{day.title}</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        {/* Stepper Bar */}
        <div className="mission-stepper-bar">
          {stepsList.map(step => {
            const IconComp = step.icon;
            const isActive = currentStep === step.num;
            const isDone = stepCompleted[step.num];

            return (
              <button
                key={step.num}
                onClick={() => setCurrentStep(step.num)}
                className={`stepper-step ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
              >
                <div className="step-num-icon">
                  {isDone ? <CheckCircle2 size={16} /> : <IconComp size={16} />}
                </div>
                <div className="step-info-col">
                  <span className="step-title">{step.title}</span>
                  <span className="step-xp">+{step.xp} XP</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Body Content */}
        <div className="modal-body-scroll">
          {/* STEP 1: DAY GOAL & VIDEO */}
          {currentStep === 1 && (
            <div className="mission-pane">
              <div className="day-goal-banner">
                <div className="goal-icon-box"><Target size={24} color="#6366f1" /></div>
                <div>
                  <h4>Today's Outcome Goal:</h4>
                  <p>{day.dayGoal || day.summary}</p>
                </div>
              </div>

              <div className="video-player-container">
                <iframe
                  title={day.youtubeTitle}
                  src={`https://www.youtube.com/embed/${day.youtubeId}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="step-action-footer">
                <a 
                  href={`https://www.youtube.com/watch?v=${day.youtubeId}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="yt-external-link"
                >
                  Watch on YouTube <ExternalLink size={14} />
                </a>
                <button 
                  onClick={() => { markStepDone(1); setCurrentStep(2); }} 
                  className="btn-step-next"
                >
                  Proceed to Vocabulary & Notes ➔ (+20 XP)
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: LEARN & LINE-LEVEL LANGUAGE TOGGLE */}
          {currentStep === 2 && (
            <div className="mission-pane">
              <div className="pane-intro-flex">
                <h3>📝 Step 2: Key Concepts & Code Vocabulary</h3>
                <LanguageToggle langMode={langMode} onToggleLang={setLangMode} />
              </div>

              <div className="notes-rendered-box">
                {langMode === 'ml' ? (
                  <div dangerouslySetInnerHTML={{ __html: formatNotesMarkdown(day.notes) }} />
                ) : (
                  <div className="english-code-meaning-box">
                    <h4>💡 Code Syntax & Line-by-Line Meaning (English):</h4>
                    <p>{day.summary}</p>
                    <pre><code>{day.codingTask ? day.codingTask.starterCode : 'HTML5 Syntax Standard'}</code></pre>
                  </div>
                )}
              </div>

              <div className="step-action-footer">
                <button 
                  onClick={() => { markStepDone(2); setCurrentStep(3); }} 
                  className="btn-step-next"
                >
                  Proceed to Guided Practice & Mistakes ➔ (+20 XP)
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: GUIDED PRACTICE & COMMON MISTAKES */}
          {currentStep === 3 && (
            <div className="mission-pane">
              <div className="pane-intro">
                <h3>⚠️ Step 3: Guided Practice & Common Mistakes Gotchas</h3>
                <p>Learn common developer bugs to avoid before building your mini artifact.</p>
              </div>

              <div className="common-mistakes-box">
                <h4>🛑 Common Mistakes & Debugging Gotchas:</h4>
                <ul>
                  <li>Forgetting closing tags (e.g. <code>&lt;/p&gt;</code>, <code>&lt;/div&gt;</code>)</li>
                  <li>Using <code>class</code> instead of <code>className</code> in React JSX</li>
                  <li>Incorrect case sensitivity in CSS selectors and variable names</li>
                </ul>
              </div>

              <div className="quiz-questions-list">
                {day.quiz.map((q, qIndex) => (
                  <div key={qIndex} className="quiz-question-card">
                    <h4 className="q-text">Q{qIndex + 1}. {q.question}</h4>
                    <div className="q-options-grid">
                      {q.options.map((opt, optIndex) => {
                        const isSelected = selectedAnswers[qIndex] === optIndex;
                        const isCorrect = q.correct === optIndex;
                        let optionClass = 'quiz-opt';
                        if (isSelected) optionClass += ' selected';
                        if (quizSubmitted) {
                          if (isCorrect) optionClass += ' correct';
                          else if (isSelected && !isCorrect) optionClass += ' wrong';
                        }
                        return (
                          <button
                            key={optIndex}
                            className={optionClass}
                            onClick={() => setSelectedAnswers(prev => ({ ...prev, [qIndex]: optIndex }))}
                          >
                            <span className="opt-letter">{String.fromCharCode(65 + optIndex)}.</span>
                            <span className="opt-text">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="step-action-footer">
                <button 
                  onClick={() => { markStepDone(3); setCurrentStep(4); }} 
                  className="btn-step-next"
                >
                  Build Mini Artifact ➔ (+30 XP)
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: BUILD ARTIFACT & CHECKPOINTS */}
          {currentStep === 4 && (
            <div className="mission-pane">
              <div className="pane-intro">
                <h3>🔨 Step 4: Build Mini Artifact & Checkpoints</h3>
                <p>Complete your mini deliverable and satisfy all validation rules.</p>
              </div>

              {/* Checkpoints Checklist */}
              <div className="checkpoints-container">
                <h4>🎯 Validation Checkpoints (Satisfy 3-5 Rules):</h4>
                {defaultCheckpoints.map((cp, idx) => {
                  const isChecked = !!checkedCheckpoints[idx];
                  return (
                    <div key={idx} className={`checkpoint-item ${isChecked ? 'checked' : ''}`} onClick={() => toggleCheckpoint(idx)}>
                      <CheckCircle2 size={18} color={isChecked ? '#10b981' : '#64748b'} />
                      <span>{cp}</span>
                    </div>
                  );
                })}
              </div>

              {day.codingTask && (
                <AdvancedPlayground
                  starterCode={day.codingTask.starterCode}
                  expectedKeywords={day.codingTask.expectedKeywords}
                  onTaskComplete={() => markStepDone(4)}
                />
              )}

              <div className="step-action-footer">
                <button 
                  onClick={() => { markStepDone(4); setCurrentStep(5); }} 
                  className="btn-step-next"
                >
                  Artifact Built ➔ Final Reflection & Spaced Revision (+50 XP)
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: REFLECTION & SPACED REVISION SCHEDULING */}
          {currentStep === 5 && (
            <div className="mission-pane reflection-pane">
              <div className="pane-intro">
                <h3>✨ Step 5: Reflection & Spaced Revision Scheduling</h3>
                <p>This lesson will automatically be scheduled in your Spaced Revision Queue in 2 days!</p>
              </div>

              <div className="revision-scheduled-banner">
                <Clock size={20} color="#6366f1" />
                <span>Next Spaced Memory Revision: <strong>In 2 Days</strong></span>
              </div>

              <div className="step-action-footer">
                <button onClick={handleFinishMission} className="btn-finish-mission">
                  <Award size={20} /> Complete Mission & Claim Rewards!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function formatNotesMarkdown(markdownText) {
  if (!markdownText) return '';
  return markdownText
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
