import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#1C1C1E',
          orange: '#E8520A',
          'orange-dark': '#C4420A',
          gray: '#6B7280',
          'gray-light': '#F3F4F6',
          'gray-mid': '#D1D5DB',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
