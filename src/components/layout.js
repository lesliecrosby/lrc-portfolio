import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/styles.scss"

// moved GlobalStyle w/fonts below for sanity

const SiteWrap = styled.div`
  margin: 0 auto;
  padding-top: 0;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

const Main = styled.main`
  flex: 1 1 auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wordpressPage(title: {eq: "Experience"}) {
        acf {
          resume {
            url {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <link rel="prefetch" href="../fonts/wide/TofinoProPersonalWide-Black.woff2"/>
      <link rel="prefetch" href="../fonts/cond/TofinoProPersonalCond-Medium.woff2"/>
      <Header siteTitle={data.site.siteMetadata.title} resumeLink={data.wordpressPage.acf.resume.url.localFile.publicURL}/>
      <GlobalStyle />
      <SiteWrap>
        <Main>
          {children}
        </Main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </SiteWrap>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`

  /* Cond */
  @font-face {
    font-family: "LT Tofino Condensed";
    src: url('../fonts/cond/TofinoProPersonalCond-Medium.woff2') format('woff2'),
    url('../fonts/cond/TofinoCond-Medium.woff') format('woff');
    font-style: normal;
    font-weight: 500;
  }

  /* Wide */
  @font-face {
    font-family: "LT Tofino Wide";
    src: url('../fonts/wide/TofinoProPersonalWide-Black.woff2') format('woff2'),
    url('../fonts/wide/TofinoWide-Black.woff') format('woff');
    font-style: normal;
    font-weight: 800;
  }

  html {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }

  h1, .h1,
  h2, .h2,
  h6, .h6 {
    font-family: "LT Tofino Wide", sans-serif;
    font-style: normal;
    font-weight: 800;
  }

  h4, .h4 {
    font-weight: bold;
  }

  h5, .h5 {
    font-family: "LT Tofino Condensed", sans-serif;
    font-weight: 500;
  }

`

export default Layout