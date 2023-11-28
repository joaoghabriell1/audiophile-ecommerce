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
        dark_orange: "#D87D4A",
        light_orange: "#fbaf85",
        light_gray_200: "#F1F1F1",
        light_gray_100: "#FAFAFA",
      },
      fontSize: {
        sm: "0.813rem",
        base: "0.938rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "3.5rem",
      },
      screens: {
        lg: "1110px",
      },
      maxWidth: {
        "5xl": "1110px",
      },
    },
  },
  plugins: [],
};
export default config;
