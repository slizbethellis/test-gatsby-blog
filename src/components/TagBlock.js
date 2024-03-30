import React from 'react'
import { Link } from 'gatsby'

import { Right } from './Icon'
import TagButtons from './TagButtons'

// group of featured tags for top level blog sidebar
const TagBlock = ({ tags }) => {
  const data = tags

  return (
    <div className='flex flex-col m-6'>
      <h2 className='text-center text-2xl font-bold'>Tags</h2>
      <TagButtons
        group={data.group}
        margin='xxsmall'
        size='small'
      />
      <Link className='self-center text-lg font-semibold' to='/tags'>
        all tags<Right className='inline-block h-4 w-4 ml-2 mb-1' aria-hidden='true' />
      </Link>
    </div>
  )
}

export default TagBlock