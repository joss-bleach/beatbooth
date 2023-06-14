import { FC, ReactNode, useState } from "react";
import {
  SupabaseClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

// Types
import { Database } from "@/types_db";

// Hooks

// Actions

// Components

interface SupabaseProviderProps {
  children: ReactNode;
}

const SupabaseProvider: FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState<SupabaseClient>(() =>
    createClientComponentClient<Database>()
  );
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
