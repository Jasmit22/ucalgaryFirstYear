/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      backdropBlur: {
        xs: "3px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ucalgaryRed: "#D5011D",
        ucalgaryGold: "#FCCB01",
        ucalgaryLightOrange: "#FBA203",
        ucalgaryDarkOrange: "#FC6721",
        ucalgaryLightGrey: "#C8C9CB",
        ucalgaryDarkGrey: "#6E6F71",
      },
      height: {
        128: "32rem",
        144: "36rem",
      },
      width: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
};
