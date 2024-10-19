"use client";

import React, { useState } from "react";
import useTheme, { ThemeTypes } from "@/hooks/use-theme";
import ModalOverlay from "../modals/ui/modal-overlay";
import { BsLaptop, BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export const themeLabels = [
  {
    value: "light",
    label: "Light",
    icon: BsSunFill,
  },
  {
    value: "dark",
    label: "Dark",
    icon: BsMoonStarsFill,
  },
  {
    value: "system",
    label: "System",
    icon: BsLaptop,
  },
];

export function ThemeHandlerUI() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = (theme: string) => {
    setTheme(theme as ThemeTypes);
    handleCloseOptions();
  };

  const handleOpenOptions = () => {
    setIsOpen(true);
  };

  const handleCloseOptions = () => {
    setIsOpen(false);
  };

  const currentTheme = themeLabels.filter((t) => t.value == theme)[0];
  return (
    <>
      <div className="theme-main relative">
        <div>
          <label
            onClick={handleOpenOptions}
            htmlFor="theme_toggler"
            className="dark:bg-dark-l bg-dark-l shadow-md dark:text-light text-light cursor-pointer p-2 rounded-full flex items-center gap-2"
            title="Change Theme">
            {<currentTheme.icon />}
            <span className="font-semibold">{currentTheme.label}</span>
          </label>
        </div>

        {isOpen && <ThemeOptions handleClick={handleTheme} />}
      </div>

      {isOpen && (
        <ModalOverlay onClick={handleCloseOptions} className="bg-transparent" />
      )}
    </>
  );
}

export function ThemeOptions({
  handleClick,
}: {
  handleClick: (text: string) => void;
}) {
  return (
    <div className="theme-modal absolute rounded-md border border-dark/5 dark:border-dark/10 overflow-hidden shadow-md bg-light text-dark w-max right-0 translate-y-2 z-50">
      <ul data-target="theme_toggler" className="">
        {themeLabels.map((theme, i) => (
          <li
            key={i}
            data-theme-mode={theme.value}
            onClick={() => handleClick(theme.value)}
            className="theme-btn flex items-center gap-4 hover:bg-muted/10 p-2 pr-4 cursor-pointer">
            {<theme.icon className="shrink-0" />}{" "}
            <span className="">{theme.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function ThemeHandler() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative">
      <label htmlFor="theme-btn" className="p-2 border rounded-md sr-only">
        Change Theme
      </label>
      <select
        value={theme}
        id="theme-btn"
        className="dark:bg-dark-l py-1 px-2 rounded-md dark:text-light"
        onChange={(e) => setTheme(e.target.value as ThemeTypes)}>
        {/* <option value="system"></option> */}
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
