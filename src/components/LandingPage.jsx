import React from 'react';

export default function LandingPage({ 
  onStartLearning, 
  onOpenSignIn,
  onOpenSignUp,
  onExploreRoadmaps 
}) {
  return (
    <div className="antialiased min-h-screen font-body-md text-body-md bg-background text-on-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Top Navbar */}
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto h-20 bg-surface-container-lowest border-b border-outline-variant shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <a className="font-headline-md text-headline-md font-extrabold text-primary" href="#">SkillForge</a>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#roadmaps">Pathways</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#features">Challenges</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#roadmaps">Leaderboard</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#features">Library</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onOpenSignIn} className="hidden md:block text-on-surface-variant hover:text-primary transition-colors font-body-md font-semibold">
            Sign In
          </button>
          <button 
            onClick={onOpenSignUp || onStartLearning} 
            className="bg-primary text-on-primary font-body-md px-6 py-2 rounded-lg font-semibold hover:bg-primary-fixed-dim transition-all duration-300 shadow-sm"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex flex-col items-center text-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern z-0 opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[80px] z-0"></div>

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-outline mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Season 2 Now Live. Level up your tech skills.</span>
          </div>

          <h1 className="font-display-lg text-display-lg md:text-[64px] text-on-background mb-6 leading-tight">
            One Mission. <br />
            <span className="text-primary">One Project.</span> <br />
            Every Day.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Learn programming through structured daily missions, earn XP, build real projects, and stay consistent. Stop watching tutorials and start building your legacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={onOpenSignUp || onStartLearning} 
              className="bg-primary text-on-primary font-body-md text-[18px] px-8 py-4 rounded-xl font-bold hover:bg-primary-fixed-dim hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              Start Learning Free
            </button>
            <a 
              href="#roadmaps" 
              className="bg-surface border-2 border-outline text-on-surface-variant font-body-md text-[18px] px-8 py-4 rounded-xl font-bold hover:bg-surface-variant transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">explore</span>
              Explore Roadmaps
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-on-surface-variant">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" alt="User" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" />
              <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" alt="User" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" />
              <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" alt="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" />
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-variant flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant shadow-sm">+2k</div>
            </div>
            <div className="text-left">
              <div className="flex items-center text-primary text-sm">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <span className="font-label-sm text-label-sm">Join active learners today</span>
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Your Path to Mastery</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">A gamified system designed to build habits, not just knowledge.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-surface-container-high -translate-y-1/2 z-0">
            <div className="h-full bg-primary/50 w-full animate-track origin-left"></div>
          </div>
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center mb-6 relative shadow-sm">
              <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface text-on-surface-variant border border-outline-variant flex items-center justify-center font-label-sm text-[10px] font-bold">1</div>
            </div>
            <h3 className="font-headline-md text-[20px] text-on-background mb-2">Choose a Roadmap</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Select your quest. From Frontend basics to full-stack mastery.</p>
          </div>
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary/50 flex items-center justify-center mb-6 relative shadow-[0_0_15px_rgba(249,115,22,0.15)]">
              <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-on-primary border border-primary flex items-center justify-center font-label-sm text-[10px] font-bold">2</div>
            </div>
            <h3 className="font-headline-md text-[20px] text-on-background mb-2">Daily Missions</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Bite-sized, actionable tasks to complete every single day.</p>
          </div>
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center mb-6 relative shadow-sm">
              <span className="material-symbols-outlined text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface text-on-surface-variant border border-outline-variant flex items-center justify-center font-label-sm text-[10px] font-bold">3</div>
            </div>
            <h3 className="font-headline-md text-[20px] text-on-background mb-2">Build Projects</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Apply what you learn immediately by building real-world apps.</p>
          </div>
          {/* Step 4 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center mb-6 relative shadow-sm">
              <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface text-on-surface-variant border border-outline-variant flex items-center justify-center font-label-sm text-[10px] font-bold">4</div>
            </div>
            <h3 className="font-headline-md text-[20px] text-on-background mb-2">Unlock Skills</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Earn XP, level up, and unlock new, advanced nodes on your tree.</p>
          </div>
        </div>
      </section>

      {/* Supported Roadmaps Section */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="roadmaps">
        <div className="max-w-max-width mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-2">Active Quests</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Structured paths designed to take you from novice to pro.</p>
            </div>
            <button onClick={onStartLearning} className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">
              View All Paths <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <div onClick={onStartLearning} className="glass-panel p-6 rounded-xl card-hover transition-all duration-300 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 bg-surface-container px-2 py-1 rounded-bl-lg font-label-sm text-[10px] text-on-surface-variant border-b border-l border-outline-variant">LVL. 01</div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-4 text-[#E34F26]">
                <span className="material-symbols-outlined text-2xl">html</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-background mb-2">HTML Foundations</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6">Master the structure of the web. Build semantic, accessible documents.</p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary w-[100%] h-full"></div>
              </div>
            </div>
            {/* Card 2 */}
            <div onClick={onStartLearning} className="glass-panel p-6 rounded-xl card-hover transition-all duration-300 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 bg-surface-container px-2 py-1 rounded-bl-lg font-label-sm text-[10px] text-on-surface-variant border-b border-l border-outline-variant">LVL. 02</div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-4 text-[#1572B6]">
                <span className="material-symbols-outlined text-2xl">css</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-background mb-2">CSS Mastery</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6">Learn layouts, animations, and responsive design techniques.</p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary w-[80%] h-full"></div>
              </div>
            </div>
            {/* Card 3 */}
            <div onClick={onStartLearning} className="glass-panel p-6 rounded-xl card-hover transition-all duration-300 relative overflow-hidden group cursor-pointer border-primary/40 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
              <div className="absolute top-0 right-0 bg-primary-fixed px-2 py-1 rounded-bl-lg font-label-sm text-[10px] text-primary border-b border-l border-primary/30">IN PROGRESS</div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-4 text-[#F7DF1E]">
                <span className="material-symbols-outlined text-2xl">javascript</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-background mb-2">JavaScript Core</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6">The engine of the web. DOM manipulation, async JS, and modern ES6+.</p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary w-[45%] h-full relative">
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="glass-panel p-6 rounded-xl relative overflow-hidden opacity-70 border-dashed border-outline">
              <div className="absolute inset-0 bg-surface/50 backdrop-blur-[2px] z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="bg-surface px-3 py-1 rounded font-label-sm text-sm text-on-surface border border-outline flex items-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">lock</span> Locked
                </span>
              </div>
              <div className="absolute top-0 right-0 bg-surface-container px-2 py-1 rounded-bl-lg font-label-sm text-[10px] text-outline border-b border-l border-outline-variant">LVL. 05</div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-4 text-[#3178C6] opacity-50">
                <span className="material-symbols-outlined text-2xl">code</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface-variant mb-2">TypeScript</h3>
              <p className="font-body-md text-sm text-on-surface-variant/70 mb-6">Add static typing to JS. Catch errors early and improve architecture.</p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-outline-variant w-[0%] h-full"></div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="glass-panel p-6 rounded-xl relative overflow-hidden opacity-70 border-dashed border-outline">
              <div className="absolute inset-0 bg-surface/50 backdrop-blur-[2px] z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="bg-surface px-3 py-1 rounded font-label-sm text-sm text-on-surface border border-outline flex items-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">lock</span> Locked
                </span>
              </div>
              <div className="absolute top-0 right-0 bg-surface-container px-2 py-1 rounded-bl-lg font-label-sm text-[10px] text-outline border-b border-l border-outline-variant">LVL. 07</div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-4 text-[#61DAFB] opacity-50">
                <span className="material-symbols-outlined text-2xl">view_quilt</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface-variant mb-2">React Ecosystem</h3>
              <p className="font-body-md text-sm text-on-surface-variant/70 mb-6">Build complex UI components. Hooks, state management, routing.</p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-outline-variant w-[0%] h-full"></div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="glass-panel p-6 rounded-xl relative overflow-hidden opacity-70 border-dashed border-outline">
              <div className="absolute inset-0 bg-surface/50 backdrop-blur-[2px] z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="bg-surface px-3 py-1 rounded font-label-sm text-sm text-on-surface border border-outline flex items-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">lock</span> Locked
                </span>
              </div>
              <div className="absolute top-0 right-0 bg-surface-container px-2 py-1 rounded-bl-lg font-label-sm text-[10px] text-outline border-b border-l border-outline-variant">LVL. 09</div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-4 text-[#61DAFB] opacity-50">
                <span className="material-symbols-outlined text-2xl">phone_iphone</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface-variant mb-2">React Native</h3>
              <p className="font-body-md text-sm text-on-surface-variant/70 mb-6">Take your React skills to mobile. Build iOS and Android apps.</p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-outline-variant w-[0%] h-full"></div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="border-t border-outline-variant pt-12">
            <h3 className="font-headline-md text-[20px] text-on-background mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">hourglass_empty</span>
              Upcoming Expansions
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface-variant font-label-sm text-sm flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span> Node.js
              </div>
              <div className="px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface-variant font-label-sm text-sm flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span> Python
              </div>
              <div className="px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface-variant font-label-sm text-sm flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span> AI Integration
              </div>
              <div className="px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface-variant font-label-sm text-sm flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span> Cloud Deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Bento Grid) */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface max-w-max-width mx-auto" id="features">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">The SkillForge Arsenal</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Everything you need to level up your development skills, integrated into one seamless experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[200px]">
          {/* Feature 1: Large Span */}
          <div className="glass-panel rounded-xl p-6 md:col-span-2 md:row-span-2 relative overflow-hidden group flex flex-col justify-end">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[50px] -mr-20 -mt-20 transition-all group-hover:bg-primary/10"></div>
            <div className="absolute top-6 right-6">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-2xl text-on-background mb-2">Daily Missions & Streaks</h3>
              <p className="font-body-md text-on-surface-variant max-w-md">Maintain momentum with carefully curated daily tasks. Watch your streak grow and earn multiplier bonuses for consistency.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-4 right-4">
              <span className="material-symbols-outlined text-2xl text-tertiary">star</span>
            </div>
            <div className="mt-8">
              <h3 className="font-headline-md text-[18px] text-on-background mb-2">XP System</h3>
              <p className="font-body-md text-sm text-on-surface-variant">Earn experience points for every completed node. Level up your profile.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-4 right-4">
              <span className="material-symbols-outlined text-2xl text-secondary">folder_special</span>
            </div>
            <div className="mt-8">
              <h3 className="font-headline-md text-[18px] text-on-background mb-2">Real Projects</h3>
              <p className="font-body-md text-sm text-on-surface-variant">Build portfolio-ready applications instead of isolated snippets.</p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-4 right-4">
              <span className="material-symbols-outlined text-2xl text-outline-variant">edit_note</span>
            </div>
            <div className="mt-8">
              <h3 className="font-headline-md text-[18px] text-on-background mb-2">Integrated Notes</h3>
              <p className="font-body-md text-sm text-on-surface-variant">Jot down key takeaways directly within your learning modules.</p>
            </div>
          </div>
          {/* Feature 5: Wide Span */}
          <div className="glass-panel rounded-xl p-6 md:col-span-2 relative overflow-hidden group flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-3xl text-on-background">monitoring</span>
            </div>
            <div>
              <h3 className="font-headline-md text-[20px] text-on-background mb-2">Visual Roadmaps</h3>
              <p className="font-body-md text-sm text-on-surface-variant">See exactly where you are, what you've conquered, and what lies ahead on the skill tree.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden border-t border-outline-variant">
        <div className="max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Inside the Forge</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">A dark-mode, distraction-free environment built for focus.</p>
          </div>
          <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-xl border border-outline shadow-2xl overflow-hidden group">
            <div className="bg-cover bg-center w-full h-full transform transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80')" }}></div>
            <div className="absolute top-4 left-4 bg-inverse-surface/80 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2 border border-outline-variant/20 shadow-lg">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm font-bold text-inverse-on-surface">Mission Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-[1280px] mx-auto bg-surface-container-low border-t border-outline-variant">
        <div className="flex flex-col gap-4">
          <a className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            SkillForge
          </a>
          <p className="font-body-md text-body-md text-on-surface-variant">© 2026 SkillForge. Forge Your Future.</p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-label-md text-on-background font-bold mb-2">Platform</h4>
          <a className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-all duration-300" href="#roadmaps">Curriculum</a>
          <a className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-all duration-300" href="#features">Mentors</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-label-md text-on-background font-bold mb-2">Legal</h4>
          <a className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-all duration-300" href="#">Privacy Policy</a>
          <a className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-all duration-300" href="#">Terms of Service</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-label-md text-on-background font-bold mb-2">Connect</h4>
          <button onClick={onStartLearning} className="text-left font-body-md text-body-md text-primary font-bold hover:underline">
            Start Learning Now →
          </button>
        </div>
      </footer>
    </div>
  );
}
