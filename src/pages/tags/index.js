import React from 'react'
import { graphql } from 'gatsby'
import { Box, Heading } from 'grommet'

import Layout from '../../components/Layout'
import TagButtons from '../../components/TagButtons'

const TagsPage = ({
  data: { allMarkdownRemark: { group } }
}) => (
  <Layout>
    <Box
      as="section"
      alignSelf="center"
      justify="center"
      width="full"
    >
      <Heading level={1} alignSelf="center" textAlign="center">Tags</Heading>
      <Box alignSelf="center" margin={{"horizontal": "large" }}>
        <TagButtons
          group={group}
          margin="xsmall"
        />
      </Box>
    </Box>
  </Layout>
)

export default TagsPage

export const Head = ({ data: { site: { siteMetadata: { title } } } }) => {
  return (
    <title>{`Tags | ${title}`}</title>
  )
}

export const tagPageQuery = graphql`query TagsQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    limit: 1000
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
  ) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`
