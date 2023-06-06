import React, { createContext } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

interface SuprabaseContextProps {
  supabase: SupabaseClient;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export const SupabaseContext = createContext<SuprabaseContextProps>({
  supabase,
});

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <SupabaseContext.Provider
      value={{
        supabase,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
}
