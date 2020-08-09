import React, { Component } from "react"
import {
  TransitionGroup
} from 'react-transition-group';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectSlide from "../components/ProjectSlide"
import styled from "styled-components"
import arrow from "../images/arrow-up-right.svg"

const Arrow = styled.img`
  margin-left: 0.25rem;
  vertical-align: middle;
`
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

        <section className="py">
          <div className="container">
            <h3>More Projects:</h3>
            <ul>
              <li><a href="https://www.annascott.co/" target="_blank" rel="noopener noreferrer">Anna Scott Coaching (Webflow)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
              <li><a href="https://www.blinkbeautyatx.com/" target="_blank" rel="noopener noreferrer">Blink Beauty (Webflow)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
              <li><a href="https://bomeforwomen.com/" target="_blank" rel="noopener noreferrer">Bomē (Shopify)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
              <li><a href="https://www.fyoog.com/" target="_blank" rel="noopener noreferrer">FYOOG Architecture (Webflow)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
              <li><a href="https://www.hollykrivo.com/" target="_blank" rel="noopener noreferrer">Holly Krivo Coaching (Webflow)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
              <li><a href="https://www.seasonsleadership.com/" target="_blank" rel="noopener noreferrer">Seasons Leadership Program (Webflow)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
              <li><a href="https://startupfashion.com/" target="_blank" rel="noopener noreferrer">StartUp Fashion (WordPress)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
              <li><a href="https://theturkgroup.com/" target="_blank" rel="noopener noreferrer">The Turk Group (WordPress)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
              <li><a href="http://www.usvetscareernetwork.com/" target="_blank" rel="noopener noreferrer">U.S.VETS Career Network (WordPress)<Arrow src={ arrow } alt="Arrow icon" /></a></li>
            </ul>
          </div>
        </section>

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