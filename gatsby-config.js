require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Leslie R Crosby`,
    description: `Front-End Developer and Design Liason`,
    author: `@lesliespinach`,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, // default is false
          },
        },
      },
    },
    `gatsby-plugin-polished`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leslie R Crosby`,
        short_name: `Leslie R Crosby`,
        start_url: `/`,
        background_color: `#C75B43`,
        theme_color: `#C75B43`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.BASE_URL,
        hostingWPCOM: false,
        protocol: 'http',
        useACF: true,
        auth: {
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
        },
        verboseOutput: false,
        keepMediaSizes: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`, // make sure to keep it last in the array
  ],
}
