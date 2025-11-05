/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0b0b0c',
          light: '#ffffff'
        },
        foreground: {
          DEFAULT: '#e5e7eb',
          light: '#0b0b0c'
        },
        accent: '#6b7280'
      }
    }
  },
  plugins: []
};
