import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Trophy, 
  Wrench, 
  Target, 
  Flame, 
  Lock, 
  ChevronRight, 
  Award, 
  Lightbulb,
  Atom,
  Check,
  Code2,
  Palette,
  Zap,
  FileCode2
} from 'lucide-react';
import { ROADMAP_DATA, SKILL_CATEGORIES } from '../data/roadmapsData';

export default function DuolingoHomePath({ 
  userState, 
  currentUser = null,
  onSelectLesson, 
  onOpenGuidebook, 
  onOpenQuests, 
  onOpenProfile, 
  onOpenBoss 
}) {
  // Real User Name from Supabase Auth metadata or LocalState
  const userName = currentUser?.user_metadata?.full_name?.split(' ')[0] || userState?.userName || 'Cadet';

  // Active Skill Track (default to 'html' if not set)
  const activeSkillId = userState?.activeTrack || 'html';
  const skillCategory = SKILL_CATEGORIES.find(s => s.id === activeSkillId) || SKILL_CATEGORIES[0];
  const roadmapDays = ROADMAP_DATA[activeSkillId] || ROADMAP_DATA.html;

  // Compute completed count & active lesson dynamically
  const completedDaysMap = userState?.completedDays || {};
  const completedCount = roadmapDays.filter(day => !!completedDaysMap[day.id]).length;
  const progressPercent = Math.round((completedCount / roadmapDays.length) * 100);

  // Find first uncompleted lesson in track (or last one if all completed)
  const activeLessonIndex = roadmapDays.findIndex(day => !completedDaysMap[day.id]);
  const activeLesson = activeLessonIndex !== -1 ? roadmapDays[activeLessonIndex] : roadmapDays[roadmapDays.length - 1];
  const nextLesson = roadmapDays[activeLessonIndex + 1] || roadmapDays[roadmapDays.length - 1];
  const upcomingLesson = roadmapDays[activeLessonIndex + 2] || roadmapDays[roadmapDays.length - 1];
  const bossBattle = roadmapDays.find(day => day.isBossBattle) || roadmapDays[roadmapDays.length - 1];

  // Interactive local state for active mission checklist
  const [checklist, setChecklist] = useState({
    tutorial: !!completedDaysMap[activeLesson?.id],
    notes: false,
    practice: false,
    challenge: false,
    miniProject: false
  });

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Dynamically calculate skill progress for Frontend Roadmap card
  const getCategoryProgress = (catId) => {
    const days = ROADMAP_DATA[catId] || [];
    if (!days.length) return 0;
    const done = days.filter(d => !!completedDaysMap[d.id]).length;
    return Math.round((done / days.length) * 100);
  };

  const htmlProgress = getCategoryProgress('html');
  const cssProgress = getCategoryProgress('css');
  const jsProgress = getCategoryProgress('js');
  const reactProgress = getCategoryProgress('react');

  // Dynamically calculate real total frontend progress safely
  const htmlDays = ROADMAP_DATA.html || [];
  const cssDays = ROADMAP_DATA.css || [];
  const jsDays = ROADMAP_DATA.js || [];
  const reactDays = ROADMAP_DATA.react || [];

  const totalFrontendDays = (htmlDays.length + cssDays.length + jsDays.length + reactDays.length) || 1;
  const totalFrontendDone = [
    ...htmlDays,
    ...cssDays,
    ...jsDays,
    ...reactDays
  ].filter(d => !!completedDaysMap[d.id]).length;
  const overallFrontendPercent = Math.round((totalFrontendDone / totalFrontendDays) * 100);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 font-body-md text-on-surface space-y-8 animate-fadeIn">
      {/* 1. Greeting Header with REAL User Data */}
      <div className="space-y-2 text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold font-display-lg text-on-surface flex items-center gap-2">
          Good Evening, {userName} <span className="animate-bounce inline-block">👋</span>
        </h1>
        <p className="text-base text-on-surface-variant font-medium">
          Ready to continue your mission?
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-fixed text-primary font-mono text-xs font-bold rounded-full mt-2">
          <span className="material-symbols-outlined text-sm">palette</span>
          Today's Focus: {skillCategory.name} Roadmap • Day {activeLesson.dayNumber} of {skillCategory.totalDays}
        </div>
      </div>

      {/* 2. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT COLUMN (Main Dashboard Content) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Mission Hero Card with REAL Lesson Data */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              
              {/* Mission Details (Left 3 cols) */}
              <div className="md:col-span-3 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm"
                    style={{ backgroundColor: skillCategory.color }}
                  >
                    <Atom size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-on-surface-variant uppercase">
                      {skillCategory.name} • Day {activeLesson.dayNumber}
                    </span>
                    <h2 className="text-2xl font-bold font-display-lg text-on-surface">
                      {activeLesson.title}
                    </h2>
                  </div>
                </div>

                {/* Overall Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono font-semibold text-on-surface-variant">
                    <span>Overall Progress</span>
                    <span className="text-primary font-bold">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full transition-all duration-500" 
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-on-surface-variant pt-1">
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-primary" /> {activeLesson.estimatedMinutes || 25} Minutes
                  </span>
                  <span className="flex items-center gap-1 text-primary font-bold">
                    <Trophy size={14} /> +{activeLesson.xpReward || 250} XP
                  </span>
                  <span className="flex items-center gap-1">
                    <Wrench size={14} className="text-tertiary" /> {activeLesson.miniProjectChecklist?.projectTitle || 'Mini Build'}
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onSelectLesson(activeLesson)}
                    className="tactile-button-primary px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:bg-primary-fixed-dim transition-all"
                  >
                    Continue Mission
                  </button>

                  <button
                    onClick={() => onSelectLesson(activeLesson)}
                    className="px-6 py-3 bg-surface border border-outline-variant text-on-surface font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors"
                  >
                    <Target size={16} className="text-red-500" /> Start Focus Session
                  </button>
                </div>
              </div>

              {/* Mission Checklist Box (Right 2 cols) */}
              <div className="md:col-span-2 bg-surface-container-low border border-outline-variant/60 rounded-xl p-4 text-left space-y-3">
                <h3 className="text-xs font-mono font-bold text-on-surface uppercase tracking-wider">
                  Mission Checklist
                </h3>
                <div className="space-y-2 text-xs font-medium">
                  <div 
                    onClick={() => toggleCheck('tutorial')}
                    className="flex items-center gap-2.5 cursor-pointer hover:text-primary transition-colors"
                  >
                    {checklist.tutorial ? <CheckCircle2 size={16} className="text-primary fill-primary/10" /> : <Circle size={16} className="text-outline" />}
                    <span className={checklist.tutorial ? 'line-through text-on-surface-variant' : ''}>Watch Tutorial</span>
                  </div>

                  <div 
                    onClick={() => toggleCheck('notes')}
                    className="flex items-center gap-2.5 cursor-pointer hover:text-primary transition-colors"
                  >
                    {checklist.notes ? <CheckCircle2 size={16} className="text-primary fill-primary/10" /> : <Circle size={16} className="text-outline" />}
                    <span className={checklist.notes ? 'line-through text-on-surface-variant' : ''}>Read Notes</span>
                  </div>

                  <div 
                    onClick={() => toggleCheck('practice')}
                    className="flex items-center gap-2.5 cursor-pointer hover:text-primary transition-colors"
                  >
                    {checklist.practice ? <CheckCircle2 size={16} className="text-primary fill-primary/10" /> : <Circle size={16} className="text-outline" />}
                    <span className={checklist.practice ? 'line-through text-on-surface-variant' : ''}>Practice</span>
                  </div>

                  <div 
                    onClick={() => toggleCheck('challenge')}
                    className="flex items-center gap-2.5 cursor-pointer hover:text-primary transition-colors"
                  >
                    {checklist.challenge ? <CheckCircle2 size={16} className="text-primary fill-primary/10" /> : <Circle size={16} className="text-outline" />}
                    <span className={checklist.challenge ? 'line-through text-on-surface-variant' : ''}>Challenge</span>
                  </div>

                  <div 
                    onClick={() => toggleCheck('miniProject')}
                    className="flex items-center gap-2.5 cursor-pointer hover:text-primary transition-colors"
                  >
                    {checklist.miniProject ? <CheckCircle2 size={16} className="text-primary fill-primary/10" /> : <Circle size={16} className="text-outline" />}
                    <span className={checklist.miniProject ? 'line-through text-on-surface-variant' : ''}>Mini Project</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Weekly Main Project (Boss Battle) Card */}
          <div className="p-6 bg-gradient-to-r from-surface-container-low to-surface border-2 border-primary/30 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left shadow-sm">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-amber-500/10 text-amber-600 font-mono text-[10px] font-bold rounded-full uppercase tracking-wider">
                <Trophy size={14} /> WEEKLY MAIN PROJECT BOSS BATTLE
              </div>
              <h3 className="text-xl font-bold font-display-lg text-on-surface">
                Build & Deploy: {activeSkillId.toUpperCase()} Master Portfolio Project
              </h3>
              <p className="text-xs text-on-surface-variant max-w-xl">
                Synthesize all your daily YouTube tutorials and tasks from this week into a complete production project ready for your GitHub portfolio!
              </p>
            </div>

            <button 
              onClick={() => onOpenBoss(activeSkillId)}
              className="tactile-button-primary px-6 py-3.5 bg-primary text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-md hover:bg-primary-fixed-dim transition-all shrink-0"
            >
              Start Weekly Main Project <Wrench size={16} />
            </button>
          </div>

          {/* Recent Projects Section (Dynamic Real Builds) */}
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold font-display-lg text-on-surface">Recent Projects</h2>
              <button onClick={() => onOpenBoss(activeSkillId)} className="text-xs font-mono font-bold text-primary hover:underline flex items-center gap-1">
                View All <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Project 1: HTML Semantic Card */}
              <div onClick={() => onSelectLesson(ROADMAP_DATA.html[6])} className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:border-primary/50 transition-all cursor-pointer">
                <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80')` }}></div>
                <div className="p-3 space-y-2">
                  <h4 className="font-bold text-sm text-on-surface truncate">Personal Portfolio</h4>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`px-2 py-0.5 font-mono font-bold rounded text-[10px] ${htmlProgress === 100 ? 'bg-emerald-500/10 text-emerald-600' : 'bg-primary-fixed text-primary'}`}>
                      {htmlProgress === 100 ? 'Finished' : 'In Progress'}
                    </span>
                    <span className="font-mono text-on-surface-variant text-[11px]">{htmlProgress}%</span>
                  </div>
                </div>
              </div>

              {/* Project 2: CSS Layout Calculator */}
              <div onClick={() => onSelectLesson(ROADMAP_DATA.css[6] || ROADMAP_DATA.css[0])} className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:border-primary/50 transition-all cursor-pointer">
                <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80')` }}></div>
                <div className="p-3 space-y-2">
                  <h4 className="font-bold text-sm text-on-surface truncate">Calculator UI</h4>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`px-2 py-0.5 font-mono font-bold rounded text-[10px] ${cssProgress === 100 ? 'bg-emerald-500/10 text-emerald-600' : 'bg-primary-fixed text-primary'}`}>
                      {cssProgress === 100 ? 'Finished' : 'In Progress'}
                    </span>
                    <span className="font-mono text-on-surface-variant text-[11px]">{cssProgress}%</span>
                  </div>
                </div>
              </div>

              {/* Project 3: Weather App JS */}
              <div onClick={() => onSelectLesson(ROADMAP_DATA.js[13])} className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:border-primary/50 transition-all cursor-pointer">
                <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=400&q=80')` }}></div>
                <div className="p-3 space-y-2">
                  <h4 className="font-bold text-sm text-on-surface truncate">Weather App</h4>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`px-2 py-0.5 font-mono font-bold rounded text-[10px] ${jsProgress === 100 ? 'bg-emerald-500/10 text-emerald-600' : 'bg-primary-fixed text-primary'}`}>
                      {jsProgress === 100 ? 'Finished' : 'In Progress'}
                    </span>
                    <span className="font-mono text-on-surface-variant text-[11px]">{jsProgress}%</span>
                  </div>
                </div>
              </div>

              {/* Project 4: Expense Tracker */}
              <div onClick={() => onSelectLesson((ROADMAP_DATA.react || ROADMAP_DATA.js)[0])} className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:border-primary/50 transition-all cursor-pointer">
                <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80')` }}></div>
                <div className="p-3 space-y-2">
                  <h4 className="font-bold text-sm text-on-surface truncate">Expense Tracker</h4>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`px-2 py-0.5 font-mono font-bold rounded text-[10px] ${reactProgress === 100 ? 'bg-emerald-500/10 text-emerald-600' : 'bg-primary-fixed text-primary'}`}>
                      {reactProgress === 100 ? 'Finished' : 'In Progress'}
                    </span>
                    <span className="font-mono text-on-surface-variant text-[11px]">{reactProgress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Interactive Timeline Roadmap Section (ALL DAYS VIEW) */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-md text-left space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-outline-variant">
              <div>
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  INTERACTIVE ROADMAP PATH
                </span>
                <h2 className="text-2xl font-bold font-display-lg text-on-surface">
                  {skillCategory.name} Timeline ({roadmapDays.length} Days)
                </h2>
              </div>
              <span className="px-3 py-1 bg-primary-fixed text-primary font-mono font-bold text-xs rounded-full">
                {progressPercent}% Complete
              </span>
            </div>

            {/* Timeline Node List */}
            <div className="relative pl-6 sm:pl-8 space-y-6 border-l-2 border-primary/30">
              {roadmapDays.map((day, idx) => {
                const isCompleted = !!completedDaysMap[day.id];
                const activeIndex = activeLessonIndex !== -1 ? activeLessonIndex : roadmapDays.length - 1;
                const isActive = idx === activeIndex;
                const isLocked = !isCompleted && idx > activeIndex;

                return (
                  <div 
                    key={day.id} 
                    onClick={() => {
                      if (isLocked) {
                        alert(`🔒 Day ${day.dayNumber} is locked! Complete Day ${day.dayNumber - 1} first to unlock this mission.`);
                      } else {
                        onSelectLesson(day);
                      }
                    }}
                    className={`relative p-5 rounded-2xl border transition-all card-hover ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-fixed/40 to-surface border-2 border-primary shadow-md cursor-pointer' 
                        : isCompleted 
                          ? 'bg-surface border-emerald-500/40 cursor-pointer' 
                          : 'bg-surface-container-low border-outline-variant/60 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    {/* Node Circle Indicator */}
                    <span className={`absolute -left-[37px] sm:-left-[45px] top-5 w-6 h-6 rounded-full border-4 border-surface flex items-center justify-center font-mono text-[10px] font-bold shadow-sm ${
                      isCompleted 
                        ? 'bg-emerald-500 text-white' 
                        : isActive 
                          ? 'bg-primary text-white animate-pulse' 
                          : 'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {isCompleted ? <Check size={12} /> : day.dayNumber}
                    </span>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className={`font-bold ${isCompleted ? 'text-emerald-600' : isActive ? 'text-primary' : 'text-on-surface-variant'}`}>
                            DAY {day.dayNumber}
                          </span>
                          <span className="text-outline-variant">•</span>
                          <span className="text-on-surface-variant">{day.summary}</span>
                        </div>
                        <h3 className="text-lg font-bold text-on-surface font-display-lg">
                          {day.title}
                        </h3>
                        {day.miniChallengeName && (
                          <div className="text-xs font-mono text-primary font-semibold flex items-center gap-1.5 pt-0.5">
                            <Target size={14} /> Challenge: {day.miniChallengeName}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-600 font-mono font-bold text-xs rounded-full flex items-center gap-1">
                          <Trophy size={14} /> +{day.xp || 100} XP
                        </span>
                        <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${
                          isCompleted 
                            ? 'bg-emerald-500/10 text-emerald-600' 
                            : isActive 
                              ? 'bg-primary text-white' 
                              : 'bg-surface-container-high text-on-surface-variant'
                        }`}>
                          {isCompleted ? 'Completed ✔' : isActive ? 'Start Day ⚡' : 'Locked 🔒'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Sidebar Widgets with REAL STATE) */}
        <div className="space-y-6 text-left">
          
          {/* Today's Quests Widget */}
          {(() => {
            const isMissionDone = completedCount > 0;
            const isPracticeDone = completedCount > 0;
            const isStreakDone = (userState?.streak || 1) >= 1;
            const questsCompleted = (isMissionDone ? 1 : 0) + (isPracticeDone ? 1 : 0) + (isStreakDone ? 1 : 0);

            return (
              <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-mono font-bold text-on-surface uppercase tracking-wider">
                    TODAY'S QUESTS
                  </h3>
                  <span className="text-xs font-mono font-semibold text-on-surface-variant">
                    {questsCompleted} / 3 Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Quest 1 */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between text-xs ${isMissionDone ? 'bg-surface-container-low border-outline-variant/60' : 'bg-surface border-outline-variant'}`}>
                    <div className="flex items-center gap-2.5">
                      {isMissionDone ? <CheckCircle2 size={18} className="text-primary fill-primary/10" /> : <Circle size={18} className="text-outline" />}
                      <div>
                        <span className={`font-bold text-on-surface ${isMissionDone ? 'line-through' : ''}`}>Complete Today's Mission</span>
                        <span className="block text-[10px] font-mono text-primary font-bold">+100 XP</span>
                      </div>
                    </div>
                  </div>

                  {/* Quest 2 */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between text-xs ${isPracticeDone ? 'bg-surface-container-low border-outline-variant/60' : 'bg-surface border-outline-variant'}`}>
                    <div className="flex items-center gap-2.5">
                      {isPracticeDone ? <CheckCircle2 size={18} className="text-primary fill-primary/10" /> : <Circle size={18} className="text-outline" />}
                      <div>
                        <span className={`font-bold text-on-surface ${isPracticeDone ? 'line-through' : ''}`}>Practice 15 Minutes</span>
                        <span className="block text-[10px] font-mono text-primary font-bold">+50 XP</span>
                      </div>
                    </div>
                  </div>

                  {/* Quest 3 */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between text-xs ${isStreakDone ? 'bg-surface-container-low border-outline-variant/60' : 'bg-surface border-outline-variant'}`}>
                    <div className="flex items-center gap-2.5">
                      {isStreakDone ? <CheckCircle2 size={18} className="text-primary fill-primary/10" /> : <Circle size={18} className="text-outline" />}
                      <div>
                        <span className={`font-bold text-on-surface ${isStreakDone ? 'line-through' : ''}`}>Maintain Streak</span>
                        <span className="block text-[10px] font-mono text-primary font-bold">+25 XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Current Streak Widget (REAL USER STREAK) */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-wider">
              <Flame size={18} className="fill-primary" />
              CURRENT STREAK
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-display-lg text-on-surface">{userState?.streak || 1}</span>
              <span className="text-xs text-on-surface-variant font-medium">Days (Best: {userState?.bestStreak || 21})</span>
            </div>

            <div className="flex justify-between items-center pt-2">
              {[...Array(7)].map((_, i) => (
                <Flame key={i} size={20} className={i < (userState?.streak || 1) ? "text-primary fill-primary" : "text-outline-variant"} />
              ))}
            </div>
          </div>

          {/* Journey Timeline Widget (DYNAMICALLY DERIVED FROM ROADMAP) */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-mono font-bold text-on-surface uppercase tracking-wider">
              JOURNEY TIMELINE
            </h3>

            <div className="relative pl-6 space-y-4 border-l-2 border-outline-variant">
              {/* Today */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-surface"></span>
                <span className="text-[11px] font-mono font-bold text-primary uppercase block">Today</span>
                <span className="font-bold text-sm text-on-surface">{activeLesson.title}</span>
              </div>

              {/* Tomorrow */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface"></span>
                <span className="text-[11px] font-mono font-bold text-on-surface-variant uppercase block">Tomorrow</span>
                <span className="font-bold text-sm text-on-surface">{nextLesson?.title || 'Next Mission'}</span>
              </div>

              {/* Next */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface"></span>
                <span className="text-[11px] font-mono font-bold text-on-surface-variant uppercase block">Next</span>
                <span className="font-bold text-sm text-on-surface">{upcomingLesson?.title || 'Advanced Concept'}</span>
              </div>

              {/* Boss Battle */}
              <div className="relative pt-2">
                <span className="absolute -left-[31px] top-2.5 text-amber-500">🏆</span>
                <span className="text-[11px] font-mono font-bold text-amber-600 uppercase block">BOSS BATTLE</span>
                <span className="font-bold text-sm text-on-surface">{bossBattle?.title || 'Capstone Build'}</span>
              </div>
            </div>
          </div>

          {/* Achievements Widget */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-mono font-bold text-on-surface uppercase tracking-wider">
              ACHIEVEMENTS
            </h3>

            <div className="p-3 bg-surface-container-low border border-outline-variant/60 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">{skillCategory.name} Champion</h4>
                <span className="text-[11px] text-on-surface-variant">Active Quest</span>
              </div>
            </div>
          </div>

          {/* Tip Box */}
          <div className="bg-primary-fixed/30 border border-primary/20 rounded-2xl p-5 text-left space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary">
              <Lightbulb size={16} /> TIP
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Today's challenge builds on foundational concept #{activeLesson.dayNumber}. Review notes or practice snippets if needed.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
