import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ChevronDown, ChevronUp, Code, Sparkles, FileText } from 'lucide-react';
import { INTERVIEW_QUESTIONS } from '../data/interviewData';

export default function CareerInterviewHub() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="career-hub-wrapper">
      <div className="career-hero-banner">
        <div className="hero-tag"><Briefcase size={16} /> Career Prep Center</div>
        <h2>Career & Technical Interview Readiness</h2>
        <p>Prepare for frontend and fullstack developer technical interviews with detailed explanations and code snippets.</p>
      </div>

      {/* Career Readiness Checklist */}
      <div className="career-checklist-card">
        <h3>✅ Developer Job Readiness Checklist</h3>
        <div className="checklist-items-grid">
          <div className="check-item"><CheckCircle2 color="#10b981" size={18} /> HTML/CSS/JS Boss Certificates earned</div>
          <div className="check-item"><CheckCircle2 color="#10b981" size={18} /> Developer Portfolio showcasing 3 capstones</div>
          <div className="check-item"><CheckCircle2 color="#10b981" size={18} /> GitHub repository commits updated</div>
          <div className="check-item"><CheckCircle2 color="#10b981" size={18} /> LinkedIn profile updated with skills & certificates</div>
        </div>
      </div>

      {/* Interview Questions Section */}
      <div className="interview-qns-section">
        <h3>💬 Frequently Asked Technical Interview Questions</h3>

        <div className="questions-accordion-list">
          {INTERVIEW_QUESTIONS.map((qn) => {
            const isExpanded = expandedId === qn.id;
            return (
              <div key={qn.id} className="qn-accordion-card">
                <div className="qn-header-row" onClick={() => toggleQuestion(qn.id)}>
                  <div className="qn-title-col">
                    <span className="qn-category-tag">{qn.category}</span>
                    <h4 className="qn-question-ml">{qn.question}</h4>
                  </div>
                  <button className="btn-toggle-accordion">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="qn-body-content">
                    <div className="qn-answer-rendered" dangerouslySetInnerHTML={{ __html: formatAnswerMarkdown(qn.answerMl) }} />
                    {qn.codeSnippet && (
                      <div className="qn-code-box">
                        <pre><code>{qn.codeSnippet}</code></pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function formatAnswerMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\n/g, '<br/>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
