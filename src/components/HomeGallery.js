import React from 'react'

import HomeImage from './HomeImage'

// a responsive grid of image buttons for the home page
const HomeGallery = ({ posts }) => {
  return (
    <ul className='grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 max-w-[1920px] h-[574px]'>
      {/* Breakpoints larger than "small" get 4 pattern photo buttons, smaller breakpoints get only 3. */}
      {posts
        .map(({ node: post }) => (
          <li key={post.id} className='max-md:[&:nth-child(4)]:hidden max-2xl:[&:nth-child(5)]:hidden'>
            <HomeImage
              fixed={post.frontmatter.pattImage.childImageSharp.gatsbyImageData}
              altText={`Pattern info for ${post.frontmatter.title}`}
              patternName={post.frontmatter.title}
              slug={post.fields.slug}
            />
          </li>
        ))}
    </ul>
  );
}

export default HomeGallery