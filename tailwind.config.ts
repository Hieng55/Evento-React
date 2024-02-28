import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
      boxShadow: {
        ctShadow1: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      backgroundImage: {
        ctImgUrl: 'url("https://html.hixstudio.net/orfarm/assets/img/banner/shop-bg-1.jpg")',
      },
      width: {
        ctWidth70: "70%",
        ctWidth20: "30%",
      },
    },
  },
  plugins: [],
};
export default config;
