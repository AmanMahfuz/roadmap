import React, { useState } from 'react';
import { X, Settings, Bell, Volume2, Clock, RotateCcw, ShieldCheck, Sun, Moon } from 'lucide-react';

export default function SettingsModal({ 
  onClose, 
  onResetProgress 
}) {
  const [dailyTarget, setDailyTarget] = useState(20);
  const [reminderTime, setReminderTime] = useState('20:00');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="modal-backdrop">
      <div className="day-modal-card settings-modal-card">
        <div className="modal-header">
          <div className="header-info">
            <span className="modal-day-chip"><Settings size={14} /> PREFERENCES</span>
            <h2 className="modal-title-ml">Settings & Controls</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-scroll">
          {/* Daily Goal Target */}
          <div className="settings-section">
            <h4><Clock size={16} /> Daily Goal Target</h4>
            <div className="target-options-grid">
              {[10, 20, 30, 45].map(mins => (
                <button
                  key={mins}
                  className={`target-chip-btn ${dailyTarget === mins ? 'active' : ''}`}
                  onClick={() => setDailyTarget(mins)}
                >
                  {mins} Mins / Day
                </button>
              ))}
            </div>
          </div>

          {/* Notifications & Reminders */}
          <div className="settings-section">
            <h4><Bell size={16} /> Daily Reminder Notifications</h4>
            <div className="setting-toggle-row">
              <span>Enable Daily Streak Reminder</span>
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
              />
            </div>
            {notificationsEnabled && (
              <div className="setting-time-row">
                <label>Reminder Time:</label>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Sound & Feedback */}
          <div className="settings-section">
            <h4><Volume2 size={16} /> Sound & Haptic Feedback</h4>
            <div className="setting-toggle-row">
              <span>Play Lesson Sound Effects</span>
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
              />
            </div>
          </div>

          {/* Danger Zone / Reset Progress */}
          <div className="settings-section danger-section">
            <h4><RotateCcw size={16} /> Reset Progress Data</h4>
            <p>Clear all completed lessons, XP, level, and streak history.</p>
            <button 
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all your learning progress?')) {
                  onResetProgress();
                }
              }} 
              className="btn-danger-sm"
            >
              Reset All Progress Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
