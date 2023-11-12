/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e8e8e8",
        "avocado-green": "#5e6c4e",
      },
    },
  },
  plugins: [],
};