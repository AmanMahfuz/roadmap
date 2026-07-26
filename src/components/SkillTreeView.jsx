import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Star, 
  Lock, 
  Sparkles, 
  AlertCircle,
  Trophy,
  ArrowRight,
  Zap,
  Globe,
  Code2
} from 'lucide-react';

export default function SkillTreeView({ userState = {} }) {
  const completedDays = userState.completedDays || {};
  const completedKeys = Object.keys(completedDays).filter(k => !!completedDays[k]);

  // Track completion counts
  const htmlCssDone = completedKeys.filter(k => k.startsWith('html_css_day_')).length;
  const jsDone = completedKeys.filter(k => k.startsWith('javascript_day_')).length;

  // Real Dynamic Mastery Mapping for HTML5 Nodes
  const htmlNodes = [
    {
      name: 'Document Structure & Headings',
      status: htmlCssDone >= 1 ? 'done' : 'progress',
      icon: htmlCssDone >= 1 ? '✅' : '🟡',
      competency: 'Page hierarchy, boilerplate, <head>, metadata, <h1>–<h6>'
    },
    {
      name: 'Hyperlinks, Images & Lists',
      status: htmlCssDone >= 1 ? 'done' : 'locked',
      icon: htmlCssDone >= 1 ? '✅' : '🔒',
      competency: '<a> attributes (target="_blank"), relative paths, <img>, <ul>, <ol>'
    },
    {
      name: 'Data Tables & Timetables',
      status: htmlCssDone >= 2 ? 'star' : htmlCssDone >= 1 ? 'progress' : 'locked',
      icon: htmlCssDone >= 2 ? '⭐' : htmlCssDone >= 1 ? '🟡' : '🔒',
      competency: 'Advanced layout grids, <table>, <thead>, <tbody>, colspan'
    },
    {
      name: 'Forms, Inputs & Validation',
      status: htmlCssDone >= 2 ? 'done' : 'locked',
      icon: htmlCssDone >= 2 ? '✅' : '🔒',
      competency: 'Form attributes, dynamic input types, native HTML5 validation'
    },
    {
      name: 'Semantic HTML5 Layouts',
      status: htmlCssDone >= 3 ? 'star' : htmlCssDone >= 2 ? 'progress' : 'locked',
      icon: htmlCssDone >= 3 ? '⭐' : htmlCssDone >= 2 ? '🟡' : '🔒',
      competency: 'Semantic structure (<header>, <nav>, <main>, <article>, <footer>)'
    },
    {
      name: 'Web Accessibility & ARIA',
      status: htmlCssDone >= 7 ? 'done' : htmlCssDone >= 4 ? 'progress' : 'locked',
      icon: htmlCssDone >= 7 ? '✅' : htmlCssDone >= 4 ? '🟡' : '🔒',
      competency: 'Accessible landmarks, aria-* roles, screen-reader focus'
    }
  ];

  // Real Dynamic Mastery Mapping for CSS3 Nodes
  const cssNodes = [
    {
      name: 'CSS Selectors & Colors',
      status: htmlCssDone >= 3 ? 'done' : 'locked',
      icon: htmlCssDone >= 3 ? '✅' : '🔒',
      competency: 'Hex, RGB/RGBA, class/ID specificity hierarchy, color systems'
    },
    {
      name: 'Box Model (Margin, Padding)',
      status: htmlCssDone >= 4 ? 'done' : htmlCssDone >= 3 ? 'progress' : 'locked',
      icon: htmlCssDone >= 4 ? '✅' : htmlCssDone >= 3 ? '🟡' : '🔒',
      competency: 'Content, padding, border, margin, box-sizing: border-box reset'
    },
    {
      name: 'Flexbox Layouts',
      status: htmlCssDone >= 5 ? 'done' : htmlCssDone >= 4 ? 'progress' : 'locked',
      icon: htmlCssDone >= 5 ? '✅' : htmlCssDone >= 4 ? '🟡' : '🔒',
      competency: 'One-dimensional layouts, alignment (justify-content, align-items)'
    },
    {
      name: '2D CSS Grid',
      status: htmlCssDone >= 5 ? 'star' : htmlCssDone >= 4 ? 'progress' : 'locked',
      icon: htmlCssDone >= 5 ? '⭐' : htmlCssDone >= 4 ? '🟡' : '🔒',
      competency: 'Two-dimensional layouts, grid-template-areas, gap properties'
    },
    {
      name: 'Media Queries & Mobile-First',
      status: htmlCssDone >= 6 ? 'done' : htmlCssDone >= 5 ? 'progress' : 'locked',
      icon: htmlCssDone >= 6 ? '✅' : htmlCssDone >= 5 ? '🟡' : '🔒',
      competency: '@media breakpoints, fluid typography, mobile viewports'
    },
    {
      name: 'Keyframe Animations & Transitions',
      status: htmlCssDone >= 6 ? 'star' : 'locked',
      icon: htmlCssDone >= 6 ? '⭐' : '🔒',
      competency: 'Hover state transitions, @keyframes, transform animations'
    }
  ];

  // Real Dynamic Mastery Mapping for JavaScript Nodes
  const jsNodes = [
    {
      name: 'Variables & Data Types',
      status: jsDone >= 1 ? 'done' : 'progress',
      icon: jsDone >= 1 ? '✅' : '🟡',
      competency: 'Primitive vs reference types, let/const scoping, template strings'
    },
    {
      name: 'Control Flow & Conditions',
      status: jsDone >= 2 ? 'done' : jsDone >= 1 ? 'progress' : 'locked',
      icon: jsDone >= 2 ? '✅' : jsDone >= 1 ? '🟡' : '🔒',
      competency: 'if/else if, switch statements, ternary operators, coercion'
    },
    {
      name: 'Loops & Iteration',
      status: jsDone >= 3 ? 'done' : jsDone >= 2 ? 'progress' : 'locked',
      icon: jsDone >= 3 ? '✅' : jsDone >= 2 ? '🟡' : '🔒',
      competency: 'for, while, do...while execution logic, break/continue'
    },
    {
      name: 'Arrow Functions & Scope',
      status: jsDone >= 4 ? 'star' : jsDone >= 3 ? 'progress' : 'locked',
      icon: jsDone >= 4 ? '⭐' : jsDone >= 3 ? '🟡' : '🔒',
      competency: 'Functional declarations, implicit returns, lexical this binding'
    },
    {
      name: 'Array Methods (map, filter, reduce)',
      status: jsDone >= 7 ? 'done' : jsDone >= 5 ? 'progress' : 'locked',
      icon: jsDone >= 7 ? '✅' : jsDone >= 5 ? '🟡' : '🔒',
      competency: 'Functional array processing, immutability, chaining'
    },
    {
      name: 'DOM Events & Manipulation',
      status: jsDone >= 11 ? 'done' : jsDone >= 9 ? 'progress' : 'locked',
      icon: jsDone >= 11 ? '✅' : jsDone >= 9 ? '🟡' : '🔒',
      competency: 'querySelector, addEventListener, dynamic rendering'
    },
    {
      name: 'Async / Await & Fetch API',
      status: jsDone >= 13 ? 'done' : jsDone >= 12 ? 'progress' : 'locked',
      icon: jsDone >= 13 ? '✅' : jsDone >= 12 ? '🟡' : '🔒',
      competency: 'Event loop, Promises, REST API integration, try/catch'
    }
  ];

  // Count Mastered (Done or Star)
  const htmlMasteredCount = htmlNodes.filter(n => n.status === 'done' || n.status === 'star').length;
  const cssMasteredCount = cssNodes.filter(n => n.status === 'done' || n.status === 'star').length;
  const jsMasteredCount = jsNodes.filter(n => n.status === 'done' || n.status === 'star').length;

  const renderProgressBar = (count, total) => {
    const filled = Math.round((count / total) * 10);
    const empty = 10 - filled;
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}]`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-900 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xs text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-800 uppercase mb-3">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          <span>Real Skill Competency Matrix</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Developer Skill Mastery Tree
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
          Calculated dynamically from your actual lesson completions across HTML5, CSS3, and JavaScript ES6+.
        </p>
      </div>

      {/* ASCII Progress Bar Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl font-mono text-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <span className="text-orange-400 font-bold block mb-1">HTML5 ({htmlMasteredCount}/{htmlNodes.length})</span>
            <span className="text-slate-300 text-sm tracking-wider">{renderProgressBar(htmlMasteredCount, htmlNodes.length)}</span>
          </div>
          <div>
            <span className="text-sky-400 font-bold block mb-1">CSS3 ({cssMasteredCount}/{cssNodes.length})</span>
            <span className="text-slate-300 text-sm tracking-wider">{renderProgressBar(cssMasteredCount, cssNodes.length)}</span>
          </div>
          <div>
            <span className="text-amber-400 font-bold block mb-1">JavaScript ({jsMasteredCount}/{jsNodes.length})</span>
            <span className="text-slate-300 text-sm tracking-wider">{renderProgressBar(jsMasteredCount, jsNodes.length)}</span>
          </div>
        </div>
      </div>

      {/* Domain Mastery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* HTML5 Domain Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center">
              <Globe className="w-5 h-5 text-orange-500 mr-2" /> HTML5 Mastery
            </h3>
            <span className="text-[11px] font-bold text-orange-800 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
              {htmlMasteredCount}/{htmlNodes.length} Mastered
            </span>
          </div>

          <div className="space-y-2.5">
            {htmlNodes.map((skill, idx) => (
              <div key={idx} className="p-3 rounded-2xl border bg-slate-50 border-slate-200 text-xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{skill.name}</h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1">{skill.competency}</p>
                </div>
                <span className="text-base ml-2 shrink-0">{skill.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CSS3 Domain Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center">
              <Layers className="w-5 h-5 text-sky-500 mr-2" /> CSS3 Mastery
            </h3>
            <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
              {cssMasteredCount}/{cssNodes.length} Mastered
            </span>
          </div>

          <div className="space-y-2.5">
            {cssNodes.map((skill, idx) => (
              <div key={idx} className="p-3 rounded-2xl border bg-slate-50 border-slate-200 text-xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{skill.name}</h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1">{skill.competency}</p>
                </div>
                <span className="text-base ml-2 shrink-0">{skill.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* JavaScript Domain Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center">
              <Code2 className="w-5 h-5 text-amber-500 mr-2" /> JavaScript ES6+
            </h3>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              {jsMasteredCount}/{jsNodes.length} Mastered
            </span>
          </div>

          <div className="space-y-2.5">
            {jsNodes.map((skill, idx) => (
              <div key={idx} className="p-3 rounded-2xl border bg-slate-50 border-slate-200 text-xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{skill.name}</h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1">{skill.competency}</p>
                </div>
                <span className="text-base ml-2 shrink-0">{skill.icon}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Comprehensive Mastery Table */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <h3 className="font-extrabold text-lg text-slate-900 mb-4 flex items-center">
          <Trophy className="w-5 h-5 text-amber-500 mr-2" />
          Competency Status Table
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase font-bold">
                <th className="pb-2.5">Domain</th>
                <th className="pb-2.5">Skill Node</th>
                <th className="pb-2.5 text-center">Status</th>
                <th className="pb-2.5">Mastered Competency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {htmlNodes.map((n, i) => (
                <tr key={`h_${i}`}>
                  <td className="py-2.5 font-bold text-orange-600">HTML5</td>
                  <td className="font-semibold text-slate-900">{n.name}</td>
                  <td className="text-center text-sm">{n.icon}</td>
                  <td className="text-slate-600 text-[11px]">{n.competency}</td>
                </tr>
              ))}
              {cssNodes.map((n, i) => (
                <tr key={`c_${i}`}>
                  <td className="py-2.5 font-bold text-sky-600">CSS3</td>
                  <td className="font-semibold text-slate-900">{n.name}</td>
                  <td className="text-center text-sm">{n.icon}</td>
                  <td className="text-slate-600 text-[11px]">{n.competency}</td>
                </tr>
              ))}
              {jsNodes.map((n, i) => (
                <tr key={`j_${i}`}>
                  <td className="py-2.5 font-bold text-amber-600">JavaScript</td>
                  <td className="font-semibold text-slate-900">{n.name}</td>
                  <td className="text-center text-sm">{n.icon}</td>
                  <td className="text-slate-600 text-[11px]">{n.competency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
