// Core Curriculum Data for the Main Programming Languages & Web Development Tracks
// Combines Duolingo-style conceptual lessons + Todo-style daily task tracking + MCQs & 5 Terminal Labs per day + YouTube Playlists

export const YOUTUBE_PLAYLISTS = {
  htmlCssFullCourse: 'https://youtu.be/lI3iZ5xMII8?si=YooxAAxXII1ufqRX',
  jsBeginner: 'https://youtube.com/playlist?list=PLPvjxHx5Kob2xn4eANiHRPSJmfqj3DMeo&si=RKYodWalPkcHmwzT',
  jsAdvanced: 'https://youtube.com/playlist?list=PLPvjxHx5Kob0lAdShlswHSHjfzL2UI-E1&si=hxfymQm3BFvUy4XY'
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
    id: 'python',
    name: 'Python Mastery',
    icon: '🐍',
    badge: 'Python 3.12',
    color: '#3776AB',
    bgColor: 'rgba(55, 118, 171, 0.15)',
    textColor: '#2563eb',
    gradient: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)',
    tagline: '14-Day Gamified Python Roadmap with MCQs, Daily Tasks & Terminal Assertion Labs.',
    description: 'Master Python fundamentals, variables, loops, data structures (lists, tuples, dicts, sets), OOP, file handling, exception handling, REST APIs, virtual environments, and 5 portfolio projects.',
    difficulty: 'Beginner → Professional',
    totalDays: 14,
    days: [
      {
        day: 1,
        title: 'Day 1 – Setup & Python Fundamentals',
        unit: 'Unit 1: Environment & Basics',
        topic: 'VS Code, Variables, Data Types (int, float, str, bool), Type Casting, print(), input()',
        playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
        videoBreakdown: '🎥 Watch Video: Python Setup, Variables, Data Types, and Type Conversion',
        whatToLearn: {
          summary: 'Install Python 3 & VS Code. Master variables, data types (int, float, str, bool), type casting, print() formatting, and input() user interaction.',
          details: [
            '🎥 Watch Video: Python Setup, Variables, Data Types, and Type Conversion',
            'VS Code configuration with Python & Pylance extensions.',
            'Declare variables and understand dynamic typing in Python.',
            'Type casting between int(), float(), and str().',
            'Take user input using input() and format output with f-strings.'
          ],
          codeExample: `name = "Aman"
age = 20
height = 1.75
is_student = True

print(f"User: {name}, Age: {age}, Height: {height}m, Student: {is_student}")

# Temperature conversion
celsius = 30
fahrenheit = celsius * (9/5) + 32
print(f"{celsius}°C is equal to {fahrenheit}°F")`
        },
        mcqQuestions: [
          {
            question: "Which of the following is an invalid variable name in Python?",
            options: ["user_name", "_age", "2nd_place", "totalAmount"],
            answerIndex: 2,
            explanation: "Variable names in Python cannot start with a digit (e.g., `2nd_place`)."
          },
          {
            question: "What does type(3 / 2) evaluate to in Python 3?",
            options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'str'>"],
            answerIndex: 1,
            explanation: "In Python 3, standard division `/` always returns a float (`1.5`)."
          },
          {
            question: "What is the correct way to output 'Hello' and 'World' on the same line with a space in print()?",
            options: ["print('Hello', 'World')", "print('Hello' + 10)", "print('Hello' 'World')", "Both A and C"],
            answerIndex: 3,
            explanation: "Both `print('Hello', 'World')` and string literal concatenation `print('Hello' 'World')` print on the same line."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Declare Profile & Output",
            prompt: "Declare `name = 'Aman'` and `age = 20`. Print `Valid User Profile Logged!` using f-strings.",
            starterCode: `# TODO: Declare name and age variables
name = 'Aman'
age = 20

# TODO: Print message with f-strings containing "Valid User Profile Logged!"
print(f'User: {name}, Age: {age}. Valid User Profile Logged!')`,
            expectedKeyword: "Valid User Profile Logged!"
          },
          {
            id: 2,
            title: "Challenge 2: Tuple Unpacking Variable Swap",
            prompt: "Perform a variable swap between `a = 5` and `b = 10` using `a, b = b, a`. Print `Variable Swap Completed!`.",
            starterCode: `# TODO: Initialize a and b
a = 5
b = 10

# TODO: Swap variables a and b using tuple unpacking (a, b = b, a)
a, b = b, a

print(f'a={a}, b={b}. Variable Swap Completed!')`,
            expectedKeyword: "Variable Swap Completed!"
          },
          {
            id: 3,
            title: "Challenge 3: BMI Calculator Assertion",
            prompt: "Calculate BMI for `weight = 70` and `height = 1.75`. Print `BMI Calculation Asserted!`.",
            starterCode: `weight = 70
height = 1.75

# TODO: Calculate bmi = weight / (height ** 2)
bmi = weight / (height ** 2)

print(f'BMI: {bmi:.2f}. BMI Calculation Asserted!')`,
            expectedKeyword: "BMI Calculation Asserted!"
          },
          {
            id: 4,
            title: "Challenge 4: Even / Odd Modulo Test",
            prompt: "Test whether `num = 27` is Even or Odd using `num % 2`. Print `Even Odd Check Passed!`.",
            starterCode: `num = 27

# TODO: Check even/odd using modulo operator %
status = 'Even' if num % 2 == 0 else 'Odd'

print(f'Number {num} is {status}. Even Odd Check Passed!')`,
            expectedKeyword: "Even Odd Check Passed!"
          },
          {
            id: 5,
            title: "Challenge 5: Profile f-string Formatting",
            prompt: "Format a profile string containing name, age, and city. Print `f-string Formatted!`.",
            starterCode: `name = 'Aman'
age = 20
city = 'Kochi'

# TODO: Format and print profile using f-strings
print(f'Profile: {name} from {city}, age {age}. f-string Formatted!')`,
            expectedKeyword: "f-string Formatted!"
          }
        ],
        tasks: [
          { id: 'py1_t1', text: 'Log Daily GitHub Push', completed: false },
          { id: 'py1_t2', text: '🎥 Watch Video: Python Setup, Variables, Data Types, and Type Conversion', completed: false },
          { id: 'py1_t3', text: '✍️ Task 1: Write code to swap two variables and convert Celsius to Fahrenheit', completed: false },
          { id: 'py1_t4', text: '✍️ Task 2: Calculate BMI (weight / height²) and rectangle area using input()', completed: false },
          { id: 'py1_t5', text: '❓ Practice 1: Build an Age Calculator and Even/Odd Checker using %', completed: false },
          { id: 'py1_t6', text: '❓ Practice 2: Build a simple calculator taking two numbers and printing operations', completed: false },
          { id: 'py1_t7', text: '🚀 Mini Project: Personal Information Profile Terminal Card', completed: false }
        ],
        starterCode: `# Write your Python solution here
name = 'Aman'
age = 20
print(f'User: {name}, Age: {age}. Valid User Profile Logged!')`,
        expectedKeyword: "Valid User Profile Logged!"
      },
      {
        day: 2,
        title: 'Day 2 – Operators & Conditionals',
        unit: 'Unit 2: Decision Making',
        topic: 'Arithmetic, Comparison, Logical Operators, if, elif, else',
        playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
        videoBreakdown: '🎥 Watch Video: Comparison, Logical Operators, if, elif, else',
        whatToLearn: {
          summary: 'Master arithmetic (//, %), comparison (==, !=, >, <), and logical (and, or, not) operators along with conditional branching (if, elif, else).',
          details: [
            '🎥 Watch Video: Comparison, Logical Operators, if, elif, else',
            'Understand comparison operators and boolean expressions.',
            'Use logical operators: `and`, `or`, `not` for multi-condition checks.',
            'Construct clean `if`, `elif`, and `else` decision trees.',
            'Build real-world decision logic for grades, traffic lights, and ATM systems.'
          ],
          codeExample: `score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")`
        },
        mcqQuestions: [
          {
            question: "What is the output of print(True and False or True) in Python?",
            options: ["False", "True", "None", "SyntaxError"],
            answerIndex: 1,
            explanation: "`and` has higher precedence than `or`. `(True and False)` evaluates to `False`, then `False or True` evaluates to `True`."
          },
          {
            question: "Which operator in Python performs floor division (integer division)?",
            options: ["/", "%", "//", "**"],
            answerIndex: 2,
            explanation: "`//` performs floor division in Python, discarding remainder fractional parts."
          },
          {
            question: "What keyword is used in Python for 'else if'?",
            options: ["else if", "elseif", "elif", "case"],
            answerIndex: 2,
            explanation: "Python uses `elif` for conditional branching."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Grade Calculator Assertion",
            prompt: "Calculate grade for `marks = 85`. Print `Grade B Asserted!`.",
            starterCode: `marks = 85
grade = 'B' if marks >= 80 else 'C'
print(f'Marks: {marks}, Grade: {grade}. Grade B Asserted!')`,
            expectedKeyword: "Grade B Asserted!"
          },
          {
            id: 2,
            title: "Challenge 2: Traffic Light Decision",
            prompt: "Branch light state for `light = 'red'`. Print `Traffic Light Red Asserted!`.",
            starterCode: `light = 'red'
action = 'Stop' if light == 'red' else 'Go'
print(f'Action: {action}. Traffic Light Red Asserted!')`,
            expectedKeyword: "Traffic Light Red Asserted!"
          },
          {
            id: 3,
            title: "Challenge 3: Voting Eligibility Check",
            prompt: "Check eligibility for `age = 20`. Print `Voting Eligible Asserted!`.",
            starterCode: `age = 20
eligible = age >= 18
print(f'Eligible: {eligible}. Voting Eligible Asserted!')`,
            expectedKeyword: "Voting Eligible Asserted!"
          },
          {
            id: 4,
            title: "Challenge 4: ATM Deposit Simulation",
            prompt: "Simulate depositing 500 into balance 1000. Print `ATM Deposit Asserted!`.",
            starterCode: `balance = 1000
deposit = 500
balance += deposit
print(f'New Balance: {balance}. ATM Deposit Asserted!')`,
            expectedKeyword: "ATM Deposit Asserted!"
          },
          {
            id: 5,
            title: "Challenge 5: Floor Division & Modulo Assertion",
            prompt: "Divide 17 by 5 using floor division and modulo. Print `Floor Division Asserted!`.",
            starterCode: `div = 17 // 5
mod = 17 % 5
print(f'Div: {div}, Mod: {mod}. Floor Division Asserted!')`,
            expectedKeyword: "Floor Division Asserted!"
          }
        ],
        tasks: [
          { id: 'py2_t1', text: 'Log Daily GitHub Push', completed: false },
          { id: 'py2_t2', text: '🎥 Watch Video: Comparison, Logical Operators, if, elif, else', completed: false },
          { id: 'py2_t3', text: '✍️ Task: Build a Grade Calculator (A, B, C, F) and Voting Eligibility checker', completed: false },
          { id: 'py2_t4', text: '✍️ Task: Build a Traffic Light system using conditional branching', completed: false },
          { id: 'py2_t5', text: '🚀 Mini Project: ATM Machine Simulation (Check balance, Deposit, Withdraw)', completed: false }
        ],
        starterCode: `marks = 85
grade = 'B' if marks >= 80 else 'C'
print(f'Marks: {marks}, Grade: {grade}. Grade B Asserted!')`,
        expectedKeyword: "Grade B Asserted!"
      },
      {
        day: 3,
        title: 'Day 3 – Loops & Iteration',
        unit: 'Unit 3: Repetition & Controls',
        topic: 'for loops, while loops, range(), break, continue',
        playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
        videoBreakdown: '🎥 Watch Video: for loops, while loops, range(), break, continue',
        whatToLearn: {
          summary: 'Master definite iteration with for loops & range(), indefinite iteration with while loops, and control loop execution using break & continue.',
          details: [
            '🎥 Watch Video: for loops, while loops, range(), break, continue',
            'Understand `range(start, stop, step)` sequence generation.',
            'Iterate over ranges and sequences with `for` loops.',
            'Control while loop termination conditions.',
            'Use `break` to exit loops early and `continue` to skip iterations.'
          ],
          codeExample: `# Multiplication Table for 5
for i in range(1, 6):
    print(f"5 x {i} = {5 * i}")

# While loop example
count = 3
while count > 0:
    print(f"Countdown: {count}")
    count -= 1`
        },
        mcqQuestions: [
          {
            question: "What values are generated by range(1, 5)?",
            options: ["1, 2, 3, 4, 5", "1, 2, 3, 4", "0, 1, 2, 3, 4", "1, 3, 5"],
            answerIndex: 1,
            explanation: "`range(start, stop)` includes start (1) up to but excluding stop (5), generating `1, 2, 3, 4`."
          },
          {
            question: "Which keyword terminates a loop immediately?",
            options: ["pass", "continue", "break", "exit"],
            answerIndex: 2,
            explanation: "`break` immediately terminates the innermost enclosing loop."
          },
          {
            question: "What is the output of 'for i in range(3): pass' followed by 'print(i)'?",
            options: ["2", "3", "NameError", "0"],
            answerIndex: 0,
            explanation: "The loop iterates over 0, 1, 2. After completing, the loop variable `i` retains its final value `2`."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Multiplication Table Range Loop",
            prompt: "Print 5x table for range(1, 6). Print `Multiplication Loop Asserted!`.",
            starterCode: `for i in range(1, 6):
    print(f'5 x {i} = {5*i}')
print('Multiplication Loop Asserted!')`,
            expectedKeyword: "Multiplication Loop Asserted!"
          },
          {
            id: 2,
            title: "Challenge 2: Factorial Loop Calculation",
            prompt: "Compute factorial of 5 (120). Print `Factorial 120 Asserted!`.",
            starterCode: `fact = 1
for i in range(1, 6): fact *= i
print(f'Factorial: {fact}. Factorial 120 Asserted!')`,
            expectedKeyword: "Factorial 120 Asserted!"
          },
          {
            id: 3,
            title: "Challenge 3: Fibonacci Series Loop",
            prompt: "Generate first 5 Fibonacci numbers. Print `Fibonacci Series Asserted!`.",
            starterCode: `a, b = 0, 1
for _ in range(5): a, b = b, a + b
print('Fibonacci Series Asserted!')`,
            expectedKeyword: "Fibonacci Series Asserted!"
          },
          {
            id: 4,
            title: "Challenge 4: Break Loop Control Assertion",
            prompt: "Iterate range(1, 10) and break when i == 5. Print `Loop Break Asserted!`.",
            starterCode: `for i in range(1, 10):
    if i == 5: break
print(f'Stopped at {i}. Loop Break Asserted!')`,
            expectedKeyword: "Loop Break Asserted!"
          },
          {
            id: 5,
            title: "Challenge 5: Prime Number Test Loop",
            prompt: "Check if 7 is prime. Print `Prime Check Asserted!`.",
            starterCode: `num = 7
is_prime = all(num % i != 0 for i in range(2, num))
print(f'Prime 7: {is_prime}. Prime Check Asserted!')`,
            expectedKeyword: "Prime Check Asserted!"
          }
        ],
        tasks: [
          { id: 'py3_t1', text: 'Log Daily GitHub Push', completed: false },
          { id: 'py3_t2', text: '🎥 Watch Video: for loops, while loops, range(), break, continue', completed: false },
          { id: 'py3_t3', text: '✍️ Task: Write loops for Multiplication Tables and Factorial computation', completed: false },
          { id: 'py3_t4', text: '✍️ Task: Generate Fibonacci series and Prime number checks', completed: false },
          { id: 'py3_t5', text: '🚀 Mini Project: Number Guessing Game with random.randint()', completed: false }
        ],
        starterCode: `for i in range(1, 6):
    print(f'5 x {i} = {5*i}')
print('Multiplication Loop Asserted!')`,
        expectedKeyword: "Multiplication Loop Asserted!"
      },
      {
        day: 4,
        title: 'Day 4 – Functions & Scope',
        unit: 'Unit 4: Modular Code & Lambda',
        topic: 'Parameters, Default Arguments, Return Values, Scope, Lambda Functions',
        playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
        videoBreakdown: '🎥 Watch Video: Defining Functions (def), Parameters, Return values, Lambda functions',
        whatToLearn: {
          summary: 'Define modular functions with `def`, pass parameters, set default arguments, return values, understand variable scope, and create one-line `lambda` expressions.',
          details: [
            '🎥 Watch Video: Defining Functions (def), Parameters, Return values, Lambda functions',
            'Define functions using `def function_name(params):`.',
            'Return multiple values as tuples.',
            'Differentiate local scope vs global scope.',
            'Write concise anonymous lambda functions `lambda x, y: x * y`.'
          ],
          codeExample: `def greet(name, role="Developer"):
    return f"Welcome {name}, {role}!"

square = lambda x: x ** 2
print(greet("Aman"))
print(f"Square of 4: {square(4)}")`
        },
        mcqQuestions: [
          {
            question: "How do you define a function in Python?",
            options: ["function myFunc():", "def myFunc():", "func myFunc():", "define myFunc():"],
            answerIndex: 1,
            explanation: "Python functions are defined using the `def` keyword."
          },
          {
            question: "What does a function return if there is no explicit return statement?",
            options: ["0", "False", "None", "Empty String"],
            answerIndex: 2,
            explanation: "Functions without an explicit return statement return `None` implicitly."
          },
          {
            question: "What is the result of (lambda x, y: x * y)(3, 4)?",
            options: ["12", "7", "None", "SyntaxError"],
            answerIndex: 0,
            explanation: "The lambda evaluates `3 * 4`, returning `12`."
          }
        ],
        terminalChallenges: [
          {
            id: 1,
            title: "Challenge 1: Function Definition & Return",
            prompt: "Define `greet(name)` returning a welcome message. Print `Function Greet Asserted!`.",
            starterCode: `# TODO: Define function greet(name) returning a welcome string
def greet(name):
    pass

# TODO: Call greet('Aman') and print "Function Greet Asserted!"
`,
            expectedKeyword: "Function Greet Asserted!"
          },
          {
            id: 2,
            title: "Challenge 2: Lambda Multiplication Assertion",
            prompt: "Define `mult = lambda x, y: x * y`. Print `Lambda Mult Asserted!`.",
            starterCode: `# TODO: Define mult lambda function taking x, y
mult = lambda x, y: x * y

# TODO: Call mult(3, 4) and print "Lambda Mult Asserted!"
`,
            expectedKeyword: "Lambda Mult Asserted!"
          },
          {
            id: 3,
            title: "Challenge 3: Default Argument Value",
            prompt: "Define function with default parameter `role='Developer'`. Print `Default Arg Asserted!`.",
            starterCode: `# TODO: Define role function with default parameter r='Developer'
def get_role(r='Developer'):
    pass

# TODO: Print "Default Arg Asserted!"
`,
            expectedKeyword: "Default Arg Asserted!"
          },
          {
            id: 4,
            title: "Challenge 4: Palindrome Helper Function",
            prompt: "Write `is_palindrome(s)` for 'radar'. Print `Palindrome Function Asserted!`.",
            starterCode: `# TODO: Write is_pal(s) returning s == s[::-1]
def is_pal(s):
    pass

# TODO: Test with 'radar' and print "Palindrome Function Asserted!"
`,
            expectedKeyword: "Palindrome Function Asserted!"
          },
          {
            id: 5,
            title: "Challenge 5: Modular Calculator Helper",
            prompt: "Define modular `add(a, b)` and `sub(a, b)`. Print `Modular Calc Asserted!`.",
            starterCode: `# TODO: Define add and sub lambdas
add = lambda a, b: a + b
sub = lambda a, b: a - b

# TODO: Print "Modular Calc Asserted!"
`,
            expectedKeyword: "Modular Calc Asserted!"
          }
        ],
        tasks: [
          { id: 'py4_t1', text: 'Log Daily GitHub Push', completed: false },
          { id: 'py4_t2', text: '🎥 Watch Video: Defining Functions (def), Parameters, Return values, Lambda functions', completed: false },
          { id: 'py4_t3', text: '✍️ Task: Write lambda functions for math transformations', completed: false },
          { id: 'py4_t4', text: '✍️ Task: Write Palindrome and Prime checker helper functions', completed: false },
          { id: 'py4_t5', text: '🚀 Mini Project: Calculator using Modular Functions', completed: false }
        ],
        starterCode: `def greet(name): return f'Hello {name}'
print(f'Hello {greet("Aman")}. Function Greet Asserted!')`,
        expectedKeyword: "Function Greet Asserted!"
      },
      {
        day: 5,
        title: 'Day 5 – Strings & String Methods',
        unit: 'Unit 5: Text Processing & Formatting',
        topic: 'Indexing, Slicing, .upper(), .lower(), .strip(), .replace(), .split(), .join()',
        playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
        videoBreakdown: '🎥 Watch Video: String Slicing, .replace(), .split(), .join(), .upper()',
        whatToLearn: {
          summary: 'Master string indexing, zero-copy slicing [start:stop:step], immutability, case conversion, whitespace cleaning, search/replace, and array splitting/joining.',
          details: [
            '🎥 Watch Video: String Slicing, .replace(), .split(), .join(), .upper()',
            'Access characters by zero-indexed offsets and reverse slicing `s[::-1]`.',
            'Clean user inputs with `.strip()`, `.lower()`, and `.upper()`.',
            'Replace substrings using `.replace(old, new)`.',
            'Split strings into lists using `.split()` and re-join lists into strings with `" ".join()`.'
          ],
          codeExample: `text = "  python programming  "
clean = text.strip().title()
words = clean.split()
joined = "-".join(words)
print(f"Cleaned: '{clean}', Joined: '{joined}'")`
        },
        mcqQuestions: [
          {
            question: "What does 'python'[1:4] evaluate to?",
            options: ["'pyt'", "'yth'", "'ytho'", "'pyth'"],
            answerIndex: 1,
            explanation: "Extracts indices 1, 2, 3 ('y', 't', 'h'), resulting in 'yth'."
          },
          {
            question: "Are Python strings mutable?",
            options: ["Yes", "No, modifying a string creates a new string object", "Only inside functions", "Only when declared with str()"],
            answerIndex: 1,
            explanation: "Strings in Python are immutable; methods return new string objects."
          },
          {
            question: "What is the result of '-'.join(['a', 'b', 'c'])?",
            options: ["'a-b-c'", "['a-b-c']", "'abc-'", "TypeError"],
            answerIndex: 0,
            explanation: "'-'.join(...) joins list items with a hyphen delimiter, producing 'a-b-c'."
          }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: String Slicing Substring Assertion",
        prompt: "Slice 'python'[1:4] to get 'yth'. Print `String Slicing Asserted!`.",
        starterCode: `s = 'python'[1:4]
print(f'Sliced: {s}. String Slicing Asserted!')`,
        expectedKeyword: "String Slicing Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Reverse String Assertion",
        prompt: "Reverse string 'DevQuik' using `s[::-1]`. Print `String Reversal Asserted!`.",
        starterCode: `rev = 'DevQuik'[::-1]
print(f'Reversed: {rev}. String Reversal Asserted!')`,
        expectedKeyword: "String Reversal Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: String Replace Assertion",
        prompt: "Replace 'java' with 'python' in 'hello java'. Print `String Replace Asserted!`.",
        starterCode: `res = 'hello java'.replace('java', 'python')
print(f'Replaced: {res}. String Replace Asserted!')`,
        expectedKeyword: "String Replace Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: Split & Join Pipeline Assertion",
        prompt: "Split 'a b c' and join with '-'. Print `Split Join Asserted!`.",
        starterCode: `joined = '-'.join('a b c'.split())
print(f'Joined: {joined}. Split Join Asserted!')`,
        expectedKeyword: "Split Join Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: Vowel Count Pipeline",
        prompt: "Count vowels in 'python programming'. Print `Vowel Count Asserted!`.",
        starterCode: `text = 'python programming'
vowels = sum(1 for c in text if c in 'aeiou')
print(f'Vowels: {vowels}. Vowel Count Asserted!')`,
        expectedKeyword: "Vowel Count Asserted!"
      }
    ],
    tasks: [
      { id: 'py5_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py5_t2', text: '🎥 Watch Video: String Slicing, .replace(), .split(), .join(), .upper()', completed: false },
      { id: 'py5_t3', text: '✍️ Task: Create a String Reverser (s[::-1]) and Vowel Counter', completed: false },
      { id: 'py5_t4', text: '✍️ Task: Format sentences using .split() and " ".join()', completed: false },
      { id: 'py5_t5', text: '🚀 Mini Project: Password Strength Checker CLI', completed: false }
    ],
    starterCode: `s = 'python'[1:4]
print(f'Sliced: {s}. String Slicing Asserted!')`,
    expectedKeyword: "String Slicing Asserted!"
  },
  {
    day: 6,
    title: 'Day 6 – Lists & Tuples',
    unit: 'Unit 6: Ordered Collections',
    topic: 'Mutability, .append(), .pop(), .insert(), Slicing, Tuple Unpacking',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🎥 Watch Video: List mutability, .append(), .pop(), .insert(), Tuples',
    whatToLearn: {
      summary: 'Master dynamic mutable lists [], element modification (.append, .pop, .insert), slicing, immutable tuples (), and tuple unpacking.',
      details: [
        '🎥 Watch Video: List mutability, .append(), .pop(), .insert(), Tuples',
        'Understand list mutability vs tuple immutability.',
        'Modify lists using `.append(val)`, `.pop(idx)`, and `.insert(idx, val)`.',
        'Perform min(), max(), sum(), and sorting operations.',
        'Unpack tuple coordinates `x, y = (10, 20)`.'
      ],
      codeExample: `nums = [4, 1, 9, 2]
nums.append(5)
nums.sort()
popped = nums.pop()
print(f"Sorted: {nums}, Popped: {popped}, Max: {max(nums)}")`
    },
    mcqQuestions: [
      {
        question: "What is the key difference between a List and a Tuple in Python?",
        options: ["Lists use (), Tuples use []", "Lists are mutable; Tuples are immutable", "Tuples can only store numbers", "Lists cannot be nested"],
        answerIndex: 1,
        explanation: "Lists are mutable (can be altered in place); Tuples are immutable."
      },
      {
        question: "What does nums = [1, 2, 3] followed by nums.pop(0) return?",
        options: ["[2, 3]", "1", "3", "None"],
        answerIndex: 1,
        explanation: "`.pop(0)` removes and returns the element at index 0 (`1`)."
      },
      {
        question: "What is the output of len((1,))?",
        options: ["1", "0", "TypeError", "2"],
        answerIndex: 0,
        explanation: "`(1,)` is a single-element tuple, so `len()` returns `1`."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: List Append & Pop Assertion",
        prompt: "Append 5 to [1, 2, 3] and pop index 0. Print `List Append Pop Asserted!`.",
        starterCode: `nums = [1, 2, 3]
nums.append(5)
val = nums.pop(0)
print(f'Popped {val}, List: {nums}. List Append Pop Asserted!')`,
        expectedKeyword: "List Append Pop Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Find Max & Min in List",
        prompt: "Find max and min of [4, 1, 9, 2]. Print `List MinMax Asserted!`.",
        starterCode: `nums = [4, 1, 9, 2]
print(f'Min: {min(nums)}, Max: {max(nums)}. List MinMax Asserted!')`,
        expectedKeyword: "List MinMax Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: Remove Duplicates from List",
        prompt: "Deduplicate [1, 2, 2, 3, 3, 4] preserving order. Print `Deduplication Asserted!`.",
        starterCode: `raw = [1, 2, 2, 3, 3, 4]
clean = list(dict.fromkeys(raw))
print(f'Clean: {clean}. Deduplication Asserted!')`,
        expectedKeyword: "Deduplication Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: Tuple Unpacking Assertion",
        prompt: "Unpack point = (10, 20) into x, y. Print `Tuple Unpacking Asserted!`.",
        starterCode: `point = (10, 20)
x, y = point
print(f'x={x}, y={y}. Tuple Unpacking Asserted!')`,
        expectedKeyword: "Tuple Unpacking Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: Second Largest Element Assertion",
        prompt: "Find second largest element in [10, 20, 4, 45, 99]. Print `Second Largest Asserted!`.",
        starterCode: `nums = [10, 20, 4, 45, 99]
second = sorted(set(nums))[-2]
print(f'Second: {second}. Second Largest Asserted!')`,
        expectedKeyword: "Second Largest Asserted!"
      }
    ],
    tasks: [
      { id: 'py6_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py6_t2', text: '🎥 Watch Video: List mutability, .append(), .pop(), .insert(), Tuples', completed: false },
      { id: 'py6_t3', text: '✍️ Task: Find Max, Min, and Second Largest element in a list', completed: false },
      { id: 'py6_t4', text: '✍️ Task: Remove duplicate values from a list using loops', completed: false },
      { id: 'py6_t5', text: '🚀 Mini Project: Student Marks Manager CLI App', completed: false }
    ],
    starterCode: `nums = [1, 2, 3]
nums.append(5)
val = nums.pop(0)
print(f'Popped {val}, List: {nums}. List Append Pop Asserted!')`,
    expectedKeyword: "List Append Pop Asserted!"
  },
  {
    day: 7,
    title: 'Day 7 – Dictionaries & Sets',
    unit: 'Unit 7: Key-Value & Set Operations',
    topic: 'Key-Value pairs, .get(), .keys(), .values(), Set operations (union, intersection)',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🎥 Watch Video: Key-Value structures, .get(), .items(), Sets operations',
    whatToLearn: {
      summary: 'Master key-value mapping with dictionaries {}, safe retrieval with .get(), iteration over items(), and unique set operations (union |, intersection &).',
      details: [
        '🎥 Watch Video: Key-Value structures, .get(), .items(), Sets operations',
        'Map keys to values in Python dictionaries `{}`.',
        'Use `.get(key, default)` to prevent KeyError crashes.',
        'Iterate over dictionary keys, values, and `.items()`.',
        'Perform set union `a | b` and intersection `a & b`.'
      ],
      codeExample: `student = {"name": "Aman", "role": "Dev", "level": 1}
print(f"Name: {student.get('name')}, Role: {student.get('role')}")

# Set intersection
s1 = {1, 2, 3}
s2 = {2, 3, 4}
print(f"Intersection: {s1 & s2}")`
    },
    mcqQuestions: [
      {
        question: "What happens when accessing a non-existent key with dict.get('key')?",
        options: ["Raises KeyError", "Returns None (or a specified default value)", "Returns 0", "Crashes the program"],
        answerIndex: 1,
        explanation: "`.get()` returns `None` (or the fallback value) safely without raising `KeyError`."
      },
      {
        question: "Which data structure stores ONLY unique elements and is unordered?",
        options: ["list", "tuple", "set", "dictionary"],
        answerIndex: 2,
        explanation: "Sets store unique, unordered collection elements."
      },
      {
        question: "How do you add a new key-value pair ('a': 1) to dictionary d?",
        options: ["d.append('a', 1)", "d['a'] = 1", "d.add('a', 1)", "d.insert('a', 1)"],
        answerIndex: 1,
        explanation: "Key-value pairs are added using standard indexing d['a'] = 1."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: Dictionary Safe Get Assertion",
        prompt: "Retrieve key 'name' safely from dict student = {'name': 'Aman'}. Print `Dict Get Asserted!`.",
        starterCode: `d = {'name': 'Aman'}
print(f'Name: {d.get("name")}. Dict Get Asserted!')`,
        expectedKeyword: "Dict Get Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Set Intersection Assertion",
        prompt: "Find intersection of {1, 2, 3} and {2, 3, 4}. Print `Set Intersection Asserted!`.",
        starterCode: `s1, s2 = {1, 2, 3}, {2, 3, 4}
common = s1 & s2
print(f'Common: {common}. Set Intersection Asserted!')`,
        expectedKeyword: "Set Intersection Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: Dict Key-Value Insertion",
        prompt: "Add 'role': 'Dev' to empty dict d. Print `Dict Insert Asserted!`.",
        starterCode: `d = {}
d['role'] = 'Dev'
print(f'Dict: {d}. Dict Insert Asserted!')`,
        expectedKeyword: "Dict Insert Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: Deduplicate List with Set",
        prompt: "Convert list [1, 2, 2, 3] to set. Print `Set Deduplicate Asserted!`.",
        starterCode: `unique = set([1, 2, 2, 3])
print(f'Unique: {unique}. Set Deduplicate Asserted!')`,
        expectedKeyword: "Set Deduplicate Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: Expense Tracker Dict Summary",
        prompt: "Sum values of expenses = {'food': 200, 'rent': 500}. Print `Expense Sum Asserted!`.",
        starterCode: `exp = {'food': 200, 'rent': 500}
total = sum(exp.values())
print(f'Total: {total}. Expense Sum Asserted!')`,
        expectedKeyword: "Expense Sum Asserted!"
      }
    ],
    tasks: [
      { id: 'py7_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py7_t2', text: '🎥 Watch Video: Key-Value structures, .get(), .items(), Sets operations', completed: false },
      { id: 'py7_t3', text: '✍️ Task: Store and retrieve student records in nested dictionaries', completed: false },
      { id: 'py7_t4', text: '✍️ Task: Remove list duplicates instantly using set()', completed: false },
      { id: 'py7_t5', text: '🚀 Mini Project: Expense Tracker CLI App', completed: false }
    ],
    starterCode: `d = {'name': 'Aman'}
print(f'Name: {d.get("name")}. Dict Get Asserted!')`,
    expectedKeyword: "Dict Get Asserted!"
  },
  {
    day: 8,
    title: 'Day 8 – List Comprehensions & Advanced Iteration',
    unit: 'Unit 8: Concise Pythonic Functional Loops',
    topic: 'List/Dict Comprehensions, enumerate(), zip()',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🎥 Watch Video: List comprehensions, Dict comprehensions, enumerate(), zip()',
    whatToLearn: {
      summary: 'Write Pythonic list comprehensions `[x for x in seq if cond]`, dict comprehensions, track index-item pairs with `enumerate()`, and combine sequences with `zip()`.',
      details: [
        '🎥 Watch Video: List comprehensions, Dict comprehensions, enumerate(), zip()',
        'Construct single-line list comprehensions `[x**2 for x in range(5)]`.',
        'Apply inline filtering `[x for x in nums if x % 2 == 0]`.',
        'Pair indices and values using `enumerate(iterable)`.',
        'Zip parallel lists into tuples using `zip(keys, values)`.'
      ],
      codeExample: `squares = [x**2 for x in range(5) if x % 2 == 0]
names = ["Aman", "John"]
roles = ["Dev", "Design"]
for idx, (name, role) in enumerate(zip(names, roles)):
    print(f"{idx}: {name} -> {role}")`
    },
    mcqQuestions: [
      {
        question: "What is the output of [x ** 2 for x in range(4) if x % 2 == 0]?",
        options: ["[0, 1, 4, 9]", "[0, 4]", "[1, 9]", "[0, 2, 4]"],
        answerIndex: 1,
        explanation: "`range(4)` gives 0, 1, 2, 3. Even numbers are 0 and 2. Their squares are `0` and `4` -> `[0, 4]`."
      },
      {
        question: "What does enumerate(['a', 'b']) yield in a loop?",
        options: ["Pairs of (index, element) like (0, 'a')", "Only elements", "Only indices", "A single dictionary"],
        answerIndex: 0,
        explanation: "enumerate() yields index-element tuples (0, 'a'), (1, 'b')."
      },
      {
        question: "What does zip([1, 2], ['a', 'b']) produce when converted to a list?",
        options: ["[(1, 'a'), (2, 'b')]", "[1, 2, 'a', 'b']", "[[1, 2], ['a', 'b']]", "{'1': 'a', '2': 'b'}"],
        answerIndex: 0,
        explanation: "zip() pairs elements element-by-element into tuples [(1, 'a'), (2, 'b')]."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: Even Squares List Comprehension",
        prompt: "Compute [x**2 for x in range(4) if x%2==0]. Print `List Comp Asserted!`.",
        starterCode: `sq = [x**2 for x in range(4) if x%2==0]
print(f'Squares: {sq}. List Comp Asserted!')`,
        expectedKeyword: "List Comp Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Enumerate Loop Assertion",
        prompt: "Enumerate ['a', 'b']. Print `Enumerate Loop Asserted!`.",
        starterCode: `for idx, val in enumerate(['a', 'b']): pass
print('Enumerate Loop Asserted!')`,
        expectedKeyword: "Enumerate Loop Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: Zip Two Lists into Dict",
        prompt: "Zip keys=['a', 'b'] and vals=[1, 2] into dict. Print `Zip Dict Asserted!`.",
        starterCode: `keys, vals = ['a', 'b'], [1, 2]
d = dict(zip(keys, vals))
print(f'Dict: {d}. Zip Dict Asserted!')`,
        expectedKeyword: "Zip Dict Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: Dict Comprehension Assertion",
        prompt: "Build dict {x: x**2 for x in range(3)}. Print `Dict Comp Asserted!`.",
        starterCode: `d = {x: x**2 for x in range(3)}
print(f'Dict: {d}. Dict Comp Asserted!')`,
        expectedKeyword: "Dict Comp Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: Upper Case Names Comprehension",
        prompt: "Convert ['aman', 'john'] to uppercase using list comp. Print `Upper Comp Asserted!`.",
        starterCode: `names = [n.upper() for n in ['aman', 'john']]
print(f'Upper: {names}. Upper Comp Asserted!')`,
        expectedKeyword: "Upper Comp Asserted!"
      }
    ],
    tasks: [
      { id: 'py8_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py8_t2', text: '🎥 Watch Video: List comprehensions, Dict comprehensions, enumerate(), zip()', completed: false },
      { id: 'py8_t3', text: '✍️ Task: Convert standard for loops into concise list comprehensions', completed: false },
      { id: 'py8_t4', text: '✍️ Task: Loop through two lists simultaneously using zip()', completed: false },
      { id: 'py8_t5', text: '🚀 Mini Project: Inventory Manager with List Comprehensions', completed: false }
    ],
    starterCode: `sq = [x**2 for x in range(4) if x%2==0]
print(f'Squares: {sq}. List Comp Asserted!')`,
    expectedKeyword: "List Comp Asserted!"
  },
  {
    day: 9,
    title: 'Day 9 – Object-Oriented Programming (OOP)',
    unit: 'Unit 9: Classes, Objects & Methods',
    topic: 'Classes, Objects, Attributes, Methods, __init__ constructor',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🎥 Watch Video: Classes, Objects, Instance Variables, __init__ constructor',
    whatToLearn: {
      summary: 'Understand Object-Oriented Programming blueprints. Define classes, instance variables, methods, and the `__init__` constructor with `self`.',
      details: [
        '🎥 Watch Video: Classes, Objects, Instance Variables, __init__ constructor',
        'Define blueprint classes using `class Student:`.',
        'Initialize instance variables inside `__init__(self, name, age)`.',
        'Pass `self` to access object instance state inside methods.',
        'Instantiate objects `s1 = Student("Aman", 20)` and call instance methods.'
      ],
      codeExample: `class Student:
    def __init__(self, name, level=1):
        self.name = name
        self.level = level
    
    def info(self):
        return f"Student {self.name}, Level {self.level}"

s = Student("Aman")
print(s.info())`
    },
    mcqQuestions: [
      {
        question: "What is the purpose of __init__ in a Python class?",
        options: ["To delete an object", "Constructor method executed automatically when an object is created", "To make a class private", "To inherit from another class"],
        answerIndex: 1,
        explanation: "`__init__` acts as the constructor method called when an object is instantiated."
      },
      {
        question: "What does the self parameter represent inside class methods?",
        options: ["The global module", "The instance of the class calling the method", "The parent class", "A reserved keyword required by the Python interpreter"],
        answerIndex: 1,
        explanation: "`self` represents the specific instance of the class."
      },
      {
        question: "How do you instantiate a class named Car in Python?",
        options: ["Car my_car = new Car()", "my_car = Car()", "my_car = create Car()", "my_car = Car.new()"],
        answerIndex: 1,
        explanation: "Python instantiates classes using function call syntax `my_car = Car()`."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: Class Definition & Instance Creation",
        prompt: "Define class Student with name, level. Print `OOP Student Class Asserted!`.",
        starterCode: `class Student:
    def __init__(self, name): self.name = name
s = Student('Aman')
print(f'Student: {s.name}. OOP Student Class Asserted!')`,
        expectedKeyword: "OOP Student Class Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Instance Method Invocation",
        prompt: "Add method greet() returning greeting message. Print `Instance Method Asserted!`.",
        starterCode: `class User:
    def greet(self): return 'Welcome User'
u = User()
print(f'{u.greet()}. Instance Method Asserted!')`,
        expectedKeyword: "Instance Method Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: Car Class Engine Start Method",
        prompt: "Define Car(brand) with start() method. Print `Car Engine Asserted!`.",
        starterCode: `class Car:
    def __init__(self, brand): self.brand = brand
    def start(self): return f'{self.brand} Started'
c = Car('Tesla')
print(f'{c.start()}. Car Engine Asserted!')`,
        expectedKeyword: "Car Engine Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: Multiple Object Instantiation",
        prompt: "Instantiate 2 Student objects. Print `Multiple Objects Asserted!`.",
        starterCode: `class S:
    def __init__(self, n): self.n = n
s1, s2 = S('Aman'), S('John')
print(f'{s1.n}, {s2.n}. Multiple Objects Asserted!')`,
        expectedKeyword: "Multiple Objects Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: Bank Account Deposit Method",
        prompt: "Define Account with deposit(amt) method. Print `Account Deposit Asserted!`.",
        starterCode: `class Acc:
    def __init__(self, b): self.b = b
    def dep(self, a): self.b += a; return self.b
a = Acc(100)
print(f'Bal: {a.dep(50)}. Account Deposit Asserted!')`,
        expectedKeyword: "Account Deposit Asserted!"
      }
    ],
    tasks: [
      { id: 'py9_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py9_t2', text: '🎥 Watch Video: Classes, Objects, Instance Variables, __init__ constructor', completed: false },
      { id: 'py9_t3', text: '✍️ Task: Model Student, Employee, Car, and Book schemas as Python classes', completed: false },
      { id: 'py9_t4', text: '✍️ Task: Instantiate multiple objects and call their instance methods', completed: false },
      { id: 'py9_t5', text: '🚀 Mini Project: Student Management System OOP CLI', completed: false }
    ],
    starterCode: `class Student:
    def __init__(self, name): self.name = name
s = Student('Aman')
print(f'Student: {s.name}. OOP Student Class Asserted!')`,
    expectedKeyword: "OOP Student Class Asserted!"
  },
  {
    day: 10,
    title: 'Day 10 – OOP Inheritance & Encapsulation',
    unit: 'Unit 10: Advanced OOP & Privacy',
    topic: 'Inheritance, Method Overriding, Private attributes (_, __)',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🎥 Watch Video: Single/Multiple Inheritance, Method Overriding, super(), Encapsulation',
    whatToLearn: {
      summary: 'Master inheritance `class Child(Parent):`, call base constructors with `super()`, override parent methods, and enforce encapsulation via `_` and `__` private attributes.',
      details: [
        '🎥 Watch Video: Single/Multiple Inheritance, Method Overriding, super(), Encapsulation',
        'Inherit base class properties using `class Child(Parent):`.',
        'Invoke superclass methods using `super().__init__()`.',
        'Override parent methods to customize child behavior.',
        'Encapsulate sensitive attributes with double underscores `self.__balance`.'
      ],
      codeExample: `class Vehicle:
    def __init__(self, brand):
        self.brand = brand

class ElectricCar(Vehicle):
    def __init__(self, brand, battery):
        super().__init__(brand)
        self.__battery = battery  # Private
    
    def get_battery(self):
        return self.__battery

ev = ElectricCar("Tesla", 100)
print(f"{ev.brand} Battery: {ev.get_battery()}kWh")`
    },
    mcqQuestions: [
      {
        question: "How does a child class Dog inherit from parent class Animal?",
        options: ["class Dog extends Animal:", "class Dog(Animal):", "class Dog inherits Animal:", "class Dog -> Animal:"],
        answerIndex: 1,
        explanation: "Python passes parent classes in parentheses `class Dog(Animal):`."
      },
      {
        question: "What function is used to call methods of a parent class inside a child class?",
        options: ["parent()", "base()", "super()", "this()"],
        answerIndex: 2,
        explanation: "`super()` returns a proxy object delegating method calls to the parent class."
      },
      {
        question: "In Python, how is a private attribute convention indicated in a class?",
        options: ["private balance", "__balance or _balance", "@private balance", "{balance}"],
        answerIndex: 1,
        explanation: "Attributes starting with `_` or `__` signal protected/private encapsulation."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: Class Inheritance Assertion",
        prompt: "Create Dog inheriting from Animal. Print `Inheritance Asserted!`.",
        starterCode: `class Animal: pass
class Dog(Animal): pass
d = Dog()
print('Inheritance Asserted!')`,
        expectedKeyword: "Inheritance Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Super Constructor Call Assertion",
        prompt: "Call super().__init__('Vehicle') in ElectricCar. Print `Super Init Asserted!`.",
        starterCode: `class V:
    def __init__(self, t): self.t = t
class E(V):
    def __init__(self): super().__init__('EV')
e = E()
print(f'{e.t}. Super Init Asserted!')`,
        expectedKeyword: "Super Init Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: Encapsulation Private Attribute",
        prompt: "Store self.__balance = 1000 and access via getter. Print `Encapsulation Asserted!`.",
        starterCode: `class Bank:
    def __init__(self, b): self.__b = b
    def get_b(self): return self.__b
b = Bank(1000)
print(f'Bal: {b.get_b()}. Encapsulation Asserted!')`,
        expectedKeyword: "Encapsulation Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: Method Overriding Assertion",
        prompt: "Override speak() method in Dog child class. Print `Method Override Asserted!`.",
        starterCode: `class Animal:
    def speak(self): return 'Sound'
class Dog(Animal):
    def speak(self): return 'Woof'
print(f'{Dog().speak()}. Method Override Asserted!')`,
        expectedKeyword: "Method Override Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: Polymorphism Method Call",
        prompt: "Call speak() on list of Animal objects. Print `Polymorphism Asserted!`.",
        starterCode: `class Cat: speak = lambda self: 'Meow'
class Dog: speak = lambda self: 'Woof'
print('Polymorphism Asserted!')`,
        expectedKeyword: "Polymorphism Asserted!"
      }
    ],
    tasks: [
      { id: 'py10_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py10_t2', text: '🎥 Watch Video: Single/Multiple Inheritance, Method Overriding, super(), Encapsulation', completed: false },
      { id: 'py10_t3', text: '✍️ Task: Build a parent Vehicle class and child ElectricCar class with overridden methods', completed: false },
      { id: 'py10_t4', text: '✍️ Task: Use super().__init__() to inherit base attributes', completed: false },
      { id: 'py10_t5', text: '🚀 Mini Project: Bank Account System with Encapsulation (__balance)', completed: false }
    ],
    starterCode: `class Animal: pass
class Dog(Animal): pass
d = Dog()
print('Inheritance Asserted!')`,
    expectedKeyword: "Inheritance Asserted!"
  },
  {
    day: 11,
    title: 'Day 11 – File Handling & Modules',
    unit: 'Unit 11: File I/O & Built-in Modules',
    topic: 'open(), with open(), Reading/Writing files, import, math, random',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🎥 Watch Video: open(), Context Managers (with), Reading/Writing .txt and .csv',
    whatToLearn: {
      summary: 'Perform safe file I/O operations using context managers `with open("file.txt", "r") as f:`, read lines, append content, and import standard modules like `math` and `random`.',
      details: [
        '🎥 Watch Video: open(), Context Managers (with), Reading/Writing .txt and .csv',
        'Use `with open()` for auto-closing resource management.',
        'Understand modes: `"r"` (read), `"w"` (write), `"a"` (append).',
        'Read contents using `.read()`, `.readline()`, and `.readlines()`.',
        'Import built-in standard modules `import math, random`.'
      ],
      codeExample: `import math, random

# Write file
with open("demo.txt", "w") as f:
    f.write("DevQuik Python File Handling\n")

# Math & Random
rand_val = random.randint(1, 100)
sqrt_val = math.sqrt(16)
print(f"Random: {rand_val}, Sqrt(16): {sqrt_val}")`
    },
    mcqQuestions: [
      {
        question: "Why is using with open('file.txt', 'r') as f: preferred over f = open('file.txt')?",
        options: ["It runs faster", "It automatically closes the file even if exceptions occur", "It converts text to upper case automatically", "It prevents file encryption"],
        answerIndex: 1,
        explanation: "Context managers (`with`) automatically clean up and close file handlers."
      },
      {
        question: 'Which mode opens a file for writing and appends content to the end without overwriting?',
        options: ['r', 'w', 'a', 'x'],
        answerIndex: 2,
        explanation: "'a' mode appends content to the end of existing file contents."
          },
      {
        options: ["f.read()", "f.readline()", "f.readlines()", "f.get_all()"],
        answerIndex: 2,
        explanation: "`.readlines()` returns all lines as a list of strings."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: Math Module Sqrt Assertion",
        prompt: "Import math and calculate math.sqrt(16). Print `Math Sqrt Asserted!`.",
        starterCode: `import math
val = math.sqrt(16)
print(f'Sqrt 16 = {val}. Math Sqrt Asserted!')`,
        expectedKeyword: "Math Sqrt Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Random Module Randint Assertion",
        prompt: "Generate random integer between 1 and 10. Print `Random Randint Asserted!`.",
        starterCode: `import random
r = random.randint(1, 10)
print(f'Random: {r}. Random Randint Asserted!')`,
        expectedKeyword: "Random Randint Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: String IO Write & Read Simulated",
        prompt: "Simulate file write lines reading ['line1', 'line2']. Print `File IO Asserted!`.",
        starterCode: `lines = ['line1\n', 'line2\n']
content = ''.join(lines)
print(f'Content: {content.strip()}. File IO Asserted!')`,
        expectedKeyword: "File IO Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: File Mode Append Simulation",
        prompt: "Simulate appending data to existing text. Print `File Append Asserted!`.",
        starterCode: `base = 'Hello'
base += ' World'
print(f'Appended: {base}. File Append Asserted!')`,
        expectedKeyword: "File Append Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: Readlines Length Assertion",
        prompt: "Check length of readlines list ['a\n', 'b\n']. Print `Readlines Asserted!`.",
        starterCode: `lines = ['a\n', 'b\n']
print(f'Line count: {len(lines)}. Readlines Asserted!')`,
        expectedKeyword: "Readlines Asserted!"
      }
    ],
    tasks: [
      { id: 'py11_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py11_t2', text: '🎥 Watch Video: open(), Context Managers (with), Reading/Writing .txt and .csv', completed: false },
      { id: 'py11_t3', text: '✍️ Task: Write text to a file and read it back line-by-line using with open()', completed: false },
      { id: 'py11_t4', text: '✍️ Task: Append data without overwriting existing contents', completed: false },
      { id: 'py11_t5', text: '🚀 Mini Project: Persistent Contact Book CLI (Saves to file)', completed: false }
    ],
    starterCode: `import math
val = math.sqrt(16)
print(f'Sqrt 16 = {val}. Math Sqrt Asserted!')`,
    expectedKeyword: "Math Sqrt Asserted!"
  },
  {
    day: 12,
    title: 'Day 12 – Exception Handling & API Requests',
    unit: 'Unit 12: Errors & REST APIs',
    topic: 'try...except...finally, requests module, Parsing JSON APIs',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🎥 Watch Video: try...except...finally, Raising Custom Exceptions, requests.get()',
    whatToLearn: {
      summary: 'Catch runtime exceptions using `try...except...finally`, raise custom exceptions, fetch REST APIs using `requests.get()`, and parse JSON responses.',
      details: [
        '🎥 Watch Video: try...except...finally, Raising Custom Exceptions, requests.get()',
        'Handle specific exceptions (`ValueError`, `ZeroDivisionError`, `KeyError`).',
        'Always execute cleanup logic inside `finally:` blocks.',
        'Manually trigger errors with `raise ValueError("Invalid")`.',
        'Fetch REST APIs and parse JSON dictionaries using `response.json()`.'
      ],
      codeExample: `try:
    val = int("123")
    res = 10 / 2
except (ValueError, ZeroDivisionError) as e:
    print(f"Error: {e}")
finally:
    print("Execution Finished")`
    },
    mcqQuestions: [
      {
        question: "Which block of code in try...except ALWAYS executes regardless of errors?",
        options: ["else", "finally", "catch", "always"],
        answerIndex: 1,
        explanation: "The `finally` block always executes regardless of whether an exception was raised."
      },
      {
        question: "How do you convert a response from requests.get(url) into a Python dictionary?",
        options: ["response.text()", "response.json()", "dict(response)", "JSON.parse(response)"],
        answerIndex: 1,
        explanation: "`response.json()` parses the raw HTTP body JSON string into a native Python dictionary."
      },
      {
        question: "What keyword is used to manually trigger an exception in Python?",
        options: ["throw", "raise", "error", "emit"],
        answerIndex: 1,
        explanation: "Exceptions are manually raised using the `raise` keyword."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: Try Except Catch ZeroDivisionError",
        prompt: "Handle ZeroDivisionError cleanly. Print `Exception Caught Asserted!`.",
        starterCode: `try:
    x = 10 / 0
except ZeroDivisionError:
    print('Handled 10/0. Exception Caught Asserted!')`,
        expectedKeyword: "Exception Caught Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Finally Block Execution Assertion",
        prompt: "Execute finally block after try. Print `Finally Executed Asserted!`.",
        starterCode: `try:
    x = 1
finally:
    print('Cleanup. Finally Executed Asserted!')`,
        expectedKeyword: "Finally Executed Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: Manual Raise ValueError",
        prompt: "Raise ValueError if age < 0. Print `Raise Exception Asserted!`.",
        starterCode: `try:
    age = -5
    if age < 0: raise ValueError('Invalid Age')
except ValueError:
    print('Caught -5. Raise Exception Asserted!')`,
        expectedKeyword: "Raise Exception Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: JSON Parsing Simulation",
        prompt: "Parse dict {'status': 200, 'city': 'Kochi'}. Print `JSON Parsing Asserted!`.",
        starterCode: `data = {'status': 200, 'city': 'Kochi'}
print(f'City: {data["city"]}. JSON Parsing Asserted!')`,
        expectedKeyword: "JSON Parsing Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: REST API Response Simulation",
        prompt: "Simulate API status check status_code == 200. Print `API Status 200 Asserted!`.",
        starterCode: `status = 200
if status == 200: print('OK. API Status 200 Asserted!')`,
        expectedKeyword: "API Status 200 Asserted!"
      }
    ],
    tasks: [
      { id: 'py12_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py12_t2', text: '🎥 Watch Video: try...except...finally, Raising Custom Exceptions, requests.get()', completed: false },
      { id: 'py12_t3', text: '✍️ Task: Fetch live data from a public REST API (e.g., OpenWeather or JSONPlaceholder)', completed: false },
      { id: 'py12_t4', text: '✍️ Task: Handle requests.exceptions.RequestException and ValueError safely', completed: false },
      { id: 'py12_t5', text: '🚀 Mini Project: Weather CLI App using REST API', completed: false }
    ],
    starterCode: `try:
    x = 10 / 0
except ZeroDivisionError:
    print('Handled 10/0. Exception Caught Asserted!')`,
    expectedKeyword: "Exception Caught Asserted!"
  },
  {
    day: 13,
    title: 'Day 13 – Virtual Environments & pip',
    unit: 'Unit 13: Packages & Environment Management',
    topic: 'python -m venv, pip install, requirements.txt, Custom Modules',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🎥 Watch Video: python -m venv, pip install, requirements.txt, Custom Modules',
    whatToLearn: {
      summary: 'Manage Python dependencies. Create virtual environments (`venv`), install packages via `pip`, generate `requirements.txt`, and import custom module files.',
      details: [
        '🎥 Watch Video: python -m venv, pip install, requirements.txt, Custom Modules',
        'Create isolated virtual environments using `python -m venv .venv`.',
        'Activate environment and install packages via `pip install <package>`.',
        'Export project dependencies using `pip freeze > requirements.txt`.',
        'Import functions from custom Python module files (`from helper import my_func`).'
      ],
      codeExample: `# helpers.py
def get_app_name():
    return "DevQuik Python App"

# main.py
from helpers import get_app_name
print(f"Loaded module: {get_app_name()}")`
    },
    mcqQuestions: [
      {
        question: "What command creates a virtual environment named env in Python?",
        options: ["pip create env", "python -m venv env", "virtualenv make env", "python install env"],
        answerIndex: 1,
        explanation: "`python -m venv env` creates an isolated virtual environment."
      },
      {
        question: "Which command exports all installed packages in the current environment to a file?",
        options: ["pip list > requirements.txt", "pip freeze > requirements.txt", "pip save requirements.txt", "python export requirements.txt"],
        answerIndex: 1,
        explanation: "`pip freeze > requirements.txt` dumps all installed package specifiers."
      },
      {
        question: "How do you import a function calculate from a custom file helpers.py?",
        options: ["import calculate from helpers", "from helpers import calculate", "require('helpers').calculate", "use helpers.calculate"],
        answerIndex: 1,
        explanation: "Python imports symbols using `from module import symbol` syntax."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: Virtual Environment Command Assertion",
        prompt: "Print virtualenv creation command `python -m venv .venv`. Print `Venv Command Asserted!`.",
        starterCode: `cmd = 'python -m venv .venv'
print(f'Cmd: {cmd}. Venv Command Asserted!')`,
        expectedKeyword: "Venv Command Asserted!"
      },
      {
        id: 2,
        title: "Challenge 2: Pip Freeze Requirements Export",
        prompt: "Simulate requirements.txt content 'requests==2.31.0'. Print `Pip Freeze Asserted!`.",
        starterCode: `reqs = 'requests==2.31.0'
print(f'Reqs: {reqs}. Pip Freeze Asserted!')`,
        expectedKeyword: "Pip Freeze Asserted!"
      },
      {
        id: 3,
        title: "Challenge 3: Custom Module Import Simulation",
        prompt: "Simulate `from helpers import calc`. Print `Custom Module Import Asserted!`.",
        starterCode: `def calc(a, b): return a + b
print(f'Calc: {calc(2, 3)}. Custom Module Import Asserted!')`,
        expectedKeyword: "Custom Module Import Asserted!"
      },
      {
        id: 4,
        title: "Challenge 4: Package Requirement Installation Assertion",
        prompt: "Simulate installing pip package `pip install requests`. Print `Pip Install Asserted!`.",
        starterCode: `pkg = 'requests'
print(f'Installed {pkg}. Pip Install Asserted!')`,
        expectedKeyword: "Pip Install Asserted!"
      },
      {
        id: 5,
        title: "Challenge 5: Main Entry Point Assertion",
        prompt: "Check `if __name__ == '__main__':`. Print `Main Guard Asserted!`.",
        starterCode: `name = '__main__'
if name == '__main__': print('Executing Main. Main Guard Asserted!')`,
        expectedKeyword: "Main Guard Asserted!"
      }
    ],
    tasks: [
      { id: 'py13_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py13_t2', text: '🎥 Watch Video: python -m venv, pip install, requirements.txt, Custom Modules', completed: false },
      { id: 'py13_t3', text: '✍️ Task: Create and activate a virtual environment (.venv)', completed: false },
      { id: 'py13_t4', text: '✍️ Task: Generate a requirements.txt file using pip freeze', completed: false },
      { id: 'py13_t5', text: '🚀 Mini Project: Persistent Notes Manager with File Storage and Package Imports', completed: false }
    ],
    starterCode: `cmd = 'python -m venv .venv'
print(f'Cmd: {cmd}. Venv Command Asserted!')`,
    expectedKeyword: "Venv Command Asserted!"
  },
  {
    day: 14,
    title: 'Day 14 – Portfolio Project Sprint (Pure Coding)',
    unit: 'Unit 14: 5 Standalone Python Portfolio Capstones',
    topic: 'Build 5 standalone Python projects from scratch',
    playlistUrl: 'https://youtube.com/playlist?list=PLsyeobzWjNWXcZauLub5oks68m81xFd4e',
    videoBreakdown: '🚀 Build 5 Standalone Python Portfolio Projects from scratch.',
    whatToLearn: {
      summary: 'Build 5 complete standalone Python projects: Interactive To-Do List CLI, Calculator with History, Weather CLI App using REST API, Expense Tracker with JSON, and Quiz Game App.',
      details: [
        '🚀 Build Project 1: Interactive To-Do List CLI with File Storage',
        '🚀 Build Project 2: Command-Line Calculator with History',
        '🚀 Build Project 3: Live Weather CLI App using API',
        '🚀 Build Project 4: Expense Tracker with JSON Persistence',
        '🚀 Build Project 5: Quiz Game App with Score History'
      ],
      codeExample: `projects = [
    "Interactive To-Do List CLI",
    "Command-Line Calculator",
    "Live Weather CLI App",
    "Expense Tracker with JSON",
    "Quiz Game App"
]
for i, p in enumerate(projects, 1):
    print(f"Project {i}: {p} Completed!")`
    },
    mcqQuestions: [
      {
        question: "Which Python execution structure ensures a script runs directly and NOT when imported as a module?",
        options: ["if __name__ == '__main__':", "if module == 'main':", "def main():", "if __file__ == '__main__':"],
        answerIndex: 0,
        explanation: "if __name__ == '__main__': evaluates to True only when the script is executed directly."
      }
    ],
    terminalChallenges: [
      {
        id: 1,
        title: "Challenge 1: Interactive To-Do List CLI Project Assertion",
        prompt: "Assert project 1 object and print `Project 1 To-Do Validated!`.",
        starterCode: `p1 = {'title': 'Interactive To-Do List CLI'}
print('Project 1 To-Do Validated!')`,
        expectedKeyword: "Project 1 To-Do Validated!"
      },
      {
        id: 2,
        title: "Challenge 2: Command-Line Calculator Project Assertion",
        prompt: "Assert project 2 object and print `Project 2 Calculator Validated!`.",
        starterCode: `p2 = {'title': 'Command-Line Calculator'}
print('Project 2 Calculator Validated!')`,
        expectedKeyword: "Project 2 Calculator Validated!"
      },
      {
        id: 3,
        title: "Challenge 3: Live Weather CLI App Project Assertion",
        prompt: "Assert project 3 object and print `Project 3 Weather Validated!`.",
        starterCode: `p3 = {'title': 'Live Weather CLI App'}
print('Project 3 Weather Validated!')`,
        expectedKeyword: "Project 3 Weather Validated!"
      },
      {
        id: 4,
        title: "Challenge 4: Expense Tracker JSON Project Assertion",
        prompt: "Assert project 4 object and print `Project 4 Expense Validated!`.",
        starterCode: `p4 = {'title': 'Expense Tracker JSON'}
print('Project 4 Expense Validated!')`,
        expectedKeyword: "Project 4 Expense Validated!"
      },
      {
        id: 5,
        title: "Challenge 5: Total Python Portfolio Projects Completed",
        prompt: "Store 5 project titles in a list and print `Total Python Projects: 5`.",
        starterCode: `projects = ['To-Do CLI', 'Calculator', 'Weather App', 'Expense Tracker', 'Quiz Game']
print('All 14 Days Completed! Total Python Projects:', len(projects))`,
        expectedKeyword: "Total Python Projects: 5"
      }
    ],
    tasks: [
      { id: 'py14_t1', text: 'Log Daily GitHub Push', completed: false },
      { id: 'py14_t2', text: '🚀 Project 1: Interactive To-Do List CLI with File Storage', completed: false },
      { id: 'py14_t3', text: '🚀 Project 2: Command-Line Calculator with History', completed: false },
      { id: 'py14_t4', text: '🚀 Project 3: Live Weather CLI App using API', completed: false },
      { id: 'py14_t5', text: '🚀 Project 4: Expense Tracker with JSON Persistence', completed: false },
      { id: 'py14_t6', text: '🚀 Project 5: Quiz Game App with Score History', completed: false }
    ],
    starterCode: `projects = ['To-Do CLI', 'Calculator', 'Weather App', 'Expense Tracker', 'Quiz Game']
print('All 14 Days Completed! Total Python Projects:', len(projects))`,
    expectedKeyword: "Total Python Projects: 5"
  }
]
  }

];
