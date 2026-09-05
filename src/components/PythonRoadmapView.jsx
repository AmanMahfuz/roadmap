import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Play, 
  Star, 
  Sparkles, 
  Award, 
  Flame, 
  BookOpen, 
  Code2, 
  ChevronRight, 
  ShieldCheck,
  Zap,
  ArrowLeft,
  Video,
  ExternalLink
} from 'lucide-react';
import { PYTHON_COURSE_METADATA, PYTHON_DAYS } from '../data/pythonCurriculum';
import CertificateModal from './CertificateModal';

export default function PythonRoadmapView({ 
  userCompletedDays = {}, 
  onSelectDay, 
  onBackToDashboard,
  currentUser = null
}) {
  const [showCertificate, setShowCertificate] = useState(false);
  
  const completedDaysCount = PYTHON_DAYS.filter(d => {
    const key = `python_day_${d.day}`;
    return !!userCompletedDays[key];
  }).length;

  const totalDays = PYTHON_DAYS.length;
  const overallPercentage = Math.round((completedDaysCount / totalDays) * 100);

  // Group days into the 3 official fast-track phases
  const phases = [
    {
      id: 'phase1',
      title: 'Phase 1: Python Engine & Control Flow',
      subtitle: 'Days 1–5 • Bro Code (12hr Course) • Syntax, Types, Math, Slicing, Loops & Habits',
      instructor: 'Bro Code',
      badge: 'Phase 1',
      color: '#3B82F6',
      milestone: 'Day 5: Loop Master 🏆',
      days: PYTHON_DAYS.slice(0, 5)
    },
    {
      id: 'phase2',
      title: 'Phase 2: Collections, Functions & Architecture',
      subtitle: 'Days 6–10 • Bro Code (12hr Course) • Collections, Dicts, *args/**kwargs, Comprehensions & OOP',
      instructor: 'Bro Code',
      badge: 'Phase 2',
      color: '#10B981',
      milestone: 'Day 10: Python Architect 🏆',
      days: PYTHON_DAYS.slice(5, 10)
    },
    {
      id: 'phase3',
      title: 'Phase 3: Modern AI Tooling & LLM Integration',
      subtitle: 'Days 11–15 • Dave Ebbelaar (5hr Course) • venv, APIs, Pandas, LLM APIs & Context Agent',
      instructor: 'Dave Ebbelaar',
      badge: 'Phase 3',
      color: '#8B5CF6',
      milestone: 'Day 15: AI Engineer Level 1 🎓',
      days: PYTHON_DAYS.slice(10, 15)
    }
  ];

  const handleNodeClick = (dayObj, isUnlocked) => {
    if (!isUnlocked) {
      alert(`🔒 Day ${dayObj.day} is Locked!\n\nPlease complete Day ${dayObj.day - 1} first to unlock this lesson and advance along the AI fast-track.`);
      return;
    }
    onSelectDay(dayObj);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-16">
      
      {/* Top Course Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-[#15253d] to-[#0f172a] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-yellow-500 p-0.5 shadow-lg shadow-blue-500/20 flex-shrink-0">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-3xl">
                🤖
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                  {PYTHON_COURSE_METADATA.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">15-Day Fast-Track</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {PYTHON_COURSE_METADATA.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {PYTHON_COURSE_METADATA.description}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col items-start md:items-end bg-slate-800/80 backdrop-blur-sm border border-slate-700/60 p-4 rounded-2xl">
            <div className="flex items-center justify-between w-full md:w-auto gap-4 mb-2">
              <span className="text-xs font-semibold text-slate-400">Fast-Track Progress</span>
              <span className="text-sm font-black text-yellow-400">{completedDaysCount} / {totalDays} Days ({overallPercentage}%)</span>
            </div>
            <div className="w-full md:w-48 bg-slate-700 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-yellow-400 h-full rounded-full transition-all duration-700" 
                style={{ width: `${overallPercentage}%` }}
              />
            </div>
            {completedDaysCount >= 15 && (
              <button 
                onClick={() => setShowCertificate(true)}
                className="mt-3 w-full text-xs font-bold px-3 py-1.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 rounded-lg flex items-center justify-center space-x-1 transition-all shadow-md cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Claim AI Certificate 🎓</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Phases & Duolingo-style Path Nodes */}
      <div className="space-y-12">
        {phases.map((phase) => (
          <div key={phase.id} className="space-y-6">
            
            {/* Phase Header Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span 
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider text-white shadow-xs"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.badge}
                  </span>
                  <h2 className="text-lg font-black text-slate-900">{phase.title}</h2>
                </div>
                <p className="text-xs text-slate-500 mt-1">{phase.subtitle}</p>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                <span className="px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-[11px]">
                  {phase.milestone}
                </span>
                <span className="font-bold text-slate-400 hidden sm:inline">
                  {phase.days.filter(d => !!userCompletedDays[`python_day_${d.day}`]).length}/{phase.days.length} Done
                </span>
              </div>
            </div>

            {/* Stepping Path Nodes */}
            <div className="flex flex-col items-center py-2 space-y-5">
              {phase.days.map((dayObj) => {
                const dayKey = `python_day_${dayObj.day}`;
                const isCompleted = !!userCompletedDays[dayKey];
                
                // Day 1 is always unlocked; subsequent days unlock after previous day is completed
                const isUnlocked = dayObj.day === 1 || !!userCompletedDays[`python_day_${dayObj.day - 1}`];
                const isCurrentActive = isUnlocked && !isCompleted;

                // Alternate horizontal offsets for Duolingo snake feel
                const offsetPattern = [0, 50, 80, 50, 0];
                const xOffset = offsetPattern[(dayObj.day - 1) % offsetPattern.length];

                return (
                  <div 
                    key={dayObj.day}
                    className="flex flex-col items-center relative transition-transform duration-300"
                    style={{ transform: `translateX(${xOffset}px)` }}
                  >
                    {/* Active Pulse Animation Wrapper */}
                    <div className="relative">
                      {isCurrentActive && (
                        <div className="absolute -inset-2 bg-yellow-400/40 rounded-full animate-ping pointer-events-none" />
                      )}

                      <button
                        onClick={() => handleNodeClick(dayObj, isUnlocked)}
                        disabled={!isUnlocked}
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex flex-col items-center justify-center font-black text-sm relative transition-all duration-200 transform shadow-md cursor-pointer ${
                          isCompleted
                            ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105 border-b-4 border-emerald-700'
                            : isCurrentActive
                            ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 hover:scale-110 shadow-lg shadow-yellow-500/30 border-b-4 border-amber-600'
                            : 'bg-slate-200 text-slate-400 border-b-4 border-slate-300 cursor-not-allowed opacity-80'
                        }`}
                        title={dayObj.title}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-8 h-8 drop-shadow-sm" />
                        ) : isCurrentActive ? (
                          <>
                            <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
                            <span className="text-[10px] font-black uppercase tracking-wider mt-0.5">Day {dayObj.day}</span>
                          </>
                        ) : (
                          <>
                            <Lock className="w-6 h-6 opacity-60 mb-0.5" />
                            <span className="text-[10px] font-extrabold">Day {dayObj.day}</span>
                          </>
                        )}

                        {/* Top-Right XP Badge */}
                        <div className={`absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs border ${
                          isCompleted 
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : isCurrentActive
                            ? 'bg-yellow-100 text-yellow-900 border-yellow-300'
                            : 'bg-slate-100 text-slate-500 border-slate-300'
                        }`}>
                          +{dayObj.xpReward} XP
                        </div>

                        {/* Milestone Ribbon */}
                        {dayObj.isMilestone && (
                          <div className="absolute -bottom-2 px-2 py-0.2 bg-amber-400 text-slate-950 text-[9px] font-black rounded-full shadow-xs border border-amber-500 uppercase tracking-tighter">
                            Milestone
                          </div>
                        )}
                      </button>
                    </div>

                    {/* Node Description Text */}
                    <div className="mt-2 text-center max-w-[210px] cursor-pointer" onClick={() => handleNodeClick(dayObj, isUnlocked)}>
                      <h4 className={`text-xs font-bold leading-tight ${
                        isCurrentActive ? 'text-indigo-600 font-extrabold' : isCompleted ? 'text-slate-800' : 'text-slate-400'
                      }`}>
                        {dayObj.title.split(':')[1]?.trim() || dayObj.title}
                      </h4>
                      <div className="flex items-center justify-center space-x-2 mt-1">
                        <span className="text-[10px] text-slate-500">
                          ⏱ {dayObj.estimatedTime}m • {dayObj.tasks?.length || 3} tasks
                        </span>
                        {dayObj.videoSource && (
                          <a 
                            href={dayObj.videoSource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center text-[10px] text-red-600 hover:text-red-700 font-bold"
                            title={`Watch on YouTube: ${dayObj.videoSource.timestamp}`}
                          >
                            <Video className="w-3 h-3 mr-0.5 text-red-600" />
                            <span>Video</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {showCertificate && (
        <CertificateModal
          language={{ name: '15-Day Python to AI Fast-Track', badge: 'AI Engineer Certified', color: '#306998' }}
          currentUser={currentUser}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
}
