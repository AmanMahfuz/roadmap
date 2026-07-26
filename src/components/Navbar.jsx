import React, { useState } from 'react';
import { 
  Flame, 
  Trophy, 
  Star, 
  LogOut, 
  Code, 
  Sparkles, 
  LogIn, 
  Heart, 
  Rocket, 
  Lock, 
  BarChart3, 
  Bot, 
  Layers, 
  Terminal,
  ChevronDown,
  ShieldCheck,
  User,
  Compass
} from 'lucide-react';
import { getXpProgressForLevel } from '../services/gamificationEngine';

export default function Navbar({ 
  activeView = 'languages', 
  activeLanguage = null,
  onSelectView, 
  userState, 
  currentUser = null,
  onOpenAuth,
  onOpenProfile,
  onOpenAiMentor,
  onSignOut
}) {
  const xpProgress = getXpProgressForLevel(userState?.xp || 0);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Header Bar (Clean Mobile-First Header) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-2.5 font-sans text-slate-900 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => onSelectView('languages')}>
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 p-0.5 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Code className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <div>
              <span className="font-black text-lg tracking-tight text-slate-900">
                SkillForge
              </span>
              <span className="text-[10px] text-slate-400 font-semibold block leading-none">Job-Ready Mobile App</span>
            </div>
          </div>

          {/* Center: Desktop Navigation Bar (Visible on md+ screens) */}
          <nav className="hidden md:flex items-center space-x-1.5 bg-slate-100/90 p-1 rounded-xl border border-slate-200">
            
            <button 
              onClick={() => onSelectView('languages')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeView === 'languages' 
                  ? 'bg-white text-orange-600 shadow-xs border border-slate-200' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tracks</span>
            </button>

            {activeLanguage && (
              <button 
                onClick={() => onSelectView('roadmap')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeView === 'roadmap' 
                    ? 'bg-white text-orange-600 shadow-xs border border-slate-200' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>{activeLanguage.icon}</span>
                <span>{activeLanguage.name} Path</span>
              </button>
            )}

            <button
              onClick={() => onSelectView('projects')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeView === 'projects'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Projects</span>
            </button>

            <button
              onClick={() => onSelectView('analytics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeView === 'analytics'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
              <span>Analytics & Heatmap</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setToolsDropdownOpen(prev => !prev)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                  ['proof', 'playground', 'skilltree'].includes(activeView)
                    ? 'bg-white text-emerald-700 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>More Tools</span>
                <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70" />
              </button>

              {toolsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onClick={() => setToolsDropdownOpen(false)}
                >
                  <button
                    onClick={() => onSelectView('proof')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Proof-of-Skill Artifacts</span>
                  </button>

                  <button
                    onClick={() => onSelectView('playground')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <Terminal className="w-4 h-4 text-cyan-600" />
                    <span>Code Playground</span>
                  </button>

                  <button
                    onClick={() => onSelectView('skilltree')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>Skill Tree Matrix</span>
                  </button>
                </div>
              )}
            </div>

          </nav>

          {/* Right: Mobile App Header Actions (Streak + AI Mentor + Profile) */}
          <div className="flex items-center space-x-2">
            
            <button
              onClick={onOpenAiMentor}
              className="flex items-center space-x-1 px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl text-xs font-extrabold text-indigo-700 transition-all"
            >
              <Bot className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline">AI Mentor</span>
            </button>

            <div className="flex items-center space-x-1 px-2.5 py-1.5 bg-orange-50 border border-orange-200 rounded-xl text-xs font-mono font-bold text-orange-700">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse" />
              <span>{userState?.streak ?? 1}d</span>
            </div>

            <div className="hidden sm:flex items-center space-x-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold text-slate-700">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Lvl {xpProgress.currentLevel}</span>
              <span className="text-amber-600 font-normal text-[11px]">({userState?.xp || 0} XP)</span>
            </div>

            <button 
              onClick={onOpenProfile}
              className="p-1 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all border border-slate-800 shadow-xs"
              title="Profile"
            >
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-extrabold text-[11px]">
                {currentUser?.user_metadata?.full_name?.charAt(0) || currentUser?.email?.charAt(0) || 'D'}
              </div>
            </button>

          </div>

        </div>
      </header>

      {/* MOBILE-FIRST FIXED BOTTOM APPLICATION NAVIGATION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-2 py-2 flex items-center justify-around shadow-2xl">
        
        <button
          onClick={() => onSelectView('languages')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all ${
            activeView === 'languages' ? 'text-orange-600 font-extrabold scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Tracks</span>
        </button>

        <button
          onClick={() => onSelectView('roadmap')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all ${
            activeView === 'roadmap' ? 'text-orange-600 font-extrabold scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Roadmap</span>
        </button>

        <button
          onClick={() => onSelectView('projects')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all ${
            activeView === 'projects' ? 'text-indigo-600 font-extrabold scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <Rocket className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Projects</span>
        </button>

        <button
          onClick={() => onSelectView('analytics')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all ${
            activeView === 'analytics' ? 'text-amber-500 font-extrabold scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <BarChart3 className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Analytics</span>
        </button>

        <button
          onClick={onOpenProfile}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-2xl text-slate-700 font-semibold transition-all hover:scale-105"
        >
          <User className="w-5 h-5 mb-0.5 text-slate-800" />
          <span className="text-[10px]">Profile</span>
        </button>

      </div>
    </>
  );
}
