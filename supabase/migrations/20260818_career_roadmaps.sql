-- 1) Roadmaps (career roles) 
create table if not exists public.roadmaps ( 
  id uuid primary key default gen_random_uuid(), 
  slug text unique not null, 
  role_title text not null, 
  description text not null, 
  cover_image_url text, 
  is_active boolean not null default true, 
  estimated_months int, 
  tags jsonb not null default '[]'::jsonb,
  color text,
  bg_color text,
  created_at timestamptz not null default now() 
); 

-- 2) Phases within a roadmap 
create table if not exists public.roadmap_phases ( 
  id uuid primary key default gen_random_uuid(), 
  roadmap_id uuid not null references public.roadmaps(id) on delete cascade, 
  order_index int not null, 
  title text not null, 
  description text not null, 
  skills jsonb not null default '[]'::jsonb, 
  unique(roadmap_id, order_index) 
); 

-- 3) Mapping existing nodes into phases. 
-- Since DevQuik uses static nodes (e.g., 'html_css_1'), we will store the node_id as text.
create table if not exists public.roadmap_nodes ( 
  id uuid primary key default gen_random_uuid(), 
  phase_id uuid not null references public.roadmap_phases(id) on delete cascade, 
  node_id text not null, 
  order_index int not null, 
  unique(phase_id, order_index) 
); 

-- 4) User progress per roadmap 
create table if not exists public.user_roadmap_progress ( 
  id uuid primary key default gen_random_uuid(), 
  user_id uuid not null, -- references auth.users in full supabase setup
  roadmap_id uuid not null references public.roadmaps(id) on delete cascade, 
  current_phase_id uuid references public.roadmap_phases(id), 
  completed_phase_ids jsonb not null default '[]'::jsonb, 
  started_at timestamptz not null default now(), 
  last_active_at timestamptz not null default now(), 
  unique(user_id, roadmap_id) 
); 

-- Indexes for performance 
create index if not exists idx_roadmap_nodes_node_id on public.roadmap_nodes(node_id); 
create index if not exists idx_user_roadmap_progress_user_id on public.user_roadmap_progress(user_id);
