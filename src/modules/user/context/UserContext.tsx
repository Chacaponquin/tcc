import React, { createContext, useContext, useState } from "react";
import { CurrentUser } from "../interfaces/CurrentUser.interface";
import { SupabaseContext } from "@/app/context";
import { User } from "@supabase/supabase-js";

interface UserContextProps {
  user: CurrentUser | null;
  handleChangeUser: (newUser: CurrentUser) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  handleChangeUser: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { supabase } = useContext(SupabaseContext);
  const [user, setUser] = useState<CurrentUser | null>(null);

  supabase.auth.onAuthStateChange((event, session) => {
    if (session !== null) {
      const user = session.user;
      handleChangeUser(transformFromSupabaseUser(user));
    }
  });

  function handleChangeUser(newUser: CurrentUser) {
    setUser(newUser);
  }

  function transformFromSupabaseUser(supabaseUser: User): CurrentUser {
    const userEmail = supabaseUser?.email as string;
    return { email: userEmail };
  }

  return (
    <UserContext.Provider
      value={{
        user,
        handleChangeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
