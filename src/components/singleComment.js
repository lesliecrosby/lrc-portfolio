import React, { Component } from "react"
import { css } from "@emotion/core"

import {
  colors,
} from "../components/global-styles"

class SingleComment extends Component {
  render(props) {
    const comment = this.props.comment.node
    const children = this.props.children
    const getAuthorNameLink = (name, url) => {
      if (url) {
        return <a href={url}>{name}</a>
      }
      return name
    }
    return (
      <li
        key={comment.id}
        css={css`
          margin-top: 2rem;
          margin-bottom: 2rem;
        `}
      >
        <div>
          <h3
            className="h5"
            css={css`
              margin-bottom: 0.2rem;
              a {
                color: ${colors.coral};
                text-decoration: none;
              }
            `}
          >
            {getAuthorNameLink(comment.author_name, comment.author_url)}
          </h3>
          <p
            css={css`
              font-size: 0.8rem;
              font-style: italic;
            `}
          >
            {comment.date}
          </p>
          <div
            css={css`
              color: ${colors.grey800};
            `}
            dangerouslySetInnerHTML={{ __html: comment.content }}
          />
        </div>
        {children}
      </li>
    )
  }
}

export default SingleComment