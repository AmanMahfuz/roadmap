import React, { useState } from 'react';
import { User, ChevronDown, Terminal, ArrowLeft } from 'lucide-react';
import { signUpUser } from '../services/supabaseClient';

export default function SignUpPage({ 
  onAuthSuccess, 
  onNavigateToSignIn, 
  onBackToLanding 
}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [startingRoadmap, setStartingRoadmap] = useState('html');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await signUpUser(email, password, fullName || 'Cadet');
      if (res.user) {
        onAuthSuccess(res.user);
      } else {
        alert('Enlistment successful! You can now proceed to onboarding.');
        onAuthSuccess({ id: 'temp-user-' + Date.now(), email, user_metadata: { full_name: fullName } });
      }
    } catch (err) {
      if (err.message && err.message.toLowerCase().includes('rate limit')) {
        setErrorMsg('Supabase email rate limit reached (Max 3-4 signup emails/hour on free tier). Proceeding with local session...');
        setTimeout(() => {
          onAuthSuccess({ id: 'cadet-' + Date.now(), email, user_metadata: { full_name: fullName } });
        }, 1500);
      } else {
        setErrorMsg(err.message || 'Registration failed');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between font-body-md selection:bg-primary/20 selection:text-primary">
      {/* Top Navbar Header (Exact Image 2 Navbar) */}
      <nav className="w-full bg-surface border-b border-outline-variant px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBackToLanding}
              className="text-on-surface-variant hover:text-primary p-1.5 rounded-lg hover:bg-surface-container transition-colors"
              title="Back to Landing Page"
            >
              <ArrowLeft size={20} />
            </button>
            <a onClick={onBackToLanding} className="font-headline-md text-2xl font-extrabold text-primary cursor-pointer flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              DevQuik
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); onBackToLanding(); }} className="hidden sm:block text-xs font-mono font-bold text-on-surface-variant hover:text-primary uppercase tracking-wider">
              CURRICULUM
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); onBackToLanding(); }} className="hidden sm:block text-xs font-mono font-bold text-on-surface-variant hover:text-primary uppercase tracking-wider">
              LEADERBOARD
            </a>
            <button 
              onClick={handleSubmit} 
              className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary-fixed-dim transition-all shadow-sm"
            >
              Enlist Now
            </button>
          </div>
        </div>
      </nav>

      {/* Main Center Card Area */}
      <main className="w-full max-w-md mx-auto py-10 px-4 my-auto">
        <div className="bg-surface border border-outline-variant rounded-2xl shadow-2xl p-8 space-y-6 text-left text-on-surface">
          <div className="text-center space-y-1.5">
            <h1 className="text-3xl font-extrabold font-display-lg text-on-surface tracking-tight">
              Join the Forge
            </h1>
            <p className="text-sm text-on-surface-variant">
              Level up your career with gamified technical missions.
            </p>
          </div>

          {/* Avatar Preview Card */}
          <div className="p-3 bg-surface-container-low border border-outline-variant rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold shrink-0 shadow-sm">
              <User size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-primary text-white font-mono text-[10px] font-bold rounded">LVL. 01</span>
                <span className="text-xs font-bold text-on-surface">Newbie</span>
              </div>
              <span className="text-[11px] text-on-surface-variant font-mono">0 / 100 XP to Level 02</span>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3.5 bg-red-500/10 border border-red-500/30 text-red-600 rounded-xl text-xs font-medium">
              ⚠️ {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-on-surface mb-1.5 uppercase tracking-wider">FULL NAME</label>
              <input
                type="text"
                required
                placeholder="John Wick"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm font-body-md text-on-surface outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-on-surface mb-1.5 uppercase tracking-wider">EMAIL ADDRESS</label>
              <input
                type="email"
                required
                placeholder="recruit@devquik.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm font-body-md text-on-surface outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-on-surface mb-1.5 uppercase tracking-wider">PASS-KEY</label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm font-body-md text-on-surface outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-on-surface mb-1.5 uppercase tracking-wider">STARTING ROADMAP</label>
              <div className="relative">
                <select
                  value={startingRoadmap}
                  onChange={(e) => setStartingRoadmap(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm font-body-md text-on-surface outline-none focus:border-primary appearance-none transition-colors pr-10"
                >
                  <option value="html">The Architect (HTML)</option>
                  <option value="css">CSS Mastery</option>
                  <option value="js">JavaScript Core</option>
                  <option value="react">React Ecosystem</option>
                </select>
                <ChevronDown size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="tactile-button-primary w-full py-4 bg-primary text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 shadow-md mt-2"
            >
              {loading ? 'Enlisting...' : 'Enlist Now'}
            </button>
          </form>

          <div className="text-center pt-3 text-sm text-on-surface-variant border-t border-outline-variant">
            <span>Already have an account? </span>
            <button
              onClick={onNavigateToSignIn}
              className="text-primary font-bold hover:underline"
            >
              Sign in
            </button>
          </div>
        </div>
      </main>

      {/* Footer (Exact Image 2 Footer) */}
      <footer className="w-full bg-surface border-t border-outline-variant py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <div className="font-bold text-primary text-sm flex items-center gap-2">
            DevQuik Arena
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors font-medium">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Support</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">System Status</a>
          </div>
          <div>
            © 2026 DevQuik Arena. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
