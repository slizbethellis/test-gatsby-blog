import React from 'react'
import Img from 'gatsby-image'
import { Box } from 'grommet'

const BlogThumbnail = ({ altText, image }) => (
  <Box
    as="figure"
    round="xlarge"
    overflow="hidden"
    align="center"
    alignSelf="center"
    width="200px"
    margin={{"top": "xsmall", "bottom": "large", "horizontal": "xsmall"}}
  >
    <Img 
      fixed={image}
      alt={altText}
    />
  </Box>
)

export default BlogThumbnail