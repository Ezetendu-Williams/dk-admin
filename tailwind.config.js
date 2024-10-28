/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#101828",
        primaryRed: "#E80E0F",
        muted: {
          100: "#888888",
          200: "#71717A",
        },
      },
    },
  },
  plugins: [],
};
