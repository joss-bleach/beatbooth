"use client";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight, Home, Search } from "lucide-react";

// Types

// Hooks
import { useRouter } from "next/navigation";

// Actions

// Components
import Button from "@/components/ui/Button";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleOnLogout = () => {
    // Handle logout
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
          <>
            <div>
              <Button
                onClick={() => {}}
                className="bg-transparent text-neutral-200 font-medium"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button onClick={() => {}} className="bg-white px-6 py-2">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
