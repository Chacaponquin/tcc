import { SupabaseContext } from "@/app/context";
import { LoginUserDTO } from "@/modules/auth/dto/LoginUser.dto";
import { useContext, useState } from "react";

export function useLogin() {
  const { supabase } = useContext(SupabaseContext);
  const [loading, setLoading] = useState(false);

  const [loginForm, setLoginForm] = useState<LoginUserDTO>({
    password: "",
    email: "",
  });

  function handleChange(key: keyof LoginUserDTO, value: string) {
    setLoginForm({ ...loginForm, [key]: value });
  }

  async function handleSubmit() {
    try {
      setLoading(true);
      await supabase.auth.signInWithPassword(loginForm);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { loginForm, handleChange, handleSubmit };
}
