import React from "react";
import useTheme from "../contexts/Theme";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="theme-switch-btn cursor-pointer flex items-center justify-center bg-gray-200 dark:bg-gray-700 w-8 h-8 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="hidden"
      />
      {/* Sun and Moon Icons */}
      {theme === "dark" ? (
        <FaMoon className="text-orange-500" />
      ) : (
        <FaSun className="text-orange-500" />
      )}
    </label>
  );
};

export default ThemeBtn;
