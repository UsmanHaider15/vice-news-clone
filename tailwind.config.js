const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    extend: {
      minWidth: {
        1600: '1600px',
      },
      height: {
        100: '100px',
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
