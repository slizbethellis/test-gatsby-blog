import React from 'react'
import { kebabCase } from 'lodash'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Heading } from 'grommet'

import Link from './Link'
import RoutedButton from './RoutedButton'

const TagBlock = () => (
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
      <Box alignSelf="center" border="bottom">
        <Heading level={2} size="small" textAlign="center">Tags</Heading>
        <ul
          className="tag-list"
          style={{
            listStyle: "none",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            margin: "0 auto 0.5rem",
            paddingLeft: "0"
          }}
        >
          {data.allMarkdownRemark.group.map((tag, index) => (
            <li>
              <RoutedButton
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                margin="xxsmall"
                size="small" key={index}
                label={`${tag.fieldValue} (${tag.totalCount})`}
              />
            </li>
            
          ))}
        </ul>
        <Link alignSelf="center" margin={{"bottom": "1.5rem"}} to="/tags">
          all tags →
        </Link>
      </Box>
    )}
  />
)

export default TagBlock