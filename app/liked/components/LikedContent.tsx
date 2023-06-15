"use client";
import { FC, useEffect } from "react";

// Types
import { Song } from "@/types";

// Hooks
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";

// Actions

// Components
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <p className="flex flex-col gap-y-2 w-full px-6 text-neutral-300">
        You have no liked songs.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
