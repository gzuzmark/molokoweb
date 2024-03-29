import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 0,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Luckiest Guy", "cursive"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
