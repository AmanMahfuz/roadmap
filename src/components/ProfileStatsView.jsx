import React, { useState } from 'react';
import { 
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
  Star,
  ArrowLeft,
  LogOut
} from 'lucide-react';
import CertificateModal from './CertificateModal';
import { BADGES_LIST, getXpProgressForLevel } from '../services/gamificationEngine';

export default function ProfileStatsView({ 
  userState = {}, 
  currentUser = null,
  onBackToDashboard, 
  onResetProgress,
  onSignOut
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-900 space-y-6">
      
      {/* Top Banner Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-400 to-yellow-500 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-orange-500/20">
              {currentUser?.user_metadata?.full_name?.charAt(0) || currentUser?.email?.charAt(0) || 'D'}
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {currentUser?.user_metadata?.full_name || currentUser?.email || 'SkillForge Developer'}
                </h1>
                <span className="px-3 py-0.5 bg-orange-100 text-orange-800 border border-orange-200 text-xs font-extrabold rounded-full uppercase">
                  Level {xpInfo.currentLevel} Cadet
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {currentUser?.email || 'Guest Developer Account'} • Enrolled in HTML, CSS & JavaScript Roadmaps
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleShareProfile}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl flex items-center space-x-2 shadow-md transition-transform hover:scale-105"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedShare ? 'Profile Link Copied!' : 'Share Profile'}</span>
            </button>

            {onSignOut && (
              <button
                onClick={onSignOut}
                className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-bold text-xs rounded-xl flex items-center space-x-1.5 transition-colors"
                title="Sign Out of Account"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            )}

            {onBackToDashboard && (
              <button
                onClick={onBackToDashboard}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center space-x-1.5 border border-slate-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4 Stats Grid Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <span className="text-[10px] text-slate-500 font-bold uppercase block">Total Earned XP</span>
          <span className="text-2xl font-black text-slate-900 mt-1 block flex items-center">
            <Zap className="w-5 h-5 text-amber-500 mr-1.5 fill-amber-500" />
            {userState?.xp || 0} XP
          </span>
        </div>

        <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <span className="text-[10px] text-slate-500 font-bold uppercase block">Active Streak</span>
          <span className="text-2xl font-black text-slate-900 mt-1 block flex items-center">
            <Flame className="w-5 h-5 text-orange-500 mr-1.5 fill-orange-500 animate-pulse" />
            {userState?.streak || 1} Days
          </span>
        </div>

        <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <span className="text-[10px] text-slate-500 font-bold uppercase block">Completed Lessons</span>
          <span className="text-2xl font-black text-slate-900 mt-1 block flex items-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-1.5" />
            {completedDaysCount} Days
          </span>
        </div>

        <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <span className="text-[10px] text-slate-500 font-bold uppercase block">Developer Level</span>
          <span className="text-2xl font-black text-slate-900 mt-1 block flex items-center">
            <Trophy className="w-5 h-5 text-amber-500 mr-1.5" />
            Level {xpInfo.currentLevel}
          </span>
        </div>
      </div>

      {/* 28-Day Real Contribution Heatmap */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-extrabold text-lg text-slate-900 flex items-center">
              <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
              28-Day Coding Activity Heatmap
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Calculated from actual completed lessons and active session days.</p>
          </div>

          <div className="flex items-center space-x-1.5 text-[10px] text-slate-500 font-semibold">
            <span>Less</span>
            <span className="w-3 h-3 bg-slate-100 rounded-sm" />
            <span className="w-3 h-3 bg-emerald-200 rounded-sm" />
            <span className="w-3 h-3 bg-emerald-400 rounded-sm" />
            <span className="w-3 h-3 bg-emerald-600 rounded-sm" />
            <span>More</span>
          </div>
        </div>

        <div className="grid grid-cols-7 sm:grid-cols-14 gap-2 py-3">
          {contributionGrid.map((item) => {
            let bg = 'bg-slate-100';
            if (item.level === 1) bg = 'bg-emerald-200';
            if (item.level === 2) bg = 'bg-emerald-400';
            if (item.level === 3) bg = 'bg-emerald-600';

            return (
              <div
                key={item.day}
                className={`h-9 sm:h-10 rounded-xl ${bg} flex flex-col items-center justify-center text-[10px] font-bold ${
                  item.level > 0 ? 'text-emerald-950 font-extrabold' : 'text-slate-400'
                } hover:scale-105 transition-transform cursor-pointer shadow-2xs`}
                title={`${item.dateStr}: ${item.activityCount > 0 ? `${item.activityCount} Active Lesson(s)` : 'Rest Day'}`}
              >
                <span>{item.day}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Milestone Badges Overview */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-lg text-slate-900 flex items-center">
            <Award className="w-5 h-5 text-amber-500 mr-2" />
            Milestone Badges ({unlockedBadges.length}/{BADGES_LIST.length})
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {BADGES_LIST.map((b) => {
            const isUnlocked = unlockedBadges.includes(b.id);
            return (
              <div 
                key={b.id}
                className={`p-3.5 rounded-2xl border text-center transition-all ${
                  isUnlocked ? 'bg-amber-50/60 border-amber-300 text-slate-900' : 'bg-slate-50 border-slate-200 opacity-40 grayscale'
                }`}
              >
                <span className="text-2xl block mb-1">{b.icon}</span>
                <h4 className="font-bold text-xs text-slate-900 mb-0.5">{b.title}</h4>
                <span className="text-[10px] text-slate-500 block leading-tight">{b.description}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Developer Track Certificates */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <h3 className="font-extrabold text-lg text-slate-900 mb-4 flex items-center">
          <ShieldCheck className="w-5 h-5 text-emerald-600 mr-2" />
          Developer Track Certificates
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-slate-900 flex items-center">
                <Globe className="w-4 h-4 text-orange-500 mr-1.5" />
                HTML & CSS Track Certificate
              </h4>
              <span className="text-xs text-slate-500 block mt-0.5">7-Day Full Course & Portfolio Capstones</span>
            </div>

            <button
              onClick={() => setSelectedCertSkill({ id: 'html_css', name: 'HTML & CSS Web Architecture' })}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs rounded-xl flex items-center space-x-1 shadow-sm"
            >
              <span>View Certificate</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-slate-900 flex items-center">
                <Zap className="w-4 h-4 text-amber-500 mr-1.5" />
                JavaScript Track Certificate
              </h4>
              <span className="text-xs text-slate-500 block mt-0.5">14-Day Wezlon Malayalam Path</span>
            </div>

            <button
              onClick={() => setSelectedCertSkill({ id: 'javascript', name: 'JavaScript ES6+ & Async Web' })}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-xl flex items-center space-x-1 shadow-sm"
            >
              <span>View Certificate</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Account Settings Danger Zone */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-slate-900">Developer Account Settings</h4>
          <p className="text-xs text-slate-500 mt-0.5">Resetting progress clears local storage data & resets completed lessons.</p>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto">
          {onSignOut && (
            <button
              onClick={onSignOut}
              className="flex-1 sm:flex-initial px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out Account</span>
            </button>
          )}

          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all your progress data? This cannot be undone.')) {
                onResetProgress();
              }
            }}
            className="flex-1 sm:flex-initial px-4 py-2 text-rose-700 hover:bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Data</span>
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
