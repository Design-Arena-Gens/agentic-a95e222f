"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-neutral-900/60">
      <div className="container-default flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">Grokpedia</span>
          <span className="rounded-md border border-neutral-800 px-2 py-0.5 text-xs text-accent">v0.1</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
