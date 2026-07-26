import React, { useState } from 'react';
import { 
  Search, 
  ExternalLink, 
  GitPullRequest, 
  CheckCircle2, 
  Circle, 
  Lock, 
  ArrowLeft, 
  Rocket, 
  Edit3, 
  Play, 
  Award, 
  Check, 
  FolderGit2, 
  Code2, 
  Flame, 
  Trophy 
} from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'calculator',
    name: 'Calculator',
    stack: 'HTML/CSS/JS',
    completion: 100,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'A responsive grid calculator built with semantic HTML5, modern flexbox CSS, and vanilla JS event handlers.',
    requirements: [
      'Grid layout for numbers & operations',
      'Keyboard input listener',
      'Clear, Reset, and Error handling',
      'Responsive design for mobile'
    ],
    skills: ['HTML5', 'CSS Grid', 'DOM Events', 'JavaScript'],
    github: 'https://github.com/example/calculator-app',
    isDeployed: true
  },
  {
    id: 'weather',
    name: 'Weather App',
    stack: 'React, API Integration',
    completion: 100,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    description: 'A live weather forecast web application featuring city search, temperature toggle, and dynamic weather icons via OpenWeather API.',
    requirements: [
      'Search City functionality',
      'Display current weather data',
      'Dynamic weather icons',
      'Responsive design for all screens'
    ],
    skills: ['State Management', 'Props Handling', 'Fetch API', 'JSON Parsing', 'Responsive UI'],
    github: 'https://github.com/example/weather-app',
    isDeployed: false
  },
  {
    id: 'todo',
    name: 'Todo App',
    stack: 'React, State Management',
    completion: 100,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    description: 'Task management dashboard with local storage persistence, category filter tabs, and drag-and-drop ordering.',
    requirements: [
      'Add & delete tasks',
      'Mark tasks complete',
      'Filter by Active/Completed',
      'Local storage saving'
    ],
    skills: ['useState', 'useEffect', 'LocalStorage', 'CSS Modules'],
    github: 'https://github.com/example/todo-react',
    isDeployed: true
  },
  {
    id: 'expense-tracker',
    name: 'Expense Tracker',
    stack: 'React, Tailwind, Firebase',
    completion: 75,
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    description: 'Financial dashboard tracking income, expenses, monthly budgets, and visual chart breakdowns.',
    requirements: [
      'Authentication',
      'Dark Mode Toggle',
      'Live Cloud Sync',
      'Export Monthly PDF'
    ],
    skills: ['React Hooks', 'Chart.js', 'Firebase Auth', 'Tailwind'],
    github: 'https://github.com/example/expense-tracker',
    isDeployed: false
  }
];

