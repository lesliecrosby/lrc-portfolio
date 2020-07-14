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

        <section className="section__heading">
          <div className="container">
            <h1 className="page-title">
              {project.title}
            </h1>
            {project.tags &&
              <Tags>
                  {project.tags.map(({name}, id) => (
                    <h3 key={id}>{name}</h3>
                  ))}
              </Tags>
            }

            {parse(project.excerpt)}

            {project.acf.website_link &&
              <a
              href={project.acf.website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              >
              View this project in the wild
            </a>
            }
          </div>
        </section>

        <Article>{parse(project.content)}</Article>

        <section className="py cta">
          <Link
            to={"/projects"}
            className="button"
          >
            Back to Recent Projects
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
  query($id: String!) {
    wordpressWpProjects(id: { eq: $id }) {
      wordpress_id
      title
      excerpt
      content
      date
      acf {
        services_list {
          service
        }
        website_link
      }
      tags {
        id
        name
        # path
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`