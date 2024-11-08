import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-sf-pro)'],
        serif: ['var(--font-new-york)'],
      },
      letterSpacing: {
        tightest: '-.06em',
      }
    },
  },
  screens: {

    '3xl': '1920px',
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
};
export default config;
