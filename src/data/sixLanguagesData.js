// Core Curriculum Data for the Main Programming Languages & Web Development Tracks
// Combines Duolingo-style conceptual lessons + Todo-style daily task tracking + MCQs & 5 Terminal Labs per day + YouTube Playlists

export const YOUTUBE_PLAYLISTS = {
  htmlCssFullCourse: 'https://youtu.be/lI3iZ5xMII8?si=YooxAAxXII1ufqRX',
  jsBeginner: 'https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo',
  jsAdvanced: 'https://www.youtube.com/playlist?list=PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1'
};

export const SIX_LANGUAGES = [
  {
    id: 'html_css',
    name: 'HTML & CSS',
    icon: '🌐',
    badge: 'HTML/CSS',
    color: '#E34F26',
    bgColor: 'rgba(227, 79, 38, 0.15)',
    textColor: '#ea580c',
    gradient: 'linear-gradient(135deg, #e34f26 0%, #264de4 100%)',
    tagline: '7-Day Gamified HTML & CSS Roadmap with MCQs & 5 Terminal Labs/Day.',
    description: 'Master HTML document structure, semantic tags, forms, CSS Flexbox, CSS Grid, media queries, keyframe animations & 3 portfolio projects.',
    difficulty: 'Super Beginner Friendly',
    totalDays: 7,
    days: [
      {
        day: 1,
        title: 'Day 1 – HTML Fundamentals',
        unit: 'Unit 1: HTML Structure (00:00:00 – 00:35:30)',
        topic: 'VS Code setup, HTML boilerplate, elements vs tags, headings, paragraphs, links & lists.',
        playlistUrl: YOUTUBE_PLAYLISTS.htmlCssFullCourse,
        videoBreakdown: '🎥 Timestamp: 00:00:00 – 00:35:30 (HTML Setup, Tags, Lists, Links)',
        whatToLearn: {
          summary: 'Watch Video Segment (00:00:00 – 00:35:30): Learn VS Code setup, Live Server & Prettier extensions, index.html structure, headings h1-h6, paragraphs, hyperlinks <a> (with target="_blank"), and unordered <ul> / ordered <ol> lists.',
          details: [
            '🎥 Watch Video: 00:00:00 – 00:35:30 (HTML Setup, Tags, Lists, Links)',
            'VS Code setup, Live Server extension & Prettier formatting.',
            'HTML document structure (<!DOCTYPE html>, <html>, <head>, <body>).',
            'Headings (`h1`–`h6`), Paragraphs (`p`), and Comments.',
            'Links (`a href` with `target="_blank"`) and Lists (`ul`, `ol`, `li`).'
          ],
          codeExample: `<!DOCTYPE html>\n<html>\n<head><title>My Profile</title></head>\n<body>\n  <header><h1>Aman's Profile</h1></header>\n  <main>\n    <p>Frontend Developer in Kochi.</p>\n    <a href="https://google.com" target="_blank">Google Link</a>\n    <ul><li>Apple</li><li>Milk</li><li>Bread</li></ul>\n  </main>\n</body>\n</html>`
        },
        mcqQuestions: [
          {
            question: "What is the correct attribute to open a link in a new tab in HTML5?",
            options: ["href=\"_blank\"", "target=\"_new\"", "target=\"_blank\"", "rel=\"external\""],
            answerIndex: 2,
            explanation: "`target=\"_blank\"` instructs the browser to open the linked document in a new tab."
          },
          {
            question: "Which of the following elements is inline by default?",
            options: ["<div>", "<h1>", "<a>", "<p>"],
            answerIndex: 2,
            explanation: "`<a>` (anchor element) is inline by default and does not start on a new line."
          },
          {
            question: "What does the browser do if you omit the `https://` in an external link `href`?",
            options: ["Automatically inserts `https://`", "Treats it as a relative local file path", "Throws a syntax error in VS Code", "Opens a search engine query"],
            answerIndex: 1,
            explanation: "Without a protocol scheme (`https://`), browsers evaluate the URL as a relative local file path."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: HTML Document & Link Assertion",
            prompt: "Construct an HTML document string containing `<h1>My Profile</h1>` and `target=\"_blank\"` and print `Valid HTML Document Created!`.",
            starterCode: "const html = '<h1>My Profile</h1><a href=\"https://google.com\" target=\"_blank\">Link</a>';\nconsole.log('Valid HTML Document Created!');",
            expectedKeyword: "Valid HTML Document Created!"
          },
          {
            id: 2,
            title: "Challenge 2: Unordered Grocery List Assertion",
            prompt: "Create an unordered list (`<ul>`) containing 3 items (`<li>Apple</li>`, `<li>Milk</li>`, `<li>Bread</li>`) and print `Grocery List Validated!`.",
            starterCode: "const list = '<ul><li>Apple</li><li>Milk</li><li>Bread</li></ul>';\nconsole.log('Grocery List Validated!');",
            expectedKeyword: "Grocery List Validated!"
          },
          {
            id: 3,
            title: "Challenge 3: External Link Configuration",
            prompt: "Create an anchor tag linking to `https://google.com` with `target=\"_blank\"` and print `External Link Configured!`.",
            starterCode: "const link = '<a href=\"https://google.com\" target=\"_blank\">Google</a>';\nconsole.log('External Link Configured!');",
            expectedKeyword: "External Link Configured!"
          },
          {
            id: 4,
            title: "Challenge 4: Ordered Leaderboard List",
            prompt: "Define an `<ol>` with 3 leaderboard spots and print `Leaderboard Rendered!`.",
            starterCode: "const ol = '<ol><li>Gold</li><li>Silver</li><li>Bronze</li></ol>';\nconsole.log('Leaderboard Rendered!');",
            expectedKeyword: "Leaderboard Rendered!"
          },
          {
            id: 5,
            title: "Challenge 5: Container ID Verification",
            prompt: "Create an HTML page containing an element with `id=\"user-card\"` and print `Card Container Verified!`.",
            starterCode: "const div = '<div id=\"user-card\">User Info</div>';\nconsole.log('Card Container Verified!');",
            expectedKeyword: "Card Container Verified!"
          }
        ],
        tasks: [
          { id: 'hc1_t1', text: '🎥 Watch Video: 00:00:00 – 00:35:30 (HTML Setup, Tags, Lists, Links)', completed: false },
          { id: 'hc1_t2', text: '✍️ Task 1: Create an HTML document with <h1>–<h6>, <p>, and <a> links using target="_blank"', completed: false },
          { id: 'hc1_t3', text: '✍️ Task 2: Build an unordered grocery list (<ul>) and an ordered top-3 leaderboard (<ol>)', completed: false },
          { id: 'hc1_t4', text: '❓ Practice 1: Build a personal profile page layout', completed: false },
          { id: 'hc1_t5', text: '❓ Practice 2: Build a structured recipe card layout', completed: false },
          { id: 'hc1_t6', text: '🚀 Mini Project: Personal Information Card (HTML + Console log version)', completed: false }
        ],
        starterCode: `const html = "<header><h1>Personal Profile Card</h1></header>";\nconsole.log("Valid HTML Document Created!");`,
        expectedKeyword: 'Valid HTML Document Created!'
      },

      {
        day: 2,
        title: 'Day 2 – Forms, Media & Structural Elements',
        unit: 'Unit 2: User Inputs & Media (00:35:31 – 01:00:33)',
        topic: 'Forms, input types, textarea, select, images, buttons & spans.',
        playlistUrl: YOUTUBE_PLAYLISTS.htmlCssFullCourse,
        videoBreakdown: '🎥 Timestamp: 00:35:31 – 01:00:33 (Forms, Inputs, Images, Spans, Divs)',
        whatToLearn: {
          summary: 'Watch Video Segment (00:35:31 – 01:00:33): Master forms <form>, input types (text, email, password, number, date), <textarea>, <select>, local/external images <img>, <button>, <span>, and <div> grouping.',
          details: [
            '🎥 Watch Video: 00:35:31 – 01:00:33 (Forms, Inputs, Images, Spans, Divs)',
            'Forms `<form action="" method="POST">` & input controls.',
            'Input types: `email`, `password`, `number`, `date`.',
            'Multi-line input `<textarea>` and dropdown menus `<select>`.',
            'Local image paths (`assets/images/logo.png`) vs external URLs.',
            'Group containers `<div>` and inline text wrappers `<span>`.'
          ],
          codeExample: `<form action="/submit" method="POST">\n  <label>Email: <input type="email" required></label>\n  <label>Role:\n    <select><option>Student</option><option>Developer</option></select>\n  </label>\n  <img src="assets/images/logo.png" alt="Logo">\n  <button type="submit">Submit</button>\n</form>`
        },
        mcqQuestions: [
          {
            question: "Why is `<input>` considered a self-closing tag?",
            options: ["It cannot hold text content or child tags inside it", "It is a legacy HTML3 tag", "It only accepts numerical values", "It automatically converts to a <div>"],
            answerIndex: 0,
            explanation: "`<input>` is a void element because it cannot contain child content or closing tags."
          },
          {
            question: "What happens when an `<input type=\"email\">` form is submitted with an invalid email address?",
            options: ["The browser prevents submission and shows a native tooltip error", "The page crashes", "It converts the input to lowercase text", "JavaScript throws an uncaught Promise rejection"],
            answerIndex: 0,
            explanation: "HTML5 native form validation intercepts invalid email formats and displays a browser error tooltip."
          },
          {
            question: "If your HTML file and image folder are in the same directory, which `src` path correctly references `pic.jpg` inside the `img` folder?",
            options: ["src=\"/pic.jpg\"", "src=\"img/pic.jpg\"", "src=\"../img/pic.jpg\"", "src=\"pic.jpg\""],
            answerIndex: 1,
            explanation: "`src=\"img/pic.jpg\"` specifies a relative path from the current directory into the `img` subfolder."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Form Validation Assertion",
            prompt: "Construct a form payload object with `email`, `password`, `date` and print `College Admission Form Submitted!`.",
            starterCode: "const form = { email: 'student@college.edu', role: 'Engineering' };\nconsole.log('College Admission Form Submitted!');",
            expectedKeyword: "College Admission Form Submitted!"
          },
          {
            id: 2,
            title: "Challenge 2: Relative Image Path Verification",
            prompt: "Create an image tag string with `src=\"assets/images/logo.png\"` and print `Local Image Path Verified!`.",
            starterCode: "const img = '<img src=\"assets/images/logo.png\" alt=\"Logo\">';\nconsole.log('Local Image Path Verified!');",
            expectedKeyword: "Local Image Path Verified!"
          },
          {
            id: 3,
            title: "Challenge 3: Multi-Line Textarea Input",
            prompt: "Define a `<textarea>` string with placeholder and print `Textarea Element Verified!`.",
            starterCode: "const area = '<textarea placeholder=\"Enter notes...\"></textarea>';\nconsole.log('Textarea Element Verified!');",
            expectedKeyword: "Textarea Element Verified!"
          },
          {
            id: 4,
            title: "Challenge 4: Dropdown Select Options",
            prompt: "Construct a `<select>` dropdown with 2 options and print `Dropdown Select Configured!`.",
            starterCode: "const sel = '<select><option>CS</option><option>EC</option></select>';\nconsole.log('Dropdown Select Configured!');",
            expectedKeyword: "Dropdown Select Configured!"
          },
          {
            id: 5,
            title: "Challenge 5: Div & Span Container Grouping",
            prompt: "Wrap a `<span>` inside a `<div>` container and print `Container Grouping Rendered!`.",
            starterCode: "const wrap = '<div><span class=\"badge font-bold\">Active</span></div>';\nconsole.log('Container Grouping Rendered!');",
            expectedKeyword: "Container Grouping Rendered!"
          }
        ],
        tasks: [
          { id: 'hc2_t1', text: '🎥 Watch Video: 00:35:31 – 01:00:33 (Forms, Inputs, Images, Spans, Divs)', completed: false },
          { id: 'hc2_t2', text: '✍️ Task: Create a <form> with email, password, date, textarea, and <select> dropdown', completed: false },
          { id: 'hc2_t3', text: '✍️ Task: Embed a local image using relative directory paths (assets/images/logo.png)', completed: false },
          { id: 'hc2_t4', text: '🚀 Mini Project: Build a College Admission Form with validation and submit button', completed: false }
        ],
        starterCode: `const form = { email: "student@dev.com", course: "Frontend" };\nconsole.log("College Admission Form Submitted!");`,
        expectedKeyword: 'College Admission Form Submitted!'
      },

      {
        day: 3,
        title: 'Day 3 – CSS Basics, Colors & Google Fonts',
        unit: 'Unit 3: CSS Basics (01:00:34 – 01:38:40)',
        topic: 'External CSS, hex/RGB colors, sizing (px, rem, vh, vw), Google Fonts & borders.',
        playlistUrl: YOUTUBE_PLAYLISTS.htmlCssFullCourse,
        videoBreakdown: '🎥 Timestamp: 01:00:34 – 01:38:40 (External CSS, Hex/RGB, Google Fonts, Borders)',
        whatToLearn: {
          summary: 'Watch Video Segment (01:00:34 – 01:38:40): Learn external CSS via `<link>`, hex/RGB/RGBA colors, relative units (`px`, `rem`, `vh`, `vw`), Google Fonts integration ("Inter"), and shorthand `border`.',
          details: [
            '🎥 Watch Video: 01:00:34 – 01:38:40 (External CSS, Hex/RGB, Google Fonts, Borders)',
            'Linking external CSS: `<link rel="stylesheet" href="styles.css">`.',
            'Colors: Hex (`#ea580c`), RGB, and RGBA (`rgba(0,0,0,0.5)`).',
            'Units: `px`, `rem` (relative to root font-size), `vh`, `vw`.',
            'Google Fonts integration (Inter 300, 400, 700).',
            'Shorthand border: `border: 2px solid #e2e8f0`.'
          ],
          codeExample: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');\nbody {\n  font-family: 'Inter', sans-serif;\n  background-color: #f8fafc;\n  color: #0f172a;\n}\n.product-card {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 16px;\n  padding: 1.5rem;\n}`
        },
        mcqQuestions: [
          {
            question: "Which method is recommended for linking CSS in production web apps?",
            options: ["Inline style=\"...\" attributes", "Internal <style> tags in <head>", "External .css file via <link rel=\"stylesheet\">", "Importing CSS inside <script> tags"],
            answerIndex: 2,
            explanation: "External CSS files promote separation of concerns, browser caching, and maintainability."
          },
          {
            question: "What does the fourth parameter in `rgba(0, 0, 0, 0.5)` control?",
            options: ["Red saturation", "Opacity / Alpha transparency (0 to 1)", "Brightness", "Border Radius"],
            answerIndex: 1,
            explanation: "The alpha value `0.5` sets 50% opacity/transparency."
          },
          {
            question: "What is the purpose of specifying a fallback font like `font-family: 'Inter', sans-serif;`?",
            options: ["It speeds up CSS load times", "It acts as a backup if the primary font fails to load or isn't supported", "It forces Google Chrome to render bold text", "It enables custom emoji support"],
            answerIndex: 1,
            explanation: "Fallback font families ensure text renders legibly if web fonts fail to load."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Google Font & Styles Assertion",
            prompt: "Define a CSS rule object with `fontFamily: 'Inter'` and `border: '1px solid #ddd'` and log `Product Card Styles Applied!`.",
            starterCode: "const styles = { fontFamily: 'Inter', border: '1px solid #ddd' };\nconsole.log('Product Card Styles Applied!');",
            expectedKeyword: "Product Card Styles Applied!"
          },
          {
            id: 2,
            title: "Challenge 2: RGBA Color Translucency",
            prompt: "Define an RGBA background color object and log `RGBA Opacity Verified!`.",
            starterCode: "const bg = 'rgba(15, 23, 42, 0.8)';\nconsole.log('RGBA Opacity Verified!');",
            expectedKeyword: "RGBA Opacity Verified!"
          },
          {
            id: 3,
            title: "Challenge 3: REM Unit Sizing",
            prompt: "Set padding to `1.5rem` and print `REM Relative Unit Verified!`.",
            starterCode: "const padding = '1.5rem';\nconsole.log('REM Relative Unit Verified!');",
            expectedKeyword: "REM Relative Unit Verified!"
          },
          {
            id: 4,
            title: "Challenge 4: External Link Tag Syntax",
            prompt: "Construct a `<link rel=\"stylesheet\" href=\"styles.css\">` string and print `External Stylesheet Linked!`.",
            starterCode: "const link = '<link rel=\"stylesheet\" href=\"styles.css\">';\nconsole.log('External Stylesheet Linked!');",
            expectedKeyword: "External Stylesheet Linked!"
          },
          {
            id: 5,
            title: "Challenge 5: Shorthand Border Radius",
            prompt: "Specify `border-radius: 16px` on a card container and print `Rounded Card Border Applied!`.",
            starterCode: "const card = { borderRadius: '16px', border: '1px solid #eee' };\nconsole.log('Rounded Card Border Applied!');",
            expectedKeyword: "Rounded Card Border Applied!"
          }
        ],
        tasks: [
          { id: 'hc3_t1', text: '🎥 Watch Video: 01:00:34 – 01:38:40 (External CSS, Hex/RGB, Google Fonts, Borders)', completed: false },
          { id: 'hc3_t2', text: '✍️ Task: Link external styles.css using <link rel="stylesheet">', completed: false },
          { id: 'hc3_t3', text: '✍️ Task: Import Google Font "Inter" with weights 300, 400, 700', completed: false },
          { id: 'hc3_t4', text: '🚀 Mini Project: Build a styled Product Card UI with custom background & borders', completed: false }
        ],
        starterCode: `const styles = { fontFamily: "Inter", color: "#ea580c" };\nconsole.log("Product Card Styles Applied!");`,
        expectedKeyword: 'Product Card Styles Applied!'
      },

      {
        day: 4,
        title: 'Day 4 – Specificity & The Box Model',
        unit: 'Unit 4: Box Model & Specificity (01:38:41 – 02:08:46)',
        topic: 'Classes, IDs, Box Model, border-box reset & BEM naming.',
        playlistUrl: YOUTUBE_PLAYLISTS.htmlCssFullCourse,
        videoBreakdown: '🎥 Timestamp: 01:38:41 – 02:08:46 (Classes, IDs, Box Model, border-box)',
        whatToLearn: {
          summary: 'Watch Video Segment (01:38:41 – 02:08:46): Master CSS selector hierarchy (element < class < ID < inline), Box Model layers (content, padding, border, margin), universal reset `* { box-sizing: border-box; }`, and BEM class naming.',
          details: [
            '🎥 Watch Video: 01:38:41 – 02:08:46 (Classes, IDs, Box Model, border-box)',
            'Specificity hierarchy: Inline styles > `#id` > `.class` > `element`.',
            'Box Model components: Content, Padding, Border, Margin.',
            'Universal reset: `* { box-sizing: border-box; margin: 0; padding: 0; }`.',
            'BEM Naming Methodology: `.card__title`, `.card__button--primary`.'
          ],
          codeExample: `/* Universal Box Reset */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.hero__button--primary {\n  padding: 12px 24px;\n  margin-top: 16px;\n  border: none;\n}`
        },
        mcqQuestions: [
          {
            question: "Which selector has the highest specificity rank?",
            options: [".card-title (Class)", "h1 (Element)", "#main-header (ID)", "* (Universal)"],
            answerIndex: 2,
            explanation: "ID selectors (`#id`) carry higher specificity than class, element, or universal selectors."
          },
          {
            question: "What is the default `box-sizing` value for standard HTML elements?",
            options: ["border-box", "content-box", "padding-box", "margin-box"],
            answerIndex: 1,
            explanation: "The default browser value for `box-sizing` is `content-box`."
          },
          {
            question: "How does `box-sizing: border-box` change element dimension calculations?",
            options: [
              "It adds padding on top of the specified width",
              "It includes padding and border inside the specified width and height",
              "It removes margins completely",
              "It forces all elements to remain inline"
            ],
            answerIndex: 1,
            explanation: "`border-box` includes padding and border within the declared width/height."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Universal Border-Box Reset",
            prompt: "Simulate a box-model calculation: width 300px with border-box reset and log `Box-Model Reset Applied: 300px`.",
            starterCode: "const box = { width: 300, boxSizing: 'border-box' };\nconsole.log(`Box-Model Reset Applied: ${box.width}px`);",
            expectedKeyword: "Box-Model Reset Applied: 300px"
          },
          {
            id: 2,
            title: "Challenge 2: BEM Class Naming Structure",
            prompt: "Define BEM class names `.hero__title` and print `BEM Naming Architecture Verified!`.",
            starterCode: "const bem = { block: 'hero', element: 'hero__title' };\nconsole.log('BEM Naming Architecture Verified!');",
            expectedKeyword: "BEM Naming Architecture Verified!"
          },
          {
            id: 3,
            title: "Challenge 3: Selector Specificity Order",
            prompt: "Compare `#header` ID selector rank against `.class` and print `ID Specificity Rank Highest!`.",
            starterCode: "const idRank = 100;\nconsole.log('ID Specificity Rank Highest!');",
            expectedKeyword: "ID Specificity Rank Highest!"
          },
          {
            id: 4,
            title: "Challenge 4: Controlled Margin Spacing",
            prompt: "Add `margin: 20px auto` centering on a hero container and log `Container Center Margin Verified!`.",
            starterCode: "const container = { margin: '20px auto', maxWidth: '1200px' };\nconsole.log('Container Center Margin Verified!');",
            expectedKeyword: "Container Center Margin Verified!"
          },
          {
            id: 5,
            title: "Challenge 5: Content Padding Layer",
            prompt: "Apply `padding: 24px` content layer and print `Content Layer Padding Applied!`.",
            starterCode: "const pad = { padding: '24px' };\nconsole.log('Content Layer Padding Applied!');",
            expectedKeyword: "Content Layer Padding Applied!"
          }
        ],
        tasks: [
          { id: 'hc4_t1', text: '🎥 Watch Video: 01:38:41 – 02:08:46 (Classes, IDs, Box Model, border-box)', completed: false },
          { id: 'hc4_t2', text: '✍️ Task: Add * { box-sizing: border-box; } reset to the top of CSS', completed: false },
          { id: 'hc4_t3', text: '✍️ Task: Style a card using BEM class naming (.card, .card__title, .card__button)', completed: false },
          { id: 'hc4_t4', text: '🚀 Mini Project: Build a Landing Page Hero Layout with controlled padding & margins', completed: false }
        ],
        starterCode: `const layout = { name: "Hero Section", boxSizing: "border-box" };\nconsole.log("Box-Model Reset Applied: 300px");`,
        expectedKeyword: 'Box-Model Reset Applied: 300px'
      },

      {
        day: 5,
        title: 'Day 5 – Layouts, Positioning & Media Queries',
        unit: 'Unit 5: Layouts & Responsive Design (02:08:47 – 02:35:51)',
        topic: 'display (block, inline, flex), positioning (relative, absolute, fixed, sticky) & media queries.',
        playlistUrl: YOUTUBE_PLAYLISTS.htmlCssFullCourse,
        videoBreakdown: '🎥 Timestamp: 02:08:47 – 02:35:51 (Display, Positioning, @media Queries)',
        whatToLearn: {
          summary: 'Watch Video Segment (02:08:47 – 02:35:51): Master `display: block` vs `inline`, positioning types (`relative`, `absolute`, `fixed`, `sticky`), and `@media` queries (`max-width: 480px`, `768px`) for responsive mobile layouts.',
          details: [
            '🎥 Watch Video: 02:08:47 – 02:35:51 (Display, Positioning, @media Queries)',
            'Display types: `block`, `inline`, `inline-block`, `flex`, `none`.',
            'Positioning: `relative` (anchor parent), `absolute` (positioned relative to parent).',
            '`fixed` (locked to viewport) and `sticky` (sticks on scroll).',
            'Responsive breakpoints: `@media (max-width: 768px) { ... }`.'
          ],
          codeExample: `.navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n.container {\n  position: relative;\n}\n.badge-absolute {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n@media (max-width: 768px) {\n  .navbar { padding: 10px; }\n}`
        },
        mcqQuestions: [
          {
            question: "When an element is set to `position: absolute`, what determines its coordinate placement (top, left)?",
            options: ["The document <body> always", "The nearest parent element with a position other than static", "The closest sibling element", "Its inline text content"],
            answerIndex: 1,
            explanation: "`position: absolute` aligns relative to its nearest non-static positioned ancestor."
          },
          {
            question: "Which position value keeps an element anchored in the viewport even while scrolling?",
            options: ["relative", "absolute", "fixed", "static"],
            answerIndex: 2,
            explanation: "`position: fixed` anchors an element relative to the browser viewport window."
          },
          {
            question: "What is the effect of `@media (max-width: 768px)` rules?",
            options: ["Applied only to screens wider than 768px", "Applied only to screens 768px wide or smaller", "Applied strictly to high-resolution print documents", "Increases resolution by 768 pixels"],
            answerIndex: 1,
            explanation: "`@media (max-width: 768px)` targets screen resolutions up to 768px wide."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Mobile Breakpoint Trigger Assertion",
            prompt: "Simulate a mobile layout shift at 768px breakpoint and log `Mobile Responsive Breakpoint Triggered!`.",
            starterCode: "const width = 600;\nif (width <= 768) {\n  console.log('Mobile Responsive Breakpoint Triggered!');\n}",
            expectedKeyword: "Mobile Responsive Breakpoint Triggered!"
          },
          {
            id: 2,
            title: "Challenge 2: Absolute Positioning Centering",
            prompt: "Position a modal child with `position: absolute` inside `position: relative` parent and print `Absolute Child Positioned!`.",
            starterCode: "const parent = { position: 'relative' };\nconst child = { position: 'absolute', top: '50%' };\nconsole.log('Absolute Child Positioned!');",
            expectedKeyword: "Absolute Child Positioned!"
          },
          {
            id: 3,
            title: "Challenge 3: Fixed Viewport Navigation Bar",
            prompt: "Define a fixed header bar `position: fixed` and log `Fixed Viewport Header Configured!`.",
            starterCode: "const nav = { position: 'fixed', top: 0 };\nconsole.log('Fixed Viewport Header Configured!');",
            expectedKeyword: "Fixed Viewport Header Configured!"
          },
          {
            id: 4,
            title: "Challenge 4: Flex Grid Layout Transition",
            prompt: "Change display to `flex` with `justifyContent: 'space-between'` and print `Flex Layout Grid Rendered!`.",
            starterCode: "const flex = { display: 'flex', justifyContent: 'space-between' };\nconsole.log('Flex Layout Grid Rendered!');",
            expectedKeyword: "Flex Layout Grid Rendered!"
          },
          {
            id: 5,
            title: "Challenge 5: Mobile Viewport 480px Breakpoint",
            prompt: "Test small mobile screen size 420px and print `Mobile 480px Breakpoint Active!`.",
            starterCode: "const screenWidth = 420;\nif (screenWidth <= 480) {\n  console.log('Mobile 480px Breakpoint Active!');\n}",
            expectedKeyword: "Mobile 480px Breakpoint Active!"
          }
        ],
        tasks: [
          { id: 'hc5_t1', text: '🎥 Watch Video: 02:08:47 – 02:35:51 (Display, Positioning, @media Queries)', completed: false },
          { id: 'hc5_t2', text: '✍️ Task: Center a child <div> using position: absolute inside a position: relative parent', completed: false },
          { id: 'hc5_t3', text: '✍️ Task: Write a media query @media (max-width: 480px) to adjust mobile font sizes', completed: false },
          { id: 'hc5_t4', text: '🚀 Mini Project: Build a Responsive Photo Gallery layout', completed: false }
        ],
        starterCode: `const windowWidth = 480;\nif (windowWidth <= 768) {\n  console.log("Mobile Responsive Breakpoint Triggered!");\n}`,
        expectedKeyword: 'Mobile Responsive Breakpoint Triggered!'
      },

      {
        day: 6,
        title: 'Day 6 – Hover Effects, Keyframe Animations & BEM Architecture',
        unit: 'Unit 6: Animations & Polish (02:35:52 – 03:00:06)',
        topic: 'Pseudo-classes (:hover), transitions, keyframe animations & BEM architecture.',
        playlistUrl: YOUTUBE_PLAYLISTS.htmlCssFullCourse,
        videoBreakdown: '🎥 Timestamp: 02:35:52 – 03:00:06 (:hover, transition, @keyframes, BEM)',
        whatToLearn: {
          summary: 'Watch Video Segment (02:35:52 – 03:00:06): Learn `:hover` states, `transition` timing, `::before` / `::after` pseudo-elements, `@keyframes` animations (`transform: translateY()`), and BEM naming architecture.',
          details: [
            '🎥 Watch Video: 02:35:52 – 03:00:06 (:hover, transition, @keyframes, BEM)',
            'Smooth hover transitions: `transition: all 0.3s ease`.',
            'Floating bounce animations: `@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }`.',
            'BEM Architecture: `block__element--modifier` for maintainable CSS.'
          ],
          codeExample: `@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-8px); }\n}\n.floating-btn {\n  animation: bounce 2s infinite ease-in-out;\n  transition: opacity 0.2s;\n}\n.floating-btn:hover {\n  opacity: 0.9;\n}`
        },
        mcqQuestions: [
          {
            question: "Where should the `transition` property be placed for smooth hover entry and exit?",
            options: ["Inside the :hover pseudo-class block only", "On the base element class block", "Inside the @keyframes block", "In the HTML tag itself"],
            answerIndex: 1,
            explanation: "Placing `transition` on the base class ensures smooth transition effects on both hover entry AND exit."
          },
          {
            question: "In BEM naming convention (`block__element--modifier`), what does `--` represent?",
            options: ["An element inside a block", "A modifier representing a state or version variation", "A global CSS ID", "A media query trigger"],
            answerIndex: 1,
            explanation: "Double hyphens `--` signify modifiers representing state or styling variations."
          },
          {
            question: "What property allows an animation to play backward and forward continuously?",
            options: ["animation-direction: alternate", "animation-mode: reverse", "transition: loop", "transform: rotate3d"],
            answerIndex: 0,
            explanation: "`animation-direction: alternate` alternates playback direction every cycle."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Keyframe Bounce Animation Assertion",
            prompt: "Create an animation keyframe object and log `BEM Animated Banner Rendered!`.",
            starterCode: "const anim = { name: 'bounce', duration: '2s', iteration: 'infinite' };\nconsole.log('BEM Animated Banner Rendered!');",
            expectedKeyword: "BEM Animated Banner Rendered!"
          },
          {
            id: 2,
            title: "Challenge 2: Button Hover Opacity Transition",
            prompt: "Define a `:hover` transition rule `transition: all 0.3s ease` and print `Hover Transition Verified!`.",
            starterCode: "const btn = { transition: 'all 0.3s ease' };\nconsole.log('Hover Transition Verified!');",
            expectedKeyword: "Hover Transition Verified!"
          },
          {
            id: 3,
            title: "Challenge 3: Infinite Animation Loop",
            prompt: "Set `animation-iteration-count: infinite` and print `Infinite Animation Loop Active!`.",
            starterCode: "const loop = { animationIterationCount: 'infinite' };\nconsole.log('Infinite Animation Loop Active!');",
            expectedKeyword: "Infinite Animation Loop Active!"
          },
          {
            id: 4,
            title: "Challenge 4: BEM Modifier Class Definition",
            prompt: "Define BEM modifier `.btn--primary` and log `BEM Modifier Class Applied!`.",
            starterCode: "const mod = '.btn--primary';\nconsole.log('BEM Modifier Class Applied!');",
            expectedKeyword: "BEM Modifier Class Applied!"
          },
          {
            id: 5,
            title: "Challenge 5: 2D Transform Translate Shift",
            prompt: "Apply `transform: translateY(-8px)` hover lift and print `2D Transform Lift Verified!`.",
            starterCode: "const transform = 'translateY(-8px)';\nconsole.log('2D Transform Lift Verified!');",
            expectedKeyword: "2D Transform Lift Verified!"
          }
        ],
        tasks: [
          { id: 'hc6_t1', text: '🎥 Watch Video: 02:35:52 – 03:00:06 (:hover, transition, @keyframes, BEM)', completed: false },
          { id: 'hc6_t2', text: '✍️ Task: Create a button with :hover opacity and a transition: all 0.3s ease', completed: false },
          { id: 'hc6_t3', text: '✍️ Task: Build an @keyframes floating bounce animation with infinite loop', completed: false },
          { id: 'hc6_t4', text: '🚀 Mini Project: Build an Animated Landing Page Banner with interactive hovers', completed: false }
        ],
        starterCode: `const anim = { name: "float", duration: "2s" };\nconsole.log("BEM Animated Banner Rendered!");`,
        expectedKeyword: 'BEM Animated Banner Rendered!'
      },

      {
        day: 7,
        title: 'Day 7 – Portfolio Project Sprint (No Video Tutorials)',
        unit: 'Unit 7: Portfolio Capstone (0 Videos)',
        topic: 'Build 3 complete portfolio projects independently without watching tutorials.',
        playlistUrl: YOUTUBE_PLAYLISTS.htmlCssFullCourse,
        videoBreakdown: '🎥 0 Videos: Pure Application Day',
        whatToLearn: {
          summary: 'Day 7 (Pure Application Sprint - 0 Videos): Build 3 complete portfolio projects entirely from scratch on your own without watching video tutorials!',
          details: [
            '🚀 Build Project 1: Personal Portfolio Website (Sticky navbar, animated scroll button, skills section, contact form, responsive queries).',
            '🚀 Build Project 2: Product / Service Landing Page (Hero banner, pricing card grid, animated button hovers, full BEM CSS).',
            '🚀 Build Project 3: Login & Registration Modal UI (Clean form layout, custom selectors, input validations, absolute UI overlay).'
          ],
          codeExample: `/* Final Portfolio Projects */\nconst projects = [\n  "Personal Portfolio Website",\n  "Product / Service Landing Page",\n  "Login & Registration Modal UI"\n];\nconsole.log(\`Successfully built \${projects.length} Portfolio Projects!\`);`
        },
        mcqQuestions: [
          {
            question: "Which combination produces a production-ready responsive layout workflow?",
            options: [
              "Universal border-box reset + Relative/Flexbox containers + Media query breakpoints",
              "Absolute positioning on every element with hardcoded pixel heights",
              "Inline CSS styles mixed with multiple !important flags",
              "Fixed table tags for layout wrapping"
            ],
            answerIndex: 0,
            explanation: "Combining border-box resets, flex containers, and media query breakpoints creates responsive production layouts."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Personal Portfolio Project Assertion",
            prompt: "Construct a project object for `Personal Portfolio Website` and print `Portfolio Project 1 Validated!`.",
            starterCode: "const p1 = { title: 'Personal Portfolio Website' };\nconsole.log('Portfolio Project 1 Validated!');",
            expectedKeyword: "Portfolio Project 1 Validated!"
          },
          {
            id: 2,
            title: "Challenge 2: Product Landing Page Project Assertion",
            prompt: "Construct a project object for `Product / Service Landing Page` and print `Landing Page Project 2 Validated!`.",
            starterCode: "const p2 = { title: 'Product Landing Page' };\nconsole.log('Landing Page Project 2 Validated!');",
            expectedKeyword: "Landing Page Project 2 Validated!"
          },
          {
            id: 3,
            title: "Challenge 3: Login Modal UI Project Assertion",
            prompt: "Construct a project object for `Login & Registration Modal UI` and print `Login Modal Project 3 Validated!`.",
            starterCode: "const p3 = { title: 'Login & Registration UI' };\nconsole.log('Login Modal Project 3 Validated!');",
            expectedKeyword: "Login Modal Project 3 Validated!"
          },
          {
            id: 4,
            title: "Challenge 4: Total Portfolio Projects Built",
            prompt: "Store 3 project names in an array and print `Total HTML & CSS Portfolio Projects Built: 3`.",
            starterCode: "const projects = ['Personal Portfolio Website', 'Product Landing Page', 'Login & Registration Modal UI'];\nconsole.log('Total HTML & CSS Portfolio Projects Built:', projects.length);",
            expectedKeyword: "Total HTML & CSS Portfolio Projects Built: 3"
          },
          {
            id: 5,
            title: "Challenge 5: HTML & CSS Track Completion Assertion",
            prompt: "Verify 100% completion of 7 Days and log `HTML & CSS Track 100% Completed!`.",
            starterCode: "const progress = 100;\nif (progress === 100) {\n  console.log('HTML & CSS Track 100% Completed!');\n}",
            expectedKeyword: "HTML & CSS Track 100% Completed!"
          }
        ],
        tasks: [
          { id: 'hc7_t1', text: '🚀 Project 1: Build Personal Portfolio Website (Sticky nav, hero, skills, contact form)', completed: false },
          { id: 'hc7_t2', text: '🚀 Project 2: Build Product Landing Page (Hero banner, pricing grid, BEM architecture)', completed: false },
          { id: 'hc7_t3', text: '🚀 Project 3: Build Login & Registration UI (Form validation, absolute modals, mobile ready)', completed: false }
        ],
        starterCode: `const projects = ["Personal Portfolio Website", "Product Landing Page", "Login & Registration Modal UI"];\nconsole.log("Total HTML & CSS Portfolio Projects Built:", projects.length);`,
        expectedKeyword: 'Total HTML & CSS Portfolio Projects Built: 3'
      }
    ]
  },

  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    badge: 'JS',
    color: '#F7DF1E',
    bgColor: 'rgba(247, 223, 30, 0.15)',
    textColor: '#d97706',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    tagline: 'Master JS in 14 Days (47 Videos) mapped to Wezlon Malayalam Playlists.',
    description: 'Complete 14-Day structured JavaScript roadmap: Beginner & Advanced Malayalam Playlists, Daily Practice, MCQs, 5 Terminal Labs/Day & 12+ Projects.',
    difficulty: 'Beginner Friendly',
    totalDays: 14,
    days: [
      {
        "day": 1,
        "title": "Day 1 – Setup, Variables & Operators",
        "unit": "Unit 1: JS",
        "topic": "JavaScript execution environments (Node.js & browser console), variable declarations (`var`, `let`, `const`), primitive types (string, number, boolean, null, undefined), arithmetic operators, and string interpolation via template literals.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 1–4 from the Beginner Playlist.",
        "whatToLearn": {
          "summary": "Learn about: JavaScript execution environments (Node.js & browser console), variable declarations (`var`, `let`, `const`), primitive types (string, number, boolean, null, undefined), arithmetic operators, and string interpolation via template literals.",
          "details": [
            "Install Node.js or open the browser console (`F12` -> Console).",
            "Declare variables using `let` and `const` and try reassigning them to observe error behavior.",
            "Practice string formatting using template literals instead of string concatenation.",
            "Run a `.js` file via terminal using `node index.js`."
          ],
          "codeExample": "// Day 1 Example"
        },
        "mcqQuestions": [
          {
            "question": "Which keyword creates a block-scoped variable that cannot be reassigned?",
            "options": [
              "`var`",
              "`let`",
              "`const`",
              "`static`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "What is the output of `typeof null` in JavaScript?",
            "options": [
              "`\"null\"`",
              "`\"undefined\"`",
              "`\"object\"`",
              "`\"number\"`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "What does ``Hello ${\"World\"}`` evaluate to?",
            "options": [
              "`\"Hello ${World}\"`",
              "`\"Hello World\"`",
              "SyntaxError",
              "`undefined`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Variable Swap",
            "prompt": "Swap values of two variables `a = 5` and `b = 10` using a temporary variable. Print results using `console.log()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Type Inspection",
            "prompt": "Log the data types of `42`, `\"JavaScript\"`, `true`, `undefined`, and `Symbol()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: BMI Calculator",
            "prompt": "Given `weight = 70` (kg) and `height = 1.75` (m), calculate BMI using $BMI = \\frac{weight}{height^2}$ and print using template literals.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Constants Test",
            "prompt": "Attempt to reassign a `const` variable inside a try-catch block and log the caught error message.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: String Template Formatter",
            "prompt": "Construct a string displaying a product name, price, and discounted price (10% off) formatted as a single log statement.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js1_t1",
            "text": "🎥 Watch Video: Videos 1–4 from the Beginner Playlist.",
            "completed": false
          },
          {
            "id": "js1_t2",
            "text": "✍️ Task: Install Node.js or open the browser console (`F12` -> Console).",
            "completed": false
          },
          {
            "id": "js1_t3",
            "text": "✍️ Task: Declare variables using `let` and `const` and try reassigning them to observe error behavior.",
            "completed": false
          },
          {
            "id": "js1_t4",
            "text": "✍️ Task: Practice string formatting using template literals instead of string concatenation.",
            "completed": false
          },
          {
            "id": "js1_t5",
            "text": "✍️ Task: Run a `.js` file via terminal using `node index.js`.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 2,
        "title": "Day 2 – Conditionals & Control Logic",
        "unit": "Unit 1: JS",
        "topic": "Decision-making using `if`, `else if`, `else`, logical operators (`&&`, `||`, `!`), truthy/falsy values, ternary operators, and `switch` statements.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 5–8 from the Beginner Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Decision-making using `if`, `else if`, `else`, logical operators (`&&`, `||`, `!`), truthy/falsy values, ternary operators, and `switch` statements.",
          "details": [
            "Test truthy and falsy values (`0`, `\"\"`, `null`, `undefined`, `NaN`) in `if` statements.",
            "Refactor nested `if-else` blocks into concise ternary expressions.",
            "Implement a `switch` statement with a `default` case fallback."
          ],
          "codeExample": "// Day 2 Example"
        },
        "mcqQuestions": [
          {
            "question": "Which of the following is NOT a falsy value in JavaScript?",
            "options": [
              "`0`",
              "`\"\"`",
              "`\"0\"`",
              "`NaN`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "What is the result of `5 > 3 && 2 < 1`?",
            "options": [
              "`true`",
              "`false`",
              "`null`",
              "`undefined`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What does `true ? \"Yes\" : \"No\"` evaluate to?",
            "options": [
              "`\"Yes\"`",
              "`\"No\"`",
              "`true`",
              "`false`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is A*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Grade Classifier",
            "prompt": "Write a score checker (`score = 85`) logging `\"A\"` (90+), `\"B\"` (80-89), `\"C\"` (70-79), or `\"F\"`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Leap Year Validator",
            "prompt": "Create logic to determine if a given year (`year = 2024`) is a leap year.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Falsy Filter",
            "prompt": "Write an `if` condition checking if a variable `userInput` is populated, logging `\"Valid\"` or `\"Empty\"`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Role Access Switch",
            "prompt": "Implement a `switch` statement checking `role = \"admin\" | \"editor\" | \"viewer\"` and logging access levels.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Ternary Discount",
            "prompt": "Use a nested ternary operator to set shipping cost: `$0` if order > $100, `$5` if premium user, otherwise `$10`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js2_t1",
            "text": "🎥 Watch Video: Videos 5–8 from the Beginner Playlist.",
            "completed": false
          },
          {
            "id": "js2_t2",
            "text": "✍️ Task: Test truthy and falsy values (`0`, `\"\"`, `null`, `undefined`, `NaN`) in `if` statements.",
            "completed": false
          },
          {
            "id": "js2_t3",
            "text": "✍️ Task: Refactor nested `if-else` blocks into concise ternary expressions.",
            "completed": false
          },
          {
            "id": "js2_t4",
            "text": "✍️ Task: Implement a `switch` statement with a `default` case fallback.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 3,
        "title": "Day 3 – Loops & Iteration",
        "unit": "Unit 1: JS",
        "topic": "Repeating code blocks using `for`, `while`, and `do-while` loops; flow control using `break` and `continue`.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 9–12 from the Beginner Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Repeating code blocks using `for`, `while`, and `do-while` loops; flow control using `break` and `continue`.",
          "details": [
            "Write a loop that counts up, counts down, and steps by custom increments.",
            "Use `break` to exit a loop early when a specific condition is met.",
            "Use `continue` to skip specific iterations in a loop."
          ],
          "codeExample": "// Day 3 Example"
        },
        "mcqQuestions": [
          {
            "question": "Which loop guarantees at least one execution of its code block?",
            "options": [
              "`for`",
              "`while`",
              "`do-while`",
              "`for...in`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "What does the `continue` keyword do in a loop?",
            "options": [
              "Terminates the entire loop.",
              "Skips the current iteration and moves to the next.",
              "Restarts the loop from index 0.",
              "Returns a value from the loop."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "How many times will `for(let i=0; i<5; i++)` run?",
            "options": [
              "4 times",
              "5 times",
              "6 times",
              "Infinite times"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Sum Accumulator",
            "prompt": "Compute the sum of all numbers from 1 to 100 using a `for` loop.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: FizzBuzz Classic",
            "prompt": "Print numbers 1 to 30. For multiples of 3 log `\"Fizz\"`, 5 log `\"Buzz\"`, both log `\"FizzBuzz\"`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Prime Checker",
            "prompt": "Write a loop checking if a number `num = 17` is prime.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Reverse Digit Counter",
            "prompt": "Print numbers 20 down to 1, skipping multiples of 4 using `continue`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Pattern Generator",
            "prompt": "Use nested loops to generate a right-angled triangle pattern of asterisks (`*`) 5 rows high.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js3_t1",
            "text": "🎥 Watch Video: Videos 9–12 from the Beginner Playlist.",
            "completed": false
          },
          {
            "id": "js3_t2",
            "text": "✍️ Task: Write a loop that counts up, counts down, and steps by custom increments.",
            "completed": false
          },
          {
            "id": "js3_t3",
            "text": "✍️ Task: Use `break` to exit a loop early when a specific condition is met.",
            "completed": false
          },
          {
            "id": "js3_t4",
            "text": "✍️ Task: Use `continue` to skip specific iterations in a loop.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 4,
        "title": "Day 4 – Functions & Scope",
        "unit": "Unit 1: JS",
        "topic": "Function declarations vs expressions, arrow functions, parameter defaults, return values, and global vs local scope.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 13–16 from the Beginner Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Function declarations vs expressions, arrow functions, parameter defaults, return values, and global vs local scope.",
          "details": [
            "Convert standard function declarations into ES6 arrow functions.",
            "Test accessing block-scoped variables outside their declared function scope.",
            "Write functions with default parameter values."
          ],
          "codeExample": "// Day 4 Example"
        },
        "mcqQuestions": [
          {
            "question": "What happens if a function lacks an explicit `return` statement?",
            "options": [
              "It throws a syntax error.",
              "It returns `null`.",
              "It returns `undefined`.",
              "It returns `0`."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "Which syntax correctly represents an arrow function?",
            "options": [
              "`function => () {}`",
              "`() => {}`",
              "`() -> {}`",
              "`def () {}`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "Can variables declared with `let` inside a function be accessed globally?",
            "options": [
              "Yes",
              "No",
              "Only inside loops",
              "Only if exported"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Temperature Converter",
            "prompt": "Write an arrow function `celsiusToFahrenheit(c)` returning the Fahrenheit equivalent.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Default Greeting",
            "prompt": "Create a function `greet(name = \"Guest\")` that returns a customized welcome string.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Pure Calculator",
            "prompt": "Write a function taking `(a, b, operation)` and returning the arithmetic result using a switch block.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Scope Shadowing",
            "prompt": "Demonstrate variable shadowing by declaring a global `let x = 10` and local `let x = 20` inside a function.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Factorial Recursive",
            "prompt": "Create a recursive function `factorial(n)` that returns $n!$.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js4_t1",
            "text": "🎥 Watch Video: Videos 13–16 from the Beginner Playlist.",
            "completed": false
          },
          {
            "id": "js4_t2",
            "text": "✍️ Task: Convert standard function declarations into ES6 arrow functions.",
            "completed": false
          },
          {
            "id": "js4_t3",
            "text": "✍️ Task: Test accessing block-scoped variables outside their declared function scope.",
            "completed": false
          },
          {
            "id": "js4_t4",
            "text": "✍️ Task: Write functions with default parameter values.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 5,
        "title": "Day 5 – String Manipulation",
        "unit": "Unit 1: JS",
        "topic": "Standard string properties and methods (`length`, `toUpperCase`, `toLowerCase`, `indexOf`, `slice`, `substring`, `trim`, `replace`, `split`, `join`).",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 17–20 from the Beginner Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Standard string properties and methods (`length`, `toUpperCase`, `toLowerCase`, `indexOf`, `slice`, `substring`, `trim`, `replace`, `split`, `join`).",
          "details": [
            "Extract substrings using `slice()` with positive and negative indices.",
            "Clean up whitespace and format text inputs using `trim()` and case converters.",
            "Convert strings into arrays and back into formatted strings."
          ],
          "codeExample": "// Day 5 Example"
        },
        "mcqQuestions": [
          {
            "question": "What does `\"hello\".slice(1, 4)` return?",
            "options": [
              "`\"hel\"`",
              "`\"ell\"`",
              "`\"ello\"`",
              "`\"llo\"`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "Which method splits a string into an array of substrings?",
            "options": [
              "`join()`",
              "`concat()`",
              "`split()`",
              "`slice()`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "Strings in JavaScript are immutable.",
            "options": [
              "True",
              "False"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is A*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Title Case Converter",
            "prompt": "Convert `\"javascript code\"` to `\"Javascript Code\"` using `split()`, `slice()`, and `join()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Palindrome Checker",
            "prompt": "Create a function that checks if a string read backward matches itself (ignoring case).",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Email Masker",
            "prompt": "Given `\"user@example.com\"`, output `\"u***@example.com\"`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Word Counter",
            "prompt": "Write a function counting total words in a sentence paragraph.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: URL Slugify",
            "prompt": "Convert `\"Modern JS Tutorial 2026!\"` into `\"modern-js-tutorial-2026\"`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js5_t1",
            "text": "🎥 Watch Video: Videos 17–20 from the Beginner Playlist.",
            "completed": false
          },
          {
            "id": "js5_t2",
            "text": "✍️ Task: Extract substrings using `slice()` with positive and negative indices.",
            "completed": false
          },
          {
            "id": "js5_t3",
            "text": "✍️ Task: Clean up whitespace and format text inputs using `trim()` and case converters.",
            "completed": false
          },
          {
            "id": "js5_t4",
            "text": "✍️ Task: Convert strings into arrays and back into formatted strings.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 6,
        "title": "Day 6 – Array Fundamentals & Mutating Methods",
        "unit": "Unit 1: JS",
        "topic": "Arrays, index manipulation, mutating methods (`push`, `pop`, `shift`, `unshift`, `splice`), non-mutating `slice()`, array destructuring, and spread operator (`...`).",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 21–22 from Beginner Playlist + Videos 1–3 from Advanced Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Arrays, index manipulation, mutating methods (`push`, `pop`, `shift`, `unshift`, `splice`), non-mutating `slice()`, array destructuring, and spread operator (`...`).",
          "details": [
            "Add and remove elements from both ends of an array using `push`/`pop` and `unshift`/`shift`.",
            "Use `splice()` to insert, remove, and replace items at arbitrary positions.",
            "Copy and merge arrays using the spread operator (`...`)."
          ],
          "codeExample": "// Day 6 Example"
        },
        "mcqQuestions": [
          {
            "question": "Which method removes the FIRST element from an array?",
            "options": [
              "`pop()`",
              "`shift()`",
              "`unshift()`",
              "`splice()`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What does `[1, 2, 3].concat([4, 5])` return?",
            "options": [
              "`[1, 2, 3, [4, 5]]`",
              "`[1, 2, 3, 4, 5]`",
              "`5`",
              "`[4, 5, 1, 2, 3]`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What is the result of `const [a, b] = [10, 20, 30]`?",
            "options": [
              "`a = 10, b = 20`",
              "`a = [10], b = [20, 30]`",
              "`a = 30, b = 20`",
              "SyntaxError"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is A*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Stack Operation Simulator",
            "prompt": "Implement LIFO stack behavior using an array with `push` and `pop`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Queue Simulator",
            "prompt": "Implement FIFO queue operations using `push` and `shift`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Splice Manager",
            "prompt": "Given `[\"Apple\", \"Banana\", \"Date\"]`, insert `\"Cherry\"` between `\"Banana\"` and `\"Date\"`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Array Merger",
            "prompt": "Merge two sorted arrays into one combined array using the spread operator and sort it.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Deduplicator",
            "prompt": "Write a function to remove duplicate elements from an array using `indexOf()` or `includes()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js6_t1",
            "text": "🎥 Watch Video: Videos 21–22 from Beginner Playlist + Videos 1–3 from Advanced Playlist.",
            "completed": false
          },
          {
            "id": "js6_t2",
            "text": "✍️ Task: Add and remove elements from both ends of an array using `push`/`pop` and `unshift`/`shift`.",
            "completed": false
          },
          {
            "id": "js6_t3",
            "text": "✍️ Task: Use `splice()` to insert, remove, and replace items at arbitrary positions.",
            "completed": false
          },
          {
            "id": "js6_t4",
            "text": "✍️ Task: Copy and merge arrays using the spread operator (`...`).",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 7,
        "title": "Day 7 – Modern Array Methods (Functional JS)",
        "unit": "Unit 1: JS",
        "topic": "Iterating and transforming data functionally using `forEach`, `map`, `filter`, `reduce`, `find`, `some`, and `every`.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 4–7 from the Advanced Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Iterating and transforming data functionally using `forEach`, `map`, `filter`, `reduce`, `find`, `some`, and `every`.",
          "details": [
            "Replace standard `for` loops with functional methods like `map` and `filter`.",
            "Aggregate complex dataset values using `reduce()`.",
            "Validate conditions across datasets using `some()` and `every()`."
          ],
          "codeExample": "// Day 7 Example"
        },
        "mcqQuestions": [
          {
            "question": "Which array method returns a NEW array with modified items?",
            "options": [
              "`forEach()`",
              "`map()`",
              "`filter()`",
              "`find()`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What does `[1, 2, 3].reduce((acc, curr) => acc + curr, 0)` evaluate to?",
            "options": [
              "`[1, 2, 3]`",
              "`6`",
              "`0`",
              "`undefined`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What does `find()` return if no match is found?",
            "options": [
              "`null`",
              "`[]`",
              "`undefined`",
              "`-1`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Square Numbers",
            "prompt": "Transform `[1, 2, 3, 4, 5]` into squares using `map()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Adult Filter",
            "prompt": "Given an array of age objects, use `filter()` to retrieve individuals aged 18+.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Cart Total Accumulator",
            "prompt": "Calculate total price from an array of cart items `{ price: number, qty: number }` using `reduce()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Inventory Search",
            "prompt": "Find the first item in an inventory array matching a specific item ID using `find()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Chain Operations",
            "prompt": "Filter an array for even numbers, square them with `map()`, and sum them with `reduce()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js7_t1",
            "text": "🎥 Watch Video: Videos 4–7 from the Advanced Playlist.",
            "completed": false
          },
          {
            "id": "js7_t2",
            "text": "✍️ Task: Replace standard `for` loops with functional methods like `map` and `filter`.",
            "completed": false
          },
          {
            "id": "js7_t3",
            "text": "✍️ Task: Aggregate complex dataset values using `reduce()`.",
            "completed": false
          },
          {
            "id": "js7_t4",
            "text": "✍️ Task: Validate conditions across datasets using `some()` and `every()`.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 8,
        "title": "Day 8 – Object-Oriented JS & Objects Deep Dive",
        "unit": "Unit 2: JS",
        "topic": "Object key-value pairs, computed properties, object methods, `this` binding context, object destructuring, `Object.keys()`, `Object.values()`, and `Object.entries()`.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 8–11 from the Advanced Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Object key-value pairs, computed properties, object methods, `this` binding context, object destructuring, `Object.keys()`, `Object.values()`, and `Object.entries()`.",
          "details": [
            "Construct complex nested objects and access properties via dot and bracket notations.",
            "Define methods within objects that utilize the `this` keyword.",
            "Iterate over object entries using `Object.entries()`."
          ],
          "codeExample": "// Day 8 Example"
        },
        "mcqQuestions": [
          {
            "question": "Which static method returns an array of an object's property names?",
            "options": [
              "`Object.values()`",
              "`Object.keys()`",
              "`Object.entries()`",
              "`Object.items()`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "Inside a standard object method, what does `this` typically refer to?",
            "options": [
              "The global window/process object",
              "The object itself",
              "The method function",
              "`undefined`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What is the syntax for object destructuring?",
            "options": [
              "`const [a, b] = obj`",
              "`const {a, b} = obj`",
              "`const (a, b) = obj`",
              "`const <a, b> = obj`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: User Profile Object",
            "prompt": "Create a user object with properties and a method `getSummary()` that returns a formatted description using `this`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Object Key Manipulator",
            "prompt": "Convert an object's keys to uppercase using `Object.keys()` and `reduce()`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Nested Destructuring",
            "prompt": "Extract nested values (`city`, `zip`) from a complex user address object in a single line.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Frequency Counter",
            "prompt": "Count character occurrences in a string using an object map.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Object Freeze Test",
            "prompt": "Use `Object.freeze()` on a settings configuration object and attempt to modify its properties.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js8_t1",
            "text": "🎥 Watch Video: Videos 8–11 from the Advanced Playlist.",
            "completed": false
          },
          {
            "id": "js8_t2",
            "text": "✍️ Task: Construct complex nested objects and access properties via dot and bracket notations.",
            "completed": false
          },
          {
            "id": "js8_t3",
            "text": "✍️ Task: Define methods within objects that utilize the `this` keyword.",
            "completed": false
          },
          {
            "id": "js8_t4",
            "text": "✍️ Task: Iterate over object entries using `Object.entries()`.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 9,
        "title": "Day 9 – DOM Selection & Element Manipulation",
        "unit": "Unit 2: JS",
        "topic": "The Browser DOM tree, `document` object, DOM query selectors (`getElementById`, `querySelector`, `querySelectorAll`), modifying text/HTML (`innerText`, `textContent`, `innerHTML`), and style/class manipulation (`classList.add`, `toggle`, `remove`).",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 12–15 from the Advanced Playlist.",
        "whatToLearn": {
          "summary": "Learn about: The Browser DOM tree, `document` object, DOM query selectors (`getElementById`, `querySelector`, `querySelectorAll`), modifying text/HTML (`innerText`, `textContent`, `innerHTML`), and style/class manipulation (`classList.add`, `toggle`, `remove`).",
          "details": [
            "Inspect web pages and query DOM nodes using browser developer tools.",
            "Dynamically set CSS classes using `element.classList.toggle()`.",
            "Create, attach, and remove DOM nodes using `document.createElement()` and `appendChild()`."
          ],
          "codeExample": "// Day 9 Example"
        },
        "mcqQuestions": [
          {
            "question": "Which DOM method returns the FIRST element matching a CSS selector?",
            "options": [
              "`querySelectorAll()`",
              "`getElementsByClassName()`",
              "`querySelector()`",
              "`getElementById()`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "What type of object does `querySelectorAll()` return?",
            "options": [
              "Array",
              "NodeList",
              "HTMLCollection",
              "Object"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "Which property safely sets text content without parsing raw HTML?",
            "options": [
              "`innerHTML`",
              "`outerHTML`",
              "`textContent`",
              "`srcText`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Virtual Node Creation",
            "prompt": "Create a script simulating element creation: construct an element object `{ tag, attributes, textContent }` and log its serialized HTML string.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Class Manager Utility",
            "prompt": "Write a function `toggleClass(element, className)` that adds or removes a class string in a virtual DOM object.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Selector Parser",
            "prompt": "Create a function simulating `querySelector()` that filters a list of mock DOM nodes by `#id` or `.class`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Tree Traversal",
            "prompt": "Traverse a nested mock DOM tree object and log all tag names recursively.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Attr Injector",
            "prompt": "Write a utility function that assigns an object of attributes `{ href: \"#\", target: \"_blank\" }` to a mock DOM element.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js9_t1",
            "text": "🎥 Watch Video: Videos 12–15 from the Advanced Playlist.",
            "completed": false
          },
          {
            "id": "js9_t2",
            "text": "✍️ Task: Inspect web pages and query DOM nodes using browser developer tools.",
            "completed": false
          },
          {
            "id": "js9_t3",
            "text": "✍️ Task: Dynamically set CSS classes using `element.classList.toggle()`.",
            "completed": false
          },
          {
            "id": "js9_t4",
            "text": "✍️ Task: Create, attach, and remove DOM nodes using `document.createElement()` and `appendChild()`.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 10,
        "title": "Day 10 – DOM Events & User Interactions",
        "unit": "Unit 2: JS",
        "topic": "Event listeners (`addEventListener`), click events, form submit/input events, keyboard events (`keyup`, `keydown`), event objects (`e.target`, `e.preventDefault()`), and event delegation.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 16–18 from the Advanced Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Event listeners (`addEventListener`), click events, form submit/input events, keyboard events (`keyup`, `keydown`), event objects (`e.target`, `e.preventDefault()`), and event delegation.",
          "details": [
            "Attach click and input event handlers to DOM elements.",
            "Prevent default form submission using `e.preventDefault()`.",
            "Implement event delegation by attaching a single event listener to a parent container."
          ],
          "codeExample": "// Day 10 Example"
        },
        "mcqQuestions": [
          {
            "question": "Which method stops a form's default page reload behavior on submission?",
            "options": [
              "`e.stopPropagation()`",
              "`e.preventDefault()`",
              "`e.stopImmediatePropagation()`",
              "`return false`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What is event delegation?",
            "options": [
              "Attaching listeners to every child element individually.",
              "Handling events on a parent element using event bubbling.",
              "Dispatching custom browser events.",
              "Removing unused listeners automatically."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "Which property gets the exact element that triggered the event?",
            "options": [
              "`e.currentTarget`",
              "`e.target`",
              "`e.srcElement`",
              "`e.origin`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Event Emitter Class",
            "prompt": "Write a custom `EventEmitter` class with `.on(event, callback)` and `.emit(event, data)` methods.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Form Validation State",
            "prompt": "Write a function taking a mock form input event `{ target: { name, value } }` and validating email format.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Key Combination Detector",
            "prompt": "Write a keyboard handler function that logs `\"Shortcut Activated\"` when `Ctrl + Enter` event data is received.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Event Delegation Simulator",
            "prompt": "Write a function handling parent container clicks and checking if `e.target.matches('.item-btn')`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Debounce Function",
            "prompt": "Build a `debounce(fn, delay)` wrapper function for high-frequency input events.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js10_t1",
            "text": "🎥 Watch Video: Videos 16–18 from the Advanced Playlist.",
            "completed": false
          },
          {
            "id": "js10_t2",
            "text": "✍️ Task: Attach click and input event handlers to DOM elements.",
            "completed": false
          },
          {
            "id": "js10_t3",
            "text": "✍️ Task: Prevent default form submission using `e.preventDefault()`.",
            "completed": false
          },
          {
            "id": "js10_t4",
            "text": "✍️ Task: Implement event delegation by attaching a single event listener to a parent container.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 11,
        "title": "Day 11 – Pure Coding — Dynamic DOM Mini Apps",
        "unit": "Unit 2: JS",
        "topic": "Hands-on application of DOM scripting, state management, array operations, and dynamic UI rendering.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Practice Sprint (Consolidating Videos 12–18).",
        "whatToLearn": {
          "summary": "Learn about: Hands-on application of DOM scripting, state management, array operations, and dynamic UI rendering.",
          "details": [
            "Design application state structures separate from UI DOM nodes.",
            "Implement render functions that reconcile state changes with DOM updates.",
            "Handle dynamic item creation, deletion, and status toggles."
          ],
          "codeExample": "// Day 11 Example"
        },
        "mcqQuestions": [
          {
            "question": "Why is separating UI logic from State management beneficial?",
            "options": [
              "It improves rendering speed.",
              "It makes code predictable, maintainable, and easier to debug.",
              "It is required by modern browsers.",
              "It prevents JS errors."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What is state in front-end development?",
            "options": [
              "The CSS layout structure.",
              "The underlying data driving what is displayed on screen.",
              "The user's operating system environment.",
              "Network status."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "When updating lists dynamically, why clear inner HTML or re-render?",
            "options": [
              "To prevent memory leaks and ensure UI syncs with current state data.",
              "To force CSS reload.",
              "To reset global variables.",
              "To refresh the web server."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is A*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Todo App State Engine",
            "prompt": "Build a CLI-based todo list manager maintaining an array state with actions: `addTodo`, `deleteTodo`, `toggleTodo`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Shopping Cart State Engine",
            "prompt": "Build a state engine with `addItem`, `removeItem`, `updateQty`, and total calculation logic.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Bookmark Manager Logic",
            "prompt": "Build logic to validate URLs, add bookmarks to state, and search bookmarks by tag.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Filtering Engine",
            "prompt": "Given a product dataset state, build a filter engine by category, minimum price, and rating.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Undo State History",
            "prompt": "Create an undo history stack array that allows restoring previous state snapshots.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js11_t1",
            "text": "🎥 Watch Video: Practice Sprint (Consolidating Videos 12–18).",
            "completed": false
          },
          {
            "id": "js11_t2",
            "text": "✍️ Task: Design application state structures separate from UI DOM nodes.",
            "completed": false
          },
          {
            "id": "js11_t3",
            "text": "✍️ Task: Implement render functions that reconcile state changes with DOM updates.",
            "completed": false
          },
          {
            "id": "js11_t4",
            "text": "✍️ Task: Handle dynamic item creation, deletion, and status toggles.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 12,
        "title": "Day 12 – Asynchronous JS, Promises & Fetch API",
        "unit": "Unit 2: JS",
        "topic": "Synchronous vs asynchronous execution, single-threaded Event Loop, Callbacks, Promise lifecycle (`pending`, `fulfilled`, `rejected`), `.then()`/`.catch()`, `async`/`await`, `try...catch`, and `fetch()`.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 19–22 from the Advanced Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Synchronous vs asynchronous execution, single-threaded Event Loop, Callbacks, Promise lifecycle (`pending`, `fulfilled`, `rejected`), `.then()`/`.catch()`, `async`/`await`, `try...catch`, and `fetch()`.",
          "details": [
            "Construct custom Promises using `new Promise((resolve, reject) => {})`.",
            "Refactor promise chains (`.then()`) into modern `async`/`await` syntax with `try...catch` blocks.",
            "Make HTTP requests to public REST APIs (e.g., JSONPlaceholder) using `fetch()`."
          ],
          "codeExample": "// Day 12 Example"
        },
        "mcqQuestions": [
          {
            "question": "What state is a Promise in initially before resolution or rejection?",
            "options": [
              "`fulfilled`",
              "`rejected`",
              "`pending`",
              "`settled`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "Which keyword pauses execution of an `async` function until a Promise settles?",
            "options": [
              "`wait`",
              "`pause`",
              "`await`",
              "`defer`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is C*"
          },
          {
            "question": "How do you handle errors in an `async`/`await` function?",
            "options": [
              "`.catch()` only",
              "`try...catch` blocks",
              "`onError` statement",
              "`if (error)`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Delay Helper",
            "prompt": "Create a function `delay(ms)` returning a promise that resolves after `ms` milliseconds using `setTimeout`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Mock API Fetcher",
            "prompt": "Simulate a network request returning user data after 1.5 seconds using Promises.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: Async Error Catcher",
            "prompt": "Write an `async` function calling a failing Promise inside `try...catch` and returning a fallback value.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: Parallel Fetcher",
            "prompt": "Use `Promise.all()` to simulate fetching users, products, and orders concurrently.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Fetch API Request",
            "prompt": "Write Node fetch code (or mock fetch) requesting data from `[https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)` and logging title.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js12_t1",
            "text": "🎥 Watch Video: Videos 19–22 from the Advanced Playlist.",
            "completed": false
          },
          {
            "id": "js12_t2",
            "text": "✍️ Task: Construct custom Promises using `new Promise((resolve, reject) => {})`.",
            "completed": false
          },
          {
            "id": "js12_t3",
            "text": "✍️ Task: Refactor promise chains (`.then()`) into modern `async`/`await` syntax with `try...catch` blocks.",
            "completed": false
          },
          {
            "id": "js12_t4",
            "text": "✍️ Task: Make HTTP requests to public REST APIs (e.g., JSONPlaceholder) using `fetch()`.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 13,
        "title": "Day 13 – ES6+ Modules & LocalStorage Persistence",
        "unit": "Unit 2: JS",
        "topic": "Modular JavaScript (`import` and `export` statements), browser Web Storage (`localStorage` and `sessionStorage`), JSON serialization (`JSON.stringify()`, `JSON.parse()`).",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Videos 23–25 from the Advanced Playlist.",
        "whatToLearn": {
          "summary": "Learn about: Modular JavaScript (`import` and `export` statements), browser Web Storage (`localStorage` and `sessionStorage`), JSON serialization (`JSON.stringify()`, `JSON.parse()`).",
          "details": [
            "Split helper utilities and core logic across separate JavaScript files using ES modules.",
            "Save and retrieve complex JS objects to/from `localStorage` using JSON parsing.",
            "Implement state persistence so application state survives browser refreshes."
          ],
          "codeExample": "// Day 13 Example"
        },
        "mcqQuestions": [
          {
            "question": "What data type does `localStorage` store all values as?",
            "options": [
              "Objects",
              "Strings",
              "Binary",
              "Any data type"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "Which method converts a JavaScript object into a JSON string?",
            "options": [
              "`JSON.parse()`",
              "`JSON.stringify()`",
              "`Object.toString()`",
              "`JSON.convert()`"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What is the default export syntax in ES modules?",
            "options": [
              "`export default functionName;`",
              "`export { functionName as default };`",
              "`module.exports.default = ...`",
              "Both A and B"
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is D*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Challenge 1: Storage Mock Class",
            "prompt": "Create a `MockLocalStorage` class implementing `getItem`, `setItem`, `removeItem`, and `clear`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Challenge 2: Safe JSON Parser",
            "prompt": "Write a wrapper function `safeJSONParse(str, fallback)` that handles malformed JSON without crashing.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Challenge 3: ES Module Exporter/Importer",
            "prompt": "Create module syntax samples defining named exports `add`, `subtract` and default export `Calculator`.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Challenge 4: State Persister",
            "prompt": "Build a state sync wrapper that saves state to mock storage on mutation and rehydrates on start.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Challenge 5: Session Expiry Simulator",
            "prompt": "Create storage helper logic that stores data alongside a expiration timestamp and invalidates stale data.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js13_t1",
            "text": "🎥 Watch Video: Videos 23–25 from the Advanced Playlist.",
            "completed": false
          },
          {
            "id": "js13_t2",
            "text": "✍️ Task: Split helper utilities and core logic across separate JavaScript files using ES modules.",
            "completed": false
          },
          {
            "id": "js13_t3",
            "text": "✍️ Task: Save and retrieve complex JS objects to/from `localStorage` using JSON parsing.",
            "completed": false
          },
          {
            "id": "js13_t4",
            "text": "✍️ Task: Implement state persistence so application state survives browser refreshes.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      },
      {
        "day": 14,
        "title": "Day 14 – Capstone Portfolio Sprint & Final Assessment",
        "unit": "Unit 2: JS",
        "topic": "End-to-end curriculum review, code optimization, debugging strategies, project architecture, and portfolio sprint.",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo",
        "videoBreakdown": "🎥 Portfolio Sprint & Review (No tutorial videos).",
        "whatToLearn": {
          "summary": "Learn about: End-to-end curriculum review, code optimization, debugging strategies, project architecture, and portfolio sprint.",
          "details": [
            "Review code written across all 13 days and refactor for consistency and ES6 cleanliness.",
            "Pick and complete 1 capstone project from the options below.",
            "Publish code to a GitHub repository with a documentation `README.md`."
          ],
          "codeExample": "// Day 14 Example"
        },
        "mcqQuestions": [
          {
            "question": "What is the primary benefit of writing modular, clean JavaScript?",
            "options": [
              "Faster engine execution.",
              "Scalability, maintainability, reusability, and ease of testing.",
              "Automatic error resolution.",
              "Smaller file downloads."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "What does the Event Loop handle in JavaScript?",
            "options": [
              "CPU multithreading.",
              "Executing callbacks from asynchronous tasks when the call stack clears.",
              "Compiling code into machine bytecode.",
              "Garbage collection only."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is B*"
          },
          {
            "question": "Which statement best describes `closures` in JS?",
            "options": [
              "A function bundled together with references to its surrounding lexical environment.",
              "Closing a browser tab safely.",
              "Terminating an execution loop.",
              "Encapsulating styling rules inside DOM nodes."
            ],
            "answerIndex": 0,
            "explanation": "Correct answer is A*"
          }
        ],
        "terminalChallenges": [
          {
            "id": 1,
            "title": "Project 1: Weather App Engine",
            "prompt": "Build a Weather CLI / API client using `async/await` and `fetch` to retrieve weather for a query city.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 2,
            "title": "Project 2: Expense Tracker Core",
            "prompt": "Build an expense tracking state machine calculating total income, total expenses, net balance, and filtering by category.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 3,
            "title": "Project 3: Interactive Quiz App Logic",
            "prompt": "Construct a dynamic quiz engine tracking score, current question index, correct answers, and final score report.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 4,
            "title": "Project 4: Movie Search Finder",
            "prompt": "Implement an API integration querying Open Movie Database / TMDb API with debounce searching.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          },
          {
            "id": 5,
            "title": "Project 5: Habit / Routine Tracker",
            "prompt": "Build a habit tracking engine managing streak counts, completion timestamps, local persistence, and daily resetting.",
            "starterCode": "// Write your code here",
            "expectedKeyword": "Success"
          }
        ],
        "tasks": [
          {
            "id": "js14_t1",
            "text": "🎥 Watch Video: Portfolio Sprint & Review (No tutorial videos).",
            "completed": false
          },
          {
            "id": "js14_t2",
            "text": "✍️ Task: Review code written across all 13 days and refactor for consistency and ES6 cleanliness.",
            "completed": false
          },
          {
            "id": "js14_t3",
            "text": "✍️ Task: Pick and complete 1 capstone project from the options below.",
            "completed": false
          },
          {
            "id": "js14_t4",
            "text": "✍️ Task: Publish code to a GitHub repository with a documentation `README.md`.",
            "completed": false
          }
        ],
        "starterCode": "// Starter",
        "expectedKeyword": "Starter"
      }
    ]
  },
  {
  "id": "python",
  "name": "Python Mastery",
  "icon": "\ud83d\udc0d",
  "badge": "Python 3.12",
  "color": "#3776AB",
  "bgColor": "rgba(55, 118, 171, 0.15)",
  "textColor": "#2563eb",
  "gradient": "linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)",
  "tagline": "21-Day Gamified Python Roadmap with Bro Code English Course.",
  "description": "Master Python 3.12 fundamentals, math logic, string methods, data structures (lists, tuples, dicts, sets), OOP, file I/O, threading, REST APIs, and PyQt5 desktop capstone applications.",
  "difficulty": "Beginner \u2192 Professional",
  "totalDays": 21,
  "days": [
    {
      "day": 1,
      "title": "Day 1 \u2013 Setup, Variables, Typecasting & Inputs",
      "unit": "Unit 1: Fundamentals & Interaction",
      "topic": "Setup, Variables, Data Types (int, float, str, bool), Typecasting & input()",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code English ( 00:00:00 \u2013 00:32:41)",
      "whatToLearn": {
        "summary": "Install Python/PyCharm. Master variables, data types (int, float, str, bool), typecasting, print() f-strings, and input() user interaction.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code English Video (00:00:00 \u2013 00:32:41)",
          "Declare variables with dynamic typing in Python",
          "Perform explicit typecasting with int(), float(), and str()",
          "Format output string variables cleanly with f-strings f'Hello {name}'",
          "Build interactive terminal inputs with input()"
        ],
        "codeExample": "name = 'Aman'\nage = 20\nheight = 1.75\nis_student = True\n\nprint(f'User: {name}, Age: {age}, Height: {height}m, Student: {is_student}')\n\n# User Input & Typecasting\nage_input = input('Enter your age: ')\nnext_age = int(age_input) + 5\nprint(f'In 5 years, you will be {next_age} years old!')"
      },
      "mcqQuestions": [
        {
          "question": "What is the default data type returned by the built-in input() function?",
          "options": [
            "int",
            "float",
            "str",
            "bool"
          ],
          "answerIndex": 2,
          "explanation": "input() always returns user input as a string (str)."
        },
        {
          "question": "What does int(7.89) evaluate to in Python?",
          "options": [
            "8",
            "7",
            "7.0",
            "TypeError"
          ],
          "answerIndex": 1,
          "explanation": "int() truncates decimal values towards zero, returning integer 7."
        },
        {
          "question": "Which string formatting syntax is used in print(f'Hello {name}')?",
          "options": [
            "%-formatting",
            ".format()",
            "F-strings",
            "String concatenation"
          ],
          "answerIndex": 2,
          "explanation": "f'...' represents Python 3.6+ f-string literal interpolation."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Declare Profile & Output",
          "prompt": "Declare `name = 'Aman'` and `age = 20`. Print `Valid User Profile Logged!` using an f-string.",
          "starterCode": "# TODO: Declare name and age variables\nname = 'Aman'\nage = 20\n\n# TODO: Print message using f-string containing 'Valid User Profile Logged!'\n",
          "expectedKeyword": "Valid User Profile Logged!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Tuple Unpacking Variable Swap",
          "prompt": "Swap `a = 5` and `b = 10` using `a, b = b, a`. Print `Variable Swap Completed!`.",
          "starterCode": "a = 5\nb = 10\n\n# TODO: Swap a and b using tuple unpacking (a, b = b, a)\n\n# TODO: Print 'Variable Swap Completed!'\n",
          "expectedKeyword": "Variable Swap Completed!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Rectangle Area Calculator",
          "prompt": "Calculate rectangle area for `length = 5.5` and `width = 4.0`. Print `Area Calculated!`.",
          "starterCode": "length = 5.5\nwidth = 4.0\n\n# TODO: Calculate area = length * width\n\n# TODO: Print 'Area Calculated!'\n",
          "expectedKeyword": "Area Calculated!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Float to Int Typecasting",
          "prompt": "Convert float `3.99` to an integer via `int()`. Print `Typecast Verified!`.",
          "starterCode": "val = 3.99\n\n# TODO: Typecast val using int()\n\n# TODO: Print 'Typecast Verified!'\n",
          "expectedKeyword": "Typecast Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: User Input Profile Formatter",
          "prompt": "Construct a profile string from user input variables. Print `Input Profile Verified!`.",
          "starterCode": "user = 'Aman'\nrole = 'Dev'\n\n# TODO: Print message containing 'Input Profile Verified!' using f-string\n",
          "expectedKeyword": "Input Profile Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py1_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py1_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code English ( 00:00:00 \u2013 00:32:41)",
          completed: false
        },
        {
          "id": "py1_t3",
          "text": "\u270d\ufe0f Task 1: Declare str, int, float, bool variables and log via f-strings (+20 XP)",
          completed: false
        },
        {
          "id": "py1_t4",
          "text": "\u270d\ufe0f Task 2: Typecast user input() into integer & compute age in 5 years (+20 XP)",
          completed: false
        },
        {
          "id": "py1_t5",
          "text": "\u2753 Practice 1: Build a rectangle area calculator with float(input()) (+20 XP)",
          completed: false
        },
        {
          "id": "py1_t6",
          "text": "\u2753 Practice 2: Build a shopping cart total checkout calculator (+20 XP)",
          completed: false
        },
        {
          "id": "py1_t7",
          "text": "\ud83d\ude80 Mini-Project: Terminal Mad Libs Generator (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "# Write your Python solution here\nname = 'Aman'\nage = 20\nprint(f'User: {name}, Age: {age}. Valid User Profile Logged!')",
      "expectedKeyword": "Valid User Profile Logged!"
    },
    {
      "day": 2,
      "title": "Day 2 \u2013 Arithmetic, Math Module & Decision Making",
      "unit": "Unit 2: Math & Conditionals",
      "topic": "Arithmetic, math module (sqrt, ceil), if, elif, else",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code English ( 00:32:42 \u2013 01:00:06)",
      "whatToLearn": {
        "summary": "Master arithmetic operators, augmented assignment (+=), math module functions (sqrt, ceil), and conditional decision trees (if, elif, else).",
        "details": [
          "\ud83c\udfa5 Watch Bro Code English Video (00:32:42 \u2013 01:00:06)",
          "Use math functions: math.sqrt(), math.ceil(), math.floor()",
          "Apply modulo % and floor division // for calculations",
          "Construct decision branching trees with if, elif, and else"
        ],
        "codeExample": "import math\n\na = 3\nb = 4\nc = math.sqrt(a**2 + b**2)\nprint(f'Hypotenuse: {c}')\n\nage = 20\nif age >= 21:\n    print('Access Granted: Full Member')\nelif age >= 18:\n    print('Access Granted: Standard Member')\nelse:\n    print('Access Denied')"
      },
      "mcqQuestions": [
        {
          "question": "Which operator calculates the remainder of a division operation in Python?",
          "options": [
            "/",
            "//",
            "%",
            "**"
          ],
          "answerIndex": 2,
          "explanation": "The modulo operator % returns the division remainder."
        },
        {
          "question": "What is the output of math.ceil(4.1)?",
          "options": [
            "4",
            "5",
            "4.0",
            "5.0"
          ],
          "answerIndex": 1,
          "explanation": "math.ceil() rounds floating point numbers up to the nearest integer 5."
        },
        {
          "question": "How does Python indicate a code block inside an if statement?",
          "options": [
            "Curly braces {}",
            "Parentheses ()",
            "Indentation (spaces/tabs)",
            "end keyword"
          ],
          "answerIndex": 2,
          "explanation": "Python uses indentation (4 spaces) to define execution blocks."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Math Hypotenuse Calculation",
          "prompt": "Calculate hypotenuse for a=3, b=4 using math.sqrt(). Print `Hypotenuse Calculated!`.",
          "starterCode": "import math\na, b = 3, 4\n\n# TODO: Compute c = math.sqrt(a**2 + b**2)\n\n# TODO: Print 'Hypotenuse Calculated!'\n",
          "expectedKeyword": "Hypotenuse Calculated!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Math Ceil Rounding",
          "prompt": "Round 4.1 up using math.ceil(). Print `Ceil Verified!`.",
          "starterCode": "import math\nval = 4.1\n\n# TODO: Apply math.ceil(val)\n\n# TODO: Print 'Ceil Verified!'\n",
          "expectedKeyword": "Ceil Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Age Verification Branching",
          "prompt": "Check if age = 20 is >= 18. Print `Access Granted!`.",
          "starterCode": "age = 20\n\n# TODO: Check if age >= 18 and print 'Access Granted!'\n",
          "expectedKeyword": "Access Granted!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Modulo Remainder Test",
          "prompt": "Test 17 % 5 remainder. Print `Modulo Verified!`.",
          "starterCode": "num = 17\n\n# TODO: Calculate rem = num % 5\n\n# TODO: Print 'Modulo Verified!'\n",
          "expectedKeyword": "Modulo Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Credit Card Portal Approval",
          "prompt": "Branch score = 750 >= 700. Print `Credit Approved!`.",
          "starterCode": "score = 750\n\n# TODO: Check if score >= 700 and print 'Credit Approved!'\n",
          "expectedKeyword": "Credit Approved!"
        }
      ],
      "tasks": [
        {
          "id": "py2_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py2_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code English ( 00:32:42 \u2013 01:00:06)",
          completed: false
        },
        {
          "id": "py2_t3",
          "text": "\u270d\ufe0f Task: Solve hypotenuse calculation c = sqrt(a\u00b2 + b\u00b2) using math.sqrt() (+30 XP)",
          completed: false
        },
        {
          "id": "py2_t4",
          "text": "\ud83d\ude80 Mini-Project: Age Verification & Credit Card Sign-Up Portal (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "import math\na, b = 3, 4\nc = math.sqrt(a**2 + b**2)\nprint(f'Hypotenuse: {c}. Hypotenuse Calculated!')",
      "expectedKeyword": "Hypotenuse Calculated!"
    },
    {
      "day": 3,
      "title": "Day 3 \u2013 Logic & Branching Projects Sprint",
      "unit": "Unit 3: Applied Decision Logic",
      "topic": "Multi-Operator Calculator, Weight Converter & Temperature Converter",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (01:00:07 \u2013 01:13:57) | Practice Projects Sprint",
      "whatToLearn": {
        "summary": "Apply conditional branching to real-world math logic: multi-operator calculator (+ - * /), Lbs to Kgs converter, and Celsius to Fahrenheit converter.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (01:00:07 \u2013 01:13:57) & Practice Projects Sprint",
          "Build multi-operator arithmetic branching selector",
          "Implement unit toggling logic for weight conversion",
          "Convert temperature formulas with rounding"
        ],
        "codeExample": "# Weight Converter\nweight = 160.0\nunit = 'L'\nif unit.upper() == 'L':\n    converted = weight * 0.453592\n    print(f'{weight} Lbs is {converted:.2f} Kgs')\nelif unit.upper() == 'K':\n    converted = weight / 0.453592\n    print(f'{weight} Kgs is {converted:.2f} Lbs')"
      },
      "mcqQuestions": [
        {
          "question": "What happens if a user inputs 'K' into an equality check expecting uppercase 'K' when using .upper()?",
          "options": [
            "ValueError",
            "Evaluates to True",
            "Evaluates to False",
            "Converts to lowercase"
          ],
          "answerIndex": 1,
          "explanation": ".upper() converts string 'k' to 'K', making 'K' == 'K' evaluate to True."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Calculator Selector",
          "prompt": "Evaluate op = '+' for 10 and 5. Print `Calculator Operation Complete!`.",
          "starterCode": "a, b, op = 10, 5, '+'\n\n# TODO: Perform addition if op == '+'\n\n# TODO: Print 'Calculator Operation Complete!'\n",
          "expectedKeyword": "Calculator Operation Complete!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Weight Lbs to Kgs",
          "prompt": "Convert 100 Lbs to Kgs (100 * 0.453592). Print `Weight Converted!`.",
          "starterCode": "weight_lbs = 100\n\n# TODO: Convert to kgs\n\n# TODO: Print 'Weight Converted!'\n",
          "expectedKeyword": "Weight Converted!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Temp Celsius to Fahrenheit",
          "prompt": "Convert 30\u00b0C to \u00b0F (30 * 9/5 + 32). Print `Temperature Converted!`.",
          "starterCode": "celsius = 30\n\n# TODO: Compute fahrenheit\n\n# TODO: Print 'Temperature Converted!'\n",
          "expectedKeyword": "Temperature Converted!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Upper Case Unit Normalizer",
          "prompt": "Normalize unit 'k'.upper(). Print `Unit Normalized!`.",
          "starterCode": "u = 'k'.upper()\n\n# TODO: Print 'Unit Normalized!'\n",
          "expectedKeyword": "Unit Normalized!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Division by Zero Safety",
          "prompt": "Handle b = 0 safely in division. Print `Zero Check Passed!`.",
          "starterCode": "b = 0\n\n# TODO: Check if b != 0 before dividing, print 'Zero Check Passed!'\n",
          "expectedKeyword": "Zero Check Passed!"
        }
      ],
      "tasks": [
        {
          "id": "py3_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py3_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (01:00:07 \u2013 01:13:57) (+20 XP)",
          completed: false
        },
        {
          "id": "py3_t3",
          "text": "\ud83d\ude80 Build Calculator: Multi-operator selector with division safety (+40 XP)",
          completed: false
        },
        {
          "id": "py3_t4",
          "text": "\ud83d\ude80 Build Weight Converter: Lbs <-> Kgs unit toggles (+40 XP)",
          completed: false
        },
        {
          "id": "py3_t5",
          "text": "\ud83d\ude80 Build Temperature Converter: \u00b0C <-> \u00b0F formulas (+40 XP)",
          completed: false
        }
      ],
      "starterCode": "op = '+'\nif op == '+': print('Calculator Operation Complete!')",
      "expectedKeyword": "Calculator Operation Complete!"
    },
    {
      "day": 4,
      "title": "Day 4 \u2013 Logical & Conditional Expressions",
      "unit": "Unit 4: Advanced Boolean Operations",
      "topic": "Logical operators (and, or, not) & Python Ternary expressions",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (01:13:58 \u2013 01:27:02)",
      "whatToLearn": {
        "summary": "Master logical operators (and, or, not) and rewrite multi-line conditional blocks into concise 1-line Python ternary expressions `X if condition else Y`.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (01:13:58 \u2013 01:27:02)",
          "Combine multiple boolean conditions with `and`, `or`, `not`",
          "Understand short-circuit evaluation logic",
          "Write concise single-line conditional assignments `status = 'Adult' if age >= 18 else 'Minor'`"
        ],
        "codeExample": "temp = 25\nis_sunny = True\nif temp > 20 and is_sunny:\n    print('Perfect weather for outdoor activities!')\n\nage = 20\nstatus = 'Adult' if age >= 18 else 'Minor'\nprint(f'Status: {status}')"
      },
      "mcqQuestions": [
        {
          "question": "What does not True or False evaluate to?",
          "options": [
            "True",
            "False",
            "None",
            "SyntaxError"
          ],
          "answerIndex": 1,
          "explanation": "not True evaluates to False. False or False evaluates to False."
        },
        {
          "question": "Which expression correctly implements a Python ternary operator?",
          "options": [
            "condition ? x : y",
            "x if condition else y",
            "if condition then x else y",
            "(condition) -> x : y"
          ],
          "answerIndex": 1,
          "explanation": "Python uses the syntax `x if condition else y` for ternary conditional expressions."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Ternary Conditional Assignment",
          "prompt": "Assign status = 'Adult' if age >= 18 else 'Minor' for age=20. Print `Ternary Assignment Passed!`.",
          "starterCode": "age = 20\n\n# TODO: Assign status using single-line ternary expression\n\n# TODO: Print 'Ternary Assignment Passed!'\n",
          "expectedKeyword": "Ternary Assignment Passed!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Logical AND Expression",
          "prompt": "Evaluate temp > 20 and is_sunny. Print `Logical AND Passed!`.",
          "starterCode": "temp = 25\nis_sunny = True\n\n# TODO: Check both conditions\n\n# TODO: Print 'Logical AND Passed!'\n",
          "expectedKeyword": "Logical AND Passed!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Logical NOT Operation",
          "prompt": "Evaluate not is_closed for is_closed = False. Print `Logical NOT Passed!`.",
          "starterCode": "is_closed = False\n\n# TODO: Check not is_closed\n\n# TODO: Print 'Logical NOT Passed!'\n",
          "expectedKeyword": "Logical NOT Passed!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Multi-Condition Access Gate",
          "prompt": "Check has_ticket and is_verified. Print `Access Gate Verified!`.",
          "starterCode": "has_ticket = True\nis_verified = True\n\n# TODO: Check ticket and verification\n\n# TODO: Print 'Access Gate Verified!'\n",
          "expectedKeyword": "Access Gate Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Pass/Fail Ternary Test",
          "prompt": "Set result = 'Pass' if marks >= 50 else 'Fail'. Print `Pass/Fail Ternary Passed!`.",
          "starterCode": "marks = 75\n\n# TODO: Set result using ternary operator\n\n# TODO: Print 'Pass/Fail Ternary Passed!'\n",
          "expectedKeyword": "Pass/Fail Ternary Passed!"
        }
      ],
      "tasks": [
        {
          "id": "py4_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py4_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (01:13:58 \u2013 01:27:02)",
          completed: false
        },
        {
          "id": "py4_t3",
          "text": "\u270d\ufe0f Task: Refactor an 8-line if/else block into a 1-line conditional expression (+30 XP)",
          completed: false
        },
        {
          "id": "py4_t4",
          "text": "\ud83d\ude80 Mini-Project: User Access Control System (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "age = 20\nstatus = 'Adult' if age >= 18 else 'Minor'\nprint(f'Status: {status}. Ternary Assignment Passed!')",
      "expectedKeyword": "Ternary Assignment Passed!"
    },
    {
      "day": 5,
      "title": "Day 5 \u2013 String Methods, Indexing & Format Specifiers",
      "unit": "Unit 5: String Processing & Formatting",
      "topic": "String methods (.find, .upper, .isnumeric), Slicing [::-1], Format specifiers (:.2f)",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (01:27:03 \u2013 01:51:56)",
      "whatToLearn": {
        "summary": "Master string methods (.find, .rfind, .capitalize, .upper, .isnumeric), slicing [start:stop:step], negative index slicing [-4:], and format specifiers (:.2f, :10, 02d).",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (01:27:03 \u2013 01:51:56)",
          "Extract string slices using [start:stop:step] and reverse strings s[::-1]",
          "Clean user input with .strip(), .lower(), .upper(), and validate with .isnumeric()",
          "Format currency and floating numbers using specifiers like :.2f"
        ],
        "codeExample": "card_num = '1234-5678-9012-3456'\nlast_four = card_num[-4:]\nprint(f'Masked Card: XXXX-XXXX-XXXX-{last_four}')\n\nprice = 49.99\nprint(f'Price: ${price:10.2f}')"
      },
      "mcqQuestions": [
        {
          "question": "What is returned by 'Python'[::-1]?",
          "options": [
            "P",
            "nohtyP",
            "Python",
            "IndexError"
          ],
          "answerIndex": 1,
          "explanation": "'Python'[::-1] reverses the string, returning 'nohtyP'."
        },
        {
          "question": "Which format specifier formats floating-point numbers to two decimal places?",
          "options": [
            ":2f",
            ":.2f",
            "%2f",
            "&.2f"
          ],
          "answerIndex": 1,
          "explanation": ":.2f formats float values to 2 decimal precision."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Negative String Slicing",
          "prompt": "Extract last 4 chars of '12345678' using card_num[-4:]. Print `Negative Slicing Verified!`.",
          "starterCode": "card_num = '12345678'\n\n# TODO: Extract last 4 chars using card_num[-4:]\n\n# TODO: Print 'Negative Slicing Verified!'\n",
          "expectedKeyword": "Negative Slicing Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: String Reversal Slicing",
          "prompt": "Reverse string 'Python' using [::-1]. Print `String Reversed!`.",
          "starterCode": "text = 'Python'\n\n# TODO: Reverse text using [::-1]\n\n# TODO: Print 'String Reversed!'\n",
          "expectedKeyword": "String Reversed!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Float Two-Decimal Formatting",
          "prompt": "Format price 49.99 using f'{price:.2f}'. Print `Format Specifier Verified!`.",
          "starterCode": "price = 49.99\n\n# TODO: Format price to 2 decimal places\n\n# TODO: Print 'Format Specifier Verified!'\n",
          "expectedKeyword": "Format Specifier Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Username Isnumeric Validator",
          "prompt": "Check if '1234'.isnumeric(). Print `Numeric Check Passed!`.",
          "starterCode": "val = '1234'\n\n# TODO: Verify val.isnumeric()\n\n# TODO: Print 'Numeric Check Passed!'\n",
          "expectedKeyword": "Numeric Check Passed!"
        },
        {
          "id": 5,
          "title": "Challenge 5: String Strip Whitespace",
          "prompt": "Strip whitespace from '  admin  '. Print `Strip Verified!`.",
          "starterCode": "user = '  admin  '\n\n# TODO: Strip user string\n\n# TODO: Print 'Strip Verified!'\n",
          "expectedKeyword": "Strip Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py5_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py5_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (01:27:03 \u2013 01:51:56)",
          completed: false
        },
        {
          "id": "py5_t3",
          "text": "\u270d\ufe0f Task: Extract the last 4 digits of a credit card number using negative slicing [-4:] (+30 XP)",
          completed: false
        },
        {
          "id": "py5_t4",
          "text": "\ud83d\ude80 Mini-Project: Username Validator CLI & Currency Formatter (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "text = 'Python'\nrev = text[::-1]\nprint(f'Reversed: {rev}. String Reversed!')",
      "expectedKeyword": "String Reversed!"
    },
    {
      "day": 6,
      "title": "Day 6 \u2013 Iteration with while Loops & Compound Interest",
      "unit": "Unit 6: Indefinite Iteration",
      "topic": "while loop conditions, sentinel loops, break statements & compound interest",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (01:51:57 \u2013 02:06:27)",
      "whatToLearn": {
        "summary": "Master indefinite iteration using while loops, avoid infinite loop traps, reprompt for valid positive input, and build a compound interest calculator.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (01:51:57 \u2013 02:06:27)",
          "Construct while loops with terminating sentinel conditions",
          "Use break to exit loops upon meeting stopping criteria",
          "Simulate multi-year financial growth compound interest math"
        ],
        "codeExample": "principal = 1000\nrate = 0.05\nyears = 3\n\ni = 1\nwhile i <= years:\n    principal += principal * rate\n    print(f'Year {i}: ${principal:.2f}')\n    i += 1"
      },
      "mcqQuestions": [
        {
          "question": "How do you force exit from a while loop prematurely?",
          "options": [
            "continue",
            "pass",
            "break",
            "exit()"
          ],
          "answerIndex": 2,
          "explanation": "The break keyword immediately terminates the enclosing while loop."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: While Loop Counter",
          "prompt": "Increment count from 1 to 3 using while loop. Print `While Loop Finished!`.",
          "starterCode": "count = 1\n\n# TODO: Loop while count <= 3 and increment count\n\n# TODO: Print 'While Loop Finished!'\n",
          "expectedKeyword": "While Loop Finished!"
        },
        {
          "id": 2,
          "title": "Challenge 2: While Break Sentinel Test",
          "prompt": "Break loop when val == 5. Print `Break Sentinel Passed!`.",
          "starterCode": "val = 1\n\n# TODO: Loop while val < 10, break if val == 5\n\n# TODO: Print 'Break Sentinel Passed!'\n",
          "expectedKeyword": "Break Sentinel Passed!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Compound Interest Year Accumulation",
          "prompt": "Accumulate 1000 * 1.05 for 2 years. Print `Compound Accumulation Complete!`.",
          "starterCode": "p = 1000\nr = 0.05\n\n# TODO: Accumulate p += p * r over 2 iterations\n\n# TODO: Print 'Compound Accumulation Complete!'\n",
          "expectedKeyword": "Compound Accumulation Complete!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Input Reprompt Validation Loop",
          "prompt": "Simulate positive input validation. Print `Input Validation Passed!`.",
          "starterCode": "num = 10\n\n# TODO: Verify num > 0\n\n# TODO: Print 'Input Validation Passed!'\n",
          "expectedKeyword": "Input Validation Passed!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Countdown While Loop",
          "prompt": "Countdown from 3 to 1. Print `Countdown Finished!`.",
          "starterCode": "timer = 3\n\n# TODO: Decrement timer while timer > 0\n\n# TODO: Print 'Countdown Finished!'\n",
          "expectedKeyword": "Countdown Finished!"
        }
      ],
      "tasks": [
        {
          "id": "py6_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py6_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (01:51:57 \u2013 02:06:27)",
          completed: false
        },
        {
          "id": "py6_t3",
          "text": "\u270d\ufe0f Task: Write a while loop that reprompts until positive numerical input is entered (+30 XP)",
          completed: false
        },
        {
          "id": "py6_t4",
          "text": "\ud83d\ude80 Mini-Project: Financial Compound Interest Simulator (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "count = 1\nwhile count <= 3:\n    count += 1\nprint('While Loop Finished!')",
      "expectedKeyword": "While Loop Finished!"
    },
    {
      "day": 7,
      "title": "Day 7 \u2013 For Loops, Countdown Timers & Nested Loops",
      "unit": "Unit 7: Definite Iteration & Grid Patterns",
      "topic": "for loops, range(), reversed(), time.sleep() & nested loops",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (02:06:28 \u2013 02:23:04)",
      "whatToLearn": {
        "summary": "Master definite iteration with for loops over range(), reverse sequences with reversed(), loop delays with time.sleep(), and 2D grid matrix patterns.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (02:06:28 \u2013 02:23:04)",
          "Iterate with range(start, stop, step) and reversed(range())",
          "Skip iterations with continue and exit loops with break",
          "Print 2D grid coordinates using nested loops"
        ],
        "codeExample": "for row in range(1, 4):\n    for col in range(1, 4):\n        print(f'({row},{col})', end=' ')\n    print()"
      },
      "mcqQuestions": [
        {
          "question": "What values are generated by range(5, 0, -1)?",
          "options": [
            "5, 4, 3, 2, 1",
            "5, 4, 3, 2, 1, 0",
            "0, 1, 2, 3, 4, 5",
            "4, 3, 2, 1"
          ],
          "answerIndex": 0,
          "explanation": "range(5, 0, -1) starts at 5 and counts down to 1 (excluding stop value 0)."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Range Step Loop",
          "prompt": "Loop range(5, 0, -1). Print `Range Countdown Verified!`.",
          "starterCode": "# TODO: Loop range(5, 0, -1)\n\n# TODO: Print 'Range Countdown Verified!'\n",
          "expectedKeyword": "Range Countdown Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Nested Grid Matrix Loop",
          "prompt": "Print 2x2 grid using nested loops. Print `Grid Rendered!`.",
          "starterCode": "# TODO: Write nested loops for row in range(2) and col in range(2)\n\n# TODO: Print 'Grid Rendered!'\n",
          "expectedKeyword": "Grid Rendered!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Continue Statement Test",
          "prompt": "Skip i == 3 in range(1, 6) using continue. Print `Continue Statement Verified!`.",
          "starterCode": "# TODO: Loop range(1, 6), continue if i == 3\n\n# TODO: Print 'Continue Statement Verified!'\n",
          "expectedKeyword": "Continue Statement Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Reversed Range Iteration",
          "prompt": "Iterate reversed(range(1, 4)). Print `Reversed Iteration Complete!`.",
          "starterCode": "# TODO: Loop reversed(range(1, 4))\n\n# TODO: Print 'Reversed Iteration Complete!'\n",
          "expectedKeyword": "Reversed Iteration Complete!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Cumulative Sum Range Loop",
          "prompt": "Sum numbers in range(1, 6). Print `Cumulative Sum Verified!`.",
          "starterCode": "total = 0\n\n# TODO: Accumulate total += i for range(1, 6)\n\n# TODO: Print 'Cumulative Sum Verified!'\n",
          "expectedKeyword": "Cumulative Sum Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py7_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py7_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (02:06:28 \u2013 02:23:04)",
          completed: false
        },
        {
          "id": "py7_t3",
          "text": "\u270d\ufe0f Task: Print a grid pattern of rows and columns using nested loops (+30 XP)",
          completed: false
        },
        {
          "id": "py7_t4",
          "text": "\ud83d\ude80 Mini-Project: Terminal Countdown Clock App (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "for i in range(5, 0, -1):\n    pass\nprint('Range Countdown Verified!')",
      "expectedKeyword": "Range Countdown Verified!"
    },
    {
      "day": 8,
      "title": "Day 8 \u2013 Data Collections: Lists, Sets & Tuples",
      "unit": "Unit 8: Data Structures Fundamentals",
      "topic": "Mutable Lists [], Immutable Tuples (), Unique Sets {} & Shopping Cart",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (02:23:05 \u2013 02:45:20)",
      "whatToLearn": {
        "summary": "Master built-in Python data collections: mutable Lists [], immutable Tuples (), unique unordered Sets {}, and collection methods (.append, .pop, .sort).",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (02:23:05 \u2013 02:45:20)",
          "Differentiate mutability between Lists [] and Tuples ()",
          "Perform instant deduplication using set(list)",
          "Build dynamic list collections with .append() and .pop()"
        ],
        "codeExample": "cart = ['Apple', 'Banana', 'Orange']\ncart.append('Grape')\npopped = cart.pop(0)\nprint(f'Popped: {popped}, Cart: {cart}')\n\nunique_items = set([1, 2, 2, 3, 3, 4])\nprint(f'Unique: {unique_items}')"
      },
      "mcqQuestions": [
        {
          "question": "Which collection type prohibits duplicate values and has no fixed order?",
          "options": [
            "List",
            "Tuple",
            "Set",
            "Dictionary"
          ],
          "answerIndex": 2,
          "explanation": "Sets store unique, unordered collection elements."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: List Append & Pop Assertion",
          "prompt": "Append 'Grape' to ['Apple', 'Banana'] and pop index 0. Print `List Operations Verified!`.",
          "starterCode": "items = ['Apple', 'Banana']\n\n# TODO: Append 'Grape' and pop(0)\n\n# TODO: Print 'List Operations Verified!'\n",
          "expectedKeyword": "List Operations Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Set Deduplication",
          "prompt": "Deduplicate [1, 2, 2, 3] via set(). Print `Set Deduplication Verified!`.",
          "starterCode": "raw = [1, 2, 2, 3]\n\n# TODO: Convert raw to set()\n\n# TODO: Print 'Set Deduplication Verified!'\n",
          "expectedKeyword": "Set Deduplication Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Tuple Unpacking Coordinates",
          "prompt": "Unpack point = (10, 20) into x, y. Print `Tuple Unpacking Verified!`.",
          "starterCode": "point = (10, 20)\n\n# TODO: Unpack x, y = point\n\n# TODO: Print 'Tuple Unpacking Verified!'\n",
          "expectedKeyword": "Tuple Unpacking Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: List Sorting",
          "prompt": "Sort nums = [4, 1, 9, 2] in place via .sort(). Print `List Sorted!`.",
          "starterCode": "nums = [4, 1, 9, 2]\n\n# TODO: Call nums.sort()\n\n# TODO: Print 'List Sorted!'\n",
          "expectedKeyword": "List Sorted!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Shopping Cart Total Sum",
          "prompt": "Sum prices = [10.5, 20.0, 5.5]. Print `Cart Total Verified!`.",
          "starterCode": "prices = [10.5, 20.0, 5.5]\n\n# TODO: Compute total = sum(prices)\n\n# TODO: Print 'Cart Total Verified!'\n",
          "expectedKeyword": "Cart Total Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py8_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py8_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (02:23:05 \u2013 02:45:20)",
          completed: false
        },
        {
          "id": "py8_t3",
          "text": "\u270d\ufe0f Task: Demonstrate duplicate removal by converting a List to a Set (+30 XP)",
          completed: false
        },
        {
          "id": "py8_t4",
          "text": "\ud83d\ude80 Mini-Project: Interactive Shopping Cart Program (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "items = ['Apple', 'Banana']\nitems.append('Grape')\nitems.pop(0)\nprint('List Operations Verified!')",
      "expectedKeyword": "List Operations Verified!"
    },
    {
      "day": 9,
      "title": "Day 9 \u2013 2D Collections & Terminal Quiz Game",
      "unit": "Unit 9: Nested Collections & Quiz Engine",
      "topic": "Multi-dimensional lists matrix[row][col] & Terminal Quiz Game",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (02:45:21 \u2013 03:03:27)",
      "whatToLearn": {
        "summary": "Master 2D multi-dimensional collections matrix[row][col], access nested list items, and build a Terminal Quiz Game with automated score tracking.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (02:45:21 \u2013 03:03:27)",
          "Access multi-dimensional list items via row and column indexing matrix[row][col]",
          "Loop through 2D grids using nested loops",
          "Build interactive quiz question arrays with score validation math"
        ],
        "codeExample": "grid = [['A', 'B'], ['C', 'D']]\nprint(f'Item at row 0, col 1: {grid[0][1]}')\nprint(f'Item at row 1, col 1: {grid[1][1]}')"
      },
      "mcqQuestions": [
        {
          "question": "Given grid = [[1, 2], [3, 4]], what expression retrieves the value 4?",
          "options": [
            "grid[1][1]",
            "grid[0][1]",
            "grid[2][2]",
            "grid[1][0]"
          ],
          "answerIndex": 0,
          "explanation": "grid[1] gets second row [3, 4], and grid[1][1] gets 4."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: 2D Matrix Index Access",
          "prompt": "Access element 'B' from grid = [['A', 'B'], ['C', 'D']]. Print `2D Element Verified!`.",
          "starterCode": "grid = [['A', 'B'], ['C', 'D']]\n\n# TODO: Access item 'B'\n\n# TODO: Print '2D Element Verified!'\n",
          "expectedKeyword": "2D Element Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: 2D Grid Row Iteration",
          "prompt": "Iterate rows in grid = [[1, 2], [3, 4]]. Print `Grid Iteration Complete!`.",
          "starterCode": "grid = [[1, 2], [3, 4]]\n\n# TODO: Loop through grid rows\n\n# TODO: Print 'Grid Iteration Complete!'\n",
          "expectedKeyword": "Grid Iteration Complete!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Quiz Score Increment",
          "prompt": "Increment score for correct quiz answer. Print `Quiz Score Verified!`.",
          "starterCode": "score = 0\n\n# TODO: Increment score += 1\n\n# TODO: Print 'Quiz Score Verified!'\n",
          "expectedKeyword": "Quiz Score Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Keypad 3x3 Matrix Grid",
          "prompt": "Access keypad center key 5 from matrix = [[1,2,3],[4,5,6],[7,8,9]]. Print `Keypad Center Verified!`.",
          "starterCode": "keypad = [[1,2,3],[4,5,6],[7,8,9]]\n\n# TODO: Access keypad[1][1]\n\n# TODO: Print 'Keypad Center Verified!'\n",
          "expectedKeyword": "Keypad Center Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Quiz Percentage Calculation",
          "prompt": "Calculate percentage for 4/5 score. Print `Quiz Percentage Calculated!`.",
          "starterCode": "correct, total = 4, 5\n\n# TODO: Calculate pct = (correct/total)*100\n\n# TODO: Print 'Quiz Percentage Calculated!'\n",
          "expectedKeyword": "Quiz Percentage Calculated!"
        }
      ],
      "tasks": [
        {
          "id": "py9_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py9_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (02:45:21 \u2013 03:03:27)",
          completed: false
        },
        {
          "id": "py9_t3",
          "text": "\u270d\ufe0f Task: Access element 'B' from [['A', 'B'], ['C', 'D']] (+30 XP)",
          completed: false
        },
        {
          "id": "py9_t4",
          "text": "\ud83d\ude80 Mini-Project: Multiple-Choice Science Quiz App (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "grid = [['A', 'B'], ['C', 'D']]\nval = grid[0][1]\nprint(f'Item: {val}. 2D Element Verified!')",
      "expectedKeyword": "2D Element Verified!"
    },
    {
      "day": 10,
      "title": "Day 10 \u2013 Dictionaries & Random Module",
      "unit": "Unit 10: Key-Value Mapping & Randomization",
      "topic": "Dictionaries (.get, .items), random.randint(), random.choice() & POS System",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (03:03:28 \u2013 03:24:15)",
      "whatToLearn": {
        "summary": "Master key-value dictionary mappings, safe retrieval with .get(), key-value iterations with .items(), and random selections using random.choice() and random.randint().",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (03:03:28 \u2013 03:24:15)",
          "Safely retrieve dictionary values using d.get(key, default) without KeyError crashes",
          "Iterate over key-value pairs using for key, value in d.items()",
          "Pick random choices and integers using random.choice() and random.randint()"
        ],
        "codeExample": "menu = {'Popcorn': 7.0, 'Soda': 4.5, 'Candy': 3.0}\nfor item, price in menu.items():\n    print(f'{item}: ${price:.2f}')\n\nimport random\nprize = random.choice(['Popcorn', 'Soda', 'Candy'])\nprint(f'Random Winner Prize: {prize}')"
      },
      "mcqQuestions": [
        {
          "question": "What happens when accessing a non-existent key in a dictionary using square brackets d['missing']?",
          "options": [
            "Returns None",
            "Raises KeyError",
            "Creates the key",
            "Returns 0"
          ],
          "answerIndex": 1,
          "explanation": "Square bracket indexing raises KeyError if the key is missing."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Dict Safe Get Retrieval",
          "prompt": "Fetch missing key safely via dict.get('item', 'N/A'). Print `Dict Get Verified!`.",
          "starterCode": "menu = {'Soda': 4.5}\n\n# TODO: Retrieve menu.get('Popcorn', 'N/A')\n\n# TODO: Print 'Dict Get Verified!'\n",
          "expectedKeyword": "Dict Get Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Dict Items Loop Iteration",
          "prompt": "Iterate key-value pairs via .items(). Print `Dict Iteration Complete!`.",
          "starterCode": "menu = {'Soda': 4.5, 'Candy': 3.0}\n\n# TODO: Loop for k, v in menu.items()\n\n# TODO: Print 'Dict Iteration Complete!'\n",
          "expectedKeyword": "Dict Iteration Complete!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Random Choice Picker",
          "prompt": "Pick random choice from ['A', 'B', 'C'] using random.choice(). Print `Random Choice Verified!`.",
          "starterCode": "import random\nopts = ['A', 'B', 'C']\n\n# TODO: Pick choice = random.choice(opts)\n\n# TODO: Print 'Random Choice Verified!'\n",
          "expectedKeyword": "Random Choice Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Random Integer Generation",
          "prompt": "Generate random integer between 1 and 6 via random.randint(1, 6). Print `Random Int Verified!`.",
          "starterCode": "import random\n\n# TODO: Generate r = random.randint(1, 6)\n\n# TODO: Print 'Random Int Verified!'\n",
          "expectedKeyword": "Random Int Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Concession Stand Bill Calculator",
          "prompt": "Sum items in cart dict. Print `Concession Bill Calculated!`.",
          "starterCode": "cart = {'Soda': 4.5, 'Candy': 3.0}\n\n# TODO: Compute total = sum(cart.values())\n\n# TODO: Print 'Concession Bill Calculated!'\n",
          "expectedKeyword": "Concession Bill Calculated!"
        }
      ],
      "tasks": [
        {
          "id": "py10_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py10_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (03:03:28 \u2013 03:24:15)",
          completed: false
        },
        {
          "id": "py10_t3",
          "text": "\u270d\ufe0f Task: Safely fetch a missing key using .get('key', 'Default') without crashing (+30 XP)",
          completed: false
        },
        {
          "id": "py10_t4",
          "text": "\ud83d\ude80 Mini-Project: Cinema Concession Stand POS System (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "d = {'Soda': 4.5}\nval = d.get('Popcorn', 'Default')\nprint(f'Val: {val}. Dict Get Verified!')",
      "expectedKeyword": "Dict Get Verified!"
    },
    {
      "day": 11,
      "title": "Day 11 \u2013 Game Development Sprint",
      "unit": "Unit 11: Interactive Games Engine",
      "topic": "Guessing Game, Rock Paper Scissors & 3D ASCII Dice Roller",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (03:24:16 \u2013 03:52:11) | Practice Projects Sprint",
      "whatToLearn": {
        "summary": "Combine loops, random selections, dictionary mappings, and score conditions to build interactive terminal games.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (03:24:16 \u2013 03:52:11) & Practice Projects Sprint",
          "Build Number Guessing Game with random target number evaluation",
          "Build Rock-Paper-Scissors with computer choice & winning rule matrix",
          "Render 3D ASCII Art Dice faces based on random dice rolls"
        ],
        "codeExample": "import random\nchoices = ['rock', 'paper', 'scissors']\nplayer = 'rock'\ncomputer = random.choice(choices)\n\nif player == computer:\n    print('It is a Tie!')\nelif player == 'rock' and computer == 'scissors':\n    print('Player Wins!')"
      },
      "mcqQuestions": [
        {
          "question": "Which random function picks a single random item from a list or tuple?",
          "options": [
            "random.randint()",
            "random.choice()",
            "random.sample()",
            "random.shuffle()"
          ],
          "answerIndex": 1,
          "explanation": "random.choice() picks one element at random from a sequence."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Target Guess Match",
          "prompt": "Evaluate guess == secret for guess=5, secret=5. Print `Target Guess Verified!`.",
          "starterCode": "secret = 5\nguess = 5\n\n# TODO: Check if guess == secret\n\n# TODO: Print 'Target Guess Verified!'\n",
          "expectedKeyword": "Target Guess Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Rock Paper Scissors Rule Check",
          "prompt": "Check player='rock' vs computer='scissors'. Print `Rock Beats Scissors Verified!`.",
          "starterCode": "player = 'rock'\ncomputer = 'scissors'\n\n# TODO: Verify player win rule\n\n# TODO: Print 'Rock Beats Scissors Verified!'\n",
          "expectedKeyword": "Rock Beats Scissors Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: ASCII Dice Roll Face Output",
          "prompt": "Roll dice = random.randint(1, 6). Print `Dice Roll Verified!`.",
          "starterCode": "import random\n\n# TODO: Roll dice = random.randint(1, 6)\n\n# TODO: Print 'Dice Roll Verified!'\n",
          "expectedKeyword": "Dice Roll Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Random Shuffle Deck",
          "prompt": "Shuffle list deck = [1, 2, 3, 4] in place. Print `Deck Shuffled!`.",
          "starterCode": "import random\ndeck = [1, 2, 3, 4]\n\n# TODO: Call random.shuffle(deck)\n\n# TODO: Print 'Deck Shuffled!'\n",
          "expectedKeyword": "Deck Shuffled!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Win Streak Counter",
          "prompt": "Increment win_streak when player wins. Print `Win Streak Verified!`.",
          "starterCode": "win_streak = 0\n\n# TODO: Increment streak\n\n# TODO: Print 'Win Streak Verified!'\n",
          "expectedKeyword": "Win Streak Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py11_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py11_t2",
          "text": "\ud83d\ude80 Build Game 1: Number Guessing Game (+40 XP)",
          completed: false
        },
        {
          "id": "py11_t3",
          "text": "\ud83d\ude80 Build Game 2: Rock-Paper-Scissors with AI opponent (+40 XP)",
          completed: false
        },
        {
          "id": "py11_t4",
          "text": "\ud83d\ude80 Build Game 3: ASCII Art Dice Roller (+40 XP)",
          completed: false
        }
      ],
      "starterCode": "import random\nroll = random.randint(1, 6)\nprint(f'Roll: {roll}. Dice Roll Verified!')",
      "expectedKeyword": "Dice Roll Verified!"
    },
    {
      "day": 12,
      "title": "Day 12 \u2013 Functions, Arguments & Unpacking (*args & **kwargs)",
      "unit": "Unit 12: Modular Functions & Dynamic Arguments",
      "topic": "Function def, return, Default args, Keyword args, *args & **kwargs",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (03:52:12 \u2013 04:30:32)",
      "whatToLearn": {
        "summary": "Master modular function declarations (def), positional vs keyword arguments, default parameters, *args tuple unpacking, and **kwargs dictionary unpacking.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (03:52:12 \u2013 04:30:32)",
          "Define modular functions with def function_name(*args, **kwargs):",
          "Collect arbitrary positional arguments into tuples using *args",
          "Collect arbitrary keyword arguments into dictionaries using **kwargs"
        ],
        "codeExample": "def multiply(*args):\n    total = 1\n    for num in args:\n        total *= num\n    return total\n\nprint(f'Product: {multiply(2, 3, 4)}')  # Output: 24"
      },
      "mcqQuestions": [
        {
          "question": "What data structure does *args collect positional arguments into?",
          "options": [
            "List",
            "Set",
            "Tuple",
            "Dictionary"
          ],
          "answerIndex": 2,
          "explanation": "*args collects variable positional arguments into an immutable Tuple."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: *args Product Multiplier",
          "prompt": "Write function with *args returning product of (2, 3, 4). Print `Args Product Verified!`.",
          "starterCode": "def mult(*args):\n    pass\n\n# TODO: Return product of args\n\n# TODO: Print 'Args Product Verified!'\n",
          "expectedKeyword": "Args Product Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: **kwargs Address Formatting",
          "prompt": "Pass **kwargs (city='Kochi', zip='682001'). Print `Kwargs Address Verified!`.",
          "starterCode": "def print_addr(**kwargs):\n    pass\n\n# TODO: Iterate kwargs.items()\n\n# TODO: Print 'Kwargs Address Verified!'\n",
          "expectedKeyword": "Kwargs Address Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Default Argument Value",
          "prompt": "Define role(r='Dev'). Print `Default Arg Verified!`.",
          "starterCode": "def get_role(r='Dev'):\n    return r\n\n# TODO: Call get_role()\n\n# TODO: Print 'Default Arg Verified!'\n",
          "expectedKeyword": "Default Arg Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Keyword Arguments Syntax",
          "prompt": "Call function with explicit keyword args (name='Aman', age=20). Print `Keyword Args Verified!`.",
          "starterCode": "def profile(name, age):\n    return f'{name}, {age}'\n\n# TODO: Call profile(name='Aman', age=20)\n\n# TODO: Print 'Keyword Args Verified!'\n",
          "expectedKeyword": "Keyword Args Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Return Tuple Unpacking",
          "prompt": "Return min and max from function. Print `Return Tuple Verified!`.",
          "starterCode": "def min_max(nums):\n    return min(nums), max(nums)\n\n# TODO: Unpack low, high = min_max([1, 5])\n\n# TODO: Print 'Return Tuple Verified!'\n",
          "expectedKeyword": "Return Tuple Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py12_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py12_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (03:52:12 \u2013 04:30:32)",
          completed: false
        },
        {
          "id": "py12_t3",
          "text": "\u270d\ufe0f Task: Write a function accepting *args to calculate the product of arbitrary numbers (+30 XP)",
          completed: false
        },
        {
          "id": "py12_t4",
          "text": "\ud83d\ude80 Mini-Project: Modular Shipping Label Generator (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "def mult(*args):\n    total = 1\n    for n in args: total *= n\n    return total\nprint(f'Mult: {mult(2,3,4)}. Args Product Verified!')",
      "expectedKeyword": "Args Product Verified!"
    },
    {
      "day": 13,
      "title": "Day 13 \u2013 Iterables, List Comprehensions & Match-Case",
      "unit": "Unit 13: Functional Expressions & Pattern Matching",
      "topic": "Iterables, in membership operator, List comprehensions & match-case",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (04:30:33 \u2013 05:02:12)",
      "whatToLearn": {
        "summary": "Master membership operators (in / not in), Pythonic list comprehensions [expr for item in iterable if cond], and Python 3.10+ match-case pattern matching.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (04:30:33 \u2013 05:02:12)",
          "Check element membership using in and not in operators",
          "Write single-line list comprehensions with inline filtering",
          "Construct clean match-case pattern matching blocks with wildcard _ fallback"
        ],
        "codeExample": "squares = [x**2 for x in range(1, 6) if x % 2 == 0]\nprint(f'Even Squares: {squares}')  # Output: [4, 16]\n\nday = 'Mon'\nmatch day:\n    case 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri':\n        print('Weekday Schedule Active')\n    case _:\n        print('Weekend Schedule Active')"
      },
      "mcqQuestions": [
        {
          "question": "What is the wildcard pattern symbol used in Python match-case blocks?",
          "options": [
            "*",
            "?",
            "_",
            "default"
          ],
          "answerIndex": 2,
          "explanation": "The underscore _ acts as the wildcard default match pattern."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Even Squares List Comprehension",
          "prompt": "Generate [x**2 for x in range(1, 6) if x%2==0]. Print `List Comprehension Verified!`.",
          "starterCode": "# TODO: Compute squares = [x**2 for x in range(1, 6) if x % 2 == 0]\n\n# TODO: Print 'List Comprehension Verified!'\n",
          "expectedKeyword": "List Comprehension Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Membership Operator Check",
          "prompt": "Check if 'Python' in ['Python', 'JS']. Print `Membership Verified!`.",
          "starterCode": "langs = ['Python', 'JS']\n\n# TODO: Check 'Python' in langs\n\n# TODO: Print 'Membership Verified!'\n",
          "expectedKeyword": "Membership Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Match-Case Pattern Matching",
          "prompt": "Match day='Mon' case 'Mon'. Print `Match Case Verified!`.",
          "starterCode": "day = 'Mon'\n\n# TODO: Implement match day: case 'Mon':\n\n# TODO: Print 'Match Case Verified!'\n",
          "expectedKeyword": "Match Case Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Upper Case List Comprehension",
          "prompt": "Convert ['a', 'b'] to ['A', 'B'] via list comp. Print `Upper Comprehension Verified!`.",
          "starterCode": "chars = ['a', 'b']\n\n# TODO: Convert to upper using list comp\n\n# TODO: Print 'Upper Comprehension Verified!'\n",
          "expectedKeyword": "Upper Comprehension Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Match-Case Wildcard Fallback",
          "prompt": "Trigger wildcard case _ for day='Sun'. Print `Wildcard Case Verified!`.",
          "starterCode": "day = 'Sun'\n\n# TODO: Match day with case _:\n\n# TODO: Print 'Wildcard Case Verified!'\n",
          "expectedKeyword": "Wildcard Case Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py13_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py13_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (04:30:33 \u2013 05:02:12)",
          completed: false
        },
        {
          "id": "py13_t3",
          "text": "\u270d\ufe0f Task: Generate a list of squared even numbers using a single list comprehension line (+30 XP)",
          completed: false
        },
        {
          "id": "py13_t4",
          "text": "\ud83d\ude80 Mini-Project: Day-of-the-Week Schedule Filter using match-case (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "squares = [x**2 for x in range(1, 6) if x % 2 == 0]\nprint(f'Squares: {squares}. List Comprehension Verified!')",
      "expectedKeyword": "List Comprehension Verified!"
    },
    {
      "day": 14,
      "title": "Day 14 \u2013 Modules, Variable Scope & Main Guardian",
      "unit": "Unit 14: Package Architecture & Execution Guard",
      "topic": "import, module aliases (as), LEGB scope rule & if __name__ == '__main__'",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (05:02:13 \u2013 05:23:38) | Module Architecture",
      "whatToLearn": {
        "summary": "Master modular software architecture, module aliases (import math as m), Local/Global LEGB scope rules, and the main execution guardian if __name__ == '__main__':.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (05:02:13 \u2013 05:23:38) & Module Architecture",
          "Create reusable custom Python module files and import them",
          "Understand LEGB (Local, Enclosing, Global, Built-in) scope hierarchy",
          "Use if __name__ == '__main__': to prevent execution on import"
        ],
        "codeExample": "# helper.py\ndef compute_tax(amount):\n    return amount * 0.18\n\nif __name__ == '__main__':\n    print(f'Tax: {compute_tax(100)}')  # Executed only directly"
      },
      "mcqQuestions": [
        {
          "question": "Why is if __name__ == '__main__': used in Python modules?",
          "options": [
            "To increase execution speed",
            "To ensure code runs only when executed directly, not when imported",
            "To define global variables",
            "To import standard libraries automatically"
          ],
          "answerIndex": 1,
          "explanation": "if __name__ == '__main__': prevents code from firing when imported into other modules."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Main Guardian Expression",
          "prompt": "Evaluate __name__ == '__main__'. Print `Main Guardian Verified!`.",
          "starterCode": "# TODO: Check if __name__ == '__main__'\n\n# TODO: Print 'Main Guardian Verified!'\n",
          "expectedKeyword": "Main Guardian Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Module Alias Import",
          "prompt": "Alias import math as m and call m.sqrt(25). Print `Module Alias Verified!`.",
          "starterCode": "import math as m\n\n# TODO: Call m.sqrt(25)\n\n# TODO: Print 'Module Alias Verified!'\n",
          "expectedKeyword": "Module Alias Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Global Variable Keyword Scope",
          "prompt": "Modify global count variable inside function using global count. Print `Global Scope Verified!`.",
          "starterCode": "count = 0\ndef inc():\n    pass\n\n# TODO: Use global count to increment count\n\n# TODO: Print 'Global Scope Verified!'\n",
          "expectedKeyword": "Global Scope Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Custom Module Function Call",
          "prompt": "Call custom module function compute_tax(100). Print `Custom Module Function Verified!`.",
          "starterCode": "def compute_tax(amt):\n    return amt * 0.18\n\n# TODO: Call compute_tax(100)\n\n# TODO: Print 'Custom Module Function Verified!'\n",
          "expectedKeyword": "Custom Module Function Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Local Variable Scope Test",
          "prompt": "Define local variable inside function. Print `Local Scope Verified!`.",
          "starterCode": "def test():\n    local_var = 10\n    return local_var\n\n# TODO: Call test()\n\n# TODO: Print 'Local Scope Verified!'\n",
          "expectedKeyword": "Local Scope Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py14_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py14_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (05:02:13 \u2013 05:23:38) (+20 XP)",
          completed: false
        },
        {
          "id": "py14_t3",
          "text": "\u270d\ufe0f Task: Create a custom module file and import its functions into main.py (+30 XP)",
          completed: false
        },
        {
          "id": "py14_t4",
          "text": "\ud83d\ude80 Mini-Project: Multi-File Script Architecture Setup (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "if __name__ == '__main__':\n    print('Main Guardian Verified!')",
      "expectedKeyword": "Main Guardian Verified!"
    },
    {
      "day": 15,
      "title": "Day 15 \u2013 Banking & Slot Machine Mini-Projects",
      "unit": "Unit 15: Real-World State Management",
      "topic": "State management, balance manipulation & validation loops",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (05:23:39 \u2013 05:58:46) | Real-World Logic",
      "whatToLearn": {
        "summary": "Implement complex real-world state management in Python: Terminal Banking App (deposit, withdraw, balance checks) and Slot Machine Game (symbol reels, payout ratios).",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (05:23:39 \u2013 05:58:46) & Real-World Logic",
          "Manage persistent account balance state across operations",
          "Enforce deposit/withdrawal validation boundaries (bet <= balance)",
          "Build symbol reel probabilities & payout multiplier math"
        ],
        "codeExample": "balance = 1000.0\n\ndef deposit(amt):\n    global balance\n    if amt > 0:\n        balance += amt\n        return True\n    return False\n\ndeposit(500.0)\nprint(f'New Balance: ${balance:.2f}')"
      },
      "mcqQuestions": [
        {
          "question": "How do you ensure user-entered bet amounts do not exceed the account balance?",
          "options": [
            "Use try...except",
            "Conditional check if bet > balance: inside a validation loop",
            "Use math.ceil()",
            "typecast to string"
          ],
          "answerIndex": 1,
          "explanation": "A conditional check if bet > balance: inside a loop guarantees valid bets."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Banking Deposit Balance State",
          "prompt": "Deposit 500 to balance 1000. Print `Banking Deposit Verified!`.",
          "starterCode": "bal = 1000\n\n# TODO: Deposit 500 into bal\n\n# TODO: Print 'Banking Deposit Verified!'\n",
          "expectedKeyword": "Banking Deposit Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Banking Withdrawal Safety",
          "prompt": "Check if withdraw 200 <= balance 1500. Print `Withdrawal Safety Verified!`.",
          "starterCode": "bal = 1500\nw = 200\n\n# TODO: Check w <= bal and subtract\n\n# TODO: Print 'Withdrawal Safety Verified!'\n",
          "expectedKeyword": "Withdrawal Safety Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Slot Machine Match Check",
          "prompt": "Evaluate reel matches ['\ud83c\udf52', '\ud83c\udf52', '\ud83c\udf52']. Print `Slot Machine Jackpot Verified!`.",
          "starterCode": "reel = ['\ud83c\udf52', '\ud83c\udf52', '\ud83c\udf52']\n\n# TODO: Check if len(set(reel)) == 1\n\n# TODO: Print 'Slot Machine Jackpot Verified!'\n",
          "expectedKeyword": "Slot Machine Jackpot Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Bet Amount Boundary Validation",
          "prompt": "Verify bet <= balance condition. Print `Bet Boundary Verified!`.",
          "starterCode": "bet, bal = 50, 200\n\n# TODO: Verify bet <= bal\n\n# TODO: Print 'Bet Boundary Verified!'\n",
          "expectedKeyword": "Bet Boundary Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Payout Multiplier Calculation",
          "prompt": "Calculate payout = bet * 10 for bet=10. Print `Payout Calculated!`.",
          "starterCode": "bet = 10\n\n# TODO: Compute payout = bet * 10\n\n# TODO: Print 'Payout Calculated!'\n",
          "expectedKeyword": "Payout Calculated!"
        }
      ],
      "tasks": [
        {
          "id": "py15_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py15_t2",
          "text": "\ud83d\ude80 Build Project 1: Terminal Banking App with deposit, withdrawal, & balance check (+50 XP)",
          completed: false
        },
        {
          "id": "py15_t3",
          "text": "\ud83d\ude80 Build Project 2: Python Slot Machine Game with payout ratios (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "bal = 1000\nbal += 500\nprint(f'Bal: {bal}. Banking Deposit Verified!')",
      "expectedKeyword": "Banking Deposit Verified!"
    },
    {
      "day": 16,
      "title": "Day 16 \u2013 Substitution Cipher & Hangman Game",
      "unit": "Unit 16: Security Encryption & Game Logic",
      "topic": "String manipulation, index mapping, secret word list management",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (05:58:47 \u2013 06:32:33) | Practical Security & Game Logic",
      "whatToLearn": {
        "summary": "Build practical security and game tools: Substitution Cipher Encryptor/Decryptor using character index mapping, and Terminal Hangman with ASCII visual stages.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (05:58:47 \u2013 06:32:33) & Security & Game Logic",
          "Map original characters to encrypted keys using index replacement",
          "Manage secret word lists and hidden display strings (e.g. '_ _ _ _')",
          "Track guess attempts and display ASCII hangman stages"
        ],
        "codeExample": "import string\nchars = ' ' + string.punctuation + string.digits + string.ascii_letters\nkey = list(chars)\nimport random\nrandom.seed(42)\nrandom.shuffle(key)\n\nplain_text = 'Hello'\ncipher_text = ''\nfor letter in plain_text:\n    index = chars.index(letter)\n    cipher_text += key[index]\nprint(f'Encrypted: {cipher_text}')"
      },
      "mcqQuestions": [
        {
          "question": "Which string method replaces all occurrences of a substring with another string?",
          "options": [
            ".find()",
            ".replace()",
            ".swap()",
            ".slice()"
          ],
          "answerIndex": 1,
          "explanation": ".replace() substitutes target substrings with replacement strings."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Substitution Cipher Encryption",
          "prompt": "Map character index for 'A'. Print `Cipher Encrypted!`.",
          "starterCode": "plain = 'A'\n\n# TODO: Encrypt plain text using index substitution\n\n# TODO: Print 'Cipher Encrypted!'\n",
          "expectedKeyword": "Cipher Encrypted!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Hangman Display Hidden Word",
          "prompt": "Generate display '_ _ _' for 3-letter secret word. Print `Hangman Display Verified!`.",
          "starterCode": "secret = 'cat'\n\n# TODO: Generate display string '_ ' * len(secret)\n\n# TODO: Print 'Hangman Display Verified!'\n",
          "expectedKeyword": "Hangman Display Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Guess Character Index Finder",
          "prompt": "Find index of letter 'a' in 'cat' using .find(). Print `Letter Index Found!`.",
          "starterCode": "word = 'cat'\n\n# TODO: Find index of 'a'\n\n# TODO: Print 'Letter Index Found!'\n",
          "expectedKeyword": "Letter Index Found!"
        },
        {
          "id": 4,
          "title": "Challenge 4: String Replace Cipher Decryption",
          "prompt": "Replace encrypted character back to original. Print `Decryption Verified!`.",
          "starterCode": "cipher = 'X'\n\n# TODO: Replace cipher with original letter\n\n# TODO: Print 'Decryption Verified!'\n",
          "expectedKeyword": "Decryption Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Hangman Attempts Decrement",
          "prompt": "Decrement attempts when guess is wrong. Print `Hangman Attempt Decremented!`.",
          "starterCode": "attempts = 6\n\n# TODO: Decrement attempts -= 1\n\n# TODO: Print 'Hangman Attempt Decremented!'\n",
          "expectedKeyword": "Hangman Attempt Decremented!"
        }
      ],
      "tasks": [
        {
          "id": "py16_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py16_t2",
          "text": "\ud83d\ude80 Build Security Tool: Substitution Cipher Encryptor/Decryptor (+50 XP)",
          completed: false
        },
        {
          "id": "py16_t3",
          "text": "\ud83d\ude80 Build Game: Terminal Hangman Game with ASCII visual progression (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "plain = 'A'\nprint('Cipher Encrypted!')",
      "expectedKeyword": "Cipher Encrypted!"
    },
    {
      "day": 17,
      "title": "Day 17 \u2013 Object-Oriented Programming: Classes & Attributes",
      "unit": "Unit 17: OOP Foundation",
      "topic": "Classes, Objects, Attributes, Methods, __init__ constructor, self & Class variables",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (06:32:34 \u2013 06:53:03) | OOP Fundamentals",
      "whatToLearn": {
        "summary": "Master Object-Oriented Programming (OOP) fundamentals: classes, object instances, instance variables, methods, __init__ constructor with self, and Class variables.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (06:32:34 \u2013 06:53:03) & OOP Fundamentals",
          "Define blueprint classes with class Car:",
          "Initialize instance variables using __init__(self, brand, model)",
          "Understand self instance reference vs Class variables"
        ],
        "codeExample": "class Student:\n    school = 'DevQuik Academy'  # Class variable\n    \n    def __init__(self, name, age):\n        self.name = name        # Instance variable\n        self.age = age\n    \n    def display(self):\n        return f'Student {self.name}, Age {self.age} @ {Student.school}'\n\ns = Student('Aman', 20)\nprint(s.display())"
      },
      "mcqQuestions": [
        {
          "question": "What parameter must be explicitly passed as the first argument to instance methods in Python classes?",
          "options": [
            "this",
            "self",
            "cls",
            "super"
          ],
          "answerIndex": 1,
          "explanation": "self represents the current instance of the class in method definitions."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Class Definition & __init__",
          "prompt": "Define class Student with self.name='Aman'. Print `OOP Student Initialized!`.",
          "starterCode": "class Student:\n    def __init__(self, name):\n        self.name = name\n\n# TODO: Instantiate s = Student('Aman')\n\n# TODO: Print 'OOP Student Initialized!'\n",
          "expectedKeyword": "OOP Student Initialized!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Instance Method Invocation",
          "prompt": "Add drive() method to Car class. Print `Car Driving Verified!`.",
          "starterCode": "class Car:\n    def drive(self):\n        pass\n\n# TODO: Call drive()\n\n# TODO: Print 'Car Driving Verified!'\n",
          "expectedKeyword": "Car Driving Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Class Variable Shared State",
          "prompt": "Define class variable num_students = 0. Print `Class Variable Verified!`.",
          "starterCode": "class Student:\n    num_students = 0\n\n# TODO: Increment Student.num_students\n\n# TODO: Print 'Class Variable Verified!'\n",
          "expectedKeyword": "Class Variable Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Multiple Object Instantiation",
          "prompt": "Instantiate 2 Student objects. Print `Multiple Objects Verified!`.",
          "starterCode": "class Student:\n    def __init__(self, n): self.n = n\n\n# TODO: Instantiate s1, s2\n\n# TODO: Print 'Multiple Objects Verified!'\n",
          "expectedKeyword": "Multiple Objects Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Object String Representation Method",
          "prompt": "Implement info() method on Book class. Print `Book Info Verified!`.",
          "starterCode": "class Book:\n    def __init__(self, title): self.title = title\n    def info(self): return self.title\n\n# TODO: Call Book('Python').info()\n\n# TODO: Print 'Book Info Verified!'\n",
          "expectedKeyword": "Book Info Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py17_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py17_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (06:32:34 \u2013 06:53:03) (+20 XP)",
          completed: false
        },
        {
          "id": "py17_t3",
          "text": "\u270d\ufe0f Task: Create a Car class with drive() and stop() instance methods (+30 XP)",
          completed: false
        },
        {
          "id": "py17_t4",
          "text": "\ud83d\ude80 Mini-Project: Student Database System using Classes (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "class Student:\n    def __init__(self, name): self.name = name\ns = Student('Aman')\nprint(f'Student: {s.name}. OOP Student Initialized!')",
      "expectedKeyword": "OOP Student Initialized!"
    },
    {
      "day": 18,
      "title": "Day 18 \u2013 OOP Inheritance, Super Function & Polymorphism",
      "unit": "Unit 18: Advanced OOP Hierarchy",
      "topic": "Single/Multiple Inheritance, super(), Method Overriding & Polymorphism",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (06:53:04 \u2013 07:33:35) | Advanced OOP",
      "whatToLearn": {
        "summary": "Master object inheritance (class Child(Parent):), invoke base constructors with super().__init__(), override parent methods, and utilize polymorphism.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (06:53:04 \u2013 07:33:35) & Advanced OOP",
          "Inherit parent attributes and methods in child classes",
          "Delegate base initialization using super().__init__()",
          "Override parent methods and leverage polymorphism"
        ],
        "codeExample": "class Shape:\n    def __init__(self, name):\n        self.name = name\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        super().__init__('Circle')\n        self.radius = radius\n    def area(self):\n        return 3.14159 * (self.radius ** 2)\n\nc = Circle(5)\nprint(f'{c.name} Area: {c.area():.2f}')"
      },
      "mcqQuestions": [
        {
          "question": "What function allows a child class to call methods from its parent class?",
          "options": [
            "parent()",
            "base()",
            "super()",
            "inherit()"
          ],
          "answerIndex": 2,
          "explanation": "super() returns a proxy object delegating method calls to the parent class."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Class Inheritance Declaration",
          "prompt": "Create class Dog(Animal). Print `Inheritance Verified!`.",
          "starterCode": "class Animal: pass\nclass Dog(Animal): pass\n\n# TODO: Instantiate Dog()\n\n# TODO: Print 'Inheritance Verified!'\n",
          "expectedKeyword": "Inheritance Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: Super Constructor Invocation",
          "prompt": "Invoke super().__init__('Circle') in child class. Print `Super Constructor Verified!`.",
          "starterCode": "class Shape:\n    def __init__(self, name): self.name = name\nclass Circle(Shape):\n    def __init__(self): super().__init__('Circle')\n\n# TODO: Instantiate Circle()\n\n# TODO: Print 'Super Constructor Verified!'\n",
          "expectedKeyword": "Super Constructor Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: Method Overriding",
          "prompt": "Override speak() method in Dog child class. Print `Method Overriding Verified!`.",
          "starterCode": "class Animal:\n    def speak(self): return 'Sound'\nclass Dog(Animal):\n    def speak(self): return 'Woof'\n\n# TODO: Call Dog().speak()\n\n# TODO: Print 'Method Overriding Verified!'\n",
          "expectedKeyword": "Method Overriding Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Polymorphism Method Calls",
          "prompt": "Iterate list of shapes calling .area(). Print `Polymorphism Verified!`.",
          "starterCode": "class Circle: area = lambda self: 3.14\nclass Square: area = lambda self: 4.0\n\n# TODO: Loop shapes calling area()\n\n# TODO: Print 'Polymorphism Verified!'\n",
          "expectedKeyword": "Polymorphism Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: Multiple Inheritance",
          "prompt": "Define class Child(Mother, Father). Print `Multiple Inheritance Verified!`.",
          "starterCode": "class Mother: pass\nclass Father: pass\nclass Child(Mother, Father): pass\n\n# TODO: Instantiate Child()\n\n# TODO: Print 'Multiple Inheritance Verified!'\n",
          "expectedKeyword": "Multiple Inheritance Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py18_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py18_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (06:53:04 \u2013 07:33:35) (+20 XP)",
          completed: false
        },
        {
          "id": "py18_t3",
          "text": "\u270d\ufe0f Task: Implement child classes (Circle, Square) inheriting from parent Shape class using super().__init__() (+30 XP)",
          completed: false
        },
        {
          "id": "py18_t4",
          "text": "\ud83d\ude80 Mini-Project: Geometric Shape Area Calculator (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "class Animal: pass\nclass Dog(Animal): pass\nd = Dog()\nprint('Inheritance Verified!')",
      "expectedKeyword": "Inheritance Verified!"
    },
    {
      "day": 19,
      "title": "Day 19 \u2013 Static/Class Methods, Dunder Methods & Decorators",
      "unit": "Unit 19: Python Metaprogramming & Encapsulation",
      "topic": "@staticmethod, @classmethod, Dunder methods (__str__, __len__) & @property",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (07:33:36 \u2013 08:14:55) | Python Metaprogramming",
      "whatToLearn": {
        "summary": "Master decorators (@staticmethod, @classmethod), magic dunder methods (__str__, __len__, __eq__), and @property getter/setter encapsulation.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (07:33:36 \u2013 08:14:55) & Python Metaprogramming",
          "Define utility static methods with @staticmethod",
          "Define factory class methods with @classmethod (cls)",
          "Implement custom string formatting using __str__ magic dunder method",
          "Encapsulate private attributes with @property getters and setters"
        ],
        "codeExample": "class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n    \n    def __str__(self):\n        return f'\"{self.title}\" ({self.pages} pages)'\n    \n    def __len__(self):\n        return self.pages\n\nb = Book('Python Guide', 350)\nprint(str(b))\nprint(f'Page count: {len(b)}')"
      },
      "mcqQuestions": [
        {
          "question": "Which decorator defines a method that operates on the class itself rather than an instance?",
          "options": [
            "@staticmethod",
            "@classmethod",
            "@property",
            "@abstractmethod"
          ],
          "answerIndex": 1,
          "explanation": "@classmethod receives the class (cls) as its first argument."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Magic __str__ Dunder Method",
          "prompt": "Implement __str__ on Book class. Print `Dunder Str Verified!`.",
          "starterCode": "class Book:\n    def __init__(self, title): self.title = title\n    def __str__(self): return f'Book: {self.title}'\n\n# TODO: Print str(Book('Python'))\n\n# TODO: Print 'Dunder Str Verified!'\n",
          "expectedKeyword": "Dunder Str Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: @staticmethod Utility Method",
          "prompt": "Define @staticmethod is_valid(age). Print `Static Method Verified!`.",
          "starterCode": "class Math:\n    @staticmethod\n    def is_even(n): return n % 2 == 0\n\n# TODO: Call Math.is_even(4)\n\n# TODO: Print 'Static Method Verified!'\n",
          "expectedKeyword": "Static Method Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: @classmethod Factory Method",
          "prompt": "Define @classmethod get_count(cls). Print `Class Method Verified!`.",
          "starterCode": "class User:\n    count = 1\n    @classmethod\n    def get_c(cls): return cls.count\n\n# TODO: Call User.get_c()\n\n# TODO: Print 'Class Method Verified!'\n",
          "expectedKeyword": "Class Method Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Magic __len__ Method",
          "prompt": "Implement __len__ returning 350. Print `Dunder Len Verified!`.",
          "starterCode": "class Book:\n    def __len__(self): return 350\n\n# TODO: Call len(Book())\n\n# TODO: Print 'Dunder Len Verified!'\n",
          "expectedKeyword": "Dunder Len Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: @property Encapsulated Getter",
          "prompt": "Define @property balance getter for __balance. Print `Property Getter Verified!`.",
          "starterCode": "class Account:\n    def __init__(self, b): self.__b = b\n    @property\n    def balance(self): return self.__b\n\n# TODO: Access Account(100).balance\n\n# TODO: Print 'Property Getter Verified!'\n",
          "expectedKeyword": "Property Getter Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py19_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py19_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (07:33:36 \u2013 08:14:55) (+20 XP)",
          completed: false
        },
        {
          "id": "py19_t3",
          "text": "\u270d\ufe0f Task: Implement __str__ on a custom Book class to print custom text formatting (+30 XP)",
          completed: false
        },
        {
          "id": "py19_t4",
          "text": "\ud83d\ude80 Mini-Project: Bank Account Encapsulation System with @property (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "class Book:\n    def __str__(self): return 'Book'\nb = Book()\nprint(f'{b}. Dunder Str Verified!')",
      "expectedKeyword": "Dunder Str Verified!"
    },
    {
      "day": 20,
      "title": "Day 20 \u2013 Exceptions, File Operations & Multi-Threading",
      "unit": "Unit 20: System I/O & Concurrency",
      "topic": "try/except/finally, with open() for TXT/JSON/CSV & threading.Thread()",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (08:14:56 \u2013 09:13:49) | System & File I/O",
      "whatToLearn": {
        "summary": "Master exception handling (try/except/finally), context manager file I/O (with open()) for text, JSON, and CSV files, and concurrent execution using threading.Thread().",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (08:14:56 \u2013 09:13:49) & System & File I/O",
          "Handle runtime exceptions safely with try, except, and finally",
          "Read/write JSON and CSV data using standard json and csv modules",
          "Execute concurrent tasks in background using threading.Thread()"
        ],
        "codeExample": "import json, os\n\ndata = {'app': 'DevQuik', 'version': 2.0}\nwith open('config.json', 'w') as f:\n    json.dump(data, f, indent=2)\n\nwith open('config.json', 'r') as f:\n    loaded = json.load(f)\nprint(f'Loaded Config: {loaded}')"
      },
      "mcqQuestions": [
        {
          "question": "What is the benefit of opening a file using the with open() statement?",
          "options": [
            "Opens files in read-only mode automatically",
            "Guarantees the file is closed automatically when exiting the block",
            "Encrypts file data",
            "Faster disk read speed"
          ],
          "answerIndex": 1,
          "explanation": "with open() automatically handles resource cleanup and file closing."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: Try Except Catch Handler",
          "prompt": "Catch ZeroDivisionError safely. Print `Exception Handled Verified!`.",
          "starterCode": "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    pass\n\n# TODO: Print 'Exception Handled Verified!'\n",
          "expectedKeyword": "Exception Handled Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: JSON Dump & Load Simulation",
          "prompt": "Simulate json.dumps({'status': 'ok'}). Print `JSON Dump Verified!`.",
          "starterCode": "import json\ndata = {'status': 'ok'}\n\n# TODO: Call json.dumps(data)\n\n# TODO: Print 'JSON Dump Verified!'\n",
          "expectedKeyword": "JSON Dump Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: OS File Exists Verification",
          "prompt": "Check os.path.exists() status. Print `OS File Check Verified!`.",
          "starterCode": "import os\n\n# TODO: Check os.path.exists('main.py')\n\n# TODO: Print 'OS File Check Verified!'\n",
          "expectedKeyword": "OS File Check Verified!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Threading Worker Execution",
          "prompt": "Create threading.Thread(target=fn). Print `Threading Worker Verified!`.",
          "starterCode": "import threading\ndef worker(): pass\n\n# TODO: Create t = threading.Thread(target=worker)\n\n# TODO: Print 'Threading Worker Verified!'\n",
          "expectedKeyword": "Threading Worker Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: CSV Reader Dict Generation",
          "prompt": "Simulate reading CSV rows. Print `CSV Reader Verified!`.",
          "starterCode": "import csv\n\n# TODO: Simulate CSV row parsing\n\n# TODO: Print 'CSV Reader Verified!'\n",
          "expectedKeyword": "CSV Reader Verified!"
        }
      ],
      "tasks": [
        {
          "id": "py20_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py20_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (08:14:56 \u2013 09:13:49) (+20 XP)",
          completed: false
        },
        {
          "id": "py20_t3",
          "text": "\u270d\ufe0f Task: Read a CSV file into Python dictionaries using the csv module (+30 XP)",
          completed: false
        },
        {
          "id": "py20_t4",
          "text": "\ud83d\ude80 Mini-Project: Multi-Threaded Task Manager & File Logger (+50 XP)",
          completed: false
        }
      ],
      "starterCode": "import json\ndata = json.dumps({'status': 'ok'})\nprint('JSON Dump Verified!')",
      "expectedKeyword": "JSON Dump Verified!"
    },
    {
      "day": 21,
      "title": "Day 21 \u2013 REST APIs & Desktop Weather App Sprint (PyQt5 Capstone)",
      "unit": "Unit 21: Capstone Desktop Weather App",
      "topic": "requests.get(), JSON API parsing & PyQt5 GUI Capstone Application",
      "playlistUrl": "https://youtu.be/ix9cRaBkVe0?si=00QHFZgmHIMezhZi",
      "videoBreakdown": "\ud83c\udfa5 Watch Video: Bro Code (09:13:50 \u2013 11:59:51) | Capstone Desktop App",
      "whatToLearn": {
        "summary": "Master REST API integrations using requests.get(), parse live JSON payloads, and build the 21-Day Capstone Graphical Desktop Weather App with PyQt5.",
        "details": [
          "\ud83c\udfa5 Watch Bro Code Video (09:13:50 \u2013 11:59:51) & Capstone Desktop App",
          "Fetch live weather data from OpenWeather REST API using requests.get()",
          "Parse JSON response streams into Python dictionaries",
          "Build PyQt5 Desktop GUI (QApplication, QWidget, QLabel, QPushButton, QVBoxLayout)"
        ],
        "codeExample": "import requests\n\n# OpenWeather REST API Simulation\nurl = 'https://api.open-meteo.com/v1/forecast?latitude=9.9312&longitude=76.2673&current_weather=true'\ntry:\n    response = requests.get(url)\n    if response.status_code == 200:\n        data = response.json()\n        print(f'Kochi Temp: {data[\"current_weather\"][\"temperature\"]}\u00b0C')\nexcept Exception as e:\n    print(f'Error fetching API: {e}')"
      },
      "mcqQuestions": [
        {
          "question": "Which method converts an HTTP API response stream into a Python dictionary object?",
          "options": [
            "response.text",
            "response.json()",
            "response.dict()",
            "json.dumps(response)"
          ],
          "answerIndex": 1,
          "explanation": "response.json() parses raw HTTP response JSON streams into Python dictionaries."
        }
      ],
      "terminalChallenges": [
        {
          "id": 1,
          "title": "Challenge 1: REST API Response Json Deserialization",
          "prompt": "Convert response object via response.json(). Print `REST API Json Verified!`.",
          "starterCode": "data = {'temp': 28.5, 'city': 'Kochi'}\n\n# TODO: Access data['city'] and data['temp']\n\n# TODO: Print 'REST API Json Verified!'\n",
          "expectedKeyword": "REST API Json Verified!"
        },
        {
          "id": 2,
          "title": "Challenge 2: HTTP Status Code 200 Check",
          "prompt": "Check status_code == 200. Print `HTTP Status 200 Verified!`.",
          "starterCode": "status_code = 200\n\n# TODO: Verify status_code == 200\n\n# TODO: Print 'HTTP Status 200 Verified!'\n",
          "expectedKeyword": "HTTP Status 200 Verified!"
        },
        {
          "id": 3,
          "title": "Challenge 3: PyQt5 Widget Initialization",
          "prompt": "Initialize PyQt5 app window simulation. Print `PyQt5 Window Initialized!`.",
          "starterCode": "app_name = 'DevQuik Weather GUI'\n\n# TODO: Initialize window name\n\n# TODO: Print 'PyQt5 Window Initialized!'\n",
          "expectedKeyword": "PyQt5 Window Initialized!"
        },
        {
          "id": 4,
          "title": "Challenge 4: Temperature Unit Kelvin to Celsius",
          "prompt": "Convert 300K to Celsius (300 - 273.15). Print `Celsius Conversion Verified!`.",
          "starterCode": "kelvin = 300\n\n# TODO: Compute celsius = kelvin - 273.15\n\n# TODO: Print 'Celsius Conversion Verified!'\n",
          "expectedKeyword": "Celsius Conversion Verified!"
        },
        {
          "id": 5,
          "title": "Challenge 5: 21-Day Python Mastery Track Completion",
          "prompt": "Log total 21 days completed. Print `21-Day Python Mastery Completed!`.",
          "starterCode": "total_days = 21\n\n# TODO: Print 'All 21 Days Completed! 21-Day Python Mastery Completed!'\n",
          "expectedKeyword": "21-Day Python Mastery Completed!"
        }
      ],
      "tasks": [
        {
          "id": "py21_t1",
          "text": "Log Daily GitHub Push (+50 XP)",
          completed: false
        },
        {
          "id": "py21_t2",
          "text": "\ud83c\udfa5 Watch Video: Bro Code (09:13:50 \u2013 11:59:51) (+20 XP)",
          completed: false
        },
        {
          "id": "py21_t3",
          "text": "\u270d\ufe0f Task: Fetch live weather data using requests.get(url) and extract temperature values (+30 XP)",
          completed: false
        },
        {
          "id": "py21_t4",
          "text": "\ud83d\ude80 Capstone Project: Complete Graphical Weather App with PyQt5 (+100 XP)",
          completed: false
        }
      ],
      "starterCode": "total_days = 21\nprint('All 21 Days Completed! 21-Day Python Mastery Completed!')",
      "expectedKeyword": "21-Day Python Mastery Completed!"
    }
  ]
}
];
