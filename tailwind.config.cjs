/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ibmPlexSans: "'IBM Plex Sans', sans-serif",
        ibmPlexSerif: "'IBM Plex Serif', serif",
        ibmPlexMono: "'IBM Plex Mono', monospace",
        libreCalsonText: "'Libre Caslon Text', serif",
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp", require("prettier-plugin-tailwindcss")),
  ],
};
