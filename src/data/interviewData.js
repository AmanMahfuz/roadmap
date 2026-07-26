// DevQuest v2: Career & Interview Prep Data (100% English)

export const INTERVIEW_QUESTIONS = [
  {
    id: 'int-1',
    category: 'HTML & Web',
    question: 'What are HTML5 Semantic Elements and why are they important?',
    questionEn: 'What are HTML5 Semantic Elements?',
    answerMl: `
**Semantic elements** clearly describe their meaning to both the browser and the developer (e.g., <header>, <nav>, <article>, <section>, <footer>).
    
**Key Benefits:**
1. **SEO Improvement**: Search engines index and rank structured content more effectively.
2. **Accessibility**: Screen readers can navigate document regions seamlessly.
3. **Maintainability**: Code is cleaner and significantly easier to read and maintain.
    `,
    codeSnippet: `<header>\n  <nav>\n    <a href="/">Home</a>\n  </nav>\n</header>`
  },
  {
    id: 'int-2',
    category: 'CSS Layouts',
    question: 'What are the main differences between Flexbox and CSS Grid?',
    questionEn: 'Difference between Flexbox and CSS Grid?',
    answerMl: `
- **Flexbox**: 1D (One-Dimensional) layout system designed primarily for aligning items along a single axis (row or column).
- **CSS Grid**: 2D (Two-Dimensional) layout system designed for complex layouts requiring control over both rows and columns simultaneously.
    `,
    codeSnippet: `/* Flexbox */\n.flex-box { display: flex; justify-content: space-between; }\n\n/* Grid */\n.grid-box { display: grid; grid-template-columns: repeat(3, 1fr); }`
  },
  {
    id: 'int-3',
    category: 'JavaScript Core',
    question: 'What is a Closure in JavaScript and how does it work?',
    questionEn: 'What is a Closure in JavaScript?',
    answerMl: `
A **Closure** is the combination of a function bundled together with references to its surrounding lexical environment. In JavaScript, closures give an inner function access to an outer function's scope even after the outer function has finished executing.
    `,
    codeSnippet: `function outer() {\n  let secret = "Secret Value";\n  return function inner() {\n    console.log(secret); // Accesses outer scope variable via Closure\n  };\n}`
  },
  {
    id: 'int-4',
    category: 'React JS',
    question: 'How does the Virtual DOM work in React?',
    questionEn: 'How does Virtual DOM work in React?',
    answerMl: `
The **Virtual DOM** is a lightweight in-memory representation of the real DOM.
When component state or props change:
1. React creates a new Virtual DOM tree.
2. **Reconciliation (Diffing Algorithm)** compares the new Virtual DOM with the previous tree.
3. React computes the minimal set of changes required and updates only those specific nodes in the real DOM.
    `,
    codeSnippet: `// Reconciliation makes React ultra-fast!`
  }
];
