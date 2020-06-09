import React, { Component } from "react"
// import styled from "styled-components"
import {
  // CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ProjectSlide from "../components/ProjectSlide"

// const ScrollIndicators = styled.aside`
//   position: fixed;
//   z-index: 1000;
//   width: 40px;
//   height: 100%;
//   top: 0;
//   right: 0;

//   & ul {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: centers;
//   }
// `

class Projects extends Component {

// begin scroll - past some sort of offset from top
// snap top of first project to window top
// use CSS vh, etc to control project height and width
// track user location in list of projects via scroll indicator bullets
// thus, we need to create a scroll indicator bullet list corresponding to list of projects; also these bullets need to visibly reflect state of current project (active vs. inactive)
// at end of list, snap footer into view

  // state = {
  //   var projectVisible = 0

  // };

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

        <section className="section__title">
          <div className="container">
            <h1 className="page-title">
              Projects
            </h1>
          </div>
        </section>

        <TransitionGroup className="projects-list">
          {data.allWordpressWpProjects.edges.map(({ node }) => (
            <ProjectSlide
              title={node.title}
              description={node.excerpt}
              target={`projects/${node.slug}`}
              key={node.id}
              tags={node.tags.map(tag => tag.name)}
              image={node.featured_media.localFile.childImageSharp.fluid}
              imageAlt={node.featured_media.alt_text}
            />
          ))}
        </TransitionGroup>

        {/* <ScrollIndicators>
          <TransitionGroup component="ul">
            {data.allWordpressWpProjects.edges.map(({ node, i }) => (
              <li
                key={node.id}
              >
              </li>
            ))}
          </TransitionGroup>
        </ScrollIndicators> */}
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