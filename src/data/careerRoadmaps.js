export const CAREER_ROADMAPS = [
  {
    id: 'frontend-engineer',
    slug: 'frontend-engineer',
    roleTitle: 'Frontend Engineer',
    description: 'Build modern, interactive web user interfaces using HTML, CSS, JavaScript, and React.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isActive: true,
    estimatedMonths: '6–9',
    tags: ['React', 'TypeScript', 'CSS', 'UI/UX'],
    color: '#0ea5e9',
    bgColor: 'rgba(14, 165, 233, 0.1)',
    phases: [
      {
        id: 'phase-1',
        orderIndex: 1,
        title: 'Foundations',
        description: 'Master the building blocks of the web: HTML layout and CSS styling.',
        skills: ['HTML', 'CSS', 'Git', 'JS Basics'],
        nodes: [
          'html_css_1',
          'html_css_2',
          'html_css_3',
          'html_css_4',
          'html_css_5',
          'html_css_6',
          'html_css_7',
          'javascript_1',
          'javascript_2',
          'javascript_3',
          'javascript_4',
          'javascript_5'
        ]
      },
      {
        id: 'phase-2',
        orderIndex: 2,
        title: 'Frontend Basics',
        description: 'Learn to manipulate the DOM and fetch data with vanilla JavaScript.',
        skills: ['DOM', 'Events', 'Fetch API', 'Component Thinking'],
        nodes: [
          'javascript_6',
          'javascript_7',
          'javascript_8',
          'javascript_9',
          'javascript_10'
        ]
      },
      {
        id: 'phase-3',
        orderIndex: 3,
        title: 'React + TypeScript',
        description: 'Build scalable UIs with the industry standard component library and type safety.',
        skills: ['React', 'Hooks', 'State Management', 'TypeScript'],
        nodes: [
          'react_1',
          'react_2',
          'react_3',
          'react_4',
          'typescript_1',
          'typescript_2'
        ]
      },
      {
        id: 'phase-4',
        orderIndex: 4,
        title: 'Real-world Projects',
        description: 'Build portfolio-ready applications utilizing routing and APIs.',
        skills: ['Routing', 'API Integration', 'UI Libraries', 'Testing'],
        nodes: [
          'project_dashboard',
          'project_saas'
        ]
      },
      {
        id: 'phase-5',
        orderIndex: 5,
        title: 'Job Prep',
        description: 'Prepare your portfolio, resume, and interview skills for frontend roles.',
        skills: ['Portfolio', 'ATS Resume', 'Interview Patterns'],
        nodes: [
          'job_portfolio',
          'job_resume',
          'job_mock_interview'
        ]
      }
    ]
  },
  {
    id: 'full-stack-engineer',
    slug: 'full-stack-engineer',
    roleTitle: 'Full-Stack Engineer',
    description: 'End-to-end web applications with React, Node, and databases.',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isActive: true,
    estimatedMonths: '6',
    tags: ['Next.js', 'Postgres', 'Tailwind', 'Supabase'],
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    phases: [
      {
        id: 'fs-phase-1',
        orderIndex: 1,
        title: 'Web Foundations',
        description: 'Solid HTML, CSS, JS, basic Git, and how the web works.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
        nodes: [
          'html_css_1', 'html_css_2', 'html_css_3', 'html_css_4', 'html_css_5', 'html_css_6', 'html_css_7',
          'javascript_1', 'javascript_2', 'javascript_3', 'javascript_4', 'javascript_5'
        ]
      },
      {
        id: 'fs-phase-2',
        orderIndex: 2,
        title: 'TypeScript + React Fundamentals',
        description: 'Comfortable with TS basics and modern React (hooks, components, state).',
        skills: ['TypeScript', 'React', 'State Management'],
        nodes: ['react_1', 'react_2', 'react_3', 'react_4']
      },
      {
        id: 'fs-phase-3',
        orderIndex: 3,
        title: 'Backend Basics + Database',
        description: 'Build REST APIs, connect to a DB, handle auth at a basic level.',
        skills: ['Node.js', 'Postgres', 'SQL', 'Auth'],
        nodes: ['backend_1', 'backend_2', 'backend_3', 'backend_4']
      },
      {
        id: 'fs-phase-4',
        orderIndex: 4,
        title: 'Advanced Frontend + State + Testing',
        description: 'Server state management, forms, validation, and basic E2E tests.',
        skills: ['React Query', 'Tailwind', 'E2E Testing'],
        nodes: ['advanced_fe_1', 'advanced_fe_2']
      },
      {
        id: 'fs-phase-5',
        orderIndex: 5,
        title: 'Real-World Features + DevOps Lite',
        description: 'Add payments, file uploads, email, basic CI/CD, and monitoring.',
        skills: ['Payments', 'Storage', 'CI/CD'],
        nodes: ['devops_1', 'devops_2']
      },
      {
        id: 'fs-phase-6',
        orderIndex: 6,
        title: 'Capstone Full-Stack Product',
        description: 'One substantial, deployed product that proves end-to-end skills.',
        skills: ['Architecture', 'Full-Stack', 'Deployment'],
        nodes: ['capstone_fs']
      }
    ]
  },
  {
    id: 'ai-engineer',
    slug: 'ai-engineer',
    roleTitle: 'AI Engineer',
    description: 'Become an AI engineer who ships real products with LLMs (RAG, agents, MCP), not just notebooks.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isActive: true,
    estimatedMonths: '6',
    tags: ['Python', 'LLMs', 'RAG', 'Agents'],
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    phases: [
      {
        id: 'ai-phase-1',
        orderIndex: 1,
        title: 'Python + Tooling',
        description: 'Comfortable writing Python scripts, using virtualenv/poetry, calling APIs, and structuring small CLIs.',
        skills: ['Python', 'CLI', 'APIs'],
        nodes: [
          'python_1', 'python_2', 'python_3', 'python_4', 'python_5', 'python_6', 'python_7', 'python_8',
          'python_9', 'python_10', 'python_11', 'python_12', 'python_13', 'python_14', 'python_15'
        ]
      },
      {
        id: 'ai-phase-2',
        orderIndex: 2,
        title: 'ML Basics (Intuition over Math)',
        description: 'Understand supervised/unsupervised learning, train simple models, evaluate them. No heavy math yet.',
        skills: ['ML Basics', 'Scikit-learn', 'Data Cleaning'],
        nodes: ['ml_1', 'ml_2', 'ml_3']
      },
      {
        id: 'ai-phase-3',
        orderIndex: 3,
        title: 'RAG, Vectors & Vector DBs',
        description: 'Build retrieval-augmented generation apps that answer from your own documents with citations.',
        skills: ['RAG', 'Vector DBs', 'Embeddings'],
        nodes: ['rag_1', 'rag_2']
      },
      {
        id: 'ai-phase-4',
        orderIndex: 4,
        title: 'LLM APIs & Prompt Engineering',
        description: 'Call LLMs via APIs, design prompts, enforce structured output (JSON).',
        skills: ['LLM APIs', 'Prompt Engineering', 'Structured Output'],
        nodes: ['llm_1', 'llm_2']
      },
      {
        id: 'ai-phase-5',
        orderIndex: 5,
        title: 'AI Agents',
        description: 'Build agents that plan, use tools, and act in loops.',
        skills: ['AI Agents', 'LangChain', 'LangGraph'],
        nodes: ['agents_1', 'agents_2']
      },
      {
        id: 'ai-phase-6',
        orderIndex: 6,
        title: 'MCP + Git/Deployment + Capstone',
        description: 'Connect agents to tools/data via MCP, and ship a production-minded capstone.',
        skills: ['MCP', 'Deployment', 'Capstone'],
        nodes: ['capstone_ai']
      }
    ]
  },
  {
    id: 'vibe-coding',
    slug: 'vibe-coding',
    roleTitle: 'Vibe Coder',
    description: 'Build & Deploy AI-Powered Websites with Antigravity + GitHub + Netlify/Vercel with zero manual coding.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isActive: true,
    estimatedMonths: '1 Day',
    tags: ['Antigravity', 'Vite', 'React', 'Deployment'],
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    phases: [
      {
        id: 'vc-phase-1',
        orderIndex: 1,
        title: 'Getting Started',
        description: 'Understand Vibe Coding, install tools, and create cloud accounts.',
        skills: ['AI Prompts', 'Antigravity'],
        nodes: ['vibe-coding_1', 'vibe-coding_2']
      },
      {
        id: 'vc-phase-2',
        orderIndex: 2,
        title: 'Building & Version Control',
        description: 'Build your AI-generated website and integrate Git/GitHub.',
        skills: ['React', 'Git', 'GitHub', 'CSS'],
        nodes: ['vibe-coding_3', 'vibe-coding_4']
      },
      {
        id: 'vc-phase-3',
        orderIndex: 3,
        title: 'Deployment & Beyond',
        description: 'Deploy to Netlify/Vercel, setup CI/CD, and plan your next project.',
        skills: ['CI/CD', 'Netlify', 'Vercel'],
        nodes: ['vibe-coding_5', 'vibe-coding_6']
      }
    ]
  }
];
