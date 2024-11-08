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
        accent: '#74A1C4',
      },
      fontFamily: {
        sans: ['var(--font-sf-pro)'],
        serif: ['var(--font-new-york)'],
      },
      letterSpacing: {
        tightest: '-.06em',
      },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'border': 'border 4s linear infinite',
      },
      keyframes: {
          'text-slide': {
              '0%, 16%': {
                  transform: 'translateY(0%)',
              },
              '20%, 36%': {
                  transform: 'translateY(-16.66%)',
              },
              '40%, 56%': {
                  transform: 'translateY(-33.33%)',
              },
              '60%, 76%': {
                  transform: 'translateY(-50%)',
              },
              '80%, 96%': {
                  transform: 'translateY(-66.66%)',
              },
              '100%': {
                  transform: 'translateY(-83.33%)',
              },
          },
          'border': {
                    to: { '--border-angle': '360deg' },
          },                    
      },
    },
  },
  screens: {
    '3xl': '1920px',
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
};
export default config;
