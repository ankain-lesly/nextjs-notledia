/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

const generateColorClass = (variable: string) => {
  return ({ opacityValue }: any) => {
    return opacityValue
      ? `hsla(var(--hsl-clr-${variable}), ${opacityValue})`
      : `hsl(var(--hsl-clr-${variable}))`;
  };
};

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "16px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: ["22px"],
      "2xl": ["26px"],
      "3xl": ["32px", "1"],
      "4xl": ["48px", "1"],
      "6xl": ["65px", "1"],
      "8xl": ["96px", "1"],
    },
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
        // major: ["Major", "sans-serif"],
        sands: ["quicksand", "Quicksand"],
        // poppins: ["Poppins", "Quicksand"],
      },
      colors: {
        warning: generateColorClass("warning"),
        secondary: generateColorClass("secondary"),
        primary: generateColorClass("primary"),
        danger: generateColorClass("danger"),

        success: generateColorClass("success"),
        dark: generateColorClass("dark"),
        "dark-l": generateColorClass("dark-l"),
        "dark-ll": generateColorClass("dark-ll"),
        light: generateColorClass("light"),
        "light-l": generateColorClass("light-l"),
        "light-d": generateColorClass("light-d"),
        "light-dd": generateColorClass("light-dd"),
        muted: generateColorClass("muted"),
        // Neutral Colors
        "dark-main": generateColorClass("dark-main"),
        "light-main": generateColorClass("light-main"),
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",

        bs: "0.25em 0.25em 0.75em hsla(0, 0%, 0%, 0.25), 0.125em 0.125em 0.25em hsla(0, 0%, 0%, 0.15)",
        "bs-2":
          "0 0 0.75em hsla(0, 0%, 0%, 0.25), 0 0 0.25em hsla(0, 0%, 0%, 0.15)",

        "bs-pri":
          "0.25em 0.25em 1.5em hsla(0, 0%, 0%, 0.3), 0em 0em 0.5em hsla(0, 0%, 0%, 0.35)",

        "bs-sec": "0.3rem 0.1rem 2rem hsla(0, 0%, 0%, 0.3)",
      },

      backgroundImage: {
        "hero-driven": "url('/images/hero-bg-oil-filter.jpg')",
        "mobile-concept": "url('/images/habitatlearn-mobile-concept.jpg')",
      },
      screens: {
        wide: "1440px",
        xs: "370px",
      },
      backgroundColor: {},
      keyframes: {
        inOpacity: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        inOpacity: "inOpacity 300ms ease-in-out 150ms forwards",
      },
    },
  },

  plugins: [
    plugin(({ addBase, theme, addUtilities }) => {
      // CODE:
      addBase({
        /* Details Illustration */
        button: {
          backgroundColor: "transparent",
        },
      });

      // CODE:
      const customUtilities: any = {};
      const colors = theme("colors");
      // Buttons
      for (const color in colors) {
        let color1;
        if (typeof colors[color] === "object") {
          color1 = colors[color]["600"];
        } else if (typeof colors[color] === "function") {
          color1 = colors[color](color);
        } else {
          continue;
        }
        customUtilities[`.btn-${color}`] = {
          backgroundColor: color1,
          borderColor: color1,
          // color: colors["light"]("light"),
        };
      }

      // Details
      for (const color in colors) {
        if (typeof colors[color] === "function") {
          const color2 = colors[color](color);
          customUtilities[`.detail-${color}`] = {
            backgroundColor: `hsla(var(--hsl-clr-${color}), ${0.15})`,
            color: color2,
          };
        }
      }

      addUtilities({
        ...customUtilities,
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },

        ".detail": {
          padding: "5px 10px",
          fontSize: "smaller",
          borderRadius: "5px",
        },
        ".section-p": {
          paddingBlock: "60px",
          overflow: "hidden",
        },
      });
    }),
  ],
};
