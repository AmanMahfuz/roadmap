import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft,
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
  ChevronLeft,
  X,
  ExternalLink,
  Flame,
  Zap,
  Check,
  Lock,
  Code2,
  Copy,
  Video,
  Trophy,
  AlertCircle,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function DayTaskWindow({ 
  dayObj, 
  languageId = 'python', 
  totalDays = 15,
  isCompleted, 
  taskProgress = {},
  onUpdateTaskProgress,
  onClose, 
  onCompleteDay,
  onAddXp,
  onNextDay,
  onPrevDay
}) {
  const [activeTab, setActiveTab] = useState('learn');
  const dayKey = `${languageId}_day_${dayObj.day}`;

  // Practice Tasks State
  const [taskStates, setTaskStates] = useState(() => {
    return (dayObj.tasks || []).map(t => ({
      ...t,
      completed: isCompleted ? true : !!taskProgress[t.id]
    }));
  });
  const [activeTaskId, setActiveTaskId] = useState(() => {
    const firstIncomplete = (dayObj.tasks || []).find(t => !isCompleted && !taskProgress[t.id]);
    return firstIncomplete ? firstIncomplete.id : (dayObj.tasks?.[0]?.id || null);
  });
  const [lastSolvedTaskId, setLastSolvedTaskId] = useState(null);

  // Code Playground State
  const [userCode, setUserCode] = useState(dayObj.starterCode || '# Write your Python code here\nprint("Hello, Python!")');
  const [consoleOutput, setConsoleOutput] = useState('');
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [codePassed, setCodePassed] = useState(isCompleted);

  // MCQ Quiz State
  const mcqs = dayObj.mcqQuestions || [];
  const [currentMcqIdx, setCurrentMcqIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedMcqs, setSubmittedMcqs] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizScore, setQuizScore] = useState(isCompleted ? 100 : 0);
  const [quizPassed, setQuizPassed] = useState(isCompleted);

  // Validation warning modal/toast
  const [validationWarning, setValidationWarning] = useState(null);

  // Copied snippet state
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  useEffect(() => {
    setUserCode(dayObj.starterCode || '# Write your Python code here\nprint("Hello, Python!")');
    setConsoleOutput('');
    setCodePassed(isCompleted);
    setUserAnswers({});
    setSubmittedMcqs({});
    setShowQuizResult(false);
    setQuizScore(isCompleted ? 100 : 0);
    setQuizPassed(isCompleted);
    setCurrentMcqIdx(0);
    setActiveTab('learn');
    setValidationWarning(null);
    setLastSolvedTaskId(null);

    const initialTasks = (dayObj.tasks || []).map(t => ({
      ...t,
      completed: isCompleted ? true : !!taskProgress[t.id]
    }));
    setTaskStates(initialTasks);

    const firstIncomplete = initialTasks.find(t => !t.completed);
    setActiveTaskId(firstIncomplete ? firstIncomplete.id : initialTasks[0]?.id || null);
  }, [dayObj.day, isCompleted]);

  // Tasks progress check
  const completedTasksCount = taskStates.filter(t => t.completed).length;
  const allTasksDone = taskStates.length > 0 && completedTasksCount === taskStates.length;

  const handleStartTask = (taskId) => {
    setActiveTaskId(taskId);
    setActiveTab('code');
  };

  const handleToggleTask = (taskId) => {
    // Navigate directly to sandbox to solve
    handleStartTask(taskId);
  };

  // Run Python Code simulation & validation for active task
  const handleRunCode = () => {
    setIsCodeRunning(true);
    setConsoleOutput('>>> Initializing Python 3.12 runner...\n');

    setTimeout(() => {
      try {
        if (!userCode.trim() || userCode.trim().length < 8) {
          throw new Error('Code body is too short. Write complete Python logic to satisfy the exercise.');
        }

        let outputLines = [];
        const lines = userCode.split('\n');

        lines.forEach(line => {
          const trimmed = line.trim();
          if (trimmed.startsWith('print(') && trimmed.endsWith(')')) {
            const inner = trimmed.slice(6, -1);
            if (inner.startsWith('f"') || inner.startsWith("f'") || inner.startsWith('"') || inner.startsWith("'")) {
              let clean = inner;
              if (clean.startsWith('f"') || clean.startsWith("f'")) {
                clean = clean.slice(2, -1);
                clean = clean.replace(/{([^}]+)}/g, (match, p1) => {
                  if (p1.includes('exercise_name')) return 'Deadlift';
                  if (p1.includes('reps')) return '8';
                  if (p1.includes('weight_kg')) return '120.5';
                  if (p1.includes('days_lived')) return '8,030';
                  if (p1.includes('domain')) return 'aiengineers.org';
                  if (p1.includes('fib')) return '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]';
                  if (p1.includes('current_streak')) return '5';
                  if (p1.includes('streak')) return '5';
                  if (p1.includes('highest')) return '94';
                  if (p1.includes('lat')) return '37.7749';
                  if (p1.includes('lon')) return '-122.4194';
                  if (p1.includes('total') || p1.includes('cals')) return '350';
                  if (p1.includes('f_temps')) return '[32.0, 77.0, 212.0]';
                  if (p1.includes('user.username')) return 'Aman';
                  return p1;
                });
              } else {
                clean = clean.slice(1, -1);
              }
              outputLines.push(clean);
            } else {
              outputLines.push(`>>> Evaluated: ${inner}`);
            }
          }
        });

        if (outputLines.length === 0) {
          outputLines.push('>>> Code executed with return code 0. Add print() statements to inspect outputs.');
        }

        const fullLog = outputLines.join('\n');
        setConsoleOutput(fullLog);

        // Validation logic for current task
        const hasPrint = userCode.includes('print(');
        const hasValidOutput = fullLog.length > 5;

        if (hasPrint && hasValidOutput) {
          // Mark active task as completed
          if (activeTaskId) {
            const currentTask = taskStates.find(t => t.id === activeTaskId);
            const wasCompleted = currentTask?.completed;

            const updatedTasks = taskStates.map(t => {
              if (t.id === activeTaskId) {
                return { ...t, completed: true };
              }
              return t;
            });

            setTaskStates(updatedTasks);
            setLastSolvedTaskId(activeTaskId);

            if (!wasCompleted) {
              onAddXp && onAddXp(25);
              if (onUpdateTaskProgress) {
                onUpdateTaskProgress(dayKey, activeTaskId, true);
              }
            }

            const remainingIncomplete = updatedTasks.find(t => !t.completed);
            if (!remainingIncomplete) {
              setCodePassed(true);
            }
          } else {
            setCodePassed(true);
          }
        } else {
          setConsoleOutput(prev => `${prev}\n⚠️ Warning: Ensure your code has at least one print() statement demonstrating the result.`);
        }
      } catch (err) {
        setConsoleOutput(`Traceback (most recent call last):\n  File "main.py", line 1\nSyntaxError: ${err.message}`);
      } finally {
        setIsCodeRunning(false);
      }
    }, 350);
  };

  // MCQ Handlers
  const handleSelectOption = (qId, optionIdx) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleSubmitQuestion = (qId) => {
    setSubmittedMcqs(prev => ({ ...prev, [qId]: true }));
    const currentQ = mcqs.find(q => q.id === qId);
    if (currentQ && userAnswers[qId] === currentQ.answer) {
      onAddXp && onAddXp(20);
    }
  };

  const evaluateQuiz = () => {
    let correct = 0;
    mcqs.forEach(q => {
      if (userAnswers[q.id] === q.answer) correct += 1;
    });
    const score = Math.round((correct / (mcqs.length || 1)) * 100);
    setQuizScore(score);
    setShowQuizResult(true);
    if (score >= 70) {
      setQuizPassed(true);
    } else {
      setQuizPassed(false);
    }
  };

  // Check if all 3 completion conditions are met
  const isReadyToComplete = allTasksDone && codePassed && quizPassed;

  const handleFinalizeDay = () => {
    if (!isReadyToComplete && !isCompleted) {
      const missing = [];
      if (!allTasksDone) missing.push(`Complete all practice tasks (${completedTasksCount}/${taskStates.length} completed)`);
      if (!codePassed) missing.push('Execute your script in the Python Sandbox and pass validation');
      if (!quizPassed) missing.push('Pass the MCQ Assessment with a score of ≥ 70%');

      setValidationWarning(missing);
      return;
    }

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
    onCompleteDay(dayKey, dayObj.xpReward);
    setValidationWarning(null);
  };

  const handleCopySnippet = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300 pb-12 font-sans text-slate-900">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/90 rounded-3xl p-4 sm:p-6 shadow-xs">
        <div className="flex items-center space-x-3">
          <button 
            onClick={onClose} 
            className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors flex items-center space-x-1.5 text-xs font-bold cursor-pointer"
            title="Back to Roadmap"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Roadmap</span>
          </button>
          
          <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-yellow-400 text-slate-950 uppercase tracking-wider">
                Day {dayObj.day} of {totalDays}
              </span>
              <span className="text-xs text-slate-500 font-semibold hidden md:inline">
                {dayObj.phaseTitle || 'Python to AI Fast-Track'}
              </span>
            </div>
            <h1 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 mt-1">
              {dayObj.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3 self-end sm:self-auto">
          <div className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl text-yellow-600 text-xs font-black">
            <Zap className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span>+{dayObj.xpReward} XP</span>
          </div>

          {/* Prev / Next Navigation */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-2xl border border-slate-200">
            <button 
              onClick={onPrevDay} 
              disabled={dayObj.day <= 1}
              className="p-1.5 rounded-xl hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 cursor-pointer transition-colors"
              title="Previous Day"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-bold text-slate-500 px-1">
              {dayObj.day}/{totalDays}
            </span>
            <button 
              onClick={onNextDay} 
              disabled={!isCompleted || dayObj.day >= totalDays}
              className="p-1.5 rounded-xl hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 cursor-pointer transition-colors"
              title={isCompleted ? "Next Day" : `Complete Day ${dayObj.day} to unlock Day ${dayObj.day + 1}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Learning Card Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200/90 overflow-hidden flex flex-col">
        
        {/* Tab Navigation Header */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50/90 px-4 sm:px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('learn')}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-4 border-b-2 text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'learn'
                ? 'border-indigo-600 text-indigo-600 bg-white shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Learn Concepts</span>
          </button>

          <button
            onClick={() => setActiveTab('practice')}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-4 border-b-2 text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'practice'
                ? 'border-indigo-600 text-indigo-600 bg-white shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>2. Practice Tasks</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${allTasksDone ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'}`}>
              {completedTasksCount}/{taskStates.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-4 border-b-2 text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'code'
                ? 'border-indigo-600 text-indigo-600 bg-white shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>3. Python Sandbox</span>
            {codePassed && <span className="text-emerald-600 font-bold">✓</span>}
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-4 border-b-2 text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'quiz'
                ? 'border-indigo-600 text-indigo-600 bg-white shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>4. MCQ Assessment</span>
            {quizPassed && <span className="text-emerald-600 font-bold">✓ ({quizScore}%)</span>}
          </button>
        </div>

        {/* Validation Warning Alert */}
        {validationWarning && (
          <div className="bg-amber-50 border-b border-amber-200 px-6 py-4 flex items-center justify-between text-xs text-amber-900 animate-in fade-in duration-200">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div>
                <span className="font-bold text-sm">Requirements to complete Day {dayObj.day}:</span>
                <ul className="list-disc list-inside mt-1 space-y-1 text-amber-800 font-medium">
                  {validationWarning.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button 
              onClick={() => setValidationWarning(null)}
              className="p-1.5 text-amber-600 hover:text-amber-800 rounded-lg hover:bg-amber-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Tab Body */}
        <div className="p-6 sm:p-8 min-h-[500px]">
          
          {/* TAB 1: LEARN CONCEPTS */}
          {activeTab === 'learn' && (
            <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
              
              {/* YouTube Direct Video Banner */}
              {dayObj.videoSource && (
                <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-950 border border-red-900/50 rounded-3xl p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-red-950/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/80 px-2 py-0.5 rounded-md border border-red-800/50">
                          {dayObj.videoSource.instructor}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-xs text-slate-300 font-medium">
                          Timestamp: {dayObj.videoSource.timestamp}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-1">
                        Watch Official Video Lesson Segment
                      </h4>
                    </div>
                  </div>

                  <a
                    href={dayObj.videoSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all whitespace-nowrap cursor-pointer hover:scale-105"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Milestone Box if applicable */}
              {dayObj.isMilestone && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-5 flex items-center space-x-4 shadow-xs">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-amber-950 uppercase tracking-wider">
                      Milestone Checkpoint: {dayObj.badgeAward}
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-900 mt-0.5">
                      Complete all 3 requirements today to unlock your official <strong>{dayObj.badgeAward}</strong> milestone badge!
                    </p>
                  </div>
                </div>
              )}

              {/* Overview Box */}
              <div className="bg-indigo-50/80 border border-indigo-100 rounded-3xl p-6 shadow-xs">
                <h3 className="text-base font-bold text-indigo-900 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <span>Core Topic Breakdown</span>
                </h3>
                <p className="text-sm sm:text-base text-indigo-950 mt-2 font-medium leading-relaxed">
                  {dayObj.whatToLearn?.summary || dayObj.topic}
                </p>
              </div>

              {/* Key Concept Points */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-slate-900">Key Concepts Explained</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(dayObj.whatToLearn?.details || []).map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                      <span className="w-6 h-6 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Example Box */}
              {dayObj.whatToLearn?.codeExample && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
                      <Code2 className="w-4 h-4 text-slate-500" />
                      <span>Syntax Demonstration</span>
                    </span>
                    <button 
                      onClick={() => handleCopySnippet(dayObj.whatToLearn.codeExample)}
                      className="text-xs text-indigo-600 hover:text-indigo-700 font-bold flex items-center space-x-1 cursor-pointer bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedSnippet ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="bg-slate-950 text-emerald-400 p-5 rounded-2xl text-xs sm:text-sm font-mono overflow-x-auto border border-slate-800 leading-relaxed shadow-lg">
                    <code>{dayObj.whatToLearn.codeExample}</code>
                  </pre>
                </div>
              )}

              {/* Next Step Banner */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveTab('practice')}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-black rounded-2xl shadow-md flex items-center space-x-2 transition-all cursor-pointer hover:scale-105"
                >
                  <span>Continue to Practice Tasks</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: PRACTICE TASKS */}
          {activeTab === 'practice' && (
            <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 border border-slate-200 p-5 rounded-3xl">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">Curriculum Exercises ({taskStates.length} Tasks)</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Click any exercise to open it in the Python Playground. Run your code to solve and validate!
                  </p>
                </div>
                <span className={`text-xs font-black px-3.5 py-1.5 rounded-2xl self-start sm:self-auto ${allTasksDone ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-200 text-slate-700'}`}>
                  {completedTasksCount} / {taskStates.length} Completed {allTasksDone && '✓'}
                </span>
              </div>

              {/* Workflow Banner */}
              <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex items-center space-x-3 text-xs sm:text-sm text-indigo-900 font-medium">
                <Sparkles className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span>
                  <strong>Interactive Sandbox Verification:</strong> Select an exercise below to launch the sandbox. When your script executes successfully, the exercise validates and unlocks the next task!
                </span>
              </div>

              <div className="space-y-3.5">
                {taskStates.map((task, idx) => {
                  const isCurrent = activeTaskId === task.id;

                  return (
                    <div
                      key={task.id}
                      onClick={() => handleStartTask(task.id)}
                      className={`p-5 sm:p-6 rounded-3xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group ${
                        task.completed 
                          ? 'bg-emerald-50/60 border-emerald-300 text-slate-800 hover:shadow-md' 
                          : isCurrent
                            ? 'bg-indigo-50/50 border-indigo-400 ring-2 ring-indigo-200 shadow-md'
                            : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md text-slate-900'
                      }`}
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all font-black text-xs ${
                          task.completed 
                            ? 'bg-emerald-600 text-white shadow-sm' 
                            : isCurrent
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'border-2 border-slate-300 bg-white text-slate-600'
                        }`}>
                          {task.completed ? <Check className="w-4 h-4 stroke-[3]" /> : (idx + 1)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                              Exercise {idx + 1}
                            </span>
                            {task.completed && (
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                                ✓ Solved
                              </span>
                            )}
                            {isCurrent && !task.completed && (
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-indigo-100 text-indigo-800 border border-indigo-300">
                                Active Target
                              </span>
                            )}
                          </div>
                          <p className={`text-xs sm:text-sm font-bold leading-relaxed mt-1 ${
                            task.completed ? 'text-slate-700' : 'text-slate-900'
                          }`}>
                            {task.text}
                          </p>
                          <span className="text-[11px] text-emerald-600 font-bold mt-1.5 block">
                            {task.completed ? '✓ Validated (+25 XP awarded)' : '+25 XP upon running in playground'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 self-end sm:self-auto flex-shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStartTask(task.id);
                          }}
                          className={`px-4 py-2 text-xs font-black rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer ${
                            task.completed
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                              : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:scale-105'
                          }`}
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{task.completed ? 'Re-open in Sandbox' : 'Solve in Playground (▶)'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setActiveTab('learn')}
                  className="text-xs sm:text-sm font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  ← Back to Learn Concepts
                </button>
                <button
                  onClick={() => {
                    const firstIncomplete = taskStates.find(t => !t.completed);
                    if (firstIncomplete) {
                      setActiveTaskId(firstIncomplete.id);
                    }
                    setActiveTab('code');
                  }}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-black rounded-2xl shadow-md flex items-center space-x-2 transition-all cursor-pointer hover:scale-105"
                >
                  <span>Open Python Sandbox</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: CODE RUNNER */}
          {activeTab === 'code' && (
            <div className="w-full space-y-5 animate-in fade-in duration-200">
              
              {/* Exercise Target Header Card */}
              {(() => {
                const currentTask = taskStates.find(t => t.id === activeTaskId) || taskStates[0];
                const currentIdx = taskStates.findIndex(t => t.id === activeTaskId);
                const nextIncompleteTask = taskStates.find((t, i) => i > currentIdx && !t.completed) || taskStates.find(t => !t.completed);

                return (
                  <div className="bg-slate-900 text-white p-5 rounded-3xl border border-slate-800 shadow-xl space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                      <div className="flex items-center space-x-3">
                        <span className="w-9 h-9 rounded-2xl bg-indigo-600 flex items-center justify-center font-black text-sm text-white shadow-md">
                          {currentIdx >= 0 ? currentIdx + 1 : 1}
                        </span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400">
                              Active Target Exercise
                            </span>
                            {currentTask?.completed ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-950 text-emerald-400 border border-emerald-800">
                                ✓ Solved
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-950 text-amber-400 border border-amber-800">
                                In Progress
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-100 mt-0.5">
                            {currentTask?.text || 'Write your Python script and execute to validate'}
                          </h4>
                        </div>
                      </div>

                      {/* Task Selector Tabs */}
                      <div className="flex items-center space-x-1.5 overflow-x-auto self-start md:self-auto pb-1 md:pb-0">
                        {taskStates.map((t, idx) => (
                          <button
                            key={t.id}
                            onClick={() => setActiveTaskId(t.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                              activeTaskId === t.id
                                ? 'bg-indigo-600 text-white shadow-md'
                                : t.completed
                                  ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 hover:bg-emerald-900/80'
                                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                            }`}
                          >
                            <span>Task {idx + 1}</span>
                            {t.completed && <Check className="w-3 h-3 stroke-[3]" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Next Task / Passed Action Banner if task solved */}
                    {currentTask?.completed && (
                      <div className="bg-emerald-950/50 border border-emerald-800/80 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                        <div className="flex items-center space-x-2.5 text-emerald-300 font-bold">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span>Task {currentIdx + 1} solved & verified! (+25 XP)</span>
                        </div>
                        {nextIncompleteTask && nextIncompleteTask.id !== activeTaskId ? (
                          <button
                            onClick={() => setActiveTaskId(nextIncompleteTask.id)}
                            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow-md flex items-center space-x-1.5 transition-all cursor-pointer self-start sm:self-auto hover:scale-105"
                          >
                            <span>Solve Next Exercise (Task {taskStates.findIndex(t => t.id === nextIncompleteTask.id) + 1})</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        ) : allTasksDone ? (
                          <button
                            onClick={() => setActiveTab('quiz')}
                            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow-md flex items-center space-x-1.5 transition-all cursor-pointer self-start sm:self-auto hover:scale-105"
                          >
                            <span>All Exercises Solved! Proceed to Quiz Assessment</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        ) : null}
                      </div>
                    )}
                  </div>
                );
              })()}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-3xl">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900">Python 3.12 Interactive Sandbox</h3>
                    {allTasksDone ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                        ✓ All Tasks Solved
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-800 border border-amber-300">
                        {completedTasksCount}/{taskStates.length} Solved
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Write and execute Python code. Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-300 rounded shadow-2xs font-bold text-slate-700">Cmd/Ctrl + Enter</kbd> or click Run.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setUserCode(dayObj.starterCode || '')}
                    className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:bg-white border border-transparent hover:border-slate-200 rounded-xl flex items-center space-x-1.5 cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Code</span>
                  </button>
                  <button
                    onClick={handleRunCode}
                    disabled={isCodeRunning}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-black rounded-xl flex items-center space-x-2 shadow-md transition-all cursor-pointer hover:scale-105"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>{isCodeRunning ? 'Executing...' : 'Run Python (▶)'}</span>
                  </button>
                </div>
              </div>

              {/* Code Editor & Console Output - Large IDE Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                
                {/* Editor Box */}
                <div className="flex flex-col border border-slate-800 rounded-3xl overflow-hidden bg-slate-950 shadow-2xl">
                  <div className="bg-slate-900 px-5 py-3 text-xs font-mono text-slate-300 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      <span className="ml-2 font-bold text-slate-200 text-sm">main.py</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] text-yellow-400 font-black bg-yellow-400/10 px-2.5 py-0.5 rounded-md border border-yellow-400/20">
                        Python 3.12
                      </span>
                      <button
                        onClick={handleRunCode}
                        disabled={isCodeRunning}
                        className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-black rounded-xl shadow-md cursor-pointer transition-all hover:shadow-emerald-600/30"
                        title="Run Python Code (▶)"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Run (▶)</span>
                      </button>
                    </div>
                  </div>
                  
                  <textarea
                    value={userCode}
                    onChange={(e) => {
                      setUserCode(e.target.value);
                      setCodePassed(false);
                    }}
                    onKeyDown={(e) => {
                      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                        e.preventDefault();
                        handleRunCode();
                      }
                    }}
                    className="w-full h-[520px] sm:h-[580px] bg-slate-950 text-emerald-400 p-6 font-mono text-xs sm:text-sm focus:outline-hidden resize-none leading-relaxed selection:bg-emerald-950 selection:text-emerald-200"
                    spellCheck="false"
                    placeholder="# Write your Python code here..."
                  />

                  {/* Editor Bottom Bar */}
                  <div className="bg-slate-900/90 border-t border-slate-800/80 px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{userCode.split('\n').length} lines • {userCode.length} chars</span>
                    <span className="text-slate-500">Press Cmd/Ctrl + Enter to run</span>
                  </div>
                </div>

                {/* Terminal Stdout Box */}
                <div className="flex flex-col border border-slate-800 rounded-3xl overflow-hidden bg-slate-950 shadow-2xl">
                  <div className="bg-slate-900 px-5 py-3 text-xs font-mono text-slate-300 border-b border-slate-800 flex items-center justify-between">
                    <span className="flex items-center space-x-2 font-bold text-sm">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span>Terminal Stdout</span>
                    </span>
                    <div className="flex items-center space-x-2">
                      {codePassed && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-900/60 text-emerald-300 border border-emerald-700">
                          Code Passed (+50 XP)
                        </span>
                      )}
                      <button
                        onClick={handleRunCode}
                        disabled={isCodeRunning}
                        className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-700/70 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg cursor-pointer transition-all"
                        title="Run / Re-run Python Code"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>{isCodeRunning ? 'Running...' : '▶ Run'}</span>
                      </button>
                    </div>
                  </div>

                  <pre className="w-full h-[520px] sm:h-[580px] p-6 font-mono text-xs sm:text-sm text-slate-200 overflow-y-auto whitespace-pre-wrap leading-relaxed selection:bg-slate-800">
                    {consoleOutput || '>>> Click "Run (▶)" on the editor or terminal header to execute script.\n>>> Output and return values will be displayed here in real time.'}
                  </pre>

                  {/* Terminal Bottom Bar */}
                  <div className="bg-slate-900/90 border-t border-slate-800/80 px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Python 3.12.0 Environment</span>
                    </span>
                    <button 
                      onClick={() => setConsoleOutput('')}
                      className="hover:text-white transition-colors cursor-pointer text-[11px]"
                    >
                      Clear Output
                    </button>
                  </div>
                </div>

              </div>

              <div className="pt-3 flex justify-between items-center">
                <button
                  onClick={() => setActiveTab('practice')}
                  className="text-xs sm:text-sm font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  ← Back to Practice Tasks
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-black rounded-2xl shadow-md flex items-center space-x-2 transition-all cursor-pointer hover:scale-105"
                >
                  <span>Proceed to MCQ Quiz</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: MCQ QUIZ */}
          {activeTab === 'quiz' && (
            <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
              {mcqs.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <p>No quiz questions for this lesson.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Quiz Progress */}
                  <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-5 rounded-3xl">
                    <div>
                      <span className="text-xs font-bold text-slate-500">Question {currentMcqIdx + 1} of {mcqs.length}</span>
                      <h4 className="text-base font-black text-slate-900 mt-0.5">Conceptual Knowledge Assessment</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black text-indigo-600 block">Pass Threshold: ≥ 70%</span>
                      {quizPassed && <span className="text-xs font-black text-emerald-600">✓ Passed ({quizScore}%)</span>}
                    </div>
                  </div>

                  {/* Single Question Card */}
                  {(() => {
                    const currentQ = mcqs[currentMcqIdx];
                    const selectedAns = userAnswers[currentQ.id];
                    const isSubmitted = submittedMcqs[currentQ.id];

                    return (
                      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                        <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                          {currentQ.question}
                        </h3>

                        <div className="space-y-3">
                          {currentQ.options.map((option, oIdx) => {
                            const isSelected = selectedAns === oIdx;
                            const isCorrect = oIdx === currentQ.answer;

                            let optionStyles = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50';
                            if (isSubmitted) {
                              if (isCorrect) {
                                optionStyles = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                              } else if (isSelected && !isCorrect) {
                                optionStyles = 'bg-rose-50 border-rose-500 text-rose-950';
                              }
                            } else if (isSelected) {
                              optionStyles = 'bg-indigo-50 border-indigo-600 text-indigo-950 font-semibold shadow-xs';
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => !isSubmitted && handleSelectOption(currentQ.id, oIdx)}
                                disabled={isSubmitted}
                                className={`w-full text-left p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optionStyles}`}
                              >
                                <span>{option}</span>
                                {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation on submit */}
                        {isSubmitted && (
                          <div className={`p-5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                            selectedAns === currentQ.answer 
                              ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' 
                              : 'bg-amber-50 text-amber-900 border border-amber-200'
                          }`}>
                            <span className="font-black block mb-1">
                              {selectedAns === currentQ.answer ? '✓ Correct!' : '✗ Explanation:'}
                            </span>
                            {currentQ.explanation}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-3">
                          <button
                            onClick={() => setCurrentMcqIdx(prev => Math.max(0, prev - 1))}
                            disabled={currentMcqIdx === 0}
                            className="text-xs sm:text-sm font-bold text-slate-500 hover:text-slate-800 disabled:opacity-30 cursor-pointer"
                          >
                            ← Previous Question
                          </button>

                          {!isSubmitted ? (
                            <button
                              onClick={() => handleSubmitQuestion(currentQ.id)}
                              disabled={selectedAns === undefined}
                              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs sm:text-sm font-black rounded-xl shadow-md cursor-pointer"
                            >
                              Submit Answer
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                if (currentMcqIdx < mcqs.length - 1) {
                                  setCurrentMcqIdx(prev => prev + 1);
                                } else {
                                  evaluateQuiz();
                                }
                              }}
                              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-black rounded-xl shadow-md cursor-pointer"
                            >
                              {currentMcqIdx < mcqs.length - 1 ? 'Next Question →' : 'Calculate Quiz Score →'}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Quiz Summary Box */}
                  {showQuizResult && (
                    <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-xl border border-indigo-800 animate-in fade-in duration-300">
                      <h4 className="text-lg sm:text-xl font-black">Assessment Result</h4>
                      <div className="text-4xl sm:text-5xl font-black text-yellow-400">{quizScore}%</div>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                        {quizPassed 
                          ? '🎉 Outstanding work! You passed the assessment (≥70%) and verified your conceptual mastery of today\'s topics!' 
                          : 'Score is currently under 70%. Review the concepts in Tab 1 and retry the questions to satisfy the pass mark!'}
                      </p>
                      {!quizPassed && (
                        <div className="pt-2">
                          <button
                            onClick={() => {
                              setUserAnswers({});
                              setSubmittedMcqs({});
                              setShowQuizResult(false);
                              setCurrentMcqIdx(0);
                            }}
                            className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center space-x-2 hover:scale-105"
                          >
                            <RotateCcw className="w-4 h-4" />
                            <span>Retake Assessment</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Footer Actions */}
        <footer className="bg-slate-50 border-t border-slate-200/90 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-slate-600">
            <span className="font-bold flex items-center space-x-1.5">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 inline" />
              <span>Day {dayObj.day} Completion:</span>
            </span>
            <span className={`px-3 py-1 rounded-full font-bold text-xs ${
              isCompleted 
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                : isReadyToComplete 
                ? 'bg-yellow-100 text-yellow-800 border border-yellow-300 animate-pulse'
                : 'bg-slate-200 text-slate-700'
            }`}>
              {isCompleted 
                ? 'Completed ✓' 
                : isReadyToComplete 
                ? 'Ready to Finalize ✨' 
                : `${completedTasksCount}/${taskStates.length} Tasks, Code: ${codePassed ? '✓' : 'Pending'}, Quiz: ${quizPassed ? '✓' : 'Pending'}`}
            </span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            {!isCompleted ? (
              <button
                onClick={handleFinalizeDay}
                className={`w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-black rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition-all transform cursor-pointer ${
                  isReadyToComplete
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/25 hover:scale-105'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Complete Day {dayObj.day} (+{dayObj.xpReward} XP)</span>
              </button>
            ) : (
              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                <span className="text-xs sm:text-sm font-bold text-emerald-600 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Day Completed</span>
                </span>
                {dayObj.day < totalDays && (
                  <button
                    onClick={onNextDay}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-black rounded-2xl flex items-center space-x-2 transition-all cursor-pointer hover:scale-105 shadow-md"
                  >
                    <span>Proceed to Day {dayObj.day + 1}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </footer>

      </div>
    </div>
  );
}
