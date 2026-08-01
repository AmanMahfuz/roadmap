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
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import CodePlayground from './CodePlayground';

export default function DayDetailModal({ 
  day, 
  isCompleted, 
  onClose, 
  onCompleteDay 
}) {
  const [activeTab, setActiveTab] = useState('video'); // 'video', 'notes', 'quiz', 'code'
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const handleComplete = () => {
    // Trigger confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    onCompleteDay(day);
  };

  const handleSelectOption = (qIndex, optionIndex) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [qIndex]: optionIndex
    }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    day.quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  return (
    <div className="modal-backdrop">
      <div className="day-modal-card">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="header-info">
            <span className="modal-day-chip">DAY {day.dayNumber}</span>
            <h2 className="modal-title-ml">{day.titleMl}</h2>
            <p className="modal-title-en">{day.title}</p>
          </div>
          <button onClick={onClose} className="modal-close-btn" title="Close">
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs-bar">
          <button 
            className={`modal-tab ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            <Play size={16} /> Malayalam Tutorial
          </button>
          <button 
            className={`modal-tab ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            <FileText size={16} /> കുറിപ്പുകൾ (Notes)
          </button>
          {day.quiz && day.quiz.length > 0 && (
            <button 
              className={`modal-tab ${activeTab === 'quiz' ? 'active' : ''}`}
              onClick={() => setActiveTab('quiz')}
            >
              <HelpCircle size={16} /> ക്വിസ് ({day.quiz.length})
            </button>
          )}
          {day.codingTask && (
            <button 
              className={`modal-tab ${activeTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              <Code size={16} /> കോഡിംഗ് ലാബ്
            </button>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="modal-body-scroll">
          {/* TAB 1: VIDEO TUTORIAL */}
          {activeTab === 'video' && (
            <div className="tab-pane video-pane">
              <div className="video-player-container">
                <iframe
                  title={day.youtubeTitle}
                  src={day.youtubeId?.startsWith('PL') ? `https://www.youtube.com/embed/videoseries?list=${day.youtubeId}&autoplay=1&rel=0` : `https://www.youtube.com/embed/${day.youtubeId}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="video-details-box">
                <div className="yt-meta-row">
                  <span className="yt-channel-badge">📺 Tutorial Video</span>
                  <a 
                    href={day.youtubeId?.startsWith('PL') ? `https://www.youtube.com/playlist?list=${day.youtubeId}` : `https://www.youtube.com/watch?v=${day.youtubeId}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="yt-external-link"
                  >
                    Watch on YouTube <ExternalLink size={14} />
                  </a>
                </div>
                <h3>{day.youtubeTitle}</h3>
                <p className="day-focus-desc">{day.summary}</p>
              </div>
            </div>
          )}

          {/* TAB 2: NOTES & KEY CONCEPTS */}
          {activeTab === 'notes' && (
            <div className="tab-pane notes-pane">
              <div className="notes-rendered-box">
                <div dangerouslySetInnerHTML={{ __html: formatNotesMarkdown(day.notes) }} />
              </div>
            </div>
          )}

          {/* TAB 3: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="tab-pane quiz-pane">
              <div className="quiz-intro-banner">
                <h3>🧩 ഡെയ്‌ലി മലയാളം ക്വിസ്</h3>
                <p>ഇന്നത്തെ ക്ലാസിൽ പഠിച്ച കാര്യങ്ങൾ അടിസ്ഥാനമാക്കിയുള്ള ചോദ്യങ്ങൾ ഉത്തരമെഴുതുക.</p>
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
                            onClick={() => handleSelectOption(qIndex, optIndex)}
                          >
                            <span className="opt-letter">{String.fromCharCode(65 + optIndex)}.</span>
                            <span className="opt-text">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="q-explanation-box">
                        💡 <strong>വിശദീകരണം:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="quiz-footer-actions">
                {!quizSubmitted ? (
                  <button 
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < day.quiz.length}
                    className="btn-submit-quiz"
                  >
                    ഉത്തരങ്ങൾ സമർപ്പിക്കുക
                  </button>
                ) : (
                  <div className="quiz-results-banner">
                    <div className="score-badge">
                      സ്കോർ: {quizScore} / {day.quiz.length}
                    </div>
                    <button onClick={handleResetQuiz} className="btn-secondary-sm">
                      <RotateCcw size={14} /> വീണ്ടും ശ്രമിക്കുക
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: CODE PLAYGROUND */}
          {activeTab === 'code' && day.codingTask && (
            <div className="tab-pane code-pane">
              <div className="task-prompt-box">
                <h4>🎯 ഇന്നത്തെ ചലഞ്ച് (Task Goal):</h4>
                <p>{day.codingTask.prompt}</p>
              </div>

              <CodePlayground
                starterCode={day.codingTask.starterCode}
                expectedKeywords={day.codingTask.expectedKeywords}
              />
            </div>
          )}
        </div>

        {/* Modal Footer / Completion Button */}
        <div className="modal-footer">
          <div className="xp-reward-info">
            <Zap size={18} className="zap-animated" />
            <span>പ്രതിഫലം: <strong>+{day.xp} XP</strong></span>
          </div>

          <button 
            className={`btn-complete-day ${isCompleted ? 'already-completed' : ''}`}
            onClick={handleComplete}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 size={18} /> പൂർത്തിയായി (Completed)
              </>
            ) : (
              <>
                <Award size={18} /> ഇന്ന് പൂർത്തിയാക്കി (+{day.xp} XP)
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Simple Helper function to format basic Markdown in Notes to HTML
function formatNotesMarkdown(markdownText) {
  if (!markdownText) return '';
  
  let html = markdownText
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^1\. (.*$)/gim, '<ol><li>$1</li></ol>')
    .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

  // Wrap code blocks ```javascript ... ```
  html = html.replace(/```(\w+)?\n([\s\S]*?)\n```/g, (match, lang, code) => {
    return `<pre className="code-block-display"><code>${escapeHtml(code)}</code></pre>`;
  });

  return html;
}

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
