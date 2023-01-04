/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "826px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      colors: {
        // https://coolors.co/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0
        dark_pink: "#F72585",
        violet: "#B5179E",
        light_purple: "#7209B7",
        dark_purple: "#560BAD",
        midnight_purple: "#480CA8",
        magic_purple: "rgb(56, 20, 241)",
        indigo: "#3A0CA3",
        dark_blue: "rgb(15, 8, 150)",
        med_blue: "rgb(43, 62, 206)",
        sky_blue: "#4895EF",
        midnight_blue: "rgb(22, 43, 56)",
        teal: "#4CC9F0",
        aqua: "rgb(150, 227, 215)",
        deep_space: "rgb(23, 25, 37)",
        light_green: "#06D6A0",
        creamy_white: "rgb(250, 242, 225)",
        red_orange: "#FF4500",
        code_block: "rgb(32, 41, 58)",
      },
      backgroundImage: {
        waves_1: "url('./imgs/waves_1.jpg')",
        waves_2: "url('./imgs/waves_2.jpg')",
        waves_3: "url('./imgs/waves_3.jpg')",
        space: "url(./imgs/space.jpg)",
        space_2: "url(./imgs/space_2.jpg)",
        corgi: "url(./imgs/corgi.jpg)",
      },
      fontFamily: {
        code_font: ["Source Code Pro"],
        baskerville: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
