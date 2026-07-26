import React from 'react';
import { Compass, FolderGit2, Target, User } from 'lucide-react';

export default function BottomNavBar({ activeTab, onSelectTab }) {
  const navItems = [
    { id: 'learn', label: 'Learn', icon: Compass },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'quests', label: 'Quests', icon: Target },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => {
        const IconComp = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <IconComp size={22} />
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
