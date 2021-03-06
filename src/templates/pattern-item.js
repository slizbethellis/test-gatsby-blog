import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import {
  Box,
  Button,
  Grid,
  Heading,
  Markdown,
  ResponsiveContext,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text
} from 'grommet'

import Layout from '../components/Layout'
import ColumnGallery from '../components/ColumnGallery'

const PatternItemTemplate = ({
  content,
  frontmatter,
  images,
  title,
  helmet
}) => {
  const details = frontmatter
  const size = useContext(ResponsiveContext)
  const cellSize = (size === 'small' ? '1/3' : '30%')

  return (
    <Box
      as="section"
      alignSelf="center"
      justify="center"
      width="xlarge"
      pad={{
        "horizontal": "medium"
      }}      
    >
      {helmet || ''}
      <Heading level={1} textAlign="center">{title}</Heading>
      <Grid
        columns={size !== 'small' ? ['42%', 'auto'] : ['auto']}
        rows={size !== 'small' ? ['auto'] : ['auto', 'auto']}
        gap="medium"
      >
        <Box
          pad={{
            "top": "none",
            "bottom": "medium"
          }}
        >
          <ColumnGallery photos={images} />
        </Box>
        <Box
          pad={{
            "top": "none",
            "bottom": "medium"
          }}
        >
          <Table>
            <TableBody>
              {/* If pattern is no longer available from original source and there is a new source
                (i.e. a non-null value for currentSrc), it will conditionally render as "Original source" and "Current source", but if currentSrc is null, then originalPub will show as "Published in". */}
              {details.currentSrc ? (
                <React.Fragment>
                  <TableRow>
                    <TableCell scope="row" size={cellSize}>
                      <strong>Original source</strong>
                    </TableCell>
                    <TableCell>
                      {details.originalPub}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row" size={cellSize}>
                      <strong>Current source</strong>
                    </TableCell>
                    <TableCell>
                      {details.currentSrc}
                    </TableCell>
                  </TableRow>
                </React.Fragment>  
              ) : (
                <TableRow>
                  <TableCell scope="row" size={cellSize}>
                    <strong>Published in</strong>
                  </TableCell>
                  <TableCell>
                    {details.originalPub}
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell scope="row">
                  <strong>Category</strong>
                </TableCell>
                <TableCell>
                  {details.itemType}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Release Date</strong>
                </TableCell>
                <TableCell>
                  {details.published}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Sizes</strong>
                </TableCell>
                <TableCell>
                  {details.sizes}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Yarn(s)</strong>
                </TableCell>
                <TableCell>
                  {details.yarn.join(', ')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Yarn Weight</strong>
                </TableCell>
                <TableCell>
                  {details.yarnWeight.join(', ')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Yardage</strong>
                </TableCell>
                <TableCell>
                  <Box gap="xxsmall" border={{"side": "between"}}>
                    {details.yardage.map((yard,index)=>(
                      <Text key={index}>{details.yardage.length > 1 && (`${yard.variantYardage.variant}:`)}{yard.variantYardage.yards} yds / {yard.variantYardage.meters} m</Text>
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Needles</strong>
                </TableCell>
                <TableCell>
                  {details.needles}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Gauge</strong>
                </TableCell>
                <TableCell>
                  <Box gap="xxsmall" border={{"side": "between"}}>
                    {details.gauge.map((gauge,index)=>(
                      <Text key={index}>{gauge}</Text>
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
          <Box pad={{ top: "medium", bottom: "none" }}>
            <Button
              as="a"
              href={details.patternSource.link}
              alignSelf="center"
              margin={size === 'small' ? {top: 'small', bottom: 'xxsmall'} : 'none'}
              primary
              label={`Pattern (${details.patternSource.price})`}
            />
          </Box>
          <Markdown
            components={{
              "p": {
                "props": {"fill": true}
              }
            }}
          >
            {content}
          </Markdown>
        </Box>
      </Grid>
    </Box>
  )
}

PatternItemTemplate.propTypes = {
  content: PropTypes.node,
  frontmatter: PropTypes.object,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const PatternItem = ({ data }) => {
  const { markdownRemark: post } = data
  const photos = post.frontmatter.pictures

  const images = photos.map(photo => ({
    src: photo.patternPhoto.photo.childImageSharp.fluid.src,
    srcSet: photo.patternPhoto.photo.childImageSharp.fluid.srcSet,
    fluid: photo.patternPhoto.photo.childImageSharp.fluid,
    width: photo.patternPhoto.width,
    height: photo.patternPhoto.height,
    caption: photo.patternPhoto.caption,
    alt: photo.patternPhoto.altText
  }))

  return (
    <Layout>
      <PatternItemTemplate
        content={post.rawMarkdownBody}
        frontmatter={post.frontmatter}
        helmet={<Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />}
        images={images}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

PatternItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PatternItem

export const pattQuery = graphql`
  query PattItemByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    },
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      rawMarkdownBody
      frontmatter {
        published(formatString: "MMMM YYYY")
        title
        originalPub
        currentSrc
        itemType
        yarn
        yarnWeight
        yardage {
          variantYardage {
            yards
            meters
          }
        }
        gauge
        needles
        sizes
        patternSource {
          link
          price
        }
        pictures {
          patternPhoto {
            photo {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            altText
            caption
            width
            height
          }
        }
      }
    }
  }
`