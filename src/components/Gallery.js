import React, { Component } from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import {
  container,
  } from "../components/global-styles"

const Section = styled.section`
  ${container}
`

const GalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const GalleryImage = styled.img`
  flex: 1 1 50%;
  width: 50%;
  object-fit: cover;
  padding: 10px;
`

class Gallery extends Component {
  render() {
    return (
        <Section>
          <GalleryWrap>
            {this.props.images.map(image => (
              <GalleryImage
                src={image.localFile.childImageSharp.fluid.src}
                alt={image.alt_text}
                key={image.wordpress_id}
              />
            ))}
          </GalleryWrap>
        </Section>
    )
  }
}

export default Gallery