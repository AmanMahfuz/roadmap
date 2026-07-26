import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://jzkcapuvnzuidqokemat.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_B6eOz695Ya5Ropw6aEIPPA_7VeeONlY';

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
      completed_days: userData.completedDays || {},
      updated_at: new Date().toISOString()
    };

    // Check if record exists first to perform clean update vs insert without onConflict 400 errors
    const { data: existingRecord } = await supabase
      .from('user_progress')
      .select('id')
      .eq('user_id', targetUserId)
      .maybeSingle();

    if (existingRecord) {
      const { data, error } = await supabase
        .from('user_progress')
        .update(payload)
        .eq('user_id', targetUserId);
      if (error) console.warn('Supabase sync update notice:', error.message);
      return data;
    } else {
      const { data, error } = await supabase
        .from('user_progress')
        .insert([payload]);
      if (error) console.warn('Supabase sync insert notice:', error.message);
      return data;
    }
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
