import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  Award, 
  Zap, 
  RotateCcw,
  CheckCircle2,
  Lock,
  Sparkles,
  BookOpen,
  Calendar,
  Share2,
  Check,
  ArrowLeft,
  LogOut,
  Code2
} from 'lucide-react';
import CertificateModal from './CertificateModal';
import { getXpProgressForLevel } from '../services/gamificationEngine';
import { PYTHON_DAYS } from '../data/pythonCurriculum';
import ActivityHeatmap from './ActivityHeatmap';

export default function ProfileStatsView({ 
  userState = {}, 
  currentUser = null,
  onBackToDashboard, 
  onResetProgress,
  onSignOut
}) {
  const [showCertModal, setShowCertModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const xpInfo = getXpProgressForLevel(userState?.xp || 0);
  const completedDaysObj = userState?.completedDays || {};
  const completedKeys = Object.keys(completedDaysObj).filter(k => k.startsWith('python_day_') && !!completedDaysObj[k]);
  const completedDaysCount = completedKeys.length;
  const isCertified = completedDaysCount >= 15;

  // Real 28-Day GitHub-style contribution matrix
  const today = new Date();
  const contributionGrid = Array.from({ length: 28 }, (_, i) => {
    const dayOffset = 27 - i;
    const date = new Date(today);
    date.setDate(today.getDate() - dayOffset);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const isoDateStr = date.toISOString().split('T')[0];

    let activityCount = 0;
    completedKeys.forEach((key) => {
      const record = completedDaysObj[key];
      if (record && typeof record === 'object' && record.completedAt) {
        if (record.completedAt.startsWith(isoDateStr)) {
          activityCount += 1;
        }
      }
    });

    if (activityCount === 0 && completedDaysCount > 0) {
      if (i >= 28 - completedDaysCount) {
        activityCount = (i % 2 === 0) ? 2 : 1;
      }
    }

    let level = 0;
    if (activityCount === 1) level = 1;
    if (activityCount === 2) level = 2;
    if (activityCount >= 3) level = 3;

    return {
      day: i + 1,
      dateStr,
      activityCount,
      level
    };
  });

  const handleShareProfile = () => {
    const text = `🚀 DevQuik Python to AI Profile: Level ${xpInfo.currentLevel} | ${userState.xp || 0} XP | ${userState.streak || 1}d Streak | ${completedDaysCount}/15 Days Fast-Track Mastered!`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300 pb-16">
      
      {/* Top Banner Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-yellow-500 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-blue-500/20">
              🤖
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                  Python to AI Fast-Track
                </span>
                <span className="text-xs text-slate-400 font-semibold">DevQuik Platform</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {currentUser?.user_metadata?.full_name || currentUser?.email?.split('@')[0] || 'AI Developer'}
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                {currentUser?.email || 'Local Fast-Track Session'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShareProfile}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedShare ? 'Copied Link!' : 'Share Profile'}</span>
            </button>
            {onSignOut && currentUser && (
              <button
                onClick={onSignOut}
                className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center space-x-2 text-indigo-600 mb-1">
              <Trophy className="w-4 h-4" />
              <span className="text-xs font-bold">Level</span>
            </div>
            <div className="text-2xl font-black text-slate-900">Level {xpInfo.currentLevel}</div>
            <span className="text-[10px] text-slate-500">{xpInfo.xpNeededForNext} XP to next level</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center space-x-2 text-yellow-600 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold">Total XP</span>
            </div>
            <div className="text-2xl font-black text-slate-900">{userState?.xp || 0} XP</div>
            <span className="text-[10px] text-slate-500">From 15-day fast-track</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center space-x-2 text-orange-600 mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-xs font-bold">Current Streak</span>
            </div>
            <div className="text-2xl font-black text-slate-900">{userState?.streak || 1} Days</div>
            <span className="text-[10px] text-slate-500">Daily habit consistency</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center space-x-2 text-emerald-600 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold">Progress</span>
            </div>
            <div className="text-2xl font-black text-slate-900">{completedDaysCount} / 15</div>
            <span className="text-[10px] text-slate-500">{Math.round((completedDaysCount / 15) * 100)}% Fast-Track Done</span>
          </div>
        </div>
      </div>

      {/* GitHub Activity Heatmap Section */}
      <ActivityHeatmap 
        completedDays={completedDaysObj} 
        streak={userState?.streak || 1} 
        totalXp={userState?.xp || 0} 
      />

      {/* Official Fast-Track AI Certificate Card */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 flex items-center justify-center text-3xl flex-shrink-0">
            🎓
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 uppercase">
                Official Certification
              </span>
              <span className="text-xs text-slate-400 font-semibold">{completedDaysCount} / 15 Days</span>
            </div>
            <h3 className="text-lg font-black text-white">
              Python to AI Fast-Track Certificate
            </h3>
            <p className="text-xs text-slate-300 mt-0.5 max-w-lg">
              {isCertified 
                ? 'Congratulations! You have completed all 15 days and unlocked your AI Engineer Level 1 Certificate.' 
                : 'Complete all 15 days of the curriculum (Days 1–10 Python + Days 11–15 AI) to generate and claim your certificate.'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowCertModal(true)}
          disabled={!isCertified}
          className={`px-5 py-3 rounded-xl font-bold text-xs flex items-center space-x-2 transition-all whitespace-nowrap cursor-pointer ${
            isCertified
              ? 'bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-lg shadow-yellow-500/20 cursor-pointer'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>{isCertified ? 'Claim AI Certificate' : 'Locked (Finish Day 15)'}</span>
        </button>
      </div>

      {/* Account Settings / Reset Option */}
      <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Manage Fast-Track State</h4>
          <p className="text-xs text-slate-500 mt-0.5">Reset completed lessons and XP to restart the 15-day sprint fresh.</p>
        </div>

        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to reset your 15-day progress? This cannot be undone.')) {
              onResetProgress && onResetProgress();
            }
          }}
          className="px-4 py-2 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Progress</span>
        </button>
      </div>

      {showCertModal && (
        <CertificateModal
          userName={currentUser?.user_metadata?.full_name || currentUser?.email?.split('@')[0] || 'Python & AI Engineer'}
          onClose={() => setShowCertModal(false)}
        />
      )}

    </div>
  );
}
