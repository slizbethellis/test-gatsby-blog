import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Heading } from 'grommet'

import FeatureBox from '../components/FeatureBox'
import HomeGallery from '../components/HomeGallery'
import Layout from '../components/Layout'
import Link from '../components/Link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.patterns
    const smallPosts = posts.slice(0,3)

    return (
      <Layout>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <HomeGallery posts={posts} smallPosts={smallPosts} />
        <Box
          as="section"
          direction="column"
          align="center"
          alignSelf="center"
          justify="center"
          width="xlarge"
          pad={{ "top": "xsmall", "bottom": "large", "horizontal": "small" }}
        >
          <Heading
            level={1}
            alignSelf="center"
            margin={{ "bottom": "small" }}
            size="small"
            textAlign="center"
          >
            (Adjective) Patterns for the (Adjective) Knitter
          </Heading>
          <Link to="/patterns" alignSelf="center" size="large">Browse all patterns</Link>
        </Box>
        {/* Blog feature */}
        <FeatureBox
          altText={data.blog.frontmatter.altText}
          excerpt={data.blog.excerpt}
          image={data.blog.frontmatter.image.childImageSharp.fixed}
          slug={data.blog.fields.slug}
          title={data.blog.frontmatter.title}
        />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object
  }),
}

export const IndexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    },
    patterns:allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___published] },
      limit: 4,
      filter: { frontmatter: { templateKey: { eq: "pattern-item" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fixed(height: 550) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            altText
          }
        }
      }
    },
    blog:markdownRemark(frontmatter: {title: {eq: "A beginners’ guide to brewing with Chemex"}}) {
      excerpt(pruneLength: 400)
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
`
