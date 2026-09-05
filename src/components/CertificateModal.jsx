import React from 'react';
import { X, Award, Printer, ShieldCheck, Sparkles, CheckCircle2, Download } from 'lucide-react';

export default function CertificateModal({ 
  userName = 'AI Developer', 
  onClose 
}) {
  const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const certId = `DEVQUIK-PY-AI-${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 my-8 text-slate-100">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">
              🏆
            </div>
            <div>
              <h3 className="text-base font-black text-white">Official Verification Certificate</h3>
              <p className="text-xs text-slate-400">15-Day Python to AI Fast-Track Master Certification</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center space-x-2 transition-all cursor-pointer hover:scale-105"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Frame */}
        <div 
          id="printable-certificate"
          className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 border-4 border-double border-amber-500/50 shadow-2xl overflow-hidden font-sans print:border-amber-600 print:text-black print:bg-white"
        >
          {/* Subtle Background Seal Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none text-9xl font-black text-amber-300">
            DEVQUIK
          </div>

          {/* Top Certificate Header */}
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-6 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-yellow-500 flex items-center justify-center text-2xl shadow-md">
                🐍
              </div>
              <div>
                <span className="font-black text-xl tracking-tight text-white flex items-center space-x-1.5">
                  <span>DevQuik</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-yellow-400 text-slate-950 rounded">Python + AI</span>
                </span>
                <span className="text-[11px] text-slate-400 block font-semibold">Engineering Fast-Track</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-black">
              <ShieldCheck className="w-4 h-4" />
              <span>VERIFIED ACCREDITATION</span>
            </div>
          </div>

          {/* Certificate Main Body */}
          <div className="text-center py-8 sm:py-12 space-y-5 relative z-10">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-400">
              Certificate of Completion
            </span>

            <p className="text-xs sm:text-sm text-slate-300">
              This credential certifies that
            </p>

            <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 tracking-tight py-1">
              {userName}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              has successfully completed all 15 milestone gates, practical sandbox coding challenges, and conceptual assessments in the
            </p>

            <div className="inline-block px-6 py-2.5 bg-indigo-950/80 border border-indigo-500/40 rounded-2xl">
              <h3 className="text-base sm:text-xl font-black text-indigo-200">
                15-Day Python to Applied AI Fast-Track
              </h3>
            </div>

            {/* Core Competencies Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto pt-4 text-[11px] text-slate-300">
              <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Python 3.12 Core</span>
              </div>
              <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>OOP Architecture</span>
              </div>
              <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Pandas Analysis</span>
              </div>
              <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>LLM Context & APIs</span>
              </div>
            </div>
          </div>

          {/* Certificate Footer with Signatures & Hash */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-between pt-6 border-t border-amber-500/30 gap-4 text-xs relative z-10">
            <div className="text-left">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Issue Date</span>
              <span className="text-slate-200 font-bold">{issueDate}</span>
            </div>

            {/* Gold Seal */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-400 p-0.5 shadow-lg shadow-amber-500/30 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                  <span className="text-[7px] font-black uppercase tracking-tighter">OFFICIAL</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Credential ID</span>
              <span className="text-amber-400 font-mono font-bold">{certId}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
