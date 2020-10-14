import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <Box as="section" pad={{top: "small", bottom: "large", horizontal: "xlarge"}}>
      <Heading level={1}>NOT FOUND</Heading>
      <Paragraph>Why were you looking for something that doesn't exist?</Paragraph>
    </Box>
  </Layout>
)

export default NotFoundPage
