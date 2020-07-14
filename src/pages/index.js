import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import parse from "html-react-parser"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  breakpoints
} from "../components/global-styles"

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div:first-child {
    margin-bottom: 6rem;
  }

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;

    > div:first-child {
      margin-bottom: 0;
    }
  }
`

const Bio = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    padding-right: 4rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding-right: 6rem;
  }
`

const Headshot = styled(Img)`
  flex: 0 0 210px;
  width: 210px;
  height: 210px;

  @media (min-width: ${breakpoints.desktop}) {
    flex: 0 0 300px;
    width: 300px;
    height: 300px;
  }

  @media (min-width: ${breakpoints.large}) {
    flex: 0 0 378px;
    width: 378px;
    height: 378px;
  }
`

class IndexPage extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return (
      <Layout>
        <SEO title={page.title} />

        <section className="section__heading">
          <BioContainer className="container">
            <div>
              <h1 className="page-title">{ page.title }</h1>
              <h3>Developer & Design Liason</h3>
              <Bio>{parse(page.acf.bio)}</Bio>
              <Link
                to={"/projects"}
                className="button"
              >
                View Recent Projects
              </Link>
            </div>
            <div className="card__border">
              <Headshot
                alt={page.acf.headshot.alt_text}
                // TODO: this doesn't seem especially FLUID...
                fluid={page.acf.headshot.localFile.childImageSharp.fluid}
              />
            </div>
          </BioContainer>
        </section>

        <section className="py">
          <div className="container container--sm">
            <div className="card">
              <h2>Contact Me</h2>
              <p>You can find me, my cat, and my plants on <a href="https://instagram.com/lesliespinach" target="_blank" rel="noopener noreferrer">Instagram</a>, and a few of my projects are public on <a href="https://github.com/lesliecrosby" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
              <a href="mailto:hello@lesliercrosby.com" className="button">Email Leslie Now</a>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    wordpressPage(title: {eq: "Leslie Crosby"}) {
      title
      content
      date
      acf {
        headshot {
          source_url
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 420) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        bio
        skills {
          skill
        }
        tech {
          tech
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