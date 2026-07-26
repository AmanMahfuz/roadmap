import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Sparkles, Zap, ArrowRight } from 'lucide-react';

export default function LevelUpModal({ level, xp, onClose }) {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 }
    });
  }, []);

  return (
    <div className="day-modal-overlay" onClick={onClose}>
      <div 
        className="day-modal-container max-w-md p-8 text-center bg-white border border-amber-300 rounded-3xl shadow-2xl animate-bounce-short"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-yellow-300 p-1 shadow-lg shadow-orange-500/30 flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <Trophy className="w-10 h-10 text-amber-500" />
          </div>
        </div>

        <div className="inline-flex items-center px-3 py-1 bg-amber-100 border border-amber-300 rounded-full text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-600" />
          Level Up Accomplished!
        </div>

        <h2 className="font-heading text-3xl font-extrabold text-slate-900 mb-2">
          Level {level} Unlocked!
        </h2>

        <p className="text-sm text-slate-600 mb-6">
          Congratulations! You earned enough XP to ascend to <strong>Developer Level {level}</strong>. Keep building your daily streak!
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 flex items-center justify-around">
          <div>
            <span className="text-xs text-slate-500 block font-semibold">Total XP</span>
            <span className="text-lg font-bold text-amber-600 flex items-center justify-center">
              <Zap className="w-4 h-4 mr-1 text-amber-500 fill-amber-500" /> {xp}
            </span>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          <div>
            <span className="text-xs text-slate-500 block font-semibold">Current Rank</span>
            <span className="text-sm font-bold text-slate-800">
              {level >= 5 ? 'Apprentice' : level >= 3 ? 'Scholar' : 'Cadet'}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-heading font-extrabold text-base rounded-2xl shadow-lg shadow-orange-500/25 flex items-center justify-center transition-all transform hover:scale-[1.02]"
        >
          <span>Continue Quest</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
