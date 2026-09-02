export const XP_PER_LESSON = 25;
export const MINUTES_PER_LESSON = 30;

export function getCompletedKeys(userState) {
  const completedDaysObj = userState?.completedDays || {};
  return Object.keys(completedDaysObj).filter(k => !!completedDaysObj[k]);
}

export function getTotalCompletedLessons(userState) {
  return getCompletedKeys(userState).length;
}

export function getLessonsCompletedOnDate(userState, isoDateString) {
  const completedDaysObj = userState?.completedDays || {};
  const completedKeys = getCompletedKeys(userState);
  
  let count = 0;
  completedKeys.forEach((key) => {
    const record = completedDaysObj[key];
    if (record && typeof record === 'object' && record.completedAt) {
      if (record.completedAt.startsWith(isoDateString)) {
        count += 1;
      }
    }
  });
  
  return count;
}

export function calculateWeeklyActivity(userState) {
  const weeklyData = [];
  const today = new Date();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Go backwards 7 days
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const isoDateStr = date.toISOString().split('T')[0];
    const dayName = daysOfWeek[date.getDay()];
    
    const lessons = getLessonsCompletedOnDate(userState, isoDateStr);
    
    weeklyData.push({
      day: dayName,
      lessons: lessons,
      xp: lessons * XP_PER_LESSON
    });
  }
  
  return weeklyData;
}

export function calculateSkillDistribution(userState) {
  const completedKeys = getCompletedKeys(userState);
  if (completedKeys.length === 0) {
    return [
      { name: 'HTML', percent: 0, color: 'bg-orange-500' },
      { name: 'CSS', percent: 0, color: 'bg-blue-500' },
      { name: 'JavaScript', percent: 0, color: 'bg-yellow-400' },
      { name: 'React', percent: 0, color: 'bg-cyan-400' },
      { name: 'Node.js', percent: 0, color: 'bg-green-500' }
    ];
  }
  
  const skillCounts = {
    HTML: 0,
    CSS: 0,
    JavaScript: 0,
    React: 0,
    NodeJS: 0,
    Python: 0,
    Other: 0
  };
  
  completedKeys.forEach(key => {
    if (key.includes('html')) skillCounts.HTML += 1;
    else if (key.includes('css')) skillCounts.CSS += 1;
    else if (key.includes('javascript') || key.includes('js')) skillCounts.JavaScript += 1;
    else if (key.includes('react')) skillCounts.React += 1;
    else if (key.includes('node')) skillCounts.NodeJS += 1;
    else if (key.includes('python')) skillCounts.Python += 1;
    else skillCounts.Other += 1;
  });
  
  const total = completedKeys.length;
  
  const mapPercent = (count) => Math.round((count / total) * 100);
  
  const distribution = [
    { name: 'HTML', percent: mapPercent(skillCounts.HTML), color: 'bg-orange-500' },
    { name: 'CSS', percent: mapPercent(skillCounts.CSS), color: 'bg-blue-500' },
    { name: 'JavaScript', percent: mapPercent(skillCounts.JavaScript), color: 'bg-yellow-400' },
    { name: 'React', percent: mapPercent(skillCounts.React), color: 'bg-cyan-400' },
    { name: 'Node.js', percent: mapPercent(skillCounts.NodeJS), color: 'bg-green-500' },
    { name: 'Python', percent: mapPercent(skillCounts.Python), color: 'bg-indigo-500' }
  ].filter(s => s.percent > 0);
  
  // If all skills filtered out due to generic naming, return a default
  if (distribution.length === 0) {
    return [{ name: 'Fundamentals', percent: 100, color: 'bg-emerald-500' }];
  }
  
  return distribution.sort((a, b) => b.percent - a.percent).slice(0, 5); // top 5
}

export function generateMockLeaderboard(currentUserXp) {
  // Deterministically generate a leaderboard centered around the user's XP
  const users = [];
  const startXp = Math.max(100, currentUserXp - 500);
  
  for (let i = 0; i < 15; i++) {
    const xp = startXp + (i * 75) + (i % 3 === 0 ? 25 : 0);
    let name = `DevPlayer${i * 13}`;
    if (i === 14) name = 'AlexTheDev';
    if (i === 12) name = 'CodeNinja99';
    if (i === 10) name = 'SarahBytes';
    if (i === 8) name = 'FrontendMaster';
    if (i === 6) name = 'DevGuru';
    
    users.push({
      name,
      xp,
      trend: i % 2 === 0 ? 'up' : 'down'
    });
  }
  
  users.push({
    name: 'You',
    xp: currentUserXp,
    trend: 'up',
    isCurrentUser: true
  });
  
  users.sort((a, b) => b.xp - a.xp);
  
  return users.map((u, index) => ({
    ...u,
    rank: index + 1
  }));
}
