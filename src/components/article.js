import React, { Component } from "react"
import styled from "styled-components"

import {
  breakpoints,
  colors,
  container,
} from "./global-styles"

const ArticleContent = styled.article`
  ${container}
  padding: 1.5rem;
  @media (min-width: ${breakpoints.mobile}) {
    padding: 3rem;
  }
  a {
    color: ${colors.gray800};
    text-decoration: none;
  }
  img {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    display: block;
    margin: 0 auto;
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
      <ArticleContent>
        {this.props.children}
      </ArticleContent>
    )
  }
}

export default Article