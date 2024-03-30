import React from 'react'
import { Link } from 'gatsby'

import { Left, Right } from './Icon'

// prev page and next page links, will be updated to add numeric dropdown
const ListPagination = ({ pageContext, path }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `${path}` : `${path}/${(currentPage - 1).toString()}`
  const nextPage = `${path}/${(currentPage + 1).toString()}`

  return (
    <div className='max-w-full'>
      <nav aria-label='pagination'>
        <div className='flex flex-wrap items-start justify-between mt-4'>
          {!isFirst && (
            <div key={currentPage - 1} className='mr-auto'>
              <Link to={prevPage} rel='prev' className='text-lg font-semibold'>
                <Left className='inline-block h-4 w-4 mr-2 mb-1' aria-hidden='true' />Previous Page
              </Link>
            </div>
          )}
          {!isLast && (
            <div key={currentPage + 1} className='ml-auto'>
              <Link to={nextPage} rel='next' className='text-lg font-semibold'>
                Next Page<Right className='inline-block h-4 w-4 ml-2 mb-1' aria-hidden='true' />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default ListPagination