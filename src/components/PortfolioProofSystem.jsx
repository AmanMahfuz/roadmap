import React, { useState } from 'react';
import { 
  FolderGit2, 
  Globe, 
  FileText, 
  Upload, 
  CheckCircle2, 
  Award, 
  ExternalLink, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PortfolioProofSystem() {
  const [proofs, setProofs] = useState([
    {
      id: 1,
      projectTitle: 'Personal Portfolio Website (HTML/CSS Capstone)',
      githubUrl: 'https://github.com/username/portfolio-capstone',
      liveUrl: 'https://portfolio-capstone.vercel.app',
      reflection: 'Built using semantic HTML5 tags and flexbox layouts. Learned how to create accessible forms and responsive media queries.',
      submittedAt: '2026-07-25',
      verified: true
    }
  ]);

  const [projectTitle, setProjectTitle] = useState('Interactive To-Do List App');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [reflection, setReflection] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitProof = (e) => {
    e.preventDefault();
    if (!githubUrl.trim() || !liveUrl.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });

      setProofs(prev => [
        {
          id: Date.now(),
          projectTitle,
          githubUrl: githubUrl.trim(),
          liveUrl: liveUrl.trim(),
          reflection: reflection.trim() || 'Demonstrated DOM manipulation, event handlers, and LocalStorage data persistence.',
          submittedAt: new Date().toISOString().split('T')[0],
          verified: true
        },
        ...prev
      ]);

      setGithubUrl('');
      setLiveUrl('');
      setReflection('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans">
      
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase mb-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Job-Ready Proof Layer</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Portfolio Artifacts & Skill Proof Verification
        </h1>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Instead of just content completion, submit real GitHub repos, deployed URLs, and README reflections to build your proof-of-skill developer profile.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Submit Proof Form */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
          <div className="flex items-center space-x-2 text-indigo-600 font-extrabold text-base mb-4">
            <Upload className="w-5 h-5" />
            <h3>Submit Project Proof Artifact</h3>
          </div>

          <form onSubmit={handleSubmitProof} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Project Name</label>
              <select
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
              >
                <option>Interactive To-Do List App</option>
                <option>Weather API App</option>
                <option>Expense Tracker App</option>
                <option>Personal Portfolio Website</option>
                <option>Netflix Landing Page Clone</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">GitHub Repository Link</label>
              <div className="relative">
                <FolderGit2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="url"
                  placeholder="https://github.com/user/repo"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Live Deployed URL (Vercel / Netlify)</label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="url"
                  placeholder="https://project.vercel.app"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Short Reflection / What You Learned</label>
              <textarea
                placeholder="Brief summary of challenges solved and architecture choices..."
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none"
                rows={3}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Award className="w-4 h-4 text-yellow-300" />
              <span>Verify & Claim 300 Proof XP</span>
            </button>
          </form>
        </div>

        {/* Verified Proof Artifacts Cards List */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 flex items-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" />
            Verified Portfolio Proof Artifacts ({proofs.length})
          </h3>

          {proofs.map(proof => (
            <div key={proof.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs relative">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-[10px] rounded-full inline-block mb-1">
                    Verified Proof Artifact
                  </span>
                  <h4 className="font-extrabold text-lg text-slate-900">{proof.projectTitle}</h4>
                </div>

                <span className="text-xs text-slate-400 font-medium">Submitted {proof.submittedAt}</span>
              </div>

              <p className="text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
                "{proof.reflection}"
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={proof.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-xs"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href={proof.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-xs"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Deployed Demo</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
