import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "primary-start": "rgb(var(--primary-start-rgb))",
        "primary-end": "rgb(var(--primary-end-rgb))",
        "secondary-start": "rgb(var(--secondary-start-rgb))",
        "secondary-end": "rgb(var(--secondary-mid-rgb))",
        "tertiary-start": "rgb(var(--tertiary-start-rgb))",
        "tertiary-end": "rgb(var(--tertiary-end-rgb))",
        "text-color": "rgb(var(--text-rgb))",
      },
    },
  },
  plugins: [],
};

export default config;
