import React from 'react'
import Img from 'gatsby-image'
import { Card, CardBody, CardHeader, Heading } from 'grommet'

import Link from './Link'

// simple image and pattern title component without redundant link
const PatternCard = ({ slug, title, image, altText }) => (
  <Link to={slug}>
    <Card
      as="article"
      round="medium"
    >
      <CardHeader justify="center">
        <Heading level={2} size="small">
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
)

export default PatternCard