import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { graphql } from 'gatsby'
import { Box } from 'grommet'

import Layout from '../components/Layout'
import Heading from '../components/Heading'
import RoutedButton from '../components/RoutedButton'
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
    <main className='items-center justify-center max-w-full my-7 md:my-10'>
      <article className='flex flex-col prose dark:prose-invert prose-lg prose-phthalo items-center px-6 md:px-24 pb-3 md:pb-6 max-w-[1152px]'>
        <Heading level={1} className='text-center'>{title}</Heading>
        <span className='text-center text-xl'>{date}</span>
        <div className='max-w-none'>
          <p>{description}</p>
          <Content contentAst={content} />
        </div>
      </article>
      <div className='max-w-[1152px] px-6 md:px-24'>
        <PostPagination pageContext={pageContext} />
        {tags && tags.length ? (
          <Box as="section" pad={{ "top": "small"}}>
            <Heading level={2} className='text-xl md:text-2xl font-semibold'>Tags</Heading>
            <ul
              className="tag=list"
              style={{
                listStyle: "none",
                display: "flex",
                flexFlow: "row wrap",
                paddingLeft: "0"
              }}
            >
              {tags.map((tag, index) => (
                <li key={index}>
                  <RoutedButton
                    to={`/tags/${_.kebabCase(tag)}/`}
                    margin="xsmall"
                    label={tag}
                  />
                </li>
              ))}
            </ul>
          </Box>
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

class BlogPost extends React.Component {
  render () {
    const data = this.props.data
    const { markdownRemark: post } = data
    const pageContext = this.props.pageContext

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
