import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'



const TagButtons = ({ group, margin, size }) => {
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const listClasses = classNames('flex flex-wrap justify-center',
  margin === 'medium' ?
  'gap-x-2.5 gap-y-5' :
  'gap-x-1.5 gap-y-4 mt-5 mb-4')

  const linkClasses = classNames('border-2 border-lila-900 dark:border-fuzz-300 rounded-full text-phthalo-900 dark:text-phthalo-100 hover:no-underline hover:ring-2 hover:border-lila-700 hover:ring-lila-700 dark:hover:border-fuzz-200 dark:hover:ring-fuzz-200 text-semibold py-1',
  !size ?
  'text-lg px-3' :
  'text-sm px-2')

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