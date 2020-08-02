import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import parse from "html-react-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import {
//   breakpoints
//   } from "../components/global-styles"

const JobFacts = styled.div`
  text-align: right;
`
class ExperiencePage extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return (
      <Layout>
        <SEO
          title={ page.title }
          description={ page.excerpt }
        />

        <section className="section__heading">
          <div className="container">
            <h1 className="page-title">{ page.title }</h1>
            { parse(page.content) }
          </div>
        </section>

        {page.acf.job &&
        <section className="experience">
          {page.acf.job.map((job, i) => (
            <div className="container" key={i}>
              <div className="card__border">
                <div className="card--overlap">
                  {job.company_url &&
                    <a href={job.company_url} target="_blank" rel="noopener noreferrer">
                      {parse(job.company)}
                    </a>
                  }

                  {!job.company_url &&
                    <div>{parse(job.company)}</div>
                  }

                  <h3>{job.job_title}</h3>
                  <div className="description">{parse(job.description)}</div>
                  <JobFacts>
                    <h4 className="h3">{job.dates}</h4>
                    <h4 className="h3">{job.location}</h4>
                  </JobFacts>
                </div>
              </div>
            </div>
          ))}
        </section>
        }

        <section className="cta">
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