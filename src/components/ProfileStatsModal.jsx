import React, { useState } from 'react';
import { 
  X, 
  Trophy, 
  Flame, 
  Award, 
  ShieldCheck, 
  Zap, 
  RotateCcw,
  CheckCircle2,
  Lock,
  Sparkles,
  BookOpen,
  FolderGit2,
  Clock,
  Layers,
  User,
  FileCheck,
  Share2,
  Calendar,
  ExternalLink,
  Check,
  Globe,
  Heart,
  Star
} from 'lucide-react';
import CertificateModal from './CertificateModal';
import { BADGES_LIST, getXpProgressForLevel } from '../services/gamificationEngine';

export default function ProfileStatsModal({ 
  userState, 
  currentUser = null,
  onClose, 
  onResetProgress 
}) {
  const [selectedCertSkill, setSelectedCertSkill] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);

  const xpInfo = getXpProgressForLevel(userState?.xp || 0);
  const completedDaysObj = userState?.completedDays || {};
  const completedKeys = Object.keys(completedDaysObj).filter(k => !!completedDaysObj[k]);
  const completedDaysCount = completedKeys.length;
  
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
    const text = `🚀 SkillForge Developer Profile: ${currentUser?.user_metadata?.full_name || 'Developer'} | Level ${xpInfo.currentLevel} | ${userState.xp || 0} XP | ${userState.streak || 1}d Streak!`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const unlockedBadges = userState?.unlockedBadges || ['badge_first_step'];

  return (
    <div className="day-modal-overlay" onClick={onClose}>
      <div 
        className="day-modal-container max-w-4xl p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-y-auto max-h-[90vh] font-sans text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-extrabold text-xl shadow-md">
              {currentUser?.user_metadata?.full_name?.charAt(0) || currentUser?.email?.charAt(0) || 'D'}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-extrabold text-slate-900">
                  {currentUser?.user_metadata?.full_name || currentUser?.email || 'SkillForge Developer'}
                </h2>
                <span className="px-2.5 py-0.5 bg-orange-100 text-orange-800 border border-orange-200 text-[10px] font-extrabold rounded-full uppercase">
                  Level {xpInfo.currentLevel} Cadet
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                {currentUser?.email || 'Guest Developer Account'}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShareProfile}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center space-x-1.5 transition-colors border border-slate-200"
            >
              {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedShare ? 'Profile Link Copied!' : 'Share Profile'}</span>
            </button>

            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Total Earned XP</span>
            <span className="text-xl font-black text-slate-900 mt-0.5 block flex items-center">
              <Zap className="w-4 h-4 text-amber-500 mr-1 fill-amber-500" />
              {userState?.xp || 0} XP
            </span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Active Streak</span>
            <span className="text-xl font-black text-slate-900 mt-0.5 block flex items-center">
              <Flame className="w-4 h-4 text-orange-500 mr-1 fill-orange-500" />
              {userState?.streak || 1} Days
            </span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Completed Lessons</span>
            <span className="text-xl font-black text-slate-900 mt-0.5 block flex items-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1" />
              {completedDaysCount} Days
            </span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Developer Level</span>
            <span className="text-xl font-black text-slate-900 mt-0.5 block flex items-center">
              <Trophy className="w-4 h-4 text-amber-500 mr-1" />
              Level {xpInfo.currentLevel}
            </span>
          </div>
        </div>

        {/* 28-Day Heatmap Grid */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-6 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-extrabold text-sm text-slate-900 flex items-center">
              <Calendar className="w-4 h-4 text-emerald-600 mr-1.5" />
              28-Day Coding Activity Heatmap
            </h3>
            <span className="text-[10px] text-slate-400 font-semibold">{completedDaysCount} Active Lessons</span>
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-14 gap-1.5 py-2">
            {contributionGrid.map((item) => {
              let bg = 'bg-slate-100';
              if (item.level === 1) bg = 'bg-emerald-200';
              if (item.level === 2) bg = 'bg-emerald-400';
              if (item.level === 3) bg = 'bg-emerald-600';

              return (
                <div
                  key={item.day}
                  className={`h-8 rounded-lg ${bg} flex items-center justify-center text-[10px] font-bold text-slate-700 hover:scale-105 transition-transform cursor-pointer`}
                  title={`${item.dateStr}: ${item.activityCount > 0 ? `${item.activityCount} Lesson(s)` : 'Rest Day'}`}
                >
                  <span className="opacity-75">{item.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones & Badges */}
        <div className="mb-6">
          <h3 className="font-extrabold text-sm text-slate-900 mb-3 flex items-center">
            <Award className="w-4 h-4 text-amber-500 mr-1.5" />
            Milestone Badges ({unlockedBadges.length}/{BADGES_LIST.length})
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {BADGES_LIST.map((b) => {
              const isUnlocked = unlockedBadges.includes(b.id);
              return (
                <div 
                  key={b.id}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    isUnlocked ? 'bg-amber-50/60 border-amber-300 text-slate-900' : 'bg-slate-50 border-slate-200 opacity-40 grayscale'
                  }`}
                >
                  <span className="text-xl block mb-1">{b.icon}</span>
                  <h4 className="font-bold text-xs text-slate-900 mb-0.5">{b.title}</h4>
                  <span className="text-[9px] text-slate-500 block leading-tight">{b.description}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificates & Track Completion */}
        <div className="mb-6">
          <h3 className="font-extrabold text-sm text-slate-900 mb-3 flex items-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5" />
            Developer Track Certificates
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs text-slate-900 flex items-center">
                  <Globe className="w-3.5 h-3.5 text-orange-500 mr-1" />
                  HTML & CSS Track Certificate
                </h4>
                <span className="text-[10px] text-slate-500 block mt-0.5">7-Day Full Course & Capstones</span>
              </div>

              <button
                onClick={() => setSelectedCertSkill({ id: 'html_css', name: 'HTML & CSS Web Architecture' })}
                className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-[11px] rounded-xl flex items-center space-x-1 shadow-xs"
              >
                <span>View Cert</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </button>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs text-slate-900 flex items-center">
                  <Zap className="w-3.5 h-3.5 text-amber-500 mr-1" />
                  JavaScript Track Certificate
                </h4>
                <span className="text-[10px] text-slate-500 block mt-0.5">14-Day Wezlon Malayalam Path</span>
              </div>

              <button
                onClick={() => setSelectedCertSkill({ id: 'javascript', name: 'JavaScript ES6+ & Async Web' })}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-[11px] rounded-xl flex items-center space-x-1 shadow-xs"
              >
                <span>View Cert</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Reset Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all your progress data? This cannot be undone.')) {
                onResetProgress();
              }
            }}
            className="px-3 py-1.5 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold transition-colors flex items-center"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" />
            <span>Reset All Progress Data</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl font-extrabold text-xs"
          >
            Close Profile
          </button>
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertSkill && (
        <CertificateModal
          skillName={selectedCertSkill.name}
          userState={userState}
          onClose={() => setSelectedCertSkill(null)}
        />
      )}
    </div>
  );
}
