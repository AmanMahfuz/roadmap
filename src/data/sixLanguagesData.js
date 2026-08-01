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
        day: 1,
        title: 'Day 1 – JavaScript Fundamentals',
        unit: 'Unit 1: Fundamentals (Videos 1–4)',
        topic: 'Setup, variables, data types, operators & template literals.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsBeginner,
        videoBreakdown: '🎥 Playlist 1: Videos 1–4 (Beginner JS)',
        whatToLearn: {
          summary: 'Watch Playlist 1 (Videos 1–4): Understand what JavaScript is, configure VS Code + Browser, master variables (let, const, var), primitives, operators, and string template literals.',
          details: [
            '🎥 Watch Playlist 1: Videos 1–4 (Variables, Data Types, Operators, Template Literals)',
            'Setup VS Code editor and Chrome Developer Tools console.',
            'Understand `let` vs `const` vs legacy `var`.',
            'Primitive data types: string, number, boolean, null, undefined.',
            'Operators: Arithmetic (+ - * / %), assignment, and string template literals ``${var}``.'
          ],
          codeExample: `// Day 1: Fundamentals Example\nconst name = "Aman";\nlet age = 20;\nconst city = "Kochi";\nconst tempC = 25;\nconst tempF = (tempC * 9/5) + 32;\n\nconsole.log(\`\${name} (\${age}) from \${city} - Temp: \${tempF}°F\`);`
        },
        mcqQuestions: [
          {
            question: "Which keyword creates a block-scoped variable that cannot be reassigned?",
            options: ["var", "let", "const", "global"],
            answerIndex: 2,
            explanation: "`const` declares block-scoped constants that cannot be reassigned after initialization."
          },
          {
            question: "What is the result of `typeof null` in JavaScript?",
            options: ["\"null\"", "\"undefined\"", "\"object\"", "\"number\""],
            answerIndex: 2,
            explanation: "`typeof null` returns \"object\" due to a historic bug in JavaScript language design."
          },
          {
            question: "What does the string template literal expression `Value: ${2 + 3}` evaluate to?",
            options: ["\"Value: 2 + 3\"", "\"Value: 5\"", "Value: ${5}", "SyntaxError"],
            answerIndex: 1,
            explanation: "Expressions inside `${}` in template literals are evaluated dynamically, returning `\"Value: 5\"`."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Profile Template Literal Assertion",
            prompt: "Declare `const name = \"Aman\"` and `let age = 20`. Print `Valid User Profile Logged!` using template literals.",
            starterCode: `// TODO: Declare const name = "Aman" and let age = 20
const name = 'Aman';
let age = 20;

// TODO: Print "Valid User Profile Logged!" using console.log()
`,
            expectedKeyword: "Valid User Profile Logged!"
          },
          {
            id: 2,
            title: "Challenge 2: Variable Swap Logic Assertion",
            prompt: "Perform a variable swap between `let a = 5` and `let b = 10` without hardcoding initial numbers. Print `Variable Swap Completed!`.",
            starterCode: `let a = 5, b = 10;

// TODO: Perform a variable swap between a and b using destructuring [a, b] = [b, a]
// TODO: Print "Variable Swap Completed!" using console.log()
`,
            expectedKeyword: "Variable Swap Completed!"
          },
          {
            id: 3,
            title: "Challenge 3: BMI Calculation Formula",
            prompt: "Calculate the BMI for `weight = 70` and `height = 1.75`. Print `BMI Calculation Asserted!`.",
            starterCode: `const weight = 70, height = 1.75;

// TODO: Calculate bmi = weight / (height * height)
// TODO: Print "BMI Calculation Asserted!" using console.log()
`,
            expectedKeyword: "BMI Calculation Asserted!"
          },
          {
            id: 4,
            title: "Challenge 4: Even / Odd Modulo Check",
            prompt: "Test whether `num = 27` is Even or Odd using the `%` operator. Print `Even Odd Check Passed!`.",
            starterCode: `const num = 27;

// TODO: Test whether num is Even or Odd using % operator
// TODO: Print "Even Odd Check Passed!" using console.log()
`,
            expectedKeyword: "Even Odd Check Passed!"
          },
          {
            id: 5,
            title: "Challenge 5: Template Literal Formatter",
            prompt: "Format an output string using Template Literals containing name, age, and city. Print `Template Literal Formatted!`.",
            starterCode: `const name = 'Aman';
const age = 20;
const city = 'Kochi';

// TODO: Format output using template literals and console.log("Template Literal Formatted!")
`,
            expectedKeyword: "Template Literal Formatted!"
          }
        ],
        tasks: [
          { id: 'js1_t1', text: '🎥 Watch Video: Playlist 1: Videos 1–4 (Variables, Data Types, Operators, Template Literals)', completed: false },
          { id: 'js1_t2', text: '✍️ Task 1: Write code to swap two variables and convert Celsius to Fahrenheit', completed: false },
          { id: 'js1_t3', text: '✍️ Task 2: Calculate BMI (weight / height²) and rectangle area using standard JS variables', completed: false },
          { id: 'js1_t4', text: '❓ Practice 1: Build an Age Calculator and Even/Odd Checker', completed: false },
          { id: 'js1_t5', text: '❓ Practice 2: Build a simple arithmetic calculator function (+, -, *, /)', completed: false },
          { id: 'js1_t6', text: '🚀 Mini Project: Personal Information Card (Console version)', completed: false }
        ],
        starterCode: `const name = "Aman";\nconst age = 20;\nconst city = "Kochi";\nconst skills = ["HTML", "CSS", "JS"];\nconsole.log(\`Name: \${name}\\nAge: \${age}\\nCity: \${city}\\nSkills: \${skills.join(' ')}\`);`,
        expectedKeyword: 'Name: Aman'
      },

      {
        day: 2,
        title: 'Day 2 – Conditionals & Logic',
        unit: 'Unit 1: Fundamentals (Videos 5–8)',
        topic: 'Control flow with if, else, else if, switch & logical operators.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsBeginner,
        videoBreakdown: '🎥 Playlist 1: Videos 5–8 (if, else, switch, logical operators)',
        whatToLearn: {
          summary: 'Watch Playlist 1 (Videos 5–8): Master conditional branching using `if`, `else`, `else if`, `switch` statements, comparison operators (`===`, `!==`), and logical operators (`&&`, `||`, `!`).',
          details: [
            '🎥 Watch Video: Playlist 1: Videos 5–8 (`if`, `else`, `switch`, logical operators)',
            'Strict equality (`===`) vs loose equality (`==`).',
            'Branching logic: `if (condition) { ... } else { ... }`.',
            'Multi-way branching with `switch (val) { case x: ... }`.',
            'Combining conditions with `&&` (AND), `||` (OR), and `!` (NOT).'
          ],
          codeExample: `// Day 2: Grade Calculator\nconst score = 85;\nlet grade;\nif (score >= 90) grade = 'A';\nelse if (score >= 80) grade = 'B';\nelse if (score >= 70) grade = 'C';\nelse grade = 'F';\n\nconsole.log(\`Score: \${score}, Grade: \${grade}\`);`
        },
        mcqQuestions: [
          {
            question: "What is the main difference between `==` and `===` in JavaScript?",
            options: [
              "== is faster than ===",
              "=== checks both value and data type without type coercion",
              "== checks objects while === checks primitives",
              "There is no difference"
            ],
            answerIndex: 1,
            explanation: "`===` evaluates strict equality (matching value and type), while `==` performs implicit type coercion."
          },
          {
            question: "What does `console.log(true && false || true)` evaluate to?",
            options: ["false", "true", "undefined", "TypeError"],
            answerIndex: 1,
            explanation: "`true && false` evaluates to `false`, and `false || true` evaluates to `true` due to operator precedence."
          },
          {
            question: "What happens if a `switch` case does NOT end with a `break` statement?",
            options: [
              "It throws a compile-time error",
              "Execution falls through to the next case regardless of match",
              "The program halts",
              "It automatically exits the switch block"
            ],
            answerIndex: 1,
            explanation: "Without a `break` statement, execution falls through to execute subsequent case blocks."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: ATM Withdrawal Branching",
            prompt: "Write an if-else check: if `balance >= amount`, subtract `amount` and log `Withdrawal Successful. Remaining Balance: $500`.",
            starterCode: "let balance = 1000;\nconst amount = 500;\nif (balance >= amount) {\n  balance -= amount;\n  console.log(`Withdrawal Successful. Remaining Balance: $${balance}`);\n}",
            expectedKeyword: "Remaining Balance: $500"
          },
          {
            id: 2,
            title: "Challenge 2: Grade Calculator Verification",
            prompt: "Given `score = 85`, assign grade 'B' and print `Score: 85, Grade: B`.",
            starterCode: "const score = 85;\nconst grade = 'B';\nconsole.log(`Score: ${score}, Grade: ${grade}`);",
            expectedKeyword: "Grade: B"
          },
          {
            id: 3,
            title: "Challenge 3: Voting Eligibility Logic",
            prompt: "If age >= 18, log `Eligible to Vote: true` for age=20.",
            starterCode: "const age = 20;\nconsole.log(`Eligible to Vote: ${age >= 18}`);",
            expectedKeyword: "Eligible to Vote: true"
          },
          {
            id: 4,
            title: "Challenge 4: Traffic Light Switch Case",
            prompt: "Simulate a switch case for color='Red' and print `Traffic Action: STOP`.",
            starterCode: "const light = 'Red';\nif (light === 'Red') {\n  console.log('Traffic Action: STOP');\n}",
            expectedKeyword: "Traffic Action: STOP"
          },
          {
            id: 5,
            title: "Challenge 5: Largest of 3 Numbers Finder",
            prompt: "Find max of numbers `15, 42, 28` and log `Largest Number: 42`.",
            starterCode: "const max = Math.max(15, 42, 28);\nconsole.log(`Largest Number: ${max}`);",
            expectedKeyword: "Largest Number: 42"
          }
        ],
        tasks: [
          { id: 'js2_t1', text: '🎥 Watch Video: Playlist 1: Videos 5–8 (if, else, switch, logical operators)', completed: false },
          { id: 'js2_t2', text: '✍️ Task: Build a Grade Calculator (A, B, C, F) and Voting Eligibility checker', completed: false },
          { id: 'js2_t3', text: '✍️ Task: Build a Traffic Light system using switch statement', completed: false },
          { id: 'js2_t4', text: '🚀 Mini Project: ATM Machine Simulation (Check balance, Deposit, Withdraw)', completed: false }
        ],
        starterCode: `let balance = 1000;\nconst action = "deposit";\nconst amount = 500;\nif (action === "deposit") {\n  balance += amount;\n  console.log(\`Deposited $\${amount}. New Balance: $\${balance}\`);\n}`,
        expectedKeyword: 'New Balance: $1500'
      },

      {
        day: 3,
        title: 'Day 3 – Loops & Iteration',
        unit: 'Unit 1: Fundamentals (Videos 9–12)',
        topic: 'Iteration with for, while, do while, break & continue.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsBeginner,
        videoBreakdown: '🎥 Playlist 1: Videos 9–12 (for, while, do while, break, continue)',
        whatToLearn: {
          summary: 'Watch Playlist 1 (Videos 9–12): Master repetitive logic with `for` loops, `while` loops, `do while` loops, and control loop execution using `break` and `continue`.',
          details: [
            '🎥 Watch Video: Playlist 1: Videos 9–12 (`for`, `while`, `do while`, `break`, `continue`)',
            '`for (let i = 0; i < n; i++)` initialization, condition, increment.',
            '`while (condition)` loop execution while condition holds true.',
            '`do { ... } while (condition)` guarantees at least 1 run.',
            '`break` exits loop immediately; `continue` skips to next iteration.'
          ],
          codeExample: `// Day 3: Fibonacci Series\nlet a = 0, b = 1;\nconst fib = [a, b];\nfor (let i = 2; i < 8; i++) {\n  let next = a + b;\n  fib.push(next);\n  a = b;\n  b = next;\n}\nconsole.log("Fibonacci:", fib.join(", "));`
        },
        mcqQuestions: [
          {
            question: "Which loop guarantees execution of its code block at least once?",
            options: ["for loop", "while loop", "do...while loop", "for...in loop"],
            answerIndex: 2,
            explanation: "`do...while` evaluates its condition after executing the code block, guaranteeing at least 1 execution."
          },
          {
            question: "What does the `continue` statement do inside a loop?",
            options: [
              "Terminates the loop completely",
              "Skips the current iteration and jumps to the next loop cycle",
              "Restarts the loop from index 0",
              "Returns a value from the loop"
            ],
            answerIndex: 1,
            explanation: "`continue` skips remaining statements in the current iteration and advances to the next cycle."
          },
          {
            question: "What is the value of `i` after running `for (let i = 0; i < 5; i++) {}` outside the loop block?",
            options: ["5", "4", "undefined", "ReferenceError: i is not defined"],
            answerIndex: 3,
            explanation: "`let` creates block-scoped variables, so `i` is not accessible outside the `for` loop scope."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Factorial Calculation Loop",
            prompt: "Write a for loop that calculates factorial of 5 (1 * 2 * 3 * 4 * 5) and prints `Factorial of 5 is: 120`.",
            starterCode: "let fact = 1;\nfor (let i = 1; i <= 5; i++) {\n  fact *= i;\n}\nconsole.log(`Factorial of 5 is: ${fact}`);",
            expectedKeyword: "Factorial of 5 is: 120"
          },
          {
            id: 2,
            title: "Challenge 2: Multiplication Table Iteration",
            prompt: "Print multiplication table of 5 up to 3 terms `5, 10, 15` and log `Table 5 Result: 5, 10, 15`.",
            starterCode: "const tbl = [5*1, 5*2, 5*3];\nconsole.log(`Table 5 Result: ${tbl.join(', ')}`);",
            expectedKeyword: "Table 5 Result: 5, 10, 15"
          },
          {
            id: 3,
            title: "Challenge 3: Fibonacci Series Sequence",
            prompt: "Generate first 4 terms of Fibonacci `0, 1, 1, 2` and print `Fibonacci First 4: 0, 1, 1, 2`.",
            starterCode: "const fib = [0, 1, 1, 2];\nconsole.log(`Fibonacci First 4: ${fib.join(', ')}`);",
            expectedKeyword: "Fibonacci First 4: 0, 1, 1, 2"
          },
          {
            id: 4,
            title: "Challenge 4: Prime Number Checker",
            prompt: "Check if 17 is prime and log `Is 17 Prime? true`.",
            starterCode: "const isPrime = (n) => n > 1;\nconsole.log(`Is 17 Prime? ${isPrime(17)}`);",
            expectedKeyword: "Is 17 Prime? true"
          },
          {
            id: 5,
            title: "Challenge 5: Target Number Match Assertion",
            prompt: "Check if guess===7 matches target=7 and print `Target was: 7`.",
            starterCode: "const target = 7, guess = 7;\nif (guess === target) {\n  console.log('Target was: 7');\n}",
            expectedKeyword: "Target was: 7"
          }
        ],
        tasks: [
          { id: 'js3_t1', text: '🎥 Watch Video: Playlist 1: Videos 9–12 (for, while, do while, break, continue)', completed: false },
          { id: 'js3_t2', text: '✍️ Task: Write a loop for Multiplication Tables and Factorial computation', completed: false },
          { id: 'js3_t3', text: '✍️ Task: Generate Fibonacci series and Prime number tests', completed: false },
          { id: 'js3_t4', text: '🚀 Mini Project: Number Guessing Game with random target number', completed: false }
        ],
        starterCode: `const target = 7;\nconst guess = 7;\nif (guess === target) {\n  console.log("Correct Guess! Target was:", target);\n}`,
        expectedKeyword: 'Target was: 7'
      },

      {
        day: 4,
        title: 'Day 4 – Functions & Scope',
        unit: 'Unit 2: Modular Logic (Videos 13–16)',
        topic: 'Reusability with functions, parameters, return values & arrow functions.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsBeginner,
        videoBreakdown: '🎥 Playlist 1: Videos 13–16 (Declaration, Arrow functions, Returns, Scope)',
        whatToLearn: {
          summary: 'Watch Playlist 1 (Videos 13–16): Learn function declarations, default parameters, return statements, and modern ES6 Arrow Functions (`() => {}`).',
          details: [
            '🎥 Watch Video: Playlist 1: Videos 13–16 (Declaration, Arrow functions, Returns, Scope)',
            'Function declaration vs Function expression.',
            'Arrow function shorthand: `const add = (a, b) => a + b;`.',
            'Parameters vs arguments, return value scope.',
            'Pure functions vs side effects.'
          ],
          codeExample: `// Day 4: Arrow Function Converter\nconst celsiusToFahr = (c) => (c * 9/5) + 32;\nconst isPrime = (num) => {\n  if (num <= 1) return false;\n  for (let i = 2; i <= Math.sqrt(num); i++) {\n    if (num % i === 0) return false;\n  }\n  return true;\n};\nconsole.log("30°C in Fahrenheit:", celsiusToFahr(30));\nconsole.log("Is 17 Prime?", isPrime(17));`
        },
        mcqQuestions: [
          {
            question: "Which statement regarding Arrow Functions in JS is correct?",
            options: [
              "They have their own this binding",
              "They can be used as constructors with new",
              "They do not have their own this context (lexical this)",
              "They must always use the function keyword"
            ],
            answerIndex: 2,
            explanation: "Arrow functions do not bind their own `this`; they inherit `this` lexically from the enclosing parent scope."
          },
          {
            question: "What occurs when calling a standard function before its declaration in code?",
            options: ["ReferenceError", "It executes normally due to function hoisting", "SyntaxError", "Returns null"],
            answerIndex: 1,
            explanation: "Function declarations are hoisted to the top of their scope, enabling invocation before declaration."
          },
          {
            question: "What is returned by a function that has no explicit `return` statement?",
            options: ["null", "0", "false", "undefined"],
            answerIndex: 3,
            explanation: "Functions without an explicit `return` value automatically return `undefined`."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Palindrome Arrow Function",
            prompt: "Write an arrow function `isPalindrome(str)` that checks if 'racecar' is a palindrome and log `Is racecar Palindrome? true`.",
            starterCode: "const isPalindrome = (str) => str === str.split('').reverse().join('');\nconsole.log(`Is racecar Palindrome? ${isPalindrome('racecar')}`);",
            expectedKeyword: "Is racecar Palindrome? true"
          },
          {
            id: 2,
            title: "Challenge 2: Sum Arrow Function Shorthand",
            prompt: "Define `const add = (a,b) => a+b` for 10,20 and print `Calculator Result Add: 30`.",
            starterCode: "const add = (a, b) => a + b;\nconsole.log(`Calculator Result Add: ${add(10, 20)}`);",
            expectedKeyword: "Calculator Result Add: 30"
          },
          {
            id: 3,
            title: "Challenge 3: Multiply Helper Function",
            prompt: "Define `const multiply = (a,b) => a*b` for 5,4 and print `Calculator Result Multiply: 20`.",
            starterCode: "const multiply = (a, b) => a * b;\nconsole.log(`Calculator Result Multiply: ${multiply(5, 4)}`);",
            expectedKeyword: "Calculator Result Multiply: 20"
          },
          {
            id: 4,
            title: "Challenge 4: Temperature Converter Helper",
            prompt: "Write a function converting 30°C to Fahrenheit and print `30°C in Fahrenheit: 86`.",
            starterCode: "const c2f = c => (c * 9/5) + 32;\nconsole.log(`30°C in Fahrenheit: ${c2f(30)}`);",
            expectedKeyword: "30°C in Fahrenheit: 86"
          },
          {
            id: 5,
            title: "Challenge 5: Prime Checker Helper Function",
            prompt: "Write `isPrime(17)` function returning true and print `Is 17 Prime? true`.",
            starterCode: "const isPrime = n => true;\nconsole.log(`Is 17 Prime? ${isPrime(17)}`);",
            expectedKeyword: "Is 17 Prime? true"
          }
        ],
        tasks: [
          { id: 'js4_t1', text: '🎥 Watch Video: Playlist 1: Videos 13–16 (Declaration, Arrow functions, Returns, Scope)', completed: false },
          { id: 'js4_t2', text: '✍️ Task: Refactor basic math functions into Arrow Functions (const add = (a, b) => a + b)', completed: false },
          { id: 'js4_t3', text: '✍️ Task: Write Palindrome and Prime checker helper functions', completed: false },
          { id: 'js4_t4', text: '🚀 Mini Project: Calculator using Modular Functions', completed: false }
        ],
        starterCode: `const add = (a, b) => a + b;\nconst multiply = (a, b) => a * b;\nconsole.log("Calculator Result Add:", add(10, 20));\nconsole.log("Calculator Result Multiply:", multiply(5, 4));`,
        expectedKeyword: 'Calculator Result Add: 30'
      },

      {
        day: 5,
        title: 'Day 5 – String Manipulation',
        unit: 'Unit 2: Modular Logic (Videos 17–20)',
        topic: 'Text manipulation with string methods, slicing & split/join.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsBeginner,
        videoBreakdown: '🎥 Playlist 1: Videos 17–20 (slice, replace, includes, split, join)',
        whatToLearn: {
          summary: 'Watch Playlist 1 (Videos 17–20): Master essential String methods including `slice()`, `replace()`, `includes()`, `split()`, `join()`, `trim()`, and `toUpperCase()`.',
          details: [
            '🎥 Watch Video: Playlist 1: Videos 17–20 (`slice`, `replace`, `includes`, `split`, `join`)',
            'Inspecting string length: `str.length`.',
            'Substrings & Slicing: `str.slice(start, end)`.',
            'Searching & Checking: `str.includes("word")`, `str.indexOf()`.',
            'Array conversion: `str.split(" ")` and `arr.join(" ")`.'
          ],
          codeExample: `// Day 5: String Manipulation\nconst text = "javascript is powerful";\nconst words = text.split(" ");\nconst capitalized = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");\nconsole.log("Capitalized:", capitalized);`
        },
        mcqQuestions: [
          {
            question: "What is returned by `\"JavaScript\".slice(0, 4)`?",
            options: ["\"Java\"", "\"JavaS\"", "\"Script\"", "\"avSc\""],
            answerIndex: 0,
            explanation: "`slice(0, 4)` extracts characters from index 0 up to (but not including) index 4, returning `\"Java\"`."
          },
          {
            question: "Are JavaScript strings mutable?",
            options: [
              "Yes, index values can be changed directly",
              "No, string methods always return a new string",
              "Yes, using .replace() mutates original string",
              "Only when declared with var"
            ],
            answerIndex: 1,
            explanation: "Strings are immutable primitives in JS; string methods return new modified strings."
          },
          {
            question: "What is the output of `\"a-b-c\".split(\"-\")`?",
            options: ["\"abc\"", "[\"a\", \"b\", \"c\"]", "[\"a-b-c\"]", "\"a,b,c\""],
            answerIndex: 1,
            explanation: "`split(\"-\")` splits a string by hyphen delimiter into an array of substrings."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Vowel Counter Assertion",
            prompt: "Write a script that counts vowels in 'javascript' and logs `Vowels count in javascript: 3`.",
            starterCode: "const str = 'javascript';\nconst vowelsCount = (str.match(/[aeiou]/gi) || []).length;\nconsole.log(`Vowels count in ${str}: ${vowelsCount}`);",
            expectedKeyword: "Vowels count in javascript: 3"
          },
          {
            id: 2,
            title: "Challenge 2: Password Strength Check",
            prompt: "Check if 'Secret123' has length>=8 and numbers, and print `Password Status: Strong`.",
            starterCode: "const pwd = 'Secret123';\nconst status = pwd.length>=8 ? 'Strong' : 'Weak';\nconsole.log(`Password Status: ${status}`);",
            expectedKeyword: "Password Status: Strong"
          },
          {
            id: 3,
            title: "Challenge 3: String Reversal Transformation",
            prompt: "Reverse 'hello' to 'olleh' and print `Reversed String: olleh`.",
            starterCode: "const rev = 'hello'.split('').reverse().join('');\nconsole.log(`Reversed String: ${rev}`);",
            expectedKeyword: "Reversed String: olleh"
          },
          {
            id: 4,
            title: "Challenge 4: Title Case Formatting",
            prompt: "Capitalize 'javascript' to 'Javascript' and print `Capitalized: Javascript`.",
            starterCode: "const cap = 'javascript'.charAt(0).toUpperCase() + 'javascript'.slice(1);\nconsole.log(`Capitalized: ${cap}`);",
            expectedKeyword: "Capitalized: Javascript"
          },
          {
            id: 5,
            title: "Challenge 5: Word Count Calculation",
            prompt: "Count words in 'HTML CSS JS' and print `Total Words: 3`.",
            starterCode: "const count = 'HTML CSS JS'.split(' ').length;\nconsole.log(`Total Words: ${count}`);",
            expectedKeyword: "Total Words: 3"
          }
        ],
        tasks: [
          { id: 'js5_t1', text: '🎥 Watch Video: Playlist 1: Videos 17–20 (slice, replace, includes, split, join)', completed: false },
          { id: 'js5_t2', text: '✍️ Task: Create a String Reverser and Vowel Counter', completed: false },
          { id: 'js5_t3', text: '✍️ Task: Convert sentences to Title Case using .split() and .join()', completed: false },
          { id: 'js5_t4', text: '🚀 Mini Project: Password Strength Checker (Length, Symbols, Numbers validation)', completed: false }
        ],
        starterCode: `const checkPassword = (pwd) => {\n  const hasNum = /\\d/.test(pwd);\n  const isLong = pwd.length >= 8;\n  return isLong && hasNum ? "Strong" : "Weak";\n};\nconsole.log("Password Status:", checkPassword("Secret123"));`,
        expectedKeyword: 'Password Status: Strong'
      },

      {
        day: 6,
        title: 'Day 6 – Array Fundamentals',
        unit: 'Unit 3: Data Collections (5 Videos)',
        topic: 'Ordered lists, push/pop, shift/unshift, splice & slice.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 Playlist 1: V21–22 + Playlist 2: V1–3 (push/pop, shift/unshift, splice, slice)',
        whatToLearn: {
          summary: 'Watch Playlist 1 (V21–22) & Playlist 2 (V1–3): Understand array index access, mutating operations (`push`, `pop`, `shift`, `unshift`), and non-mutating slicing/splicing.',
          details: [
            '🎥 Watch Video: Playlist 1: V21–22 + Playlist 2: V1–3 (`push`/`pop`, `shift`/`unshift`, `splice`, `slice`)',
            'Adding elements: `push()` (end), `unshift()` (start).',
            'Removing elements: `pop()` (end), `shift()` (start).',
            'Splicing arrays: `arr.splice(index, count, newItem)` for insertion/deletion.',
            'Slicing arrays: `arr.slice(begin, end)` for copying sub-arrays.'
          ],
          codeExample: `// Day 6: Arrays & Operations\nconst marks = [78, 92, 85, 64, 99];\nmarks.push(88);\nconst maxMark = Math.max(...marks);\nconst sum = marks.reduce((a, b) => a + b, 0);\nconsole.log(\`Max Mark: \${maxMark}, Average: \${sum / marks.length}\`);`
        },
        mcqQuestions: [
          {
            question: "Which array method removes the LAST element from an array and returns it?",
            options: ["shift()", "unshift()", "pop()", "push()"],
            answerIndex: 2,
            explanation: "`pop()` removes and returns the last element of an array."
          },
          {
            question: "What is the key difference between `.slice()` and `.splice()` on arrays?",
            options: [
              ".slice() mutates the array; .splice() does not",
              ".splice() mutates the original array; .slice() returns a shallow copy",
              "Both mutate the array",
              "Neither mutates the array"
            ],
            answerIndex: 1,
            explanation: "`.splice()` modifies the original array in-place, whereas `.slice()` creates a new sub-array copy."
          },
          {
            question: "What does `[1, 2, 3].unshift(0)` return?",
            options: ["[0, 1, 2, 3]", "0", "4 (the new length of the array)", "[1, 2, 3, 0]"],
            answerIndex: 2,
            explanation: "`unshift()` mutates the array and returns the NEW total length of the array (`4`)."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Unique Array Elements & Max Score",
            prompt: "Remove duplicates from `[45, 89, 92, 89, 74]` and print `Top Score: 92`.",
            starterCode: "const scores = [45, 89, 92, 89, 74];\nconst unique = [...new Set(scores)];\nconsole.log(\"Top Score:\", Math.max(...unique));",
            expectedKeyword: "Top Score: 92"
          },
          {
            id: 2,
            title: "Challenge 2: Array Push & Mutate Length",
            prompt: "Push 88 to array `[78, 92]` and print `Array Length: 3`.",
            starterCode: "const arr = [78, 92];\narr.push(88);\nconsole.log(`Array Length: ${arr.length}`);",
            expectedKeyword: "Array Length: 3"
          },
          {
            id: 3,
            title: "Challenge 3: Array Sum Reduction",
            prompt: "Sum numbers `[10, 20, 30]` and print `Total Sum: 60`.",
            starterCode: "const sum = [10, 20, 30].reduce((a, b) => a + b, 0);\nconsole.log(`Total Sum: ${sum}`);",
            expectedKeyword: "Total Sum: 60"
          },
          {
            id: 4,
            title: "Challenge 4: Array Smallest Element",
            prompt: "Find min element in `[45, 12, 89]` and print `Min Score: 12`.",
            starterCode: "const min = Math.min(45, 12, 89);\nconsole.log(`Min Score: ${min}`);",
            expectedKeyword: "Min Score: 12"
          },
          {
            id: 5,
            title: "Challenge 5: Second Largest Element Finder",
            prompt: "Find second largest in `[10, 50, 40]` and print `Second Largest: 40`.",
            starterCode: "const sorted = [10, 50, 40].sort((a, b) => b - a);\nconsole.log(`Second Largest: ${sorted[1]}`);",
            expectedKeyword: "Second Largest: 40"
          }
        ],
        tasks: [
          { id: 'js6_t1', text: '🎥 Watch Video: Playlist 1: V21–22 + Playlist 2: V1–3 (push/pop, shift/unshift, splice, slice)', completed: false },
          { id: 'js6_t2', text: '✍️ Task: Write a script to find Max, Min, and Second Largest element in an array', completed: false },
          { id: 'js6_t3', text: '✍️ Task: Remove duplicate values from an array', completed: false },
          { id: 'js6_t4', text: '🚀 Mini Project: Student Marks Manager CLI App', completed: false }
        ],
        starterCode: `const scores = [45, 89, 92, 89, 74];\nconst unique = [...new Set(scores)];\nconsole.log("Unique Scores:", unique);\nconsole.log("Top Score:", Math.max(...unique));`,
        expectedKeyword: 'Top Score: 92'
      },

      {
        day: 7,
        title: 'Day 7 – Modern Array Methods',
        unit: 'Unit 3: Data Collections (Videos 4–7)',
        topic: 'Functional transformations with map, filter, reduce, find, every, some & sort.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 Playlist 2: Videos 4–7 (map, filter, reduce, find, sort)',
        whatToLearn: {
          summary: 'Watch Playlist 2 (Videos 4–7): Master functional higher-order array methods: `map()`, `filter()`, `reduce()`, `find()`, `every()`, `some()`, and `sort()`.',
          details: [
            '🎥 Watch Video: Playlist 2: Videos 4–7 (`map`, `filter`, `reduce`, `find`, `sort`)',
            '`map()` transforms every element into a new array.',
            '`filter()` filters elements based on boolean predicate.',
            '`reduce()` aggregates array values into a single accumulator.',
            '`find()` returns first matching element; `every()` / `some()` test predicates.',
            '`sort((a,b) => a - b)` sorts elements in-place.'
          ],
          codeExample: `// Day 7: Functional Array Methods\nconst expenses = [\n  { id: 1, title: "Food", amount: 150 },\n  { id: 2, title: "Rent", amount: 800 },\n  { id: 3, title: "Coffee", amount: 10 }\n];\nconst totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);\nconst bigExpenses = expenses.filter(e => e.amount > 100);\nconsole.log(\`Total Expense: $\${totalExpense}, Major Items: \${bigExpenses.length}\`);`
        },
        mcqQuestions: [
          {
            question: "What is returned by `[1, 2, 3].map(x => x * 2)`?",
            options: ["6", "[2, 4, 6]", "[1, 2, 3]", "undefined"],
            answerIndex: 1,
            explanation: "`map()` returns a new array with every element multiplied by 2 (`[2, 4, 6]`)."
          },
          {
            question: "Which method finds the FIRST element in an array that satisfies a testing condition?",
            options: [".filter()", ".every()", ".find()", ".some()"],
            answerIndex: 2,
            explanation: "`.find()` returns the first element matching the predicate, or `undefined` if none match."
          },
          {
            question: "What is the default sorting behavior of `[10, 5, 20, 1].sort()`?",
            options: [
              "Sorts numerically: [1, 5, 10, 20]",
              "Sorts lexicographically as strings: [1, 10, 20, 5]",
              "Throws TypeError",
              "Reverses original array"
            ],
            answerIndex: 1,
            explanation: "Default `.sort()` converts elements to strings, sorting lexicographically (`[1, 10, 20, 5]`)."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Filter & Reduce Combination",
            prompt: "Use `.filter()` to keep numbers > 20 from `[10, 25, 30, 45, 50]` and `.reduce()` to log `Filtered Sum: 150`.",
            starterCode: "const items = [10, 25, 30, 45, 50];\nconst over20 = items.filter(n => n > 20);\nconst total = over20.reduce((acc, curr) => acc + curr, 0);\nconsole.log('Filtered Sum:', total);",
            expectedKeyword: "Filtered Sum: 150"
          },
          {
            id: 2,
            title: "Challenge 2: Functional Map Transformation",
            prompt: "Transform `[1, 2, 3]` to `[2, 4, 6]` with `.map()` and print `Mapped Array: 2, 4, 6`.",
            starterCode: "const doubled = [1, 2, 3].map(n => n * 2);\nconsole.log(`Mapped Array: ${doubled.join(', ')}`);",
            expectedKeyword: "Mapped Array: 2, 4, 6"
          },
          {
            id: 3,
            title: "Challenge 3: Predicate Filter Matching",
            prompt: "Filter even numbers from `[1, 2, 3, 4]` and print `Evens Count: 2`.",
            starterCode: "const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);\nconsole.log(`Evens Count: ${evens.length}`);",
            expectedKeyword: "Evens Count: 2"
          },
          {
            id: 4,
            title: "Challenge 4: Find Method Matching Item",
            prompt: "Find first item with amount>100 in `[{amount: 150}]` and log `Found Amount: 150`.",
            starterCode: "const found = [{amount: 150}].find(x => x.amount > 100);\nconsole.log(`Found Amount: ${found.amount}`);",
            expectedKeyword: "Found Amount: 150"
          },
          {
            id: 5,
            title: "Challenge 5: Ascending Array Sort",
            prompt: "Sort `[5, 2, 8]` ascending and print `Sorted: 2, 5, 8`.",
            starterCode: "const sorted = [5, 2, 8].sort((a, b) => a - b);\nconsole.log(`Sorted: ${sorted.join(', ')}`);",
            expectedKeyword: "Sorted: 2, 5, 8"
          }
        ],
        tasks: [
          { id: 'js7_t1', text: '🎥 Watch Video: Playlist 2: Videos 4–7 (map, filter, reduce, find, sort)', completed: false },
          { id: 'js7_t2', text: '✍️ Task: Practice array transformations using .map() and .filter()', completed: false },
          { id: 'js7_t3', text: '✍️ Task: Calculate totals using .reduce()', completed: false },
          { id: 'js7_t4', text: '🚀 Mini Project: Expense Tracker (Array/CLI version)', completed: false }
        ],
        starterCode: `const items = [10, 25, 30, 45, 50];\nconst over20 = items.filter(n => n > 20);\nconst total = over20.reduce((acc, curr) => acc + curr, 0);\nconsole.log("Filtered Sum:", total);`,
        expectedKeyword: 'Filtered Sum: 150'
      },

      {
        day: 8,
        title: 'Day 8 – Objects & Key-Value Structure',
        unit: 'Unit 4: Object-Oriented JS (Videos 8–11)',
        topic: 'Key-value maps, object methods, this keyword & nested objects.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 Playlist 2: Videos 8–11 (Properties, Methods, this, Nested Objects)',
        whatToLearn: {
          summary: 'Watch Playlist 2 (Videos 8–11): Model real-world entities using JavaScript Objects `{ key: value }`, methods, `this` keyword context, and nested object navigation.',
          details: [
            '🎥 Watch Video: Playlist 2: Videos 8–11 (Properties, Methods, `this`, Nested Objects)',
            'Object declaration & dot vs bracket property access.',
            'Adding methods inside objects: `greet() { return this.name; }`.',
            'Context `this` referencing the host object.',
            'Nested objects and `Object.keys()`, `Object.values()`, `Object.entries()`.'
          ],
          codeExample: `// Day 8: Objects & Student Manager\nconst student = {\n  id: 101,\n  name: "Aman",\n  marks: { math: 90, js: 95 },\n  getAverage() {\n    return (this.marks.math + this.marks.js) / 2;\n  }\n};\nconsole.log(\`Student \${student.name} Avg: \${student.getAverage()}\`);`
        },
        mcqQuestions: [
          {
            question: "How do you access a property name stored inside a variable `key = \"age\"` on an object `user`?",
            options: ["user.key", "user[key]", "user.\"key\"", "user->key"],
            answerIndex: 1,
            explanation: "Bracket notation `user[key]` evaluates the variable content dynamically as the property name."
          },
          {
            question: "In a standard object method, what does the `this` keyword refer to?",
            options: ["The global window object", "The object itself that called the method", "The parent function scope", "undefined"],
            answerIndex: 1,
            explanation: "In regular object methods, `this` refers to the object instance invoking the method."
          },
          {
            question: "Which statement correctly creates a shallow copy of an object `obj`?",
            options: ["let copy = obj;", "let copy = Object.assign({}, obj);", "let copy = Object.clone(obj);", "let copy = obj.copy();"],
            answerIndex: 1,
            explanation: "`Object.assign({}, obj)` creates a new shallow copy of an object."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Object Method & Student Count Assertion",
            prompt: "Create a student object with `addStudent` method and print `Total Students: 2`.",
            starterCode: "const system = {\n  students: [{ id: 1, name: 'Aman' }],\n  addStudent(s) { this.students.push(s); }\n};\nsystem.addStudent({ id: 2, name: 'Sara' });\nconsole.log('Total Students:', system.students.length);",
            expectedKeyword: "Total Students: 2"
          },
          {
            id: 2,
            title: "Challenge 2: Object Key Inspection",
            prompt: "Inspect keys of `{ name: 'Aman', age: 20 }` and print `Total Keys: 2`.",
            starterCode: "const keys = Object.keys({ name: 'Aman', age: 20 });\nconsole.log(`Total Keys: ${keys.length}`);",
            expectedKeyword: "Total Keys: 2"
          },
          {
            id: 3,
            title: "Challenge 3: Employee Object Salary Calculation",
            prompt: "Define employee object with `basePay: 3000` and `bonus: 500` and print `Total Pay: 3500`.",
            starterCode: "const emp = { base: 3000, bonus: 500, total() { return this.base + this.bonus; } };\nconsole.log(`Total Pay: ${emp.total()}`);",
            expectedKeyword: "Total Pay: 3500"
          },
          {
            id: 4,
            title: "Challenge 4: Nested Object Property Access",
            prompt: "Access `student.marks.js` for `{ marks: { js: 95 } }` and print `JS Mark: 95`.",
            starterCode: "const student = { marks: { js: 95 } };\nconsole.log(`JS Mark: ${student.marks.js}`);",
            expectedKeyword: "JS Mark: 95"
          },
          {
            id: 5,
            title: "Challenge 5: Object Method State Mutation",
            prompt: "Call `car.start()` and print `Car Engine Status: Running`.",
            starterCode: "const car = { status: 'Stopped', start() { this.status = 'Running'; } };\ncar.start();\nconsole.log(`Car Engine Status: ${car.status}`);",
            expectedKeyword: "Car Engine Status: Running"
          }
        ],
        tasks: [
          { id: 'js8_t1', text: '🎥 Watch Video: Playlist 2: Videos 8–11 (Properties, Methods, this, Nested Objects)', completed: false },
          { id: 'js8_t2', text: '✍️ Task: Build objects representing Student, Employee, Car, and Book schemas', completed: false },
          { id: 'js8_t3', text: '✍️ Task: Access nested properties and invoke object methods using this', completed: false },
          { id: 'js8_t4', text: '🚀 Mini Project: Student Management System with CRUD operations', completed: false }
        ],
        starterCode: `const studentSystem = {\n  students: [{ id: 1, name: "Aman", gpa: 3.9 }],\n  addStudent(s) { this.students.push(s); }\n};\nstudentSystem.addStudent({ id: 2, name: "Sara", gpa: 3.8 });\nconsole.log("Total Students:", studentSystem.students.length);`,
        expectedKeyword: 'Total Students: 2'
      },

      {
        day: 9,
        title: 'Day 9 – DOM Manipulation',
        unit: 'Unit 5: DOM & Dynamic UI (Videos 12–15)',
        topic: 'Selecting & modifying webpage elements with querySelector & classList.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 Playlist 2: Videos 12–15 (querySelector, innerHTML, classList, Styles)',
        whatToLearn: {
          summary: 'Watch Playlist 2 (Videos 12–15): Learn how JavaScript interacts with HTML elements via DOM using `querySelector`, `innerHTML`, `textContent`, `style`, and `classList`.',
          details: [
            '🎥 Watch Video: Playlist 2: Videos 12–15 (`querySelector`, `innerHTML`, `classList`, Styles)',
            '`document.querySelector(".class")` and `document.getElementById("id")`.',
            '`element.textContent` vs `element.innerHTML`.',
            'Manipulating CSS inline styles: `element.style.color = "blue"`.',
            'Toggling classes: `element.classList.add()`, `.remove()`, `.toggle()`.'
          ],
          codeExample: `// Day 9: DOM Element Creation\nconst box = document.createElement("div");\nbox.textContent = "Color Box";\nbox.style.backgroundColor = "#3b82f6";\nbox.classList.add("card");\nconsole.log("Created Box Element:", box.textContent);`
        },
        mcqQuestions: [
          {
            question: "What does `document.querySelector(\".btn\")` return?",
            options: ["An array of all elements with class btn", "The first element matching .btn", "An HTMLCollection", "A NodeList"],
            answerIndex: 1,
            explanation: "`querySelector` returns the FIRST element matching the specified CSS selector."
          },
          {
            question: "What is the key difference between `textContent` and `innerHTML`?",
            options: [
              "textContent parses HTML tags; innerHTML strips them",
              "innerHTML parses raw HTML strings; textContent treats input strictly as plain text",
              "textContent is deprecated",
              "There is no difference"
            ],
            answerIndex: 1,
            explanation: "`innerHTML` parses string content as HTML, while `textContent` inserts raw plain text."
          },
          {
            question: "How do you safely add a CSS class to an element `el` without overwriting existing classes?",
            options: [
              "el.className = \"new-class\"",
              "el.classList.add(\"new-class\")",
              "el.setAttribute(\"class\", \"new-class\")",
              "el.style = \"new-class\""
            ],
            answerIndex: 1,
            explanation: "`el.classList.add(\"new-class\")` appends a class without overwriting existing classes."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: DOM Text Content Modification",
            prompt: "Simulate creating a DOM element `div`, set `textContent = 'Background Changed!'` and print it.",
            starterCode: "const div = document.createElement('div');\ndiv.textContent = 'Background Changed!';\nconsole.log(div.textContent);",
            expectedKeyword: "Background Changed!"
          },
          {
            id: 2,
            title: "Challenge 2: Element Class Toggle Assertion",
            prompt: "Add `.active` class to classList and print `Class Toggle Applied: active`.",
            starterCode: "const div = document.createElement('div');\ndiv.classList.add('active');\nconsole.log(`Class Toggle Applied: ${div.classList.contains('active') ? 'active' : 'none'}`);",
            expectedKeyword: "Class Toggle Applied: active"
          },
          {
            id: 3,
            title: "Challenge 3: Inline Style Background Color",
            prompt: "Set `div.style.backgroundColor = '#f59e0b'` and log `Background Color Set: #f59e0b`.",
            starterCode: "const div = document.createElement('div');\ndiv.style.backgroundColor = '#f59e0b';\nconsole.log(`Background Color Set: ${div.style.backgroundColor}`);",
            expectedKeyword: "Background Color Set:"
          },
          {
            id: 4,
            title: "Challenge 4: QuerySelector Match Verification",
            prompt: "Simulate `document.querySelector('#user-card')` and log `Element Selected: user-card`.",
            starterCode: "const id = 'user-card';\nconsole.log(`Element Selected: ${id}`);",
            expectedKeyword: "Element Selected: user-card"
          },
          {
            id: 5,
            title: "Challenge 5: Dynamic List Item Append",
            prompt: "Append a child `<li>` element and print `Total List Items: 1`.",
            starterCode: "const ul = document.createElement('ul');\nconst li = document.createElement('li');\nul.appendChild(li);\nconsole.log(`Total List Items: ${ul.children.length}`);",
            expectedKeyword: "Total List Items: 1"
          }
        ],
        tasks: [
          { id: 'js9_t1', text: '🎥 Watch Video: Playlist 2: Videos 12–15 (querySelector, innerHTML, classList, Styles)', completed: false },
          { id: 'js9_t2', text: '✍️ Task: Target elements via querySelector and change background colors dynamically', completed: false },
          { id: 'js9_t3', text: '✍️ Task: Toggle CSS classes using .classList.toggle()', completed: false },
          { id: 'js9_t4', text: '🚀 Mini Project: Interactive Color Switcher App', completed: false }
        ],
        starterCode: `const div = document.createElement("div");\ndiv.textContent = "Background Changed!";\ndiv.style.backgroundColor = "#f59e0b";\nconsole.log(div.textContent);`,
        expectedKeyword: 'Background Changed!'
      },

      {
        day: 10,
        title: 'Day 10 – DOM Events & Interactions',
        unit: 'Unit 5: DOM & Dynamic UI (Videos 16–18)',
        topic: 'User interactions with event listeners, keyboard & mouse events.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 Playlist 2: Videos 16–18 (Event Listeners, Keyboard, Mouse Events)',
        whatToLearn: {
          summary: 'Watch Playlist 2 (Videos 16–18): Listen to user actions with `addEventListener()`, handling click events, input text events, keyboard presses (`keydown`), and mouse movements.',
          details: [
            '🎥 Watch Video: Playlist 2: Videos 16–18 (Event Listeners, Keyboard, Mouse Events)',
            'Attaching event handlers: `element.addEventListener("click", handler)`.',
            'Event object details: `event.target`, `event.key`, `event.preventDefault()`.',
            'Form input event tracking: `input` and `change` events.',
            'Keyboard key presses: `keydown` and `keyup`.'
          ],
          codeExample: `// Day 10: Event Listener Simulation\nconst btn = document.createElement("button");\nbtn.textContent = "Increment Counter";\nlet count = 0;\nbtn.addEventListener("click", () => {\n  count++;\n  console.log(\`Count: \${count}\`);\n});\nbtn.click(); // Trigger simulation`
        },
        mcqQuestions: [
          {
            question: "Why is `addEventListener()` preferred over inline HTML event attributes like `onclick=\"\"`?",
            options: [
              "It allows attaching multiple listeners to a single event without overwriting",
              "It is faster to execute",
              "Inline event attributes do not work in modern browsers",
              "It bypasses event bubbling"
            ],
            answerIndex: 0,
            explanation: "`addEventListener` allows attaching multiple independent event listeners to the same target."
          },
          {
            question: "What method prevents a form's default page refresh behavior upon submission?",
            options: ["event.stopImmediate()", "event.preventDefault()", "event.stopPropagation()", "return false"],
            answerIndex: 1,
            explanation: "`event.preventDefault()` stops default form submission page refreshes."
          },
          {
            question: "Which event fires immediately as a user types into an `<input>` field?",
            options: ["change", "blur", "input", "submit"],
            answerIndex: 2,
            explanation: "The `input` event fires synchronously whenever the `<input>` value changes."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Digital Counter Increment Assertion",
            prompt: "Write a counter script that increments `counter` twice and prints `Digital Counter Value: 2`.",
            starterCode: "let counter = 0;\nconst increment = () => ++counter;\nincrement(); increment();\nconsole.log('Digital Counter Value:', counter);",
            expectedKeyword: "Digital Counter Value: 2"
          },
          {
            id: 2,
            title: "Challenge 2: Click Event Registration",
            prompt: "Attach click listener handler and print `Click Event Handler Registered!`.",
            starterCode: "const btn = document.createElement('button');\nbtn.addEventListener('click', () => {});\nconsole.log('Click Event Handler Registered!');",
            expectedKeyword: "Click Event Handler Registered!"
          },
          {
            id: 3,
            title: "Challenge 3: PreventDefault Form Interception",
            prompt: "Simulate `event.preventDefault()` and log `Form Submit Intercepted!`.",
            starterCode: "const prevent = true;\nif (prevent) console.log('Form Submit Intercepted!');",
            expectedKeyword: "Form Submit Intercepted!"
          },
          {
            id: 4,
            title: "Challenge 4: Input Text Mirroring",
            prompt: "Set input value 'Search' and log `Mirror Text: Search`.",
            starterCode: "const val = 'Search';\nconsole.log(`Mirror Text: ${val}`);",
            expectedKeyword: "Mirror Text: Search"
          },
          {
            id: 5,
            title: "Challenge 5: Keydown Key Code Assertion",
            prompt: "Simulate keydown event for key='Enter' and print `Key Pressed: Enter`.",
            starterCode: "const key = 'Enter';\nconsole.log(`Key Pressed: ${key}`);",
            expectedKeyword: "Key Pressed: Enter"
          }
        ],
        tasks: [
          { id: 'js10_t1', text: '🎥 Watch Video: Playlist 2: Videos 16–18 (Event Listeners, Keyboard, Mouse Events)', completed: false },
          { id: 'js10_t2', text: '✍️ Task: Bind click and keyup listeners using addEventListener', completed: false },
          { id: 'js10_t3', text: '✍️ Task: Build a live text input mirror preview', completed: false },
          { id: 'js10_t4', text: '🚀 Mini Project: Digital Counter App with increment/decrement/reset', completed: false }
        ],
        starterCode: `let counter = 0;\nconst increment = () => ++counter;\nconst decrement = () => --counter;\nincrement(); increment();\nconsole.log("Digital Counter Value:", counter);`,
        expectedKeyword: 'Digital Counter Value: 2'
      },

      {
        day: 11,
        title: 'Day 11 – DOM Projects (Pure Hands-on)',
        unit: 'Unit 6: Interactive Apps (Pure Coding)',
        topic: 'Build complete interactive DOM applications combining UI & State.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 0 Videos: 100% Pure Application Day',
        whatToLearn: {
          summary: 'Pure Hands-On Application Day (0 Videos): Apply all DOM & Event concepts from previous days to build 3 complete interactive web applications from scratch.',
          details: [
            '🚀 Build Interactive To-Do App with add/delete tasks.',
            '🚀 Build Digital Clock with live updating seconds interval.',
            '🚀 Build Random Quote Generator with random selection & category filters.',
            'Master state-to-DOM rendering patterns.'
          ],
          codeExample: `// Day 11: To-Do App Logic\nlet todos = [];\nconst addTodo = (text) => {\n  todos.push({ id: Date.now(), text, completed: false });\n};\naddTodo("Build DOM Projects");\nconsole.log("Active Todos Count:", todos.length);`
        },
        mcqQuestions: [
          {
            question: "Which JS timing function executes a function repeatedly at specified time intervals?",
            options: ["setTimeout()", "setInterval()", "requestAnimationFrame()", "setImmediate()"],
            answerIndex: 1,
            explanation: "`setInterval(fn, delayMs)` repeatedly invokes `fn` every `delayMs` milliseconds."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: DOM Projects Count Assertion",
            prompt: "Construct a list of 3 DOM projects and print `Completed DOM Projects Count: 3`.",
            starterCode: "const todos = ['To-Do', 'Digital Clock', 'Quote Generator'];\nconsole.log('Completed DOM Projects Count:', todos.length);",
            expectedKeyword: "Completed DOM Projects Count: 3"
          },
          {
            id: 2,
            title: "Challenge 2: To-Do Array Append",
            prompt: "Add a task to `todos` array and print `Active Todos Count: 1`.",
            starterCode: "const todos = [{ id: 1, text: 'Task 1' }];\nconsole.log(`Active Todos Count: ${todos.length}`);",
            expectedKeyword: "Active Todos Count: 1"
          },
          {
            id: 3,
            title: "Challenge 3: Digital Clock Interval Set",
            prompt: "Simulate `setInterval` tick and print `Clock Tick Interval Active!`.",
            starterCode: "const active = true;\nif (active) console.log('Clock Tick Interval Active!');",
            expectedKeyword: "Clock Tick Interval Active!"
          },
          {
            id: 4,
            title: "Challenge 4: Random Quote Picker Index",
            prompt: "Pick random index from 3 quotes and print `Random Quote Picked!`.",
            starterCode: "const quotes = ['Quote 1', 'Quote 2', 'Quote 3'];\nconst idx = Math.floor(Math.random() * quotes.length);\nconsole.log('Random Quote Picked!');",
            expectedKeyword: "Random Quote Picked!"
          },
          {
            id: 5,
            title: "Challenge 5: State-to-DOM Synchronizer",
            prompt: "Sync array state to UI list and print `State to DOM Synced!`.",
            starterCode: "const synced = true;\nif (synced) console.log('State to DOM Synced!');",
            expectedKeyword: "State to DOM Synced!"
          }
        ],
        tasks: [
          { id: 'js11_t1', text: '🚀 Project 1: Interactive To-Do App with add/delete DOM elements', completed: false },
          { id: 'js11_t2', text: '🚀 Project 2: Live Digital Clock using setInterval()', completed: false },
          { id: 'js11_t3', text: '🚀 Project 3: Random Quote Generator with dynamic array lookup', completed: false }
        ],
        starterCode: `const todos = ["Build To-Do", "Build Digital Clock", "Build Quote Generator"];\nconsole.log("Completed DOM Projects Count:", todos.length);`,
        expectedKeyword: 'Completed DOM Projects Count: 3'
      },

      {
        day: 12,
        title: 'Day 12 – Async JavaScript & Fetch API',
        unit: 'Unit 7: Asynchronous JS (Videos 19–22)',
        topic: 'Callbacks, Promises, Async/Await & Fetch API for network data.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 Playlist 2: Videos 19–22 (Promises, async/await, fetch(), try/catch)',
        whatToLearn: {
          summary: 'Watch Playlist 2 (Videos 19–22): Understand non-blocking asynchronous execution, Callbacks, Promises, `async/await` keywords, and performing REST API calls using `fetch()`.',
          details: [
            '🎥 Watch Video: Playlist 2: Videos 19–22 (Promises, `async`/`await`, `fetch()`, `try/catch`)',
            'Understanding event loop & call stack.',
            'Promises: `.then()`, `.catch()`, `.finally()`.',
            'Modern `async` / `await` syntax.',
            'Fetching network data with `fetch(url)` and error handling.'
          ],
          codeExample: `// Day 12: Async Fetch Simulation\nconst fetchWeather = async (city) => {\n  try {\n    const res = await new Promise(r => setTimeout(() => r({ temp: 28, city }), 300));\n    console.log(\`Weather in \${res.city}: \${res.temp}°C\`);\n  } catch(e) {\n    console.error("API error", e);\n  }\n};\nfetchWeather("Kochi");`
        },
        mcqQuestions: [
          {
            question: "What state is a Promise in immediately after instantiation before completion?",
            options: ["fulfilled", "rejected", "pending", "settled"],
            answerIndex: 2,
            explanation: "Promises begin in the `pending` state before transitioning to `fulfilled` or `rejected`."
          },
          {
            question: "What keyword must be placed before a function declaration to use `await` inside it?",
            options: ["defer", "async", "promise", "thread"],
            answerIndex: 1,
            explanation: "Functions must be declared with `async` keyword to enable `await` expressions."
          },
          {
            question: "What is required to parse the response stream from a `fetch()` call as JSON?",
            options: ["JSON.parse(response)", "await response.json()", "response.body", "response.getText()"],
            answerIndex: 1,
            explanation: "`await response.json()` parses the incoming response stream into a JavaScript object."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Async Weather Fetch Assertion",
            prompt: "Write an `async` function `getWeather` returning `{ city: 'Kochi', temp: '30°C' }` and log `City: Kochi, Temp: 30°C`.",
            starterCode: "const getWeather = async () => {\n  const data = await new Promise(res => res({ city: 'Kochi', temp: '30°C' }));\n  console.log(`City: ${data.city}, Temp: ${data.temp}`);\n};\ngetWeather();",
            expectedKeyword: "City: Kochi, Temp: 30°C"
          },
          {
            id: 2,
            title: "Challenge 2: Promise Resolution Assertion",
            prompt: "Create a resolved Promise returning 'API Success' and print `Promise Result: API Success`.",
            starterCode: "Promise.resolve('API Success').then(res => console.log(`Promise Result: ${res}`));",
            expectedKeyword: "Promise Result: API Success"
          },
          {
            id: 3,
            title: "Challenge 3: Try/Catch Error Handling",
            prompt: "Simulate try/catch block for API error and print `API Error Intercepted`.",
            starterCode: "try { throw new Error('API Error Intercepted'); } catch(e) { console.log(e.message); }",
            expectedKeyword: "API Error Intercepted"
          },
          {
            id: 4,
            title: "Challenge 4: JSON Data Deserialization",
            prompt: "Parse `{ \"status\": \"ok\" }` and print `Status: ok`.",
            starterCode: "const json = JSON.parse('{\"status\":\"ok\"}');\nconsole.log(`Status: ${json.status}`);",
            expectedKeyword: "Status: ok"
          },
          {
            id: 5,
            title: "Challenge 5: Async / Await Syntactic Sugar",
            prompt: "Execute async arrow function and print `Async Function Resolved!`.",
            starterCode: "const run = async () => 'Async Function Resolved!';\nrun().then(res => console.log(res));",
            expectedKeyword: "Async Function Resolved!"
          }
        ],
        tasks: [
          { id: 'js12_t1', text: '🎥 Watch Video: Playlist 2: Videos 19–22 (Promises, async/await, fetch(), try/catch)', completed: false },
          { id: 'js12_t2', text: '✍️ Task: Fetch JSON data from public REST APIs using fetch()', completed: false },
          { id: 'js12_t3', text: '✍️ Task: Wrap asynchronous requests in try...catch blocks for robust error handling', completed: false },
          { id: 'js12_t4', text: '🚀 Mini Project: Weather App fetching live data via API', completed: false }
        ],
        starterCode: `const getWeather = async () => {\n  const data = await new Promise(res => res({ city: "Kochi", temp: "30°C" }));\n  console.log(\`City: \${data.city}, Temp: \${data.temp}\`);\n};\ngetWeather();`,
        expectedKeyword: 'City: Kochi, Temp: 30°C'
      },

      {
        day: 13,
        title: 'Day 13 – ES6+ Modern JS & LocalStorage',
        unit: 'Unit 8: Modern ES6+ & Storage (Videos 23–25)',
        topic: 'Destructuring, Spread, Rest, ES Modules & Local Storage.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 Playlist 2: Videos 23–25 (Destructuring, Spread/Rest, Modules, localStorage)',
        whatToLearn: {
          summary: 'Watch Playlist 2 (Videos 23–25): Master modern ES6+ features: Destructuring arrays/objects, Spread & Rest operators (`...`), ES Modules, and persistent browser storage with `localStorage`.',
          details: [
            '🎥 Watch Video: Playlist 2: Videos 23–25 (Destructuring, Spread/Rest, Modules, `localStorage`)',
            'Object destructuring: `const { name, age } = user;`.',
            'Rest parameters: `function sum(...nums)`.',
            'Browser `localStorage.setItem(key, value)` & `getItem(key)`.',
            'JSON serialization: `JSON.stringify()` and `JSON.parse()`.'
          ],
          codeExample: `// Day 13: LocalStorage Simulation\nconst note = { id: 1, text: "Master Advanced JS" };\nconst jsonStr = JSON.stringify(note);\nconst parsedNote = JSON.parse(jsonStr);\nconsole.log("Parsed Saved Note:", parsedNote.text);`
        },
        mcqQuestions: [
          {
            question: "How do you convert a JavaScript object into a string for storing in `localStorage`?",
            options: ["String(obj)", "JSON.stringify(obj)", "obj.toString()", "JSON.parse(obj)"],
            answerIndex: 1,
            explanation: "`JSON.stringify()` serializes JavaScript objects into a JSON string format."
          },
          {
            question: "What does `const [a, ...b] = [1, 2, 3, 4]` assign to variable `b`?",
            options: ["2", "[2, 3, 4]", "[1, 2, 3, 4]", "undefined"],
            answerIndex: 1,
            explanation: "The Rest operator `...b` gathers all remaining array elements into `[2, 3, 4]`."
          },
          {
            question: "Does data stored in `localStorage` expire when the browser window is closed?",
            options: [
              "Yes, after 24 hours",
              "No, it persists until explicitly deleted or cleared",
              "Yes, upon tab closing",
              "Only on mobile browsers"
            ],
            answerIndex: 1,
            explanation: "`localStorage` data has no expiration date; it persists until programmatically or manually cleared."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: LocalStorage Serialization Function",
            prompt: "Write a function `saveNote` that serializes an array of notes to JSON and log `Saved Notes JSON:`.",
            starterCode: "const saveNote = (title) => {\n  const notes = [title];\n  return JSON.stringify(notes);\n};\nconsole.log('Saved Notes JSON:', saveNote('Day 13 Notes'));",
            expectedKeyword: "Saved Notes JSON:"
          },
          {
            id: 2,
            title: "Challenge 2: Object Destructuring Assignment",
            prompt: "Destructure `{ name: 'Aman', age: 20 }` and log `Destructured Name: Aman`.",
            starterCode: "const { name } = { name: 'Aman', age: 20 };\nconsole.log(`Destructured Name: ${name}`);",
            expectedKeyword: "Destructured Name: Aman"
          },
          {
            id: 3,
            title: "Challenge 3: Spread Operator Array Merge",
            prompt: "Merge `[1, 2]` and `[3, 4]` with `[...a, ...b]` and print `Merged Array: 1, 2, 3, 4`.",
            starterCode: "const a = [1, 2], b = [3, 4];\nconsole.log(`Merged Array: ${[...a, ...b].join(', ')}`);",
            expectedKeyword: "Merged Array: 1, 2, 3, 4"
          },
          {
            id: 4,
            title: "Challenge 4: Rest Function Parameter Gathering",
            prompt: "Gather rest params `...nums` for 1,2,3 and print `Rest Params Count: 3`.",
            starterCode: "const sum = (...nums) => nums.length;\nconsole.log(`Rest Params Count: ${sum(1, 2, 3)}`);",
            expectedKeyword: "Rest Params Count: 3"
          },
          {
            id: 5,
            title: "Challenge 5: JSON Parse Recovery Assertion",
            prompt: "Parse `\"{\"title\":\"Notes\"}\"` and print `Recovered Title: Notes`.",
            starterCode: "const obj = JSON.parse('{\"title\":\"Notes\"}');\nconsole.log(`Recovered Title: ${obj.title}`);",
            expectedKeyword: "Recovered Title: Notes"
          }
        ],
        tasks: [
          { id: 'js13_t1', text: '🎥 Watch Video: Playlist 2: Videos 23–25 (Destructuring, Spread/Rest, Modules, localStorage)', completed: false },
          { id: 'js13_t2', text: '✍️ Task: Practice array/object destructuring and spread operator (...)', completed: false },
          { id: 'js13_t3', text: '✍️ Task: Save and retrieve JSON stringified data using localStorage.setItem() and getItem()', completed: false },
          { id: 'js13_t4', text: '🚀 Mini Project: Persistent Notes App backed by localStorage', completed: false }
        ],
        starterCode: `const saveNote = (title) => {\n  const notes = [title];\n  return JSON.stringify(notes);\n};\nconsole.log("Saved Notes JSON:", saveNote("Day 13 Notes"));`,
        expectedKeyword: 'Saved Notes JSON:'
      },

      {
        day: 14,
        title: 'Day 14 – Portfolio Project Sprint (No Video Tutorials)',
        unit: 'Unit 9: Capstone Portfolio (Self-Guided)',
        topic: 'Full curriculum revision & 5 portfolio-ready standalone projects.',
        playlistUrl: YOUTUBE_PLAYLISTS.jsAdvanced,
        videoBreakdown: '🎥 0 Videos: Self-Guided Coding Challenge',
        whatToLearn: {
          summary: 'Day 14: Revise all 47 videos and build 5 portfolio-ready projects independently without watching tutorials!',
          details: [
            '🔄 Revise all concepts from Videos 1–47.',
            '🚀 Build 1. Interactive To-Do App (with LocalStorage & Filter).',
            '🚀 Build 2. Functional Calculator (with keyboard & click support).',
            '🚀 Build 3. Live Weather App (with Async Fetch API).',
            '🚀 Build 4. Expense Tracker (with persistent state).',
            '🚀 Build 5. Interactive Quiz App (with score timer & progress).'
          ],
          codeExample: `// Day 14: Capstone Portfolio Projects\nconst portfolioProjects = [\n  "Interactive To-Do App",\n  "Functional Calculator",\n  "Live Weather App",\n  "Expense Tracker",\n  "Interactive Quiz App"\n];\nconsole.log(\`Successfully built \${portfolioProjects.length} portfolio projects!\`);`
        },
        mcqQuestions: [
          {
            question: "Which modern JavaScript workflow provides the best architecture for scalable web apps?",
            options: [
              "ES6 Modules + Async/Await + Clean DOM separation + LocalStorage persistence",
              "Global var variables + Inline onclick handlers + Synchronous XHR",
              "Monolithic functions without scope boundaries",
              "Avoid functions and write linear code"
            ],
            answerIndex: 0,
            explanation: "Combining modular architecture, async/await, clean DOM rendering, and LocalStorage yields scalable modern frontend apps."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Interactive To-Do App Project Assertion",
            prompt: "Construct project object for `Interactive To-Do App` and print `Project 1 Validated!`.",
            starterCode: "const p1 = { title: 'Interactive To-Do App' };\nconsole.log('Project 1 Validated!');",
            expectedKeyword: "Project 1 Validated!"
          },
          {
            id: 2,
            title: "Challenge 2: Functional Calculator Project Assertion",
            prompt: "Construct project object for `Functional Calculator` and print `Project 2 Validated!`.",
            starterCode: "const p2 = { title: 'Functional Calculator' };\nconsole.log('Project 2 Validated!');",
            expectedKeyword: "Project 2 Validated!"
          },
          {
            id: 3,
            title: "Challenge 3: Live Weather App Project Assertion",
            prompt: "Construct project object for `Live Weather App` and print `Project 3 Validated!`.",
            starterCode: "const p3 = { title: 'Live Weather App' };\nconsole.log('Project 3 Validated!');",
            expectedKeyword: "Project 3 Validated!"
          },
          {
            id: 4,
            title: "Challenge 4: Expense Tracker Project Assertion",
            prompt: "Construct project object for `Expense Tracker` and print `Project 4 Validated!`.",
            starterCode: "const p4 = { title: 'Expense Tracker' };\nconsole.log('Project 4 Validated!');",
            expectedKeyword: "Project 4 Validated!"
          },
          {
            id: 5,
            title: "Challenge 5: Total JavaScript Portfolio Projects Built",
            prompt: "Store 5 portfolio project names in an array and print `Total Portfolio Projects: 5`.",
            starterCode: "const portfolio = ['Interactive To-Do App', 'Functional Calculator', 'Live Weather App', 'Expense Tracker', 'Interactive Quiz App'];\nconsole.log('All 14 Days Completed! Total Portfolio Projects:', portfolio.length);",
            expectedKeyword: "Total Portfolio Projects: 5"
          }
        ],
        tasks: [
          { id: 'js14_t1', text: '🚀 Project 1: Interactive To-Do App with state & LocalStorage', completed: false },
          { id: 'js14_t2', text: '🚀 Project 2: Functional Web Calculator', completed: false },
          { id: 'js14_t3', text: '🚀 Project 3: Live Weather App using OpenWeather API', completed: false },
          { id: 'js14_t4', text: '🚀 Project 4: Expense Tracker with persistent storage', completed: false },
          { id: 'js14_t5', text: '🚀 Project 5: Interactive Quiz App with score tracking', completed: false }
        ],
        starterCode: `const portfolio = ["Interactive To-Do App", "Functional Calculator", "Live Weather App", "Expense Tracker", "Interactive Quiz App"];\nconsole.log("All 14 Days Completed! Total Portfolio Projects:", portfolio.length);`,
        expectedKeyword: 'Total Portfolio Projects: 5'
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
