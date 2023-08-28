import React from 'react'
import { Box } from 'grommet'

import Link from './Link'

// prev page and next page links, will be updated to add numeric dropdown
const ListPagination = ({ pageContext, path }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `${path}` : `${path}/${(currentPage - 1).toString()}`
  const nextPage = `${path}/${(currentPage + 1).toString()}`

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
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {!isFirst && (
            <li key={currentPage - 1}>
                <Link to={prevPage} rel="prev">
                  ← Previous Page
                </Link>
            </li>
          )}
          {!isLast && (
            <li key={currentPage + 1} style={{ marginLeft: `auto`, padding: `0 0 1em`}}>
                <Link to={nextPage} rel="next">
                  Next Page →
                </Link>
            </li>
          )}
        </ul>
      </nav>
    </Box>
  )
}

export default ListPagination