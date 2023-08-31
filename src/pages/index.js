import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Box, Heading } from 'grommet'

import FeatureBox from '../components/FeatureBox'
import HomeGallery from '../components/HomeGallery'
import Layout from '../components/Layout'
import RoutedButton from '../components/RoutedButton'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.patterns

  return (
    <Layout>
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
          Modern Patterns for Knitters and Crocheters
        </Heading>
        <RoutedButton primary to="/patterns" alignSelf="center" label="Browse all patterns"/>
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

export default IndexPage

export const Head = ({ data }) => {
  return (
    <title>{`Home | ${data.site.siteMetadata.title}`}</title>
  )
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
    sort: {frontmatter: {date: DESC}}
    limit: 5
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
          pattImage {
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
}`