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
        "soon-1": "url('/images/1.png')",
        "soon-2": "url('/images/2.png')",
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
        "waves-link": "url('https://www.waves.com.br/wp-content/uploads/2017/05/logo_waves_retina-300x99.png')",
        "cae-logo": "url('/images/cae-logo.webp')",
        "unity-logo": "url('/images/unity-logo.webp')",
        "wb-logo": "url('/images/wb-logo.webp')",
        "planta-1": "url('/images/pisc-64.png')",
        "planta-2": "url('/images/pisc-32.png')",
        "gota": "url('/images/gota2.webp')",
        "gotinha": "url('/images/gotinha1.webp')",
        "mar-blog": "url('/images/mar-blog.webp')",
        "p-1": "url('/images/p-1.webp')",
        "p-2": "url('/images/p-2.webp')",
        "p-3": "url('/images/p-3.webp')",
        "p-4": "url('/images/p-4.webp')",
        "p-5": "url('/images/p-5.webp')",
        "p-6": "url('/images/p-6.webp')",
        "p-7": "url('/images/p-7.webp')",
        "p-8": "url('/images/p-8.webp')",
        "sky": "url('/images/product-sky.webp')",
        "coqueiro": "url('/images/coqueiro2.webp')",
        "surf": "url('/images/surf-logo.webp')",
        "laptop": "url('/images/laptop.webp')",
        "suste": "url('https://cdn.pixabay.com/photo/2022/08/17/05/05/ferns-7391561_640.jpg')"
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
