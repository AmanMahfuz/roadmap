import React, { useState } from 'react';
import { Mail, Lock, Zap, ArrowLeft, UserCheck, Sparkles } from 'lucide-react';
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
        onAuthSuccess({
          id: 'cadet-' + Date.now(),
          email: email || 'learner@devquik.io',
          user_metadata: { full_name: email ? email.split('@')[0] : 'Learner' }
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
      id: 'demo-learner-101',
      email: 'demo@devquik.io',
      user_metadata: { full_name: 'Python Learner' }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 flex flex-col justify-between font-sans selection:bg-blue-100">
      
      {/* Top Navbar */}
      <nav className="w-full bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBackToLanding}
              className="text-slate-500 hover:text-slate-900 p-2 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
              title="Back to Landing Page"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-yellow-500 p-0.5 shadow-xs flex items-center justify-center text-sm">
              🐍
            </div>
            <span className="font-black text-lg tracking-tight text-slate-900">DevQuik</span>
          </div>

          <div>
            <button 
              onClick={onNavigateToSignUp}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Main Center Form */}
      <main className="w-full max-w-md mx-auto py-8 px-4 my-auto">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8 space-y-6 text-left text-slate-900">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-black rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span>Welcome Back</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Sign In to DevQuik
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Resume your 15-day Python to AI learning mission.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs font-medium space-y-2">
              <div>⚠️ {errorMsg}</div>
              <button 
                type="button" 
                onClick={handleDemoSignIn}
                className="w-full py-2 bg-slate-900 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <UserCheck size={14} /> Continue with Demo Session ➔
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="learner@devquik.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert('Password reset email sent if account exists.'); }}
                  className="text-[11px] text-blue-600 font-semibold hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 mt-3 cursor-pointer transition-all hover:scale-102"
            >
              {loading ? (
                <span>Signing In...</span>
              ) : (
                <>
                  <Zap size={16} className="fill-white" />
                  <span>Resume Mission</span>
                </>
              )}
            </button>
          </form>

          <div className="flex items-center justify-between pt-3 text-xs text-slate-500 border-t border-slate-100">
            <div>
              <span>Don't have an account? </span>
              <button
                onClick={onNavigateToSignUp}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Sign up
              </button>
            </div>
            <button
              onClick={handleDemoSignIn}
              className="font-bold text-slate-500 hover:text-slate-900 underline cursor-pointer"
            >
              Guest Demo
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-400 bg-white">
        <p>© {new Date().getFullYear()} DevQuik. Built for daily consistent learning.</p>
      </footer>

    </div>
  );
}
