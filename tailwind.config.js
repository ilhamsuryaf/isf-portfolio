/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-pink": "#DE2F8A",
        "accent-red": "#FF2E00",
        "accent-orange": "#FEA82F",
      },
      backgroundImage: {
        "profile-pic": "url('../image/profile-pic.png')",
      },
    },
  },
  plugins: [],
};
