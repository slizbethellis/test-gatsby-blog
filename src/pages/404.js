import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <Box
      as="section"
      alignSelf="center"
      justify="center"
      width="xlarge"
      pad={{
        top: "small",
        bottom: "large",
        horizontal: "xlarge"
      }}
    >
      <Heading level={1} textAlign="center">404: Page Not Found</Heading>
      <Paragraph fill>
        Were you hoping to find a secret yarn stash large enough to help you achieve SABLE? I'm supposed to be helping you figure out how to <em>use</em> your stash! But at least you found this secret Henry pic.
      </Paragraph>
      <Box 
        as="figure"
        alignSelf="center"
        round="large"
        overflow="hidden"
        style={{ WebkitTransform: `translate3d(0, 0, 0)`, WebkitBackfaceVisibility: `hidden` }}
      >
        <StaticImage
          width={400}
          height={400}
          layout="fixed"
          src="../../static/img/henry-and-yarn.jpg"
          alt="Brown tabby cat sprawled out on couch with skeins of yarn in many colors"
        />
      </Box>
      
    </Box>
  </Layout>
)

export default NotFoundPage
