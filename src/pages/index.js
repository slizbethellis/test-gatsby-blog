import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import FeatureBox from '../components/FeatureBox'
import HomeGallery from '../components/HomeGallery'
import Layout from '../components/Layout'
import RoutedButton from '../components/RoutedButton'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.patterns

  return (
    <Layout>
      <main className='items-center justify-center max-w-full'>
        <HomeGallery posts={posts} />
        <section className='flex flex-col mx-auto items-center justify-center mt-4 sm:mt-11 mb-6 sm:mb-12'>
          <h1 className='text-center text-[44px] leading-[60px] font-semibold mx-3 mb-3 sm:mb-6'>Modern Patterns for Knitters and Crocheters</h1>
          <RoutedButton
            to='/patterns'
            className='justify-self-center rounded-full text-lg font-semibold bg-lila-900 text-fuzz-50 px-6 py-1 dark:bg-fuzz-300 dark:text-phthalo-950'
          >
            Browse all patterns
          </RoutedButton>
        </section>
      </main>
      {/* Blog feature */}
      <FeatureBox
        altText={data.blog.frontmatter.altText}
        boxTitle='From the Blog'
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