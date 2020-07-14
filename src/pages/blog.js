import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
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

class Blog extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Blog" />

        <section className="section__heading">
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

export default Blog

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