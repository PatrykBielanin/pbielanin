module.exports = {
  darkMode: 'class',
  theme: {
      screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1000px',
          '2xl': '1200px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#90CC43',
      'black': '#0a0a0a',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
    },
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ]
}
