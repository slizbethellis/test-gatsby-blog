import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Box, Grid, Heading, ResponsiveContext } from 'grommet'

import Layout from '../components/Layout'
import PatternCard from '../components/PatternCard'
import ListPagination from '../components/ListPagination'

class PatternPage extends React.Component {
  render () {
    const data = this.props.data
    const posts = data.allMarkdownRemark.edges
    const pageContext = this.props.pageContext
    
    return (
      <Layout>
        <Box
          as="section"
          alignSelf="center"
          justify="center"
          fill
        >
          <Heading level={1} alignSelf="center" textAlign="center">Patterns</Heading>
          <ResponsiveContext.Consumer>
            {size => (
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
                      image={post.frontmatter.pattImage}
                      altText={post.frontmatter.pattAltText}
                    />
                  ))}
              </Grid>
            )}
          </ResponsiveContext.Consumer>
          {/* Pagination component will not render if there's only one page */}
          {pageContext.numPages > 1 && (
            <Box margin={{"horizontal": "medium"}}>
              <ListPagination pageContext={pageContext} path="/patterns" />
            </Box>
          )}
        </Box>
      </Layout>
    )
  }
}

export default PatternPage

export const Head = ({ data }) => {
  return (
    <title>{`Patterns | ${data.site.siteMetadata.title}`}</title>
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

export const PageQuery = graphql`query PatternPage($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {templateKey: {eq: "pattern-item"}}}
    limit: $limit
    skip: $skip
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
          pattImage {
            childImageSharp {
              gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
            }
          }
          pattAltText
        }
      }
    }
  }
}`