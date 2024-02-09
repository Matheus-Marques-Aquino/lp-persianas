/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "440px",
        "xxs": "400px"
      },
      boxShadow: {
        'inner-custom-1': '-1px 26px 21px -18px rgba(0,0,0,0.05) inset',
        'inner-custom-2': '-1px 26px 21px -18px rgba(0,0,0,0.08) inset',
        'inner-custom-3': '-1px -26px 21px -18px rgba(0,0,0,0.05) inset',
        'inner-custom-4': '-1px -26px 21px -18px rgba(0,0,0,0.08) inset',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'background-1': "url('/imgs/background-1.png')",
      },
    },
  },
  plugins: [],
};
