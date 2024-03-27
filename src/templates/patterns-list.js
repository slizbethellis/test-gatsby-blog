import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PatternCard from '../components/PatternCard'
import ListPagination from '../components/ListPagination'

const PatternPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(pageContext)
    
  return (
    <Layout>
      <main className='items-center justify-items-center w-full my-7 md:my-10'>
        <h1 className='text-center text-5xl leading-none font-bold mb-10'>Patterns</h1>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-3 mx-3 sm:mx-6'>
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
        </ul>
        {/* Pagination component will not render if there's only one page */}
        {pageContext.numPages > 1 && (
          <div className='border-t border-phthalo-200 dark:border-phthalo-700/50 mt-6 mx-6 sm:mx-12'>
            <ListPagination pageContext={pageContext} path="/patterns" />
          </div>
        )}
      </main>
    </Layout>
  )
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