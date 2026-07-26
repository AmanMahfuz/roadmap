// DevQuest v2: Standalone Daily Practice Challenges (100% English)

export const DAILY_CHALLENGES = [
  {
    id: 'dc-1',
    title: 'Center a Div (3 Different Ways)',
    titleMl: 'Center a Div (3 Different Ways)',
    category: 'CSS Layouts',
    difficulty: 'Easy',
    xp: 25,
    description: 'Center the .box element perfectly inside the container using Flexbox or CSS Grid.',
    starterCode: `<style>
  .container {
    width: 300px;
    height: 300px;
    background: #1e293b;
    /* Add centering CSS here */
  }
  .box {
    width: 80px;
    height: 80px;
    background: #6366f1;
  }
</style>
<div class="container">
  <div class="box"></div>
</div>`,
    expectedKeywords: ['display: flex', 'justify-content: center', 'display: grid', 'place-items: center', 'transform: translate']
  },
  {
    id: 'dc-2',
    title: 'Build a Responsive Glass Navigation Bar',
    titleMl: 'Build a Responsive Glass Navigation Bar',
    category: 'UI Components',
    difficulty: 'Medium',
    xp: 40,
    description: 'Build a glassmorphism navbar containing a logo and 3 navigation links.',
    starterCode: `<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
  }
</style>
<nav>
  <div class="logo">DevQuik</div>
  <!-- Add navigation links here -->
</nav>`,
    expectedKeywords: ['display: flex', 'backdrop-filter']
  },
  {
    id: 'dc-3',
    title: 'Fetch & Render User Profile from REST API',
    titleMl: 'Fetch & Render User Profile from REST API',
    category: 'JavaScript Async',
    difficulty: 'Medium',
    xp: 60,
    description: 'Use async/await and fetch() to load a user profile from JSONPlaceholder API and print their name.',
    starterCode: `async function loadUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await res.json();
  console.log("User Name:", user.name);
}
loadUser();`,
    expectedKeywords: ['async', 'fetch', 'await']
  },
  {
    id: 'dc-4',
    title: 'Toggle Dark / Light Theme with JS',
    titleMl: 'Toggle Dark / Light Theme with JS',
    category: 'DOM Manipulation',
    difficulty: 'Easy',
    xp: 30,
    description: 'Attach a click event listener to toggle a light-mode CSS class on document.body.',
    starterCode: `const btn = document.createElement('button');
btn.textContent = "Toggle Theme";
btn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});`,
    expectedKeywords: ['addEventListener', 'toggle']
  }
];
