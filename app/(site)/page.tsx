// Types

// Hooks

// Actions
import getSongs from "@/actions/getSongs";

// Components
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export const revalidate = 0;

const Home = async () => {
  const songs = await getSongs();
  return (
    <section className="bg-neutral-800 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-medium">Welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/liked.jpeg"
              name="Liked songs"
              href="/liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-medium">New songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </section>
  );
};

export default Home;
