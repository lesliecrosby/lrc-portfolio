import React, { Component } from "react"
import styled from "styled-components"

import {
  colors,
} from "./global-styles"

const CommentItem = styled.li`
  margin-top: 2rem;
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0.2rem;
    a {
      color: ${colors.coral};
      text-decoration: none;
    }
  }

  p {
    font-size: 0.8rem;
    font-style: italic;
  }

`

const CommentText = styled.div`
  color: ${colors.grey800};
`



class CommentSingle extends Component {
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
      <CommentItem key={comment.id}>
        <div>
          <h3 className="h5">
            {getAuthorNameLink(comment.author_name, comment.author_url)}
          </h3>
          <p>
            {comment.date}
          </p>
          <CommentText dangerouslySetInnerHTML={{ __html: comment.content }}/>
        </div>
        {children}
      </CommentItem>
    )
  }
}

export default CommentSingle