const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  // eslint-disable-next-line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 2s linear infinite",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".not-last-child\\:bb-1:not(:last-child)": {
          // marginBottom: '1rem',
          borderBottom: "1px solid red", // Equivalent to Tailwind's bb-1
        },
      });
    },
  ],
};
