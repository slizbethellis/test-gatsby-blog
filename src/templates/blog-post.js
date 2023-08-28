import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash/kebabCase'
import { graphql } from 'gatsby'
import { Box, Heading, Paragraph, ResponsiveContext, Text } from 'grommet'

import Layout from '../components/Layout'
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
  const size = useContext(ResponsiveContext)
  const boxPad = (size !== 'small' ? "xlarge" : "large")

  return (
    <Box
      as="section"
      alignSelf="center"
      justify="center"
      width="xlarge"
      pad={{
        "top": "none",
        "bottom": "medium",
        "horizontal": boxPad
      }}
    >
      <Heading level={1} textAlign="center">{title}</Heading>
      <Text size="large" textAlign="center">{date}</Text>
      <Box border="bottom">
        <Paragraph fill>{description}</Paragraph>
        <Content contentAst={content} fill/>
        <PostPagination pageContext={pageContext} />
      </Box>
      {tags && tags.length ? (
        <Box as="section" pad={{ "top": "small"}}>
          <Heading level={2} size="small">Tags</Heading>
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
                  to={`/tags/${kebabCase(tag)}/`}
                  margin="xsmall"
                  label={tag}
                />
              </li>
            ))}
          </ul>
        </Box>
      ) : null}
    </Box>
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
