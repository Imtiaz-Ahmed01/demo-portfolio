import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import cn from "@/lib/utils";
const ThemeChanger = () => {
  let [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  let ThemeHandler = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <>
      <button
        onClick={ThemeHandler}
        className={cn(
          "fixed max-sm:hidden transition-colors duration-300 top-5 right-5 z-50 p-2 focus:outline-hidden"
        )}
      >
        {darkMode ? (
          <Sun className="h-6 w-6 text-yellow-200" />
        ) : (
          <Moon className="h-6 w-6 text-blue-800" />
        )}
      </button>
    </>
  );
};

export default ThemeChanger;
