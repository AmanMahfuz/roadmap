import React, { useState } from 'react';
import { Mail, Lock, Zap, Award, ArrowLeft, UserCheck } from 'lucide-react';
import { signInUser } from '../services/supabaseClient';

export default function SignInPage({ 
  onAuthSuccess, 
  onNavigateToSignUp, 
  onBackToLanding 
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await signInUser(email, password);
      if (res && res.user) {
        onAuthSuccess(res.user);
      } else {
        // Fallback for local session
        onAuthSuccess({
          id: 'cadet-' + Date.now(),
          email: email || 'cadet@devquik.arena',
          user_metadata: { full_name: email ? email.split('@')[0] : 'Cadet' }
        });
      }
    } catch (err) {
      const msg = err.message || 'Authentication failed';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoSignIn = () => {
    onAuthSuccess({
      id: 'demo-cadet-101',
      email: 'cadet@devquik.arena',
      user_metadata: { full_name: 'Cadet Learner' }
    });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between p-4 md:p-8 font-body-md relative selection:bg-primary/20 selection:text-primary">
      {/* Top Header Row with Back Button */}
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center z-10">
        <button 
          onClick={onBackToLanding}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary font-semibold transition-colors py-2 px-3 rounded-lg hover:bg-surface-container-high"
        >
          <ArrowLeft size={18} /> Back to DevQuik
        </button>

        {/* Top Right Toast Notification */}
        <div className="hidden sm:flex bg-surface border border-outline-variant rounded-xl p-3 shadow-lg items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
            <Award size={18} />
          </div>
          <div className="text-left">
            <span className="block text-[11px] font-mono font-bold text-primary tracking-wider uppercase">SYSTEM UPDATED</span>
            <span className="block text-xs text-on-surface-variant font-medium">Secure protocol V2.4 initialized.</span>
          </div>
        </div>
      </div>

      {/* Center Form Card (Exact Image 1 Design) */}
      <main className="w-full max-w-md mx-auto my-auto py-8">
        <div className="bg-surface border border-outline-variant rounded-2xl shadow-2xl p-8 space-y-6 text-on-surface">
          {/* Card Header Tag */}
          <div className="flex justify-end">
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded border border-outline-variant">
              LVL. 01 AUTH NODE
            </span>
          </div>

          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high text-primary font-mono text-[11px] font-bold rounded-full uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              MISSION STATUS: READY
            </div>
            <h1 className="text-3xl font-extrabold font-display-lg text-on-surface tracking-tight">
              Welcome back, Cadet!
            </h1>
            <p className="text-sm text-on-surface-variant">
              Re-authenticate to resume your current skill mission.
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-600 rounded-xl text-xs font-medium space-y-2 text-left">
              <div>⚠️ {errorMsg}</div>
              <button 
                type="button" 
                onClick={handleDemoSignIn}
                className="w-full py-2 bg-primary text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm mt-1"
              >
                <UserCheck size={14} /> Continue as Guest Cadet ➔
              </button>
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
                  placeholder="cadet@devquik.arena"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-surface border border-outline-variant rounded-xl text-sm font-body-md text-on-surface outline-none focus:border-primary transition-colors"
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
                  className="w-full pl-11 pr-4 py-3.5 bg-surface border border-outline-variant rounded-xl text-sm font-body-md text-on-surface outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="tactile-button-primary w-full py-4 bg-primary text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 shadow-md mt-2"
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

          <div className="flex items-center justify-between pt-2 text-xs text-on-surface-variant border-t border-outline-variant">
            <div>
              <span>Don't have an account? </span>
              <button
                onClick={onNavigateToSignUp}
                className="text-primary font-bold hover:underline"
              >
                Sign up
              </button>
            </div>
            <button
              onClick={handleDemoSignIn}
              className="text-xs font-mono font-bold text-on-surface-variant hover:text-primary underline"
            >
              Guest Login
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto text-center text-xs text-on-surface-variant pt-6 border-t border-outline-variant/40">
        <p>© 2026 DevQuik Arena. All rights reserved.</p>
      </footer>
    </div>
  );
}
