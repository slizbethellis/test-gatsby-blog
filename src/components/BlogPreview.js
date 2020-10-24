import React, { useContext } from 'react'
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet'

import Link from './Link'
import BlogThumbnail from './BlogThumbnail'

const BlogPreview = ({
  background,
  elevation,
  round,
  slug,
  hLevel,
  hSize,
  postTitle,
  excerpt,
  altText,
  image
}) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box
      direction="row-responsive"
      align="stretch"
      alignSelf="center"
      justify="center"
      gap="small"
      background={!background ? "none" : background}
      elevation={!elevation ? "none" : elevation}
      round={!round ? "none" : round}
      pad={size !== "small" ? {"right": "small"} : "none"}
    >
      <Box as="article" pad="medium">
        <Link to={slug}>
          <Heading level={hLevel} size={hSize !== "null" ? hSize : "medium"} margin={{ "vertical": "none"}}>
            {postTitle}
          </Heading>
        </Link>
        <Paragraph fill>{excerpt}</Paragraph>
      </Box>
      {image && <BlogThumbnail altText={altText} image={image} />}
    </Box>
  )
}

export default BlogPreview