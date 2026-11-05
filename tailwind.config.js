/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#070b13',
        darkcard: '#0c121e',
      }
    },
  },
  plugins: [],
};
