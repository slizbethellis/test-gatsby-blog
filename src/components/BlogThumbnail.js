import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// round fixed size image thumbnail
const BlogThumbnail = ({ altText, image }) => (
  <div className='flex items-center self-center shrink-0 rounded-full overflow-hidden [-webkit-transform:translate3d(0,0,0)] [-webkit-backface-visibility:hidden] w-[200px] mb-5 lg:m-1.5'>
    <GatsbyImage image={image} alt={altText} />
  </div>
)

export default BlogThumbnail