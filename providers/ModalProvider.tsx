"use client";
import { FC, useEffect, useState } from "react";

// Types

// Hooks

// Actions

// Components
import AuthModal from "@/components/modals/AuthModal";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
