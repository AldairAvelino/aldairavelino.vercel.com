/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        dark: {
          DEFAULT: '#0f172a',
          secondary: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
