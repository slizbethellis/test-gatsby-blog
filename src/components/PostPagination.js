import React from 'react'
import { Link } from 'gatsby'

import { Left, Right } from './Icon'

// basic prev page and next page links
const PostPagination = ({ pageContext }) => {
  const { previous, next } = pageContext

  return (
    <div className='self-center w-full mx-3 md:mx-0 print:hidden'>
      <nav aria-label='pagination'>
        <div className='flex flex-wrap items-start justify-between mt-4'>
          {previous && (
            <div key='1' className='text-left md:w-[48%] mr-auto my-4'>
              <Link to={previous.fields.slug} rel='prev' className='hover:no-underline'>
                <p className='text-sm text-phthalo-900 dark:text-phthalo-100 ml-6'>Previous</p>
                <span className='flex flex-row place-content-start text-semibold text-lg hover:underline'>
                  <Left className='inline-block h-4 w-4 mr-2 mt-1.5' aria-hidden='true' />
                  {previous.frontmatter.title}
                </span>
              </Link>
            </div>
          )}
          {next && (
            <div key='2' className='text-right md:w-[48%] ml-auto my-4'>
              <Link to={next.fields.slug} rel='next' className='hover:no-underline'>
                <p className='text-sm text-phthalo-900 dark:text-phthalo-100 mr-6'>Next</p>
                <span className='flex flex-row place-content-end text-semibold text-lg hover:underline'>
                  {next.frontmatter.title}
                  <Right className='inline-block h-4 w-4 ml-2 mt-1.5' aria-hidden='true' />
                </span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default PostPagination