import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      smOnly: { max: "767.98px" },
      md: "768px",
      mdOnly: { min: "768px", max: "1439.98px" },
      xl: "1440px",
    },
    extend: {
      colors: {
        colorPrimary: "#F9F9F9",
        colorSecondary: "#686868",
        colorThird: "#1F1F1F",
        bgPrimary: "#141414",
        bgSecondary: "#1F1F1F",
        bgThird: "#262626",
        success: "#30B94D",
        accent: "#4F92F7",
      },
      fontFamily: {
        primary: ["var(--font-gilroy)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          md: "32px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
