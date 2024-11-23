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
        navbarBackground: "#F5F5F5",
        navbarBorder: "#E5E5E5",
        black: "#212222",
      },
    },
  },
  plugins: [],
} satisfies Config;
