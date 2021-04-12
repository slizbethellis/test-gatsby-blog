import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Heading } from 'grommet'

import FeatureBox from '../components/FeatureBox'
import HomeGallery from '../components/HomeGallery'
import Layout from '../components/Layout'
import RoutedButton from '../components/RoutedButton'

export default function IndexPage ({ data }) {
  const { edges: posts } = data.patterns

  return (
    <Layout>
      <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
      <HomeGallery posts={posts} />
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
          margin={{ "bottom": "medium" }}
          size="44px"
          textAlign="center"
        >
          (Adjective) Patterns for the (Adjective) Knitter
        </Heading>
        <RoutedButton primary to="/patterns" alignSelf="center" label="Browse all patterns"/>
        {/* <Link to="/patterns" alignSelf="center" size="large">Browse all patterns</Link> */}
      </Box>
      {/* Blog feature */}
      <FeatureBox
        altText={data.blog.frontmatter.altText}
        boxTitle="Featured Blog Post"
        excerpt={data.blog.excerpt}
        image={data.blog.frontmatter.image.childImageSharp.gatsbyImageData}
        slug={data.blog.fields.slug}
        postTitle={data.blog.frontmatter.title}
      />
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object
  }),
}

export const IndexQuery = graphql`query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  patterns: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___published]}
    limit: 4
    filter: {frontmatter: {templateKey: {eq: "pattern-item"}}}
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
              gatsbyImageData(height: 550, layout: FIXED)
            }
          }
        }
      }
    }
  }
  blog: markdownRemark(
    frontmatter: {title: {eq: "A beginners’ guide to brewing with Chemex"}}
  ) {
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
          gatsbyImageData(width: 200, height: 200, layout: FIXED)
        }
      }
      altText
    }
  }
}
`