import React from 'react'

import BlogCard from './BlogCard'

// styled box for featured blog post on home page
const FeatureBox = ({ altText, boxTitle, excerpt, image, slug, postTitle}) => (
  <section className='flex flex-col items-center justify-center w-full bg-lila-200 dark:bg-phthalo-800 text-phthalo-950 dark:text-phthalo-50 px-12 lg:px-24 pt-3 pb-9 md:py-3 lg:py-6'>
    <div className='max-w-5xl'>
      <h2 className='text-center font-semibold text-2xl md:text-4xl m-3 md:m-6'>{boxTitle}</h2>
      <BlogCard
        slug={slug}
        hLevel={3}
        styles='text-lila-800 dark:text-fuzz-300 text-xl md:text-2xl'
        postTitle={postTitle}
        excerpt={excerpt}
        altText={altText}
        image={image}
      />
    </div>
  </section>
)

export default FeatureBox