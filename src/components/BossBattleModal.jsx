import React, { useState } from 'react';
import { 
  X, 
  Crown, 
  CheckSquare, 
  Square, 
  Award, 
  Sparkles, 
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOSS_BATTLES } from '../data/bossBattlesData';
import AdvancedPlayground from './AdvancedPlayground';

export default function BossBattleModal({ 
  skillId, 
  onClose, 
  onCompleteBoss, 
  onOpenCertificate 
}) {
  const boss = BOSS_BATTLES[skillId] || BOSS_BATTLES.html;
  const [checkedReqs, setCheckedReqs] = useState({});
  const [isVictory, setIsVictory] = useState(false);

  const toggleReq = (reqId) => {
    setCheckedReqs(prev => ({
      ...prev,
      [reqId]: !prev[reqId]
    }));
  };

  const handleAutoCheckAll = () => {
    const allChecked = {};
    boss.requirements.forEach(req => {
      allChecked[req.id] = true;
    });
    setCheckedReqs(allChecked);
  };

  const completedReqsCount = Object.values(checkedReqs).filter(Boolean).length;
  const isAllReqsMet = completedReqsCount === boss.requirements.length;

  const handleClaimVictory = () => {
    try {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 }
      });
    } catch (e) {}

    setIsVictory(true);
    onCompleteBoss(skillId, boss);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 font-body-md text-on-surface overflow-y-auto">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-surface border border-outline-variant rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto text-left">
        
        {/* Header Bar */}
        <header className="px-6 py-4 bg-surface border-b border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
              <Crown size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display-lg text-on-surface">{boss.title}</h2>
              <span className="text-xs font-mono font-bold text-amber-600 uppercase">Ultimate Skill Boss Challenge</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-container-high">
            <X size={20} />
          </button>
        </header>

        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
          {!isVictory ? (
            <div className="space-y-6">
              
              {/* Rewards Banner */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-between text-xs text-amber-700 font-medium">
                <span>{boss.description}</span>
                <span className="font-bold flex items-center gap-1 shrink-0 font-mono">
                  <Sparkles size={16} /> Rewards: +{boss.xpReward} XP + Gold Badge + Verified Certificate 📜
                </span>
              </div>

              {/* Requirements Checklist */}
              <div className="p-5 bg-surface border border-outline-variant rounded-2xl space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm text-on-surface">📋 Victory Requirements Checklist:</h4>
                  <button onClick={handleAutoCheckAll} className="text-xs font-mono font-bold text-primary hover:underline">
                    Check All Standard Items
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {boss.requirements.map((req) => {
                    const isChecked = !!checkedReqs[req.id];
                    return (
                      <div 
                        key={req.id} 
                        onClick={() => toggleReq(req.id)}
                        className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${isChecked ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700' : 'bg-surface-container-low border-outline-variant/60 text-on-surface-variant'}`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${isChecked ? 'bg-emerald-500 text-white' : 'border border-outline-variant'}`}>
                          {isChecked && <CheckSquare size={14} />}
                        </div>
                        <span className="font-medium">{req.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Coding Arena */}
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-on-surface">💻 Boss Coding Arena (DevQuik IDE):</h4>
                <AdvancedPlayground
                  starterCode={boss.starterCode}
                  expectedKeywords={boss.expectedKeywords}
                  onTaskComplete={handleAutoCheckAll}
                />
              </div>

            </div>
          ) : (
            /* Victory Screen */
            <div className="text-center space-y-6 py-8 max-w-xl mx-auto">
              <Crown size={72} className="mx-auto text-amber-500 animate-bounce" />
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold font-display-lg text-on-surface">
                  VICTORY! (Boss Defeated! 🎉)
                </h2>
                <p className="text-sm text-on-surface-variant">
                  Congratulations! You have earned the official <strong>{boss.certificateName}</strong> certificate!
                </p>
              </div>

              <div className="flex justify-center gap-3">
                <span className="px-4 py-2 bg-amber-500/10 text-amber-600 font-mono font-bold text-xs rounded-full">
                  ⭐ +{boss.xpReward} XP Earned
                </span>
                <span className="px-4 py-2 bg-primary-fixed text-primary font-mono font-bold text-xs rounded-full">
                  🏅 Gold Badge Unlocked
                </span>
              </div>

              <button 
                onClick={() => onOpenCertificate(skillId)} 
                className="tactile-button-primary w-full py-4 bg-primary text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <FileCheck size={20} /> Download Verified Certificate 📜
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {!isVictory && (
          <footer className="px-6 py-4 bg-surface border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs font-mono font-bold text-on-surface-variant">
              Completed: <strong className="text-primary">{completedReqsCount} / {boss.requirements.length}</strong> Requirements
            </div>

            <button 
              onClick={handleClaimVictory}
              disabled={!isAllReqsMet}
              className="tactile-button-primary px-8 py-3.5 bg-primary text-white font-bold text-sm rounded-xl flex items-center gap-2 shadow-lg disabled:opacity-40"
            >
              <Award size={18} /> Conquer Boss (+{boss.xpReward} XP)
            </button>
          </footer>
        )}

      </div>
    </div>
  );
}
