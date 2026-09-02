-- Seed Data for AI Engineer and Full-Stack Developer Roadmaps

-- --------------------------------------------------------
-- 1. AI Engineer Roadmap
-- --------------------------------------------------------
insert into public.roadmaps (slug, role_title, description, cover_image_url, estimated_months, tags, color, bg_color) 
values ( 
  'ai-engineer', 
  'AI Engineer', 
  'Become an AI engineer who ships real products with LLMs (RAG, agents, MCP), not just notebooks.', 
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
  6,
  '["Python", "LLMs", "RAG", "Agents"]'::jsonb,
  '#f59e0b',
  'rgba(245, 158, 11, 0.1)'
);

with r as ( select id as roadmap_id from public.roadmaps where slug = 'ai-engineer' ) 
insert into public.roadmap_phases (roadmap_id, order_index, title, description, skills) 
select roadmap_id, 1, 'Python + Tooling', 'Comfortable writing Python scripts, using virtualenv/poetry, calling APIs, and structuring small CLIs.', '["Python","CLI","APIs"]'::jsonb from r
union all
select roadmap_id, 2, 'ML Basics (Intuition over Math)', 'Understand supervised/unsupervised learning, train simple models, evaluate them. No heavy math yet.', '["ML Basics","Scikit-learn","Data Cleaning"]'::jsonb from r
union all
select roadmap_id, 3, 'RAG, Vectors & Vector DBs', 'Build retrieval-augmented generation apps that answer from your own documents with citations.', '["RAG","Vector DBs","Embeddings"]'::jsonb from r
union all
select roadmap_id, 4, 'LLM APIs & Prompt Engineering', 'Call LLMs via APIs, design prompts, enforce structured output (JSON).', '["LLM APIs","Prompt Engineering","Structured Output"]'::jsonb from r
union all
select roadmap_id, 5, 'AI Agents', 'Build agents that plan, use tools, and act in loops.', '["AI Agents","LangChain","LangGraph"]'::jsonb from r
union all
select roadmap_id, 6, 'MCP + Git/Deployment + Capstone', 'Connect agents to tools/data via MCP, and ship a production-minded capstone.', '["MCP","Deployment","Capstone"]'::jsonb from r;


-- Phase 1 Nodes (Python + Tooling)
with r as ( select id as roadmap_id from public.roadmaps where slug = 'ai-engineer' ), 
     p1 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 1 ) 
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p1), 'python_1', 1), ((select phase_id from p1), 'python_2', 2),
  ((select phase_id from p1), 'python_3', 3), ((select phase_id from p1), 'python_4', 4),
  ((select phase_id from p1), 'python_5', 5), ((select phase_id from p1), 'python_6', 6),
  ((select phase_id from p1), 'python_7', 7), ((select phase_id from p1), 'python_8', 8),
  ((select phase_id from p1), 'python_9', 9), ((select phase_id from p1), 'python_10', 10),
  ((select phase_id from p1), 'python_11', 11), ((select phase_id from p1), 'python_12', 12),
  ((select phase_id from p1), 'python_13', 13), ((select phase_id from p1), 'python_14', 14),
  ((select phase_id from p1), 'python_15', 15);

-- (Placeholder mappings for remaining AI phases - to be populated with real node IDs)
with r as ( select id as roadmap_id from public.roadmaps where slug = 'ai-engineer' ), 
     p2 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 2 ) 
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p2), 'ml_1', 1), ((select phase_id from p2), 'ml_2', 2), ((select phase_id from p2), 'ml_3', 3);

-- --------------------------------------------------------
-- 2. Full-Stack Developer Roadmap
-- --------------------------------------------------------
-- Update existing Full-Stack stub to active
update public.roadmaps 
set is_active = true, 
    estimated_months = 6, 
    description = 'Ship complete, production-like web apps end-to-end. Default stack: Next.js + Postgres + Tailwind + Supabase.' 
where slug = 'full-stack-engineer';

