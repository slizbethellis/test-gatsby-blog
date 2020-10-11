import React from 'react'
import Img from 'gatsby-image'
import { Box } from 'grommet'

import Link from './Link'

const HomeImage = ({ fixed, altText, slug }) => (
  <Link to={slug}>
    <Box
      as="figure"
      round="xlarge"
      overflow="hidden"
      align="center"
      margin="small"
    >
      <Img 
        fixed={fixed}
        alt={altText}
      />
    </Box>
  </Link> 
)

export default HomeImage