import { FC } from "react";
import Image from "next/image";
import { shortenTitle } from "@/helpers/shortenTitle";

// Types
import { Song } from "@/types";

// Hooks
import useLoadImage from "@/hooks/useLoadImage";

// Actions

// Components
import PlayButton from "./ui/PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  const song_title = shortenTitle(data.title);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-300/5 cursor-pointer hover:bg-neutral-300/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          alt={`Cover art for ${data.title} by ${data.artist}`}
          className="object-cover"
          src={imagePath || "/images/liked.jpeg"}
          fill
        />
      </div>
      <div className="flex flex-col items-start w-full py-4 gap-y-1">
        <p className="font-medium truancate w-full">{song_title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          {data.artist}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
