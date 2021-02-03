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
  TableRow
} from 'grommet'

import Layout from '../components/Layout'
import ColumnGallery from '../components/ColumnGallery'

export const PatternItemTemplate = ({
  content,
  frontmatter,
  images,
  title,
  helmet
}) => {
  const details = frontmatter
  const size = useContext(ResponsiveContext)
  const cellSize = (size === 'small' ? '1/3' : '1/4')

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
              <TableRow>
                <TableCell scope="row" size={cellSize}>
                  <strong>Published in</strong>
                </TableCell>
                <TableCell>
                  {details.originalPub}
                </TableCell>
              </TableRow>
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
                  <strong>Yarn(s)</strong>
                </TableCell>
                <TableCell>
                  {details.yarn.map((yar, index) =>(<span key={index}>{yar}{index !== (details.yarn.length - 1) && ', '}</span> ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Yarn Weight</strong>
                </TableCell>
                <TableCell>
                  {details.yarnWeight.map((yar, index) =>(<span key={index}>{yar}{index !== (details.yarn.length - 1) && ', '}</span> ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Gauge</strong>
                </TableCell>
                <TableCell>
                  {details.gauge}
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
                  <strong>Sizes</strong>
                </TableCell>
                <TableCell>
                  {details.sizes}
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
        itemType
        yarn
        yarnWeight
        gauge
        needles
        sizes
        ravelryLink
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