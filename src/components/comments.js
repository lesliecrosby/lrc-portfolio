import { React, Component } from "react"
import styled from "styled-components"
import CommentSingle from "../components/commentSingle"
import CommentsWrapper from "../components/commentsWrapper"
import CommentForm from "../components/commentForm"

import {
  // boxShadow,
  colors,
  // orderedListStyles,
  // unorderedListStyles,
  // underline,
} from "../components/global-styles"

const Comments = styled.div`
  max-width: 600px;
  margin: auto;
  > ol {
    margin-left: 0;
    > li {
      padding-bottom: 4rem;
      border-bottom: 1px solid ${colors.gray300};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`

class BlogComments extends Component {
  render(props) {
    const sortComments = allComments => {
      let sortedComments = allComments.filter(
        comment => comment.node.wordpress_parent === 0
      )
      sortedComments = sortedComments.map(comment => {
        return getChildComments(comment, allComments)
      })
      return sortedComments
    }
    const getChildComments = (comment, allComments) => {
      const parentId = comment.node.wordpress_id
      let children = allComments.filter(
        comment => comment.node.wordpress_parent === parentId
      )
      if (children.length !== 0) {
        let allchildren = children.map(child =>
          getChildComments(child, allComments)
        )
        return [comment, allchildren]
      }
      return comment
    }
    const renderComments = comment => {
      if (!Array.isArray(comment)) {
        return <CommentSingle comment={comment} />
      } else {
        return (
          <CommentSingle comment={comment[0]}>
            <CommentsWrapper>
              {comment[1].map(comment => renderComments(comment))}
            </CommentsWrapper>
          </CommentSingle>
        )
      }
    }

    const allComments = this.props.comments
    const post = this.props.post

    return (
      <Comments>
        {allComments ? (
          <div>
            <CommentForm postId={post.wordpress_id} />
            <h2 className="h4">
              {allComments.edges.length} Comments on "{post.title}"
            </h2>
            <CommentsWrapper>
              {sortComments(allComments.edges).map(comment => {
                return renderComments(comment)
              })}
            </CommentsWrapper>
          </div>
        ) : (
          <div>
            <CommentForm postId={post.wordpress_id} />
          </div>
        )}
      </Comments>
    )
  }
}

export default BlogComments