/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/Create.js",
    "./pages/index.js",
    "./pages/Read.js",
    "./components/Update.js",
    "./components/Delete.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}