/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        libreCalsonText: "'Libre Caslon Text', serif",
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp", require("prettier-plugin-tailwindcss")),
  ],
};