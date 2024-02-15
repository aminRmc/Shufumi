/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'RadialGradient': 'hsl(214, 47%, 23%) to hsl(237, 49%, 15%)',
      }
      
    },
  },
  plugins: [],
}
