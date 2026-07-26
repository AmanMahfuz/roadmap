import React from 'react';
import { Languages, Code } from 'lucide-react';

export default function LanguageToggle({ langMode, onToggleLang }) {
  return (
    <div className="language-toggle-wrapper">
      <span className="toggle-label">Explanation Mode:</span>
      <div className="toggle-segmented-control">
        <button
          className={`toggle-option ${langMode === 'ml' ? 'active' : ''}`}
          onClick={() => onToggleLang('ml')}
        >
          <Languages size={14} /> Malayalam Concept
        </button>
        <button
          className={`toggle-option ${langMode === 'en' ? 'active' : ''}`}
          onClick={() => onToggleLang('en')}
        >
          <Code size={14} /> English Code Meaning
        </button>
      </div>
    </div>
  );
}
