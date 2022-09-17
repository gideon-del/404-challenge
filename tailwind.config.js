/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: "#333333",
        parag: "#4F4F4F",
        footer: "#BDBDBD",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        spaceMono: ["Space Mono", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        title: "24px",
        h2: "48px",
        p: "18px",
        foot: "14px",
        // BreakPoints
        mdP: "24px",
        mdTitle: "64px",
      },
    },
  },
  plugins: [],
};
