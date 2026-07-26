import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Flame, 
  Award, 
  Trophy,
  Code, 
  Terminal, 
  CheckCircle2, 
  Circle, 
  HelpCircle, 
  RotateCcw,
  Sparkles,
  Zap,
  Target,
  Maximize2,
  CheckSquare,
  FileCode2,
  ShieldCheck,
  Clock,
  Layers,
  Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DuolingoLessonFlow({ 
  lesson, 
  onClose, 
  onCompleteLesson,
  onNavigateToProjects,
  onNavigateToQuests
}) {
  const [activeTab, setActiveTab] = useState('index.html');
  const [userCode, setUserCode] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [isMalayalamHintOpen, setIsMalayalamHintOpen] = useState(false);
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(0);
  const [completedChecklistItems, setCompletedChecklistItems] = useState({
    tutorial: true,
    notes: true,
    ex1: false,
    ex2: false,
    quiz: false,
    challenge: false
  });

  useEffect(() => {
    if (lesson?.codingTask?.starterCode) {
      setUserCode(lesson.codingTask.starterCode);
    } else {
      setUserCode(`<!DOCTYPE html>\n<html>\n<head>\n  <title>${lesson?.title || 'Lesson Code'}</title>\n</head>\n<body>\n  <h1>${lesson?.title || 'Web Page'}</h1>\n  <p>Write your code below...</p>\n</body>\n</html>`);
    }
    setTerminalOutput('Click ▶ Run Code to execute output in live preview');
  }, [lesson]);

  const handleRunCode = () => {
    setIsCodeRunning(true);
    setTimeout(() => {
      setTerminalOutput(userCode);
      setIsCodeRunning(false);
      setCompletedChecklistItems(prev => ({ ...prev, challenge: true, ex1: true, ex2: true }));
    }, 300);
  };

  const toggleChecklistItem = (key) => {
    setCompletedChecklistItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const checklistCount = Object.values(completedChecklistItems).filter(Boolean).length;
  const checklistPercent = Math.round((checklistCount / 6) * 100);

  const handleFinishDay = () => {
    try {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    } catch (e) {}
    onCompleteLesson(lesson);
    onClose();
    if (onNavigateToProjects) onNavigateToProjects();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col font-body-md selection:bg-purple-500/30 selection:text-purple-300">
      
      {/* ========================================================
          1. TOP NAVIGATION BAR (Linear + Codédex + Duolingo)
         ======================================================== */}
      <header className="h-14 bg-slate-900/90 border-b border-slate-800 px-6 flex items-center justify-between shrink-0 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onClose}>
            <span className="material-symbols-outlined text-purple-500 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span className="font-headline-md text-lg font-extrabold text-white tracking-tight">SkillForge</span>
          </div>

          <span className="text-slate-700">/</span>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded font-bold">
              {lesson?.id?.includes('css') ? 'CSS Roadmap' : lesson?.id?.includes('js') ? 'JS Roadmap' : 'HTML Roadmap'}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-bold">Day {lesson?.dayNumber || 1} of {lesson?.id?.includes('js') ? 21 : 7}</span>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="hidden md:flex items-center gap-3 w-60">
          <span className="text-[11px] font-mono text-slate-400">Progress</span>
          <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-emerald-500 h-full transition-all duration-300" style={{ width: `${checklistPercent}%` }}></div>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400">{checklistPercent}%</span>
        </div>

        {/* Stats Cluster */}
        <div className="flex items-center gap-4 text-xs font-mono font-bold">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-amber-400">
            <Trophy size={15} />
            <span>Level 1</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-orange-400">
            <Flame size={15} className="fill-orange-400" />
            <span>+250 XP</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-red-400">
            <Heart size={15} className="fill-red-400" />
            <span>5/5</span>
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
            <X size={20} />
          </button>
        </div>
      </header>

      {/* ========================================================
          2. "TODAY'S MISSION" HERO BANNER (Answers 4 Key Questions)
         ======================================================== */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-950/40 border-b border-slate-800 px-6 py-3 shrink-0 text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
              <Target size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider">🎯 TODAY'S MISSION</span>
                <span className="text-[10px] font-mono text-slate-400">• ⏱ Estimated Time: 35 Minutes</span>
              </div>
              <h2 className="text-base font-extrabold font-display-lg text-white">
                Goal: {lesson?.title || 'Learn HTML Links & Images'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="hidden sm:block text-slate-300">
              <span className="text-slate-400 block text-[10px]">Outcome:</span>
              <strong className="text-emerald-400">{lesson?.miniChallengeName || 'Travel Blog Page'}</strong>
            </div>

            <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300 font-bold flex items-center gap-1.5">
              <Sparkles size={14} className="text-purple-400" />
              <span>Rewards: ⭐ 250 XP | 🔥 Keep Streak | 🏅 HTML Architect</span>
            </div>

            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[10px] text-slate-400">Weekly Progress</span>
              <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-purple-500 h-full w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. THREE-COLUMN RESPONSIVE LAYOUT (35% Left | 35% Middle | 30% Right)
         ======================================================== */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* ========================================================
            LEFT PANEL (35% - Learning Content)
           ======================================================== */}
        <div className="w-full lg:w-[35%] bg-slate-900 border-r border-slate-800 p-5 overflow-y-auto space-y-5 text-left shrink-0">
          
          {/* Metadata Card */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-purple-400 font-bold">Week 1 • Day {lesson?.dayNumber || 4}</span>
              <span className="text-slate-400">Difficulty: <strong className="text-white">Beginner</strong></span>
            </div>
            <h3 className="text-lg font-bold text-white font-display-lg">
              Topic: {lesson?.title || 'Images & Hyperlinks'}
            </h3>
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1"><Clock size={14} /> 35 Minutes</span>
              <span className="text-emerald-400 font-bold">Progress: {lesson?.dayNumber || 4} / 7 Days</span>
            </div>
          </div>

          {/* Embedded YouTube Player Card with Multi-Video Selector */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Play size={14} className="text-purple-400" /> Today's Videos</span>
              <span className="text-purple-400 font-bold text-[10px]">Malayalam & English Curated</span>
            </h4>

            {/* Video Type Selector Tabs */}
            {lesson?.videos && lesson.videos.length > 0 && (
              <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] font-mono">
                {lesson.videos.map((vid, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVideoIdx(idx)}
                    className={`px-3 py-1 rounded-lg border font-bold whitespace-nowrap transition-colors ${
                      selectedVideoIdx === idx 
                        ? 'bg-purple-600 text-white border-purple-500 shadow-sm' 
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    ▶ {vid.type}
                  </button>
                ))}
              </div>
            )}

            {/* Active Video Player */}
            {(() => {
              const activeVideo = (lesson?.videos && lesson.videos[selectedVideoIdx]) || {
                videoId: lesson?.youtubeId || 's97BsqG_YvE',
                title: lesson?.youtubeTitle || lesson?.title,
                channel: lesson?.youtubeChannel || 'Techie Malayalam'
              };

              return (
                <div className="space-y-2">
                  <div className="relative w-full aspect-video rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-lg">
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?start=${activeVideo.startSeconds || 0}`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex flex-wrap justify-between items-center p-2 bg-slate-950 border border-slate-800 rounded-lg gap-2">
                    <span className="text-purple-400 font-bold truncate">Channel: {activeVideo.channel}</span>
                    {activeVideo.startTime && (
                      <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded font-bold">
                        ⏱ Chapter: {activeVideo.startTime} ➔ {activeVideo.endTime}
                      </span>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Quick Notes Cards */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers size={14} /> Quick Notes & Syntax
            </h4>
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-300 whitespace-pre-line leading-relaxed">
              {lesson?.notes || `Cards explaining:\n- <img>: Embeds image\n- src: Image file path\n- alt: Accessible text\n- <a>: Anchor link tag\n- href: Destination URL`}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono">Instructions</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400 shrink-0" /> Step 1: Watch tutorial video</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400 shrink-0" /> Step 2: Read quick notes</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-400 shrink-0" /> Step 3: Follow along in code editor</div>
              <div className="flex items-center gap-2"><Circle size={16} className="text-slate-600 shrink-0" /> Step 4: Complete coding challenge</div>
            </div>
          </div>

        </div>

        {/* ========================================================
            MIDDLE PANEL (35% - Interactive Coding Workspace)
           ======================================================== */}
        <div className="w-full lg:w-[35%] bg-slate-950 border-r border-slate-800 flex flex-col overflow-hidden shrink-0">
          
          {/* Editor Header & File Tabs */}
          <div className="h-10 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setActiveTab('index.html')}
                className={`px-3 py-1 rounded-t text-xs font-mono flex items-center gap-1.5 transition-colors ${activeTab === 'index.html' ? 'bg-slate-950 text-purple-400 border-t-2 border-purple-500 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                <Code size={14} /> index.html
              </button>
              <button 
                onClick={() => setActiveTab('style.css')}
                className={`px-3 py-1 rounded-t text-xs font-mono flex items-center gap-1.5 transition-colors ${activeTab === 'style.css' ? 'bg-slate-950 text-purple-400 border-t-2 border-purple-500 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                <FileCode2 size={14} /> style.css
              </button>
              <button 
                onClick={() => setActiveTab('script.js')}
                className={`px-3 py-1 rounded-t text-xs font-mono flex items-center gap-1.5 transition-colors ${activeTab === 'script.js' ? 'bg-slate-950 text-purple-400 border-t-2 border-purple-500 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                <Zap size={14} /> script.js
              </button>
            </div>

            {/* Action Buttons Toolbar */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handleRunCode}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded flex items-center gap-1 shadow transition-colors"
              >
                <Play size={12} /> Run
              </button>
              <button 
                onClick={() => setUserCode(lesson?.codingTask?.starterCode || '')}
                className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded" 
                title="Reset Code"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* Monaco / Code Editor */}
          <div className="flex-1 relative bg-slate-950 p-4 font-mono text-xs text-slate-100 overflow-hidden flex">
            <div className="select-none pr-3 text-slate-600 text-right space-y-1 font-mono text-[11px]">
              {[...Array(24)].map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full h-full bg-transparent text-slate-100 outline-none resize-none font-mono text-xs leading-relaxed"
              spellCheck="false"
            />
          </div>

          {/* Live Preview & Console Box */}
          <div className="h-48 bg-slate-900 border-t border-slate-800 flex flex-col shrink-0">
            <div className="h-8 bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Terminal size={14} /> Live Output & Console</span>
              {isCodeRunning && <span className="text-emerald-400 font-bold">Executing...</span>}
            </div>

            <div className="flex-1 p-3 overflow-y-auto font-mono text-xs bg-slate-950/70">
              {terminalOutput.startsWith('<!DOCTYPE') || terminalOutput.includes('<html') || terminalOutput.includes('<h1') ? (
                <iframe 
                  className="w-full h-full bg-white rounded border border-slate-800"
                  srcDoc={terminalOutput}
                  title="Live Preview Output"
                />
              ) : (
                <pre className="text-slate-300 whitespace-pre-wrap">{terminalOutput}</pre>
              )}
            </div>
          </div>

        </div>

        {/* ========================================================
            RIGHT PANEL (30% - Mission Panel)
           ======================================================== */}
        <div className="w-full lg:w-[30%] bg-slate-900 p-5 overflow-y-auto space-y-5 text-left shrink-0">
          
          {/* Today's Checklist */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-xs text-white uppercase tracking-wider font-mono">Today's Checklist</h4>
              <span className="text-xs font-mono font-bold text-purple-400">{checklistCount} / 6</span>
            </div>

            <div className="space-y-2 text-xs font-medium">
              <div onClick={() => toggleChecklistItem('tutorial')} className="flex items-center gap-2 cursor-pointer text-slate-300">
                {completedChecklistItems.tutorial ? <CheckCircle2 size={16} className="text-purple-400 fill-purple-500/10" /> : <Circle size={16} className="text-slate-600" />}
                <span className={completedChecklistItems.tutorial ? 'line-through text-slate-400' : ''}>Watch Tutorial</span>
              </div>
              <div onClick={() => toggleChecklistItem('notes')} className="flex items-center gap-2 cursor-pointer text-slate-300">
                {completedChecklistItems.notes ? <CheckCircle2 size={16} className="text-purple-400 fill-purple-500/10" /> : <Circle size={16} className="text-slate-600" />}
                <span className={completedChecklistItems.notes ? 'line-through text-slate-400' : ''}>Read Quick Notes</span>
              </div>
              <div onClick={() => toggleChecklistItem('ex1')} className="flex items-center gap-2 cursor-pointer text-slate-300">
                {completedChecklistItems.ex1 ? <CheckCircle2 size={16} className="text-purple-400 fill-purple-500/10" /> : <Circle size={16} className="text-slate-600" />}
                <span className={completedChecklistItems.ex1 ? 'line-through text-slate-400' : ''}>Complete Exercise 1</span>
              </div>
              <div onClick={() => toggleChecklistItem('ex2')} className="flex items-center gap-2 cursor-pointer text-slate-300">
                {completedChecklistItems.ex2 ? <CheckCircle2 size={16} className="text-purple-400 fill-purple-500/10" /> : <Circle size={16} className="text-slate-600" />}
                <span className={completedChecklistItems.ex2 ? 'line-through text-slate-400' : ''}>Complete Exercise 2</span>
              </div>
              <div onClick={() => toggleChecklistItem('quiz')} className="flex items-center gap-2 cursor-pointer text-slate-300">
                {completedChecklistItems.quiz ? <CheckCircle2 size={16} className="text-purple-400 fill-purple-500/10" /> : <Circle size={16} className="text-slate-600" />}
                <span className={completedChecklistItems.quiz ? 'line-through text-slate-400' : ''}>Pass Knowledge Quiz</span>
              </div>
              <div onClick={() => toggleChecklistItem('challenge')} className="flex items-center gap-2 cursor-pointer text-slate-300">
                {completedChecklistItems.challenge ? <CheckCircle2 size={16} className="text-purple-400 fill-purple-500/10" /> : <Circle size={16} className="text-slate-600" />}
                <span className={completedChecklistItems.challenge ? 'line-through text-slate-400' : ''}>Finish Coding Challenge</span>
              </div>
            </div>
          </div>

          {/* Progress Ring & Today's XP */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Today's XP</span>
              <span className="text-xl font-extrabold font-display-lg text-orange-400">180 / 250</span>
            </div>
            <div className="relative w-14 h-14 rounded-full border-4 border-slate-800 border-t-purple-500 border-r-purple-500 flex items-center justify-center font-bold text-xs text-white font-mono">
              65%
            </div>
          </div>

          {/* Mini Project Box */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono">
              Mini Project: {lesson?.miniChallengeName || 'Travel Blog Page'}
            </h4>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Navigation Menu</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Image Assets</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> External Links</div>
            </div>
          </div>

          {/* Malayalam Hint Button */}
          <button 
            onClick={() => setIsMalayalamHintOpen(!isMalayalamHintOpen)}
            className="w-full p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl text-left text-xs font-mono text-purple-300 font-bold flex items-center justify-between hover:bg-purple-500/20 transition-colors"
          >
            <span>💡 Need Help? Malayalam Tip</span>
            <span>{isMalayalamHintOpen ? '▲' : '▼'}</span>
          </button>
          {isMalayalamHintOpen && (
            <div className="p-3 bg-slate-950 border border-purple-500/20 rounded-xl text-xs text-slate-300 font-mono">
              ഇന്നത്തെ മിഷനിലെ ലിങ്കുകളും ഇമേജുകളും കൃത്യമായി കണക്ട് ചെയ്യാൻ &lt;a href="..."&gt; &amp; &lt;img src="..."&gt; ടാഗുകൾ ഉപയോഗിക്കുക.
            </div>
          )}

          {/* Achievement Preview */}
          <div className="p-4 bg-gradient-to-r from-purple-950/60 to-slate-950 border border-purple-500/30 rounded-2xl flex items-center gap-3">
            <Award size={28} className="text-amber-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-purple-300 uppercase block font-bold">ACHIEVEMENT PREVIEW</span>
              <span className="text-xs font-bold text-white">Unlock HTML Architect Badge</span>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleFinishDay}
            className="tactile-button-primary w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            Complete Day 🚀
          </button>

        </div>

      </div>

      {/* ========================================================
          4. BOTTOM STATUS BAR (Linear + Codédex Status Bar)
         ======================================================== */}
      <footer className="h-10 bg-slate-900 border-t border-slate-800 px-6 flex items-center justify-between shrink-0 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold">Step {lesson?.dayNumber || 4} of 7</span>
          <span>•</span>
          <span className="text-emerald-400">Autosaved</span>
          <span>•</span>
          <span>Last Sync: Just now</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-slate-500">Shortcuts: ⌘ + Enter to Run</span>
          <button onClick={handleRunCode} className="px-3 py-1 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-500">Run</button>
          <button onClick={handleFinishDay} className="px-3 py-1 bg-purple-600 text-white rounded font-bold hover:bg-purple-500">Next Lesson ➔</button>
        </div>
      </footer>

    </div>
  );
}
