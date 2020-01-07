import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import {
  breakpoints
} from "../components/global-styles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="section__title triangles">
      <div className="container">
        <h1
          className="page-title"
        >Leslie R Crosby</h1>
      </div>
    </section>

    <section className="lightsage-bg">
      <div className="container py">
        <div
        css={css`
          & > div {
            margin: 0 1rem 4rem;
          }
          @media (min-width: ${breakpoints.mobile}) {
            display: flex;
            align-items: stretch;
            justify-content: space-around;
            flex-wrap: wrap;
            & > div {
              flex: 0 1 auto;
              width: calc(48% - 2rem);
              max-width: 360px;
            }
          }
        `}
        >
          <div className="card__outer">
            <Link
              to={'/projects'}
              className="card--overlap"
              >
              <h2>Recent Projects</h2>
            </Link>
          </div>

          <div className="card__outer">
            <Link
              to={'/experience'}
              className="card--overlap"
              >
              <h2>Experience &amp; Resume</h2>
            </Link>
          </div>

          <div className="card__outer">
            <Link
              to={'/about-me'}
              className="card--overlap"
              >
              <h2>About Me</h2>
            </Link>
          </div>

        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`