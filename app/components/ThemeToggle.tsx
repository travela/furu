"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

const STORAGE_KEY = "site-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // clear any theme- class first
    root.classList.remove("theme-light", "theme-dark");

    if (theme === "light") {
      root.classList.add("theme-light");
      localStorage.setItem(STORAGE_KEY, "light");
    } else if (theme === "dark") {
      root.classList.add("theme-dark");
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      // system: remove stored preference so OS preference applies
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/70 dark:bg-black/50 rounded-md p-2 text-sm">
      <label className="sr-only">Theme</label>
      <button
        onClick={() => setTheme("system")}
        className={`px-2 py-1 rounded ${theme === "system" ? "font-semibold" : ""}`}
        aria-pressed={theme === "system"}
      >
        System
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`px-2 py-1 rounded ${theme === "light" ? "font-semibold" : ""}`}
        aria-pressed={theme === "light"}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`px-2 py-1 rounded ${theme === "dark" ? "font-semibold" : ""}`}
        aria-pressed={theme === "dark"}
      >
        Dark
      </button>
    </div>
  );
}
