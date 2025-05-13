/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'rotate-y': 'rotate-y 0.7s ease-in-out',
        'mac-bounce': 'mac-bounce 0.8s ease-in-out'
      },
      keyframes: {
        // rotate-y animation 360 degrees
        'rotate-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        // mac-bounce animation
        'mac-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(-10px)' },
          '70%': { transform: 'translateY(-5px)' },
          '85%': { transform: 'translateY(-2px)' }
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#6366f1',
        dark: {
          DEFAULT: '#0f172a',
          secondary: '#1e293b'
        }
      },
      screens: {
        'xl1367': '1367px',
      }
    },
  },
  plugins: [],
}
