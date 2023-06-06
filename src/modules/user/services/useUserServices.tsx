import { SupabaseContext } from "@/app/context";
import { LoginUserDTO } from "@/modules/user/dto/LoginUser.dto";
import { useContext } from "react";
import { UserContext } from "../context";
import { IncorrectLoginUser } from "../exceptions";

export function useUserServices() {
  const { supabase } = useContext(SupabaseContext);
  const { user } = useContext(UserContext);

  async function loginUser(userDTO: LoginUserDTO): Promise<void> {
    const response = await supabase.auth.signInWithPassword(userDTO);

    if (response.error !== null) {
      throw new IncorrectLoginUser();
    } else {
      await supabase.auth.getUser();
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return { loginUser, user, signOut };
}
