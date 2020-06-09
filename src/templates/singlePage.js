import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import parse from "html-react-parser"
// import Img from "gatsby-image"

import Layout from "../components/Layout"
import Article from "../components/Article"
import SEO from "../components/Seo"
import {
  // colors,
  // container
  } from "../components/global-styles"

class SinglePage extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return (
      <Layout>
        <SEO
          title={page.title}
          description={page.excerpt}
        />

        <section className="section__title">
          <div className="container">
            <h1 className="page-title">{ page.title }</h1>
          </div>
        </section>

        <div className="container">
          <section>
            {/* <Img
              alt={page.featured_media.alt_text}
              fluid={page.featured_media.localFile.childImageSharp.fluid}
            /> */}
          </section>
          <Article>{parse(page.content)}</Article>
        </div>
      </Layout>
    )
  }
}

SinglePage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SinglePage

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 804) {
              ...GatsbyImageSharpFluid
            }
          }
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