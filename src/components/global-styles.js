export const colors = {
  white: "#ffffff",
  grey200: "#f4f7f6",
  grey300: "#e0e4e3",
  grey500: "#7c7c7c",
  grey800: "#333",
  teal: "#a8dcd1",

  // coral: "#E16F56",
  coral: "#efa595",
  lightcoral: "#F08A7C",
//   sage: "#889891",
  // sage: "#86a99a",
  sage: "#b6cec3",
//   lightsage: "#A7B9B4",
  lightsage: "#9db9b1",
  dusk: "#857E8C",
  lightdusk: "#9196A7",
}

//TODO: consider making more like this: https://github.com/bchiang7/v4/blob/master/src/styles/media.js
export const breakpoints = {
  mobile: '650px',
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

export const boxShadow = `
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
`

export const buttonPrimary = `
  background-color: ${colors.lightcoral};
  border: 0;
  border-bottom: 4px solid ${colors.coral};
  border-radius: 3px;
  box-shadow: none;
  text-shadow: none;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.8rem 1.5rem 0.6rem;
  cursor: pointer;
  transition: background-color 250ms ease, border 250ms ease;
  &:disabled {
    background: ${colors.grey300};
    cursor: default;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.coral};
    border-bottom: 4px solid ${colors.lightcoral};
  }
`

export const formField = `
  border: none;
  background: ${colors.grey200};
  margin: 0.5rem 0 0;
  padding: 0.5rem;
  border-bottom: 3px solid ${colors.grey200};
  &:focus {
    outline: none;
    border-bottom: 3px solid ${colors.sage};
  }
`

export const orderedListStyles = `
  ol {
    list-style: none;
    counter-reset: item;
    > li {
      counter-increment: item;
      margin-bottom: 5px;
      padding-left: 2rem;
      &:before {
        background: ${colors.sage};
        content: counter(item);
        border-radius: 100%;
        display: inline-block;
        color: ${colors.white};
        margin-left: -1.9rem;
        margin-right: 10px;
        font-size: 0.8rem;
        font-weight: bold;
        text-align: center;
        width: 1.2rem;
      }
    }
  }
`

export const unorderedListStyles = `
  ul {
    list-style: none;
    > li {
      padding-left: 2rem;
      &:before {
        background-color: ${colors.coral};
        border-radius: 50%;
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: -1.3rem;
        margin-right: 0.8rem;
        margin-bottom: 0.2rem;
      }
    }
  }
`

export const fonts = {
  quicksand: '"Quicksand", sans-serif',
  roboto: '"Roboto", sans-serif',
  robotoCondensed: '"Roboto Condensed", sans-serif',
  montserrat: '"Montserrat", sans-serif',
}

export const underline = (
    background,
    text,
    selection,
    position,
    width
) => `
    color: inherit;
    text-decoration: none;
    background: linear-gradient(${background}, ${background}),
        linear-gradient(${background}, ${background}), linear-gradient(${text}, ${text});
    background-size: 0.05em ${width}, 0.05em ${width}, ${width} ${width};
    background-repeat: no-repeat, no-repeat, repeat-x;
    text-shadow: 0.03em 0 ${background}, -0.03em 0 ${background},
        0 0.03em ${background}, 0 -0.03em ${background}, 0.06em 0 ${background},
        -0.06em 0 ${background}, 0.09em 0 ${background}, -0.09em 0 ${background},
        0.12em 0 ${background}, -0.12em 0 ${background}, 0.15em 0 ${background},
        -0.15em 0 ${background};
    background-position-y: ${position}, ${position}, ${position};
    background-position-x: 0%, 100%, 0%;

    &::selection {
        text-shadow: 0.03em 0 ${selection}, -0.03em 0 ${selection},
            0 0.03em ${selection}, 0 -0.03em ${selection}, 0.06em 0 ${selection},
            -0.06em 0 ${selection}, 0.09em 0 ${selection}, -0.09em 0 ${selection},
            0.12em 0 ${selection}, -0.12em 0 ${selection}, 0.15em 0 ${selection},
            -0.15em 0 ${selection};
        background: ${selection};
    }
    &:before,
    &:after,
    *,
    *:before,
    *:after {
        text-shadow: none;
    }
`