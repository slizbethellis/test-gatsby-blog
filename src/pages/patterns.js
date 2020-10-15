import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Box, Card, CardBody, CardHeader, Grid, Heading, ResponsiveContext } from 'grommet'

import Layout from '../components/Layout'
import Link from '../components/Link'

export const PatternPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const size = useContext(ResponsiveContext)
  
  return (
    <Layout>
      <Helmet title={`Patterns | ${data.site.siteMetadata.title}`} />
      <Box
        as="section"
        alignSelf="center"
        justify="center"
        width="full"
      >
        <Heading level={1} alignSelf="center" textAlign="center">Patterns</Heading>
        <Grid
          columns={size !== 'small' ? '300px' : '100%'}
          gap="small"
          margin={{ "bottom": "large", "horizontal": "medium" }}
        >
          {posts
            .map(({ node: post }) => (
              <Card
                as="article"
                key={post.id}
                hoverIndicator="light-3"
              >
                <CardHeader justify="center">
                  <Heading level={2} size="small">
                    <Link to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </Heading> 
                </CardHeader>
                <CardBody style={{ order: "-1"}}>
                  <Img
                    fluid={post.frontmatter.image.childImageSharp.fluid}
                    alt={post.frontmatter.altText}
                  />
                </CardBody>
              </Card>
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

export const PageQuery = graphql`
  query PatternPage {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___published] },
      filter: { frontmatter: { templateKey: { eq: "pattern-item" } }}
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
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid_withWebp
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

export default PatternPage