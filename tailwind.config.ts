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
        "mar-360": "url('/images/mar-360.webp')",
        "360": "url('/images/360.webp')",
        "about-1": "url('/images/about-1.webp')",
        "about-2": "url('/images/about-2.webp')",
        "about-3": "url('/images/about-3.webp')",
        "about-4": "url('/images/about-4.webp')",
        "seg-logo": "url('/images/seg-logo.webp')",
        "prancha-mar": "url('/images/prancha-mar.webp')",
        "onda-tech": "url('/images/onda-tech.webp')",
        "media-link": "url('https://wavepoolmag.com/wp-content/themes/yoo_master2_wp/images/menu-icon.png')",
        "youtube-link": "url('https://cdn.pixabay.com/photo/2021/06/25/04/20/youtube-6362801_640.png')",
        "stab-link": "url('https://stabmag.b-cdn.net/wp-content/themes/stab-mag-web/assets/logo-black.png')",
        "waves-link": "url('https://www.waves.com.br/wp-content/uploads/2017/05/logo_waves_retina-300x99.png')"

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
