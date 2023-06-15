"use client";
import { FC, ReactNode, useMemo } from "react";
import { Home, Search } from "lucide-react";

// Types
import { Song } from "@/types";

// Hooks
import { usePathname } from "next/navigation";

// Actions

// Components
import Box from "@/components/Box";
import SidebarItem from "@/components/SidebarItem";
import Library from "@/components/Library";

interface SidebarProps {
  children: ReactNode;
  songs: Song[];
}

const Sidebar: FC<SidebarProps> = ({ children, songs }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        icon: Home,
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        icon: Search,
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <aside className="hidden md:flex flex-col gap-y-2 bg-theme-black h-full w-[300px] p-2">
        <Box>
          <nav className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </nav>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </aside>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
