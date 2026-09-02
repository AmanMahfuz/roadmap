-- Enable uuid extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table 1: users
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR UNIQUE NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  avatar_url VARCHAR,
  bio TEXT,
  current_level INT DEFAULT 1,
  total_xp INT DEFAULT 0,
  current_streak INT DEFAULT 0,
  longest_streak INT DEFAULT 0,
  last_active TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table 2: courses
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id VARCHAR UNIQUE NOT NULL, 
  name VARCHAR NOT NULL,
  description TEXT,
  icon VARCHAR,
  color VARCHAR,
  difficulty VARCHAR,
  total_lessons INT,
  total_xp INT,
  banner_url VARCHAR,
  free BOOLEAN DEFAULT TRUE,
  order_index INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table 3: lessons
CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  lesson_number INT NOT NULL,
  day INT NOT NULL,
  title VARCHAR NOT NULL,
  description TEXT,
  learning_content JSONB,
  code_snippet JSONB,
  video_url VARCHAR,
  estimated_time INT,
  xp_reward INT,
  difficulty VARCHAR,
  prerequisites TEXT[],
  is_published BOOLEAN DEFAULT FALSE,
  order_index INT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table 4: tasks
CREATE TABLE IF NOT EXISTS public.tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id),
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  task_number INT NOT NULL,
  title VARCHAR NOT NULL,
  description TEXT,
  task_type VARCHAR,
  instructions TEXT,
  starter_code TEXT,
  expected_output TEXT,
  hints JSONB,
  solution_code TEXT,
  xp_reward INT,
  difficulty VARCHAR,
  order_index INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table 5: quizzes
CREATE TABLE IF NOT EXISTS public.quizzes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id),
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  quiz_number INT,
  title VARCHAR NOT NULL,
  description TEXT,
  questions JSONB,
  passing_score INT DEFAULT 70,
  xp_reward INT,
  time_limit_minutes INT,
  order_index INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table 6: code_challenges
CREATE TABLE IF NOT EXISTS public.code_challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id),
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  title VARCHAR NOT NULL,
  description TEXT,
  difficulty VARCHAR,
  starter_code TEXT,
  test_cases JSONB,
  solution_code TEXT,
  language VARCHAR DEFAULT 'javascript',
  xp_reward INT,
  order_index INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table 7: user_progress
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id),
  completed BOOLEAN DEFAULT FALSE,
  completion_date TIMESTAMP,
  time_spent_minutes INT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(user_id, lesson_id)
);

-- Table 8: user_xp
CREATE TABLE IF NOT EXISTS public.user_xp (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  xp_amount INT NOT NULL,
  source VARCHAR NOT NULL,
  source_id UUID,
  earned_at TIMESTAMP DEFAULT NOW()
);

-- Table 9: user_streaks
CREATE TABLE IF NOT EXISTS public.user_streaks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  current_streak INT DEFAULT 1,
  longest_streak INT DEFAULT 1,
  last_completed_date DATE,
  streak_started_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(user_id, course_id)
);

-- Table 10: quiz_responses
CREATE TABLE IF NOT EXISTS public.quiz_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id),
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  responses JSONB,
  score INT,
  passed BOOLEAN,
  time_taken_seconds INT,
  attempted_at TIMESTAMP DEFAULT NOW()
);

-- Table 11: code_submissions
CREATE TABLE IF NOT EXISTS public.code_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  challenge_id UUID NOT NULL REFERENCES public.code_challenges(id),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id),
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  code_written TEXT,
  language VARCHAR,
  test_results JSONB,
  status VARCHAR,
  submitted_at TIMESTAMP DEFAULT NOW()
);

-- Table 12: leaderboard
CREATE TABLE IF NOT EXISTS public.leaderboard (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id VARCHAR NOT NULL REFERENCES public.courses(course_id),
  rank INT,
  total_xp INT,
  lessons_completed INT,
  current_streak INT,
  updated_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(user_id, course_id)
);

-- Trigger: Auto-update user.total_xp when XP earned
CREATE OR REPLACE FUNCTION update_user_xp()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.users 
  SET total_xp = (
    SELECT COALESCE(SUM(xp_amount), 0) 
    FROM public.user_xp 
    WHERE user_id = NEW.user_id
  )
  WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS xp_update_trigger ON public.user_xp;
CREATE TRIGGER xp_update_trigger
AFTER INSERT ON public.user_xp
FOR EACH ROW EXECUTE FUNCTION update_user_xp();

-- Trigger: Reset streak if no activity for 24 hours
CREATE OR REPLACE FUNCTION check_streak_reset()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.user_streaks
  SET current_streak = 0
  WHERE last_completed_date < CURRENT_DATE - INTERVAL '1 day';
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS streak_check_trigger ON public.user_progress;
CREATE TRIGGER streak_check_trigger
BEFORE SELECT ON public.user_progress
FOR EACH ROW EXECUTE FUNCTION check_streak_reset();
