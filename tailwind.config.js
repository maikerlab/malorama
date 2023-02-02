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
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-variant": "rgb(var(--color-primary-variant) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-variant":
          "rgb(var(--color-secondary-variant) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        shades: "rgb(var(--color-shadow) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
      transitionProperty: {
        height: "height",
      },
      textColor: {
        skin: {
          "on-primary": "rgb(var(--color-text-on-primary) / <alpha-value>)",
          "on-secondary": "rgb(var(--color-text-on-secondary) / <alpha-value>)",
          "on-background":
            "rgb(var(--color-text-on-background) / <alpha-value>)",
          "on-surface": "rgb(var(--color-text-on-surface) / <alpha-value>)",
          "on-error": "rgb(var(--color-text-on-error) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
