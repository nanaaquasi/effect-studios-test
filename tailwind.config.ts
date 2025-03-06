/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D2C65", // Blue
        secondary: "#9333EA", // Purple
        accent: "#F59E0B", // Amber
        neutral: "#1F2937", // Gray

        // Custom colors
        "light-blue": "#233375",
      },
      animation: {
        "slide-left": "slideLeft 0.5s ease-in-out",
        "slide-right": "slideRight 0.5s ease-in-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        sans: ["PushPenny", "sans-serif"], // Set PushPenny as default sans-serif font
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
