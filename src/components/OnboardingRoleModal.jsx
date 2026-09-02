import React from 'react';
import { Briefcase, Code, Database, BrainCircuit, X } from 'lucide-react';
import { CAREER_ROADMAPS } from '../data/careerRoadmaps';

export default function OnboardingRoleModal({ onSelectRole, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-500">
        
        <div className="p-6 sm:p-8 text-center space-y-3 relative border-b border-slate-100">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-inner">
            <Briefcase className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">What do you want to become?</h2>
          <p className="text-slate-500 text-sm font-medium">Select a career path to get a personalized learning roadmap.</p>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto bg-slate-50 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {CAREER_ROADMAPS.map((roadmap) => (
              <button
                key={roadmap.id}
                onClick={() => roadmap.isActive ? onSelectRole(roadmap.slug) : null}
                className={`text-left p-5 rounded-2xl border-2 transition-all flex flex-col justify-between h-full ${
                  roadmap.isActive 
                    ? 'bg-white border-slate-200 hover:border-orange-400 hover:shadow-lg group' 
                    : 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: roadmap.color }}
                    >
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    {roadmap.isActive ? (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-md">
                        {roadmap.estimatedMonths} Months
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-slate-200 text-slate-500 text-[10px] font-bold rounded-md">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{roadmap.roleTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {roadmap.description}
                  </p>
                </div>
              </button>
            ))}

          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-white text-center">
          <button 
            onClick={onClose}
            className="text-sm font-bold text-slate-400 hover:text-slate-600 underline underline-offset-4"
          >
            I'm not sure yet, just let me explore the platform
          </button>
        </div>

      </div>
    </div>
  );
}
