import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Box, Heading, Paragraph, ResponsiveContext, Text } from 'grommet'

import Layout from '../components/Layout'
import RoutedButton from '../components/RoutedButton'
import Content from '../components/Content'

const BlogPostTemplate = ({
  content,
  description,
  tags,
  title,
  date,
  helmet
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
        "top": "small",
        "bottom": "medium",
        "horizontal": boxPad
      }}
    >
      {helmet || ''}
      <Heading level={1} textAlign="center">{title}</Heading>
      <Text size="large" textAlign="center">{date}</Text>
      <Box border="bottom">
        <Paragraph fill>{description}</Paragraph>
        <Content contentAst={content} fill/>
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
  helmet: PropTypes.object
}

const BlogPost = ({ data, props }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.htmlAst}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog | ${data.site.siteMetadata.title}`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
