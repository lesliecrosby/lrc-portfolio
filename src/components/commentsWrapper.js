import React, { Component } from "react"
import { css } from "@emotion/core"

class CommentWrapper extends Component {
  render(props) {
    return (
      <ol
        css={css`
          list-style: none;
          margin-left: 3rem;
          padding-left: 0;
        `}
      >
        {this.props.children}
      </ol>
    )
  }
}

export default CommentWrapper