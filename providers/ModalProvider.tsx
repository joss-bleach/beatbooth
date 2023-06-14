"use client";
import { FC, useEffect, useState } from "react";

// Types

// Hooks

// Actions

// Components
import AuthModal from "@/components/modals/AuthModal";
import UploadModal from "@/components/modals/UploadModal";

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
      <UploadModal />
    </>
  );
};

export default ModalProvider;
