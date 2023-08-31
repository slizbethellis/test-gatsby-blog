import React from 'react'
import { graphql } from 'gatsby'
import { Box, Heading, List } from 'grommet'

import Layout from '../components/Layout'
import Link from '../components/Link'
import RoutedButton from '../components/RoutedButton'

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
      <Box
        as="section"
        alignSelf="center"
        justify="center"
        width="full"
      >
        <Heading level={1} alignSelf="center" textAlign="center">{tagHeader}</Heading>
        <Box alignSelf="center" alignContent="center" margin={{"horizontal": "large" }}>
          <List data={posts}>
            {(datum, index) => (
              <Link key={index} to={datum.node.fields.slug} pad="xsmall">
                <Heading level={2} size="small">{datum.node.frontmatter.title}</Heading>
              </Link>
            )}
          </List>
          <Box align="center">
            <RoutedButton primary to="/tags/" margin="medium" label="Browse all tags" />
          </Box>
        </Box>
      </Box>
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
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}`
