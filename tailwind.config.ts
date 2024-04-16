import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Gilroy",
      secondary: "SF Pro Text",
    },
    colors: {
      primary: "#F9F9F9",
      secondary: " #686868",
      bg: " #141414",
      bgPrimary: "#1f1f1f",
      bgSecondary: " #262626",
      underline: "#4F92F7",
    },
  },
  plugins: [],
};
export default config;
