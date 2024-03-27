import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'



const TagButtons = ({ group, margin, size }) => {
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const listClasses = classNames('flex flex-wrap place-content-center',
  margin === 'medium' ?
  'gap-x-2.5 gap-y-5' :
  'gap-x-1 gap-y-3')

  const linkClasses = classNames('border-2 border-lila-800 dark:border-fuzz-300 rounded-full text-phthalo-900 dark:text-phthalo-100 hover:no-underline hover:bg-phthalo-100 hover:dark:bg-phthalo-800 hover:text-black hover:dark:text-white hover:ring-2 hover:ring-lila-800 dark:hover:ring-fuzz-300 text-semibold px-4 py-1',
  !size ?
  'text-lg' :
  'text-sm')

  return (
    <ul
      className={listClasses}
    >
      {group.map((tag, index) => (
        <li key={index}>
          <Link
            to={`/tags/${_.kebabCase(tag.fieldValue)}/`}
            className={linkClasses}
          >
            {`${tag.fieldValue} (${tag.totalCount})`}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TagButtons