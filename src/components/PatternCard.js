import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// simple image and pattern title component without redundant link
const PatternCard = ({ id, slug, title, image, altText, price }) => (
  <li key={id} className='flex flex-col group overflow-hidden hover:ring-2 hover:ring-zomp focus:ring-zomp rounded-3xl bg-phthalo-100 dark:bg-phthalo-900 border border-phthalo-950/10 dark:border-phthalo-50/10 hover:border-zomp focus:border-zomp max-w-[400px] [-webkit-transform:translate3d(0,0,0)] [-webkit-backface-visibility:hidden]'>
    <div className='self-center text-center py-3 lg:py-4'>
      <h2 className='text-lg sm:text-xl lg:text-2xl text-wrap font-semibold'>
        <Link
          to={slug}
          className='group-hover:underline z-30 before:absolute before:content-[" "] before:z-20 before:top-0 before:left-0 before:w-full before:h-full'
        >
          {title}
        </Link> 
      </h2>
      <span className='text-base lg:text-lg font-medium'>{price !== 0 ? `$${parseFloat(price).toFixed(2)} USD` : `free`}</span>
    </div>
    <div className='-order-1 z-10 w-full'>
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={altText} />
    </div>
  </li>
)

export default PatternCard