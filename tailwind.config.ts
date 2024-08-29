import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beyonders: ['Beyonders', 'sans-serif'],
        conthrax: ['Conthrax', 'sans-serif'],
        nexa: ['Nexa', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logo": "url('/images/logo.svg')",
        "onda": "url('/images/onda.webp')",
        "tartaruga": "url('/images/tartaruga.webp')",
        "soon-1": "url('/images/soon-1.jpg')",
        "soon-2": "url('/images/soon-2.jpg')",
        "soon-3": "url('/images/soon-3.jpg')",
        "mar-360": "url('/images/mar-360.png')",
      },
      colors: {
        "bluedark" : "#002D3A",
        "bluelight" : "#36A9E1"
      }
    },
  },
  plugins: [],
};
export default config;
