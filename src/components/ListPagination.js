import React from 'react'
import { Box } from 'grommet'

import Link from './Link'

// prev page and next page links, will be updated to add numeric dropdown
const ListPagination = ({ pageContext }) => {
  const { currentPage, numBlogPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numBlogPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`

  return (
    <Box 
      alignSelf="center"
      width="100%"
    >
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li key={currentPage - 1}>
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
        </li>
        <li key={currentPage + 1}>
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </li>
      </ul>
    </Box>
  )
}

export default ListPagination