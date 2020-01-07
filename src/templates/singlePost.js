import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import { css } from "@emotion/core"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import BlogComments from "../components/comments"
// import {
//   container
// } from "../components/global-styles"

class SingleBlog extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const comments = this.props.data.allWordpressWpComments
    return (
      <Layout>
        <SEO
          title={post.title}
          description={post.excerpt}
        />
        <section className="section__title">
          <div className="container">
            <h1
              dangerouslySetInnerHTML={{ __html: post.title }}
              className="page-title"
            />
          </div>
        </section>

        <section>
          <div className="container">
            <Article>{parse(post.content)}</Article>
          </div>
        </section>

        <BlogComments comments={comments} post={post} />
      </Layout>
    )
  }
}

SingleBlog.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleBlog

export const pageQuery = graphql`
  query($id: String!, $postId: Int!) {
    wordpressPost(id: { eq: $id }) {
      wordpress_id
      title
      content
      excerpt
      date
    }
    allWordpressWpComments(filter: { post: { eq: $postId } }) {
      edges {
        node {
          id
          wordpress_id
          post
          author
          author_name
          author_url
          date(formatString: "MMMM DD, YYYY")
          content
          wordpress_parent
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`