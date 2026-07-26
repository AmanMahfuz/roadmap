// DevQuest v2: Career Tracks & World Map Regions Data (100% English)

export const CAREER_TRACKS = [
  {
    id: 'beginner',
    title: '🌱 Beginner Web Developer Track',
    titleMl: 'Beginner Web Developer Track',
    description: 'Learn HTML, CSS, and JavaScript from scratch to build your first websites.',
    icon: 'Sprout',
    color: '#10B981',
    skills: ['html', 'css', 'js'],
    prereqText: 'No prior coding knowledge needed'
  },
  {
    id: 'react_dev',
    title: '⚛️ React Frontend Developer Track',
    titleMl: 'React Frontend Developer Track',
    description: 'Master modern web app development and type-safe frontend architecture.',
    icon: 'Atom',
    color: '#00F0FF',
    skills: ['react', 'ts'],
    prereqText: 'Requires JS & CSS basic knowledge'
  },
  {
    id: 'mobile_dev',
    title: '📱 Cross-Platform Mobile Dev Track',
    titleMl: 'Cross-Platform Mobile Dev Track',
    description: 'Build native Android & iOS mobile applications using React Native & Expo.',
    icon: 'Smartphone',
    color: '#38E6FF',
    skills: ['react-native'],
    prereqText: 'Requires React JS foundations'
  },
  {
    id: 'fullstack',
    title: '🚀 Full Stack MERN Developer Track',
    titleMl: 'Full Stack MERN Developer Track',
    description: 'Build robust backends with Node.js, Express, MongoDB, and REST APIs.',
    icon: 'Server',
    color: '#A855F7',
    skills: ['nodejs', 'express', 'mongodb'],
    prereqText: 'Requires JavaScript mastery'
  },
  {
    id: 'ai_eng',
    title: '🤖 AI & Automation Engineer Track',
    titleMl: 'AI & Automation Engineer Track',
    description: 'Build AI powered applications with Python, FastAPI, LangChain & LLMs.',
    icon: 'Brain',
    color: '#EC4899',
    skills: ['python', 'fastapi', 'langchain'],
    prereqText: 'Requires solid programming logic'
  }
];

export const WORLD_REGIONS = {
  html: {
    id: 'html',
    name: 'HTML Forest',
    nameMl: 'HTML Forest 🌳',
    description: 'The foundation of the web. Master markup tags and page structure.',
    themeColor: '#E44D26',
    bgGradient: 'linear-gradient(135deg, rgba(228, 77, 38, 0.15), rgba(15, 23, 42, 0.95))',
    icon: 'Trees',
    unlockPrereq: null, // Always unlocked first!
    totalDays: 7
  },
  css: {
    id: 'css',
    name: 'CSS Kingdom',
    nameMl: 'CSS Kingdom 🏰',
    description: 'Enter the vibrant realm of modern styling, Flexbox & Grid layouts.',
    themeColor: '#264DE4',
    bgGradient: 'linear-gradient(135deg, rgba(38, 77, 228, 0.15), rgba(15, 23, 42, 0.95))',
    icon: 'Castle',
    unlockPrereq: 'html',
    totalDays: 10
  },
  js: {
    id: 'js',
    name: 'JavaScript City',
    nameMl: 'JavaScript City 🌆',
    description: 'The high-tech metropolis of interactive logic, events, and APIs.',
    themeColor: '#F7DF1E',
    bgGradient: 'linear-gradient(135deg, rgba(247, 223, 30, 0.15), rgba(15, 23, 42, 0.95))',
    icon: 'Building2',
    unlockPrereq: 'css',
    totalDays: 14
  },
  ts: {
    id: 'ts',
    name: 'TypeScript Citadel',
    nameMl: 'TypeScript Citadel ⚡',
    description: 'The fortified fortress of static typing and scaleable code.',
    themeColor: '#3178C6',
    bgGradient: 'linear-gradient(135deg, rgba(49, 120, 198, 0.15), rgba(15, 23, 42, 0.95))',
    icon: 'Shield',
    unlockPrereq: 'js',
    totalDays: 10
  },
  react: {
    id: 'react',
    name: 'React Space Station',
    nameMl: 'React Space Station 🚀',
    description: 'Orbit the frontend universe with components, hooks & state management.',
    themeColor: '#61DAFB',
    bgGradient: 'linear-gradient(135deg, rgba(97, 218, 251, 0.15), rgba(15, 23, 42, 0.95))',
    icon: 'Rocket',
    unlockPrereq: 'js',
    totalDays: 14
  },
  'react-native': {
    id: 'react-native',
    name: 'Native Mobile Island',
    nameMl: 'Native Mobile Island 🏝',
    description: 'Craft cross-platform mobile apps for iOS and Android.',
    themeColor: '#00D8FF',
    bgGradient: 'linear-gradient(135deg, rgba(0, 216, 255, 0.15), rgba(15, 23, 42, 0.95))',
    icon: 'Compass',
    unlockPrereq: 'react',
    totalDays: 10
  }
};
