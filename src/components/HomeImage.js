import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from 'grommet'

import Link from './Link'

// large image buttons for featured items on home page
const HomeImage = ({ fixed, altText, slug }) => (
  <Link to={slug} a11yTitle={altText}>
    <Box
      as="figure"
      round="xlarge"
      overflow="hidden"
      align="center"
      margin="small"
      style={{ WebkitTransform: `translate3d(0, 0, 0)`, WebkitBackfaceVisibility: `hidden` }}
    >
      <GatsbyImage image={fixed} alt={altText} />
    </Box>
  </Link> 
)

export default HomeImage