import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const TagRoute = ({
  data,
  pageContext
}) => {
  const { edges: posts } = data.allMarkdownRemark
  const totalCount = data.allMarkdownRemark.totalCount
  const tag = pageContext.tag
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`
  
  return (
    <Layout>
      <main className='flex flex-col max-w-full my-7 md:my-10'
      >
        <h1 className='text-center text-5xl leading-none font-bold mb-10'>{tagHeader}</h1>
        <section className='flex flex-col self-center w-full'>
          <div className='space-y-5 divide-y divide-phthalo-600 dark:divide-phthalo-200/50 border-b border-phthalo-600 dark:border-phthalo-200/50 mx-6 md:mx-12 max-w-prose'>
            {posts.map((datum, index) => (
              <article key={index} className='[&:first-child]:pt-0 pt-5'>
                <h2 className='text-2xl'>
                  <Link to={datum.node.fields.slug}>
                    {datum.node.frontmatter.title}
                  </Link>
                </h2>
                <span className='text-sm mt-1.5'>{datum.node.frontmatter.date}</span>
                <p className='text-lg leading-6 mt-2.5 mb-5'>{datum.node.excerpt}</p>
              </article>
            ))}
          </div>
          <div className='self-center mt-10'>
            <Link to='/tags' className='rounded-full text-lg font-bold bg-lila-900 text-fuzz-50 px-6 py-2 dark:bg-fuzz-300 dark:text-phthalo-950 hover:no-underline hover:bg-lila-700 dark:hover:bg-fuzz-200'>Browse all tags</Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default TagRoute

export const Head = ({ data, pageContext }) => {
  const tag = pageContext.tag

  return (
    <title>{`${tag} | ${data.site.siteMetadata.title}`}</title>
  )
}

export const tagPageQuery = graphql`query TagPage($tag: String) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    limit: 1000
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
  ) {
    totalCount
    edges {
      node {
        excerpt(pruneLength: 200)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}`
