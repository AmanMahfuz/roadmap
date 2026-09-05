import React, { useState } from 'react';
import { User, Terminal, ArrowLeft, Sparkles, Zap } from 'lucide-react';
import { signUpUser } from '../services/supabaseClient';

export default function SignUpPage({ 
  onAuthSuccess, 
  onNavigateToSignIn, 
  onBackToLanding 
}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await signUpUser(email, password, fullName || 'Cadet');
      if (res && res.user) {
        onAuthSuccess(res.user);
      } else {
        onAuthSuccess({ 
          id: 'cadet-' + Date.now(), 
          email, 
          user_metadata: { full_name: fullName || 'Cadet' } 
        });
      }
    } catch (err) {
      if (err.message && err.message.toLowerCase().includes('rate limit')) {
        setErrorMsg('Supabase email rate limit reached (free tier). Proceeding with local session...');
        setTimeout(() => {
          onAuthSuccess({ id: 'cadet-' + Date.now(), email, user_metadata: { full_name: fullName || 'Cadet' } });
        }, 1500);
      } else {
        setErrorMsg(err.message || 'Registration failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDemoSignUp = () => {
    onAuthSuccess({
      id: 'demo-cadet-' + Date.now(),
      email: email || 'cadet@devquik.arena',
      user_metadata: { full_name: fullName || 'Cadet Learner' }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 flex flex-col justify-between font-sans selection:bg-blue-100">
      
      {/* Top Navbar Header */}
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
              onClick={onNavigateToSignIn}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors cursor-pointer"
            >
              Log In
            </button>
          </div>
        </div>
      </nav>

      {/* Main Center Form Area */}
      <main className="w-full max-w-md mx-auto py-8 px-4 my-auto">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8 space-y-6 text-left text-slate-900">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-700 text-[11px] font-black rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span>15-Day Python to AI Fast-Track</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Create Your Account
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Save your daily learning streak and track progress across all 15 days.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs font-medium space-y-2">
              <div>⚠️ {errorMsg}</div>
              <button
                type="button"
                onClick={handleDemoSignUp}
                className="w-full py-2 bg-slate-900 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Continue with Instant Session</span>
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Aman Mahfuz"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="aman@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 mt-3 cursor-pointer transition-all hover:scale-102"
            >
              {loading ? 'Creating Account...' : 'Start 15-Day Fast-Track Free'}
            </button>
          </form>

          <div className="text-center pt-3 text-xs text-slate-500 border-t border-slate-100">
            <span>Already have an account? </span>
            <button
              onClick={onNavigateToSignIn}
              className="text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Sign in
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
