import Image from "next/image";

// Hooks
import getLikedSongs from "@/actions/getLikedSongs";

// Components
import Header from "@/components/Header";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();
  return (
    <section className="bg-neutral-800 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                fill
                src="/images/liked.jpeg"
                alt="Liked songs"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-medium text-sm">Playlist</p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
                Liked songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </section>
  );
};

export default Liked;
