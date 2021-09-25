module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ["Poppins"],
    },
    colors: {
      primary: "#5039bb",
      dark: "#4029aa",
      faded: "#F2F2F2",
      tertiary: "#333333",
      error: "#EB5757",
      white: "#FFFFFF",
      green: "#4caf50",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
