import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  breakpoints,
  colors,
  } from "../components/global-styles"

const Frame = styled.div`
  width: 90%;
  height: auto;
  padding-top: 56.25%;
  background-color: ${colors.grey800};
  border: 2vw solid ${colors.grey800};
  border-radius: 1rem;
  position: relative;
  left: -10%;
  overflow: hidden;
  z-index: 1;
  @media (min-width: ${breakpoints.mobile}) {
    width: 80%;
    padding-top: 50%;
    left: -20%;
  }
`

const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
class Desktop extends Component {
  render() {
    return (
      <Frame>
        <ImageWrap>
          <Img
            alt={this.props.imageAlt}
            fluid={this.props.image}
          />
        </ImageWrap>
      </Frame>
    )
  }
}

export default Desktop