with r as ( select id as roadmap_id from public.roadmaps where slug = 'full-stack-engineer' ) 
insert into public.roadmap_phases (roadmap_id, order_index, title, description, skills) 
select roadmap_id, 1, 'Web Foundations', 'Solid HTML, CSS, JS, basic Git, and how the web works.', '["HTML","CSS","JavaScript","Git"]'::jsonb from r
union all
select roadmap_id, 2, 'TypeScript + React Fundamentals', 'Comfortable with TS basics and modern React (hooks, components, state).', '["TypeScript","React","State Management"]'::jsonb from r
union all
select roadmap_id, 3, 'Backend Basics + Database', 'Build REST APIs, connect to a DB, handle auth at a basic level.', '["Node.js","Postgres","SQL","Auth"]'::jsonb from r
union all
select roadmap_id, 4, 'Advanced Frontend + State + Testing', 'Server state management, forms, validation, and basic E2E tests.', '["React Query","Tailwind","E2E Testing"]'::jsonb from r
union all
select roadmap_id, 5, 'Real-World Features + DevOps Lite', 'Add payments, file uploads, email, basic CI/CD, and monitoring.', '["Payments","Storage","CI/CD"]'::jsonb from r
union all
select roadmap_id, 6, 'Capstone Full-Stack Product', 'One substantial, deployed product that proves end-to-end skills.', '["Architecture","Full-Stack","Deployment"]'::jsonb from r;


-- Phase 1 Nodes (Web Foundations - Reusing HTML/CSS and JS nodes)
with r as ( select id as roadmap_id from public.roadmaps where slug = 'full-stack-engineer' ), 
     p1 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 1 ) 
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p1), 'html_css_1', 1), ((select phase_id from p1), 'html_css_2', 2),
  ((select phase_id from p1), 'html_css_3', 3), ((select phase_id from p1), 'html_css_4', 4),
  ((select phase_id from p1), 'html_css_5', 5), ((select phase_id from p1), 'html_css_6', 6),
  ((select phase_id from p1), 'html_css_7', 7), ((select phase_id from p1), 'javascript_1', 8),
  ((select phase_id from p1), 'javascript_2', 9), ((select phase_id from p1), 'javascript_3', 10),
  ((select phase_id from p1), 'javascript_4', 11), ((select phase_id from p1), 'javascript_5', 12);

-- --------------------------------------------------------
-- 3. Vibe Coding Websites Roadmap
-- --------------------------------------------------------
insert into public.roadmaps (slug, role_title, description, cover_image_url, estimated_months, tags, color, bg_color) 
values ( 
  'vibe-coding', 
  'Vibe Coder', 
  'Build & Deploy AI-Powered Websites with Antigravity + GitHub + Netlify/Vercel with zero manual coding.', 
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
  1,
  '["Antigravity", "Vite", "React", "Deployment"]'::jsonb,
  '#8b5cf6',
  'rgba(139, 92, 246, 0.1)'
);

with r as ( select id as roadmap_id from public.roadmaps where slug = 'vibe-coding' ) 
insert into public.roadmap_phases (roadmap_id, title, description, order_index, skills) values
  ((select roadmap_id from r), 'Getting Started', 'Understand Vibe Coding, install tools, and create cloud accounts.', 1, '["AI Prompts","Antigravity","React"]'::jsonb),
  ((select roadmap_id from r), 'Building & Version Control', 'Build your AI-generated website and integrate Git/GitHub.', 2, '["Git","GitHub","Netlify","CSS"]'::jsonb),
  ((select roadmap_id from r), 'Deployment & Beyond', 'Deploy to Netlify/Vercel, setup CI/CD, and plan your next project.', 3, '["CI/CD","GitHub Actions","Vercel"]'::jsonb);

-- Vibe Coding Nodes
with r as ( select id as roadmap_id from public.roadmaps where slug = 'vibe-coding' ), 
     p1 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 1 ),
     p2 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 2 ),
     p3 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 3 )
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p1), 'vibe-coding_1', 1), ((select phase_id from p1), 'vibe-coding_2', 2),
  ((select phase_id from p2), 'vibe-coding_3', 3), ((select phase_id from p2), 'vibe-coding_4', 4),
  ((select phase_id from p3), 'vibe-coding_5', 5), ((select phase_id from p3), 'vibe-coding_6', 6);
