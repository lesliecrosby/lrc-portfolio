import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // TODO: keep working off https://www.orangejellyfish.com/blog/a-comprehensive-guide-to-images-in-gatsby/
  // if (data.placeholderImage.childImageSharp && data.placeholderImage.childImageSharp.fluid) {
  //   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  // }

  // if (data.placeholderImage.childImageSharp && data.placeholderImage.childImageSharp.fixed) {
  //   return <Img fixe={data.placeholderImage.childImageSharp.fixed} />
  // }

  // return <img src={data.placeholderImage.publicURL} />;

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
