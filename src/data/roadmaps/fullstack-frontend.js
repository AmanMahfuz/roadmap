export default {
  id: "fullstack-frontend-2026",
  title: "Frontend Fundamentals",
  description: "Master HTML, CSS, JavaScript, and React to build modern user interfaces",
  estimatedWeeks: 8,
  totalXp: 4500,
  
  modules: [
    {
      id: "html-basics",
      title: "HTML Basics",
      order: 1,
      xpReward: 400,
      icon: "file-code",
      lessons: [
        {
          id: "html-001",
          title: "Introduction to HTML",
          type: "concept",
          duration: 10,
          xpReward: 40,
          difficulty: "easy",
          content: {
            concepts: [
              {
                title: "What is HTML?",
                text: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure and content of a web page using elements and tags.",
                keyPoints: [
                  "HTML uses tags to define elements like headings, paragraphs, and links",
                  "Tags are enclosed in angle brackets: <tag>content</tag>",
                  "HTML documents are saved with .html extension"
                ]
              },
              {
                title: "Basic HTML Document Structure",
                text: "Every HTML document follows a standard structure with DOCTYPE declaration, html, head, and body elements.",
                codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page.</p>
</body>
</html>`,
                keyPoints: [
                  "DOCTYPE html declares HTML5",
                  "lang attribute specifies the document language",
                  "meta viewport ensures responsive design on mobile",
                  "head contains metadata, body contains visible content"
                ]
              }
            ],
            quiz: {
              question: "Which tag is used to define the main visible content area of an HTML page?",
              options: [
                { id: "a", text: "<head>", isCorrect: false, feedback: "The <head> tag contains metadata, not visible content." },
                { id: "b", text: "<html>", isCorrect: false, feedback: "The <html> tag wraps the entire document." },
                { id: "c", text: "<body>", isCorrect: true, feedback: "Correct! The <body> tag contains all visible content." },
                { id: "d", text: "<main>", isCorrect: false, feedback: "<main> is for main content only, not all visible content." }
              ],
              explanation: "The <body> element contains all the content that appears on the web page, including text, images, links, and other elements."
            }
          },
          prerequisites: [],
          isLocked: false
        },
        {
          id: "html-002",
          title: "Semantic HTML Elements",
          type: "concept",
          duration: 15,
          xpReward: 50,
          difficulty: "easy",
          content: {
            concepts: [
              {
                title: "Why Semantic HTML?",
                text: "Semantic HTML uses tags that clearly describe their meaning to both the browser and developer. This improves accessibility, SEO, and code maintainability.",
                codeSnippet: `<!-- Non-semantic -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main">...</div>

<!-- Semantic -->
<header>
  <nav>...</nav>
</header>
<main>...</main>`,
                keyPoints: [
                  "Semantic tags: <header>, <nav>, <main>, <article>, <section>, <footer>",
                  "Improves screen reader accessibility",
                  "Better SEO as search engines understand content structure",
                  "Easier to read and maintain"
                ]
              }
            ],
            quiz: {
              question: "Which semantic tag should wrap the primary content of a webpage?",
              options: [
                { id: "a", text: "<div>", isCorrect: false },
                { id: "b", text: "<section>", isCorrect: false },
                { id: "c", text: "<main>", isCorrect: true },
                { id: "d", text: "<article>", isCorrect: false }
              ],
              explanation: "The <main> element represents the dominant content of the <body> and should be unique to the document."
            }
          }
        },
        {
          id: "html-003",
          title: "Links, Images & Media",
          type: "concept",
          duration: 15,
          xpReward: 50,
          difficulty: "easy",
          content: {
            concepts: [
              {
                title: "Creating Links with <a> Tag",
                codeSnippet: `<!-- External link -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Example
</a>

<!-- Internal link -->
<a href="/about.html">About Us</a>

<!-- Anchor link -->
<a href="#section2">Jump to Section 2</a>`,
                keyPoints: [
                  "href attribute specifies the destination URL",
                  "target='_blank' opens link in new tab",
                  "rel='noopener noreferrer' for security on external links"
                ]
              },
              {
                title: "Embedding Images",
                codeSnippet: `<img 
  src="images/photo.jpg" 
  alt="Description of image" 
  width="600" 
  height="400"
  loading="lazy"
/>`,
                keyPoints: [
                  "src specifies the image path",
                  "alt provides accessibility text for screen readers",
                  "loading='lazy' improves performance",
                  "Always include alt text for accessibility"
                ]
              }
            ],
            quiz: {
              question: "What is the purpose of the 'alt' attribute in an <img> tag?",
              options: [
                { id: "a", text: "To specify image dimensions", isCorrect: false },
                { id: "b", text: "To provide alternative text for accessibility", isCorrect: true },
                { id: "c", text: "To set image border", isCorrect: false },
                { id: "d", text: "To define image format", isCorrect: false }
              ],
              explanation: "The alt attribute provides text description for screen readers and displays if image fails to load."
            }
          }
        },
        {
          id: "html-004",
          title: "Forms & Input Validation",
          type: "concept",
          duration: 20,
          xpReward: 60,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Creating Forms",
                codeSnippet: `<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    required 
    placeholder="you@example.com"
  />
  
  <label for="password">Password:</label>
  <input 
    type="password" 
    id="password" 
    name="password" 
    required 
    minlength="8"
  />
  
  <button type="submit">Register</button>
</form>`,
                keyPoints: [
                  "action specifies form submission URL",
                  "method can be GET or POST",
                  "label for matches input id for accessibility",
                  "required makes field mandatory",
                  "type='email' provides built-in validation"
                ]
              }
            ],
            quiz: {
              question: "Which input type provides built-in email format validation?",
              options: [
                { id: "a", text: 'type="text"', isCorrect: false },
                { id: "b", text: 'type="email"', isCorrect: true },
                { id: "c", text: 'type="validate"', isCorrect: false },
                { id: "d", text: 'type="form"', isCorrect: false }
              ],
              explanation: "type='email' automatically validates email format in modern browsers."
            }
          }
        },
        {
          id: "html-005",
          title: "HTML Tables & Lists",
          type: "concept",
          duration: 15,
          xpReward: 50,
          difficulty: "easy",
          content: {
            concepts: [
              {
                title: "Creating Tables",
                codeSnippet: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Kochi</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Trivandrum</td>
    </tr>
  </tbody>
</table>`,
                keyPoints: [
                  "<thead> for table header",
                  "<tbody> for table body",
                  "<th> for header cells, <td> for data cells",
                  "Use tables for tabular data only, not layout"
                ]
              },
              {
                title: "Ordered & Unordered Lists",
                codeSnippet: `<!-- Unordered List -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>Learn HTML</li>
  <li>Practice CSS</li>
  <li>Master JavaScript</li>
</ol>`,
                keyPoints: [
                  "<ul> creates bullet points",
                  "<ol> creates numbered lists",
                  "<li> defines list items"
                ]
              }
            ]
          }
        },
        {
          id: "html-006",
          title: "SEO Basics & Meta Tags",
          type: "concept",
          duration: 15,
          xpReward: 50,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Essential Meta Tags",
                codeSnippet: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn full stack development with DevQuik">
  <meta name="keywords" content="HTML, CSS, JavaScript, React, Node.js">
  <meta name="author" content="DevQuik Team">
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="DevQuik - Learn to Code">
  <meta property="og:description" content="Interactive coding platform">
  <meta property="og:image" content="https://devquik.com/og-image.jpg">
  
  <title>DevQuik - Learn Full Stack Development</title>
</head>`,
                keyPoints: [
                  "meta description appears in search results",
                  "Open Graph tags control social media previews",
                  "Good SEO improves discoverability",
                  "Keep descriptions under 160 characters"
                ]
              }
            ]
          }
        },
        {
          id: "html-007",
          title: "Checkpoint: Static Webpages",
          type: "project",
          duration: 120,
          xpReward: 150,
          difficulty: "medium",
          isBossBattle: true,
          content: {
            project: {
              title: "Build Your Portfolio Landing Page",
              description: "Create a complete static portfolio page using semantic HTML",
              requirements: [
                "Use semantic HTML5 elements (header, nav, main, section, footer)",
                "Include at least 3 sections: About, Projects, Contact",
                "Add a working contact form with email and message fields",
                "Include links to your GitHub and LinkedIn profiles",
                "Add proper meta tags for SEO",
                "Ensure all images have alt text for accessibility"
              ],
              starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name - Portfolio</title>
  <!-- Add your meta tags here -->
</head>
<body>
  <!-- Build your portfolio here -->
</body>
</html>`,
              checklist: [
                "Semantic HTML structure",
                "Working contact form",
                "Social media links",
                "SEO meta tags",
                "Accessibility features"
              ],
              exampleSolution: "See src/examples/html-portfolio.html"
            }
          },
          prerequisites: ["html-001", "html-002", "html-003", "html-004", "html-005", "html-006"]
        }
      ]
    },
    
    // CSS Module
    {
      id: "css-basics",
      title: "CSS Fundamentals",
      order: 2,
      xpReward: 600,
      icon: "palette",
      lessons: [
        {
          id: "css-001",
          title: "CSS Syntax & Selectors",
          type: "concept",
          duration: 15,
          xpReward: 50,
          difficulty: "easy",
          content: {
            concepts: [
              {
                title: "CSS Basics",
                text: "CSS (Cascading Style Sheets) controls the visual presentation of HTML elements. It defines colors, layouts, fonts, and responsive behavior.",
                codeSnippet: `/* CSS Syntax */
selector {
  property: value;
  property: value;
}

/* Example */
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}
`,
                keyPoints: [
                  "Selectors target HTML elements",
                  "Properties define what to style",
                  "Values specify how to style",
                  "Comments use /* */ syntax"
                ]
              },
              {
                title: "Common Selectors",
                codeSnippet: `/* Element selector */
p { color: black; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#main-title { font-size: 32px; }

/* Descendant selector */
nav a { text-decoration: none; }

/* Pseudo-class */
button:hover { background: blue; }`,
                keyPoints: [
                  ".class for reusable styles",
                  "#id for unique elements",
                  "element for all instances",
                  ":hover for interaction states"
                ]
              }
            ],
            quiz: {
              question: "Which selector has the highest specificity?",
              options: [
                { id: "a", text: "Element selector (p)", isCorrect: false },
                { id: "b", text: "Class selector (.highlight)", isCorrect: false },
                { id: "c", text: "ID selector (#main)", isCorrect: true },
                { id: "d", text: "Universal selector (*)", isCorrect: false }
              ],
              explanation: "ID selectors have higher specificity than classes and elements. Specificity order: !important > inline > ID > class > element."
            }
          }
        },
        {
          id: "css-002",
          title: "Box Model & Display",
          type: "concept",
          duration: 20,
          xpReward: 60,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "The CSS Box Model",
                text: "Every HTML element is a box with four layers: content, padding, border, and margin.",
                codeSnippet: `.box {
  width: 300px;
  padding: 20px;
  border: 2px solid #000;
  margin: 10px;
  
  /* Box-sizing includes padding and border in width */
  box-sizing: border-box;
}`,
                keyPoints: [
                  "Content: actual text/image",
                  "Padding: space inside border",
                  "Border: edge around padding",
                  "Margin: space outside border",
                  "box-sizing: border-box makes sizing easier"
                ]
              },
              {
                title: "Display Property",
                codeSnippet: `/* Block: takes full width */
div { display: block; }

/* Inline: only takes needed width */
span { display: inline; }

/* Inline-block: both */
button { display: inline-block; }

/* Flex: modern layout */
.container { display: flex; }

/* Grid: 2D layout */
.grid { display: grid; }

/* None: hides element */
.hidden { display: none; }`,
                keyPoints: [
                  "block: starts on new line (div, p, h1)",
                  "inline: stays in flow (span, a)",
                  "flex: one-dimensional layout",
                  "grid: two-dimensional layout"
                ]
              }
            ]
          }
        },
        {
          id: "css-003",
          title: "Flexbox Layout",
          type: "concept",
          duration: 25,
          xpReward: 70,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Flexbox Container Properties",
                codeSnippet: `.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: center; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  gap: 16px; /* space between items */
  flex-wrap: wrap; /* allow wrapping */
}`,
                keyPoints: [
                  "justify-content: flex-start | center | flex-end | space-between",
                  "align-items: stretch | flex-start | center | flex-end",
                  "gap replaces margin for spacing",
                  "flex-wrap allows items to wrap on smaller screens"
                ]
              },
              {
                title: "Flexbox Item Properties",
                codeSnippet: `.item {
  flex: 1; /* grow, shrink, basis */
  align-self: center; /* override container alignment */
  order: 2; /* change visual order */
}`,
                keyPoints: [
                  "flex: 1 makes items equal width",
                  "align-self overrides align-items",
                  "order changes display order without changing HTML"
                ]
              }
            ],
            quiz: {
              question: "Which property controls horizontal alignment in a flex container?",
              options: [
                { id: "a", text: "align-items", isCorrect: false },
                { id: "b", text: "justify-content", isCorrect: true },
                { id: "c", text: "flex-direction", isCorrect: false },
                { id: "d", text: "align-self", isCorrect: false }
              ],
              explanation: "justify-content controls alignment along the main axis (horizontal for row direction)."
            }
          }
        },
        {
          id: "css-004",
          title: "CSS Grid",
          type: "concept",
          duration: 25,
          xpReward: 70,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Grid Container",
                codeSnippet: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto 200px;
  gap: 20px;
  
  /* Or define specific areas */
  grid-template-areas:
    'header header header'
    'sidebar main main'
    'footer footer footer';
}`,
                keyPoints: [
                  "fr unit represents fractional space",
                  "repeat() creates multiple columns/rows",
                  "grid-template-areas for visual layout",
                  "gap sets spacing between cells"
                ]
              },
              {
                title: "Grid Items",
                codeSnippet: `.item {
  grid-column: 1 / 3; /* span columns 1 to 3 */
  grid-row: 1 / 2;
  
  /* Or use area names */
  grid-area: header;
}`,
                keyPoints: [
                  "grid-column: start / end",
                  "grid-row: start / end",
                  "grid-area references template-areas"
                ]
              }
            ]
          }
        },
        {
          id: "css-005",
          title: "Responsive Design & Media Queries",
          type: "concept",
          duration: 20,
          xpReward: 60,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Media Queries",
                codeSnippet: `/* Mobile-first approach */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 32px;
    display: flex;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}`,
                keyPoints: [
                  "Mobile-first: start small, add breakpoints",
                  "Common breakpoints: 768px (tablet), 1024px (desktop)",
                  "max-width: 100% for responsive images",
                  "Use rem/em for scalable typography"
                ]
              }
            ]
          }
        },
        {
          id: "css-006",
          title: "CSS Animations & Transitions",
          type: "concept",
          duration: 20,
          xpReward: 60,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Transitions",
                codeSnippet: `.button {
  background: blue;
  transition: all 0.3s ease;
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}`,
                keyPoints: [
                  "transition: property duration timing-function delay",
                  "transform for scaling, rotating, translating",
                  "ease, linear, ease-in-out for timing"
                ]
              },
              {
                title: "Keyframe Animations",
                codeSnippet: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fadeIn 1s ease-in-out;
  animation-iteration-count: infinite;
}`,
                keyPoints: [
                  "@keyframes defines animation steps",
                  "animation: name duration timing-function",
                  "infinite repeats forever"
                ]
              }
            ]
          }
        },
        {
          id: "css-007",
          title: "Checkpoint: Clone a Website",
          type: "project",
          duration: 180,
          xpReward: 200,
          difficulty: "hard",
          isBossBattle: true,
          content: {
            project: {
              title: "Clone a Popular Website Homepage",
              description: "Recreate the homepage of a website you love using HTML and CSS",
              requirements: [
                "Use Flexbox or Grid for layout",
                "Implement responsive design with media queries",
                "Add hover effects and transitions",
                "Match the original design as closely as possible",
                "Ensure it works on mobile, tablet, and desktop",
                "Use semantic HTML and clean CSS"
              ],
              suggestions: [
                "Google homepage",
                "Netflix landing page",
                "Spotify homepage",
                "Your favorite portfolio site"
              ],
              checklist: [
                "Responsive layout",
                "Flexbox/Grid usage",
                "Hover effects",
                "Clean code structure",
                "Mobile-friendly"
              ]
            }
          },
          prerequisites: ["css-001", "css-002", "css-003", "css-004", "css-005", "css-006"]
        }
      ]
    },
    
    // JavaScript Module
    {
      id: "javascript-basics",
      title: "JavaScript Fundamentals",
      order: 3,
      xpReward: 800,
      icon: "code",
      lessons: [
        {
          id: "js-001",
          title: "Variables & Data Types",
          type: "concept",
          duration: 15,
          xpReward: 50,
          difficulty: "easy",
          content: {
            concepts: [
              {
                title: "Declaring Variables",
                codeSnippet: `// let: block-scoped, reassignable
let name = "Alice";
name = "Bob";

// const: block-scoped, constant
const PI = 3.14159;

// var: function-scoped (avoid in modern JS)
var oldWay = "deprecated";`,
                keyPoints: [
                  "Use const by default, let when reassignment needed",
                  "Avoid var in modern JavaScript",
                  "Always use strict mode: 'use strict'"
                ]
              },
              {
                title: "Data Types",
                codeSnippet: `// Primitives
let string = "Hello";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let symbol = Symbol("id");

// Reference types
let array = [1, 2, 3];
let object = { name: "Alice", age: 25 };
let func = () => {};`,
                keyPoints: [
                  "Primitives: string, number, boolean, null, undefined, symbol, bigint",
                  "Reference: object, array, function",
                  "typeof checks type: typeof 'hello' // 'string'"
                ]
              }
            ],
            quiz: {
              question: "Which keyword should you use by default for declaring variables?",
              options: [
                { id: "a", text: "var", isCorrect: false },
                { id: "b", text: "let", isCorrect: false },
                { id: "c", text: "const", isCorrect: true },
                { id: "d", text: "static", isCorrect: false }
              ],
              explanation: "Use const by default. Only use let when you need to reassign the variable. Avoid var."
            }
          }
        },
        {
          id: "js-002",
          title: "Functions & Arrow Functions",
          type: "concept",
          duration: 20,
          xpReward: 60,
          difficulty: "easy",
          content: {
            concepts: [
              {
                title: "Function Declarations",
                codeSnippet: `// Traditional function
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Arrow function (ES6)
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Concise arrow function
const greet = name => \`Hello, \${name}!\`;`,
                keyPoints: [
                  "Arrow functions don't have their own 'this'",
                  "Use arrow functions for callbacks and short functions",
                  "Regular functions for methods and when 'this' matters"
                ]
              }
            ]
          }
        },
        {
          id: "js-003",
          title: "Arrays & Array Methods",
          type: "concept",
          duration: 25,
          xpReward: 70,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Essential Array Methods",
                codeSnippet: `const numbers = [1, 2, 3, 4, 5];

// map: transform each element
const doubled = numbers.map(n => n * 2);

// filter: keep elements matching condition
const evens = numbers.filter(n => n % 2 === 0);

// reduce: accumulate to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);

// find: first matching element
const first = numbers.find(n => n > 3);

// some/every: test conditions
const hasEven = numbers.some(n => n % 2 === 0);
const allPositive = numbers.every(n => n > 0);`,
                keyPoints: [
                  "map returns new array with transformed values",
                  "filter returns new array with matching elements",
                  "reduce accumulates to single value",
                  "These methods don't mutate original array"
                ]
              }
            ],
            quiz: {
              question: "Which method would you use to transform [1,2,3] into [2,4,6]?",
              options: [
                { id: "a", text: "filter", isCorrect: false },
                { id: "b", text: "reduce", isCorrect: false },
                { id: "c", text: "map", isCorrect: true },
                { id: "d", text: "forEach", isCorrect: false }
              ],
              explanation: "map() transforms each element and returns a new array. filter() removes elements, reduce() combines them."
            }
          }
        },
        {
          id: "js-004",
          title: "DOM Manipulation",
          type: "concept",
          duration: 25,
          xpReward: 70,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Selecting Elements",
                codeSnippet: `// By ID
const element = document.getElementById('myId');

// By class
const elements = document.getElementsByClassName('myClass');

// By query selector (most flexible)
const element = document.querySelector('.myClass');
const all = document.querySelectorAll('div.container');`,
                keyPoints: [
                  "querySelector is most versatile",
                  "querySelectorAll returns NodeList",
                  "getElementById returns single element"
                ]
              },
              {
                title: "Modifying Elements",
                codeSnippet: `const el = document.querySelector('#title');

// Change content
el.textContent = 'New Text';
el.innerHTML = '<strong>Bold</strong>';

// Change styles
el.style.color = 'blue';
el.style.fontSize = '20px';

// Add/remove classes
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('visible');`,
                keyPoints: [
                  "textContent for plain text, innerHTML for HTML",
                  "style.property for inline styles",
                  "classList for managing CSS classes"
                ]
              }
            ]
          }
        },
        {
          id: "js-005",
          title: "Events & Event Handling",
          type: "concept",
          duration: 20,
          xpReward: 60,
          difficulty: "medium",
          content: {
            concepts: [
              {
                title: "Event Listeners",
                codeSnippet: `const button = document.querySelector('#myButton');

// Add event listener
button.addEventListener('click', (event) => {
  console.log('Button clicked!', event);
});

// Remove event listener
button.removeEventListener('click', handler);

// Common events
element.addEventListener('mouseover', handleHover);
element.addEventListener('keydown', handleKey);
form.addEventListener('submit', handleSubmit);`,
                keyPoints: [
                  "addEventListener attaches handlers",
                  "Event object contains details (target, type, etc.)",
                  "Prevent default: event.preventDefault()",
                  "Stop propagation: event.stopPropagation()"
                ]
              }
            ]
          }
        },
        {
          id: "js-006",
          title: "Async JavaScript: Promises & Async/Await",
          type: "concept",
          duration: 30,
          xpReward: 80,
          difficulty: "hard",
          content: {
            concepts: [
              {
                title: "Promises",
                codeSnippet: `// Creating a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
    // or reject('Error!');
  }, 1000);
});

// Consuming a promise
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));`,
                keyPoints: [
                  "Promise has 3 states: pending, fulfilled, rejected",
                  ".then() handles success",
                  ".catch() handles errors",
                  ".finally() always runs"
                ]
              },
              {
                title: "Async/Await",
                codeSnippet: `// Async function
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Using async function
fetchData().then(data => console.log(data));`,
                keyPoints: [
                  "async keyword makes function return a promise",
                  "await pauses execution until promise resolves",
                  "Always use try/catch with await",
                  "More readable than promise chains"
                ]
              }
            ],
            quiz: {
              question: "What keyword is used to pause execution until a Promise resolves?",
              options: [
                { id: "a", text: "wait", isCorrect: false },
                { id: "b", text: "pause", isCorrect: false },
                { id: "c", text: "await", isCorrect: true },
                { id: "d", text: "stop", isCorrect: false }
              ],
              explanation: "await pauses async function execution until the Promise resolves. It can only be used inside async functions."
            }
          }
        },
        {
          id: "js-007",
          title: "Checkpoint: Interactive Todo App",
          type: "project",
          duration: 240,
          xpReward: 250,
          difficulty: "hard",
          isBossBattle: true,
          content: {
            project: {
              title: "Build an Interactive Todo App",
              description: "Create a fully functional todo application with vanilla JavaScript",
              requirements: [
                "Add new todos with a form",
                "Display todos in a list",
                "Mark todos as complete/incomplete",
                "Delete todos",
                "Filter todos (all/active/completed)",
                "Save todos to localStorage",
                "Show todo count"
              ],
              features: [
                "Clean, semantic HTML",
                "Responsive CSS with Flexbox",
                "Vanilla JavaScript (no frameworks)",
                "Event delegation for efficiency",
                "localStorage persistence"
              ],
              starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Todo App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>My Todos</h1>
    <form id="todoForm">
      <input type="text" id="todoInput" placeholder="Add a todo...">
      <button type="submit">Add</button>
    </form>
    <ul id="todoList"></ul>
  </div>
  <script src="app.js"></script>
</body>
</html>`
            }
          },
          prerequisites: ["js-001", "js-002", "js-003", "js-004", "js-005", "js-006"]
        }
      ]
    }
  ]
};
