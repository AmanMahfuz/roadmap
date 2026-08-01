import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://jzkcapuvnzuidqokemat.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a2NhcHV2bnp1aWRxb2tlbWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3MTkwNDYsImV4cCI6MjEwMDI5NTA0Nn0.0Z-DPT4OQFZfV_HRsu-6lqbOjppHBJ1mZhQoNoHKlZY';

export const supabase = createClient(supabaseUrl, supabaseKey);

// 1. SUPABASE AUTH HELPERS
export async function signUpUser(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName }
    }
  });
  if (error) throw error;
  return data;
}

export async function signInUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
  return data;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// 2. USER PROGRESS SYNC
export async function syncUserStateToSupabase(userData, userAuthId = null) {
  try {
    const targetUserId = userAuthId || (await getCurrentUser())?.id;
    if (!targetUserId) return null;

    const payload = {
      user_id: targetUserId,
      xp: userData.xp || 0,
      level: userData.level || 1,
      streak: userData.streak || 1,
      hearts: userData.hearts || 5,
      enrolled_tracks: userData.enrolledTracks || ['html_css', 'javascript'],
      completed_days: userData.completedDays || {},
      unlocked_badges: userData.unlockedBadges || ['badge_first_step'],
      last_active_date: userData.lastActiveDate || new Date().toISOString().split('T')[0],
      updated_at: new Date().toISOString()
    };

    // Upsert using user_id unique constraint
    const { data, error } = await supabase
      .from('user_progress')
      .upsert(payload, { onConflict: 'user_id' });

    if (error) {
      console.warn('Supabase sync notice:', error.message);
    }
    return data;
  } catch (err) {
    return null;
  }
}

export async function fetchUserProgressFromSupabase(userAuthId) {
  try {
    if (!userAuthId) return null;
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userAuthId)
      .maybeSingle();

    if (error) return null;
    return data;
  } catch (e) {
    return null;
  }
}

// 3. USER PROFILE SYNC
export async function syncUserProfileToSupabase(profileData, userAuthId) {
  try {
    if (!userAuthId) return null;
    const { data, error } = await supabase
      .from('profiles')
      .update(profileData)
      .eq('id', userAuthId);

    if (error) return null;
    return data;
  } catch (e) {
    return null;
  }
}
