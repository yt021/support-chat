// @ts-ignore
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#f5f2e6',
        card: '#fdfcff',
        ink: '#1c1f2b',
        muted: '#5a6275',
        lapis: '#3257a4',
        teal: '#2d8d7d',
        primary: {
          50: '#fef7ed',
          100: '#fbead3',
          200: '#f6d3a5',
          300: '#efb870',
          400: '#e69b3d',
          500: '#d88523',
          600: '#c07a1a',
          700: '#a46316',
          800: '#7b4b12',
          900: '#55350d',
        },
      },
    },
  },
  plugins: [],
};
export default config;

