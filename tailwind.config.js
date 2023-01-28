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
        primary: "#005EE2",
        secondary: "#709dff",
        accent: "#709dff",
        cultured: "#ecf0f3",
        gunmetal: "#1f2937",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
