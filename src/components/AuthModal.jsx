import React, { useState } from 'react';
import { X, Mail, Lock, User, Zap, ShieldCheck, ChevronDown, CheckCircle, Award } from 'lucide-react';
import { signInUser, signUpUser, signOutUser } from '../services/supabaseClient';

export default function AuthModal({ 
  currentUser, 
  onClose, 
  onAuthSuccess, 
  onSignOutSuccess,
  initialSignUpMode = false
}) {
  const [isSignUp, setIsSignUp] = useState(initialSignUpMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [startingRoadmap, setStartingRoadmap] = useState('html');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      if (isSignUp) {
        const res = await signUpUser(email, password, fullName || 'Cadet');
        alert('Enlistment successful! Progress is synced to Supabase.');
        if (res.user) onAuthSuccess(res.user);
      } else {
        const res = await signInUser(email, password);
        if (res.user) onAuthSuccess(res.user);
      }
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      onSignOutSuccess();
      onClose();
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto font-body-md">
      {/* Toast Notification (Image 1 top right design) */}
      <div className="hidden md:flex absolute top-6 right-6 bg-surface border border-outline-variant rounded-xl p-3 shadow-lg items-center gap-3 z-50">
        <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
          <Award size={18} />
        </div>
        <div className="text-left">
          <span className="block text-[11px] font-bold text-primary tracking-wider uppercase">SYSTEM UPDATED</span>
          <span className="block text-xs text-on-surface-variant font-medium">Secure protocol V2.4 initialized.</span>
        </div>
      </div>

      <div className="relative w-full max-w-md bg-surface border border-outline-variant rounded-2xl shadow-2xl overflow-hidden text-on-surface my-auto">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-surface-container-high transition-colors z-20"
        >
          <X size={20} />
        </button>

        {currentUser ? (
          /* AUTHENTICATED USER STATE */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary-fixed flex items-center justify-center border-4 border-surface shadow-md">
              <User size={36} className="text-primary" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 font-mono text-xs font-bold rounded-full mb-2">
                ✔ SUPABASE AUTHENTICATED
              </span>
              <h2 className="text-2xl font-bold font-display-lg text-on-surface">
                {currentUser.user_metadata?.full_name || 'Cadet'}
              </h2>
              <p className="text-sm text-on-surface-variant">{currentUser.email}</p>
            </div>

            <button 
              onClick={handleSignOut}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-md"
            >
              Sign Out of Account
            </button>
          </div>
        ) : !isSignUp ? (
          /* IMAGE 1: SIGN IN VIEW (Welcome Back Cadet) */
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
              <div></div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded border border-outline-variant">
                LVL. 01 AUTH NODE
              </span>
            </div>

            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high text-primary font-mono text-[11px] font-bold rounded-full uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                MISSION STATUS: READY
              </div>
              <h2 className="text-3xl font-extrabold font-display-lg text-on-surface tracking-tight">
                Welcome back, Cadet!
              </h2>
              <p className="text-sm text-on-surface-variant">
                Re-authenticate to resume your current skill mission.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 rounded-xl text-xs font-medium">
                ⚠️ {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <div className="flex justify-between text-xs font-mono font-semibold text-on-surface mb-1">
                  <span>EMAIL ADDRESS</span>
                  <span className="text-on-surface-variant text-[10px]">REQ_AUTH_01</span>
                </div>
                <div className="relative">
                  <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input
                    type="email"
                    required
                    placeholder="cadet@skillforge.arena"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm font-body-md text-on-surface outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-semibold text-on-surface mb-1">
                  <span>SECURITY CIPHER</span>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert('Reset password link sent to email.'); }} className="text-xs text-primary font-bold hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm font-body-md text-on-surface outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="tactile-button-primary w-full py-4 bg-primary text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <Zap size={18} /> Start Session
                  </>
                )}
              </button>
            </form>

            <div className="text-center pt-2 text-sm text-on-surface-variant border-t border-outline-variant">
              <span>Don't have an account? </span>
              <button
                onClick={() => setIsSignUp(true)}
                className="text-primary font-bold hover:underline"
              >
                Sign up
              </button>
            </div>
          </div>
        ) : (
          /* IMAGE 2: SIGN UP VIEW (Join the Forge) */
          <div className="p-8 space-y-5 text-left">
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-extrabold font-display-lg text-on-surface tracking-tight">
                Join the Forge
              </h2>
              <p className="text-sm text-on-surface-variant">
                Level up your career with gamified technical missions.
              </p>
            </div>

            {/* Avatar Preview Card */}
            <div className="p-3 bg-surface-container-low border border-outline-variant rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold">
                <User size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-primary text-white font-mono text-[10px] font-bold rounded">LVL. 01</span>
                  <span className="text-xs font-bold text-on-surface">Newbie</span>
                </div>
                <span className="text-[11px] text-on-surface-variant font-mono">0 / 100 XP to Level 02</span>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 rounded-xl text-xs font-medium">
                ⚠️ {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-mono font-semibold text-on-surface mb-1 uppercase">FULL NAME</label>
                <input
                  type="text"
                  required
                  placeholder="John Wick"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm text-on-surface outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-on-surface mb-1 uppercase">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="recruit@skillforge.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm text-on-surface outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-on-surface mb-1 uppercase">PASS-KEY</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm text-on-surface outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-on-surface mb-1 uppercase">STARTING ROADMAP</label>
                <div className="relative">
                  <select
                    value={startingRoadmap}
                    onChange={(e) => setStartingRoadmap(e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm text-on-surface outline-none focus:border-primary appearance-none transition-colors pr-10"
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

            <div className="text-center pt-2 text-sm text-on-surface-variant border-t border-outline-variant">
              <span>Already have an account? </span>
              <button
                onClick={() => setIsSignUp(false)}
                className="text-primary font-bold hover:underline"
              >
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
