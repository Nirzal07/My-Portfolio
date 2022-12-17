/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //   fontSize: {
      //     xss: ["10px", "10px"],
      //     CardTitles: ["13px", "16.5px"],
      //     ButtonText: ["14px", "21px"],
      //     CardText: ["18px", "24px"],
      //     SmallCardText: ["11px", "16.5px"],
      //     LargeCardTitle: ["25px", "36px"],
      //     CardTitle: ["20px", "30px"],
      //     SectionTitle: ["56px", "50px"],
      //     SecondaryTitle: ["32px", "40px"],
      // },
      colors: {
        green: "#00FFA3",
        text: "#e0e0e0",
        primaryBg: "#1E1E1E",
        secondaryBg: "#201F1F",
        secondary: "#FFA400",
        button: "#030048",
        cardBg: "#F9F9FD",
        cardInnerBg: "#E6E6F5",
      },
    },
  },
  plugins: [],
};
