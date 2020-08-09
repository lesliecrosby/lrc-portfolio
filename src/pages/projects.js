import React, { Component } from "react"
import {
  TransitionGroup
} from 'react-transition-group';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectSlide from "../components/ProjectSlide"

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      areWeInBusiness: false,
    };
  }

  handleScroll() {

  }

  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Recent Projects" />

        <section className="section__heading">
          <div className="container">
            <h1 className="page-title">
              Recent Projects
            </h1>
          </div>
        </section>

        <TransitionGroup className="projects-list">
          {data.allWordpressWpProjects.edges.map(({ node }) => (
            <ProjectSlide
              title={node.title}
              description={node.excerpt}
              target={`${node.slug}`}
              key={node.id}
              tags={node.tags}
              image={node.featured_media.localFile.childImageSharp.fluid}
              imageAlt={node.featured_media.alt_text}
            />
          ))}
        </TransitionGroup>

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