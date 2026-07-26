import React from 'react';
import { X, Globe, FolderGit2, Award, CheckCircle2, ExternalLink, Code2 } from 'lucide-react';

export default function PortfolioGeneratorModal({ 
  userState, 
  onClose 
}) {
  const completedCount = Object.keys(userState.completedDays).length;

  return (
    <div className="modal-backdrop">
      <div className="portfolio-modal-card">
        <div className="modal-header">
          <div className="header-info">
            <h2 className="modal-title-ml">💼 Auto-Generated Developer Portfolio</h2>
            <p className="modal-title-en">Showcase your completed projects and verified skills</p>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-scroll">
          {/* Portfolio Hero Showcase */}
          <div className="portfolio-hero">
            <div className="portfolio-avatar">👨‍💻</div>
            <h2>SkillForge Learner</h2>
            <p className="portfolio-bio">Frontend & Fullstack Web Developer | SkillForge Certified</p>

            <div className="portfolio-stats-row">
              <span className="p-stat"><strong>{userState.xp}</strong> XP Earned</span>
              <span className="p-stat"><strong>Lvl {userState.level}</strong> Level</span>
              <span className="p-stat"><strong>{completedCount}</strong> Lessons Completed</span>
            </div>
          </div>

          {/* Mastered Skills Showcase */}
          <div className="portfolio-section">
            <h4>🛠️ Mastered Skills & Technologies</h4>
            <div className="skills-badge-wrap">
              <span className="skill-pill-tag">HTML5 & Semantic Web</span>
              <span className="skill-pill-tag">CSS3, Flexbox & Grid</span>
              <span className="skill-pill-tag">Modern JavaScript (ES6+)</span>
              <span className="skill-pill-tag">TypeScript & Generics</span>
              <span className="skill-pill-tag">React JS & Hooks</span>
              <span className="skill-pill-tag">React Native & Expo</span>
            </div>
          </div>

          {/* Built Projects Showcase */}
          <div className="portfolio-section">
            <h4>💻 Completed Mini-Projects & Capstones</h4>
            <div className="portfolio-projects-grid">
              <div className="p-project-card">
                <h5>Netflix Landing Page Clone</h5>
                <p>HTML5, Semantic structure, Responsive pricing table & media player.</p>
                <span className="p-badge">HTML Boss Battle</span>
              </div>
              <div className="p-project-card">
                <h5>Glassmorphic Dashboard UI</h5>
                <p>CSS Grid, Backdrop Blur, Linear Gradients, Hover Animations.</p>
                <span className="p-badge">CSS Boss Battle</span>
              </div>
              <div className="p-project-card">
                <h5>Live Weather & Quiz Platform</h5>
                <p>JavaScript Async/Await, Fetch API, LocalStorage persistence.</p>
                <span className="p-badge">JS Boss Battle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
