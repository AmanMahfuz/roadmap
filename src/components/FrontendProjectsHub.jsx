import React, { useState } from 'react';
import { 
  CheckSquare, 
  CloudSun, 
  Wallet, 
  Lock, 
  Unlock, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Search, 
  TrendingUp, 
  TrendingDown, 
  ExternalLink,
  Award,
  Play,
  FileCode,
  Layers,
  ArrowRight,
  Layout,
  BarChart3,
  Palette,
  Sun,
  Moon,
  Copy,
  Check,
  Globe,
  Zap,
  Terminal,
  X
} from 'lucide-react';

export default function FrontendProjectsHub({ userCompletedDays = {}, onBackToRoadmap }) {
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'html_css' | 'javascript' | 'fullstack'
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const [darkModeSaas, setDarkModeSaas] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  // --- 1. TO-DO DEMO STATE ---
  const [todos, setTodos] = useState([
    { id: 1, text: 'Master HTML5 Semantic Layouts', completed: true, priority: 'High' },
    { id: 2, text: 'Build Responsive Flexbox & Grid Cards', completed: true, priority: 'Medium' },
    { id: 3, text: 'Fetch Weather API Data with Async/Await', completed: false, priority: 'High' }
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: newTodoText.trim(), completed: false, priority: 'Medium' }]);
    setNewTodoText('');
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  // CATEGORIZED PROJECT CARDS DATA
  const HTML_CSS_PROJECTS = [
    {
      id: 'hc_1',
      title: 'Modern SaaS Landing Page',
      badge: 'HTML & CSS',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      difficulty: 'Beginner → Intermediate',
      icon: '🎨',
      description: 'Conversion-focused landing page featuring responsive nav, flexbox hero section, 3-column feature grid, and single-click dark/light mode CSS variables.',
      skills: ['Semantic HTML5', 'CSS Flexbox', 'CSS Custom Properties', 'Responsive Media Queries'],
      challenge: 'Implement CSS variables (--primary-color, --bg-dark) to toggle dark mode dynamically.'
    },
    {
      id: 'hc_2',
      title: 'Analytics & Learning Dashboard UI',
      badge: 'HTML & CSS',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      difficulty: 'Intermediate',
      icon: '📊',
      description: 'Clean web analytics layout built with CSS Grid (grid-template-areas), sticky sidebar positioning, stat summary cards, and mobile bottom navigation shift.',
      skills: ['CSS Grid Masterclass', 'Sticky Positioning', 'Stat Cards Widgets', 'HTML Data Tables'],
      challenge: 'Make the layout shift sidebar to a sticky bottom navigation bar on viewports < 768px.'
    },
    {
      id: 'hc_3',
      title: 'Creative Glassmorphism Portfolio',
      badge: 'HTML & CSS',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      difficulty: 'Intermediate → Advanced',
      icon: '✨',
      description: 'Modern visual portfolio featuring frosted translucent glass cards (backdrop-filter: blur), interactive project hover zoom, and CSS keyframe floating shapes.',
      skills: ['Glassmorphism UI', 'CSS Animations (@keyframes)', 'Hover Transform Scale', 'Styled Contact Form'],
      challenge: 'Create floating background shapes using pure CSS @keyframes animations.'
    }
  ];

  const JAVASCRIPT_PROJECTS = [
    {
      id: 'js_1',
      title: 'Interactive To-Do App',
      badge: 'JavaScript',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      difficulty: 'Beginner',
      icon: '📝',
      description: 'Task management app featuring full CRUD operations, task completion toggling, priority filter, search filter, and LocalStorage state persistence.',
      skills: ['DOM QuerySelectors', 'EventListener Registration', 'Array Methods (map, filter)', 'LocalStorage JSON']
    },
    {
      id: 'js_2',
      title: 'Functional Web Calculator',
      badge: 'JavaScript',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      difficulty: 'Beginner',
      icon: '🧮',
      description: 'Digital calculator supporting basic arithmetic operations (+ - * /), keyboard keydown event listeners, and clear/reset state management.',
      skills: ['Keyboard Event Listeners', 'State Management', 'Eval / String Math Engine', 'DOM Rendering']
    },
    {
      id: 'js_3',
      title: 'Live Digital Clock App',
      badge: 'JavaScript',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      difficulty: 'Beginner',
      icon: '🕒',
      description: 'Real-time updating digital clock with 12h/24h format toggling, live seconds updating via setInterval(), and custom dark/light clock faces.',
      skills: ['setInterval Timing Engine', 'Date Object Formatters', 'DOM Text Updating', 'Theme Toggles']
    },
    {
      id: 'js_4',
      title: 'Random Quote Generator',
      badge: 'JavaScript',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      difficulty: 'Beginner',
      icon: '💬',
      description: 'Dynamic quote picker with random array index selection, category filters (Tech, Motivation, Wisdom), and one-click tweet/copy buttons.',
      skills: ['Math.random Lookup', 'Array Filtering', 'Clipboard API', 'DOM Class Toggling']
    }
  ];

  const FULLSTACK_PROJECTS = [
    {
      id: 'fs_1',
      title: 'Live Weather App (Fetch REST API)',
      badge: 'HTML + CSS + JS',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      difficulty: 'Intermediate',
      icon: '🌤️',
      description: 'Real-time weather application connecting to public weather APIs using async/await, displaying 5-day forecast cards, humidity, wind, and city search.',
      skills: ['Async / Await Syntax', 'Fetch API REST Calls', 'JSON Deserialization', 'Try / Catch Error Handling']
    },
    {
      id: 'fs_2',
      title: 'Personal Finance Expense Tracker',
      badge: 'HTML + CSS + JS',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      difficulty: 'Intermediate',
      icon: '💳',
      description: 'Income and expense tracking dashboard calculating net balance in real-time with LocalStorage data persistence and transaction history lists.',
      skills: ['Array Reduce Aggregation', 'LocalStorage Sync', 'Form Input Validation', 'State Management']
    },
    {
      id: 'fs_3',
      title: 'Interactive Quiz Champion App',
      badge: 'HTML + CSS + JS',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      difficulty: 'Intermediate',
      icon: '❓',
      description: 'Timed MCQ assessment app featuring question state progression, option feedback tooltips, timer countdown engine, and final score percentage summary.',
      skills: ['State Progression', 'Countdown Timer', 'Score Analytics Math', 'Dynamic Result Cards']
    },
    {
      id: 'fs_4',
      title: 'Movie Finder & Search App',
      badge: 'HTML + CSS + JS',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      difficulty: 'Intermediate → Advanced',
      icon: '🎬',
      description: 'Movie database search application connecting to OMDb API with search debouncing, poster image gallery, ratings, and modal detail views.',
      skills: ['API Search Querying', 'Grid Poster Gallery', 'Modal Overlays', 'Debounce Optimization']
    }
  ];

  const handleCopySnippet = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-xs font-bold text-indigo-300 mb-3">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Developer Portfolio Project Hub</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Portfolio-Ready Projects by Language
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
            Categorized standalone projects organized under <strong>HTML & CSS, Vanilla JavaScript, and Full Integration (HTML + CSS + JS)</strong>. Build real-world portfolio artifacts to prove your skills to recruiters.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'all' ? 'bg-white text-slate-950 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              All Projects (11)
            </button>
            <button
              onClick={() => setSelectedCategory('html_css')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center ${
                selectedCategory === 'html_css' ? 'bg-orange-500 text-white shadow-md' : 'bg-slate-800 text-orange-300 hover:text-white border border-slate-700'
              }`}
            >
              <Globe className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
              HTML & CSS (3)
            </button>
            <button
              onClick={() => setSelectedCategory('javascript')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center ${
                selectedCategory === 'javascript' ? 'bg-amber-500 text-white shadow-md' : 'bg-slate-800 text-amber-300 hover:text-white border border-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              JavaScript (4)
            </button>
            <button
              onClick={() => setSelectedCategory('fullstack')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center ${
                selectedCategory === 'fullstack' ? 'bg-cyan-600 text-white shadow-md' : 'bg-slate-800 text-cyan-300 hover:text-white border border-slate-700'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              HTML + CSS + JS (4)
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: HTML & CSS PROJECTS */}
      {(selectedCategory === 'all' || selectedCategory === 'html_css') && (
        <div className="mb-10 space-y-4">
          <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-200">
            <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
              🌐
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">HTML & CSS Portfolio Projects</h2>
              <span className="text-xs text-slate-500 font-medium">Layout architecture, Flexbox, CSS Grid & keyframe animations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HTML_CSS_PROJECTS.map((proj) => (
              <div key={proj.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{proj.icon}</span>
                    <span className={`px-2.5 py-0.5 border font-extrabold text-[10px] rounded-full uppercase ${proj.badgeColor}`}>
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 mb-1.5">{proj.title}</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-3">{proj.difficulty}</span>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{proj.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {proj.skills.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveProjectModal(proj)}
                  className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-sm transition-transform hover:scale-102"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>View Project Blueprint & Demo</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: JAVASCRIPT PROJECTS */}
      {(selectedCategory === 'all' || selectedCategory === 'javascript') && (
        <div className="mb-10 space-y-4">
          <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-200">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
              ⚡
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">JavaScript (Vanilla JS) Projects</h2>
              <span className="text-xs text-slate-500 font-medium">DOM manipulation, event handling, CRUD operations & state</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {JAVASCRIPT_PROJECTS.map((proj) => (
              <div key={proj.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{proj.icon}</span>
                    <span className={`px-2.5 py-0.5 border font-extrabold text-[10px] rounded-full uppercase ${proj.badgeColor}`}>
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 mb-1.5">{proj.title}</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-3">{proj.difficulty}</span>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{proj.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {proj.skills.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveProjectModal(proj)}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-sm transition-transform hover:scale-102"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>View Project Blueprint & Demo</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: FULLSTACK INTEGRATION PROJECTS (HTML + CSS + JS) */}
      {(selectedCategory === 'all' || selectedCategory === 'fullstack') && (
        <div className="mb-10 space-y-4">
          <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-200">
            <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
              🔥
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">HTML + CSS + JS Integration Projects</h2>
              <span className="text-xs text-slate-500 font-medium">Async Fetch APIs, LocalStorage data persistence & real-world web apps</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FULLSTACK_PROJECTS.map((proj) => (
              <div key={proj.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{proj.icon}</span>
                    <span className={`px-2.5 py-0.5 border font-extrabold text-[10px] rounded-full uppercase ${proj.badgeColor}`}>
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 mb-1.5">{proj.title}</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-3">{proj.difficulty}</span>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{proj.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {proj.skills.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveProjectModal(proj)}
                  className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-sm transition-transform hover:scale-102"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>View Project Blueprint & Demo</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PROJECT DEMO MODAL */}
      {activeProjectModal && (
        <div className="day-modal-overlay" onClick={() => setActiveProjectModal(null)}>
          <div 
            className="day-modal-container max-w-3xl p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-y-auto max-h-[88vh] font-sans text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{activeProjectModal.icon}</span>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl font-extrabold text-slate-900">{activeProjectModal.title}</h2>
                    <span className={`px-2.5 py-0.5 border font-extrabold text-[10px] rounded-full uppercase ${activeProjectModal.badgeColor}`}>
                      {activeProjectModal.badge}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{activeProjectModal.difficulty}</span>
                </div>
              </div>

              <button onClick={() => setActiveProjectModal(null)} className="p-2 text-slate-400 hover:text-slate-700 rounded-xl">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">{activeProjectModal.description}</p>

            {/* If Project is SaaS Landing Page, show dark/light toggle preview demo */}
            {activeProjectModal.id === 'hc_1' && (
              <div className={`p-6 rounded-2xl border mb-4 ${darkModeSaas ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-700/60">
                  <span className="font-bold text-xs">SaaS Landing Page Live Theme Sandbox</span>
                  <button
                    onClick={() => setDarkModeSaas(!darkModeSaas)}
                    className="px-3 py-1 bg-orange-500 text-white rounded-lg text-xs font-bold"
                  >
                    Toggle {darkModeSaas ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
                <h3 className="text-xl font-black mb-1">Build SaaS Products Effortlessly</h3>
                <p className="text-xs text-slate-400 mb-3">CSS Variables enable seamless theme toggles with zero code repetition.</p>
              </div>
            )}

            {/* If Project is To-Do App, show interactive live task manager */}
            {(activeProjectModal.id === 'js_1' || activeProjectModal.id === 'hc_1') && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4 space-y-3">
                <h4 className="font-bold text-xs text-slate-800">Interactive Demo Test Sandbox:</h4>
                <form onSubmit={addTodo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter new task..."
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    className="flex-1 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs"
                  />
                  <button type="submit" className="px-4 py-1.5 bg-emerald-600 text-white font-bold text-xs rounded-xl">Add</button>
                </form>
                <div className="space-y-1.5">
                  {todos.map(t => (
                    <div key={t.id} className="p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                      <span className={t.completed ? 'line-through text-slate-400' : 'font-bold'}>{t.text}</span>
                      <button onClick={() => deleteTodo(t.id)} className="text-rose-500 font-bold">Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400">Starter Boilerplate Code</span>
                <button
                  onClick={() => handleCopySnippet(`/* Starter Template for ${activeProjectModal.title} */\n/* HTML5 + CSS Variables Reset */`)}
                  className="px-2.5 py-1 bg-slate-800 text-slate-200 rounded text-[10px] font-bold border border-slate-700 flex items-center space-x-1"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="text-[11px] font-mono text-slate-300">
                {`<!-- ${activeProjectModal.title} Blueprint -->\n<div class="card">\n  <h2>${activeProjectModal.title}</h2>\n</div>`}
              </pre>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-extrabold"
              >
                Close Blueprint
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
