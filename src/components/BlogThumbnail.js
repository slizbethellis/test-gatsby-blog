import React, { useContext } from 'react'
import Img from 'gatsby-image'
import { Box, ResponsiveContext } from 'grommet'

const BlogThumbnail = ({ altText, image }) => {
  const size = useContext(ResponsiveContext)

  return (
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
}

export default BlogThumbnail