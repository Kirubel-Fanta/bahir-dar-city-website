"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SearchBar({
  placeholder = "Search businesses, places, events, jobs, attractions...",
  size = "lg",
  className,
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full items-center gap-2 rounded-full bg-white pl-5 pr-2 shadow-lifted ring-1 ring-black/5",
        size === "lg" ? "h-14 sm:h-16" : "h-11",
        className
      )}
    >
      <Search className="h-5 w-5 shrink-0 text-stone-400" aria-hidden="true" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label="Search Bahir Dar"
        className="min-w-0 flex-1 bg-transparent text-sm sm:text-base text-stone-900 placeholder:text-stone-400 outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-tana-600 px-4 sm:px-6 h-10 sm:h-12 text-sm font-medium text-white transition-colors hover:bg-tana-700"
      >
        Search
      </button>
    </form>
  );
}
