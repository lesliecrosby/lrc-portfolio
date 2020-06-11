import { React, Component } from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
  colors,
} from "../components/global-styles"

const Post = styled.div`
  background: ${colors.white};
  padding: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  a {
    color: ${colors.gray800};
    text-decoration: none;
  }
  img {
    display: block;
    margin: 0 auto;
  }
`

class BlogIndex extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Blog" />

        <section className="section__title">
          <div className="container">
            <h1 className="page-title">Blog</h1>
          </div>
        </section>

        <section>
          <div className="container">
            {data.allWordpressPost.edges.map(({ node }) => (
              <Post
                key={node.id}
              >
                <Link to={`blog/${node.slug}`}>
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
                <Link
                  to={`blog/${node.slug}`}
                  aria-label={`Continue reading ${node.title}`}
                >
                  <button className="button">
                    Continue Reading
                  </button>
                </Link>
              </Post>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          slug
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