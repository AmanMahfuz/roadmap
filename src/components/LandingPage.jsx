import React from 'react';
import { 
  Play, 
  Sparkles, 
  Flame, 
  Code2, 
  CheckCircle2, 
  Trophy, 
  ArrowRight,
  Zap,
  Terminal,
  Calendar,
  Compass,
  UserCheck
} from 'lucide-react';

export default function LandingPage({ 
  currentUser = null,
  onStartLearning, 
  onOpenSignIn, 
  onOpenSignUp,
  onExploreGuest
}) {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-100">
      
      {/* Minimal Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onStartLearning()}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-yellow-500 p-0.5 shadow-md shadow-blue-500/20 flex items-center justify-center text-lg flex-shrink-0">
            ⚡
          </div>
          <div>
            <span className="font-black text-xl tracking-tight text-slate-900">DevQuik</span>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-yellow-400 text-slate-950 rounded-md ml-2">
              Daily Roadmaps
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {currentUser ? (
            <button
              onClick={onStartLearning}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Go to Dashboard</span>
            </button>
          ) : (
            <>
              <button
                onClick={onOpenSignIn}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-950 transition-colors cursor-pointer"
              >
                Log In
              </button>
              <button
                onClick={onOpenSignUp}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Sign Up Free
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Single Hero Section */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 sm:py-14 flex flex-col items-center justify-center text-center space-y-7 my-auto">
        
        {/* Purpose Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-black shadow-2xs">
          <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span>Interactive Daily Engineering Mastery</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
          One Mission. One Project. <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-yellow-500 bg-clip-text text-transparent">
            Every Single Day.
          </span>
        </h1>

        {/* Purpose Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
          DevQuik turns complex tech stacks into structured, bite-sized daily roadmaps. Watch curated masterclasses, practice in interactive sandboxes, verify your knowledge, and build an unbreakable learning streak.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-3 pt-2 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {currentUser ? (
              <button
                onClick={onStartLearning}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2 transition-all transform hover:scale-105 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Resume Today's Mission</span>
              </button>
            ) : (
              <>
                <button
                  onClick={onOpenSignUp}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2 transition-all transform hover:scale-105 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Start 15-Day AI Fast-Track (Free)</span>
                </button>
                <button
                  onClick={onOpenSignIn}
                  className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm rounded-2xl shadow-xs transition-all cursor-pointer"
                >
                  Sign In with Account
                </button>
              </>
            )}
          </div>

          {!currentUser && onExploreGuest && (
            <button
              onClick={onExploreGuest}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 hover:underline pt-1 cursor-pointer"
            >
              or Preview Roadmap as Guest →
            </button>
          )}
        </div>

        {/* 4 Core Pillars of DevQuik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 w-full pt-6 text-left">
          
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-2.5">
              1
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900">Curated Video</h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Timestamped segments from top industry instructors.</p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-2.5">
              2
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900">Hands-on Tasks</h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Daily exercise checklists to practice every concept.</p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm mb-2.5">
              3
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900">Code Sandbox</h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Write, execute & validate real code in your browser.</p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-2.5">
              4
            </div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900">Streak Heatmap</h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">GitHub-style activity matrix tracking daily momentum.</p>
          </div>

        </div>

      </main>

      {/* Clean Footer */}
      <footer className="w-full border-t border-slate-200/80 py-5 px-6 text-center text-xs text-slate-500 bg-white">
        <p>© {new Date().getFullYear()} DevQuik. Built for daily consistent learning.</p>
      </footer>

    </div>
  );
}
