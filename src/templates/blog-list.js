import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import BlogCard from '../components/BlogCard'
import Layout from '../components/Layout'
import ListPagination from '../components/ListPagination'
import Sidebar from '../components/Sidebar'

const BlogPosts = ({ posts, pageContext }) => (
  <section className='justify-start max-w-full'>
    <div className='self-start space-y-1 divide-y divide-phthalo-600 dark:divide-phthalo-200/50 border-b border-phthalo-600 dark:border-phthalo-200/50 mx-3 md:mx-6'>
      {posts
        .map(({ node: post }) => (
          <BlogCard
            slug={post.fields.slug}
            hLevel={2}
            styles='text-2xl md:font-3xl'
            postTitle={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            altText={post.frontmatter.altText}
            image={post.frontmatter.image && post.frontmatter.image.childImageSharp.gatsbyImageData}
            key={post.id}
          />
      ))}
    </div>
    {/* Pagination component will not render if there's only one page */}
    {pageContext.numPages > 1 && (
      <div className='mx-3 md:mx-6'>
        <ListPagination pageContext={pageContext} path='/blog'/>
      </div>
    )}
  </section>
)

const BlogPage = ({ data, pageContext }) => {
  const posts = data.posts.edges

  return (
    <Layout>
      <div className='flex flex-col w-full my-7 md:my-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full justify-items-center md:gap-3 max-w-(--breakpoint-2xl)'>
          <main className='md:col-span-2 lg:col-span-3'>
            <h1 className='text-center text-5xl font-bold mb-7'>Blog</h1>
            <BlogPosts posts={posts} pageContext={pageContext} />
          </main>
          <Sidebar tags={data.tags} />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const Head = ({ data }) => {
  return (
    <title>{`Blog | ${data.site.siteMetadata.title}`}</title>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
    tags: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
    site: PropTypes.object
  }),
}

export const pageQuery = graphql`query BlogQuery($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      title
    }
  }
  posts: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
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
  tags: allMarkdownRemark(
    limit: 20
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
  ) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`