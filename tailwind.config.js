/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors:{
        customcolor:'rgb(251, 146, 87, 1)',
      }
    },
  },
  plugins: [],
};
