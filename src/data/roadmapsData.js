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
  // ⚡ JAVASCRIPT ROADMAP (14 DAYS)
  // Wezlon Malayalam Playlists:
  // Beginner (22 videos): PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo
  // Advanced (25 videos): PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1
  // ========================================================
  js: [
    // DAY 1 – Fundamentals Part 1 (Beginner Videos 1–4)
    {
      id: 'js-day-1',
      dayNumber: 1,
      title: 'Day 1 – Setup, Variables & Template Literals',
      summary: 'Setup VS Code, understand variables (var, let, const), primitive data types, arithmetic operators, and template literals.',
      xp: 100,
      youtubeId: 'PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo',
      youtubeTitle: 'JS Introduction, Variables & Template Literals – Videos 1–4',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Welcome Message Generator',
      notes: `### 📌 Day 1 Topics (Beginner Playlist Videos 1–4)\n- **Video 1:** Introduction to JavaScript & VS Code Setup\n- **Video 2:** Variables (\`var\`, \`let\`, \`const\`) & Primitive Data Types\n- **Video 3:** Arithmetic & Assignment Operators\n- **Video 4:** Template Literals & String Interpolation\n\n\`\`\`javascript\nconst name = "Cadet";\nconst age = 20;\nconsole.log(\`Hello \${name}! You are \${age} years old.\`);\n\`\`\``,
      tasks: ['Watch Videos 1–4 from the Beginner Playlist', 'Set up VS Code & run first JS file', 'Create variables using let and const', 'Use template literals in a greeting', 'Complete quiz'],
      quiz: [{ question: 'Which keyword defines a variable that cannot be reassigned?', options: ['var', 'let', 'const', 'set'], correct: 2, explanation: 'const declares block-scoped constants that cannot be reassigned.' }],
      codingTask: { prompt: 'Declare a const name variable and log a greeting using a template literal.', starterCode: 'const name = "Cadet";\nconst age = 20;\nconsole.log(`Hello ${name}! You are ${age} years old.`);', expectedKeywords: ['const', 'console.log', '`'] }
    },
    // DAY 2 – Fundamentals Part 2 (Beginner Videos 5–8)
    {
      id: 'js-day-2',
      dayNumber: 2,
      title: 'Day 2 – Conditions & Logical Operators',
      summary: 'Control program flow using if/else if/else, logical operators (&&, ||, !), switch case, and the ternary operator.',
      xp: 120,
      youtubeId: 'PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo',
      youtubeTitle: 'Conditions, Switch & Ternary – Videos 5–8',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Movie Ticket Eligibility Checker',
      notes: `### 📌 Day 2 Topics (Beginner Playlist Videos 5–8)\n- **Video 5:** Conditional Statements (\`if\`, \`else if\`, \`else\`)\n- **Video 6:** Logical Operators (\`&&\`, \`||\`, \`!\`) & Truthy/Falsy values\n- **Video 7:** Switch Case Statements\n- **Video 8:** Ternary Operator & Control Flow Practice\n\n\`\`\`javascript\nconst age = 20;\nconst status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status);\n\`\`\``,
      tasks: ['Watch Videos 5–8 from the Beginner Playlist', 'Build a grade checker (A/B/C/F)', 'Voting eligibility with if/else', 'Use switch for day names', 'Complete quiz'],
      quiz: [{ question: 'Which statement handles multiple cases based on a single expression value?', options: ['if', 'while', 'switch', 'for'], correct: 2, explanation: 'switch tests a value against multiple case clauses.' }],
      codingTask: { prompt: 'Write an if/else to check if age >= 18 for voting eligibility.', starterCode: 'const age = 20;\nif (age >= 18) {\n  console.log("Eligible to vote");\n} else {\n  console.log("Not eligible");\n}', expectedKeywords: ['if', 'else', 'console.log'] }
    },
    // DAY 3 – Fundamentals Part 3 (Beginner Videos 9–12)
    {
      id: 'js-day-3',
      dayNumber: 3,
      title: 'Day 3 – Loops (for, while, do while)',
      summary: 'Iterate over data using for, while, and do-while loops with break and continue control.',
      xp: 130,
      youtubeId: 'PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo',
      youtubeTitle: 'For, While & Loop Control – Videos 9–12',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Multiplication Table Generator',
      notes: `### 📌 Day 3 Topics (Beginner Playlist Videos 9–12)\n- **Video 9:** The \`for\` Loop Essentials\n- **Video 10:** \`while\` and \`do-while\` Loops\n- **Video 11:** Loop Control: \`break\` and \`continue\`\n- **Video 12:** Nested Loops & Iteration Exercises\n\n\`\`\`javascript\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\`\`\``,
      tasks: ['Watch Videos 9–12 from the Beginner Playlist', 'Print numbers 1–10 with for loop', 'Build multiplication table', 'Sum all numbers 1 to 100', 'Complete quiz'],
      quiz: [{ question: 'Which loop runs at least once before checking the condition?', options: ['for', 'while', 'do...while', 'forEach'], correct: 2, explanation: 'do...while executes the code block first before evaluating the condition.' }],
      codingTask: { prompt: 'Write a for loop that logs numbers 1 to 5.', starterCode: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}', expectedKeywords: ['for', 'let', 'i++'] }
    },
    // DAY 4 – Functions (Beginner Videos 13–16)
    {
      id: 'js-day-4',
      dayNumber: 4,
      title: 'Day 4 – Functions & Arrow Functions',
      summary: 'Build reusable logic with function declarations, parameters, return values, ES6 arrow functions, and scope.',
      xp: 140,
      youtubeId: 'PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo',
      youtubeTitle: 'Functions, Arrow Functions & Scope – Videos 13–16',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Area Calculator Functions',
      notes: `### 📌 Day 4 Topics (Beginner Playlist Videos 13–16)\n- **Video 13:** Function Declarations & Invocation\n- **Video 14:** Function Parameters & Return Values\n- **Video 15:** ES6 Arrow Functions vs Standard Functions\n- **Video 16:** Local vs Global Scope in Functions\n\n\`\`\`javascript\nconst add = (a, b) => a + b;\nconsole.log(add(5, 3)); // 8\n\`\`\``,
      tasks: ['Watch Videos 13–16 from the Beginner Playlist', 'Create a greet() function', 'Arrow function for area calculator', 'Understand scope differences', 'Complete quiz'],
      quiz: [{ question: 'Which keyword outputs a value from inside a function back to the caller?', options: ['output', 'return', 'yield', 'export'], correct: 1, explanation: 'return specifies the value the function sends back to its caller.' }],
      codingTask: { prompt: 'Define an arrow function add(a, b) that returns their sum and log the result.', starterCode: 'const add = (a, b) => a + b;\nconsole.log(add(5, 3));', expectedKeywords: ['=>', 'return', 'console.log'] }
    },
    // DAY 5 – String Methods (Beginner Videos 17–20)
    {
      id: 'js-day-5',
      dayNumber: 5,
      title: 'Day 5 – String Methods',
      summary: 'Manipulate text using string methods: length, toUpperCase, slice, indexOf, includes, replace, split, and join.',
      xp: 150,
      youtubeId: 'PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo',
      youtubeTitle: 'String Properties & Methods – Videos 17–20',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Username Formatter',
      notes: `### 📌 Day 5 Topics (Beginner Playlist Videos 17–20)\n- **Video 17:** String Properties & Methods (\`length\`, \`toUpperCase\`, \`toLowerCase\`)\n- **Video 18:** Extracting Strings (\`slice\`, \`substring\`, \`trim\`)\n- **Video 19:** Searching & Replacing (\`indexOf\`, \`includes\`, \`replace\`)\n- **Video 20:** Converting Strings: \`split()\`, \`join()\`, and String Manipulation\n\n\`\`\`javascript\nconst name = "  cadet  ";\nconsole.log(name.trim().toUpperCase()); // "CADET"\n\`\`\``,
      tasks: ['Watch Videos 17–20 from the Beginner Playlist', 'Build a username formatter', 'Check if email includes @', 'Split CSV string into array', 'Complete quiz'],
      quiz: [{ question: 'Which string method removes leading and trailing whitespace?', options: ['trim()', 'strip()', 'slice()', 'replace()'], correct: 0, explanation: 'trim() removes whitespace from both ends of a string.' }],
      codingTask: { prompt: 'Trim and uppercase a username string.', starterCode: 'const name = "  cadet  ";\nconsole.log(name.trim().toUpperCase());', expectedKeywords: ['trim', 'toUpperCase'] }
    },
    // DAY 6 – Arrays Part 1 (Beginner Videos 21–22 + Advanced Videos 1–3)
    {
      id: 'js-day-6',
      dayNumber: 6,
      title: 'Day 6 – Arrays (Basics, Spread & Destructuring)',
      summary: 'Work with ordered lists: indexing, push/pop, shift/unshift, splice/slice, array destructuring, and spread/rest operators.',
      xp: 170,
      youtubeId: 'PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1',
      youtubeTitle: 'Arrays, Destructuring & Spread – Beginner 21–22 + Advanced 1–3',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Shopping Cart Array',
      notes: `### 📌 Day 6 Topics\n- **Beginner Video 21:** Introduction to Arrays & Indexing\n- **Beginner Video 22:** Mutating Arrays (\`push\`, \`pop\`, \`shift\`, \`unshift\`)\n- **Advanced Video 1:** Modern Array Slicing & Splicing (\`slice\`, \`splice\`)\n- **Advanced Video 2:** ES6 Array Destructuring\n- **Advanced Video 3:** Spread (\`...\`) & Rest Operators with Arrays\n\n\`\`\`javascript\nconst fruits = ["Apple", "Banana"];\nfruits.push("Cherry");\nconst [first, ...rest] = fruits;\nconsole.log(first, rest);\n\`\`\``,
      tasks: ['Watch Beginner Videos 21–22 & Advanced Videos 1–3', 'Build a shopping cart array', 'Use destructuring to unpack values', 'Merge two arrays with spread operator', 'Complete quiz'],
      quiz: [{ question: 'Which array method adds an item to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correct: 0, explanation: 'push() appends items to the end of an array.' }],
      codingTask: { prompt: 'Create an array, push a new item, and use destructuring to get the first item.', starterCode: 'const fruits = ["Apple", "Banana"];\nfruits.push("Cherry");\nconst [first, ...rest] = fruits;\nconsole.log(first, rest);', expectedKeywords: ['push', 'const', '...'] }
    },
    // DAY 7 – Array Higher-Order Methods (Advanced Videos 4–7)
    {
      id: 'js-day-7',
      dayNumber: 7,
      title: 'Day 7 – Array Methods (map, filter, reduce, sort)',
      summary: 'Transform data with higher-order array methods: forEach, map, filter, find, reduce, some, every, and sort.',
      xp: 200,
      youtubeId: 'PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1',
      youtubeTitle: 'Higher-Order Array Methods – Advanced Videos 4–7',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Product Filter App',
      notes: `### 📌 Day 7 Topics (Advanced Playlist Videos 4–7)\n- **Video 4:** Higher-Order Methods: \`forEach()\` & \`map()\`\n- **Video 5:** Filtering Data: \`filter()\` & \`find()\`\n- **Video 6:** Data Reduction: \`reduce()\` Deep Dive\n- **Video 7:** Utility Iterators: \`some()\`, \`every()\`, and \`sort()\`\n\n\`\`\`javascript\nconst nums = [5, 12, 18, 3];\nconst big = nums.filter(n => n > 10);\nconsole.log(big); // [12, 18]\n\`\`\``,
      tasks: ['Watch Advanced Videos 4–7', 'Use map() to double all numbers in an array', 'Use filter() to find items above price threshold', 'Use reduce() to sum cart totals', 'Complete quiz'],
      quiz: [{ question: 'Which array method returns a NEW array of transformed items without modifying the original?', options: ['forEach()', 'map()', 'filter()', 'reduce()'], correct: 1, explanation: 'map() creates a new array with each item passed through the callback.' }],
      codingTask: { prompt: 'Use filter() to get numbers greater than 10 from an array.', starterCode: 'const nums = [5, 12, 18, 3];\nconst big = nums.filter(n => n > 10);\nconsole.log(big);', expectedKeywords: ['filter', '=>'] }
    },
    // DAY 8 – Objects (Advanced Videos 8–11)
    {
      id: 'js-day-8',
      dayNumber: 8,
      title: 'Day 8 – Objects & Object Methods',
      summary: 'Work with JavaScript objects: creating, accessing, updating properties, and using object methods.',
      xp: 200,
      youtubeId: 'PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1',
      youtubeTitle: 'Objects & Object Methods – Advanced Videos 8–11',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'User Profile Builder',
      notes: `### 📌 Day 8 Topics\n- Object literals & property access\n- Nested objects\n- Object methods & \`this\`\n- Destructuring objects`,
      tasks: ['Watch Advanced Videos 8–11', 'Create a user profile object', 'Use destructuring to extract values', 'Complete quiz'],
      quiz: [{ question: 'How do you access a property called "name" on an object called "user"?', options: ['user.name', 'user[name]', 'user->name', 'user::name'], correct: 0, explanation: 'Dot notation (user.name) is the standard way to access object properties.' }],
      codingTask: { prompt: 'Create a user object and destructure the name and age properties.', starterCode: 'const user = { name: "Alice", age: 25 };\nconst { name, age } = user;\nconsole.log(name, age);', expectedKeywords: ['const', '{', '}'] }
    },
    // DAY 9 – Classes & OOP (Advanced Videos 12–14)
    {
      id: 'js-day-9',
      dayNumber: 9,
      title: 'Day 9 – Classes & OOP',
      summary: 'Understand Object-Oriented Programming with ES6 classes, constructors, and inheritance.',
      xp: 200,
      youtubeId: 'PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1',
      youtubeTitle: 'Classes & OOP – Advanced Videos 12–14',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Animal Class Hierarchy',
      notes: `### 📌 Day 9 Topics\n- ES6 class syntax\n- Constructors\n- Inheritance with \`extends\`\n- \`super()\` keyword`,
      tasks: ['Watch Advanced Videos 12–14', 'Create an Animal base class', 'Extend it with a Dog class', 'Complete quiz'],
      quiz: [{ question: 'Which keyword is used to create a subclass in JavaScript?', options: ['extends', 'inherits', 'super', 'class'], correct: 0, explanation: 'extends creates a subclass that inherits from a parent class.' }],
      codingTask: { prompt: 'Create a class Animal with a speak() method, then extend it with a Dog class.', starterCode: 'class Animal {\n  speak() { return "..."; }\n}\nclass Dog extends Animal {\n  speak() { return "Woof!"; }\n}', expectedKeywords: ['class', 'extends', 'speak'] }
    },
    // DAY 10 – DOM Manipulation (Advanced Videos 15–17)
    {
      id: 'js-day-10',
      dayNumber: 10,
      title: 'Day 10 – DOM Manipulation',
      summary: 'Select, modify, and dynamically update HTML elements using the DOM API.',
      xp: 220,
      youtubeId: 'PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1',
      youtubeTitle: 'DOM Manipulation – Advanced Videos 15–17',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'To-Do List App',
      notes: `### 📌 Day 10 Topics\n- querySelector & getElementById\n- innerHTML & textContent\n- classList & style\n- Creating & appending elements`,
      tasks: ['Watch Advanced Videos 15–17', 'Build a to-do list using DOM', 'Toggle element visibility', 'Complete quiz'],
      quiz: [{ question: 'Which method selects the first matching element?', options: ['querySelector()', 'getElementById()', 'getElement()', 'findElement()'], correct: 0, explanation: 'querySelector() selects the first element matching a CSS selector.' }],
      codingTask: { prompt: 'Select a paragraph and change its text content.', starterCode: 'const p = document.querySelector("p");\np.textContent = "Hello, DOM!";', expectedKeywords: ['querySelector', 'textContent'] }
    },
    // DAY 11 – Events (Advanced Videos 18–20)
    {
      id: 'js-day-11',
      dayNumber: 11,
      title: 'Day 11 – Event Listeners & Handling',
      summary: 'Respond to user interactions using event listeners, event objects, and delegation.',
      xp: 200,
      youtubeId: 'PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1',
      youtubeTitle: 'Events & Event Handling – Advanced Videos 18–20',
      youtubeChannel: 'Wezlon',
      miniChallengeName: 'Interactive Button Panel',
      notes: `### 📌 Day 11 Topics\n- addEventListener()\n- Event object & properties\n- Preventing default behavior\n- Event delegation`,
      tasks: ['Watch Advanced Videos 18–20', 'Add click events to buttons', 'Prevent form default submission', 'Complete quiz'],
      quiz: [{ question: 'Which method attaches an event handler to an element?', options: ['addEventListener()', 'attachEvent()', 'onEvent()', 'bindEvent()'], correct: 0, explanation: 'addEventListener() is the standard way to attach event handlers.' }],
      codingTask: { prompt: 'Add a click event listener to a button that logs a message.', starterCode: 'const btn = document.querySelector("button");\nbtn.addEventListener("click", () => {\n  console.log("Clicked!");\n});', expectedKeywords: ['addEventListener', 'click'] }
    },
    // DAY 12 – Promises & Async/Await
    {
      id: 'js-day-12',
      dayNumber: 12,
      title: 'Day 12 – Promises & Async/Await',
      summary: 'Handle asynchronous operations cleanly using Promises, .then()/.catch(), and async/await syntax.',
      xp: 220,
      youtubeId: 'DHvZLI7Db8E',
      youtubeTitle: 'Async JavaScript – Promises & Async/Await',
      youtubeChannel: 'Fireship',
      miniChallengeName: 'Async Data Loader',
      notes: `### 📌 Day 12 Topics\n- Creating Promises\n- .then() & .catch()\n- async / await\n- Promise.all()`,
      tasks: ['Learn Promises basics', 'Convert .then() to async/await', 'Chain multiple async calls', 'Complete quiz'],
      quiz: [{ question: 'What does the "await" keyword do?', options: ['Pauses execution until a Promise resolves', 'Creates a new Promise', 'Catches errors', 'Runs code synchronously'], correct: 0, explanation: 'await pauses async function execution until the Promise settles.' }],
      codingTask: { prompt: 'Write an async function that awaits a simulated delay.', starterCode: 'async function delay() {\n  await new Promise(r => setTimeout(r, 1000));\n  console.log("Done!");\n}\ndelay();', expectedKeywords: ['async', 'await', 'Promise'] }
    },
    // DAY 13 – Fetch API & REST
    {
      id: 'js-day-13',
      dayNumber: 13,
      title: 'Day 13 – Fetch API & REST',
      summary: 'Make HTTP requests to REST APIs using the Fetch API and handle JSON responses.',
      xp: 220,
      youtubeId: 'cuEtnrL9-H0',
      youtubeTitle: 'Fetch API Crash Course',
      youtubeChannel: 'Traversy Media',
      miniChallengeName: 'Random User API App',
      notes: `### 📌 Day 13 Topics\n- fetch() basics\n- .json() parsing\n- GET & POST requests\n- Handling API errors`,
      tasks: ['Use fetch() to call a public API', 'Parse and display JSON data', 'Handle network errors', 'Complete quiz'],
      quiz: [{ question: 'What does fetch() return?', options: ['A Promise', 'A string', 'An object directly', 'undefined'], correct: 0, explanation: 'fetch() returns a Promise that resolves to the Response object.' }],
      codingTask: { prompt: 'Fetch data from a public API and log the result.', starterCode: 'async function getData() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");\n  const data = await res.json();\n  console.log(data);\n}\ngetData();', expectedKeywords: ['fetch', 'await', 'json'] }
    },
    // DAY 14 – Local Storage
    {
      id: 'js-day-14',
      dayNumber: 14,
      title: 'Day 14 – Local Storage & Session Storage',
      summary: 'Persist data in the browser using localStorage and sessionStorage APIs.',
      xp: 150,
      youtubeId: 'k8yJCeuP6I8',
      youtubeTitle: 'LocalStorage & SessionStorage',
      youtubeChannel: 'Web Dev Simplified',
      miniChallengeName: 'Persistent Notes App',
      notes: `### 📌 Day 14 Topics\n- localStorage.setItem / getItem\n- JSON.stringify & JSON.parse\n- sessionStorage differences\n- Clearing storage`,
      tasks: ['Save user preferences to localStorage', 'Read and display stored data', 'Clear storage on reset', 'Complete quiz'],
      quiz: [{ question: 'Which method serializes a JS object into a JSON string?', options: ['JSON.stringify()', 'JSON.parse()', 'JSON.encode()', 'toString()'], correct: 0, explanation: 'JSON.stringify() converts a JS object to a JSON string for storage.' }],
      codingTask: { prompt: 'Save and retrieve a name from localStorage.', starterCode: 'localStorage.setItem("name", "Alice");\nconst name = localStorage.getItem("name");\nconsole.log(name);', expectedKeywords: ['localStorage', 'setItem', 'getItem'] }
    },
    // DAY 15 – Modules & ES6 Imports
    {
      id: 'js-day-15',
      dayNumber: 15,
      title: 'Day 15 – ES6 Modules',
      summary: 'Organize code using ES6 module syntax: import, export, named vs default exports.',
      xp: 170,
      youtubeId: 'cRHQNNkYi1A',
      youtubeTitle: 'ES6 Modules Explained',
      youtubeChannel: 'Fireship',
      miniChallengeName: 'Modular Utility Library',
      notes: `### 📌 Day 15 Topics\n- export & export default\n- import syntax\n- Named vs default imports\n- Module scope`,
      tasks: ['Create a utility module', 'Import it into main file', 'Use named and default exports', 'Complete quiz'],
      quiz: [{ question: 'How do you import a default export named "utils"?', options: ['import utils from "./utils"', 'import { utils } from "./utils"', 'require("utils")', 'include utils'], correct: 0, explanation: 'Default exports are imported without curly braces.' }],
      codingTask: { prompt: 'Export a function and import it in another file.', starterCode: '// utils.js\nexport default function greet(name) {\n  return `Hello, ${name}!`;\n}\n\n// main.js\nimport greet from "./utils";\nconsole.log(greet("Alice"));', expectedKeywords: ['export', 'import'] }
    },
    // DAY 16 – Regular Expressions
    {
      id: 'js-day-16',
      dayNumber: 16,
      title: 'Day 16 – Regular Expressions',
      summary: 'Match, search, and replace patterns in strings using JavaScript RegEx.',
      xp: 180,
      youtubeId: 'rhzKDrUiJVk',
      youtubeTitle: 'Regular Expressions Crash Course',
      youtubeChannel: 'Web Dev Simplified',
      miniChallengeName: 'Form Validator with RegEx',
      notes: `### 📌 Day 16 Topics\n- RegEx literals & constructors\n- test() & match()\n- Common patterns (email, phone)\n- replace() with RegEx`,
      tasks: ['Validate an email with RegEx', 'Replace words in a string', 'Test phone number format', 'Complete quiz'],
      quiz: [{ question: 'Which string method tests if a pattern exists?', options: ['test()', 'match()', 'search()', 'find()'], correct: 0, explanation: 'RegExp.test() returns true/false if the pattern is found.' }],
      codingTask: { prompt: 'Test if a string is a valid email using RegEx.', starterCode: 'const email = "user@example.com";\nconst valid = /^[^@]+@[^@]+\\.[^@]+$/.test(email);\nconsole.log(valid);', expectedKeywords: ['test', '@', 'RegExp'] }
    },
    // DAY 17 – Advanced Array & Object Patterns
    {
      id: 'js-day-17',
      dayNumber: 17,
      title: 'Day 17 – Advanced Patterns',
      summary: 'Deep dive into closures, higher-order functions, and functional programming patterns.',
      xp: 200,
      youtubeId: 'vKJpN5FAeF4',
      youtubeTitle: 'JavaScript Closures Explained',
      youtubeChannel: 'Fireship',
      miniChallengeName: 'Counter with Closure',
      notes: `### 📌 Day 17 Topics\n- Closures\n- Higher-order functions\n- Currying\n- Functional composition`,
      tasks: ['Build a counter using closures', 'Write a curried function', 'Chain higher-order functions', 'Complete quiz'],
      quiz: [{ question: 'What is a closure in JavaScript?', options: ['A function that remembers its outer scope', 'A self-closing tag', 'An event handler', 'A closed object'], correct: 0, explanation: 'A closure is a function that has access to variables from its outer scope.' }],
      codingTask: { prompt: 'Create a counter function using closures.', starterCode: 'function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = makeCounter();\nconsole.log(counter(), counter());', expectedKeywords: ['function', 'return', 'count'] }
    },
    // DAY 18 – Project: Expense Tracker
    {
      id: 'js-day-18',
      dayNumber: 18,
      title: 'Day 18 – Project: Expense Tracker',
      summary: 'Build an Expense Tracker app using DOM manipulation, localStorage, and array methods.',
      xp: 500,
      youtubeId: 'XF1tL25aqGA',
      youtubeTitle: 'Expense Tracker JavaScript Project',
      youtubeChannel: 'Traversy Media',
      miniChallengeName: 'Expense Tracker',
      notes: `### 📌 Day 18 – Project Day\nBuild a full Expense Tracker:\n- Add & delete transactions\n- Calculate income/expenses\n- Persist data with localStorage`,
      tasks: ['Build add transaction feature', 'Calculate totals dynamically', 'Persist data in localStorage', 'Complete quiz'],
      quiz: [{ question: 'Which array method sums all values in an array?', options: ['reduce()', 'map()', 'filter()', 'forEach()'], correct: 0, explanation: 'reduce() accumulates values, making it ideal for summing arrays.' }],
      codingTask: { prompt: 'Use reduce() to calculate the total of an expenses array.', starterCode: 'const expenses = [10, 20, 35];\nconst total = expenses.reduce((acc, val) => acc + val, 0);\nconsole.log(total);', expectedKeywords: ['reduce', 'acc', 'total'] }
    },
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
