// import { useHistory } from 'react-router-dom';

import { supabase } from "./supabase"

// ログインの関数
export const doLogin =  async (email: string, password: string) => {
  console.log('doLogin: '+email,password)
  // supabaseで用意されているログインの関数
  const { data, error } = await supabase.auth.signInWithPassword({ 
    email: email,
    password: password,
  })
  if (error) throw new Error(error.message)
  window.location.href = '/signin';
  console.log(data)
}