/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#242530",
        "cell-n": "#363746",
        "cell-math": "#2E2F3E",
        "yellow-cell": "#FFBB00",
      },
      width: {
        800: "800px",
        375: "375px",
        94: "93.75px",
      },
      height: {
        812: "812px",
        94: "93.75px",
      },
      borderRadius: {
        30: "30px",
      },
      borderWidth: {
        "b-cell": "0.5px",
      },
      fontSize: {
        base: ["55px", { lineHeight: "82px", fontWeight: 400 }],
        less: ["45px", { lineHeight: "82px", fontWeight: 400 }],
        "base-small": ["26px", { lineHeight: "39px", fontWeight: 300 }],
      },
      spacing: {
        "19px": "19px",
        5.5: "22px",
      },
    },
  },
  plugins: [],
};
