/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-black":
          "radial-gradient(50% 50.00% at 50% 50.00%, rgba(0, 0, 0, 0.79) 0%, #000 100%)",
      },
      colors: {
        primary: {
          "black-100": "#000000",
          "black-90": "#2F2F2F",
          "white-100": "#FFFFFF",
          "white-90": "#FAFAFA",
          "gray-80": "#B9B9B9",
          "gray-100": "#EEE",
          "gray-90": "#979797",
        },
        secondary: {
          "orange-100": "#FF7A00",
          "blue-100": "#86CAFB",
          "green-100": "#A4FB86",
        },
      },
      boxShadow: {
        shadowOne: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        shadowTwo: "0px 4px 30px rgba(0, 0, 0, 0.05)",
      },
      backgroundColor: {
        "white-90": "#FAFAFA",
        "black-80": "#191919",
        "brown-100": "#D87D4A",
        "peach-90": "#FBAF85",
      },
    },
  },
  plugins: [],
};
