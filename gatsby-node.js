const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    // filter by template category so pagination doesn't mix blog posts and pattern pages
    const aboutPage = posts.filter(edge => edge.node.frontmatter.templateKey === "about-page")
    const blogPosts = posts.filter(edge => edge.node.frontmatter.templateKey === "blog-post")
    const patternItems = posts.filter(edge => edge.node.frontmatter.templateKey === "pattern-item")
    const postsArray = [ aboutPage, blogPosts, patternItems ]

    // turns all queried items into pages
    postsArray.forEach(arr => {
      arr.forEach((edge, index) => {
        const id = edge.node.id
        const previous = index === arr.length - 1 ? null : arr[index + 1].node
        const next = index === 0 ? null : arr[index - 1].node
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            previous,
            next
          },
        })
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

    // Array to set up data needed to generate pagination for list of blog posts and patterns
    const postListArray = [
      {
        path: "/blog",
        template: "blog-list",
        postsPerPage: 2,
        numPages: Math.ceil(blogPosts.length / 2)
      },
      {
        path: "/patterns",
        template: "patterns-list",
        postsPerPage: 24,
        numPages: Math.ceil(patternItems.length / 24)
      }
    ]

    // Create paginated list pages for blog and patterns, posts per blog page on test set lower than value for production, because any higher value would generate a single page
    postListArray.forEach(edge => {
      Array.from({ length: edge.numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `${edge.path}` : `${edge.path}/${i + 1}`,
          component: path.resolve(`./src/templates/${edge.template}.js`),
          context: {
            limit: edge.postsPerPage,
            skip: i * edge.postsPerPage,
            numPages: edge.numPages,
            currentPage: i + 1,
          },
        })
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
