import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Box, Heading, Markdown, Paragraph } from 'grommet'

import Layout from '../components/Layout'
import RoutedButton from '../components/RoutedButton'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  markdown
}) => {
  const PostContent = contentComponent || Content

  return (
    <Box
      as="section"
      alignSelf="center"
      justify="center"
      width="xlarge"
      margin={{"horizontal": "large" }}
    >
      {helmet || ''}
      <Box width="xlarge"
        alignSelf="center"
        pad={{
          "top": "small",
          "bottom": "medium",
          "horizontal": "xlarge"
        }}
      >
        <Heading level={1} textAlign="center">{title}</Heading>
        <Paragraph fill>{description}</Paragraph>
        <Markdown
          components={{
            "p": {
              "props": {"fill": true}
            }
          }}
        >
          {markdown}
        </Markdown>
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
              {tags.map(tag => (
                <RoutedButton
                  to={`/tags/${kebabCase(tag)}/`}
                  margin="xsmall"
                  label={tag}
                />
              ))}
            </ul>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const BlogPost = ({ data, props }) => {
  const { markdownRemark: post } = data

  return (
    <Layout location={post.fields.slug}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog | ${data.site.siteMetadata.title}`} />}
        markdown={post.rawMarkdownBody}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

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
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
