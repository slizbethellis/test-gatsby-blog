const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const webpack = require(`webpack`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      postsRemark: allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
        nodes {
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
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT }}) {
          fieldValue
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    const posts = result.data.postsRemark.nodes
    // filter by template category so pagination doesn't mix blog posts and pattern pages
    const aboutPage = posts.filter(node => node.frontmatter.templateKey === "about-page")
    const blogPosts = posts.filter(node => node.frontmatter.templateKey === "blog-post")
    const linksPage = posts.filter(node => node.frontmatter.templateKey === "links")
    const patternItems = posts.filter(node => node.frontmatter.templateKey === "pattern-item")
    const postsArray = [ aboutPage, blogPosts, linksPage, patternItems ]

    // turns all queried items into pages
    postsArray.forEach(arr => {
      arr.forEach((node, index) => {
        const postTemplate = path.resolve(`./src/templates/${node.frontmatter.templateKey}.js`)
        const id = node.id
        const previous = index === arr.length - 1 ? null : arr[index + 1]
        const next = index === 0 ? null : arr[index - 1]
        createPage({
          path: node.fields.slug,
          component: postTemplate,
          // additional data can be passed via context
          context: {
            id,
            previous,
            next
          },
        })
      })
    })


    // Extract tag data from query
    const tags = result.data.tagsGroup.group
    
    // template path for tag pages
    const tagTemplate = path.resolve(`./src/templates/tags.js`)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
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
    postListArray.forEach(node => {
      Array.from({ length: node.numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `${node.path}` : `${node.path}/${i + 1}`,
          component: path.resolve(`./src/templates/${node.template}.js`),
          context: {
            limit: node.postsPerPage,
            skip: i * node.postsPerPage,
            numPages: node.numPages,
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

// disable netlify-identity widget
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^netlify-identity-widget$/,
      }),
    ],
  })
}
