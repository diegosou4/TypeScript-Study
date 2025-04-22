/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs : "720px",
      },
      colors: {
        origamid: {
          500: 'var(--color-origamid-500)',
          400: 'var(--color-origamid-400)',
          300: 'var(--color-origamid-300)',
        },
        verde: {
          900 : 'var(--color-verde-900)',
          950 : 'var(--color-verde-950)',
        }
      },
  },
  },
  plugins: [],
};