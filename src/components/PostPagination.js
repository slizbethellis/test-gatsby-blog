import React from 'react'
import { Box, Paragraph } from 'grommet'

import Link from './Link'

// basic prev page and next page links
const PostPagination = ({ pageContext }) => {
  const { previous, next } = pageContext
  const justifyContent = !previous ? "flex-end" : "space-between"

  return (
    <Box 
      alignSelf="center"
      width="100%"
    >
      <nav aria-label="pagination">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `center`,
            justifyContent: {justifyContent},
            listStyle: `none`,
            padding: 0
          }}
        >
          {previous && (
            <li key='1' style={{ padding: `0 0 1em` }}>
              <React.Fragment>
                <Paragraph size="small" margin={{ "bottom": "none", "left": "1.7em" }}>Previous</Paragraph>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </React.Fragment>
            </li>
          )}
          {next && (
            <li key='2' style={{ marginLeft: `auto`, padding: `0 0 1em`}}>
              <React.Fragment>
                <Paragraph size="small" margin={{ "bottom": "none", "right": "1.7em" }} textAlign="end" fill>Next</Paragraph>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </React.Fragment>
            </li>
          )}
        </ul>
      </nav>
    </Box>
  )
}

export default PostPagination