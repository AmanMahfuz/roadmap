import React, { useState } from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  User, 
  Paintbrush, 
  Layers, 
  Smartphone, 
  Brain, 
  Compass, 
  Sparkles,
  Smile,
  Code,
  Terminal,
  Zap,
  Clock,
  Timer,
  Dumbbell
} from 'lucide-react';

export default function OnboardingFlow({ onCompleteOnboarding }) {
  const [currentStep, setCurrentStep] = useState(1); // 1: Welcome, 2: Goal, 3: Experience, 4: Daily Time
  
  // Selection states
  const [selectedGoal, setSelectedGoal] = useState('frontend');
  const [selectedExp, setSelectedExp] = useState('beginner');
  const [selectedTime, setSelectedTime] = useState('30');

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Finish onboarding
      onCompleteOnboarding({
        goal: selectedGoal,
        experience: selectedExp,
        dailyTime: selectedTime,
        startingTrack: selectedGoal === 'mobile' ? 'js' : selectedGoal === 'ai' ? 'js' : 'html'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background text-on-surface flex flex-col justify-between p-4 md:p-8 font-body-md overflow-y-auto selection:bg-primary/20 selection:text-primary">
      {/* Top Navbar */}
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center py-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <span className="font-headline-md text-2xl font-extrabold text-primary">DevQuik</span>
        </div>

        <div className="flex items-center gap-4 text-on-surface-variant">
          <button 
            onClick={() => onCompleteOnboarding({ goal: 'frontend', experience: 'beginner', dailyTime: '30', startingTrack: 'html' })}
            className="text-xs font-mono font-bold text-primary hover:underline px-3 py-1.5 rounded-lg border border-primary/30 bg-primary-fixed/30"
          >
            Skip to Home Dashboard ➔
          </button>
          <button className="p-2 hover:text-primary transition-colors rounded-full hover:bg-surface-container-high" title="Help">
            <HelpCircle size={20} />
          </button>
          <button className="p-2 hover:text-primary transition-colors rounded-full hover:bg-surface-container-high" title="Account">
            <User size={20} />
          </button>
        </div>
      </header>

      {/* SCREEN 1: WELCOME */}
      {currentStep === 1 && (
        <main className="w-full max-w-2xl mx-auto my-auto text-center space-y-8 py-8 animate-fadeIn">
          {/* Trophy Artwork Frame (Exact Screen 1 Image) */}
          <div className="relative w-56 h-56 mx-auto flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-surface-container to-surface-container-low border-4 border-surface shadow-2xl flex items-center justify-center relative overflow-hidden">
              <span className="material-symbols-outlined text-7xl text-primary transform -rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-2 right-2 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg transform rotate-12">
              <span className="material-symbols-outlined text-xl">school</span>
            </div>
            <div className="absolute bottom-4 left-2 w-10 h-10 rounded-xl bg-surface border border-outline-variant text-primary flex items-center justify-center shadow-lg transform -rotate-6">
              <span className="material-symbols-outlined text-xl">trending_up</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold font-display-lg text-on-surface tracking-tight">
              Welcome to <span className="text-primary">DevQuik</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              We'll build your learning journey. From foundational concepts to professional mastery, your path to excellence starts here.
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={handleNext}
              className="tactile-button-primary px-10 py-4 bg-primary text-white font-bold text-lg rounded-full inline-flex items-center gap-3 shadow-lg hover:bg-primary-fixed-dim transition-all"
            >
              Continue <ArrowRight size={20} />
            </button>

            <p className="text-xs font-mono font-semibold text-on-surface-variant pt-2">
              Step 1 of 4: Profile Setup
            </p>
          </div>
        </main>
      )}

      {/* SCREEN 2: GOAL ("What's your goal?") */}
      {currentStep === 2 && (
        <main className="w-full max-w-4xl mx-auto my-auto space-y-8 py-6 text-center animate-fadeIn">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold font-display-lg text-on-surface">
              What's your goal?
            </h1>
            <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
              Select a path that aligns with your career aspirations. We'll tailor your learning experience to help you forge the skills you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {/* Card 1: Frontend */}
            <div 
              onClick={() => setSelectedGoal('frontend')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                selectedGoal === 'frontend' 
                  ? 'bg-surface border-2 border-primary shadow-lg ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Paintbrush size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface mb-1">Frontend</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Master modern UI frameworks, responsive design, and interactive user experiences with React and Tailwind.
                </p>
              </div>
            </div>

            {/* Card 2: Full Stack */}
            <div 
              onClick={() => setSelectedGoal('fullstack')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                selectedGoal === 'fullstack' 
                  ? 'bg-surface border-2 border-primary shadow-lg ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Layers size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface mb-1">Full Stack</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Bridge the gap between frontend and backend. Learn databases, APIs, and scalable architecture from end-to-end.
                </p>
              </div>
            </div>

            {/* Card 3: Mobile */}
            <div 
              onClick={() => setSelectedGoal('mobile')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                selectedGoal === 'mobile' 
                  ? 'bg-surface border-2 border-primary shadow-lg ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Smartphone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface mb-1">Mobile</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Build high-performance native and cross-platform applications for iOS and Android devices.
                </p>
              </div>
            </div>

            {/* Card 4: AI */}
            <div 
              onClick={() => setSelectedGoal('ai')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                selectedGoal === 'ai' 
                  ? 'bg-surface border-2 border-primary shadow-lg ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Brain size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface mb-1">AI</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Dive into machine learning, neural networks, and prompt engineering to build the future of intelligence.
                </p>
              </div>
            </div>

            {/* Card 5: Just Learning */}
            <div 
              onClick={() => setSelectedGoal('explore')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                selectedGoal === 'explore' 
                  ? 'bg-surface border-2 border-primary shadow-lg ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Compass size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface mb-1">Just Learning</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Not sure yet? Start with foundational skills and explore various paths at your own pace.
                </p>
              </div>
            </div>

            {/* Card 6: Growth Engine Highlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-fixed to-surface-container border border-primary/30 flex flex-col items-center justify-center text-center text-on-surface">
              <Sparkles size={28} className="text-primary mb-2 animate-bounce" />
              <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-1">GROWTH ENGINE</span>
              <p className="text-xs text-on-surface-variant font-medium">
                Unlock your full potential with DevQuik's adaptive curriculum.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-between items-center border-t border-outline-variant max-w-4xl mx-auto">
            <span className="text-xs font-mono font-semibold text-on-surface-variant">Step 2 of 4</span>
            <button
              onClick={handleNext}
              className="tactile-button-primary px-8 py-3 bg-primary text-white font-bold rounded-xl flex items-center gap-2 shadow-md"
            >
              Continue <ArrowRight size={18} />
            </button>
          </div>
        </main>
      )}

      {/* SCREEN 3: EXPERIENCE LEVEL ("Your Experience Level") */}
      {currentStep === 3 && (
        <main className="w-full max-w-4xl mx-auto my-auto space-y-8 py-6 text-center animate-fadeIn">
          <div className="space-y-2">
            <div className="flex justify-center gap-2 mb-4">
              <span className="w-8 h-1 rounded bg-primary"></span>
              <span className="w-8 h-1 rounded bg-primary"></span>
              <span className="w-8 h-1 rounded bg-primary"></span>
              <span className="w-8 h-1 rounded bg-outline-variant"></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display-lg text-on-surface">
              Your Experience Level
            </h1>
            <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
              Forge a personalized learning path tailored specifically to your current technical background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Beginner */}
            <div 
              onClick={() => setSelectedExp('beginner')}
              className={`p-8 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-between min-h-[220px] ${
                selectedExp === 'beginner' 
                  ? 'bg-surface border-2 border-primary shadow-xl ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-4">
                <Smile size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-on-surface mb-2">Absolute Beginner</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  I've never written a line of code before. Starting from square one.
                </p>
              </div>
            </div>

            {/* Some HTML */}
            <div 
              onClick={() => setSelectedExp('html')}
              className={`p-8 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-between min-h-[220px] ${
                selectedExp === 'html' 
                  ? 'bg-surface border-2 border-primary shadow-xl ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-4">
                <Code size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-on-surface mb-2">Some HTML</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  I understand basic tags and web structure. Familiar with the basics.
                </p>
              </div>
            </div>

            {/* Know JavaScript */}
            <div 
              onClick={() => setSelectedExp('js')}
              className={`p-8 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-between min-h-[220px] ${
                selectedExp === 'js' 
                  ? 'bg-surface border-2 border-primary shadow-xl ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-4">
                <Terminal size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-on-surface mb-2">Know JavaScript</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  I can build functions and manipulate the DOM. Ready for advanced concepts.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={handleNext}
              className="tactile-button-primary px-10 py-4 bg-primary text-white font-bold text-base rounded-xl inline-flex items-center gap-2 shadow-lg"
            >
              Continue to Dashboard <ArrowRight size={18} />
            </button>
          </div>
        </main>
      )}

      {/* SCREEN 4: DAILY TIME ("How much time can you commit daily?") */}
      {currentStep === 4 && (
        <main className="w-full max-w-3xl mx-auto my-auto space-y-8 py-6 text-center animate-fadeIn">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed text-primary font-mono text-xs font-bold rounded-full uppercase tracking-wider mb-2">
              ⚡ STEP 4 OF 4
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display-lg text-on-surface">
              How much time can you commit daily?
            </h1>
            <p className="text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
              Consistent progress is better than perfection. Let's find a pace that fits your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {/* 15 min */}
            <div 
              onClick={() => setSelectedTime('15')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center min-h-[160px] ${
                selectedTime === '15' 
                  ? 'bg-surface border-2 border-primary shadow-xl ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Zap size={22} />
              </div>
              <h3 className="font-bold text-xl text-on-surface">15 min</h3>
              <span className="text-xs text-on-surface-variant mt-1">Focused Sprint</span>
            </div>

            {/* 30 min */}
            <div 
              onClick={() => setSelectedTime('30')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center min-h-[160px] ${
                selectedTime === '30' 
                  ? 'bg-surface border-2 border-primary shadow-xl ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Clock size={22} />
              </div>
              <h3 className="font-bold text-xl text-on-surface">30 min</h3>
              <span className="text-xs text-on-surface-variant mt-1">The Sweet Spot</span>
            </div>

            {/* 45 min */}
            <div 
              onClick={() => setSelectedTime('45')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center min-h-[160px] ${
                selectedTime === '45' 
                  ? 'bg-surface border-2 border-primary shadow-xl ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Timer size={22} />
              </div>
              <h3 className="font-bold text-xl text-on-surface">45 min</h3>
              <span className="text-xs text-on-surface-variant mt-1">Deep Work</span>
            </div>

            {/* 60 min */}
            <div 
              onClick={() => setSelectedTime('60')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center min-h-[160px] ${
                selectedTime === '60' 
                  ? 'bg-surface border-2 border-primary shadow-xl ring-2 ring-primary/20' 
                  : 'bg-surface border-outline-variant hover:border-primary/50'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Dumbbell size={22} />
              </div>
              <h3 className="font-bold text-xl text-on-surface">60 min</h3>
              <span className="text-xs text-on-surface-variant mt-1">Skill Master</span>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={handleNext}
              className="tactile-button-primary px-12 py-4 bg-primary text-white font-bold text-lg rounded-full inline-flex items-center justify-center gap-2 shadow-xl hover:bg-primary-fixed-dim transition-all w-full max-w-sm"
            >
              Finish
            </button>
            <p className="text-xs text-on-surface-variant">
              You can change your goal anytime in Settings.
            </p>
          </div>
        </main>
      )}

      {/* Footer step indicators */}
      <footer className="w-full max-w-6xl mx-auto text-center py-2 text-xs text-on-surface-variant border-t border-outline-variant/30 flex justify-between items-center">
        <div className="flex gap-1.5 mx-auto">
          {[1, 2, 3, 4].map(step => (
            <span 
              key={step} 
              className={`w-2.5 h-2.5 rounded-full transition-all ${step === currentStep ? 'bg-primary w-6' : 'bg-outline-variant'}`}
            />
          ))}
        </div>
        <span className="hidden sm:block text-[10px] font-mono text-on-surface-variant/70 uppercase">POWERED BY DEVQUIK AI ENGINE</span>
      </footer>
    </div>
  );
}
