/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C35A45", // Terracotta
        secondary: "#D4B384", // Sandalwood cream
        accent: "#D4AF37", // Gold
        dark: "#2C1E16", // Dark brown
        light: "#F5EFE6", // Warm beige
        maroon: "#800000",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'mandala': "url('/mandala-pattern.svg')",
      }
    },
  },
  plugins: [],
}
