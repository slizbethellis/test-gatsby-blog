import React from 'react'
import Img from 'gatsby-image'
import { Box } from 'grommet'

// round fixed size image thumbnail
const BlogThumbnail = ({ altText, image, size }) => (
  <Box
    as="figure"
    round="xlarge"
    overflow="hidden"
    align="center"
    alignSelf="center"
    width={{min: "200px"}}
    margin={size !== "small" ? "xsmall" : {"top": "none", "bottom": "large", "horizontal": "xsmall"}}
  >
    <Img 
      fixed={image}
      alt={altText}
    />
  </Box>
)

export default BlogThumbnail