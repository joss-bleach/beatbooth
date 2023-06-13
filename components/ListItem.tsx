"use client";
import { FC } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// Types

// Hooks
import { useRouter } from "next/navigation";
// Actions

// Components

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handleOnClick}
      className="relative group flex items-center rounded-lg overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} className="object-cover" fill alt={name} />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-lg items-center justify-center bg-theme-purple p-3 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <Play size={20} className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
