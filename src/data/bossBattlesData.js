// DevQuest v2: Boss Battles & Capstone Challenges Data (100% English)

export const BOSS_BATTLES = {
  html: {
    skillId: 'html',
    title: '👑 HTML Boss Battle: Netflix Landing Page Clone',
    titleMl: '👑 HTML Boss Battle: Netflix Landing Page Clone',
    description: 'Build a full Netflix landing page skeleton using only the specified requirements without assistance.',
    xpReward: 500,
    badgeReward: {
      id: 'html_boss_master',
      name: 'HTML Conqueror 👑',
      icon: 'Crown',
      description: 'Conquered the HTML Boss Battle by building a Netflix Landing Page skeleton.'
    },
    certificateName: 'Certified HTML5 Web Structural Specialist',
    requirements: [
      { id: 'req_semantic', text: 'Include <header>, <nav>, <main>, <section>, and <footer> semantic tags', checked: false },
      { id: 'req_form', text: 'Create an email input form with a "Get Started" submit button', checked: false },
      { id: 'req_table', text: 'Include a <table> displaying subscription pricing plans', checked: false },
      { id: 'req_media', text: 'Insert images (<img>) and working links (<a>)', checked: false },
      { id: 'req_faq', text: 'Use <details> and <summary> tags for an FAQ section', checked: false }
    ],
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Netflix Landing Clone</title>
</head>
<body>
  <!-- Build your Netflix HTML structure here -->
  <header>
    <h1>NETFLIX</h1>
  </header>

</body>
</html>`,
    expectedKeywords: ['<header>', '<nav>', '<form', '<table', '<footer']
  },

  css: {
    skillId: 'css',
    title: '👑 CSS Boss Battle: Animated Glassmorphic Dashboard',
    titleMl: '👑 CSS Boss Battle: Animated Glassmorphic Dashboard',
    description: 'Design a sleek glassmorphism dashboard layout using CSS Grid, Flexbox, Variables, and smooth hover animations.',
    xpReward: 500,
    badgeReward: {
      id: 'css_boss_master',
      name: 'CSS UI Architect 🎨',
      icon: 'Palette',
      description: 'Mastered CSS layout engines and built an Animated Glassmorphic Dashboard.'
    },
    certificateName: 'Certified CSS3 Modern Styling Specialist',
    requirements: [
      { id: 'req_grid', text: 'Create a 3-column card grid layout using display: grid', checked: false },
      { id: 'req_glass', text: 'Apply backdrop-filter: blur() and translucent linear-gradient background', checked: false },
      { id: 'req_flex', text: 'Align navbar header items using display: flex', checked: false },
      { id: 'req_anim', text: 'Add smooth transform: translateY(-5px) on :hover states', checked: false },
      { id: 'req_var', text: 'Use custom CSS variables (--primary, --bg) defined in :root', checked: false }
    ],
    starterCode: `<style>
  :root {
    --primary: #6366f1;
  }
  body {
    background: #0f172a;
    color: white;
    font-family: sans-serif;
  }
  /* Write your glassmorphic CSS here */
</style>
<div class="dashboard">
  <h2>Glass Dashboard</h2>
</div>`,
    expectedKeywords: ['display: grid', 'backdrop-filter', 'display: flex', ':hover', '--']
  },

  js: {
    skillId: 'js',
    title: '👑 JS Boss Battle: Live Weather & Quiz Platform',
    titleMl: '👑 JS Boss Battle: Live Weather & Quiz Platform',
    description: 'Develop a full JavaScript web app featuring Fetch API data fetching, LocalStorage, Array methods, and error handling.',
    xpReward: 500,
    badgeReward: {
      id: 'js_boss_master',
      name: 'JS Engine Slayer ⚡',
      icon: 'Zap',
      description: 'Conquered JavaScript by building a live async Weather & Quiz platform.'
    },
    certificateName: 'Certified Modern JavaScript Application Developer',
    requirements: [
      { id: 'req_fetch', text: 'Fetch live API data using async/await and fetch API', checked: false },
      { id: 'req_storage', text: 'Persist user scores or settings in localStorage', checked: false },
      { id: 'req_dom', text: 'Dynamically re-render UI elements using document.createElement', checked: false },
      { id: 'req_filter', text: 'Process data using Array.map() and Array.filter()', checked: false },
      { id: 'req_error', text: 'Handle errors cleanly using try...catch blocks', checked: false }
    ],
    starterCode: `// Live Weather & Quiz JS Boss Battle
async function fetchWeatherData(city) {
  try {
    // Write API code here
  } catch(err) {
    console.log("Error:", err.message);
  }
}`,
    expectedKeywords: ['async', 'fetch', 'localStorage', 'createElement', 'try']
  },

  react: {
    skillId: 'react',
    title: '👑 React Boss Battle: Fullstack Movie & Shopping Platform',
    titleMl: '👑 React Boss Battle: Fullstack Movie & Shopping Platform',
    description: 'Combine functional component architecture, useState, useEffect, Context API, and Custom Hooks into a unified web application.',
    xpReward: 600,
    badgeReward: {
      id: 'react_boss_master',
      name: 'React Master Supreme ⚛️',
      icon: 'Atom',
      description: 'Built a full-fledged React web platform with global state & routing.'
    },
    certificateName: 'Certified React Frontend System Architect',
    requirements: [
      { id: 'req_context', text: 'Manage global cart/theme state using Context API (createContext)', checked: false },
      { id: 'req_hook', text: 'Create and consume a custom useFetch hook', checked: false },
      { id: 'req_state', text: 'Manage state transitions cleanly with useState and useEffect', checked: false },
      { id: 'req_keys', text: 'Assign unique key props to mapped list elements', checked: false },
      { id: 'req_memo', text: 'Optimize performance using useMemo or useCallback', checked: false }
    ],
    starterCode: `import React, { useState, useEffect, createContext } from 'react';

// React Supreme Boss Challenge App
export default function App() {
  return <div>React Supreme Boss Battle</div>;
}`,
    expectedKeywords: ['createContext', 'useState', 'useEffect', 'key=']
  }
};
