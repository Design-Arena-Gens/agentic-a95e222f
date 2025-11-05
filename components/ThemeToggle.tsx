"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="button h-10 w-10 p-0 rounded-full border border-neutral-800"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
          <path fillRule="evenodd" d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM4.222 4.222a1 1 0 011.414 0L7.05 5.636a1 1 0 11-1.414 1.414L4.222 5.636a1 1 0 010-1.414zm11.314 11.314a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 010-1.414zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm16 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM4.222 19.778a1 1 0 011.414 0l1.414-1.414a1 1 0 10-1.414-1.414L4.222 18.364a1 1 0 000 1.414zM16.95 7.05a1 1 0 011.414 0l1.414-1.414a1 1 0 10-1.414-1.414L16.95 5.636a1 1 0 000 1.414z" clipRule="evenodd" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
