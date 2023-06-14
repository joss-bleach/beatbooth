"use client";
import { FC } from "react";
import { Toaster } from "react-hot-toast";

// Types

// Hooks

// Actions

// Components

interface ToastProviderProps {}

const ToastProvider: FC<ToastProviderProps> = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToastProvider;
