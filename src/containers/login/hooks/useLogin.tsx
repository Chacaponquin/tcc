import { LoginUserDTO } from "@/modules/user/dto/LoginUser.dto";
import { useUserServices } from "@/modules/user/services";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/constants/ROUTES";

export function useLogin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { loginUser, user } = useUserServices();

  if (user) {
    router.replace(ROUTES.ROOT);
  }

  const [loginForm, setLoginForm] = useState<LoginUserDTO>({
    password: "",
    email: "",
  });

  function handleChange(key: keyof LoginUserDTO, value: string) {
    setLoginForm({ ...loginForm, [key]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      await loginUser(loginForm);

      router.replace(ROUTES.ROOT);
    } catch (error) {
      toast.error("Usuario Incorrecto.", {});
    } finally {
      setLoading(false);
    }
  }

  return { loginForm, handleChange, handleSubmit, loading };
}
