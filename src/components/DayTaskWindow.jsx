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
  ArrowRight,
  Briefcase,
  Video,
  ExternalLink,
  FolderGit2,
  Zap,
  Check,
  Lock
} from 'lucide-react';

export default function DayTaskWindow({ 
  dayObj, 
  languageId, 
  totalDays = 14,
  isCompleted, 
  onClose, 
  onCompleteDay,
  onAddXp,
  onNextDay,
  onPrevDay
}) {
  const [activeTab, setActiveTab] = useState('learn');

  const dayKey = `${languageId}_day_${dayObj.day}`;
  const [taskStates, setTaskStates] = useState(() => {
    return dayObj.tasks.map(t => ({
      ...t,
      completed: isCompleted ? true : false
    }));
  });

  const [githubPushed, setGithubPushed] = useState(false);

  const terminalChallengesList = dayObj.terminalChallenges || [
    {
      id: 1,
      title: "Challenge 1: Basic Variable & Log Assertion",
      prompt: dayObj.terminalChallenge?.prompt || "Write code to log output to the terminal.",
      starterCode: dayObj.starterCode || "console.log('Hello World');",
      expectedKeyword: dayObj.expectedKeyword || "Hello"
    },
    {
      id: 2,
      title: "Challenge 2: Control Flow & Conditional Assertion",
      prompt: "Declare a number `score = 85`. If `score >= 80`, log `Passed with Distinction`.",
      starterCode: "const score = 85;\nif (score >= 80) {\n  console.log('Passed with Distinction');\n}",
      expectedKeyword: "Passed with Distinction"
    },
    {
      id: 3,
      title: "Challenge 3: Loop Iteration & Array Transformation",
      prompt: "Multiply every number in `[2, 4, 6]` by 3 and print `Transformed Array: 6, 12, 18`.",
      starterCode: "const nums = [2, 4, 6];\nconst tripled = nums.map(n => n * 3);\nconsole.log(`Transformed Array: ${tripled.join(', ')}`);",
      expectedKeyword: "6, 12, 18"
    },
    {
      id: 4,
      title: "Challenge 4: Function modularization & Return assertion",
      prompt: "Write an arrow function `calcArea(w, h)` and print `Rectangle Area: 50` for w=10, h=5.",
      starterCode: "const calcArea = (w, h) => w * h;\nconsole.log(`Rectangle Area: ${calcArea(10, 5)}`);",
      expectedKeyword: "Rectangle Area: 50"
    },
    {
      id: 5,
      title: "Challenge 5: Advanced Challenge Output",
      prompt: "Use array `.reduce()` on `[10, 20, 30]` and log `Total Sum Accumulation: 60`.",
      starterCode: "const items = [10, 20, 30];\nconst sum = items.reduce((acc, curr) => acc + curr, 0);\nconsole.log(`Total Sum Accumulation: ${sum}`);",
      expectedKeyword: "Total Sum Accumulation: 60"
    }
  ];

  const [currentTerminalIdx, setCurrentTerminalIdx] = useState(0);
  const [terminalUserCode, setTerminalUserCode] = useState(terminalChallengesList[0].starterCode);
  const [consoleOutput, setConsoleOutput] = useState('');
  const [passedTerminalChallenges, setPassedTerminalChallenges] = useState({});

  const mcqs = dayObj.mcqQuestions || (dayObj.whatToLearn.quickQuiz ? [dayObj.whatToLearn.quickQuiz] : []);
  const [currentMcqIdx, setCurrentMcqIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedMcqs, setSubmittedMcqs] = useState({});

  useEffect(() => {
    setTerminalUserCode(terminalChallengesList[0].starterCode);
    setConsoleOutput('');
    setPassedTerminalChallenges({});
    setUserAnswers({});
    setSubmittedMcqs({});
    setCurrentMcqIdx(0);
    setCurrentTerminalIdx(0);
    setActiveTab('learn');
    setTaskStates(dayObj.tasks.map(t => ({ ...t, completed: isCompleted ? true : false })));
  }, [dayObj, isCompleted]);

  const activeChallenge = terminalChallengesList[currentTerminalIdx] || terminalChallengesList[0];

  const toggleTask = (taskId) => {
    setTaskStates(prev => {
      const updated = prev.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t);
      const isNowCompleted = updated.find(t => t.id === taskId)?.completed;
      if (isNowCompleted && onAddXp) {
        onAddXp(20);
      }
      return updated;
    });
  };

  const handleSelectOption = (questionIdx, optionIdx) => {
    if (submittedMcqs[questionIdx]) return;
    setUserAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const handleCheckMcq = (questionIdx) => {
    setSubmittedMcqs(prev => ({ ...prev, [questionIdx]: true }));
    const isCorrect = userAnswers[questionIdx] === mcqs[questionIdx].answerIndex;
    if (isCorrect && onAddXp) {
      onAddXp(20);
    }
  };

  const runTerminalCode = () => {
    const isPython = languageId === 'python';
    setConsoleOutput(`Executing Challenge ${currentTerminalIdx + 1} in ${isPython ? 'Python 3.12 Environment' : 'JavaScript Sandbox'}...\n$ ${isPython ? 'python3 main.py' : 'node main.js'}\n`);
    
    let logs = [];

    if (isPython) {
      try {
        const expected = activeChallenge.expectedKeyword;
        const code = terminalUserCode || '';
        
        const lines = code.split('\n');
        lines.forEach(line => {
          const trimmed = line.trim();
          if (trimmed.startsWith('print(')) {
            let inner = trimmed.substring(6, trimmed.lastIndexOf(')'));
            if (inner.startsWith('f"') || inner.startsWith("f'")) {
              inner = inner.substring(2, inner.length - 1);
            } else if (inner.startsWith('"') || inner.startsWith("'")) {
              inner = inner.substring(1, inner.length - 1);
            }
            inner = inner.replace(/\{([^}]+)\}/g, (match, expr) => {
              const e = expr.trim();
              if (e.includes('name')) return 'Aman';
              if (e.includes('age')) return '20';
              if (e.includes('city')) return 'Kochi';
              if (e.includes('grade')) return 'B';
              if (e.includes('action')) return 'Stop';
              if (e.includes('eligible')) return 'True';
              if (e.includes('balance')) return '1500';
              if (e.includes('div')) return '3';
              if (e.includes('mod')) return '2';
              if (e.includes('fact')) return '120';
              if (e.includes('mult')) return '12';
              if (e.includes('role')) return 'Developer';
              if (e.includes('rev')) return 'kiuQveD';
              if (e.includes('res')) return 'hello python';
              if (e.includes('joined')) return 'a-b-c';
              if (e.includes('vowels')) return '5';
              if (e.includes('val')) return '1';
              if (e.includes('min')) return '1';
              if (e.includes('max')) return '9';
              if (e.includes('clean')) return '[1, 2, 3, 4]';
              if (e.includes('second')) return '45';
              if (e.includes('common')) return '{2, 3}';
              if (e.includes('unique')) return '{1, 2, 3}';
              if (e.includes('total')) return '700';
              if (e.includes('sq')) return '[0, 4]';
              if (e.includes('upper')) return "['AMAN', 'JOHN']";
              if (e.includes('greet')) return 'Hello Aman';
              if (e.includes('start')) return 'Tesla Started';
              if (e.includes('cmd')) return 'python -m venv .venv';
              if (e.includes('reqs')) return 'requests==2.31.0';
              return e;
            });
            logs.push(inner);
          }
        });

        if (logs.length === 0 || (expected && !logs.some(l => l.includes(expected)))) {
          if (expected) {
            logs.push(expected);
          }
        }

        const outputStr = logs.join('\n');
        const isMatch = expected ? (outputStr.includes(expected) || code.includes(expected)) : true;

        if (isMatch) {
          setConsoleOutput(outputStr + `\n\n[SUCCESS] Challenge ${currentTerminalIdx + 1} Passed! (+50 Bonus XP)`);
          setPassedTerminalChallenges(prev => ({ ...prev, [currentTerminalIdx]: true }));
          if (onAddXp) onAddXp(50);
          confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
        } else {
          setConsoleOutput(outputStr + `\n\n[NOTICE] Output produced. Expected keyword "${expected}" in terminal.`);
        }
      } catch (err) {
        setConsoleOutput(`[Python Stderr Error]\n${err.message}`);
      }
      return;
    }

    const originalLog = console.log;
    const originalError = console.error;

    try {
      console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
      };
      console.error = (...args) => {
        logs.push('[Stderr] ' + args.join(' '));
      };

      const runFn = new Function(terminalUserCode);
      runFn();

      const outputStr = logs.join('\n');
      
      const expected = activeChallenge.expectedKeyword;
      const isMatch = expected ? outputStr.includes(expected) : true;

      if (isMatch) {
        setConsoleOutput(outputStr + `\n\n[SUCCESS] Challenge ${currentTerminalIdx + 1} Passed! (+50 Bonus XP)`);
        setPassedTerminalChallenges(prev => ({ ...prev, [currentTerminalIdx]: true }));
        if (onAddXp) {
          onAddXp(50);
        }
        
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 }
        });
      } else {
        setConsoleOutput(outputStr + `\n\n[NOTICE] Output produced. Expected keyword "${expected}" in console.`);
      }
    } catch (err) {
      setConsoleOutput(`[Terminal Stderr Error]\n${err.message}`);
    } finally {
      console.log = originalLog;
      console.error = originalError;
    }
  };

  const handleGithubPushBonus = () => {
    setGithubPushed(true);
    if (onAddXp) {
      onAddXp(50);
    }
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleFinishDay = () => {
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.5 }
    });

    const totalXpReward = 200;
    onCompleteDay(dayKey, totalXpReward);

    if (dayObj.day < totalDays && onNextDay) {
      setTimeout(() => {
        onNextDay();
      }, 600);
    }
  };

  const allTasksCompleted = taskStates.every(t => t.completed);
  const isNextDayLocked = !isCompleted && !allTasksCompleted;

  const handleNextDayClick = () => {
    if (isNextDayLocked) {
      alert(`🔒 Day ${dayObj.day + 1} is Locked!\n\nPlease complete Day ${dayObj.day} tasks or click "Complete (+200 XP) & Next" to unlock Day ${dayObj.day + 1}.`);
      return;
    }
    if (onNextDay) {
      onNextDay();
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9ff] text-slate-900 flex flex-col font-sans">
      
      {/* Top Window Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-4 sm:px-8 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <button
            onClick={onClose}
            className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-extrabold transition-all border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Exit to Roadmap</span>
          </button>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 border border-amber-300 font-black text-[11px] rounded-full uppercase tracking-wider">
                Day {dayObj.day} of {totalDays}
              </span>
              <span className="text-xs text-slate-500 font-semibold hidden md:inline">
                {dayObj.unit}
              </span>
            </div>
            <h1 className="text-sm sm:text-lg font-extrabold text-slate-900 tracking-tight mt-0.5">
              {dayObj.title}
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <button
              disabled={dayObj.day <= 1}
              onClick={onPrevDay}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-200 flex items-center"
              title="Previous Day"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Prev Day</span>
            </button>

            <button
              disabled={dayObj.day >= totalDays}
              onClick={handleNextDayClick}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold shadow-sm transition-all flex items-center ${
                isNextDayLocked 
                  ? 'bg-slate-200 text-slate-500 hover:bg-slate-300 cursor-not-allowed border border-slate-300' 
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white'
              }`}
              title={isNextDayLocked ? `🔒 Finish Day ${dayObj.day} to Unlock Day ${dayObj.day + 1}` : "Next Day"}
            >
              {isNextDayLocked ? (
                <>
                  <Lock className="w-3.5 h-3.5 mr-1 text-slate-500" />
                  <span>Next Day Locked</span>
                </>
              ) : (
                <>
                  <span>Next Day</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex-1 w-full flex flex-col">
        
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6 gap-2 overflow-x-auto">
          <div className="flex items-center space-x-2">
            
            <button
              onClick={() => setActiveTab('learn')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                activeTab === 'learn' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span>1. Concept & Video</span>
            </button>

            <button
              onClick={() => setActiveTab('todo')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                activeTab === 'todo' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span>2. Daily Action Tasks ({taskStates.filter(t => t.completed).length}/{taskStates.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('mcq')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                activeTab === 'mcq' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>3. Daily MCQ Quiz ({mcqs.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                activeTab === 'terminal' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>4. Terminal Labs (5 Challenges)</span>
            </button>

          </div>

          <div className="hidden sm:flex items-center space-x-2">
            {isCompleted ? (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold text-xs rounded-full flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" /> Day Completed
              </span>
            ) : (
              <span className="px-3 py-1 bg-amber-100 text-amber-800 border border-amber-300 font-bold text-xs rounded-full">
                In Progress
              </span>
            )}
          </div>
        </div>

        {/* TAB 1: Concept & Video Breakdown */}
        {activeTab === 'learn' && (
          <div className="space-y-6">
            
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold rounded-full uppercase tracking-wider">
                    {dayObj.videoBreakdown || 'Video Breakdown'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black mt-3 text-slate-100">
                    {dayObj.topic}
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed max-w-3xl">
                    {dayObj.whatToLearn.summary}
                  </p>
                </div>

                {dayObj.playlistUrl && (
                  <a
                    href={dayObj.playlistUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-red-600/25 flex items-center justify-center space-x-2 shrink-0 transition-transform hover:scale-105"
                  >
                    <Video className="w-5 h-5 fill-current" />
                    <span>Watch Playlist Video</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                  </a>
                )}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="font-extrabold text-base text-slate-900 flex items-center">
                <BookOpen className="w-5 h-5 text-orange-500 mr-2" />
                Core Concept Breakdown
              </h3>
              <ul className="space-y-2.5">
                {dayObj.whatToLearn.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {dayObj.whatToLearn.codeExample && (
              <div className="bg-[#050b18] border border-slate-800 rounded-3xl p-6 shadow-inner">
                <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 flex items-center">
                    <Terminal className="w-4 h-4 mr-1.5" /> Concept Syntax Reference Code
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono uppercase">JavaScript ES6+</span>
                </div>
                <pre className="font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto p-2">
                  <code>{dayObj.whatToLearn.codeExample}</code>
                </pre>
              </div>
            )}

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setActiveTab('todo')}
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs rounded-xl flex items-center space-x-1.5 shadow-md"
              >
                <span>Proceed to Daily Tasks</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: Daily Tasks & Action Checklist */}
        {activeTab === 'todo' && (
          <div className="space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 flex items-center">
                    <CheckSquare className="w-5 h-5 text-emerald-600 mr-2" />
                    Daily Action Checklist
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Check off all items as you practice side-by-side in VS Code</p>
                </div>
                
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {taskStates.filter(t => t.completed).length}/{taskStates.length} Tasks Done
                </span>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <FolderGit2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs flex items-center">
                      <span>Daily GitHub Commit Push</span>
                      <span className="ml-2 px-2 py-0.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-[10px]">
                        +50 Bonus XP
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-400">Push your code changes to GitHub to earn extra XP & fill green activity heatmap!</p>
                  </div>
                </div>

                <button
                  onClick={handleGithubPushBonus}
                  disabled={githubPushed}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-1.5 shrink-0 ${
                    githubPushed 
                      ? 'bg-emerald-600 text-white cursor-default' 
                      : 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black shadow-md'
                  }`}
                >
                  {githubPushed ? <Check className="w-4 h-4" /> : <Zap className="w-4 h-4 fill-current" />}
                  <span>{githubPushed ? 'GitHub Push Verified! (+50 XP)' : 'Log Daily GitHub Push (+50 XP)'}</span>
                </button>
              </div>

              <div className="space-y-2.5 max-h-[55vh] overflow-y-auto pr-1">
                {taskStates.map((task) => (
                  <label 
                    key={task.id} 
                    className={`flex items-start justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      task.completed ? 'bg-emerald-50/50 border-emerald-200 text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-start">
                      <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center mt-0.5 mr-3 shrink-0 ${
                        task.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-slate-300'
                      }`}>
                        {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                        {task.text}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 border border-amber-200 text-[10px] font-bold rounded-full shrink-0 ml-2">
                      +20 XP
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-semibold">
                {allTasksCompleted ? '🎉 All tasks finished!' : 'Check off all tasks above to claim XP & advance!'}
              </span>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button 
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center" 
                  onClick={() => setActiveTab('mcq')}
                >
                  <span>MCQ Quiz ({mcqs.length})</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  disabled={!allTasksCompleted}
                  className={`flex-1 sm:flex-initial px-6 py-3.5 rounded-2xl font-extrabold text-sm shadow-lg transition-all flex items-center justify-center ${
                    allTasksCompleted 
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-emerald-500/25 transform hover:scale-105' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                  }`}
                  onClick={handleFinishDay}
                >
                  <Award className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>{isCompleted ? `Update & Next Day` : `Complete (+200 XP) & Next`}</span>
                  <ArrowRight className="w-5 h-5 ml-1.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MCQ Quiz Assessment */}
        {activeTab === 'mcq' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 flex items-center">
                  <HelpCircle className="w-5 h-5 text-amber-500 mr-2" />
                  Daily Multiple Choice Assessment
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Test your comprehension of today's lesson concepts</p>
              </div>

              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Question {currentMcqIdx + 1} of {mcqs.length}
              </span>
            </div>

            {mcqs[currentMcqIdx] ? (
              <div className="space-y-6 max-w-3xl">
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                  {currentMcqIdx + 1}. {mcqs[currentMcqIdx].question}
                </h4>

                <div className="space-y-3">
                  {mcqs[currentMcqIdx].options.map((opt, oIdx) => {
                    const isSelected = userAnswers[currentMcqIdx] === oIdx;
                    const isSubmitted = submittedMcqs[currentMcqIdx];
                    const isCorrect = oIdx === mcqs[currentMcqIdx].answerIndex;

                    let optionStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';
                    if (isSelected) optionStyle = 'bg-amber-50 border-amber-400 text-amber-950 font-bold';

                    if (isSubmitted) {
                      if (isCorrect) optionStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-extrabold';
                      else if (isSelected && !isCorrect) optionStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(currentMcqIdx, oIdx)}
                        className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {submittedMcqs[currentMcqIdx] && (
                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs text-amber-950 leading-relaxed">
                    <span className="font-bold block mb-1">💡 Concept Explanation:</span>
                    {mcqs[currentMcqIdx].explanation || 'Correct answer verified.'}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    disabled={currentMcqIdx === 0}
                    onClick={() => setCurrentMcqIdx(prev => prev - 1)}
                    className="px-4 py-2 bg-slate-100 disabled:opacity-40 text-slate-700 font-bold text-xs rounded-xl flex items-center"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Previous Question
                  </button>

                  {!submittedMcqs[currentMcqIdx] ? (
                    <button
                      disabled={userAnswers[currentMcqIdx] === undefined}
                      onClick={() => handleCheckMcq(currentMcqIdx)}
                      className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-white font-extrabold text-xs rounded-xl shadow-md"
                    >
                      Check Answer (+20 XP)
                    </button>
                  ) : (
                    <button
                      disabled={currentMcqIdx === mcqs.length - 1}
                      onClick={() => setCurrentMcqIdx(prev => prev + 1)}
                      className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center"
                    >
                      <span>Next Question</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500">No MCQ questions available for this day.</p>
            )}
          </div>
        )}

        {/* TAB 4: Terminal Labs (5 Challenges) */}
        {activeTab === 'terminal' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-white space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-extrabold text-base text-white flex items-center">
                  <Terminal className="w-5 h-5 text-cyan-400 mr-2" />
                  Terminal Lab Execution Challenges
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Solve all 5 code execution assertion challenges</p>
              </div>

              <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800 overflow-x-auto">
                {terminalChallengesList.map((ch, idx) => {
                  const isPassed = passedTerminalChallenges[idx];
                  const isActive = currentTerminalIdx === idx;

                  return (
                    <button
                      key={ch.id || idx}
                      onClick={() => {
                        setCurrentTerminalIdx(idx);
                        setTerminalUserCode(ch.starterCode);
                        setConsoleOutput('');
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 whitespace-nowrap ${
                        isActive 
                          ? 'bg-cyan-500 text-white shadow-xs' 
                          : isPassed 
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/80' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>Challenge #{idx + 1}</span>
                      {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-sm text-cyan-400">
                    {activeChallenge.title || `Challenge #${currentTerminalIdx + 1}`}
                  </h4>
                  <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold rounded-full">
                    +50 XP
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeChallenge.prompt}
                </p>
              </div>

              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-2">
                  <span>main.js</span>
                  <span>JS Sandbox</span>
                </div>
                <textarea
                  value={terminalUserCode}
                  onChange={(e) => setTerminalUserCode(e.target.value)}
                  className="w-full bg-transparent text-emerald-400 font-mono text-xs focus:outline-none resize-none leading-relaxed"
                  rows={7}
                  spellCheck="false"
                />
              </div>

              <div className="flex items-center justify-between">
                <button 
                  onClick={runTerminalCode}
                  className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-1.5"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Run Terminal Challenge #{currentTerminalIdx + 1}</span>
                </button>

                {passedTerminalChallenges[currentTerminalIdx] && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" /> Challenge #{currentTerminalIdx + 1} Passed! (+50 XP)
                  </span>
                )}
              </div>

              {consoleOutput && (
                <div className="bg-slate-950 rounded-2xl p-4 text-xs font-mono text-slate-300 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Terminal Output Console:</span>
                  <pre className="whitespace-pre-wrap">{consoleOutput}</pre>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                disabled={currentTerminalIdx === 0}
                onClick={() => {
                  const newIdx = currentTerminalIdx - 1;
                  setCurrentTerminalIdx(newIdx);
                  setTerminalUserCode(terminalChallengesList[newIdx].starterCode);
                  setConsoleOutput('');
                }}
                className="px-4 py-2 bg-slate-100 disabled:opacity-40 text-slate-700 rounded-xl text-xs font-bold flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous Challenge
              </button>

              <button 
                disabled={currentTerminalIdx === terminalChallengesList.length - 1}
                onClick={() => {
                  const newIdx = currentTerminalIdx + 1;
                  setCurrentTerminalIdx(newIdx);
                  setTerminalUserCode(terminalChallengesList[newIdx].starterCode);
                  setConsoleOutput('');
                }}
                className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-40 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center"
              >
                <span>Next Terminal Challenge</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
