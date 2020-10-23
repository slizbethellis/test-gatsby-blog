import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import { Card, CardBody, CardHeader, Heading } from 'grommet'

import Link from './Link'

const PatternCard = ({ slug, title, image, altText }) => (
  <Link to={slug} a11ytitle="Pattern info">
    <Card
      as="article"
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