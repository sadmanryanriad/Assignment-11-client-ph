/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mali: ["Lora", "sans"],
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["light", "dark", "cupcake"],
  // },
};
