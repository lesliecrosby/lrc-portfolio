import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import parse from "html-react-parser"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
  breakpoints
  } from "../components/global-styles"

const BioContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
`

const JobFacts = styled.div`
  text-align: right;
`
class ExperiencePage extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return (
      <Layout>
        <SEO
          title={page.title}
          description={page.excerpt}
        />

        <section className="section__title">
          <div className="container">
            <h1 className="page-title">{ page.title }</h1>
          </div>
        </section>

        <section className="section__bio triangles triangles--sage">
          <BioContainer className="container container--sm">
          {parse( page.content ) }
          </BioContainer>
        </section>

        {page.acf.job &&
        <section className="experience pt">
          {page.acf.job.map((job, i) => (
            <div className="container" key={i}>
              <div className="card--overlap">
                {job.company_url &&
                  <a href={job.company_url} target="_blank" rel="noopener noreferrer">
                    <h2 className="h2">{job.company}</h2>
                  </a>
                }

                {!job.company_url &&
                  <h2 className="h2">{job.company}</h2>
                }

                <h3 className="h5">{job.job_title}</h3>
                <div className="description">{parse(job.description)}</div>
                <JobFacts>
                  <h4 className="h6">{job.dates}</h4>
                  <h4 className="h6">{job.location}</h4>
                </JobFacts>

              </div>
            </div>
          ))}
        </section>
        }

        <section className="cta cta--resume">
          <a
            href={page.acf.resume.url.localFile.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            PDF Resume
          </a>
        </section>

      </Layout>
    )
  }
}

ExperiencePage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default ExperiencePage

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date
      acf {
        job {
          location
          company
          company_url
          dates
          description
          job_title
        }
        resume {
          url {
            localFile {
              publicURL
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