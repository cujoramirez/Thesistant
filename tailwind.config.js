/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#6bd3fe',
          100: '#41bff5',
          200: '#11a2e0',
          300: '#10a2e0',
          400: '#0d608e',
          500: '#0b547f',
          600: '#0b446c',
          700: '#0a4168',
          800: '#0a426a',
          900: '#083c61',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's reset to avoid conflicts with MUI
  },
}
