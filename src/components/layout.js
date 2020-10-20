import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import * as fontFiles from "./fonts"

import Header from "./header"
import Footer from "./footer"
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
      # wordpressPage(title: {eq: "Experience"}) {
      #   acf {
      #     resume {
      #       url {
      #         localFile {
      #           publicURL
      #         }
      #       }
      #     }
      #   }
      # }
      page(id: "46", idType: DATABASE_ID) {
        title
        experience {
          resume {
            id
            mediaItemUrl
          }
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} resumeLink={data.wordpressPage.acf.resume.url.localFile.publicURL}/> */}
      <Header siteTitle={data.site.siteMetadata.title} resumeLink={data.page.experience.resume.mediaItemUrl}/>
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

  /* Wide Book */
  @font-face {
    font-family: 'Tofino-Wide-Book';
    src: url('${fontFiles.TofinoProBookEOT}');
    src:
      local('Tofino Pro Personal Wide Book'), local('Tofino-Pro-Personal-Wide-Book'),
      url('${fontFiles.TofinoProBookEOT}?#iefix') format('embedded-opentype'),
      url('${fontFiles.TofinoProBookWOFF2}') format('woff2'),
      url('${fontFiles.TofinoProBookWOFF}') format('woff'),
      url('${fontFiles.TofinoProBookTTF}') format('truetype');
    font-style: normal;
    font-weight: 300;
  }

  /* Wide Black */
  @font-face {
    font-family: 'Tofino-Wide-Black';
    src: url('${fontFiles.TofinoProBlackEOT}');
    src:
      local('Tofino Pro Personal Wide Black'), local('Tofino-Pro-Personal-Wide-Black'),
      url('${fontFiles.TofinoProBlackEOT}?#iefix') format('embedded-opentype'),
      url('${fontFiles.TofinoProBlackWOFF2}') format('woff2'),
      url('${fontFiles.TofinoProBlackWOFF}') format('woff'),
      url('${fontFiles.TofinoProBlackTTF}') format('truetype');
    font-style: normal;
    font-weight: 800;
  }

  /* Condensed */
  @font-face {
    font-family: 'Tofino-Condensed';
    src: url('${fontFiles.TofinoProCondEOT}');
    src:
      local('Tofino Pro Personal Condensed'), local('Tofino-Pro-Personal-Condensed'),
      url('${fontFiles.TofinoProCondEOT}?#iefix') format('embedded-opentype'),
      url('${fontFiles.TofinoProCondWOFF2}') format('woff2'),
      url('${fontFiles.TofinoProCondWOFF}') format('woff'),
      url('${fontFiles.TofinoProCondTTF}') format('truetype');
    font-style: normal;
    font-weight: 500;
  }
`

export default Layout