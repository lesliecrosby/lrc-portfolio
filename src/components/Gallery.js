import React, { Component } from "react"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
import {
  container,
  } from "../components/global-styles"

class Gallery extends Component {
  render() {
    return (

        <section css={css`
          ${container}
        `}>
          <div css={css`
            display: flex;
            flex-wrap: wrap;
          `}>
            {this.props.images.map(image => (
              <img
                src={image.localFile.childImageSharp.fluid.src}
                alt={image.alt_text}
                key={image.wordpress_id}
                css={css`
                  flex: 1 1 50%;
                  width: 50%;
                  object-fit: cover;
                  padding: 10px;
                `}
              />
            ))}
          </div>
        </section>
    )
  }
}

export default Gallery