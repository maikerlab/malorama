/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        monospace: "ShareTech Mono Regular",
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-variant": "var(--color-primary-variant)",
        secondary: "var(--color-secondary)",
        "secondary-variant": "var(--color-secondary-variant)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        shades: "var(--color-shadow)",
        error: "var(--color-error)",
      },
      transitionProperty: {
        height: "height",
      },
      textColor: {
        skin: {
          "on-primary": "var(--color-text-on-primary)",
          "on-secondary": "var(--color-text-on-secondary)",
          "on-background": "var(--color-text-on-background)",
          "on-surface": "var(--color-text-on-surface)",
          "on-error": "var(--color-text-on-error)",
        },
      },
    },
  },
  plugins: [],
};
