import React from 'react';
import { X, Award, Printer, ShieldCheck, Sparkles } from 'lucide-react';
import { BOSS_BATTLES } from '../data/bossBattlesData';

export default function CertificateModal({ 
  skillId = 'html', 
  userName = 'Dev Learner', 
  onClose 
}) {
  const boss = BOSS_BATTLES[skillId] || BOSS_BATTLES.html;
  const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const certId = `SF-CERT-${skillId.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop">
      <div className="cert-modal-card">
        <div className="cert-header-actions no-print">
          <button onClick={handlePrint} className="btn-primary-sm">
            <Printer size={16} /> Print / Save PDF Certificate
          </button>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        {/* Printable Certificate Frame */}
        <div className="certificate-paper-frame" id="printable-certificate">
          <div className="cert-inner-border">
            <div className="cert-watermark">SKILLFORGE</div>
            
            <div className="cert-header">
              <div className="cert-logo-box">
                <Sparkles size={32} color="#6366f1" />
                <span className="cert-brand">SkillForge <span className="highlight-ml">Platform</span></span>
              </div>
              <span className="cert-verify-tag"><ShieldCheck size={14} /> VERIFIED CERTIFICATE</span>
            </div>

            <div className="cert-body">
              <h1 className="cert-main-title">CERTIFICATE OF COMPLETION</h1>
              <p className="cert-subtitle">This is to certify that</p>

              <h2 className="cert-recipient-name">{userName}</h2>

              <p className="cert-text">
                has successfully conquered all challenges and demonstrated technical mastery in
              </p>

              <h3 className="cert-course-name">{boss.certificateName}</h3>

              <div className="cert-meta-row">
                <div className="meta-col">
                  <span className="meta-label">Date of Issue</span>
                  <span className="meta-val">{issueDate}</span>
                </div>
                <div className="meta-seal-box">
                  <Award size={48} color="#f59e0b" />
                  <span className="seal-text">OFFICIAL SEAL</span>
                </div>
                <div className="meta-col">
                  <span className="meta-label">Verification ID</span>
                  <span className="meta-val">{certId}</span>
                </div>
              </div>
            </div>

            <div className="cert-footer">
              <span>SkillForge Career Learning Platform</span>
              <span>https://skillforge-platform.web.app</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
