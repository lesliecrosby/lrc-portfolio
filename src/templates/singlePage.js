import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"

class SinglePage extends Component {
  render() {
    // const page = this.props.data.wordpressPage
    const page = this.props.data.page
    return (
      <Layout>
        <SEO
          title={ page.title }
          description={ page.excerpt }
        />

        <section className="section__heading">
          <div className="container">
            <h1 className="page-title">{ page.title }</h1>
            { parse( page.content ) }
          </div>
        </section>

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
  query($id: ID!) {
    # site {
    #   siteMetadata {
    #     title
    #   }
    # }
    # wordpressPage(id: { eq: $id }) {
    #   title
    #   content
    #   date
    #   featured_media {
    #     source_url
    #     alt_text
    #     localFile {
    #       childImageSharp {
    #         fluid(maxWidth: 804) {
    #           ...GatsbyImageSharpFluid
    #         }
    #       }
    #     }
    #   }
    # }
    page(id: { id: $id }) {
      title
      excerpt
      content
    }
  }
`