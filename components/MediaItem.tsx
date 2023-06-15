"use client";
import { FC } from "react";
import Image from "next/image";

// Helpers
import { shortenTitle } from "@/helpers/shortenTitle";

// Types
import { Song } from "@/types";

// Hooks
import useLoadImage from "@/hooks/useLoadImage";

// Actions

// Components

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: FC<MediaItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  const handleOnClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
    return;
    // Default turn on player
  };
  const title = shortenTitle(data.title);
  return (
    <div
      onClick={handleOnClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-700/50 w-full p-2 rounded-md"
    >
      <div
        role="button"
        aria-label="Play song"
        className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden"
      >
        <Image
          alt={`Cover art for ${data.title} by ${data.artist}`}
          fill
          src={imagePath || "/images/liked.jpeg"}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.artist}</p>
      </div>
    </div>
  );
};

export default MediaItem;
