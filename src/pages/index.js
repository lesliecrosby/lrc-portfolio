import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
// import parse from "html-react-parser"
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
    const site = this.props.data.site
    return (
      <Layout>
        <SEO
          title={ site.siteMetadata.title }
          description={ site.siteMetadata.description }
        />

        <section className="section__heading">
          <BioContainer className="container">
            <Bio>
              <h1 className="page-title">{ site.siteMetadata.title }</h1>
              <h3>{ site.siteMetadata.description }</h3>
              <p>Hi, I'm Leslie, an experienced web developer with a strong background in design. I live for solving problems, I write eloquent code, and I make websites that work. If I sound like the kind of person you would like to build your next project, send me an email (<a href="mailto:hello@lesliercrosby.com">hello@lesliercrosby.com</a>).</p>
              <Link
                to={"/projects"}
                className="button"
              >
                View Recent Projects
              </Link>
            </Bio>
            <div className="card__border">
              <Headshot
                alt={ page.featured_media.alt_text }
                fluid={ page.featured_media.localFile.childImageSharp.fluid }
              />
            </div>
          </BioContainer>
        </section>

        <section className="py">
          <div className="container container--sm">
            <div className="card">
              <h2>Contact Me</h2>
              <p>You can find me on <a href="https://instagram.com/lesliespinach" target="_blank" rel="noopener noreferrer">Instagram</a> or <a href="https://www.linkedin.com/in/leslie-r-crosby-42181332/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and a selection of my projects are public on <a href="https://github.com/lesliecrosby" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
              <a href="mailto:hello@lesliercrosby.com" className="button">Email Me Now</a>
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
    wordpressPage(title: {eq: "About Me"}) {
      featured_media {
        localFile {
          childImageSharp {
              fluid(maxWidth: 420) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`