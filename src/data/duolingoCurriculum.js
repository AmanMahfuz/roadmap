// DevQuik: Duolingo-Style Micro-Lesson Curriculum & Guidebooks

export const DUOLINGO_UNITS = [
  {
    id: 'unit-1',
    skillId: 'html',
    title: 'Unit 1: HTML Web Foundations',
    subtitle: 'Learn page structure, tags, elements, and semantic markup.',
    color: '#E44D26',
    icon: 'Code2',
    guidebook: {
      unitTitle: 'Unit 1 Guidebook: HTML Structure & Semantics',
      summary: 'Master fundamental HTML elements, Document Type definitions, and page accessibility.',
      syntaxRules: [
        { code: '<!DOCTYPE html>', rule: 'Must be the very first line of any modern HTML5 document.' },
        { code: '<h1> to <h6>', rule: 'Structural heading tags. Use <h1> only once per page for main titles.' },
        { code: '<p>Content</p>', rule: 'Paragraph element wrapper for body text blocks.' },
        { code: '<strong>Text</strong>', rule: 'Conveys semantic importance and renders bold text.' }
      ],
      commonMistakes: [
        'Forgetting closing tags (e.g. leaving <p> open without </p>).',
        'Nesting block-level elements inside inline paragraph tags.',
        'Using multiple <h1> tags instead of proper <h2>-<h6> hierarchy.'
      ],
      cheatSheet: `<!-- HTML5 Standard Template -->
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Title</h1>
    <p>Paragraph with <strong>important</strong> text.</p>
  </body>
</html>`
    },
    lessons: [
      {
        id: 'html-1-1',
        unitId: 'unit-1',
        title: '1.1 The HTML Boilerplate',
        objective: 'Understand doctype, html, head, and body tags.',
        estimatedMinutes: 3,
        xpReward: 20,
        youtubeUrl: 'https://www.youtube.com/watch?v=s97BsqG_YvE',
        cards: [
          {
            type: 'concept',
            title: 'What is HTML?',
            content: 'HTML (HyperText Markup Language) is the standard skeleton for web pages. HTML tags tell the browser how to display content.',
            keyTerm: '<tagname>Content</tagname>'
          },
          {
            type: 'example',
            title: 'The HTML Skeleton',
            codeSnippet: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`,
            explanation: 'Every web document starts with <!DOCTYPE html> followed by <html>, <head>, and <body>.'
          },
          {
            type: 'micro_challenge',
            title: 'Micro Challenge: Complete the Heading Tag',
            prompt: 'Fill in the missing <h1> heading tag around the text "Hello DevQuik".',
            challengeType: 'fill_blank',
            starterCode: `<h1>Hello DevQuik</h1>`,
            expectedKeyword: '<h1>',
            solutionExplanation: '<h1> is the top-level heading tag in HTML.'
          },
          {
            type: 'recap',
            title: 'Unit 1.1 Recap',
            takeaways: [
              'HTML structures web page content.',
              'The <head> tag holds title and metadata.',
              'The <body> tag holds visible webpage elements.'
            ]
          }
        ]
      },
      {
        id: 'html-1-2',
        unitId: 'unit-1',
        title: '1.2 Headings & Text Elements',
        objective: 'Master heading levels h1 through h6.',
        estimatedMinutes: 3,
        xpReward: 20,
        youtubeUrl: 'https://www.youtube.com/watch?v=bWPMSSsVdEA',
        cards: [
          {
            type: 'concept',
            title: 'Heading Hierarchy',
            content: 'HTML provides 6 levels of headings: <h1> is the largest and <h6> is the smallest.',
            keyTerm: '<h1> down to <h6>'
          },
          {
            type: 'example',
            title: 'Headings Example',
            codeSnippet: `<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Sub Section</h3>`,
            explanation: 'Use <h1> once per page for SEO and title hierarchy.'
          },
          {
            type: 'micro_challenge',
            title: 'Micro Challenge: Add a Subheading',
            prompt: 'Create an <h2> subheading below the main title.',
            challengeType: 'fix_bug',
            starterCode: `<h1>Main Title</h1>
<h2>Subheading</h2>`,
            expectedKeyword: '<h2>',
            solutionExplanation: '<h2> defines a secondary heading.'
          },
          {
            type: 'recap',
            title: 'Unit 1.2 Recap',
            takeaways: [
              '<h1> is used for main titles.',
              '<h2> through <h6> create structural subheadings.'
            ]
          }
        ]
      },
      {
        id: 'html-1-3',
        unitId: 'unit-1',
        title: '1.3 Paragraphs & Text Formatting',
        objective: 'Format inline text using strong, em, and mark elements.',
        estimatedMinutes: 3,
        xpReward: 20,
        youtubeUrl: 'https://www.youtube.com/watch?v=mU6anWqZJcc',
        cards: [
          {
            type: 'concept',
            title: 'Paragraphs & Inline Styles',
            content: '<p> defines paragraphs. Use <strong> for important bold text and <em> for emphasis italicized text.',
            keyTerm: '<p>, <strong>, <em>'
          },
          {
            type: 'example',
            title: 'Formatting Example',
            codeSnippet: `<p>Learning to code is <strong>important</strong> and <em>rewarding</em>.</p>`,
            explanation: '<strong> conveys semantic importance, while <em> emphasizes text.'
          },
          {
            type: 'micro_challenge',
            title: 'Micro Challenge: Bold Text',
            prompt: 'Wrap the word "DevQuik" with <strong> tags.',
            challengeType: 'fill_blank',
            starterCode: `<p>Welcome to <strong>DevQuik</strong> platform.</p>`,
            expectedKeyword: '<strong>',
            solutionExplanation: '<strong> emphasizes text with bold weight.'
          },
          {
            type: 'recap',
            title: 'Unit 1.3 Recap',
            takeaways: [
              '<p> groups text lines into paragraphs.',
              '<strong> boldens text with importance.',
              '<em> italicizes emphasized text.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    skillId: 'css',
    title: 'Unit 2: CSS Layouts & Styling',
    subtitle: 'Master Flexbox, CSS Grid, colors, and responsive design.',
    color: '#264DE4',
    icon: 'Palette',
    guidebook: {
      unitTitle: 'Unit 2 Guidebook: CSS Layouts & Selectors',
      summary: 'Learn CSS rules, flexbox centering, colors, and responsive box models.',
      syntaxRules: [
        { code: '.class-name { }', rule: 'Class selector targeting elements with class="class-name".' },
        { code: 'display: flex;', rule: 'Activates Flexbox 1D layout container.' },
        { code: 'justify-content: center;', rule: 'Aligns flex items along main axis.' }
      ],
      commonMistakes: [
        'Forgetting the dot prefix for class selectors.',
        'Confusing margin (outer space) with padding (inner space).'
      ],
      cheatSheet: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`
    },
    lessons: [
      {
        id: 'css-2-1',
        unitId: 'unit-2',
        title: '2.1 CSS Selectors & Colors',
        objective: 'Style elements using class selectors and hex colors.',
        estimatedMinutes: 4,
        xpReward: 25,
        youtubeUrl: 'https://www.youtube.com/watch?v=1PnVor36_40',
        cards: [
          {
            type: 'concept',
            title: 'CSS Selectors',
            content: 'CSS (Cascading Style Sheets) styles HTML elements. Target elements by tag name, class (.card), or ID (#btn).',
            keyTerm: '.class-name { color: red; }'
          },
          {
            type: 'example',
            title: 'Class Selector Example',
            codeSnippet: `<style>
  .title {
    color: #6366f1;
    font-size: 24px;
  }
</style>
<h1 class="title">Styled Heading</h1>`,
            explanation: 'The dot . specifies a class selector in CSS.'
          },
          {
            type: 'micro_challenge',
            title: 'Micro Challenge: Apply Color',
            prompt: 'Set color: red inside the .btn class rule.',
            challengeType: 'fill_blank',
            starterCode: `<style>
  .btn {
    color: red;
  }
</style>`,
            expectedKeyword: 'color:',
            solutionExplanation: 'color property sets text foreground color.'
          },
          {
            type: 'recap',
            title: 'Unit 2.1 Recap',
            takeaways: [
              'Use dot . for class selectors.',
              'color property sets text color.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'unit-3',
    skillId: 'js',
    title: 'Unit 3: JavaScript Core Logic',
    subtitle: 'Learn variables, DOM manipulation, events, and async fetch.',
    color: '#F7DF1E',
    icon: 'Zap',
    guidebook: {
      unitTitle: 'Unit 3 Guidebook: JS Logic & Variables',
      summary: 'Understand const, let, DOM selectors, event listeners, and async data fetching.',
      syntaxRules: [
        { code: 'const x = 10;', rule: 'Read-only immutable variable binding.' },
        { code: 'let count = 0;', rule: 'Reassignable variable binding.' },
        { code: 'document.querySelector("#id")', rule: 'Selects DOM element matching CSS selector.' }
      ],
      commonMistakes: [
        'Attempting to reassign a const variable.',
        'Confusing assignment = with equality comparison ===.'
      ],
      cheatSheet: `const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  console.log('Clicked!');
});`
    },
    lessons: [
      {
        id: 'js-3-1',
        unitId: 'unit-3',
        title: '3.1 JavaScript Variables',
        objective: 'Declare variables with const and let.',
        estimatedMinutes: 4,
        xpReward: 25,
        youtubeUrl: 'https://www.youtube.com/watch?v=g7T23Xzys-A',
        cards: [
          {
            type: 'concept',
            title: 'Const & Let',
            content: 'Use const for immutable bindings and let for variables that will be reassigned.',
            keyTerm: 'const x = 10;'
          },
          {
            type: 'example',
            title: 'JS Variable Example',
            codeSnippet: `const username = "Alex";
let score = 100;
score = 150;
console.log(username, score);`,
            explanation: 'const prevents reassignment while let permits changing values.'
          },
          {
            type: 'micro_challenge',
            title: 'Micro Challenge: Declare Const',
            prompt: 'Declare const score = 100;',
            challengeType: 'fill_blank',
            starterCode: `const score = 100;`,
            expectedKeyword: 'const',
            solutionExplanation: 'const creates a read-only variable reference.'
          },
          {
            type: 'recap',
            title: 'Unit 3.1 Recap',
            takeaways: [
              'Always default to const.',
              'Use let only when variable value needs reassignment.'
            ]
          }
        ]
      }
    ]
  }
];
