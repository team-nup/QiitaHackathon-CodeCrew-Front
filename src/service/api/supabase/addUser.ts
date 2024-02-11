import { supabase } from "./supabase"

export const addUser =async (uid:string, name:string, email:string | undefined ) => {
    const { error } = await supabase
        .from('user')
        .insert({ id: uid , name: name, mail:email })
    if (error) {
        console.log(error);
        throw new Error(error.message)
    }
}
