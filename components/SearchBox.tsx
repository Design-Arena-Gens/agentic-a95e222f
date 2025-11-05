"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox({ autoFocus = true }: { autoFocus?: boolean }) {
  const router = useRouter();
  const [value, setValue] = useState("");

  function submit(q: string) {
    const query = q.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <div className="w-full max-w-2xl flex items-center gap-2">
      <input
        className="input"
        placeholder="????? ?? Grokpedia"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit(value);
        }}
        autoFocus={autoFocus}
        aria-label="Search"
      />
      <button className="button h-[52px] px-5" onClick={() => submit(value)}>?????</button>
    </div>
  );
}
