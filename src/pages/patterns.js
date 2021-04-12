import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Grid, Heading, ResponsiveContext } from 'grommet'

import Layout from '../components/Layout'
import PatternCard from '../components/PatternCard'

export default function PatternPage ({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  const size = useContext(ResponsiveContext)
  
  return (
    <Layout>
      <Helmet title={`Patterns | ${data.site.siteMetadata.title}`} />
      <Box
        as="section"
        alignSelf="center"
        justify="center"
        fill
      >
        <Heading level={1} alignSelf="center" textAlign="center">Patterns</Heading>
        <Grid
          as="ul"
          columns={size !== 'small' ? '300px' : '100%'}
          gap="small"
          margin={{ "bottom": "large", "horizontal": "medium" }}
          style={{
            listStyle: "none",
            paddingLeft: "0",
            marginTop: "0"
          }}
        >
          {posts
            .map(({ node: post }) => (
              <PatternCard
                key={post.id}
                slug={post.fields.slug}
                title={post.frontmatter.title}
                image={post.frontmatter.image}
                altText={post.frontmatter.altText}
              />
            ))}
        </Grid>
      </Box>
    </Layout>
  )
}

PatternPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    site: PropTypes.object
  }),
}

export const PageQuery = graphql`query PatternPage {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___published]}
    filter: {frontmatter: {templateKey: {eq: "pattern-item"}}}
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
          published(formatString: "MMMM DD, YYYY")
          image {
            childImageSharp {
              gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
            }
          }
          altText
        }
      }
    }
  }
}
`