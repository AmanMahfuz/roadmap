import React from 'react';
import { X, BookOpen, AlertTriangle, Code, CheckCircle2 } from 'lucide-react';
import { DUOLINGO_UNITS } from '../data/duolingoCurriculum';

export default function UnitGuidebookModal({ 
  unitId = 'unit-1', 
  onClose 
}) {
  const unit = DUOLINGO_UNITS.find(u => u.id === unitId) || DUOLINGO_UNITS[0];
  const guidebook = unit.guidebook || {
    unitTitle: `${unit.title} Guidebook`,
    summary: unit.subtitle,
    syntaxRules: [],
    commonMistakes: [],
    cheatSheet: ''
  };

  return (
    <div className="modal-backdrop">
      <div className="day-modal-card guidebook-modal-card">
        <div className="modal-header">
          <div className="header-info">
            <span className="modal-day-chip"><BookOpen size={14} /> UNIT GUIDEBOOK</span>
            <h2 className="modal-title-ml">{guidebook.unitTitle}</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-scroll">
          <div className="guidebook-intro-card">
            <p>{guidebook.summary}</p>
          </div>

          {/* Syntax Rules Section */}
          <div className="guidebook-section">
            <h4>📖 Core Syntax & Language Rules:</h4>
            <div className="rules-grid">
              {guidebook.syntaxRules.map((rule, idx) => (
                <div key={idx} className="rule-card">
                  <code>{rule.code}</code>
                  <p>{rule.rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes Gotchas */}
          <div className="guidebook-section">
            <h4>⚠️ Common Mistakes & Debugging Gotchas:</h4>
            <div className="mistakes-list-box">
              <ul>
                {guidebook.commonMistakes.map((m, idx) => (
                  <li key={idx}><AlertTriangle size={16} color="#f59e0b" /> {m}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Code Cheat Sheet */}
          {guidebook.cheatSheet && (
            <div className="guidebook-section">
              <h4>💻 Unit Reference Cheat-Sheet:</h4>
              <div className="code-cheatsheet-box">
                <pre><code>{guidebook.cheatSheet}</code></pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
