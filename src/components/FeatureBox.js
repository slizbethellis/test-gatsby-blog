import React from 'react'
import { Box, Heading } from 'grommet'

import BlogCard from './BlogCard'

// styled box for featured blog post on home page
const FeatureBox = ({ altText, boxTitle, excerpt, image, slug, postTitle}) => (
  <Box
    as="section"
    background={{ dark: "accent-4", light: "neutral-2" }}
    alignSelf="center"
    justify="center"
    pad={{ "horizontal": "xlarge", "vertical": "medium" }}
    fill="horizontal"
  >
    <Heading
      level={2}
      alignSelf="center"
      margin="medium"
      size="medium"
      textAlign="center"
    >
      {boxTitle}
    </Heading>
    <BlogCard
      slug={slug}
      hLevel={3}
      postTitle={postTitle}
      excerpt={excerpt}
      altText={altText}
      image={image}
    />
  </Box>
)

export default FeatureBox