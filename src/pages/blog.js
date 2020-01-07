import { React, Component } from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  // boxShadow,
  // buttonPrimary,
  colors,
  // container,
  // fonts,
  // orderedListStyles,
  // underline,
} from "../components/global-styles"

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
              <div
                key={node.id}
                css={css`
                  background: ${colors.white};
                  padding: 3rem;
                  font-size: 1.1rem;
                  line-height: 1.6;
                  margin-bottom: 3rem;
                  a {
                    color: ${colors.grey800};
                    text-decoration: none;
                  }
                  img {
                    display: block;
                    margin: 0 auto;
                  }
                `}
              >
                <Link to={`blog/${node.slug}`}>
                  <h3>{node.title}</h3>
                </Link>
                <div
                  css={css`
                    .more-link-wrapper {
                      display: none;
                    }
                  `}
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
                <Link
                  to={`blog/${node.slug}`}
                  aria-label={`Continue reading ${node.title}`}
                >
                  <button className="button">
                    Continue Reading
                  </button>
                </Link>
              </div>
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