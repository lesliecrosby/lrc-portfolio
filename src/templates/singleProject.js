import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import parse from "html-react-parser"
import Img from "gatsby-image"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Article from "../components/article"
import Gallery from "../components/Gallery"
import SEO from "../components/seo"
// import TagList from "../components/tagList"

import {
  colors,
  container
} from "../components/global-styles"


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

        <div
          css={css`
            padding-bottom: 80px;
          `}
        >

          <section css={css`
            background-color: ${colors.lightsage};
            padding: 80px 0;
          `}>
            <div css={css`
              ${container}
            `}>
              <Img
                alt={project.featured_media.alt_text}
                fluid={project.featured_media.localFile.childImageSharp.fluid}
              />
            </div>
          </section>


          <section className="project-meta" css={css`
            background-color: ${colors.sage};
            padding: 40px 0;
          `}>
            <div css={css`
              ${container}
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
            `}>
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
          </section>

          <Article>{parse(project.content)}</Article>

          { project.acf.image_gallery &&
            <Gallery images={project.acf.image_gallery} />
          }

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