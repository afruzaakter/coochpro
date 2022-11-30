/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0f766e",

          "secondary": "#38BDF8",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#0C1222",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
          "ternary": "#E2E8F0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
