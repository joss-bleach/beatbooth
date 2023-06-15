// Types

// Hooks

// Actions
import getSongsByTitle from "@/actions/getSongsByTitle";

// Components
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);
  return (
    <section className="bg-neutral-800 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-800">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-medium">Search</h1>
        </div>
        <SearchInput />
      </Header>
      <SearchContent songs={songs} />
    </section>
  );
};

export default Search;
