import { getStorage, setStorage } from "@/lib/local-storage";
import { useContextProvider } from "@/store/context-provider";
import { useEffect } from "react";

export type ThemeTypes = "system" | "light" | "dark";

// const applyTheme = (theme: ThemeTypes) => {
//   const systemPrefersDark = window.matchMedia(
//     "(prefers-color-scheme: dark)"
//   ).matches;

//   if (systemPrefersDark && theme == "system") {
//     document.documentElement.classList.add("dark");
//   } else if (systemPrefersDark || theme == "dark") {
//     document.documentElement.classList.add("dark");
//   } else if (theme === "light") {
//     document.documentElement.classList.remove("dark");
//   }

//   setStorage("APP_THEME", theme);
// };

// const applySystemTheme = () => {
//   const systemPrefersDark = window.matchMedia(
//     "(prefers-color-scheme: dark)"
//   ).matches;

//   if (systemPrefersDark) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// };

export default function useTheme() {
  // const [theme, _setTheme] = useState<ThemeTypes>("system");
  const { store, setStore } = useContextProvider();

  // CODE: Theme Handlers THEME

  // const handleThemeChange = (newTheme: ThemeTypes) => {
  //   setActiveTheme(newTheme);

  //   getStorage("THEME", newTheme);

  //   if (newTheme === "system") {
  //     applySystemTheme();
  //   } else {
  //     applyTheme(newTheme);
  //   }
  // };

  const setTheme = (theme: ThemeTypes) => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (systemPrefersDark && theme == "system") {
      document.documentElement.classList.add("dark");
    } else if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setStore({ theme } as StoreProps);
    setStorage("APP_THEME", theme);
  };

  useEffect(() => {
    const savedTheme: ThemeTypes = getStorage("APP_THEME") || "system";

    // if (savedTheme === "system" || !savedTheme) {
    //   applySystemTheme();
    // } else {
    //   applyTheme(savedTheme);
    // }

    setTheme(savedTheme);

    const handleSystemThemeChange = () => {
      // if (!savedTheme || savedTheme === "system") {
      //   applySystemTheme();
      // }

      setTheme(savedTheme);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return { theme: store.theme, setTheme };
}

// CODE: Load Initial theme
