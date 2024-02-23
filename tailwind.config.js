/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //gray
        ctGrayBg: "#f2f2f6",
        //blue
        ctBlue7: "#2d2a6e",
        ctBlue6: "#443fad",
        ctBlue5: "#6964c8fc",
        ctBlue1: "#d6c9ff",
        //green
        ctGreen5: "#96ae00",
        ctGreen6: "#718300",
        //orange
        ctOrange2: "#ffc6a1",
        ctOrange1: "#ff00002b",
        //black
        ctBlackOct50: "#00000080",
      },
      spacing: {
        6: "30px",
        13: "50px",
        15: "60px",
      },
    },
  },
  plugins: [],
};
