import { Play } from "lucide-react";
import { FC } from "react";

// Types

// Hooks

// Actions

// Components

interface PlayButtonProps {}

const PlayButton: FC<PlayButtonProps> = () => {
  return (
    <button className="transition opacity-0 rounded-lg flex items-center bg-theme-purple p-4 drop-shadow-md translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <Play className="text-black" />
    </button>
  );
};

export default PlayButton;
