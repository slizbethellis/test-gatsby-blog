import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content from '../components/Content'
import PostPagination from '../components/PostPagination'

const BlogPostTemplate = ({
  content,
  description,
  tags,
  title,
  date,
  pageContext
}) => {
  return (
    <main className='justify-self-center max-w-full my-7 md:my-10'>
      <article className='flex flex-col prose dark:prose-invert prose-lg prose-phthalo items-center px-6 md:px-24 pb-3 md:pb-6 max-w-full min-[1152px]:max-w-6xl'>
        <h1 className='text-center'>{title}</h1>
        <span className='text-center text-xl'>{date}</span>
        <div className='max-w-full overflow-auto'>
          <p>{description}</p>
          <Content contentAst={content} />
        </div>
      </article>
      <div className='flex flex-col max-w-[1152px] px-6 md:px-24'>
        <PostPagination pageContext={pageContext} />
        {tags && tags.length ? (
          <section className='self-center border-t border-phthalo-600 dark:border-phthalo-200/50 w-full pt-4 md:pt-6'>
            <h2 className='text-center text-xl md:text-2xl font-semibold pb-4'>Tags</h2>
            <ul className='flex flex-wrap place-content-center gap-x-2 gap-y-5'>
              {tags.map((tag, index) => (
                <li key={index}>
                  <Link
                    to={`/tags/${_.kebabCase(tag)}/`}
                    className='border-2 border-lila-900 dark:border-fuzz-300 rounded-full text-phthalo-900 dark:text-phthalo-100 hover:no-underline hover:ring-2  hover:ring-lila-700 dark:hover:ring-fuzz-200 hover:border-lila-700 hover:dark:border-fuzz-200 text-semibold px-3 py-1'
                  >{tag}</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.object.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
}

const BlogPost = ({ data, pageContext}) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.htmlAst}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        pageContext={pageContext}
      />
    </Layout>
  )
}

export default BlogPost

export const Head = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <title>{`${post.frontmatter.title} | Blog | ${data.site.siteMetadata.title}`}</title>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    },
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
