import React, { useContext } from 'react'
import { Box, Heading, Paragraph, ResponsiveContext, Text } from 'grommet'

import Link from './Link'
import BlogThumbnail from './BlogThumbnail'

/* responsive card-like box with blog post title as link, an excerpt underneath, and a round thumbnail to the
right or bottom depending on media size; also takes custom heading level to comply with proper heading order */
const BlogCard = ({
  background,
  round,
  slug,
  hLevel,
  hSize,
  postTitle,
  date,
  excerpt,
  altText,
  image
}) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box
      direction="row-responsive"
      as="article"
      align="stretch"
      alignSelf="center"
      justify="center"
      gap="small"
      background={!background ? "none" : background}
      round={!round ? "none" : round}
      pad={size !== "small" ? {"right": "small"} : "none"}
      width="xlarge"
    >
      <Box pad="medium">
        <Link to={slug}>
          <Heading
            level={hLevel}
            size={hSize !== "null" ? hSize : "medium"}
            margin={{ "vertical": "none"}}
          >
            {postTitle}
          </Heading>
        </Link>
        <Text size="small" margin={{ "top": "xsmall" }}>{date}</Text>
        <Paragraph fill>{excerpt}</Paragraph>
      </Box>
      {image && <BlogThumbnail altText={altText} image={image} size={size} />}
    </Box>
  )
}

export default BlogCard