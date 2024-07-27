/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#f1defc",
        background: "#080609",
        primary: "#d07ef7",
        secondary: "#9d130c",
        accent: "#fa143a",
      },
    },
  },
  plugins: [],
};
