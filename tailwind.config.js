/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#BD0032",
      },
      boxShadow: {
        medium: " 0 5px 10px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
