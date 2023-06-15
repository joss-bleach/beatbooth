"use client";
import { FC, useEffect, useState } from "react";
import qs from "query-string";

// Types

// Hooks
import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

// Actions

// Components
import Input from "@/components/ui/Input";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);
  return (
    <Input
      placeholder="Search for a song"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
