-- Seed Data for Frontend Engineer Roadmap

-- 1. Insert the Frontend Engineer Roadmap
insert into public.roadmaps (slug, role_title, description, cover_image_url, estimated_months, tags, color, bg_color) 
values ( 
  'frontend-engineer', 
  'Frontend Engineer', 
  'Build modern, interactive web user interfaces using HTML, CSS, JavaScript, and React.', 
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
  8,
  '["React", "TypeScript", "CSS", "UI/UX"]'::jsonb,
  '#0ea5e9',
  'rgba(14, 165, 233, 0.1)'
);

insert into public.roadmaps (slug, role_title, description, cover_image_url, estimated_months, is_active, tags, color, bg_color)
values (
  'full-stack-engineer',
  'Full-Stack Engineer',
  'End-to-end web applications with React, Node, and databases.',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  12,
  false,
  '["React", "Node", "SQL", "APIs"]'::jsonb,
  '#8b5cf6',
  'rgba(139, 92, 246, 0.1)'
);

-- 2. Insert Phases
with r as ( 
  select id as roadmap_id from public.roadmaps where slug = 'frontend-engineer' 
) 
insert into public.roadmap_phases (roadmap_id, order_index, title, description, skills) 
select roadmap_id, 1, 'Foundations', 'Master the building blocks of the web: HTML layout and CSS styling.', '["HTML","CSS","Git","JS Basics"]'::jsonb from r
union all
select roadmap_id, 2, 'Frontend Basics', 'Learn to manipulate the DOM and fetch data with vanilla JavaScript.', '["DOM","Events","Fetch API","Component Thinking"]'::jsonb from r
union all
select roadmap_id, 3, 'React + TypeScript', 'Build scalable UIs with the industry standard component library and type safety.', '["React","Hooks","State Management","TypeScript"]'::jsonb from r
union all
select roadmap_id, 4, 'Real-world Projects', 'Build portfolio-ready applications utilizing routing and APIs.', '["Routing","API Integration","UI Libraries","Testing"]'::jsonb from r
union all
select roadmap_id, 5, 'Job Prep', 'Prepare your portfolio, resume, and interview skills for frontend roles.', '["Portfolio","ATS Resume","Interview Patterns"]'::jsonb from r;

-- 3. Map Nodes to Phases

-- Phase 1 Nodes
with r as ( select id as roadmap_id from public.roadmaps where slug = 'frontend-engineer' ), 
     p1 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 1 ) 
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p1), 'html_css_1', 1),
  ((select phase_id from p1), 'html_css_2', 2),
  ((select phase_id from p1), 'html_css_3', 3),
  ((select phase_id from p1), 'html_css_4', 4),
  ((select phase_id from p1), 'html_css_5', 5),
  ((select phase_id from p1), 'html_css_6', 6),
  ((select phase_id from p1), 'html_css_7', 7),
  ((select phase_id from p1), 'javascript_1', 8),
  ((select phase_id from p1), 'javascript_2', 9),
  ((select phase_id from p1), 'javascript_3', 10),
  ((select phase_id from p1), 'javascript_4', 11),
  ((select phase_id from p1), 'javascript_5', 12);

-- Phase 2 Nodes
with r as ( select id as roadmap_id from public.roadmaps where slug = 'frontend-engineer' ), 
     p2 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 2 ) 
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p2), 'javascript_6', 1),
  ((select phase_id from p2), 'javascript_7', 2),
  ((select phase_id from p2), 'javascript_8', 3),
  ((select phase_id from p2), 'javascript_9', 4),
  ((select phase_id from p2), 'javascript_10', 5);

-- Phase 3 Nodes
with r as ( select id as roadmap_id from public.roadmaps where slug = 'frontend-engineer' ), 
     p3 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 3 ) 
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p3), 'react_1', 1),
  ((select phase_id from p3), 'react_2', 2),
  ((select phase_id from p3), 'react_3', 3),
  ((select phase_id from p3), 'react_4', 4),
  ((select phase_id from p3), 'typescript_1', 5),
  ((select phase_id from p3), 'typescript_2', 6);

-- Phase 4 Nodes
with r as ( select id as roadmap_id from public.roadmaps where slug = 'frontend-engineer' ), 
     p4 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 4 ) 
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p4), 'project_dashboard', 1),
  ((select phase_id from p4), 'project_saas', 2);

-- Phase 5 Nodes
with r as ( select id as roadmap_id from public.roadmaps where slug = 'frontend-engineer' ), 
     p5 as ( select id as phase_id from public.roadmap_phases where roadmap_id = (select roadmap_id from r) and order_index = 5 ) 
insert into public.roadmap_nodes (phase_id, node_id, order_index) values 
  ((select phase_id from p5), 'job_portfolio', 1),
  ((select phase_id from p5), 'job_resume', 2),
  ((select phase_id from p5), 'job_mock_interview', 3);
