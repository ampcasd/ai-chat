import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayBackground: "#F6F6F6",
        lightGrayBorder: "#E5E5E5",
        lightGrayBorder2: "#EBEBEB",
        veryLightGray: "#f6f6f680",
        darkGrayBackground: "#F5F5F5",
        black: "#212222",
        lightGray: "#F1F1F1",
        darkGray: "#D7D7D7",
        textGray: "#9C9C9C",
        textDarkGray: "#808080",
        textDisabled: "#AEAEAE",
        neutralGray: "#A9A9A9",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 4s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
