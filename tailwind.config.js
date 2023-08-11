module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      // display: ["Open Sans", "sans-serif"],
      // body: ["Open Sans", "sans-serif"],
      // font-family: 'Noto Sans Arabic', sans-serif;
      // font-family: 'Noto Kufi Arabic', serif;
      'NotoKufi': ['Noto Kufi Arabic', 'serif'],
      'NotoSans': ['Noto Sans Arabic', 'sans-serif'],
      'Sols': ['Sols'],
      'BKamranOutline': ['BKamranOutline'],
      'BKamran': ['BKamran'],
      'BKamranBold': ['BKamranBold'],
      'BMehrBold.ttf': ['BMehrBold'],
      'B Farnaz': ['B Farnaz'],
      'B Homa': ['B Homa'],
      'Gabriola': ['Gabriola'],
    },
    extend: {
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
    },
  },
  plugins: [],
};
