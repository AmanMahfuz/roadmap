import React from 'react';
import { CheckCircle2, Lock, Sparkles, Layers, ShieldCheck, Database, Layout, Smartphone } from 'lucide-react';

const CAPABILITIES_LIST = [
  {
    id: 'cap_html_css',
    title: 'Responsive Web Pages & Landing Pages',
    skillRequired: 'html',
    icon: Layout,
    items: ['Semantic HTML5 Layouts', 'Flexbox & CSS Grid Alignment', 'Mobile-Responsive Media Queries', 'Custom Styled Form Controls']
  },
  {
    id: 'cap_js_basics',
    title: 'Interactive Web Apps',
    skillRequired: 'javascript',
    icon: Sparkles,
    items: ['DOM Manipulation & Event Listeners', 'Form Validation & Input Handling', 'Local Storage State Persistence', 'Dynamic UI Updates']
  },
  {
    id: 'cap_async_api',
    title: 'API-Driven Data Apps',
    skillRequired: 'javascript',
    icon: Database,
    items: ['Async / Await & Fetch API', 'REST API Integration', 'Loading & Error UI States', 'JSON Data Parsing & Rendering']
  },
  {
    id: 'cap_react_crud',
    title: 'Full React CRUD Applications',
    skillRequired: 'react',
    icon: Layers,
    items: ['Component Architecture & Props', 'useState & useEffect Hooks', 'Task / Inventory Management (CRUD)', 'Conditional UI Rendering']
  },
  {
    id: 'cap_auth_dash',
    title: 'Authenticated Admin Dashboards',
    skillRequired: 'react',
    icon: ShieldCheck,
    items: ['Supabase / Firebase Auth Flows', 'Protected Routes & Session Tokens', 'Data Analytics Charts & Cards', 'Dark / Light Theme Engine']
  },
  {
    id: 'cap_mobile_app',
    title: 'Cross-Platform Mobile Apps',
    skillRequired: 'reactnative',
    icon: Smartphone,
    items: ['Native Views, Text & ScrollViews', 'Mobile Touch & Gesture Handlers', 'Device Storage & Native Camera API', 'Deployable APK / TestFlight Builds']
  }
];

export default function CapabilitiesTracker({ userState, completedDaysCount = 0 }) {
  // Simple heuristic for unlocked capabilities based on completed days or XP
  const calculateUnlocked = (cap) => {
    if (cap.skillRequired === 'html') return completedDaysCount >= 2 || userState.xp >= 100;
    if (cap.skillRequired === 'javascript') return completedDaysCount >= 5 || userState.xp >= 300;
    if (cap.skillRequired === 'react') return completedDaysCount >= 10 || userState.xp >= 800;
    if (cap.skillRequired === 'reactnative') return completedDaysCount >= 15 || userState.xp >= 1500;
    return false;
  };

  const unlockedCount = CAPABILITIES_LIST.filter(c => calculateUnlocked(c)).length;

  return (
    <div className="capabilities-wrapper">
      <div className="capabilities-header-card">
        <div className="cap-header-info">
          <span className="badge-pill">Real-World Capability Matrix</span>
          <h2 className="cap-title">What You Can Build Right Now</h2>
          <p className="cap-subtitle">Your progress is measured by real developer skills, not just theory quizzes.</p>
        </div>
        <div className="cap-score-badge">
          <span className="cap-num">{unlockedCount} / {CAPABILITIES_LIST.length}</span>
          <span className="cap-label">Capabilities Unlocked</span>
        </div>
      </div>

      <div className="capabilities-grid">
        {CAPABILITIES_LIST.map((cap) => {
          const isUnlocked = calculateUnlocked(cap);
          const IconComponent = cap.icon;

          return (
            <div key={cap.id} className={`capability-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
              <div className="cap-card-header">
                <div className={`cap-icon-box ${isUnlocked ? 'active' : ''}`}>
                  <IconComponent size={22} />
                </div>
                <div className="cap-card-title-group">
                  <h3 className="cap-card-title">{cap.title}</h3>
                  <span className={`status-tag ${isUnlocked ? 'ready' : 'in-progress'}`}>
                    {isUnlocked ? (
                      <>
                        <CheckCircle2 size={13} /> You Can Build This!
                      </>
                    ) : (
                      <>
                        <Lock size={13} /> Unlocks at Next Node
                      </>
                    )}
                  </span>
                </div>
              </div>

              <ul className="cap-items-list">
                {cap.items.map((item, idx) => (
                  <li key={idx} className="cap-item">
                    <CheckCircle2 size={15} className={`item-check ${isUnlocked ? 'checked' : 'pending'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
