// Comprehensive Gamified Skill Roadmaps Data (100% English)

export const SKILL_CATEGORIES = [
  {
    id: 'html',
    name: 'HTML5 Roadmap',
    icon: 'Code2',
    color: '#E44D26',
    accentColor: '#FF6B4A',
    description: 'The foundation of web development. Build modern page structures in 7 days.',
    totalDays: 7,
    levelRequired: 1,
    categoryTag: 'Frontend Core'
  },
  {
    id: 'css',
    name: 'CSS3 Roadmap',
    icon: 'Palette',
    color: '#264DE4',
    accentColor: '#4A87FF',
    description: 'Style beautiful websites with modern layout engines & animations in 7 days.',
    totalDays: 7,
    levelRequired: 1,
    categoryTag: 'Frontend Styling'
  },
  {
    id: 'js',
    name: 'JavaScript Roadmap',
    icon: 'Zap',
    color: '#F7DF1E',
    accentColor: '#FFD700',
    description: 'Master JS Fundamentals, DOM Manipulation, and Async ES6+ in 21 Days (3 Weeks).',
    totalDays: 21,
    levelRequired: 1,
    categoryTag: 'Programming'
  },
  {
    id: 'ts',
    name: 'TypeScript Roadmap',
    icon: 'Code',
    color: '#3178C6',
    accentColor: '#5C9CE6',
    description: 'Type safety, Interfaces, Generics, and TS Architecture in 7 Days.',
    totalDays: 7,
    levelRequired: 2,
    categoryTag: 'Type Systems'
  },
  {
    id: 'react',
    name: 'React Roadmap',
    icon: 'Atom',
    color: '#61DAFB',
    accentColor: '#80E5FF',
    description: 'Components, Hooks, State Management & Full Stack React in 21 Days.',
    totalDays: 21,
    levelRequired: 2,
    categoryTag: 'Frontend Frameworks'
  },
  {
    id: 'react-native',
    name: 'React Native',
    icon: 'Layers',
    color: '#A855F7',
    accentColor: '#C084FC',
    description: 'Cross-platform iOS & Android mobile development in 14 Days.',
    totalDays: 14,
    levelRequired: 3,
    categoryTag: 'Mobile'
  }
];

export const XP_REWARDS_BREAKDOWN = [
  { action: "Watch Tutorial", xp: 20 },
  { action: "Read Notes", xp: 10 },
  { action: "Practice Exercises", xp: 30 },
  { action: "Quiz (80%+)", xp: 40 },
  { action: "Mini Challenge", xp: 50 },
  { action: "Complete Day", xp: 100 },
  { action: "Weekly Project", xp: 700 },
  { action: "Perfect Week", xp: 250 }
];

