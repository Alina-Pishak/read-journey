import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#F9F9F9",
        bgPrimary: "#141414",
        bgSecondary: "1F1F1F",
        bgThird: "#262626",
        success: "#30B94D",
        underline: "#4F92F7",
      },
      fontFamily: {
        primary: ["var(--font-gilroy)"],
      },
    },
  },
  plugins: [],
};
export default config;
