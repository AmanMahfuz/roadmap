import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Lock, Play, ChevronRight, Briefcase } from 'lucide-react';
import { CAREER_ROADMAPS } from '../data/careerRoadmaps';
import { SIX_LANGUAGES } from '../data/sixLanguagesData';
import LanguageRoadmapView from './LanguageRoadmapView';

export default function RoadmapDetail({ slug, onBack, onSelectDay, userCompletedDays, currentUser, userState, onEnrollTrack, onUnenrollTrack }) {
  const roadmap = CAREER_ROADMAPS.find(r => r.slug === slug);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  if (!roadmap) return <div>Roadmap not found.</div>;

  const activePhase = roadmap.phases[activePhaseIndex];

  // Helper to calculate phase progress
  const getPhaseProgress = (phase) => {
    if (!phase.nodes || phase.nodes.length === 0) return 0;
    const completedNodes = phase.nodes.filter(nodeId => userCompletedDays[nodeId]);
    return Math.round((completedNodes.length / phase.nodes.length) * 100);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 lg:gap-10 animate-in fade-in duration-500">
      
      {/* LEFT COLUMN: Roadmap Info & Phase Stepper */}
      <div className="w-full md:w-[35%] lg:w-[30%] shrink-0 space-y-6">
        
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-bold transition-all shadow-sm w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Roadmaps</span>
        </button>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="h-32 relative bg-slate-900">
            <img 
              src={roadmap.coverImage} 
              alt={roadmap.roleTitle}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h1 className="text-2xl font-black text-white">{roadmap.roleTitle}</h1>
            </div>
          </div>
          
          <div className="p-6 space-y-4 border-b border-slate-100">
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              {roadmap.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {roadmap.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {/* Enrollment Button */}
            <div className="pt-2">
              {userState?.enrolledTracks?.includes(slug) ? (
                <button 
                  onClick={() => onUnenrollTrack && onUnenrollTrack(slug)}
                  className="w-full py-3 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 font-bold rounded-xl text-sm transition-colors border border-slate-200 flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Enrolled (Click to Unenroll)</span>
                </button>
              ) : (
                <button 
                  onClick={() => onEnrollTrack && onEnrollTrack(slug, 'career')}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-sm transition-colors shadow-sm shadow-orange-200 flex items-center justify-center space-x-2"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Enroll in Roadmap</span>
                </button>
              )}
            </div>
          </div>

          <div className="p-6 bg-slate-50 space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Roadmap Phases</h3>
            <div className="space-y-3">
              {roadmap.phases.map((phase, idx) => {
                const progress = getPhaseProgress(phase);
                const isCompleted = progress === 100;
                // Simple locking: lock if previous phase is not 100% complete
                const isLocked = false;
                const isActive = activePhaseIndex === idx;

                return (
                  <button
                    key={phase.id}
                    disabled={isLocked}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col relative overflow-hidden ${
                      isActive 
                        ? 'bg-white border-orange-400 shadow-md ring-2 ring-orange-400/20' 
                        : isLocked
                          ? 'bg-slate-100/50 border-slate-200 opacity-75 cursor-not-allowed'
                          : 'bg-white border-slate-200 hover:border-orange-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between w-full relative z-10">
                      <div>
                        <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? 'text-orange-500' : 'text-slate-500'}`}>
                          Phase {idx + 1}
                        </span>
                        <h4 className={`font-bold mt-0.5 ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {phase.title}
                        </h4>
                      </div>
                      
                      {isLocked ? (
                        <Lock className="w-4 h-4 text-slate-400 mt-1" />
                      ) : isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                      ) : (
                        <div className="text-right">
                          <span className="text-xs font-bold text-slate-900">{progress}%</span>
                        </div>
                      )}
                    </div>

                    {/* Background Progress Bar */}
                    {!isLocked && (
                      <div className="absolute bottom-0 left-0 h-1 bg-orange-500/20 w-full">
                        <div className="h-full bg-orange-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Interactive Winding Path for the Active Phase */}
      <div className="flex-1 min-h-[600px] bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col">
        
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 font-bold text-[10px] rounded-full uppercase tracking-wider border border-orange-200">
            Phase {activePhaseIndex + 1}
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-3">{activePhase.title}</h2>
          <p className="text-sm text-slate-600 mt-2 font-medium max-w-2xl">{activePhase.description}</p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 self-center">Skills Covered:</span>
            {activePhase.skills.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* We reuse the existing LanguageRoadmapView logic but pass it a filtered "mock language" object representing this phase */}
        <div className="flex-1 relative bg-slate-50">
          <PhasePathRenderer 
            phase={activePhase}
            userCompletedDays={userCompletedDays}
            onSelectDay={onSelectDay}
          />
        </div>

      </div>

    </div>
  );
}

// A sub-component to render the Duolingo winding path using the existing patterns,
// but mapped from our phase.nodes array instead of a single language track.
function PhasePathRenderer({ phase, userCompletedDays, onSelectDay }) {
  
  // Reconstruct an array of day objects from the node IDs
  const mappedDays = phase.nodes.map((nodeId, index) => {
    // Expected format: "html_css_1" -> lang="html_css", day="1"
    const lastUnderscoreIndex = nodeId.lastIndexOf('_');
    const langId = nodeId.substring(0, lastUnderscoreIndex);
    const dayNumber = parseInt(nodeId.substring(lastUnderscoreIndex + 1));
    
    const langObj = SIX_LANGUAGES.find(l => l.id === langId);
    let originalDayObj = langObj?.days.find(d => d.day === dayNumber);

    // If not found (e.g. mock nodes like 'project_dashboard'), create a stub
    if (!originalDayObj) {
      originalDayObj = {
        day: index + 1,
        title: `Project: ${nodeId}`,
        unit: `Project Module`,
        topic: 'Build a Real-World Application',
        whatToLearn: { summary: 'Put everything together.', details: [] },
        tasks: [],
        terminalChallenges: []
      };
    }

    return {
      ...originalDayObj,
      globalNodeId: nodeId, // Keep track of the global ID
      displayDay: index + 1 // Sequential within the phase
    };
  });

  return (
    <div className="py-12 px-4 relative max-w-lg mx-auto flex flex-col items-center">
      {/* 
        This is a simplified version of the winding path logic from LanguageRoadmapView.
        In a full integration, you might refactor LanguageRoadmapView to accept a custom array of nodes directly.
      */}
      {mappedDays.map((dayObj, index) => {
        const isCompleted = !!userCompletedDays[dayObj.globalNodeId];
        
        // Find if the previous node in THIS phase was completed
        let isLocked = false; // removed constraint
        if (index > 0) {
          const prevNodeId = mappedDays[index - 1].globalNodeId;
          isLocked = !userCompletedDays[prevNodeId];
        }

        const isActive = !isCompleted && !isLocked;

        // Winding math
        const period = 4; 
        const mod = index % period;
        let translateX = 0;
        if (mod === 1) translateX = 60;
        if (mod === 2) translateX = 100;
        if (mod === 3) translateX = 60;
        
        const isLeftCurve = Math.floor(index / period) % 2 !== 0;
        if (isLeftCurve) {
          translateX = -translateX;
        }

        // Colors
        let btnBg = "bg-slate-200 border-b-slate-300";
        let iconColor = "text-slate-400";
        if (isCompleted) {
          btnBg = "bg-emerald-500 border-b-emerald-700 hover:bg-emerald-400";
          iconColor = "text-white";
        } else if (isActive) {
          btnBg = "bg-orange-500 border-b-orange-700 hover:bg-orange-400";
          iconColor = "text-white";
        }

        return (
          <div key={dayObj.globalNodeId} className="relative flex flex-col items-center w-full my-4">
            
            {/* Connector Line to next node */}
            {index < mappedDays.length - 1 && (
              <div 
                className={`absolute w-3 h-16 -bottom-12 z-0 rounded-full ${isCompleted ? 'bg-emerald-400' : 'bg-slate-200'}`}
                style={{ 
                  transform: `translateX(${translateX}px) rotate(${isLeftCurve ? -15 : 15}deg)`,
                  transformOrigin: 'top center'
                }}
              ></div>
            )}

            <div 
              className="relative z-10 flex flex-col items-center group cursor-pointer"
              style={{ transform: `translateX(${translateX}px)` }}
              onClick={() => {
                if (!isLocked) {
                  // Re-wrap the dayObj for the DayTaskWindow to understand it belongs to this specific language
                  const lastUnderscoreIndex = dayObj.globalNodeId.lastIndexOf('_');
                  const langId = dayObj.globalNodeId.substring(0, lastUnderscoreIndex);
                  // We must pass the original day number for the DayTaskWindow to find it correctly if it looks it up,
                  // but we already provide the full object.
                  onSelectDay(dayObj, langId);
                }
              }}
            >
              {isActive && (
                <div className="absolute -top-12 animate-bounce bg-white px-3 py-1.5 rounded-xl border-2 border-slate-200 shadow-md flex flex-col items-center whitespace-nowrap">
                  <span className="text-xs font-black text-slate-800 tracking-tight">START</span>
                  <div className="absolute -bottom-1.5 w-3 h-3 bg-white border-b-2 border-r-2 border-slate-200 rotate-45"></div>
                </div>
              )}

              <button 
                className={`relative w-20 h-20 rounded-full border-[5px] border-white shadow-xl flex items-center justify-center transition-all ${btnBg} ${!isLocked ? 'active:translate-y-2 active:border-b-[0px] border-b-[8px]' : 'opacity-80 cursor-not-allowed'}`}
              >
                {isCompleted ? (
                  <CheckCircle2 className={`w-8 h-8 ${iconColor}`} />
                ) : isLocked ? (
                  <Lock className="w-8 h-8 text-slate-400" />
                ) : (
                  <Play className={`w-8 h-8 ${iconColor} ml-1`} fill="currentColor" />
                )}
              </button>

              <div className="absolute top-1/2 left-[calc(100%+1rem)] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity w-48 pointer-events-none z-50">
                <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-200">
                  <span className="text-[10px] font-black text-orange-500 uppercase">Step {dayObj.displayDay}</span>
                  <h4 className="text-xs font-bold text-slate-900 mt-0.5">{dayObj.title}</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
