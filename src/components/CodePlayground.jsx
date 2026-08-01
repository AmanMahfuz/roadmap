import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Code2, 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Check, 
  Download, 
  Maximize2, 
  Minimize2, 
  Terminal, 
  FileCode, 
  LayoutGrid, 
  Layers,
  Zap,
  ChevronDown
} from 'lucide-react';

const BOILERPLATES = {
  flexbox: {
    title: '🎨 Flexbox Centered Card',
    html: `<div class="card">
  <div class="badge">Frontend Track</div>
  <h1>⚡ Flexbox Centered Card</h1>
  <p>Learn CSS Flexbox centering and modern gradients effortlessly.</p>
  <button id="btn">Interactive Button</button>
</div>`,
    css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  margin: 0;
  color: white;
}
.card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 36px;
  border-radius: 24px;
  text-align: center;
  max-width: 380px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
.badge {
  display: inline-block;
  padding: 4px 12px;
  background: #f97316;
  font-weight: bold;
  font-size: 11px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
h1 { font-size: 1.5rem; margin: 0 0 10px 0; color: #f8fafc; }
p { color: #94a3b8; font-size: 0.9rem; line-height: 1.5; }
button {
  background: linear-gradient(135deg, #38bdf8, #0284c7);
  color: white;
  border: none;
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
}
button:hover { transform: scale(1.05); box-shadow: 0 8px 20px rgba(56,189,248,0.4); }`,
    js: `document.getElementById('btn').addEventListener('click', () => {
  console.log('🎉 Button clicked inside Flexbox Card!');
  alert('Flexbox Centering Mastered!');
});`
  },

  counter: {
    title: '🔢 Interactive Counter App',
    html: `<div class="counter-box">
  <h2>Digital Counter</h2>
  <div id="count-val" class="number">0</div>
  <div class="btn-group">
    <button id="dec-btn">- Decrease</button>
    <button id="reset-btn">Reset</button>
    <button id="inc-btn">+ Increase</button>
  </div>
</div>`,
    css: `body {
  font-family: sans-serif;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0;
}
.counter-box {
  background: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  text-align: center;
}
.number {
  font-size: 4rem;
  font-weight: 900;
  color: #0f172a;
  margin: 20px 0;
}
.btn-group { display: flex; gap: 10px; }
button {
  padding: 10px 18px;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: white;
  cursor: pointer;
}
button:hover { background: #e2e8f0; }
#inc-btn { background: #22c55e; color: white; border: none; }
#dec-btn { background: #ef4444; color: white; border: none; }`,
    js: `let count = 0;
const val = document.getElementById('count-val');
document.getElementById('inc-btn').onclick = () => { count++; val.textContent = count; console.log('Count:', count); };
document.getElementById('dec-btn').onclick = () => { count--; val.textContent = count; console.log('Count:', count); };
document.getElementById('reset-btn').onclick = () => { count = 0; val.textContent = count; console.log('Reset to 0'); };`
  },

  todo: {
    title: '📝 To-Do List Boilerplate',
    html: `<div class="todo-app">
  <h2>Task Checklist</h2>
  <div class="input-bar">
    <input type="text" id="task-in" placeholder="Enter new task..." />
    <button id="add-btn">Add Task</button>
  </div>
  <ul id="task-list"></ul>
</div>`,
    css: `body { font-family: system-ui; background: #fafafa; padding: 40px; display: flex; justify-content: center; }
.todo-app { background: white; padding: 30px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); width: 100%; max-width: 450px; }
.input-bar { display: flex; gap: 10px; margin-bottom: 20px; }
input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 10px; }
button { background: #ea580c; color: white; border: none; padding: 10px 18px; font-weight: bold; border-radius: 10px; cursor: pointer; }
ul { list-style: none; padding: 0; margin: 0; }
li { padding: 12px; background: #f8fafc; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; border-radius: 8px; margin-bottom: 6px; }`,
    js: `const addBtn = document.getElementById('add-btn');
const input = document.getElementById('task-in');
const list = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  if (!input.value.trim()) return;
  const li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);
  console.log('Added Task:', input.value);
  input.value = '';
});`
  }
};

const loadPyodideScript = () => {
  return new Promise((resolve, reject) => {
    if (window.loadPyodide) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Pyodide WebAssembly interpreter.'));
    document.body.appendChild(script);
  });
};

export default function CodePlayground() {
  const [playgroundMode, setPlaygroundMode] = useState('web'); // 'web' | 'python'

  // Web State
  const [html, setHtml] = useState(BOILERPLATES.flexbox.html);
  const [css, setCss] = useState(BOILERPLATES.flexbox.css);
  const [js, setJs] = useState(BOILERPLATES.flexbox.js);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'html' | 'css' | 'js'
  const [srcDoc, setSrcDoc] = useState('');
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);

  // Python State
  const [pyodide, setPyodide] = useState(null);
  const [pythonCode, setPythonCode] = useState(
    `# 🐍 Python 3.12 WebAssembly Interpreter\n# Write Python code here and execute it inside the browser sandbox.\n\nprint("Welcome to the DevQuik Python Playground!")\n\n# Try loops and list comprehensions\nitems = ["HTML", "CSS", "JavaScript", "Python"]\nprint("\\nActive Tracks in Catalog:")\nfor idx, track in enumerate(items, 1):\n    print(f"  {idx}. {track} Mastery Path")\n\n# Let's compute a factorial function\ndef factorial(n):\n    return 1 if n <= 1 else n * factorial(n - 1)\n\nprint(f"\\nFactorial of 5: {factorial(5)}")\n`
  );
  const [pyConsoleLogs, setPyConsoleLogs] = useState([]);
  const [isLoadingPy, setIsLoadingPy] = useState(false);

  // Web compiler effects
  useEffect(() => {
    if (playgroundMode !== 'web') return;
    const timeout = setTimeout(() => {
      const consoleScript = `
        <script>
          (function() {
            var oldLog = console.log;
            console.log = function() {
              var args = Array.prototype.slice.call(arguments);
              window.parent.postMessage({ type: 'CONSOLE_LOG', message: args.join(' ') }, '*');
              oldLog.apply(console, arguments);
            };
          })();
        </script>
      `;

      setSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${css}</style>
            ${consoleScript}
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js, playgroundMode]);

  // JS console listener
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'CONSOLE_LOG') {
        setConsoleLogs(prev => [...prev, e.data.message]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleCopyCode = () => {
    const codeToCopy = playgroundMode === 'web' 
      ? `<!-- HTML -->\n${html}\n\n/* CSS */\n${css}\n\n// JS\n${js}`
      : pythonCode;
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCode = () => {
    if (playgroundMode === 'web') {
      const fullHtml = `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>DevQuik Export</title>\n  <style>\n${css}\n  </style>\n</head>\n<body>\n${html}\n<script>\n${js}\n</script>\n</body>\n</html>`;
      const blob = new Blob([fullHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'devquik-project.html';
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const blob = new Blob([pythonCode], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'devquik-script.py';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const loadBoilerplate = (key) => {
    const b = BOILERPLATES[key];
    if (b) {
      setHtml(b.html);
      setCss(b.css);
      setJs(b.js);
      setConsoleLogs([]);
    }
  };

  // Run Python Wasm Engine
  const runPythonCode = async () => {
    setIsLoadingPy(true);
    setPyConsoleLogs(['[System] Booting WebAssembly Python Runtime Environment...', '[System] Loading standard libraries...']);
    try {
      await loadPyodideScript();
      let pyInstance = pyodide;
      if (!pyInstance) {
        pyInstance = await window.loadPyodide();
        setPyodide(pyInstance);
      }
      
      let outputLines = [];
      const decoder = new TextDecoder('utf-8');
      pyInstance.setStdout({
        write: (buffer) => {
          const text = (buffer instanceof Uint8Array || buffer instanceof ArrayBuffer)
            ? decoder.decode(buffer)
            : String(buffer);
          outputLines.push(text);
          return buffer.length;
        }
      });
      pyInstance.setStderr({
        write: (buffer) => {
          const text = (buffer instanceof Uint8Array || buffer instanceof ArrayBuffer)
            ? decoder.decode(buffer)
            : String(buffer);
          outputLines.push("⚠️ " + text);
          return buffer.length;
        }
      });

      await pyInstance.runPythonAsync(pythonCode);
      
      const logs = outputLines.join('').split('\n').map(line => line.trimEnd());
      if (logs.length > 0 && !logs[logs.length - 1]) logs.pop();
      
      setPyConsoleLogs(logs.length > 0 ? logs : ['[System] Code executed successfully. Output is empty.']);
    } catch (err) {
      setPyConsoleLogs([`❌ Runtime Exception:\n${err.message}`]);
    } finally {
      setIsLoadingPy(false);
    }
  };

  const handleEditorKeyDown = (e, value, setValue) => {
    const textarea = e.target;
    const { selectionStart, selectionEnd } = textarea;

    // 1. Tab Key: Insert 4 spaces
    if (e.key === 'Tab') {
      e.preventDefault();
      const newValue = value.substring(0, selectionStart) + '    ' + value.substring(selectionEnd);
      setValue(newValue);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = selectionStart + 4;
      }, 0);
      return;
    }

    // 2. Auto-closing brackets/quotes
    const pairs = {
      '(': ')',
      '[': ']',
      '{': '}',
      '"': '"',
      "'": "'"
    };
    if (pairs[e.key] !== undefined) {
      e.preventDefault();
      const closingChar = pairs[e.key];
      const newValue = value.substring(0, selectionStart) + e.key + closingChar + value.substring(selectionEnd);
      setValue(newValue);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
      }, 0);
      return;
    }

    // 3. Enter Key auto-indentation after colons (:)
    if (e.key === 'Enter') {
      e.preventDefault();
      const lines = value.substring(0, selectionStart).split('\n');
      const currentLine = lines[lines.length - 1];
      
      const indentMatch = currentLine.match(/^(\s*)/);
      let indent = indentMatch ? indentMatch[1] : '';

      if (currentLine.trim().endsWith(':')) {
        indent += '    ';
      }

      const newValue = value.substring(0, selectionStart) + '\n' + indent + value.substring(selectionEnd);
      setValue(newValue);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = selectionStart + 1 + indent.length;
      }, 0);
      return;
    }

    // 4. Ctrl + Enter or Cmd + Enter: Run Python code dynamically
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (playgroundMode === 'python') {
        runPythonCode();
      }
      return;
    }
  };

  return (
    <div className={`font-sans flex flex-col bg-[#0b1329] text-slate-100 w-full min-h-[92vh] ${
      isFullscreen ? 'fixed inset-0 z-50 p-4 sm:p-6 overflow-hidden' : 'p-6'
    }`}>
      
      {/* Spacious Header Layout */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between pb-5 mb-5 border-b border-slate-800/80 gap-4">
        
        {/* Title, Badge & Mode Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                DevQuik Studio
              </h1>
              <span className="text-xs text-slate-400 font-medium block mt-0.5">Immersive interactive playground page</span>
            </div>
          </div>

          {/* Playground Mode Toggle */}
          <div className="bg-slate-950/80 p-1.5 rounded-2xl flex items-center border border-slate-800">
            <button
              onClick={() => setPlaygroundMode('web')}
              className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all flex items-center space-x-2 ${
                playgroundMode === 'web' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>🌐 Web App IDE</span>
            </button>
            <button
              onClick={() => setPlaygroundMode('python')}
              className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all flex items-center space-x-2 ${
                playgroundMode === 'python' ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>🐍 Python Interpreter</span>
            </button>
          </div>
        </div>

        {/* Action Controls & Template Selector */}
        <div className="flex flex-wrap items-center gap-2.5">
          
          {playgroundMode === 'web' ? (
            <>
              {/* Templates Select Dropdown */}
              <div className="relative min-w-[210px]">
                <select
                  onChange={(e) => loadBoilerplate(e.target.value)}
                  className="w-full pl-3.5 pr-8 py-2 bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer appearance-none shadow-xs"
                >
                  <option value="">⚡ Load Starter Template...</option>
                  <option value="flexbox">🎨 Flexbox Centered Card</option>
                  <option value="counter">🔢 Digital Counter App</option>
                  <option value="todo">📝 To-Do List App</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
              </div>

              {/* View Mode Switcher */}
              <div className="bg-slate-900 p-1 rounded-xl flex items-center border border-slate-800">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'all' ? 'bg-cyan-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Split All
                </button>
                <button
                  onClick={() => setActiveTab('html')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'html' ? 'bg-orange-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  HTML
                </button>
                <button
                  onClick={() => setActiveTab('css')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'css' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CSS
                </button>
                <button
                  onClick={() => setActiveTab('js')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'js' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  JS
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={runPythonCode}
              disabled={isLoadingPy}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-xl text-xs flex items-center space-x-2 shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {isLoadingPy ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Play className="w-4 h-4 text-slate-950 fill-current" />
              )}
              <span>{isLoadingPy ? 'Running Script...' : 'Run Python Script'}</span>
            </button>
          )}

          {/* Copy Code */}
          <button
            onClick={handleCopyCode}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>

          {/* Export Code */}
          <button
            onClick={handleDownloadCode}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs flex items-center space-x-1.5 shadow-md shadow-emerald-600/25 transition-transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Export Code</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-700/80 shadow-xs"
            title="Toggle Fullscreen Workspace"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

        </div>
      </div>

      {/* Main Workspace Layout */}
      {playgroundMode === 'web' ? (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[520px]">
          
          {/* Left Side: Code Editors */}
          <div className="flex flex-col gap-4">
            
            {(activeTab === 'all' || activeTab === 'html') && (
              <div className="bg-[#050b18] rounded-2xl border border-slate-800 overflow-hidden flex-1 flex flex-col shadow-inner">
                <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
                  <span className="text-xs font-extrabold text-orange-400 flex items-center">
                    <FileCode className="w-4 h-4 mr-1.5 text-orange-500" /> HTML5 Markup
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">index.html</span>
                </div>
                <textarea
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                  onKeyDown={(e) => handleEditorKeyDown(e, html, setHtml)}
                  className="w-full flex-1 bg-[#050b18] text-slate-100 font-mono text-xs p-4 focus:outline-none resize-none leading-relaxed min-h-[150px]"
                  spellCheck="false"
                />
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'css') && (
              <div className="bg-[#050b18] rounded-2xl border border-slate-800 overflow-hidden flex-1 flex flex-col shadow-inner">
                <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
                  <span className="text-xs font-extrabold text-sky-400 flex items-center">
                    <Layers className="w-4 h-4 mr-1.5 text-sky-500" /> CSS3 Styles
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">styles.css</span>
                </div>
                <textarea
                  value={css}
                  onChange={(e) => setCss(e.target.value)}
                  onKeyDown={(e) => handleEditorKeyDown(e, css, setCss)}
                  className="w-full flex-1 bg-[#050b18] text-sky-200 font-mono text-xs p-4 focus:outline-none resize-none leading-relaxed min-h-[150px]"
                  spellCheck="false"
                />
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'js') && (
              <div className="bg-[#050b18] rounded-2xl border border-slate-800 overflow-hidden flex-1 flex flex-col shadow-inner">
                <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
                  <span className="text-xs font-extrabold text-amber-400 flex items-center">
                    <Zap className="w-4 h-4 mr-1.5 text-amber-500" /> JavaScript (ES6+) Logic
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">main.js</span>
                </div>
                <textarea
                  value={js}
                  onChange={(e) => setJs(e.target.value)}
                  onKeyDown={(e) => handleEditorKeyDown(e, js, setJs)}
                  className="w-full flex-1 bg-[#050b18] text-amber-200 font-mono text-xs p-4 focus:outline-none resize-none leading-relaxed min-h-[150px]"
                  spellCheck="false"
                />
              </div>
            )}

          </div>

          {/* Right Side: Live Web Preview & Console Terminal */}
          <div className="flex flex-col gap-4">
            
            {/* Live Preview Window */}
            <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col min-h-[340px]">
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-black text-slate-800 flex items-center">
                  <Play className="w-4 h-4 mr-1.5 text-emerald-600 fill-emerald-600" />
                  Live Preview Output
                </span>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Real-Time Sandbox</span>
              </div>

              <iframe
                srcDoc={srcDoc}
                title="output-preview"
                sandbox="allow-scripts allow-modals"
                className="w-full flex-1 border-none bg-white min-h-[300px]"
              />
            </div>

            {/* Console Log Terminal */}
            <div className="bg-[#030712] rounded-2xl border border-slate-800 overflow-hidden h-40 flex flex-col shadow-inner">
              <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center">
                  <Terminal className="w-3.5 h-3.5 mr-1.5 text-cyan-400" /> JS Output Console Logs ({consoleLogs.length})
                </span>
                <button
                  onClick={() => setConsoleLogs([])}
                  className="text-[10px] font-bold text-slate-400 hover:text-white"
                >
                  Clear Console
                </button>
              </div>

              <div className="p-3.5 font-mono text-xs text-slate-300 overflow-y-auto space-y-1.5 flex-1">
                {consoleLogs.length === 0 ? (
                  <span className="text-slate-600 text-[11px] italic">No console logs yet. Use console.log() in JS script...</span>
                ) : (
                  consoleLogs.map((log, i) => (
                    <div key={i} className="flex items-start space-x-2 border-b border-slate-900 pb-0.5">
                      <span className="text-cyan-500 font-bold">$</span>
                      <span className="text-emerald-400">{log}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Python Mode split pane layout */
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[520px]">
          
          {/* Left Side: Python Editor */}
          <div className="bg-[#050b18] rounded-2xl border border-slate-800 overflow-hidden flex flex-col shadow-inner">
            <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
              <span className="text-xs font-extrabold text-amber-500 flex items-center">
                <span className="mr-2">🐍</span> Python 3 Script Editor
              </span>
              <span className="text-[10px] text-slate-500 font-mono">main.py</span>
            </div>
            <textarea
              value={pythonCode}
              onChange={(e) => setPythonCode(e.target.value)}
              onKeyDown={(e) => handleEditorKeyDown(e, pythonCode, setPythonCode)}
              className="w-full flex-1 bg-[#050b18] text-amber-100 font-mono text-xs p-4 focus:outline-none resize-none leading-relaxed min-h-[300px]"
              spellCheck="false"
            />
          </div>

          {/* Right Side: Python Console Output */}
          <div className="bg-[#030712] rounded-2xl border border-slate-800 overflow-hidden flex flex-col shadow-inner">
            <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
              <span className="text-xs font-mono font-bold text-amber-400 flex items-center">
                <Terminal className="w-3.5 h-3.5 mr-1.5 text-amber-500" /> Interactive Python Console Terminal
              </span>
              <button
                onClick={() => setPyConsoleLogs([])}
                className="text-[10px] font-bold text-slate-400 hover:text-white"
              >
                Clear Terminal
              </button>
            </div>

            <div className="p-4 font-mono text-xs text-slate-300 overflow-y-auto space-y-1.5 flex-1 leading-relaxed">
              {pyConsoleLogs.length === 0 ? (
                <span className="text-slate-600 text-[11px] italic">Console idle. Click "Run Python Script" to execute code...</span>
              ) : (
                pyConsoleLogs.map((log, i) => (
                  <div key={i} className="whitespace-pre-wrap">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
