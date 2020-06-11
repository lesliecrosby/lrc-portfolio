export const colors = {
  white: "#ffffff",
  black: "#262626",
  cream: "#f9f9f9",
  almond: "#f1eee7",
  gray200: "#f4f7f6",
  gray300: "#e0e4e3",
  gray500: "#7c7c7c",
  gray800: "#333",

  coral: "#E16F56",
  lightcoral: "#F08A7C",
  sage: "#b6cec3",
  lightsage: "#9db9b1",
  dusk: "#857E8C",
  lightdusk: "#9196A7",
}

export const breakpoints = {
  mobile: '650px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px',
  huge: '1440px',
}

export const container = `
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 75%;
    max-width: 1080px;
  }
`