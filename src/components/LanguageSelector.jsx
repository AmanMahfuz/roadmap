import React from 'react';
import { SIX_LANGUAGES } from '../data/sixLanguagesData';
import { 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Flame, 
  GraduationCap, 
  Play, 
  Layers, 
  X,
  AlertCircle
} from 'lucide-react';

export default function LanguageSelector({ 
  activeLanguageId, 
  onSelectLanguage, 
  userState = {},
  userCompletedDays = {},
  onEnrollTrack,
  onUnenrollTrack
}) {

  const enrolledTrackIds = userState.enrolledTracks || ['html_css', 'javascript'];

  const getLanguageProgress = (lang) => {
    let completedCount = 0;
    lang.days.forEach(day => {
      const key = `${lang.id}_day_${day.day}`;
      if (userCompletedDays[key]) {
        completedCount++;
      }
    });
    const percentage = Math.round((completedCount / lang.totalDays) * 100);
    return { completedCount, total: lang.totalDays, percentage };
  };

  const enrolledLanguages = SIX_LANGUAGES.filter(lang => enrolledTrackIds.includes(lang.id));

  return (
    <div className="language-selector-container max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans">
      
      {/* Header Title */}
      <div className="language-selector-header text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-amber-100 border border-amber-300 rounded-full text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Frontend & Software Engineer Roadmaps</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Programming Languages & Web Tracks Hub
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          Enroll in up to <strong>2 concurrent learning tracks</strong> at the same time to build real-world coding skills every day.
        </p>
      </div>

      {/* SECTION 1: INTAKEN / ACTIVE ENROLLED COURSES (MAX 2) */}
      <div className="bg-white border-2 border-indigo-200 rounded-3xl p-6 sm:p-8 shadow-md mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div>
            <div className="flex items-center space-x-2 text-indigo-600 font-extrabold text-lg">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <h2>Intaken Active Courses ({enrolledLanguages.length}/2 Max Concurrent)</h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Tracks you are actively taking right now. Click to view progress and completed classes.
            </p>
          </div>

          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mt-2 sm:mt-0">
            {enrolledLanguages.length === 2 ? '🔒 Max 2 Concurrent Tracks Reached' : `${2 - enrolledLanguages.length} Slot Available`}
          </span>
        </div>

        {enrolledLanguages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledLanguages.map(lang => {
              const progress = getLanguageProgress(lang);
              return (
                <div 
                  key={lang.id}
                  className="bg-slate-50 border border-slate-200 hover:border-indigo-300 rounded-2xl p-5 shadow-xs transition-all relative group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-xs">
                        {lang.icon}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900">{lang.name} Path</h3>
                        <span className="text-xs font-semibold text-slate-500 block">{lang.totalDays}-Day Learning Track</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onUnenrollTrack && onUnenrollTrack(lang.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Drop/Switch Course"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Completed Classes Info & Progress Bar */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3.5 mb-4">
                    <div className="flex items-center justify-between text-xs font-bold mb-2">
                      <span className="text-slate-700">
                        Completed Classes: <strong className="text-indigo-600">{progress.completedCount}</strong> of {progress.total}
                      </span>
                      <span className="text-indigo-600 font-mono">{progress.percentage}%</span>
                    </div>

                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress.percentage}%`, background: lang.gradient }}
                      />
                    </div>

                    <span className="text-[11px] text-slate-500 font-medium block">
                      {progress.total - progress.completedCount === 0 
                        ? '🎉 Course Completed! Certificate Ready.' 
                        : `${progress.total - progress.completedCount} classes remaining to complete.`}
                    </span>
                  </div>

                  {/* Resume Track Action */}
                  <button
                    onClick={() => onSelectLanguage(lang.id)}
                    className="w-full py-2.5 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center space-x-2"
                    style={{ background: lang.gradient }}
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Resume {lang.name} Path</span>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <GraduationCap className="w-8 h-8 mx-auto text-slate-400 mb-2" />
            <p className="text-sm font-semibold">No active courses enrolled yet.</p>
            <p className="text-xs text-slate-400">Select up to 2 tracks from the catalog below to start taking courses!</p>
          </div>
        )}
      </div>

      {/* SECTION 2: ALL AVAILABLE COURSES CATALOG */}
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-extrabold text-slate-900">All Available Track Catalog</h2>
          <p className="text-xs text-slate-500">Explore and enroll in courses to start your daily learning path.</p>
        </div>

        <div className="languages-grid">
          {SIX_LANGUAGES.map((lang) => {
            const progress = getLanguageProgress(lang);
            const isEnrolled = enrolledTrackIds.includes(lang.id);
            const isMaxEnrolled = enrolledTrackIds.length >= 2 && !isEnrolled;

            return (
              <div
                key={lang.id}
                className={`language-card ${isEnrolled ? 'selected' : ''}`}
                onClick={() => {
                  if (isEnrolled) {
                    onSelectLanguage(lang.id);
                  } else if (onEnrollTrack && !isMaxEnrolled) {
                    onEnrollTrack(lang.id);
                  }
                }}
                style={{
                  '--lang-color': lang.color,
                  '--lang-bg': lang.bgColor,
                  '--lang-gradient': lang.gradient
                }}
              >
                <div className="card-top">
                  <div className="lang-icon-wrapper" style={{ background: lang.bgColor }}>
                    <span className="lang-emoji">{lang.icon}</span>
                  </div>
                  <div className="badge-wrapper">
                    {isEnrolled ? (
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 border border-indigo-300 rounded-full font-bold text-[10px]">
                        Intaken Course
                      </span>
                    ) : (
                      <span className="lang-badge" style={{ borderColor: lang.color, color: lang.textColor }}>
                        {lang.badge}
                      </span>
                    )}
                    <span className="difficulty-tag">{lang.difficulty}</span>
                  </div>
                </div>

                <div className="card-body">
                  <h2 className="lang-name">{lang.name}</h2>
                  <p className="lang-tagline">{lang.tagline}</p>
                  <p className="lang-description">{lang.description}</p>
                </div>

                <div className="card-footer">
                  <div className="progress-info">
                    <div className="progress-text">
                      <span>Completed: {progress.completedCount}/{progress.total} Classes</span>
                      <span className="font-semibold">{progress.percentage}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: `${progress.percentage}%`,
                          background: lang.gradient
                        }}
                      />
                    </div>
                  </div>

                  {isEnrolled ? (
                    <button
                      className="start-roadmap-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectLanguage(lang.id);
                      }}
                      style={{ background: lang.gradient }}
                    >
                      <span>Resume Path</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </button>
                  ) : (
                    <button
                      disabled={isMaxEnrolled}
                      className="start-roadmap-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onEnrollTrack && !isMaxEnrolled) {
                          onEnrollTrack(lang.id);
                        }
                      }}
                      style={{ 
                        background: isMaxEnrolled ? '#cbd5e1' : lang.gradient,
                        cursor: isMaxEnrolled ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <span>{isMaxEnrolled ? 'Max 2 Courses Active' : 'Enroll & Take Course'}</span>
                      {!isMaxEnrolled && <GraduationCap className="w-4 h-4 ml-1.5" />}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
