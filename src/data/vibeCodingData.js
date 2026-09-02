export const VIBE_CODING_ROADMAP = {
  id: 'vibe-coding',
  name: 'Vibe Coding',
  icon: '🌐',
  badge: 'Masterclass',
  color: '#8B5CF6',
  bgColor: 'rgba(139, 92, 246, 0.15)',
  textColor: '#7c3aed',
  gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
  tagline: '1-Day Masterclass: Build & Deploy AI-Powered Websites with Antigravity.',
  description: 'Master Vibe Coding using Google Antigravity, GitHub, and Vercel/Netlify. Complete hands-on tutorial with no manual coding.',
  difficulty: 'Super Beginner Friendly',
  totalDays: 6,
  days: [
    {
      day: 1,
      title: 'Day 1 \u2013 What is Vibe Coding & Agent-First Architecture',
      unit: 'Phase 1: Foundations & Environment Setup',
      topic: 'Steer vs. Build Paradigm, Agentic loops',
      playlistUrl: 'https://www.youtube.com/watch?v=IACHfKmZMr8',
      videoBreakdown: '🎥 Watch Video: Vibe Coding Is The Future — Y Combinator',
      whatToLearn: {
        summary: 'Understand the "Steer vs. Build" paradigm, Agentic loops, and how Antigravity handles context via artifacts.',
        details: [
          'Set up your mental model for prompt decomposition (Objective -> Constraints -> Review Gates).',
          'Learn how Antigravity uses implementation_plan.md and visual diffs.',
          'Understand how the agent autonomously executes code in the terminal.'
        ],
        codeExample: '# Terminal System Check:\nnode -v && npm -v && git --version'
      },
      mcqQuestions: [
        {
          question: 'What is the core paradigm shift in Vibe Coding?',
          options: ['Manually typing out every line of code', 'The "Steer vs. Build" paradigm where you steer the AI', 'Only using Python for all websites', 'Avoiding version control'],
          answerIndex: 1,
          explanation: 'In Vibe Coding, you steer the high-level architecture and logic, and the AI agent does the actual building and typing.'
        }
      ],
      terminalChallenges: [
        {
          id: 1,
          title: 'Challenge 1: System Check',
          prompt: 'Log the terminal command used to check your node, npm, and git versions.',
          starterCode: 'const cmd = "node -v && npm -v && git --version";\nconsole.log(cmd);',
          expectedKeyword: 'node -v'
        }
      ],
      tasks: [
        { id: 'vc_1_1', text: 'Set up prompt decomposition mental model (+50 XP)', completed: false },
        { id: 'vc_1_2', text: 'Run System Check in terminal (+50 XP)', completed: false }
      ]
    },
    {
      day: 2,
      title: 'Day 2 \u2013 Tooling Installation & Account Configuration',
      unit: 'Phase 1: Foundations & Environment Setup',
      topic: 'Antigravity IDE, GitHub, and Hosting Accounts',
      playlistUrl: 'https://www.youtube.com/watch?v=fYaHFKj9UCc',
      videoBreakdown: '🎥 Watch Video: Google Antigravity Tutorial For Beginners — The Builders Club',
      whatToLearn: {
        summary: 'Configuring your local workstation with Antigravity, authenticating models, and linking cloud platforms.',
        details: [
          'Download and install Antigravity IDE (https://antigravity.google).',
          'Create/verify accounts on GitHub and Netlify/Vercel.',
          'Configure review safety policies (set Agent Manager to "Request Review" for safe terminal execution).',
          'Set up your global Git identity.'
        ],
        codeExample: '# Terminal Git Identity Setup:\ngit config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"'
      },
      mcqQuestions: [
        {
          question: 'Why should you set the Agent Manager to "Request Review"?',
          options: ['To slow down the AI', 'To prevent the AI from executing potentially dangerous terminal commands without your permission', 'Because the AI cannot run terminal commands', 'To save API tokens'],
          answerIndex: 1,
          explanation: 'Setting a review policy ensures that the AI stops and asks for your human approval before running commands in your terminal.'
        }
      ],
      terminalChallenges: [
        {
          id: 1,
          title: 'Challenge 1: Git Config',
          prompt: 'Log the command to set your global git email.',
          starterCode: 'const cmd = "git config --global user.email";\nconsole.log(cmd);',
          expectedKeyword: 'git config'
        }
      ],
      tasks: [
        { id: 'vc_2_1', text: 'Install Antigravity IDE (+30 XP)', completed: false },
        { id: 'vc_2_2', text: 'Create GitHub & Netlify/Vercel Accounts (+30 XP)', completed: false },
        { id: 'vc_2_3', text: 'Configure Terminal Git Identity (+40 XP)', completed: false }
      ]
    },
    {
      day: 3,
      title: 'Day 3 \u2013 Prompt Engineering & Building the Core Web App',
      unit: 'Phase 2: Autonomous Building & Git Workflows',
      topic: 'Structured Prompts, Implementation Plans, Visual Refinements',
      playlistUrl: 'https://www.youtube.com/watch?v=CM2CkNU9xR0',
      videoBreakdown: '🎥 Watch Video: Master 80% of Google Antigravity in 27 Minutes',
      whatToLearn: {
        summary: 'Writing structured 3-part system prompts, validating generated implementation_plan.md files, and inspecting browser verification runs.',
        details: [
          'Open a fresh workspace folder in Antigravity.',
          'Submit the master prompt: React + Vite + Tailwind CSS portfolio with dark mode, interactive cards, and responsive navigation.',
          'Review the generated plan artifact -> approve -> let the agent generate components and run npm run dev.',
          'Perform 2 visual refinement passes via natural language prompts.'
        ],
        codeExample: '// Master Prompt Structure\n1. Objective: "Build a React + Vite + Tailwind portfolio."\n2. Constraints: "Dark mode, interactive cards."\n3. Review Gate: "Create implementation_plan.md first."'
      },
      mcqQuestions: [
        {
          question: 'What is the purpose of the `implementation_plan.md` artifact?',
          options: ['To hold CSS styles', 'To serve as a review gate for the user to validate the AI\'s technical plan before it writes code', 'To deploy the website', 'To list terminal commands'],
          answerIndex: 1,
          explanation: 'The implementation plan is an artifact that requires human approval, preventing the AI from hallucinating down the wrong path.'
        }
      ],
      terminalChallenges: [
        {
          id: 1,
          title: 'Challenge 1: Refinement',
          prompt: 'Log the command used to start the Vite local server.',
          starterCode: 'const cmd = "npm run dev";\nconsole.log(cmd);',
          expectedKeyword: 'npm run dev'
        }
      ],
      tasks: [
        { id: 'vc_3_1', text: 'Submit Master Portfolio Prompt (+40 XP)', completed: false },
        { id: 'vc_3_2', text: 'Approve implementation_plan.md (+30 XP)', completed: false },
        { id: 'vc_3_3', text: 'Perform 2 Visual Refinement Passes (+50 XP)', completed: false }
      ]
    },
    {
      day: 4,
      title: 'Day 4 \u2013 Git Version Control & GitHub Repository Sync',
      unit: 'Phase 2: Autonomous Building & Git Workflows',
      topic: 'Git Hygiene, Secrets (.env), Branch Management',
      playlistUrl: 'https://www.youtube.com/watch?v=7wlhtf9Kqk0',
      videoBreakdown: '🎥 Watch Video: Connect Antigravity to GitHub: The Complete MCP Setup',
      whatToLearn: {
        summary: 'Version control hygiene, keeping secrets out of code (.env), ignoring generated artifacts (node_modules/, dist/), and managing branches.',
        details: [
          'Have Antigravity generate a secure .gitignore file.',
          'Initialize local repository and commit the base build.',
          'Create a clean remote repository on GitHub and push the codebase.'
        ],
        codeExample: '# Terminal Push Workflow\ngit init\ngit add .\ngit commit -m "feat: initial portfolio release with Antigravity"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USERNAME/portfolio.git\ngit push -u origin main'
      },
      mcqQuestions: [
        {
          question: 'What command pushes your local code to the main branch on GitHub for the first time?',
          options: ['git push -u origin main', 'git pull origin main', 'git commit -m "main"', 'git init'],
          answerIndex: 0,
          explanation: 'The command `git push -u origin main` sets the upstream tracking and pushes your code to GitHub.'
        }
      ],
      terminalChallenges: [
        {
          id: 1,
          title: 'Challenge 1: Initial Commit',
          prompt: 'Log the command for creating a commit with a message.',
          starterCode: 'const cmd = "git commit -m \\"feat: initial\\"";\nconsole.log(cmd);',
          expectedKeyword: 'git commit'
        }
      ],
      tasks: [
        { id: 'vc_4_1', text: 'Generate .gitignore file (+30 XP)', completed: false },
        { id: 'vc_4_2', text: 'Initialize Git and Commit Base Build (+40 XP)', completed: false },
        { id: 'vc_4_3', text: 'Push codebase to GitHub Remote (+50 XP)', completed: false }
      ]
    },
    {
      day: 5,
      title: 'Day 5 \u2013 Production Deployment & CI/CD Pipelines',
      unit: 'Phase 3: Production Deployment & Iteration',
      topic: 'Vercel/Netlify, Continuous Deployment, Build Targets',
      playlistUrl: 'https://www.youtube.com/watch?v=zTF2yDt0plc',
      videoBreakdown: '🎥 Watch Video: Deploying from v0 to Cursor to Vercel (CI/CD Pipeline Setup)',
      whatToLearn: {
        summary: 'Build output targets (dist/), environment variables, automated builds on push (Continuous Deployment), and custom domain binding.',
        details: [
          'Connect GitHub repo to Vercel (https://vercel.com/new) or Netlify (https://app.netlify.com/new).',
          'Confirm build preset: npm run build with output directory dist.',
          'Deploy live site and test auto-deployment: Ask Antigravity to update a text headline, push the commit, and verify the live build triggers automatically.'
        ],
        codeExample: '// CI/CD Verification\n// 1. Edit headline in src/App.jsx\n// 2. git add . && git commit -m "update headline"\n// 3. git push\n// -> Vercel/Netlify rebuilds automatically!'
      },
      mcqQuestions: [
        {
          question: 'What is the default output directory for a React+Vite build in Netlify/Vercel?',
          options: ['build/', 'public/', 'dist/', 'src/'],
          answerIndex: 2,
          explanation: 'Vite uses the `dist/` directory (distribution) for production builds by default.'
        }
      ],
      terminalChallenges: [
        {
          id: 1,
          title: 'Challenge 1: Continuous Deployment',
          prompt: 'Log the platform you connected your GitHub to for CI/CD.',
          starterCode: 'const platform = "Vercel";\nconsole.log(`Deployed to ${platform}`);',
          expectedKeyword: 'Vercel'
        }
      ],
      tasks: [
        { id: 'vc_5_1', text: 'Connect GitHub Repo to Vercel/Netlify (+40 XP)', completed: false },
        { id: 'vc_5_2', text: 'Confirm build preset and output directory (+30 XP)', completed: false },
        { id: 'vc_5_3', text: 'Test auto-deployment via text headline change (+50 XP)', completed: false }
      ]
    },
    {
      day: 6,
      title: 'Day 6 \u2013 Debugging, Safe Rollbacks & Advanced Capabilities',
      unit: 'Phase 3: Production Deployment & Iteration',
      topic: 'Diagnosing Errors, Git Checkpoints, Full-Stack Layers',
      playlistUrl: 'https://www.youtube.com/watch?v=BQxhJ5Nxooc',
      videoBreakdown: '🎥 Watch Video: Vibe Coding Full Tutorial for Beginners — Mikey No-Code',
      whatToLearn: {
        summary: 'Diagnosing runtime build errors, reverting bad agent hallucinations via Git checkpoints, managing limits, and planning full-stack integrations.',
        details: [
          'Practice rolling back a broken change using git checkout / git revert.',
          'Learn how to feed terminal/console error logs back into Antigravity for automated bug fixing.',
          'Complete the Capstone Project rubric (Portfolio + Live URL + Public GitHub Repo).',
          'Plan next dynamic layers (e.g., Firebase/Supabase auth, Stripe payments).'
        ],
        codeExample: '# Safe Rollbacks\n# If the AI breaks your code, easily rollback to the last working commit:\ngit checkout .\n\n# Or revert a specific commit:\ngit revert HEAD'
      },
      mcqQuestions: [
        {
          question: 'How do you fix a bug introduced by an AI hallucination if you have Git version control?',
          options: ['Manually rewrite the code', 'Use `git checkout .` or `git revert` to roll back to the last working checkpoint', 'Delete the repository and start over', 'Uninstall the IDE'],
          answerIndex: 1,
          explanation: 'Because you committed your working code in Day 4, you can safely revert any mistakes the AI makes instantly.'
        }
      ],
      terminalChallenges: [
        {
          id: 1,
          title: 'Challenge 1: Reverting Code',
          prompt: 'Log the git command used to revert the latest commit.',
          starterCode: 'const cmd = "git revert HEAD";\nconsole.log(cmd);',
          expectedKeyword: 'git revert'
        }
      ],
      tasks: [
        { id: 'vc_6_1', text: 'Practice rolling back a broken change (+30 XP)', completed: false },
        { id: 'vc_6_2', text: 'Complete Capstone Project Rubric (+40 XP)', completed: false },
        { id: 'vc_6_3', text: 'Plan advanced Full-Stack layers (Firebase/Stripe) (+30 XP)', completed: false }
      ]
    }
  ]
};
