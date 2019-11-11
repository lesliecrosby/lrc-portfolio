import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import {
  breakpoints,
  colors,
  container,
  } from "../components/global-styles"

const Footer = ({ siteTitle }) => (
  <footer
    css={css`
      background-color: ${colors.grey500};
      color: ${colors.white};
    `}
  >
    <div
      css={css`
        ${container}
        padding: 1.45rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (min-width: ${breakpoints.mobile}) {

        }
      `}
    >
      <div>
        <Link
          to="/"
          css={css`
            font-size: 1rem;
            text-shadow: none;
            text-decoration: none;
          `}
        >
          { siteTitle }
        </Link>
      </div>
      <div
        css={css`
          font-size: 0.75rem;
        `}
      >
        © {new Date().getFullYear()}, Leslie R Crosby
      </div>

    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
