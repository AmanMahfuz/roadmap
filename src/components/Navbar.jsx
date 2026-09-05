import React from 'react';
import { 
  Flame, 
  Trophy, 
  Zap, 
  LogOut, 
  LogIn, 
  Sparkles, 
  Code2, 
  Compass, 
  Calendar,
  User
} from 'lucide-react';
import { getXpProgressForLevel } from '../services/gamificationEngine';

export default function Navbar({ 
  activeView = 'dashboard', 
  onSelectView, 
  userState, 
  currentUser = null,
  onOpenAuth,
  onOpenProfile,
  onSignOut
}) {
  const xpProgress = getXpProgressForLevel(userState?.xp || 0);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-2.5 font-sans text-slate-900 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div 
          className="flex items-center space-x-2.5 cursor-pointer group" 
          onClick={() => onSelectView('dashboard')}
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 to-yellow-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-lg">
              🐍
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-black text-lg tracking-tight text-slate-900">
                DevQuik
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 bg-yellow-400 text-slate-950 rounded-sm">
                Python
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold block leading-none">15-Day AI Fast-Track</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-100/90 p-1 rounded-2xl border border-slate-200">
          
          <button 
            onClick={() => onSelectView('dashboard')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap cursor-pointer ${
              activeView === 'dashboard' 
                ? 'bg-white text-indigo-600 shadow-xs border border-slate-200' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>

          <button 
            onClick={() => onSelectView('roadmap')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap cursor-pointer ${
              activeView === 'roadmap' 
                ? 'bg-white text-blue-600 shadow-xs border border-slate-200' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
            <span>15-Day Roadmap</span>
          </button>

          <button
            onClick={() => onSelectView('playground')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap cursor-pointer ${
              activeView === 'playground'
                ? 'bg-white text-emerald-600 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code Sandbox</span>
          </button>

          <button
            onClick={() => onSelectView('profile')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap cursor-pointer ${
              activeView === 'profile'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>GitHub Activity</span>
          </button>

        </nav>

        {/* Right: Gamification Badges & Auth */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Streak Flame */}
          <div className="flex items-center space-x-1 px-2.5 py-1 bg-orange-50 border border-orange-200/80 rounded-xl text-orange-600 text-xs font-black shadow-2xs">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span>{userState?.streak || 1}d</span>
          </div>

          {/* XP Badge */}
          <div className="flex items-center space-x-1 px-2.5 py-1 bg-yellow-50 border border-yellow-200/80 rounded-xl text-yellow-600 text-xs font-black shadow-2xs">
            <Zap className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
            <span>{userState?.xp || 0} XP</span>
          </div>

          {/* Level Badge */}
          <div className="hidden sm:flex items-center space-x-1 px-2.5 py-1 bg-indigo-50 border border-indigo-200/80 rounded-xl text-indigo-600 text-xs font-black shadow-2xs">
            <Trophy className="w-3.5 h-3.5 text-indigo-600" />
            <span>Lvl {xpProgress.currentLevel}</span>
          </div>

          {/* Auth Button / Profile Avatar */}
          {currentUser ? (
            <button
              onClick={() => onSelectView('profile')}
              className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
              title="View Profile & Settings"
            >
              <User className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}

        </div>

      </div>
    </header>
  );
}
