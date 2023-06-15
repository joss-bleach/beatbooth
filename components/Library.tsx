"use client";
import { FC } from "react";
import { ListMusic, Plus } from "lucide-react";

// Types
import { Song } from "@/types";

// Hooks
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";

// Actions

// Components
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

const Library: FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const handleOnClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // Check for subscription
    return uploadModal.onOpen();
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
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((song) => (
          <MediaItem onClick={() => {}} key={song.id} data={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
