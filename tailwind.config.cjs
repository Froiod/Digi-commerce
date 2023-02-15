/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
      },
      transitionDuration: {
        '0': '0ms',
        '6000': '6000ms',
      }
    },
  },
  plugins: [],
}
