import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Grid, Heading, ResponsiveContext } from 'grommet'

import BlogPreview from '../components/BlogPreview'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

const BlogPosts = ({ posts }) => (
  <Box as="section" gap="small" pad={{ "horizontal": "medium" }}>
    {posts
      .map(({ node: post }) => (
        <BlogPreview
          slug={post.fields.slug}
          hLevel={2}
          hSize="small"
          postTitle={post.frontmatter.title}
          excerpt={post.excerpt}
          altText={post.frontmatter.altText}
          image={post.frontmatter.image && post.frontmatter.image.childImageSharp.fixed}
          key={post.id}
          background={{dark: "dark-1", light: "light-1"}}
          elevation="xsmall"
          round="medium"
        />
      ))}
  </Box>
)

export const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <Helmet title={`Blog | ${data.site.siteMetadata.title}`} />
      <Box
        as="section"
        alignSelf="center"
        justify="center"
        width="full"
      >
        <Heading level={1} alignSelf="center" textAlign="center">Blog</Heading>
        <ResponsiveContext.Consumer>
          {responsive =>
            responsive === 'small' ? (
              <Box margin={{ "bottom": "large" }}>
                <Sidebar size={responsive}/>
                <BlogPosts posts={posts}/>
              </Box>
            ) : (
              <Grid
                columns={['3/4', '1/4']}
                gap="small"
                margin={{ "bottom": "large", "horizontal": "medium" }}
              >
                <BlogPosts posts={posts} />
                <Sidebar size={responsive}/>
              </Grid>
            )
          }
        </ResponsiveContext.Consumer>
      </Box>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    site: PropTypes.object
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            altText
          }
        }
      }
    }
  }
`

export default BlogPage