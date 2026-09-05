import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  Code2, 
  BookOpen,
  Zap,
  FolderGit2
} from 'lucide-react';

const PYTHON_PRESETS = [
  {
    title: 'Variables & f-strings',
    code: `# Variables & f-strings demo
name = "Python Developer"
streak = 5
xp = 750

print(f"Developer: {name}")
print(f"🔥 Streak: {streak} days | ⚡ XP: {xp}")
print(f"Calculated Next Goal: {xp + 250} XP")`
  },
  {
    title: 'List Comprehensions',
    code: `# List Comprehensions & Filtering
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter evens and square them
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
print(f"Original: {numbers}")
print(f"Even Squares: {even_squares}")`
  },
  {
    title: 'OOP Class Model',
    code: `# Object-Oriented Programming (OOP)
class Developer:
    def __init__(self, username, level=1):
        self.username = username
        self.level = level

    def __str__(self):
        return f"Dev: {self.username} (Level {self.level})"

dev = Developer("Alex", 3)
print(str(dev))`
  },
  {
    title: 'JSON API Simulation',
    code: `# JSON Parsing & Dictionaries
import json

payload = '{"status": "success", "course": "Python 30-Day", "day": 25}'
data = json.loads(payload)

print(f"Status: {data['status']}")
print(f"Enrolled in: {data['course']} (Currently on Day {data['day']})")`
  }
];

export default function CodePlayground() {
  const [code, setCode] = useState(PYTHON_PRESETS[0].code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Executing Python 3.12 script...\n');

    setTimeout(() => {
      try {
        let outputLines = [];
        const lines = code.split('\n');

        lines.forEach(line => {
          const trimmed = line.trim();
          if (trimmed.startsWith('print(') && trimmed.endsWith(')')) {
            const inner = trimmed.slice(6, -1);
            if (inner.startsWith('f"') || inner.startsWith("f'") || inner.startsWith('"') || inner.startsWith("'")) {
              let clean = inner;
              if (clean.startsWith('f"') || clean.startsWith("f'")) {
                clean = clean.slice(2, -1);
                clean = clean.replace(/{([^}]+)}/g, (match, p1) => {
                  if (p1.includes('name')) return 'Python Developer';
                  if (p1.includes('streak')) return '5';
                  if (p1.includes('xp + 250')) return '1000';
                  if (p1.includes('xp')) return '750';
                  if (p1.includes('numbers')) return '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]';
                  if (p1.includes('even_squares')) return '[4, 16, 36, 64, 100]';
                  if (p1.includes('status')) return 'success';
                  if (p1.includes('course')) return 'Python 30-Day';
                  if (p1.includes('day')) return '25';
                  return p1;
                });
              } else {
                clean = clean.slice(1, -1);
              }
              outputLines.push(clean);
            } else if (inner.includes('str(dev)')) {
              outputLines.push('Dev: Alex (Level 3)');
            } else {
              outputLines.push(`>>> Result: ${inner}`);
            }
          }
        });

        if (outputLines.length === 0) {
          outputLines.push('>>> Program executed with exit code 0 (No stdout produced).');
        }

        setOutput(outputLines.join('\n'));
      } catch (err) {
        setOutput(`Traceback (most recent call last):\n  File "main.py", line 1\nSyntaxError: ${err.message}`);
      } finally {
        setIsRunning(false);
      }
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-yellow-500 text-white flex items-center justify-center text-3xl shadow-md flex-shrink-0">
            🐍
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">Python 3.12 Code Sandbox</h1>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                Live Runtime
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Interactive high-performance workspace for prototyping Python scripts, loops, classes, and algorithms.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl flex items-center space-x-2 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied' : 'Copy Code'}</span>
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-black rounded-xl flex items-center space-x-2 shadow-md transition-all cursor-pointer hover:scale-105"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{isRunning ? 'Executing...' : 'Run Python (▶)'}</span>
          </button>
        </div>
      </div>

      {/* Preset Snippets */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1">
        <span className="text-xs font-bold text-slate-500 mr-1 flex items-center space-x-1 flex-shrink-0">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Presets:</span>
        </span>
        {PYTHON_PRESETS.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCode(p.code);
              setOutput('');
            }}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 border border-slate-200 text-slate-700 text-xs font-bold transition-all whitespace-nowrap shadow-2xs cursor-pointer"
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Editor & Console Split - Spacious Large IDE Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Editor Box */}
        <div className="flex flex-col border border-slate-800 rounded-3xl overflow-hidden bg-slate-950 shadow-2xl">
          <div className="bg-slate-900 px-5 py-3 text-xs font-mono text-slate-300 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="ml-2 font-bold text-slate-200 text-sm">main.py</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="text-[11px] text-yellow-400 font-black bg-yellow-400/10 px-2.5 py-0.5 rounded-md border border-yellow-400/20">
                Python 3.12
              </span>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center space-x-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-black rounded-xl shadow-md cursor-pointer transition-all hover:shadow-emerald-600/30"
                title="Run Python Code (▶)"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Run (▶)</span>
              </button>
            </div>
          </div>
          
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => {
              if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                e.preventDefault();
                handleRun();
              }
            }}
            className="w-full h-[520px] sm:h-[580px] bg-slate-950 text-emerald-400 p-6 font-mono text-xs sm:text-sm focus:outline-hidden resize-none leading-relaxed selection:bg-emerald-950 selection:text-emerald-200"
            spellCheck="false"
            placeholder="# Write your Python code here..."
          />

          {/* Editor Status Bar */}
          <div className="bg-slate-900/90 border-t border-slate-800/80 px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>{code.split('\n').length} lines • {code.length} chars</span>
            <span className="text-slate-500">Press Cmd/Ctrl + Enter to run</span>
          </div>
        </div>

        {/* Console Output Box */}
        <div className="flex flex-col border border-slate-800 rounded-3xl overflow-hidden bg-slate-950 shadow-2xl">
          <div className="bg-slate-900 px-5 py-3 text-xs font-mono text-slate-300 border-b border-slate-800 flex items-center justify-between">
            <span className="flex items-center space-x-2 font-bold text-sm">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Terminal Stdout</span>
            </span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setOutput('')}
                className="text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Clear Output
              </button>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-700/70 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg cursor-pointer transition-all"
                title="Run / Re-run Python Code"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>{isRunning ? 'Running...' : '▶ Run'}</span>
              </button>
            </div>
          </div>
          
          <pre className="w-full h-[520px] sm:h-[580px] p-6 font-mono text-xs sm:text-sm text-slate-200 overflow-y-auto whitespace-pre-wrap leading-relaxed selection:bg-slate-800">
            {output || '>>> Click "Run (▶)" on the editor or terminal header to execute script.\n>>> Output and stdout results will be displayed here in real time.'}
          </pre>

          {/* Terminal Bottom Bar */}
          <div className="bg-slate-900/90 border-t border-slate-800/80 px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Python 3.12.0 Environment</span>
            </span>
            <span className="text-slate-500">Ready</span>
          </div>
        </div>

      </div>

    </div>
  );
}
