import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Heading } from 'grommet'

import Link from './Link'
import TagButtons from './TagButtons'

// group of featured tags for top level blog sidebar
const TagBlock = ({ size }) => (
  <StaticQuery
    query={graphql`
      query TagBlockQuery {
        allMarkdownRemark(
          limit: 20,
          filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <Box 
        alignSelf="center"
        border={{ 
          "side": (size !== "small" ? "bottom" : "horizontal"),
          "color": (size !== "small" ? "border" : { dark: "light-4", light: "dark-4" }) }}
        pad={size !== "small" ? "none" : "medium"}
      >
        <Heading level={2} size="small" textAlign="center">Tags</Heading>
        <TagButtons
          group={data.allMarkdownRemark.group}
          margin="xxsmall"
          size="small"
        />
        <Link alignSelf="center" margin={{"bottom": "1.5rem"}} to="/tags">
          all tags →
        </Link>
      </Box>
    )}
  />
)

export default TagBlock