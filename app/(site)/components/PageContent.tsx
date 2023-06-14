"use client";
import { FC } from "react";

// Types
import { Song } from "@/types";

// Hooks

// Actions

// Components
import SongItem from "@/components/SongItem";

interface PageContentProps {
  songs: Song[];
}

const PageContent: FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <h5 className="mt-4 text-neutral-300">No songs available</h5>;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((song) => (
        <SongItem key={song.id} onClick={() => {}} data={song} />
      ))}
    </div>
  );
};

export default PageContent;
