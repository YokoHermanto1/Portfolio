import { useEffect, useState } from "react";

function ChangeTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        cursor-pointer
        select-none
        rounded-full
        border
        px-4
        py-2
        text-xs
        font-serif
        uppercase
        tracking-[0.2em]
        transition-colors
        duration-300

        bg-(--surface)
        text-(--text)
        border-(--border)
        hover:bg-(--surface-hover)
      "
    >
      {theme === "dark" ? "☀︎ Day Mode" : "☾ Night Mode"}
    </button>
  );
}

export default ChangeTheme;
