import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import parse from "html-react-parser"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
// import TagList from "../components/tagList"
import {
  colors,
  container
  } from "../components/global-styles"

class SinglePage extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return (
      <Layout>
        {/* <SEO
          title={page.yoast_meta.yoast_wpseo_title}
          description={page.yoast_meta.yoast_wpseo_metadesc}
        /> */}
        <SEO
          title={page.title}
          description={page.excerpt}
        />
        <div
          css={css`
            ${container}
          `}
        >
          <h1
            className="page-title"
          >
            { page.title }
          </h1>
          <section>
            {/* <Img
              alt={page.featured_media.alt_text}
              fluid={page.featured_media.localFile.childImageSharp.fluid}
              css={css`
                border-bottom: 1px solid ${colors.grey300};
              `}
            /> */}
          </section>
          <section
            css={css`
              background: ${colors.white};
              display: flex;
              justify-content: center;
              padding-top: 3rem;
            `}
          >
            {/* <TagList tags={page.tags.map(tag => tag.name)} /> */}
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
      # tags {
      #   id
      #   name
      # }
      # yoast_meta {
      #   yoast_wpseo_title
      #   yoast_wpseo_metadesc
      # }
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