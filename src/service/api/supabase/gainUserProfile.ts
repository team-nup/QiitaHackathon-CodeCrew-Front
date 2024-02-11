import { supabase } from "./supabase"

export const gainUserProfile = async (uid:string) => {
    const {data, error} = await supabase.from("user").select('*').eq("id",uid).single();
    if (error) {
        console.log(error);
        throw new Error(error.message)
    }
    return data;
}