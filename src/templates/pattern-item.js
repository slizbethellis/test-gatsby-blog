import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

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
  Tab,
  Tabs,
  Text
} from 'grommet'

import Layout from '../components/Layout'
import ColumnGallery from '../components/ColumnGallery'
import PostPagination from '../components/PostPagination'

const PatternItemTemplate = ({
  content,
  frontmatter,
  images,
  title,
  pageContext
}) => {
  const details = frontmatter
  const size = useContext(ResponsiveContext)
  const cellSize = (size === 'small' ? '1/3' : '30%')

  const [index, setIndex] = React.useState(0)
  const onActive = (nextIndex) => setIndex(nextIndex)

  return (
    <Box
      as="section"
      alignSelf="center"
      justify="center"
      width="xlarge"
      pad={{
        "horizontal": "medium"
      }} 
      margin={{ "top": "41.5px" }}     
    >
      
      <Grid
        columns={size !== 'small' ? ['42%', 'auto'] : ['auto']}
        rows={size !== 'small' ? ['auto'] : ['auto', 'auto']}
        gap="medium"
      >
        <Box
          margin={{ "horizontal": "auto"}}
          pad={{
            "top": "none",
            "bottom": "xsmall"
          }}
          width={{ "max": "465px"}}
        >
          <ColumnGallery images={images} />
        </Box>
        <Box
          pad={{
            "top": "none",
            "bottom": "medium"
          }}
        >
          <Heading
            level={1}
            textAlign="center"
            margin={{ "top": "none", "bottom": "medium" }}
          >
            {title}
          </Heading>
          <Text
            margin={{ "bottom": "small" }}
            textAlign="center"
            size="xlarge"
            weight="bold"
          >
            {details.patternSource.price !== 0 ? `$${parseFloat(details.patternSource.price).toFixed(2)} USD` : `free`}
          </Text>
          <Box pad={{ top: "small", bottom: "large" }}>
            <Button
              as="a"
              href={details.patternSource.link}
              alignSelf="center"
              margin={size === 'small' ? {top: 'small', bottom: 'xxsmall'} : 'none'}
              primary
              label={`Get Pattern`}
            />
          </Box>
          <Tabs activeIndex={index} onActive={onActive} alignControls="center">
            <Tab title="Description">
              <Markdown
                components={{
                  "p": {
                    "props": {"fill": true}
                  }
                }}
              >
                {content}
              </Markdown>
            </Tab>
            <Tab title="Specs">
              <Box pad={{ top: "medium"}}>
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
                        {details.date}
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
                            <Text key={index}>{details.yardage.length > 1 && (`${yard.variant}:`)}{yard.yards} yds / {yard.meters} m</Text>
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
                    <TableRow>
                      <TableCell scope="row">
                        <strong>Measurements</strong>
                      </TableCell>
                      <TableCell>
                        <Box gap="xxsmall" border={{"side": "between"}}>
                          {details.finalMeasure.map((measure,index)=>(
                            <Text key={index}>{measure.dimName}: {measure.inches} inches / {measure.cm} cm</Text>
                          ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Tab>
          </Tabs>
          <PostPagination pageContext={pageContext} />
        </Box>
      </Grid>
    </Box>
  )
}

PatternItemTemplate.propTypes = {
  content: PropTypes.node,
  frontmatter: PropTypes.object,
  title: PropTypes.string,
}

class PatternItem extends React.Component {
  render () {
    const data = this.props.data
    const pageContext = this.props.pageContext
    const post = data.pattern
    const pictures = post.frontmatter.pictures
    const thumbnails = data.thumbnails.frontmatter.pictures
    const topImage = post.frontmatter.topImage
    const images = []

    pictures.forEach((image, index) => {
      const imgData = getImage(image.photo)
      const thumbData = index !== 0 ? getImage(thumbnails[index].photo) : getImage(topImage)
      images.push({
        src: imgData.images.fallback.src,
        fluid: imgData,
        thumbFluid: thumbData,
        key: index,
        width: thumbData.width,
        height: thumbData.height,
        alt: image.altText
      })
    })

    return (
      <Layout>
        <PatternItemTemplate
          content={post.rawMarkdownBody}
          frontmatter={post.frontmatter}
          images={images}
          title={post.frontmatter.title}
          pageContext={pageContext}
        />
      </Layout>
    )
  }
}

export default PatternItem

export const Head = ({ data }) => {
  const post = data.pattern
  return (
    <title>{`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
  )
}

PatternItem.propTypes = {
  data: PropTypes.shape({
    pattern: PropTypes.shape({
      markdownRemark: PropTypes.object,
    })
  }),
}

export const pattQuery = graphql`query PattItemByID($id: String!) {
  site {
    siteMetadata {
      title
    }
  }
  pattern: markdownRemark(id: {eq: $id}) {
    id
    fields {
      slug
    }
    rawMarkdownBody
    frontmatter {
      date(formatString: "MMMM YYYY")
      title
      originalPub
      currentSrc
      itemType
      yarn
      yarnWeight
      yardage {
        yards
        meters
      }
      gauge
      needles
      sizes
      finalMeasure {
        dimName
        inches
        cm
      }
      patternSource {
        link
        price
      }
      topImage {
        childImageSharp {
          gatsbyImageData(width: 465, layout: CONSTRAINED) 
        }
      }
      pictures {
        photo {
          childImageSharp {
            gatsbyImageData(height: 1440, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
  thumbnails: markdownRemark(id: {eq: $id}) {
    frontmatter {
      pictures {
        photo {
          childImageSharp {
            gatsbyImageData(width: 120, layout: CONSTRAINED)
          }
        }
        altText
      }
    }
  }
}
`