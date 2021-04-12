import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from 'grommet'

// round fixed size image thumbnail
const BlogThumbnail = ({ altText, image, size }) => (
  <Box
    round="xlarge"
    overflow="hidden"
    align="center"
    alignSelf="center"
    width={{min: "200px"}}
    margin={size !== "small" ? "xsmall" : {"top": "none", "bottom": "large", "horizontal": "xsmall"}}
  >
    <GatsbyImage image={image} alt={altText} />
  </Box>
)

export default BlogThumbnail