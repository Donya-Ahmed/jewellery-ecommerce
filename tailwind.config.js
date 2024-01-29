/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors:{
         gold:"#b4934b",
         goldHover:"#d5c28f",
         copper:"#b99a45",
         sliver:"#8d8d8d",
         gray:"#5a5a5a",
         lightGray:"#747474"
      }
    },
  },
  plugins: [ ],
};
