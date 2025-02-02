// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A57FF", // Sidebar color
        secondary: "#FAF9FF", // Main background color
        userText: "#353535", // User name and title color
        userEmail: "#cccccc", // User email color
      },
    },
  },
  plugins: [],
};
