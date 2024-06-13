import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0F0F0",
        btn: "#232323",
      },
      backgroundColor: {
        main: "#1400FF",
        primary: "#ADFF00",
        blk: "#232323",
      },
      borderColor: {
        primary: "#232323",
      },
      fontFamily: {
        custom: ["var(--font-custom)"],
      },
      boxShadow: {
        custom: "5px 5px 0px 0px white",
      },
    },
  },
  plugins: [],
};
export default config;
