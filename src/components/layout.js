/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          padding: 0px 1.0875rem 6rem;
          padding-top: 0;
          flex-grow: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          @media (min-width: 650px) {
            padding-bottom: 1.5rem;
          }
        `}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Leslie R Crosby
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
