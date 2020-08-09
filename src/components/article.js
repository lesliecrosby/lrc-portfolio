import React, { Component } from "react"
import styled from "styled-components"

import {
  breakpoints,
  container,
  containerSm,
  colors,
} from "./global-styles"

const ArticleContent = styled.article`

  *:not(img):not(figure) {
    ${containerSm}
  }
  figure.alignwide.size-large {
    ${container}
    img {
      width: 100%;
    }
  }
  img {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    display: block;
    margin: 2rem auto;

    @media (min-width: ${breakpoints.desktop}) {
      margin: 6rem auto;
    }
  }
  code {
    background: rgba(130, 197, 173, 0.3);
    border: none;
    box-shadow: none;
    padding: 3px 8px;
  }
  blockquote {
    background: ${colors.gray200};
    padding: 1.5rem;
    border-radius: 4px;
    border-left: 4px solid ${colors.sage};
    font-style: italic;
    margin: 2rem;
  }
`

class Article extends Component {
  render() {
    return (
      <ArticleContent className="pb">
        {this.props.children}
      </ArticleContent>
    )
  }
}

export default Article