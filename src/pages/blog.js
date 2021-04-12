import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Grid, Heading, ResponsiveContext } from 'grommet'

import BlogPreview from '../components/BlogPreview'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import TagBlock from '../components/TagBlock'

const BlogPosts = ({ posts }) => (
  <Box
    as="section"
    gap="small"
    pad={{ "horizontal": "medium" }}
    border={{ "color": { dark: "light-4", light: "dark-4" }, "side": "between" }}
  >
    {posts
      .map(({ node: post }) => (
        <BlogPreview
          slug={post.fields.slug}
          hLevel={2}
          hSize="small"
          postTitle={post.frontmatter.title}
          date={post.frontmatter.date}
          excerpt={post.excerpt}
          altText={post.frontmatter.altText}
          image={post.frontmatter.image && post.frontmatter.image.childImageSharp.gatsbyImageData}
          key={post.id}
        />
      ))}
  </Box>
)

export default function BlogPage ({ data }) {
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
                <Search searchIndex={data.siteSearchIndex.index} size={responsive} />
                <BlogPosts posts={posts}/>
                <TagBlock size={responsive} />
              </Box>
            ) : (
              <Grid
                columns={['3/4', '1/4']}
                gap="small"
                margin={{ "bottom": "large", "horizontal": "medium" }}
              >
                <BlogPosts posts={posts} />
                <Sidebar searchIndex={data.siteSearchIndex.index} size={responsive} />
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

export const pageQuery = graphql`query BlogQuery {
  site {
    siteMetadata {
      title
    }
  }
  siteSearchIndex {
    index
  }
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
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
              gatsbyImageData(width: 200, height: 200, layout: FIXED)
            }
          }
          altText
        }
      }
    }
  }
}
`