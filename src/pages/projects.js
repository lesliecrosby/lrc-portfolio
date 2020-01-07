import React, { Component } from "react"
// import { css } from "@emotion/core"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import ReactFullpage from '@fullpage/react-fullpage'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
// import { colors, container, fonts } from "../components/global-styles"

class Projects extends Component {

  render() {
    const data = this.props.data

    // const { fullpages } = this.state;

    // if (!fullpages.length) {
    //   return null;
    // }

    return (
      <Layout>
        <SEO title="Recent Projects" />
        <section className="section__title">
          <div className="container">
            <h1
              className="page-title"
            >
              Projects
            </h1>
          </div>
        </section>

        <div className="projects-list">
          {data.allWordpressWpProjects.edges.map(({ node }) => (
            <Card
              title={node.title}
              description={node.excerpt}
              target={`projects/${node.slug}`}
              key={node.id}
              tags={node.tags.map(tag => tag.name)}
              image={node.featured_media.localFile.childImageSharp.fluid}
              imageAlt={node.featured_media.alt_text}
            >
              {/* <Img
                alt={node.featured_media.alt_text}
                fluid={node.featured_media.localFile.childImageSharp.fluid}
              /> */}
            </Card>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    allWordpressWpProjects(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          tags {
            id
            name
          }
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
      }
    }
  }
`