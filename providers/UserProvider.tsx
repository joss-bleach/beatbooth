"use client";
import { FC, ReactNode } from "react";

// Providers
import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
