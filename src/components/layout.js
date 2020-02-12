/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

// import "./fonts.css"
// import TofinoRegular from "../fonts/regular/TofinoProPersonal-Regular.woff2"

import Header from "./Header"
import Footer from "./Footer"
// import { breakpoints } from "../components/global-styles"
// import "./layout.css"
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
    query SiteTitleQuery {
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
      {/* <link rel="prefetch" href="../fonts/regular/TofinoProPersonal-Regular.woff2"/>
      <link rel="prefetch" href="../fonts/narrow/TofinoProPersonalNarrow-Regular.woff2"/>
      <link rel="prefetch" href="../fonts/wide/TofinoProPersonalWide-Regular.woff2"/>
      <link rel="prefetch" href="../fonts/cond/TofinoProPersonalCond-Regular.woff2"/>
      <link rel="prefetch" href="../fonts/text/TofinoProPersonalText-Regular.woff2"/> */}
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
  /* Regular */
  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Black.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Black.woff') format('woff');
  font-style: normal;
  font-weight: 800;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-BlackItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-BlackItalic.woff') format('woff');
  font-style: italic;
  font-weight: 800;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Bold.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Bold.woff') format('woff');
  font-style: normal;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-BoldItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-BoldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Book.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Book.woff') format('woff');
  font-style: normal;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-BookItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-BookItalic.woff') format('woff');
  font-style: italic;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Light.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Light.woff') format('woff');
  font-style: normal;
  font-weight: 200;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-LightItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-LightItalic.woff') format('woff');
  font-style: italic;
  font-weight: 200;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Medium.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Medium.woff') format('woff');
  font-style: normal;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-MediumItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-MediumItalic.woff') format('woff');
  font-style: italic;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-RegularItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-RegularItalic.woff') format('woff');
  font-style: italic;
  font-weight: 400;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Regular.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Regular.woff') format('woff');
  font-style: normal;
  font-weight: 400;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Semibold.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Semibold.woff') format('woff');
  font-style: normal;
  font-weight: 600;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-SemiboldItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-SemiboldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 600;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Thin.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Thin.woff') format('woff');
  font-style: normal;
  font-weight: 100;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-ThinItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-ThinItalic.woff') format('woff');
  font-style: italic;
  font-weight: 100;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-Ultra.woff2') format('woff2'),
  url('../fonts/regular/Tofino-Ultra.woff') format('woff');
  font-style: normal;
  font-weight: 900;
  }

  @font-face {
  font-family: "LT Tofino";
  src: url('../fonts/regular/TofinoProPersonal-UltraItalic.woff2') format('woff2'),
  url('../fonts/regular/Tofino-UltraItalic.woff') format('woff');
  font-style: italic;
  font-weight: 900;
  }

  /* Text */

  @font-face {
  font-family: "LT Tofino Text";
  src: url('../fonts/text/TofinoProPersonalText-Bold.woff2') format('woff2'),
  url('../fonts/text/TofinoText-Bold.woff') format('woff');
  font-style: normal;
  font-weight: 700;
  }


  @font-face {
  font-family: "LT Tofino Text";
  src: url('../fonts/text/TofinoProPersonalText-BoldItalic.woff2') format('woff2'),
  url('../fonts/text/TofinoText-BoldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino Text";
  src: url('../fonts/text/TofinoProPersonalText-Book.woff2') format('woff2'),
  url('../fonts/text/TofinoText-Book.woff') format('woff');
  font-style: normal;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino Text";
  src: url('../fonts/text/TofinoProPersonalText-BookItalic.woff2') format('woff2'),
  url('../fonts/text/TofinoText-BookItalic.woff') format('woff');
  font-style: italic;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino Text";
  src: url('../fonts/text/TofinoProPersonalText-Medium.woff2') format('woff2'),
  url('../fonts/text/TofinoText-Medium.woff') format('woff');
  font-style: normal;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino Text";
  src: url('../fonts/text/TofinoProPersonalText-MediumItalic.woff2') format('woff2'),
  url('../fonts/text/TofinoText-MediumItalic.woff') format('woff');
  font-style: italic;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino Text";
  src: url('../fonts/text/TofinoProPersonalText-RegularItalic.woff2') format('woff2'),
  url('../fonts/text/TofinoText-RegularItalic.woff') format('woff');
  font-style: italic;
  font-weight: 400;
  }

  /* Cond */

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-Bold.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-Bold.woff') format('woff');
  font-style: normal;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-BoldItalic.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-BoldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-Book.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-Book.woff') format('woff');
  font-style: normal;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-BookItalic.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-BookItalic.woff') format('woff');
  font-style: italic;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-Light.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-Light.woff') format('woff');
  font-style: normal;
  font-weight: 200;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-LightItalic.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-LightItalic.woff') format('woff');
  font-style: italic;
  font-weight: 200;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-Medium.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-Medium.woff') format('woff');
  font-style: normal;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-MediumItalic.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-MediumItalic.woff') format('woff');
  font-style: italic;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-RegularItalic.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-RegularItalic.woff') format('woff');
  font-style: italic;
  font-weight: 400;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-Semibold.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-Semibold.woff') format('woff');
  font-style: normal;
  font-weight: 600;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-SemiboldItalic.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-SemiboldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 600;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-Thin.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-Thin.woff') format('woff');
  font-style: normal;
  font-weight: 100;
  }

  @font-face {
  font-family: "LT Tofino Condensed";
  src: url('../fonts/cond/TofinoProPersonalCond-ThinItalic.woff2') format('woff2'),
  url('../fonts/cond/TofinoCond-ThinItalic.woff') format('woff');
  font-style: italic;
  font-weight: 100;
  }

  /* Narrow */

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-Black.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-Black.woff') format('woff');
  font-style: normal;
  font-weight: 800;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-BlackItalic.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-BlackItalic.woff') format('woff');
  font-style: italic;
  font-weight: 800;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-Bold.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-Bold.woff') format('woff');
  font-style: normal;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-BoldItalic.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-BoldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-Book.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-Book.woff') format('woff');
  font-style: normal;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-BookItalic.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-BookItalic.woff') format('woff');
  font-style: italic;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-Light.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-Light.woff') format('woff');
  font-style: normal;
  font-weight: 200;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-LightItalic.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-LightItalic.woff') format('woff');
  font-style: italic;
  font-weight: 200;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-Medium.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-Medium.woff') format('woff');
  font-style: normal;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-MediumItalic.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-MediumItalic.woff') format('woff');
  font-style: italic;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-RegularItalic.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-RegularItalic.woff') format('woff');
  font-style: italic;
  font-weight: 400;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-Semibold.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-Semibold.woff') format('woff');
  font-style: normal;
  font-weight: 600;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-SemiboldItalic.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-SemiboldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 600;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-Thin.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-Thin.woff') format('woff');
  font-style: normal;
  font-weight: 100;
  }

  @font-face {
  font-family: "LT Tofino Narrow";
  src: url('../fonts/narrow/TofinoProPersonalNarrow-ThinItalic.woff2') format('woff2'),
  url('../fonts/narrow/TofinoNarrow-ThinItalic.woff') format('woff');
  font-style: italic;
  font-weight: 100;
  }

  /* Wide */

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-Black.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-Black.woff') format('woff');
  font-style: normal;
  font-weight: 800;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-BlackItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-BlackItalic.woff') format('woff');
  font-style: italic;
  font-weight: 800;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-Bold.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-Bold.woff') format('woff');
  font-style: normal;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-BoldItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-BoldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 700;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-Book.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-Book.woff') format('woff');
  font-style: normal;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-BookItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-BookItalic.woff') format('woff');
  font-style: italic;
  font-weight: 300;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-Light.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-Light.woff') format('woff');
  font-style: normal;
  font-weight: 200;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-LightItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-LightItalic.woff') format('woff');
  font-style: italic;
  font-weight: 200;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-Medium.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-Medium.woff') format('woff');
  font-style: normal;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-MediumItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-MediumItalic.woff') format('woff');
  font-style: italic;
  font-weight: 500;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-RegularItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-RegularItalic.woff') format('woff');
  font-style: italic;
  font-weight: 400;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-Semibold.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-Semibold.woff') format('woff');
  font-style: normal;
  font-weight: 600;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-SemiboldItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-SemiboldItalic.woff') format('woff');
  font-style: italic;
  font-weight: 600;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-Thin.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-Thin.woff') format('woff');
  font-style: normal;
  font-weight: 100;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-ThinItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-ThinItalic.woff') format('woff');
  font-style: italic;
  font-weight: 100;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-Ultra.woff2') format('woff2');
  font-style: normal;
  font-weight: 900;
  }

  @font-face {
  font-family: "LT Tofino Wide";
  src: url('../fonts/wide/TofinoProPersonalWide-UltraItalic.woff2') format('woff2'),
  url('../fonts/wide/TofinoWide-UltraItalic.woff') format('woff');
  font-style: italic;
  font-weight: 900;
  }
  html {
    font-family:
    /* "LT Tofino",  */
    "Montserrat",
    sans-serif;
    font-weight: 400;
  }
  h1, .h1 {
    font-family: "LT Tofino Wide", sans-serif;
    font-style: normal;
    font-weight: 900;
  }
  h2, .h2 {
    font-family: "LT Tofino Wide", sans-serif;
    font-weight: 600;
  }
`

export default Layout