export default function PortfolioShelf({ userState, onClaimXp }) {
  const [selectedFilter, setSelectedFilter] = useState('All'); // 'All' | 'Completed' | 'In Progress'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null); // Detailed Project View modal/page

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesFilter = 
      selectedFilter === 'All' ? true : 
      selectedFilter === 'Completed' ? project.status === 'Completed' : 
      project.status === 'In Progress';

    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.stack.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 font-body-md text-on-surface space-y-8 animate-fadeIn">
      
      {/* ========================================================
          PROJECT DETAILS VIEW (Screenshot 2)
         ======================================================== */}
      {selectedProject ? (
        <div className="space-y-6 text-left">
          {/* Top Header Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2 border-b border-outline-variant">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-surface border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors shadow-sm"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-extrabold font-display-lg text-on-surface">
                    {selectedProject.name}
                  </h1>
                  <span className="px-2.5 py-0.5 bg-primary-fixed text-primary font-mono text-xs font-bold rounded">
                    {selectedProject.stack.split(',')[0]}
                  </span>
                  {selectedProject.status === 'Completed' && (
                    <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 font-mono text-xs font-bold rounded flex items-center gap-1">
                      <Check size={14} /> Completed
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => alert(`Opening ${selectedProject.name} Live Playground`)}
                className="tactile-button-primary px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-xl shadow-md"
              >
                Open Playground
              </button>
              <button 
                onClick={() => alert('Vercel deployment process initiated.')}
                className="px-4 py-2.5 bg-surface border border-outline-variant text-on-surface font-bold text-xs rounded-xl hover:bg-surface-container-high transition-colors"
              >
                Deploy
              </button>
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2.5 bg-surface border border-outline-variant text-on-surface font-bold text-xs rounded-xl hover:bg-surface-container-high transition-colors flex items-center gap-1.5"
              >
                GitHub
              </a>
              <button 
                onClick={() => alert('Editing mode active.')}
                className="px-4 py-2.5 bg-surface border border-outline-variant text-on-surface font-bold text-xs rounded-xl hover:bg-surface-container-high transition-colors"
              >
                Edit
              </button>
            </div>
          </div>

          {/* Main Desktop Mockup Preview Image */}
          <div className="w-full aspect-[16/9] max-h-[480px] rounded-2xl border border-outline-variant overflow-hidden shadow-2xl relative bg-slate-900 group">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* Requirements & Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Left 2 Cols */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Requirements Checklist Card */}
              <div className="p-6 bg-surface border border-outline-variant rounded-2xl space-y-4">
                <h3 className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  REQUIREMENTS CHECKLIST
                </h3>
                <div className="space-y-2.5 text-xs text-on-surface font-medium">
                  {selectedProject.requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained Card */}
              <div className="p-6 bg-surface border border-outline-variant rounded-2xl space-y-4">
                <h3 className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  SKILLS GAINED
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-lg font-mono text-xs text-on-surface font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column Details Sidebar */}
            <div className="space-y-5">
              
              {/* Stack & Technologies Box */}
              <div className="p-5 bg-surface border border-outline-variant rounded-2xl space-y-3">
                <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  STACK & TECHNOLOGIES
                </h4>
                <div className="space-y-2 text-xs font-medium text-on-surface">
                  {selectedProject.skills.map((tech, i) => (
                    <div key={i} className="flex justify-between items-center py-1 border-b border-outline-variant/40 last:border-0">
                      <span>{tech}</span>
                      <Check size={16} className="text-primary" />
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub Connection Box */}
              <div className="p-5 bg-surface border border-outline-variant rounded-2xl space-y-3">
                <h4 className="text-xs font-mono font-bold text-on-surface uppercase tracking-wider">
                  GitHub Connection
                </h4>
                <div className="p-3 bg-surface-container-low border border-outline-variant/60 rounded-xl text-xs space-y-1">
                  <span className="text-emerald-600 font-bold block">● Repository Connected</span>
                  <span className="text-on-surface-variant text-[11px] font-mono block">Last Commit: Yesterday</span>
                </div>
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-surface border border-outline-variant rounded-xl font-bold text-xs text-on-surface flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors"
                >
                  Open Repository <ExternalLink size={14} />
                </a>
              </div>

              {/* Deployment Box */}
              <div className="p-5 bg-surface border-2 border-primary/20 rounded-2xl space-y-3">
                <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  Deployment
                </h4>
                <p className="text-xs text-on-surface-variant">
                  {selectedProject.isDeployed ? 'Published live on Vercel.' : 'Your project is not yet published to a live URL.'}
                </p>

                <button 
                  onClick={() => alert('Vercel deployment initiated!')}
                  className="w-full py-3 bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-md"
                >
                  <Rocket size={16} /> Publish with Vercel
                </button>
                <button 
                  onClick={() => alert('Netlify deployment initiated!')}
                  className="w-full py-3 bg-surface border border-outline-variant text-on-surface font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors"
                >
                  Publish with Netlify
                </button>
              </div>

            </div>

          </div>
        </div>
      ) : (
        /* ========================================================
            MY BUILD SHELF MAIN DASHBOARD (Screenshot 1)
           ======================================================== */
        <div className="space-y-8 text-left">
          
          {/* Header & Ribbon Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold font-display-lg text-on-surface">
                My Build Shelf
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="px-2.5 py-0.5 bg-surface-container-high text-on-surface-variant font-mono text-xs font-semibold rounded border border-outline-variant">
                  {completedDaysCount} Projects Built
                </span>
                <span className="text-xs font-mono text-on-surface-variant font-medium">
                  Current Roadmap: <strong className="text-primary">{userState?.activeTrack?.toUpperCase() || 'HTML'}</strong>
                </span>
              </div>
            </div>

            {/* Achievement Ribbon */}
            <div className="px-4 py-2.5 bg-gradient-to-r from-primary-fixed to-surface-container border border-primary/30 rounded-xl text-xs font-bold text-primary flex items-center gap-2 shadow-sm">
              <Award size={18} />
              <span>
                {completedDaysCount > 0 ? `Latest Build: ${userState?.lastProjectTitle || 'Web Project'} — Completed` : 'No Projects Built Yet — Start Day 1 Mission!'}
              </span>
            </div>
          </div>

          {/* 4-Card Progress Summary Row (100% REAL DATA) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-surface border border-outline-variant rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] font-mono font-bold text-on-surface-variant uppercase tracking-wider block">PROJECTS BUILT</span>
              <span className="text-3xl font-extrabold font-display-lg text-on-surface">{completedDaysCount}</span>
            </div>

            <div className="p-5 bg-surface border border-outline-variant rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] font-mono font-bold text-on-surface-variant uppercase tracking-wider block">ROADMAPS FINISHED</span>
              <span className="text-3xl font-extrabold font-display-lg text-on-surface">{Math.floor(completedDaysCount / 7)}</span>
            </div>

            <div className="p-5 bg-surface border border-outline-variant rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] font-mono font-bold text-on-surface-variant uppercase tracking-wider block">DEPLOYMENT READY</span>
              <span className="text-3xl font-extrabold font-display-lg text-on-surface">{completedDaysCount > 0 ? Math.floor(completedDaysCount / 2) : 0}</span>
            </div>

            <div className="p-5 bg-surface border border-outline-variant rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] font-mono font-bold text-on-surface-variant uppercase tracking-wider block">GITHUB LINKED</span>
              <span className="text-3xl font-extrabold font-display-lg text-on-surface">{userState?.githubLinkedCount || 0}</span>
            </div>
          </div>

          {/* Main Grid: Left Projects & Right Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left 2 Cols */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Hero "Continue Building" Card (Dark Slate Box) */}
              <div className="p-7 bg-slate-900 text-white border border-slate-700 rounded-2xl shadow-2xl relative overflow-hidden space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="px-2.5 py-1 bg-primary text-white font-mono text-[10px] font-bold rounded uppercase tracking-wider">
                      75% Complete
                    </span>
                    <h2 className="text-3xl font-extrabold font-display-lg text-white mt-2">
                      Expense Tracker
                    </h2>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      Technology Stack: React, Tailwind, Firebase
                    </p>
                  </div>

                  {/* Circular Orange Progress Ring */}
                  <div className="relative w-16 h-16 rounded-full border-4 border-slate-700 border-t-primary border-r-primary flex items-center justify-center font-bold text-xs text-white">
                    75%
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 block">Remaining Tasks:</span>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300 border border-slate-700 flex items-center gap-1.5">
                      <Circle size={14} /> Authentication
                    </span>
                    <span className="px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300 border border-slate-700 flex items-center gap-1.5">
                      <Circle size={14} /> Dark Mode
                    </span>
                    <span className="px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300 border border-slate-700 flex items-center gap-1.5">
                      <Circle size={14} /> Deploy
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => setSelectedProject(PROJECTS_DATA[3])}
                    className="tactile-button-primary px-8 py-3.5 bg-primary text-white font-bold text-sm rounded-xl flex items-center gap-2 shadow-lg hover:bg-primary-fixed-dim transition-all"
                  >
                    Continue Building <ArrowLeft size={16} className="rotate-180" />
                  </button>
                </div>
              </div>

              {/* Search & Filter Controls Row */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant">
                  {['All', 'Completed', 'In Progress'].map(filter => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        selectedFilter === filter 
                          ? 'bg-surface text-primary shadow-sm' 
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input
                    type="text"
                    placeholder="Search Projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-xl text-xs font-body-md text-on-surface outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Completed Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm hover:border-primary/50 transition-all card-hover flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }}>
                        <span className={`absolute top-3 right-3 px-2 py-0.5 font-mono text-[10px] font-bold rounded ${project.status === 'Completed' ? 'bg-slate-900/80 text-white' : 'bg-primary text-white'}`}>
                          {project.status === 'Completed' ? 'COMPLETED' : `${project.completion}%`}
                        </span>
                      </div>

                      <div className="p-4 space-y-1 text-left">
                        <h3 className="font-bold text-base text-on-surface">{project.name}</h3>
                        <span className="text-xs font-mono text-on-surface-variant block">{project.stack}</span>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2.5 bg-surface border border-outline-variant rounded-xl text-xs font-bold text-on-surface flex items-center justify-center gap-1.5 hover:border-primary hover:text-primary transition-colors"
                      >
                        Open <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column Sidebar Widgets */}
            <div className="space-y-6">
              
              {/* Upcoming Quests Box */}
              <div className="p-6 bg-surface border border-outline-variant rounded-2xl space-y-4 text-left">
                <h3 className="text-base font-bold font-display-lg text-on-surface">Upcoming Quests</h3>
                
                <div className="space-y-3">
                  <div className="p-4 bg-surface-container-low border border-dashed border-outline-variant/70 rounded-xl flex items-center gap-3 opacity-70">
                    <Lock size={20} className="text-on-surface-variant shrink-0" />
                    <div>
                      <h4 className="font-bold text-xs text-on-surface">Movie App</h4>
                      <span className="text-[11px] text-on-surface-variant block font-mono">Locked: Complete React Day 10</span>
                    </div>
                  </div>

                  <div className="p-4 bg-surface-container-low border border-dashed border-outline-variant/70 rounded-xl flex items-center gap-3 opacity-70">
                    <Lock size={20} className="text-on-surface-variant shrink-0" />
                    <div>
                      <h4 className="font-bold text-xs text-on-surface">Chat App</h4>
                      <span className="text-[11px] text-on-surface-variant block font-mono">Locked: Complete React Day 12</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack Proficiency Box */}
              <div className="p-6 bg-surface border border-outline-variant rounded-2xl space-y-4 text-left">
                <h3 className="text-base font-bold font-display-lg text-on-surface">Stack Proficiency</h3>
                
                <div className="space-y-3 text-xs font-medium">
                  <div className="space-y-1">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span>Frontend Architecture</span>
                      <span className="text-primary font-bold">82%</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[82%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span>State Management</span>
                      <span className="text-primary font-bold">65%</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[65%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span>UI/UX Implementation</span>
                      <span className="text-primary font-bold">94%</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[94%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
