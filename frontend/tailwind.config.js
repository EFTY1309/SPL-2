/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'du-pool-blue': '#B4E8EF',
        'du-pool-light-blue': '#78D5E3',
        'du-pool-dark-blue': '#080034',
      },
    },
  },
  plugins: [],
}

