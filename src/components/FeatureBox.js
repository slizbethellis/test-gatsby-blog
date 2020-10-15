import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'

import Link from './Link'
import BlogThumbnail from './BlogThumbnail'

const FeatureBox = ({ altText, boxTitle, excerpt, image, slug, postTitle}) => (
  <Box
    as="section"
    background="brand"
    alignSelf="center"
    justify="center"
    width="xlarge"
    pad={{ "vertical": "medium" }}
    fill
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
    <Box
      direction="row-responsive"
      align="center"
      alignSelf="center"
      gap="medium"
    >
      <Box as="article" width="large" pad="medium">
        <Link to={slug}>
          <Heading level={3} margin={{ "vertical": "none"}}>
            {postTitle}
          </Heading>
        </Link>
        <Paragraph alignSelf="stretch" fill>{excerpt}</Paragraph>
      </Box>
      <BlogThumbnail altText={altText} image={image} />
    </Box>
  </Box>
)

export default FeatureBox