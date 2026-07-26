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
    html: `<div className="card">
  <div className="badge">Frontend Track</div>
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
    html: `<div className="counter-box">
  <h2>Digital Counter</h2>
  <div id="count-val" className="number">0</div>
  <div className="btn-group">
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
    html: `<div className="todo-app">
  <h2>Task Checklist</h2>
  <div className="input-bar">
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

export default function CodePlayground() {
  const [html, setHtml] = useState(BOILERPLATES.flexbox.html);
  const [css, setCss] = useState(BOILERPLATES.flexbox.css);
  const [js, setJs] = useState(BOILERPLATES.flexbox.js);

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'html' | 'css' | 'js'
  const [srcDoc, setSrcDoc] = useState('');
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Embed console log listener inside preview iframe
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
  }, [html, css, js]);

  // Listen to console log postMessage from iframe
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
    const combined = `<!-- HTML -->\n${html}\n\n/* CSS */\n${css}\n\n// JS\n${js}`;
    navigator.clipboard.writeText(combined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadHtml = () => {
    const fullHtml = `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>SkillForge Export</title>\n  <style>\n${css}\n  </style>\n</head>\n<body>\n${html}\n<script>\n${js}\n</script>\n</body>\n</html>`;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skillforge-project.html';
    a.click();
    URL.revokeObjectURL(url);
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

  return (
    <div className={`font-sans flex flex-col bg-[#0b1329] text-slate-100 ${
      isFullscreen ? 'fixed inset-0 z-50 p-4 sm:p-6 overflow-hidden' : 'max-w-7xl mx-auto px-4 sm:px-6 py-6 rounded-3xl border border-slate-800/80 shadow-2xl min-h-[88vh]'
    }`}>
      
      {/* Spacious Header Layout */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between pb-5 mb-5 border-b border-slate-800/80 gap-4">
        
        {/* Title & Badge */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2.5">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Pro Code Playground
              </h1>
              <span className="px-2.5 py-0.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[11px] font-extrabold rounded-full tracking-wide">
                HTML + CSS + JS
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium block mt-0.5">Build, test, debug console logs & export web projects</span>
          </div>
        </div>

        {/* Action Controls & Template Selector */}
        <div className="flex flex-wrap items-center gap-2.5">
          
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

          {/* Copy Code */}
          <button
            onClick={handleCopyCode}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>

          {/* Export HTML */}
          <button
            onClick={handleDownloadHtml}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs flex items-center space-x-1.5 shadow-md shadow-emerald-600/25 transition-transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Export HTML</span>
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

    </div>
  );
}
