/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    /*     screens: {
      smartphone: "480px",
      tablet: "960px",
      desktop: "1248px",
    },
    boxShadow: {
      sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
      lg: "0px 8px 20px 0px rgba(18, 16, 99, 0.06)",
    }, */
    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
      "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
      "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
    },
    fontFamily: {
      satoshi: "Satoshi, sans-serif",
      inter: "Inter, sans-serif",
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontFamily: {
        robotoMono: "Roboto Mono",
      },
      colors: {
        white: "#ffffff",
        black: "#161513",
        "black-variant": "#1c1c22",
        // purple: "#3f3cbb",
        // purple: "#7e5bef",
        midnight: "#121063",
        metal: "#565584",
        "tahiti-blue": "#3ab7bf",
        "cool-white": "#ecebff",
        "bubble-gum": "#ff77e9",
        "copper-rust": "#78dcca",
        // blue: "#1fb6ff",
        // pink: "#ff49db",
        // orange: "#ff7849",
        // green: "#13ce66",
        // yellow: "#ffc82c",
        "gray-dark": "#273444",
        //gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
