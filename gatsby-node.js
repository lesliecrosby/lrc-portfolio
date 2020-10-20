/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress posts (route : /blog/{slug})
// Will create pages for WordPress projects (route : /projects/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const wpPosts = await graphql(`
    {
      posts {
        edges {
          node {
            id
            wordpress_id
            slug
            status
          }
        }
      }
      projects {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
      pages {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
      experiencePage: pages(where: {id: 46}) {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)

  // Check for any errors
  if (wpPosts.errors) {
    throw new Error(wpPosts.errors)
  }

  // Access query wpPosts via object destructuring
  const { posts } = wpPosts.data
  const { projects } = wpPosts.data
  const { pages } = wpPosts.data
  // const pages = wpPosts.data.allPages
  const experiencePage = wpPosts.data.experiencePage

  const postTemplate = path.resolve(`./src/templates/singlePost.js`)
  const projectsTemplate = path.resolve(`./src/templates/singleProject.js`)
  const pageTemplate = path.resolve(`./src/templates/singlePage.js`)
  const experienceTemplate = path.resolve(`./src/templates/experiencePage.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  posts.edges.forEach( edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        postId: edge.node.databaseId,
      },
    })
  })
  projects.edges.forEach( (edge, index) => {
    const previous = index === 0 ? null : projects.edges[index - 1].node
    const next = index === projects.edges.length - 1 ? null : allWordpressWpProjects.edges[index + 1].node

    createPage({
      path: `/projects/${edge.node.slug}/`,
      component: slash(projectsTemplate),
      context: {
        id: edge.node.id,
        previous,
        next,
      },
    })
  })
  pages.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      }
    })
  })
  experiencePage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(experienceTemplate),
      context: {
        id: edge.node.id,
      }
    })
  })
}