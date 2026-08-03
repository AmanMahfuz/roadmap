-- DevQuik Supabase Production Database Schema
-- Run this script in your Supabase SQL Editor to initialize all tables.

-- 1. USER PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  starting_track TEXT DEFAULT 'html',
  goal TEXT DEFAULT 'frontend',
  experience_level TEXT DEFAULT 'beginner',
  daily_time_min INTEGER DEFAULT 30,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. USER PROGRESS TABLE
CREATE TABLE IF NOT EXISTS public.user_progress (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  streak INTEGER DEFAULT 1,
  hearts INTEGER DEFAULT 5,
  enrolled_tracks TEXT[] DEFAULT '{"html_css", "javascript"}',
  completed_days JSONB DEFAULT '{}'::jsonb,
  task_progress JSONB DEFAULT '{}'::jsonb,
  active_track TEXT DEFAULT 'html',
  badges JSONB DEFAULT '[]'::jsonb,
  last_active_date TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. USER PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.user_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  project_name TEXT NOT NULL,
  roadmap_id TEXT NOT NULL,
  completion_pct INTEGER DEFAULT 0,
  status TEXT DEFAULT 'In Progress',
  github_url TEXT,
  deployed_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. USER QUESTS TABLE
CREATE TABLE IF NOT EXISTS public.user_quests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  quest_title TEXT NOT NULL,
  quest_type TEXT DEFAULT 'daily',
  reward_xp INTEGER DEFAULT 50,
  is_completed BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_quests ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Allow users to read and write their own data
CREATE POLICY "Users can manage own profile" ON public.user_profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users can manage own progress" ON public.user_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own projects" ON public.user_projects FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own quests" ON public.user_quests FOR ALL USING (auth.uid() = user_id);
