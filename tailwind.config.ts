import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "title-2xl": ["50px", "50px"],
      "title-xl": ["40px", "40px"],
    },
    extend: {
      colors: {
        "light-gray": "#E0E0E0",
      },
    },
  },
  plugins: [],
};
export default config;
