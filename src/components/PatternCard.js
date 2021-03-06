import React from 'react'
import Img from 'gatsby-image'
import { Box, Card, CardBody, CardHeader, Heading } from 'grommet'

import Link from './Link'

// simple image and pattern title component without redundant link
const PatternCard = ({ slug, title, image, altText }) => (
  <Box as="li">
    <Link to={slug} a11yTitle={title}>
      <Card
        round="medium"
        background={{ dark: "dark-1", light: "light-2" }}
        border={{ "color": {dark: "dark-3", light: "dark-4" }}}
        elevation="none"
      >
        <CardHeader justify="center">
          <Heading level={2} size="small" color={{ dark: "accent-1", light: "brand" }}>
            {title}
          </Heading> 
        </CardHeader>
        <CardBody style={{ order: "-1"}}>
          <Img
            fluid={image.childImageSharp.fluid}
            alt={altText}
          />
        </CardBody>
      </Card>
    </Link>
  </Box>
)

export default PatternCard