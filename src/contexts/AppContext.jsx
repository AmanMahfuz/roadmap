import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data?.session) {
          setAuth(data.session.user);
          
          // Fetch profile (may fail if users table isn't created or RLS blocks it)
          const { data: profileData, error: profileErr } = await supabase
            .from('users')
            .select('*')
            .eq('id', data.session.user.id)
            .single();
          
          if (!profileErr) {
            setProfile(profileData);
          } else {
            console.warn("Could not fetch profile (DB may not be synced):", profileErr);
          }
          
          // Fetch progress
          const { data: progressData, error: progErr } = await supabase
            .from('user_progress')
            .select('course_id, lessons_completed, xp_earned');
          
          if (!progErr) {
            setProgress(progressData);
          }
        }
      } catch (err) {
        console.error("Error loading user data from context:", err);
      } finally {
        setLoading(false);
      }
    };
    
    loadUserData();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setAuth(session.user);
          loadUserData();
        } else {
          setAuth(null);
          setProfile(null);
          setProgress(null);
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);
  
  return (
    <AppContext.Provider value={{ auth, profile, progress, loading }}>
      {children}
    </AppContext.Provider>
  );
}
