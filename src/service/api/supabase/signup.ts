import { addUser } from "./addUser"
import { supabase } from "./supabase"


// 初回ユーザ登録
export const clickedSignUpBtn = async (emailValue: string, ps: string ,userName:string) => {

  try {
  const { data, error } = await supabase.auth.signUp({
    email: emailValue,
    password: ps,
  })
  // 特定の条件下
  if (error) {
    throw new Error(error.message)
  }
  alert('アカウントを作成しました。')
  if (data.user !== null && data.user !== undefined) {
    addUser(data.user.id, userName, data.user.email);
  }
  console.log(data)
  }catch (error) {
    console.error('サインアップエラー:', error);
  }
}

