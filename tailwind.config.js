/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ucalgaryRed: "#d6001c",
        ucalgaryGold: "#ffcd00",
        ucalgaryLightOrange: "#ffa300",
        ucalgaryDarkOrange: "#ff671f",
        ucalgaryLightGrey: "#c7c8ca",
        ucalgaryDarkGrey: "#6d6e71",
      },
      height: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
