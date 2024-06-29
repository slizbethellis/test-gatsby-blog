import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// large image buttons for featured items on home page
const HomeImage = ({ fixed, altText, slug }) => (
  <Link
    to={slug}
  >
    <div className='flex items-center overflow-hidden hover:ring hover:ring-zomp rounded-[48px] sm:rounded-[96px] [-webkit-transform:translate3d(0,0,0)] [-webkit-backface-visibility:hidden] m-1.5 md:m-3'>
      <GatsbyImage image={fixed} alt={altText} />
    </div>
  </Link> 
)

export default HomeImage