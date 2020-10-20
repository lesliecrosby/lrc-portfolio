import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import parse from "html-react-parser"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const Tags = styled.div`
  margin-bottom: 1rem;
  h3 {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  h3::after {
    content: ',';
    padding-right: 0.5rem;
  }
  h3:last-child::after {
    display: none;
  }
  h3.tags__heading::after {
    content: ':';
  }
`

class SingleProject extends Component {
  render() {

    // const project = this.props.data.wordpressWpProjects
    const project = this.props.data.project
    const { previous, next } = this.props.pageContext
    return (
      <Layout>
        <SEO
          title={project.title}
          description={project.excerpt}
        />

        <section className="section__heading">
          <div className="container">
            <h1 className="page-title">
              {project.title}
            </h1>
            {/* {project.tags && */}
            {project.tags.nodes &&
              <Tags>
                <h3 className="tags__heading">Tech Used</h3>
                {/* {project.tags.map(({name}, id) => (
                  <h3 key={id}>{name}</h3>
                ))} */}
                {project.tags.nodes.map(({name}, id) => (
                  <h3 key={id}>{name}</h3>
                ))}
              </Tags>
            }

            {parse(project.excerpt)}

            {/* {project.acf.website_link &&
              <a
              href={project.acf.website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="button mt-1"
              >
              View this project in the wild
            </a>
            } */}
            {project.projects.websiteLink &&
              <a
              href={project.projects.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button mt-1"
              >
              View this project in the wild
            </a>
            }
          </div>
        </section>

        <Article>{parse(project.content)}</Article>

        <section className="cta">
          { previous &&
              <Link
                to={ "/projects/" + previous.slug }
                className="button"
              >
                ← Prev Project
              </Link>
          }

          { next &&
            <Link
              to={ "/projects/" + next.slug }
              className="button"
            >
              Next Project →
            </Link>
          }
        </section>

        <section className="cta">
          <Link
            to={"/projects"}
            className="button button--alt"
          >
            Back to Featured Projects
          </Link>
        </section>

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
  query ( $id: ID! ) {
    # site {
    #   siteMetadata {
    #     title
    #   }
    # }
    # wordpressWpProjects( id: { eq: $id } ) {
    #   wordpress_id
    #   title
    #   excerpt
    #   content
    #   date
    #   acf {
    #     website_link
    #   }
    #   tags {
    #     id
    #     name
    #   }
    # }
    project(id: { id: $id }) {
      title
      excerpt
      content
      projects {
        websiteLink
      }
      tags {
        nodes {
          id
          name
        }
      }
    }
  }
`