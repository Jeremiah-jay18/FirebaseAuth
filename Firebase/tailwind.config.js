/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "400px", max: "1000px" },
      // => @media (min-width: 330px and max-width: 1000px) { ... }

      ssm: { min: "320px", max: "400px" },
      // => @media (min-width: 330px and max-width: 400px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: { min: "1002px", max: "1500px" },
      // => @media (min-width: 1000px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