export const ROADMAP_DATA = {
  html: [
    {
      id: 'html-day-1',
      dayNumber: 1,
      title: 'Day 1 – HTML Basics',
      summary: 'Understand HTML structure, VS Code setup, boilerplate, headings, paragraphs, and comments.',
      xp: 100,
      youtubeId: 's97BsqG_YvE',
      youtubeTitle: 'HTML Full Course - Introduction & Setup',
      youtubeChannel: 'FreeCodeCamp',
      miniChallengeName: 'My First Webpage',
      notes: `### 📌 Day 1 Key Topics\n- What is HTML\n- VS Code Setup\n- HTML Boilerplate\n- Headings & Paragraphs\n- Comments`,
      tasks: ['Watch tutorial', 'Install VS Code', 'Create first HTML file', 'Add headings', 'Add paragraphs', 'Complete quiz'],
      quiz: [{ question: 'Which tag defines the highest level heading?', options: ['<head>', '<h1>', '<header>', '<p>'], correct: 1, explanation: '<h1> is top level.' }],
      codingTask: { prompt: 'Create a webpage skeleton with an <h1> heading and <p> paragraph.', starterCode: '<h1>My First Webpage</h1>\n<p>Hello World</p>', expectedKeywords: ['<h1>', '<p>'] }
    },
    {
      id: 'html-day-2',
      dayNumber: 2,
      title: 'Day 2 – Text & Lists',
      summary: 'Master bold, italic, underline, ordered & unordered lists, description lists, <br>, and <hr>.',
      xp: 120,
      youtubeId: 'bWPMSSsVdEA',
      youtubeTitle: 'HTML Text Formatting & Lists Guide',
      youtubeChannel: 'Traversy Media',
      miniChallengeName: 'Restaurant Menu Page',
      notes: `### 📌 Day 2 Key Topics\n- Bold, Italic, Underline\n- Ordered & Unordered Lists\n- Line breaks & Horizontal lines`,
      tasks: ['Watch tutorial', 'Practice text formatting', 'Create shopping list (ul)', 'Create favourite movies list (ol)', 'Complete quiz'],
      quiz: [{ question: 'Which tag is used for an ordered list?', options: ['<ul>', '<ol>', '<dl>', '<li>'], correct: 1, explanation: '<ol> creates ordered lists.' }],
      codingTask: { prompt: 'Create a list of items using <ul> and <li>.', starterCode: '<ul>\n  <li>Soup</li>\n</ul>', expectedKeywords: ['<ul>', '<li>'] }
    },
    { id: 'html-day-3', dayNumber: 3, title: 'Day 3 – Links & Images', summary: 'Anchor tags, internal & external links, img tags, alt attributes, and image paths.', xp: 130, youtubeId: 'mJgBOIoGihA', youtubeTitle: 'HTML Links & Images', youtubeChannel: 'Dev Ed', miniChallengeName: 'Travel Blog Page', notes: `Links & Images`, tasks: ['Watch tutorial', 'Add 5 images', 'Create navigation menu'], quiz: [{ question: 'Alt attribute usage?', options: ['src', 'alt'], correct: 1, explanation: 'Alt text for accessibility.' }], codingTask: { prompt: 'Add <a> link and <img> tag.', starterCode: '<a href="#">Link</a>\n<img src="img.jpg" alt="pic" />', expectedKeywords: ['<a', '<img'] } },
    { id: 'html-day-4', dayNumber: 4, title: 'Day 4 – Tables', summary: 'Structure data with table, tr, td, th, rowspan, and colspan.', xp: 140, youtubeId: 'pQ7n4b7z55g', youtubeTitle: 'HTML Tables', youtubeChannel: 'Web Dev Simplified', miniChallengeName: 'College Timetable', notes: `Tables`, tasks: ['Watch tutorial', 'Student table', 'Timetable'], quiz: [{ question: 'Header cell tag?', options: ['td', 'th'], correct: 1, explanation: 'th defines header cell.' }], codingTask: { prompt: 'Create a 2x2 table.', starterCode: '<table><tr><th>Day</th></tr></table>', expectedKeywords: ['<table>', '<tr>'] } },
    { id: 'html-day-5', dayNumber: 5, title: 'Day 5 – Forms', summary: 'Form, input, label, radio, checkbox, select, textarea, and button.', xp: 150, youtubeId: 'fNcJuPIZ2WE', youtubeTitle: 'HTML Forms', youtubeChannel: 'Kevin Powell', miniChallengeName: 'Admission Form', notes: `Forms`, tasks: ['Watch tutorial', 'Registration form', 'Login form'], quiz: [{ question: 'Radio button usage?', options: ['checkbox', 'radio'], correct: 1, explanation: 'Single choice selection.' }], codingTask: { prompt: 'Create form with input and submit button.', starterCode: '<form><input type="email" /><button type="submit">Submit</button></form>', expectedKeywords: ['<form', '<button'] } },
    { id: 'html-day-6', dayNumber: 6, title: 'Day 6 – Semantic HTML', summary: 'Header, nav, section, article, aside, footer, and main.', xp: 170, youtubeId: 'kUMe1FH4CHE', youtubeTitle: 'Semantic HTML', youtubeChannel: 'Fireship', miniChallengeName: 'News Website Layout', notes: `Semantic HTML`, tasks: ['Watch tutorial', 'Convert div page', 'Accessibility check'], quiz: [{ question: 'Main content tag?', options: ['header', 'main'], correct: 1, explanation: 'main tag.' }], codingTask: { prompt: 'Build layout with header and main.', starterCode: '<header><h1>News</h1></header><main><section></section></main>', expectedKeywords: ['<header>', '<main>'] } },
    { id: 'html-day-7', dayNumber: 7, title: 'Day 7 – Revision + Final Project', summary: 'Finish Personal Portfolio Website capstone project.', xp: 500, youtubeId: 'gXbTL348fDE', youtubeTitle: 'HTML Portfolio Build', youtubeChannel: 'Traversy Media', miniChallengeName: 'Personal Portfolio Website (Final Capstone)', notes: `Revision + Project`, tasks: ['Review all lessons', 'Finish project'], quiz: [{ question: 'HTML Capstone badge?', options: ['HTML Architect', 'CSS Styler'], correct: 0, explanation: 'HTML Architect Badge.' }], codingTask: { prompt: 'Build Portfolio structure.', starterCode: '<header><nav>Portfolio</nav></header><main></main>', expectedKeywords: ['<header>', '<main>'] } }
  ],

  css: [
    { id: 'css-day-1', dayNumber: 1, title: 'Day 1 – CSS Introduction', summary: 'CSS Introduction, Selectors, Colors, Fonts.', xp: 100, youtubeId: '1PnVor36_40', youtubeTitle: 'CSS Intro', youtubeChannel: 'FreeCodeCamp', miniChallengeName: 'Styled Personal Page', notes: `CSS Intro`, tasks: ['Apply colors', 'Change fonts'], quiz: [{ question: 'Class selector prefix?', options: ['.', '#'], correct: 0, explanation: 'Dot for class.' }], codingTask: { prompt: 'Style heading.', starterCode: '<style>h1{color:#f97316;}</style>', expectedKeywords: ['color'] } },
    { id: 'css-day-2', dayNumber: 2, title: 'Day 2 – Box Model', summary: 'Margin, Padding, Border, Box Model.', xp: 120, youtubeId: 'rIO5326FgPE', youtubeTitle: 'Box Model', youtubeChannel: 'Kevin Powell', miniChallengeName: 'Pricing Card', notes: `Box Model`, tasks: ['Box practice', 'Cards'], quiz: [{ question: 'Inside space property?', options: ['margin', 'padding'], correct: 1, explanation: 'Padding creates inside space.' }], codingTask: { prompt: 'Add padding.', starterCode: '<style>.card{padding:20px;}</style>', expectedKeywords: ['padding'] } },
    { id: 'css-day-3', dayNumber: 3, title: 'Day 3 – Display, Position & Flexbox', summary: 'Display, Position, Flexbox.', xp: 130, youtubeId: 'K74l26pE4YA', youtubeTitle: 'Flexbox', youtubeChannel: 'Web Dev Simplified', miniChallengeName: 'Responsive Navbar', notes: `Flexbox`, tasks: ['Navbar flex layout'], quiz: [{ question: 'Flexbox main axis property?', options: ['justify-content', 'align-items'], correct: 0, explanation: 'justify-content.' }], codingTask: { prompt: 'Set flex container.', starterCode: '<style>nav{display:flex;}</style>', expectedKeywords: ['display:flex'] } },
    { id: 'css-day-4', dayNumber: 4, title: 'Day 4 – CSS Grid', summary: 'Grid, Alignment.', xp: 140, youtubeId: 'rg7Fvvl3taU', youtubeTitle: 'CSS Grid', youtubeChannel: 'Traversy Media', miniChallengeName: 'Admin Dashboard Layout', notes: `Grid`, tasks: ['Dashboard grid'], quiz: [{ question: 'Grid property?', options: ['display:grid', 'display:flex'], correct: 0, explanation: 'display:grid.' }], codingTask: { prompt: 'Set grid layout.', starterCode: '<style>.grid{display:grid;}</style>', expectedKeywords: ['display:grid'] } },
    { id: 'css-day-5', dayNumber: 5, title: 'Day 5 – Responsive Design', summary: 'Responsive Design, Media Queries.', xp: 150, youtubeId: 'srvUrASNj0s', youtubeTitle: 'Media Queries', youtubeChannel: 'FreeCodeCamp', miniChallengeName: 'Responsive Landing Page', notes: `Responsive`, tasks: ['Media queries'], quiz: [{ question: 'Responsive rule?', options: ['@media', '@keyframes'], correct: 0, explanation: '@media rule.' }], codingTask: { prompt: 'Add media query.', starterCode: '<style>@media(max-width:768px){}</style>', expectedKeywords: ['@media'] } },
    { id: 'css-day-6', dayNumber: 6, title: 'Day 6 – Animations & Transitions', summary: 'Animations, Transitions, Hover Effects.', xp: 170, youtubeId: 'zHUpx90NerM', youtubeTitle: 'CSS Animations', youtubeChannel: 'DesignCourse', miniChallengeName: 'Animated Product Card', notes: `Animations`, tasks: ['Hover animations'], quiz: [{ question: 'Keyframe rule?', options: ['@keyframes', 'transition'], correct: 0, explanation: '@keyframes rule.' }], codingTask: { prompt: 'Add hover transition.', starterCode: '<style>.card{transition:all 0.3s;}</style>', expectedKeywords: ['transition'] } },
    { id: 'css-day-7', dayNumber: 7, title: 'Day 7 – Revision + Final Project', summary: 'Modern Responsive Portfolio Capstone.', xp: 700, youtubeId: '0W6qz0-aDaU', youtubeTitle: 'CSS Capstone', youtubeChannel: 'Traversy Media', miniChallengeName: 'Modern Responsive Portfolio (Final Capstone)', notes: `CSS Capstone`, tasks: ['Finish portfolio styling'], quiz: [{ question: 'CSS Capstone badge?', options: ['CSS Styler', 'HTML Architect'], correct: 0, explanation: 'CSS Styler Badge.' }], codingTask: { prompt: 'Build responsive styles.', starterCode: '<style>nav{display:flex;}</style>', expectedKeywords: ['display:flex'] } }
  ],

  // ========================================================
  // ⚡ JAVASCRIPT ROADMAP (21 DAYS / 3 WEEKS)
  // ========================================================
  js: [
    // WEEK 1: JS FUNDAMENTALS
    {
      id: 'js-day-1',
      dayNumber: 1,
      title: 'Day 1 – JavaScript Introduction',
      summary: 'What is JS, how JS works, variables (let, const), and console.log().',
      xp: 100,
      youtubeId: 'W6NZfCO5SIk',
      youtubeTitle: 'JavaScript Basics - Variables & Console',
      youtubeChannel: 'Programming with Mosh',
      miniChallengeName: 'Welcome Message Generator',
      notes: `### 📌 Week 1 Day 1 Topics\n- What is JS?\n- Variables: let vs const\n- console.log()\n\n\`\`\`javascript\nlet name = "Cadet";\nconst age = 20;\nconsole.log(\`Welcome \${name}, Age: \${age}\`);\n\`\`\``,
      tasks: ['Watch tutorial', 'Link JS to HTML', 'Create variables (let/const)', 'Print welcome message', 'Complete quiz'],
      quiz: [{ question: 'Which keyword defines a constant variable that cannot be reassigned?', options: ['var', 'let', 'const', 'set'], correct: 2, explanation: 'const declares block-scoped constants.' }],
      codingTask: { prompt: 'Declare a const variable named name and log it using console.log().', starterCode: 'const name = "Cadet";\nconsole.log(name);', expectedKeywords: ['const', 'console.log'] }
    },
    {
      id: 'js-day-2',
      dayNumber: 2,
      title: 'Day 2 – Data Types & Operators',
      summary: 'String, Number, Boolean, Arithmetic & Comparison operators.',
      xp: 120,
      youtubeId: 'hdI2bqOjy3c',
      youtubeTitle: 'JavaScript Data Types & Operators',
      youtubeChannel: 'FreeCodeCamp',
      miniChallengeName: 'Age Calculator',
      notes: `### 📌 Day 2 Topics\n- Data types: String, Number, Boolean\n- Arithmetic: +, -, *, /, %\n- Comparison: ===, !==, >, <`,
      tasks: ['Watch tutorial', 'Build calculator using operators', 'Compare two numbers', 'Complete quiz'],
      quiz: [{ question: 'Which operator checks strict equality of value and type?', options: ['==', '===', '=', '!='], correct: 1, explanation: '=== checks strict equality.' }],
      codingTask: { prompt: 'Calculate birth year from age using arithmetic operator.', starterCode: 'const age = 25;\nconst currentYear = 2026;\nconst birthYear = currentYear - age;\nconsole.log(birthYear);', expectedKeywords: ['const', '-'] }
    },
    {
      id: 'js-day-3',
      dayNumber: 3,
      title: 'Day 3 – Input & Output',
      summary: 'User interactions with prompt(), alert(), and confirm().',
      xp: 130,
      youtubeId: 'Ukg_U36yBUu',
      youtubeTitle: 'JavaScript Prompt & Alert Masterclass',
      youtubeChannel: 'Traversy Media',
      miniChallengeName: 'Simple Greeting App',
      notes: `### 📌 Day 3 Topics\n- prompt("Enter name")\n- alert("Hello!")\n- confirm("Are you sure?")`,
      tasks: ['Watch tutorial', 'User greeting script', 'BMI calculator logic', 'Complete quiz'],
      quiz: [{ question: 'Which function opens an interactive input box for user input?', options: ['alert()', 'prompt()', 'confirm()', 'print()'], correct: 1, explanation: 'prompt() opens an input dialog.' }],
      codingTask: { prompt: 'Store user input from prompt() and display it with alert().', starterCode: 'const userName = prompt("Enter your name:");\nalert("Welcome " + userName);', expectedKeywords: ['prompt', 'alert'] }
    },
    {
      id: 'js-day-4',
      dayNumber: 4,
      title: 'Day 4 – Conditions (if, else, switch)',
      summary: 'Control flow using if, else if, else, and switch statements.',
      xp: 140,
      youtubeId: 'IsG4Xd6Lgvk',
      youtubeTitle: 'JavaScript Conditional Statements',
      youtubeChannel: 'Web Dev Simplified',
      miniChallengeName: 'Movie Ticket Checker',
      notes: `### 📌 Day 4 Topics\n- if (condition) { ... } else { ... }\n- switch (val) { case x: break; }`,
      tasks: ['Watch tutorial', 'Grade checker logic', 'Voting eligibility script', 'Complete quiz'],
      quiz: [{ question: 'Which statement handles multiple cases based on a single expression value?', options: ['if', 'while', 'switch', 'for'], correct: 2, explanation: 'switch tests values against multiple case clauses.' }],
      codingTask: { prompt: 'Write an if/else condition checking if age >= 18 for voting.', starterCode: 'const age = 20;\nif (age >= 18) {\n  console.log("Eligible");\n} else {\n  console.log("Not Eligible");\n}', expectedKeywords: ['if', 'else'] }
    },
    {
      id: 'js-day-5',
      dayNumber: 5,
      title: 'Day 5 – Loops (for, while, do while)',
      summary: 'Iterate over data using for, while, and do-while loops.',
      xp: 150,
      youtubeId: 's9wWFi67wEw',
      youtubeTitle: 'JavaScript Loops Guide',
      youtubeChannel: 'Programming with Mosh',
      miniChallengeName: 'Number Guess Logic',
      notes: `### 📌 Day 5 Topics\n- for (let i=0; i<10; i++)\n- while (condition)`,
      tasks: ['Watch tutorial', 'Multiplication table script', 'Sum numbers 1 to 100', 'Complete quiz'],
      quiz: [{ question: 'Which loop runs at least once before checking the condition?', options: ['for', 'while', 'do...while', 'forEach'], correct: 2, explanation: 'do...while executes the code block first before evaluating condition.' }],
      codingTask: { prompt: 'Write a for loop logging numbers 1 to 5.', starterCode: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}', expectedKeywords: ['for', 'let', 'i++'] }
    },
    {
      id: 'js-day-6',
      dayNumber: 6,
      title: 'Day 6 – Functions',
      summary: 'Function declaration, parameters, arguments, and return statements.',
      xp: 170,
      youtubeId: 'N8ap4k_1Q6c',
      youtubeTitle: 'JavaScript Functions Masterclass',
      youtubeChannel: 'Fireship',
      miniChallengeName: 'Simple Calculator Functions',
      notes: `### 📌 Day 6 Topics\n- function add(a, b) { return a + b; }\n- Calling functions`,
      tasks: ['Watch tutorial', 'Area calculator function', 'Greeting function', 'Complete quiz'],
      quiz: [{ question: 'Which keyword outputs a value from inside a function back to the caller?', options: ['output', 'return', 'yield', 'export'], correct: 1, explanation: 'return specifies the value returned by the function.' }],
      codingTask: { prompt: 'Define a function add(a, b) that returns their sum.', starterCode: 'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(5, 3));', expectedKeywords: ['function', 'return'] }
    },
    {
      id: 'js-day-7',
      dayNumber: 7,
      title: 'Day 7 – Revision & Week 1 Project',
      summary: 'Review Week 1 fundamentals & build the Interactive Calculator Capstone.',
      xp: 700,
      youtubeId: 'dfhmTyRT36U',
      youtubeTitle: 'Build an Interactive Calculator JS Project',
      youtubeChannel: 'FreeCodeCamp',
      miniChallengeName: 'Interactive Calculator (Week 1 Project)',
      notes: `### 🎯 Week 1 Capstone Project: Interactive Calculator\n- Features: Number buttons (+, -, ×, ÷), Clear button, Result display.\n- Reward: ⭐ 700 XP + 🏆 JavaScript Beginner Badge`,
      tasks: ['Review Week 1 lessons', 'Solve 10 JS challenges', 'Build Interactive Calculator', 'Complete quiz'],
      quiz: [{ question: 'What badge is unlocked upon completing JS Week 1 Capstone?', options: ['JS Beginner', 'JS Ninja'], correct: 0, explanation: 'Unlocks JavaScript Beginner Badge 🏆.' }],
      codingTask: { prompt: 'Write a calculate function taking operation, num1, num2.', starterCode: 'function calculate(op, a, b) {\n  if (op === "+") return a + b;\n  return 0;\n}', expectedKeywords: ['function', 'if', 'return'] }
    },

    // WEEK 2: DOM MASTERY
    {
      id: 'js-day-8',
      dayNumber: 8,
      title: 'Day 8 – DOM Basics',
      summary: 'Understand the document object, getElementById, and querySelector.',
      xp: 100,
      youtubeId: 'y17RuWkWdn8',
      youtubeTitle: 'JavaScript DOM Manipulation Basics',
      youtubeChannel: 'Traversy Media',
      miniChallengeName: 'DOM Element Selector',
      notes: `### 📌 Day 8 Topics\n- document.getElementById("title")\n- document.querySelector(".btn")`,
      tasks: ['Watch tutorial', 'Select HTML elements in JS', 'Change heading text dynamically'],
      quiz: [{ question: 'Which method selects the first element matching a CSS selector?', options: ['querySelector', 'getElementById'], correct: 0, explanation: 'querySelector selects by CSS selector string.' }],
      codingTask: { prompt: 'Select an element by ID "heading" using document.getElementById.', starterCode: 'const el = document.getElementById("heading");', expectedKeywords: ['document.getElementById'] }
    },
    { id: 'js-day-9', dayNumber: 9, title: 'Day 9 – DOM Manipulation', summary: 'innerHTML, textContent, style, and classList manipulation.', xp: 120, youtubeId: '5fb2aPlgoys', youtubeTitle: 'DOM Manipulation Techniques', youtubeChannel: 'Web Dev Simplified', miniChallengeName: 'Dynamic Style Switcher', notes: `innerHTML & textContent`, tasks: ['Change colors dynamically', 'Create dynamic headings'], quiz: [{ question: 'Which property sets raw text without HTML parsing?', options: ['textContent', 'innerHTML'], correct: 0, explanation: 'textContent updates plain text safely.' }], codingTask: { prompt: 'Change textContent of element.', starterCode: 'el.textContent = "Updated Text";', expectedKeywords: ['textContent'] } },
    { id: 'js-day-10', dayNumber: 10, title: 'Day 10 – Events (click, input, submit)', summary: 'addEventListener for click events, text input listeners, and form submissions.', xp: 130, youtubeId: 'XF1g3NxvVVA', youtubeTitle: 'JavaScript Event Listeners', youtubeChannel: 'Dev Ed', miniChallengeName: 'Live Typing Counter', notes: `addEventListener`, tasks: ['Handle button clicks', 'Live typing preview'], quiz: [{ question: 'Which method registers an event handler on a DOM element?', options: ['addEventListener', 'attachEvent'], correct: 0, explanation: 'addEventListener attaches event listeners.' }], codingTask: { prompt: 'Add click event listener to a button.', starterCode: 'btn.addEventListener("click", () => alert("Clicked!"));', expectedKeywords: ['addEventListener', 'click'] } },
    { id: 'js-day-11', dayNumber: 11, title: 'Day 11 – Arrays', summary: 'Creating arrays, push(), pop(), shift(), unshift(), and length property.', xp: 140, youtubeId: 'oigfaZ5A4ac', youtubeTitle: 'JavaScript Arrays Masterclass', youtubeChannel: 'Programming with Mosh', miniChallengeName: 'Shopping Cart Array', notes: `Arrays & Methods`, tasks: ['Manage student list', 'Add items to shopping cart array'], quiz: [{ question: 'Which array method adds an item to the end of an array?', options: ['push()', 'pop()'], correct: 0, explanation: 'push() appends items to the end.' }], codingTask: { prompt: 'Create an array of items and push a new item.', starterCode: 'const items = ["Apple"];\nitems.push("Banana");', expectedKeywords: ['const', 'push'] } },
    { id: 'js-day-12', dayNumber: 12, title: 'Day 12 – Objects', summary: 'JavaScript Objects, key-value pairs, nested objects, and object methods.', xp: 150, youtubeId: 'BRr5Xb7gAak', youtubeTitle: 'JavaScript Objects Tutorial', youtubeChannel: 'Fireship', miniChallengeName: 'Student Profile Object', notes: `Objects & Properties`, tasks: ['Build student object', 'Build car object with methods'], quiz: [{ question: 'How do you access the age property of student object?', options: ['student.age', 'student[age]'], correct: 0, explanation: 'Dot notation accesses object properties.' }], codingTask: { prompt: 'Define a user object with name and age properties.', starterCode: 'const user = { name: "Cadet", age: 20 };\nconsole.log(user.name);', expectedKeywords: ['const', '{', '}'] } },
    { id: 'js-day-13', dayNumber: 13, title: 'Day 13 – Array Methods (map, filter, find, forEach)', summary: 'High-order array methods: map, filter, find, and forEach.', xp: 170, youtubeId: 'g1C40tDP0Bk', youtubeTitle: 'JavaScript Array Methods (map, filter, find)', youtubeChannel: 'Traversy Media', miniChallengeName: 'Product Filter App', notes: `map, filter & find`, tasks: ['Filter product catalog by price', 'Map student marks to grades'], quiz: [{ question: 'Which array method returns a new array with items passing a test condition?', options: ['filter()', 'map()'], correct: 0, explanation: 'filter() creates a new array passing the callback test.' }], codingTask: { prompt: 'Use filter() to get numbers greater than 10.', starterCode: 'const nums = [5, 12, 18];\nconst filtered = nums.filter(n => n > 10);', expectedKeywords: ['filter'] } },
    { id: 'js-day-14', dayNumber: 14, title: 'Day 14 – Revision & Week 2 Project', summary: 'Review DOM & Arrays, and build the Digital To-Do App Capstone.', xp: 800, youtubeId: 'Ttf3CEsEwMQ', youtubeTitle: 'Build a Digital Todo App in Vanilla JS', youtubeChannel: 'FreeCodeCamp', miniChallengeName: 'Digital To-Do App (Week 2 Project)', notes: `### 🎯 Week 2 Capstone Project: Digital To-Do App\n- Features: Add task, Delete task, Mark complete, Task counter.\n- Reward: ⭐ 800 XP`, tasks: ['Review DOM & Array methods', 'Finish Digital Todo App', 'Complete Week 2 quiz'], quiz: [{ question: 'Which method removes an element from the DOM?', options: ['remove()', 'delete()'], correct: 0, explanation: 'remove() deletes the node from the DOM tree.' }], codingTask: { prompt: 'Create task item and append to list.', starterCode: 'const li = document.createElement("li");\nli.textContent = "New Task";', expectedKeywords: ['createElement', 'textContent'] } },

    // WEEK 3: MODERN JAVASCRIPT & ASYNC
    { id: 'js-day-15', dayNumber: 15, title: 'Day 15 – ES6 (Arrow Functions, Template Literals)', summary: 'Arrow functions, template literals, destructuring, and spread operator.', xp: 100, youtubeId: 'NCwa_xi0Uuc', youtubeTitle: 'Modern ES6 JavaScript Features', youtubeChannel: 'Web Dev Simplified', miniChallengeName: 'ES6 Code Refactor', notes: `ES6 Syntax`, tasks: ['Convert traditional functions to arrow functions', 'Use template literals'], quiz: [{ question: 'Which syntax defines an arrow function?', options: ['() => {}', 'function() {}'], correct: 0, explanation: '() => {} is arrow function syntax.' }], codingTask: { prompt: 'Convert function to arrow function.', starterCode: 'const add = (a, b) => a + b;', expectedKeywords: ['=>'] } },
    { id: 'js-day-16', dayNumber: 16, title: 'Day 16 – Async JavaScript (Promises & Async/Await)', summary: 'Synchronous vs Asynchronous execution, Callbacks, Promises, and async/await.', xp: 120, youtubeId: 'V_Kr9OSfDeU', youtubeTitle: 'Async Await & Promises Explained', youtubeChannel: 'Fireship', miniChallengeName: 'Fake API Simulator', notes: `Promises & Async Await`, tasks: ['Simulate fake server call', 'Handle resolved promise'], quiz: [{ question: 'Which keyword pauses execution inside an async function until a Promise resolves?', options: ['await', 'pause'], correct: 0, explanation: 'await pauses until promise settles.' }], codingTask: { prompt: 'Define an async function using async and await.', starterCode: 'async font() {\n  await new Promise(r => setTimeout(r, 100));\n}', expectedKeywords: ['async', 'await'] } },
    { id: 'js-day-17', dayNumber: 17, title: 'Day 17 – Fetch API & JSON', summary: 'Fetch data from REST APIs using fetch() and parse JSON responses.', xp: 130, youtubeId: 'cuEtnrL9-H0', youtubeTitle: 'Fetch API & JSON Tutorial', youtubeChannel: 'Traversy Media', miniChallengeName: 'User Data Fetcher', notes: `fetch() & JSON`, tasks: ['Fetch user data from API', 'Render fetched users in DOM'], quiz: [{ question: 'Which method parses a fetch Response body as a JSON object?', options: ['response.json()', 'JSON.parse()'], correct: 0, explanation: 'response.json() returns a promise parsing JSON body.' }], codingTask: { prompt: 'Fetch data using fetch() and call .json().', starterCode: 'fetch("https://jsonplaceholder.typicode.com/todos/1")\n  .then(res => res.json());', expectedKeywords: ['fetch', '.json'] } },
    { id: 'js-day-18', dayNumber: 18, title: 'Day 18 – Local Storage', summary: 'Persist data across browser sessions with localStorage.setItem and getItem.', xp: 140, youtubeId: 'AUOzvFzdIk4', youtubeTitle: 'JavaScript Local Storage Guide', youtubeChannel: 'Dev Ed', miniChallengeName: 'Dark Mode Preference Saver', notes: `localStorage`, tasks: ['Save username to localStorage', 'Save dark mode preference'], quiz: [{ question: 'Which method saves a key-value pair in browser LocalStorage?', options: ['localStorage.setItem()', 'localStorage.save()'], correct: 0, explanation: 'setItem(key, value) saves data in LocalStorage.' }], codingTask: { prompt: 'Save theme preference to localStorage.', starterCode: 'localStorage.setItem("theme", "dark");', expectedKeywords: ['localStorage.setItem'] } },
    { id: 'js-day-19', dayNumber: 19, title: 'Day 19 – Error Handling (try, catch, finally)', summary: 'Handle runtime exceptions gracefully using try, catch, and finally blocks.', xp: 150, youtubeId: 'cFTFtuEQ-10', youtubeTitle: 'JavaScript Error Handling', youtubeChannel: 'Web Dev Simplified', miniChallengeName: 'API Error Shield', notes: `try / catch / finally`, tasks: ['Handle API fetch errors', 'Display error alert to user'], quiz: [{ question: 'Which block catches errors thrown inside a try block?', options: ['catch', 'except'], correct: 0, explanation: 'catch block handles exceptions.' }], codingTask: { prompt: 'Wrap code inside a try/catch block.', starterCode: 'try {\n  // Code\n} catch (err) {\n  console.error(err);\n}', expectedKeywords: ['try', 'catch'] } },
    { id: 'js-day-20', dayNumber: 20, title: 'Day 20 – Mini Review', summary: 'Review ES6 features, Fetch API, Local Storage, and Error Handling.', xp: 170, youtubeId: 'W6NZfCO5SIk', youtubeTitle: 'JS Master Review', youtubeChannel: 'FreeCodeCamp', miniChallengeName: 'Weather App Integration Review', notes: `Comprehensive Review`, tasks: ['Review ES6 & Async', 'Review Local Storage & Errors'], quiz: [{ question: 'Which format is standard for API data exchange?', options: ['JSON', 'XML'], correct: 0, explanation: 'JSON is standard for modern APIs.' }], codingTask: { prompt: 'Combine fetch and async/await inside try/catch.', starterCode: 'async function getData() {\n  try {\n    const res = await fetch("api");\n  } catch(e) {}\n}', expectedKeywords: ['async', 'fetch', 'try'] } },
    {
      id: 'js-day-21',
      dayNumber: 21,
      title: 'Day 21 – Final Project: Weather Dashboard',
      summary: 'Build a production Weather Dashboard with live API search, LocalStorage, and loading state.',
      xp: 1000,
      youtubeId: 'MIYQR-Ybrn4',
      youtubeTitle: 'Build Weather App Project in JS',
      youtubeChannel: 'Traversy Media',
      miniChallengeName: 'Weather Dashboard (Final Capstone)',
      notes: `### 🏁 Final Weekly Project: Weather Dashboard\nRequirements:\n- Search city\n- Weather API integration\n- Temperature, humidity, wind speed\n- LocalStorage recent searches\n- Error handling & loading state\n\nReward: ⭐ 1000 XP + 🏆 JavaScript Ninja Badge + 🔓 Unlock TypeScript Roadmap`,
      tasks: ['Build Weather API search', 'Render weather metrics & icons', 'Save recent searches in LocalStorage', 'Handle API errors & loading states'],
      quiz: [{ question: 'What badge is awarded upon completing the 21-Day JS Roadmap Capstone?', options: ['JS Ninja', 'HTML Architect'], correct: 0, explanation: 'Unlocks JavaScript Ninja Badge 🏆.' }],
      codingTask: { prompt: 'Fetch weather data asynchronously and log result.', starterCode: 'async function getWeather(city) {\n  const res = await fetch(`https://api.weather.com/\${city}`);\n  const data = await res.json();\n}', expectedKeywords: ['async', 'fetch', 'await'] }
    }
  ]
};

export const INITIAL_USER_STATE = {
  xp: 0,
  level: 1,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedDays: {},
  badges: [
    { id: 'first_step', name: 'First Step 🐾', icon: 'Footprints', description: 'Started your coding journey', unlocked: true },
    { id: 'html_ninja', name: 'HTML Architect 🏆', icon: 'ShieldCheck', description: 'Completed 7-Day HTML5 Roadmap', unlocked: false },
    { id: 'css_artist', name: 'CSS Styler 🎨', icon: 'Palette', description: 'Mastered 7-Day CSS3 Roadmap', unlocked: false },
    { id: 'js_beginner', name: 'JS Beginner 🏆', icon: 'Award', description: 'Completed JS Week 1 Calculator Project', unlocked: false },
    { id: 'js_slayer', name: 'JS Ninja ⚡', icon: 'Zap', description: 'Conquered 21-Day JavaScript Roadmap', unlocked: false }
  ]
};
