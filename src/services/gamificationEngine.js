// Gamification Engine for SkillForge
// Manages XP, Levels, Streak, Hearts, Badges, and Milestone Unlocks

export const XP_REWARDS = {
  CHECK_TASK: 25,
  CORRECT_MCQ: 15,
  TERMINAL_SUCCESS: 50,
  DAY_COMPLETE: 200
};

export const INITIAL_HEARTS = 5;
export const XP_PER_LEVEL = 500;

export function getLevelFromXp(xp = 0) {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

export function getXpProgressForLevel(xp = 0) {
  const currentLevel = getLevelFromXp(xp);
  const xpInCurrentLevel = xp % XP_PER_LEVEL;
  const percentage = Math.round((xpInCurrentLevel / XP_PER_LEVEL) * 100);
  return {
    currentLevel,
    xpInCurrentLevel,
    xpRequired: XP_PER_LEVEL,
    percentage
  };
}

export const BADGES_LIST = [
  {
    id: 'badge_first_day',
    title: 'First Step',
    description: 'Completed your very first learning day!',
    icon: '🌱',
    condition: (state) => Object.keys(state.completedDays || {}).length >= 1
  },
  {
    id: 'badge_streak_3',
    title: 'On Fire',
    description: 'Maintained a 3-day active learning streak!',
    icon: '🔥',
    condition: (state) => (state.streak || 0) >= 3
  },
  {
    id: 'badge_level_5',
    title: 'Code Apprentice',
    description: 'Reached Developer Level 5!',
    icon: '⚡',
    condition: (state) => getLevelFromXp(state.xp) >= 5
  },
  {
    id: 'badge_terminal_master',
    title: 'Terminal Wizard',
    description: 'Passed 5 interactive terminal coding challenges!',
    icon: '💻',
    condition: (state) => (state.terminalCount || 0) >= 5
  },
  {
    id: 'badge_quiz_master',
    title: 'Quiz Champion',
    description: 'Answered 10 MCQ quiz questions correctly!',
    icon: '🎯',
    condition: (state) => (state.correctMcqCount || 0) >= 10
  },
  {
    id: 'badge_js_master',
    title: 'JavaScript Cadet',
    description: 'Completed 7 days in the JavaScript 14-day roadmap!',
    icon: '📜',
    condition: (state) => {
      const jsDays = Object.keys(state.completedDays || {}).filter(k => k.startsWith('javascript_day_'));
      return jsDays.length >= 7;
    }
  }
];

export function evaluateBadges(userState) {
  const unlocked = [];
  BADGES_LIST.forEach(b => {
    if (b.condition(userState)) {
      unlocked.push(b.id);
    }
  });
  return unlocked;
}
