import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  BookOpen, 
  CheckSquare, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw, 
  Terminal, 
  HelpCircle,
  Award,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export default function DayTaskModal({ 
  dayObj, 
  languageId, 
  isCompleted, 
  onClose, 
  onCompleteDay 
}) {
  const [activeTab, setActiveTab] = useState('learn'); // 'learn' | 'mcq' | 'terminal' | 'todo'
  
  // Tasks checklist state
  const dayKey = `${languageId}_day_${dayObj.day}`;
  const [taskStates, setTaskStates] = useState(() => {
    return dayObj.tasks.map(t => ({
      ...t,
      completed: isCompleted ? true : false
    }));
  });

  // MCQ state
  const mcqs = dayObj.mcqQuestions || (dayObj.whatToLearn.quickQuiz ? [dayObj.whatToLearn.quickQuiz] : []);
  const [currentMcqIdx, setCurrentMcqIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedMcqs, setSubmittedMcqs] = useState({});

  // Terminal / Code Runner state
  const [userCode, setUserCode] = useState(dayObj.starterCode || '');
  const [consoleOutput, setConsoleOutput] = useState('');
  const [terminalPassed, setTerminalPassed] = useState(false);

  useEffect(() => {
    setUserCode(dayObj.starterCode || '');
    setConsoleOutput('');
    setTerminalPassed(false);
    setUserAnswers({});
    setSubmittedMcqs({});
    setCurrentMcqIdx(0);
  }, [dayObj]);

  const toggleTask = (taskId) => {
    setTaskStates(prev => 
      prev.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t)
    );
  };

  const handleSelectOption = (questionIdx, optionIdx) => {
    if (submittedMcqs[questionIdx]) return;
    setUserAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const handleCheckMcq = (questionIdx) => {
    setSubmittedMcqs(prev => ({ ...prev, [questionIdx]: true }));
  };

  const runTerminalCode = () => {
    setConsoleOutput('Executing in terminal sandbox...\n$ node main.js\n');
    let logs = [];

    const originalLog = console.log;
    const originalError = console.error;

    try {
      console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
      };
      console.error = (...args) => {
        logs.push('[Stderr] ' + args.join(' '));
      };

      const runFn = new Function(userCode);
      runFn();

      const outputStr = logs.join('\n');
      
      const expected = dayObj.expectedKeyword || dayObj.terminalChallenge?.expectedKeyword;
      const isMatch = expected ? outputStr.includes(expected) : true;

      if (isMatch) {
        setConsoleOutput(outputStr + '\n\n[SUCCESS] Test case passed! Output matches expected result.');
        setTerminalPassed(true);
        // Automatically check off last task item on successful terminal test execution
        setTaskStates(prev => prev.map((t, idx) => idx === prev.length - 1 ? { ...t, completed: true } : t));
      } else {
        setConsoleOutput(outputStr + `\n\n[NOTICE] Output produced. Expected keyword "${expected}" in output.`);
        setTerminalPassed(false);
      }
    } catch (err) {
      setConsoleOutput(`[Terminal Stderr Error]\n${err.message}`);
      setTerminalPassed(false);
    } finally {
      console.log = originalLog;
      console.error = originalError;
    }
  };

  const handleFinishDay = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    onCompleteDay(dayKey, 200);
    onClose();
  };

  const allTasksCompleted = taskStates.every(t => t.completed);

  return (
    <div className="day-modal-overlay" onClick={onClose}>
      <div className="day-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="day-modal-header">
          <div className="header-left">
            <span className="day-badge-pill">Day {dayObj.day}</span>
            <div>
              <span className="unit-label">{dayObj.unit}</span>
              <h2 className="modal-title">{dayObj.title}</h2>
            </div>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            <X className="w-5 h-5 text-slate-500 hover:text-slate-900" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="modal-tab-bar">
          <button 
            className={`tab-btn ${activeTab === 'learn' ? 'active' : ''}`}
            onClick={() => setActiveTab('learn')}
          >
            <BookOpen className="w-4 h-4 mr-1.5" />
            1. Concept
          </button>
          
          <button 
            className={`tab-btn ${activeTab === 'mcq' ? 'active' : ''}`}
            onClick={() => setActiveTab('mcq')}
          >
            <HelpCircle className="w-4 h-4 mr-1.5 text-amber-500" />
            2. MCQ Quiz ({mcqs.length})
          </button>

          <button 
            className={`tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <Terminal className="w-4 h-4 mr-1.5 text-cyan-600" />
            3. Terminal
          </button>

          <button 
            className={`tab-btn ${activeTab === 'todo' ? 'active' : ''}`}
            onClick={() => setActiveTab('todo')}
          >
            <CheckSquare className="w-4 h-4 mr-1.5 text-emerald-600" />
            4. Checklist ({taskStates.filter(t => t.completed).length}/{taskStates.length})
          </button>
        </div>

        {/* Body Content */}
        <div className="day-modal-body">

          {/* TAB 1: CONCEPT */}
          {activeTab === 'learn' && (
            <div className="tab-pane-content">
              <div className="concept-summary-card">
                <h3 className="section-heading">
                  <Sparkles className="w-5 h-5 text-amber-500 inline mr-2" />
                  Day {dayObj.day} Topic Overview
                </h3>
                <p className="summary-text">{dayObj.whatToLearn.summary}</p>
              </div>

              <div className="details-list-card">
                <h4 className="card-subheading">Core Learnings & Principles:</h4>
                <ul className="details-bullet-list">
                  {dayObj.whatToLearn.details.map((detail, idx) => (
                    <li key={idx} className="bullet-item">
                      <span className="bullet-dot" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Syntax Example */}
              <div className="code-example-card">
                <div className="code-card-header flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-300">Code Syntax Snippet</span>
                </div>
                <pre className="code-snippet-block">
                  <code>{dayObj.whatToLearn.codeExample}</code>
                </pre>
              </div>

              <div className="modal-actions-footer">
                <button 
                  className="next-tab-btn flex items-center" 
                  onClick={() => setActiveTab('mcq')}
                >
                  <span>Proceed to MCQ Quiz ({mcqs.length} Questions)</span>
                  <ChevronRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: MCQ QUIZ QUESTIONS */}
          {activeTab === 'mcq' && (
            <div className="tab-pane-content">
              <div className="quick-quiz-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="section-heading">
                    <HelpCircle className="w-5 h-5 text-amber-500 inline mr-2" />
                    Day {dayObj.day} Multiple Choice Practice ({currentMcqIdx + 1}/{mcqs.length})
                  </h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Question {currentMcqIdx + 1} of {mcqs.length}
                  </span>
                </div>

                {mcqs.length > 0 && (
                  <div className="mcq-question-wrapper">
                    <p className="quiz-question font-semibold text-slate-900 text-base mb-4">
                      {mcqs[currentMcqIdx].question}
                    </p>

                    <div className="quiz-options-grid">
                      {mcqs[currentMcqIdx].options.map((opt, optIdx) => {
                        const isChosen = userAnswers[currentMcqIdx] === optIdx;
                        const isSubmitted = submittedMcqs[currentMcqIdx];
                        const isCorrect = optIdx === mcqs[currentMcqIdx].answerIndex;

                        let styleClass = 'quiz-opt-default';
                        if (isSubmitted) {
                          if (isCorrect) styleClass = 'quiz-opt-correct';
                          else if (isChosen && !isCorrect) styleClass = 'quiz-opt-wrong';
                        } else if (isChosen) {
                          styleClass = 'quiz-opt-selected';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isSubmitted}
                            className={`quiz-opt-btn ${styleClass}`}
                            onClick={() => handleSelectOption(currentMcqIdx, optIdx)}
                          >
                            <span className="opt-idx">{String.fromCharCode(65 + optIdx)}</span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {!submittedMcqs[currentMcqIdx] ? (
                      <button
                        disabled={userAnswers[currentMcqIdx] === undefined}
                        className="submit-quiz-btn mt-3"
                        onClick={() => handleCheckMcq(currentMcqIdx)}
                      >
                        Submit Answer
                      </button>
                    ) : (
                      <div className="quiz-feedback-box mt-4 p-4 rounded-xl border bg-slate-50">
                        {userAnswers[currentMcqIdx] === mcqs[currentMcqIdx].answerIndex ? (
                          <div className="text-emerald-700 font-bold flex items-center mb-1">
                            <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" />
                            Correct Answer! Well done.
                          </div>
                        ) : (
                          <div className="text-rose-700 font-bold flex items-center mb-1">
                            <X className="w-5 h-5 mr-2 text-rose-600" />
                            Incorrect. Correct option was {String.fromCharCode(65 + mcqs[currentMcqIdx].answerIndex)}.
                          </div>
                        )}
                        {mcqs[currentMcqIdx].explanation && (
                          <p className="text-xs text-slate-600 mt-1 pl-7">
                            💡 <strong>Explanation:</strong> {mcqs[currentMcqIdx].explanation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Question Switcher Pagination */}
                <div className="mcq-pagination-bar flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                  <button
                    disabled={currentMcqIdx === 0}
                    className="px-3 py-1.5 bg-slate-100 disabled:opacity-50 text-slate-700 rounded-lg text-xs font-semibold flex items-center"
                    onClick={() => setCurrentMcqIdx(prev => prev - 1)}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                  </button>

                  <span className="text-xs text-slate-500 font-medium">
                    Questions Answered: {Object.keys(submittedMcqs).length}/{mcqs.length}
                  </span>

                  <button
                    disabled={currentMcqIdx === mcqs.length - 1}
                    className="px-3 py-1.5 bg-slate-100 disabled:opacity-50 text-slate-700 rounded-lg text-xs font-semibold flex items-center"
                    onClick={() => setCurrentMcqIdx(prev => prev + 1)}
                  >
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              <div className="modal-actions-footer">
                <button 
                  className="next-tab-btn flex items-center" 
                  onClick={() => setActiveTab('terminal')}
                >
                  <span>Proceed to Terminal Challenge</span>
                  <Terminal className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: TERMINAL CODING CHALLENGE */}
          {activeTab === 'terminal' && (
            <div className="tab-pane-content">
              <div className="code-runner-card">
                <div className="runner-header flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm font-bold text-slate-800">Terminal Code Execution Challenge</span>
                  </div>
                  <button className="reset-code-btn" onClick={() => setUserCode(dayObj.starterCode || '')}>
                    <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset Code
                  </button>
                </div>

                <div className="terminal-prompt-box bg-slate-50 p-3.5 rounded-xl border border-slate-200 mb-3">
                  <p className="text-xs text-slate-700 font-semibold mb-1">
                    🎯 <strong>Challenge Prompt:</strong> {dayObj.terminalChallenge?.prompt || "Write code to solve the challenge and log the result to the output terminal using console.log()."}
                  </p>
                  {dayObj.expectedKeyword && (
                    <p className="text-[11px] text-slate-500 font-mono">
                      Expected Output Keyword: <code className="bg-slate-200 px-1 py-0.5 rounded font-bold text-slate-800">{dayObj.expectedKeyword}</code>
                    </p>
                  )}
                </div>

                <div className="runner-editor-wrapper">
                  <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="code-textarea"
                    rows={7}
                    spellCheck="false"
                  />
                </div>

                <div className="runner-control-bar mt-3 flex items-center justify-between">
                  <button className="run-code-btn" onClick={runTerminalCode}>
                    <Play className="w-4 h-4 mr-2 fill-current" />
                    Run Terminal Test
                  </button>

                  {terminalPassed && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" /> Terminal Challenge Passed!
                    </span>
                  )}
                </div>

                {consoleOutput && (
                  <div className="runner-console-box mt-4">
                    <div className="console-title">Terminal Output Console:</div>
                    <pre className="console-log-text">{consoleOutput}</pre>
                  </div>
                )}
              </div>

              <div className="modal-actions-footer">
                <button 
                  className="next-tab-btn flex items-center" 
                  onClick={() => setActiveTab('todo')}
                >
                  <span>Go to Action Checklist</span>
                  <CheckSquare className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: WHAT TO DO (ACTION CHECKLIST) */}
          {activeTab === 'todo' && (
            <div className="tab-pane-content">
              <div className="todo-tasks-card">
                <h3 className="section-heading">
                  <CheckSquare className="w-5 h-5 text-emerald-600 inline mr-2" />
                  Day {dayObj.day} Daily Action Checklist
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Check off each practice item, video, and project to complete Day {dayObj.day}.
                </p>

                <div className="task-checklist">
                  {taskStates.map((task) => (
                    <label 
                      key={task.id} 
                      className={`task-checkbox-row ${task.completed ? 'completed' : ''}`}
                    >
                      <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="hidden-checkbox"
                      />
                      <div className="custom-checkbox">
                        {task.completed && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      </div>
                      <span className="task-text">{task.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Finish Day Action */}
              <div className="modal-actions-footer">
                <button
                  disabled={!allTasksCompleted}
                  className={`finish-day-btn ${allTasksCompleted ? 'active' : 'disabled'}`}
                  onClick={handleFinishDay}
                >
                  <Award className="w-5 h-5 mr-2 text-yellow-300" />
                  {isCompleted ? 'Update Completed Day' : `Complete Day ${dayObj.day} & Claim 200 XP`}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
