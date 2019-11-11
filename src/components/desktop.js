import React, { Component } from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import {
  breakpoints,
  colors,
  } from "../components/global-styles"

class Desktop extends Component {
  render() {
    return (
      <div
        css={css`
          width: 90%;
          height: auto;
          padding-top: 50%;
          background-color: ${colors.grey800};
          border: 2vw solid ${colors.grey800};
          border-radius: 1rem;
          position: relative;
          left: -10%;
          overflow: hidden;
          @media (min-width: ${breakpoints.mobile}) {
            width: 80%;
            left: -20%;
          }
        `}
      >
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          `}
        >
          <Img
            alt={this.props.imageAlt}
            fluid={this.props.image}
          />
        </div>
      </div>

    )
  }
}

export default Desktop