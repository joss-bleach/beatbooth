import { FC } from "react";
import Link from "next/link";

// Types
import { type Icon } from "lucide-react";
import { twMerge } from "tailwind-merge";

// Hooks

// Actions

// Components

interface SidebarItemProps {
  icon: Icon;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      className={twMerge(
        "flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-300 py-1",
        active && "text-white"
      )}
      aria-label={`Navigate to ${label}`}
      href={href}
    >
      <Icon size={24} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
