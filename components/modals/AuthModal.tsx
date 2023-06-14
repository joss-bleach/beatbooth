"use client";
import { FC, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

// Types

// Hooks
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";

// Actions

// Components
import Modal from "../ui/Modal";

interface AuthModalProps {}

const AuthModal: FC<AuthModalProps> = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  const handleOnChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  return (
    <Modal
      title="Welcome back"
      description="Log in below."
      isOpen={isOpen}
      onChange={handleOnChange}
    >
      <Auth
        theme="dark"
        supabaseClient={supabaseClient}
        magicLink
        providers={["github"]}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#C38FFF",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
