import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import parse from "html-react-parser"
import Img from "gatsby-image"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
import Article from "../components/Article"
import Gallery from "../components/Gallery"
import SEO from "../components/Seo"
// import TagList from "../components/TagList"

import {
  colors,
  container
} from "../components/global-styles"

const Hero = styled.div`
  padding-bottom: 80px;
`

const FeaturedImage = styled.section`
  background-color: ${colors.lightsage};
  padding: 80px 0;

  &.container {
    ${container}
  }
`

const ProjectMeta = styled.section`
  background-color: ${colors.sage};
  padding: 40px 0;

  & > div {
    ${container}
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

class SingleProject extends Component {
  render() {

    const project = this.props.data.wordpressWpProjects

    return (
      <Layout>
        <SEO
          title={project.title}
          description={project.excerpt}
        />

        <section className="section__title">
          <div className="container">
            <h1
              dangerouslySetInnerHTML={{ __html: project.title }}
              className="page-title"
            />
          </div>
        </section>

        <Hero>
          <FeaturedImage>
            <div className="container">
              <Img
                alt={project.featured_media.alt_text}
                fluid={project.featured_media.localFile.childImageSharp.fluid}
              />
            </div>
          </FeaturedImage>

          <ProjectMeta className="project-meta">
            <div>
              {project.acf.services_list &&
              <div>
                <h3 className="h6">Services</h3>
                <ul>
                  {project.acf.services_list.map(({service}, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              }

              <div>
                <h3 className="h6">Client</h3>
                <ul>
                  <li>{project.title}</li>
                </ul>
              </div>

              {project.acf.website_link &&
              <div>
                <h3 className="h6">Website</h3>
                <ul>
                  <li>
                    <a
                      href={project.acf.website_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      {project.acf.website_link}
                    </a>
                  </li>
                </ul>
              </div>
              }
            </div>
          </ProjectMeta>

          <Article>{parse(project.content)}</Article>

          { project.acf.image_gallery &&
            <Gallery images={project.acf.image_gallery} />
          }

        </Hero>
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
      acf {
        services_list {
          service
        }
        website_link
        image_gallery {
          wordpress_id
          title
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                src
              }
            }
          }
          alt_text
        }
      }
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
    site {
      siteMetadata {
        title
      }
    }
  }
`