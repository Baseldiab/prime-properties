/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/styles.css"],
  theme: {
    extend: {
      colors: {
        gradient: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
