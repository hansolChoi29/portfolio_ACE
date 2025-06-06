import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        jaro: ['"Jaro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
