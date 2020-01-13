import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import diamond from "../images/diamond.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

const Bio = styled.div`
  margin: 2rem 0;
  @media (min-width: ${breakpoints.mobile}) {
    margin: 0 0 0 2rem;
  }
`
const Headshot = styled(Img)`
  flex: 0 0 210px;
  width: 210px;
  height: 210px;
  border-radius: 50%;
`
class IndexPage extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return (
      <Layout>
        <SEO title="Home" />

        <section className="section__title">
          <div className="container">
            <h1 className="page-title">{ page.title }</h1>
          </div>
        </section>

        <section className="section__bio triangles triangles--coral">
          <BioContainer className="container">
            <Headshot
              alt={page.acf.headshot.alt_text}
              // TODO: this doesn't seem especially FLUID...
              fluid={page.acf.headshot.localFile.childImageSharp.fluid}
            />
            <Bio>{parse(page.acf.bio)}</Bio>
          </BioContainer>
        </section>

        {page.acf.skills &&
        <section className="skills">
          <div className="inner">
            <div className="container">
              <div className="card--overlap">
                <h2 className="h6">Skills You Want</h2>
                <ul>
                  {page.acf.skills.map(({skill}, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        }

        <section className="cta">
          <div className="diamond__wrap">
            <img
              src={diamond}
              alt="diamond decoration"
            />
          </div>
          <Link
            to={"/projects"}
            className="button"
          >
            View Recent Projects
          </Link>
        </section>

        {page.acf.tech &&
        <section className="tech">
          <div className="inner">
            <div className="container">
              <div className="card--overlap">
                <h2 className="h6">Tech You Need</h2>
                <ul>
                  {page.acf.tech.map(({tech}, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        }
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