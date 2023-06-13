"use client";
import { FC } from "react";
import { ListMusic, Plus } from "lucide-react";

// Types

// Hooks

// Actions

// Components

interface LibraryProps {}

const Library: FC<LibraryProps> = () => {
  const handleOnClick = () => {
    // Handle upload
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <ListMusic size={24} className="text-neutral-300" />
          <p className="text-neutral-300 font-medium text-md">
            Your music library
          </p>
        </div>
        <Plus
          onClick={handleOnClick}
          role="button"
          aria-label="Upload a song"
          className="text-neutral-300 cursor-pointer hover:text-white transition"
          size={18}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};

export default Library;
