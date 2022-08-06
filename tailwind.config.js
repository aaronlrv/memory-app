/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "order-1",
    "order-2",
    "order-3",
    "order-4",
    "order-5",
    "order-6",
    "order-7",
    "order-8",
    "order-9",
    "order-10",
    "order-11",
    "order-12",
  ],

  theme: {
    extend: {
      fontFamily: {
        mouse: ["Mouse Memoirs", "sans-serif"],
      },
    },
  },
  plugins: [],
};
