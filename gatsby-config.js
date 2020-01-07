require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Leslie R Crosby`,
    description: `Front-End Developer and Design Liason`,
    author: `@roberl54`,
    siteUrl: `http://lesliercrosby.local`,
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
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.title,
                    description: edge.node.excerpt,
                    date: edge.node.date,
                    url: site.siteMetadata.siteUrl + "/blog/" + edge.node.slug,
                    guid: site.siteMetadata.siteUrl + "/blog/" + edge.node.slug,
                  }
                )
              })
            },
            query: `
              {
                allWordpressPost(sort: { fields: [date], order: DESC }) {
                  edges {
                    node {
                      title
                      excerpt
                      slug
                    }
                  }
                }
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Leslie R Crosby - RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-polished`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leslie R Crosby`,
        short_name: `Leslie R Crosby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
        {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'lesliercrosby.local',
        hostingWPCOM: false,
        protocol: 'https',
        useACF: true,
        // includedRoutes: [
        //   "**/categories",
        //   "**/comments",
        //   "**/posts",
        //   "**/pages",
        //   "**/media",
        //   "**/tags",
        //   "**/taxonomies",
        //   "**/projects",
        // ],
        auth: {
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
        },
        verboseOutput: false,
        keepMediaSizes: false,
        // use a custom normalizer which is applied after the built-in ones. (Map custom taxonomies to cpts)
        // normalizer: function({ entities }) {
        //   return entities
        // },
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "wordpressWpProjects",
        imagePath: "featured_media.source_url",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
    // 'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
