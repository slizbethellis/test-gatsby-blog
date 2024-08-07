import React from 'react'
import { Link } from 'gatsby'

import Heading from './Heading'
import BlogThumbnail from './BlogThumbnail'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/* responsive card-like box with blog post title as link, an excerpt underneath, and a round thumbnail to the
right or bottom depending on media size; also takes custom heading level to comply with proper heading order */
const BlogCard = ({
  slug,
  hLevel,
  styles,
  postTitle,
  date,
  excerpt,
  altText,
  image
}) => {
  return (
    <article className='flex flex-col lg:flex-row items-center justify-center lg:space-x-3 pb-2 lg:pb-0 md:pr-3'>
      <div className='p-3 lg:p-6'>
        <Heading
          level={hLevel}
          className={classNames(styles.toString(), 'font-semibold hover:underline my-0')}
        >
          <Link to={slug}>
            {postTitle}
          </Link>
        </Heading>
        <span className='text-sm mt-1.5'>{date}</span>
        <p className='text-lg leading-6 my-4'>{excerpt}</p>
      </div>
      {image && <BlogThumbnail altText={altText} image={image} />}
    </article>
  )
}

export default BlogCard