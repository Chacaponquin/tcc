/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CairoItalic: "Calisto Italic",
        CairoItalicBold: "Calisto Italic Bold",
        Drunk: "Drunk Regular",
        DrunkBold: "Drunk Bold",
        InterBold: "Inter Bold",
        InterExtraBold: "Inter Extra-Bold",
      },
      colors: {
        instagramColor: "#E1306C",
      },
      screens: {
        exsm: { max: "400px" },
        esm: { max: "640px" },
        "2xl": { min: "1400px" },
      },
    },
  },
  plugins: [],
};
