import re

with open('src/components/LanguageSelector.jsx', 'r') as f:
    content = f.read()

# 1. Add CAREER_ROADMAPS import
content = content.replace(
    "import { SIX_LANGUAGES } from '../data/sixLanguagesData';",
    "import { SIX_LANGUAGES } from '../data/sixLanguagesData';\nimport { CAREER_ROADMAPS } from '../data/careerRoadmaps';"
)

# 2. Add onResumeTrack to props
content = content.replace(
    "  onUnenrollTrack\n}) {",
    "  onUnenrollTrack,\n  onResumeTrack\n}) {"
)

# 3. Add getCareerProgress function and resolve track logic
logic = """
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

  const getCareerProgress = (career) => {
    let totalNodes = 0;
    let completedNodes = 0;
    career.phases.forEach(phase => {
      if (phase.nodes) {
        totalNodes += phase.nodes.length;
        completedNodes += phase.nodes.filter(nodeId => !!userCompletedDays[nodeId]).length;
      }
    });
    const percentage = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;
    return { completedCount: completedNodes, total: totalNodes, percentage };
  };

  // Resolve active tracks (both languages and careers)
  const activeTracks = enrolledTrackIds.map(id => {
    const lang = SIX_LANGUAGES.find(l => l.id === id);
    if (lang) {
      return { type: 'language', id: lang.id, data: lang, progress: getLanguageProgress(lang) };
    }
    const career = CAREER_ROADMAPS.find(c => c.slug === id);
    if (career) {
      return { type: 'career', id: career.slug, data: career, progress: getCareerProgress(career) };
    }
    return null;
  }).filter(Boolean);

"""

content = re.sub(
    r"  const enrolledTrackIds = userState\.enrolledTracks.*const enrolledLanguages = SIX_LANGUAGES\.filter\(lang => enrolledTrackIds\.includes\(lang\.id\)\);",
    logic.strip(),
    content,
    flags=re.DOTALL
)

# 4. Replace enrolledLanguages rendering in Section 1
old_section_1 = """        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 mb-6">
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
        ) : ("""

new_section_1 = """        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div>
            <div className="flex items-center space-x-2 text-indigo-600 font-extrabold text-lg">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <h2>Intaken Active Courses ({activeTracks.length}/2 Max Concurrent)</h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Tracks you are actively taking right now. Click to view progress and completed classes.
            </p>
          </div>

          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mt-2 sm:mt-0">
            {activeTracks.length >= 2 ? '🔒 Max 2 Concurrent Tracks Reached' : `${2 - activeTracks.length} Slot Available`}
          </span>
        </div>

        {activeTracks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTracks.map(track => {
              const { type, id, data, progress } = track;
              const title = type === 'language' ? `${data.name} Path` : data.roleTitle;
              const subTitle = type === 'language' ? `${data.totalDays}-Day Learning Track` : `${data.estimatedMonths} Months Masterclass`;
              const iconOrImage = type === 'language' 
                ? <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-xs">{data.icon}</div>
                : <img src={data.coverImage} className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-xs" alt="track icon" />;
              const gradient = type === 'language' ? data.gradient : 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)';
              const nameText = type === 'language' ? data.name : data.roleTitle;

              return (
                <div 
                  key={id}
                  className="bg-slate-50 border border-slate-200 hover:border-indigo-300 rounded-2xl p-5 shadow-xs transition-all relative group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {iconOrImage}
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900 line-clamp-1">{title}</h3>
                        <span className="text-xs font-semibold text-slate-500 block">{subTitle}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onUnenrollTrack && onUnenrollTrack(id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0"
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
                        style={{ width: `${progress.percentage}%`, background: gradient }}
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
                    onClick={() => {
                      if (onResumeTrack) onResumeTrack(id, type === 'career');
                      else if (type === 'language') onSelectLanguage(id);
                    }}
                    className="w-full py-2.5 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center space-x-2"
                    style={{ background: gradient }}
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span className="truncate">Resume {nameText}</span>
                  </button>
                </div>
              );
            })}
          </div>
        ) : ("""

content = content.replace(old_section_1, new_section_1)

# 5. Add Career Roadmaps Catalog
old_catalog = """        <div className="languages-grid">
          {SIX_LANGUAGES.map((lang) => {"""

new_catalog = """        <div className="mb-6 mt-12 border-t border-slate-200 pt-8">
          <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
            <Layers className="w-5 h-5 text-indigo-500" />
            <span>Career Masterclasses</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_ROADMAPS.map(roadmap => {
              const isEnrolled = enrolledTrackIds.includes(roadmap.slug);
              const isMaxEnrolled = enrolledTrackIds.length >= 2 && !isEnrolled;
              return (
                <div key={roadmap.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
                  <div className="h-40 relative">
                    <img src={roadmap.coverImage} className="w-full h-full object-cover grayscale-[0.2]" alt={roadmap.roleTitle} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-black text-white">{roadmap.roleTitle}</h3>
                        <span className="text-xs text-slate-300 font-medium">{roadmap.estimatedMonths} Months</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <p className="text-sm text-slate-600 mb-6 flex-grow">{roadmap.description}</p>
                    
                    {isEnrolled ? (
                      <button
                        className="w-full py-3 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2"
                        onClick={() => onResumeTrack && onResumeTrack(roadmap.slug, true)}
                        style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)' }}
                      >
                        <span>Resume Path</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        disabled={isMaxEnrolled || !roadmap.isActive}
                        className="w-full py-3 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                        onClick={() => {
                          if (onEnrollTrack && !isMaxEnrolled && roadmap.isActive) {
                            onEnrollTrack(roadmap.slug, 'career');
                          }
                        }}
                        style={{ 
                          background: (isMaxEnrolled || !roadmap.isActive) ? '#cbd5e1' : 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                          cursor: (isMaxEnrolled || !roadmap.isActive) ? 'not-allowed' : 'pointer'
                        }}
                      >
                        <span>{isMaxEnrolled ? 'Max 2 Courses Active' : (!roadmap.isActive ? 'Coming Soon' : 'Enroll in Masterclass')}</span>
                        {!isMaxEnrolled && roadmap.isActive && <GraduationCap className="w-4 h-4 ml-1.5" />}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-6 mt-12 border-t border-slate-200 pt-8">
          <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-indigo-500" />
            <span>Programming Languages</span>
          </h3>
        </div>

        <div className="languages-grid">
          {SIX_LANGUAGES.map((lang) => {"""

content = content.replace(old_catalog, new_catalog)

# 6. Replace isMaxEnrolled check inside SIX_LANGUAGES map
content = content.replace(
    "const isMaxEnrolled = enrolledTrackIds.length >= 2 && !isEnrolled;",
    "const isMaxEnrolled = activeTracks.length >= 2 && !isEnrolled;"
)

with open('src/components/LanguageSelector.jsx', 'w') as f:
    f.write(content)

