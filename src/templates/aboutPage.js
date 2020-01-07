import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import diamond from "../images/diamond.svg"

import Layout from "../components/layout"
// import Article from "../components/article"
import SEO from "../components/seo"
import {
  // colors,
  breakpoints
  } from "../components/global-styles"

class AboutPage extends Component {
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


        <section className="section__bio triangles triangles--coral">
          <div className="container"
            css={css`
              display: flex;
              flex-direction: column-reverse;
              align-items: center;
              /* padding-bottom: 6rem; */
              @media (min-width: ${breakpoints.mobile}) {
                flex-direction: row;
                /* padding-top: 4rem; */
              }
            `}
          >
            <Img
              alt={page.acf.headshot.alt_text}
              // TODO: this doesn't seem especially FLUID...
              fluid={page.acf.headshot.localFile.childImageSharp.fluid}
              css={css`
                flex: 0 0 210px;
                width: 210px;
                height: 210px;
                border-radius: 50%;
              `}
            />
            <div css={css`
              margin: 2rem 0;
              @media (min-width: ${breakpoints.mobile}) {
                margin: 0 0 0 2rem;
              }
            `}>
              {parse(page.acf.bio)}
            </div>
          </div>
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
              css={css`

              `}
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

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default AboutPage

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
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