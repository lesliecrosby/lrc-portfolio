import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import parse from "html-react-parser"

import Layout from "../components/Layout"
import Article from "../components/Article"
import SEO from "../components/Seo"
// import BlogComments from "../components/comments"
// import {
//   container
// } from "../components/global-styles"

class SinglePost extends Component {
  render() {
    const post = this.props.data.wordpressPost
    // const comments = this.props.data.allWordpressWpComments
    return (
      <Layout>
        <SEO
          title={post.title}
          description={post.excerpt}
        />
        <section className="section__heading">
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

      </Layout>
    )
  }
}

SinglePost.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SinglePost

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      wordpress_id
      title
      content
      excerpt
      date
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`