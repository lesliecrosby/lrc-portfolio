import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import parse from "html-react-parser"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import TagList from "../components/tagList"
import {
  colors,
  // breakpoints,
  container
  } from "../components/global-styles"

class SingleProject extends Component {
  render() {
    const project = this.props.data.wordpressWpProjects
    return (
      <Layout>
        {/* <SEO
          title={project.yoast_meta.yoast_wpseo_title}
          description={project.yoast_meta.yoast_wpseo_metadesc}
        /> */}
        <SEO
          title={project.title}
          description={project.excerpt}
        />
        <div
          css={css`
            ${container}
          `}
        >
          <h1
            dangerouslySetInnerHTML={{ __html: project.title }}
            className="page-title"
          />
          <section>
            <Img
              alt={project.featured_media.alt_text}
              fluid={project.featured_media.localFile.childImageSharp.fluid}
            />
          </section>
          <Article>{parse(project.content)}</Article>
        </div>
      </Layout>
    )
  }
}

SingleProject.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleProject

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpProjects(id: { eq: $id }) {
      wordpress_id
      title
      content
      date
      tags {
        id
        name
      }
      # yoast_meta {
      #   yoast_wpseo_title
      #   yoast_wpseo_metadesc
      # }
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 1024) {
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