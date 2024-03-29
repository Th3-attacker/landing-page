/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('/src/assets/images/bg-hero.jpeg')",
      },
    },
  },
  plugins: [],
};
