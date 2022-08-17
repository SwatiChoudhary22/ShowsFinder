module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],

  theme: {
    extend: {
      backgroundImage: {
        certificate: "url('/Images/certificatebackground.jpg')",
      },
      colors: {
        "blue-650": "#026aa0",
      },
      maxHeight: {
        "screen-60": "60vh",
        "screen-70": "70vh",
      },
      width: {
        "6/5": "120%",
      },
      gridTemplateColumns: {
        "auto-250": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
