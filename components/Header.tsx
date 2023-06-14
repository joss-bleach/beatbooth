"use client";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight, Home, Search, User2 } from "lucide-react";
import { toast } from "react-hot-toast";

// Types

// Hooks
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";

// Actions

// Components
import Button from "@/components/ui/Button";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleOnLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // Reset any playing songs
    router.refresh();
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <header
      className={twMerge(
        "h-fit bg-gradient-to-b from-theme-purple p-6",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-lg bg-theme-black flex items-center justify-center hover:opacity-75 transition pr-1"
          >
            <ChevronLeft size={30} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-lg bg-theme-black flex items-center justify-center hover:opacity-75 transition pl-1"
          >
            <ChevronRight size={30} className="text-white" />
          </button>
        </div>
        <nav className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-lg p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <Home className="text-theme-black" size={20} />
          </button>
          <button className="rounded-lg p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <Search className="text-theme-black" size={20} />
          </button>
        </nav>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center w-82">
              <div>
                <Button
                  onClick={handleOnLogout}
                  aria-label="Log out"
                  className="bg-white px-6"
                >
                  Log out
                </Button>
              </div>
              <div>
                <Button
                  aria-label="View your account details"
                  onClick={() => router.push("/account")}
                  className="bg-white"
                >
                  <User2 />
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-transparent text-neutral-200 font-medium"
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
