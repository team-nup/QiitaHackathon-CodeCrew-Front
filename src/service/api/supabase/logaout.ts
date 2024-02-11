// import { useNavigate } from 'react-router-dom';

import { supabase } from "./supabase"

// ログアウトの処理を追加
export const doLogout = async () => {
  console.log('logaut')
  // supabaseに用意されているログアウトの関数
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
  
  window.location.href = '/';
}