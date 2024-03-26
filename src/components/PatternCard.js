import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Heading from './Heading'

// simple image and pattern title component without redundant link
const PatternCard = ({ id, slug, title, image, altText }) => (
  <li key={id} className='flex flex-col group overflow-hidden hover:ring hover:ring-zomp-500 focus:ring-zomp-500 rounded-3xl bg-phthalo-100 dark:bg-phthalo-900 border border-phthalo-950/10 dark:border-phthalo-50/10 max-w-[400px] [-webkit-transform:translate3d(0,0,0)] [-webkit-backface-visibility:hidden]'>
    <div className='self-center py-5'>
      <Heading level={2} className='text-2xl font-semibold'>
        <Link
          to={slug}
          className='group-hover:underline z-30 before:absolute before:content-[" "] before:z-20 before:top-0 before:left-0 before:w-full before:h-full'
        >
          {title}
        </Link> 
      </Heading> 
    </div>
    <div className='-order-1 z-10 w-full'>
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={altText} />
    </div>
  </li>
)

export default PatternCard