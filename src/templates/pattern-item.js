import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import Content from '../components/Content'
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

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <main className='flex flex-col md:flex-row justify-center max-w-1152px xl:w-[1152px] mx-3 md:mx-6 my-7 md:my-10'>
      <div className='grid grid-cols-1 md:grid-cols-[42%_57%] gap-6 md:gap-3'>
        <section className='justify-self-center max-w-[465px]'>
          <ColumnGallery images={images} />
        </section>
        <section className='justify-self-center flex flex-col w-full'>
          <h1 className='text-center text-4xl md:text-5xl leading-none font-bold mb-3 md:mb-6'>{title}</h1>
          <div className='flex flex-col items-center mb-6 gap-6'>
            <span className='text-center text-2xl font-semibold'>
              {details.patternSource.price !== 0 ? `$${parseFloat(details.patternSource.price).toFixed(2)} USD` : `free`}
            </span>
            <a href={details.patternSource.link} className='self-center rounded-full text-lg text-center font-bold bg-lila-900 text-fuzz-50 px-6 py-2 dark:bg-fuzz-300 dark:text-phthalo-950 hover:no-underline hover:bg-lila-700 dark:hover:bg-fuzz-200'>
              Get Pattern
            </a>
          </div>
          <TabGroup>
            <TabList className='flex flex-row justify-center border-b border-phthalo-400 dark:border-phthalo-400/50 text-xl w-full'>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'px-4 pb-2',
                    selected ?
                    'border-b-2 border-lila-800 dark:border-fuzz-300 text-lila-800 dark:text-fuzz-300':
                    'hover:text-phthalo-800 dark:hover:text-phthalo-200'
                )}
              >
                Description
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'px-4 pb-2',
                    selected ?
                    'border-b-2 border-lila-800 dark:border-fuzz-300 text-lila-800 dark:text-fuzz-300':
                    'hover:text-phthalo-800 dark:hover:text-phthalo-200'
                )}
              >
                Specs
              </Tab>
            </TabList>
            <TabPanels>
              {/* Description */}
              <TabPanel className='prose dark:prose-invert prose-lg prose-phthalo max-w-[560px] md:max-w-full print:prose mt-3 md:mt-6'>
                <Content className='' contentAst={content} />
              </TabPanel>
              {/* Specs */}
              <TabPanel className='w-full'>
                <div className='pt-3 md:pt-6 w-full'>
                  <table className='table-fixed text-lg border-collapse border-b border-phthalo-600 dark:border-phthalo-200/50 w-full'>
                    <tbody className='gap-y-0.5 divide-y divide-phthalo-600 dark:divide-phthalo-200/50'>
                      {/* If pattern is no longer available from original source and there is a new source (i.e. a non-null value for currentSrc), it will conditionally render as "Original source" and "Current source", but if currentSrc is null, then originalPub will show as "Published in". */}
                      {details.currentSrc ? (
                        <React.Fragment>
                          <tr>
                            <th className='text-left px-3 py-1.5 w-[9rem] lg:w-[30%]' scope='row'>Original source</th>
                            <td className='px-3 py-1.5 w-auto md:w-[70%]'>{details.originalPub}</td>
                          </tr>
                          <tr>
                            <th className='text-left px-3 py-1.5' scope='row'>Current source</th>
                            <td className='px-3 py-1.5'>{details.currentSrc}</td>
                          </tr>
                        </React.Fragment>  
                      ) : (
                        <tr>
                          <th className='text-left px-3 py-1.5 w-[9rem] lg:w-[30%]' scope='row'>Published in</th>
                          <td className='px-3 py-1.5 w-auto md:w-[70%]'>{details.originalPub}</td>
                        </tr>
                      )}
                      <tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Category</th>
                        <td className='px-3 py-1.5'>{details.itemType}</td>
                      </tr>
                      <tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Release Date</th>
                        <td className='px-3 py-1.5'>{details.date}</td>
                      </tr>
                      <tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Sizes</th>
                        <td className='px-3 py-1.5'>{details.sizes}</td>
                      </tr>
                      <tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Yarn(s)</th>
                        <td className='px-3 py-1.5'>{details.yarn.join(', ')}</td>
                      </tr>
                      <tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Yarn Weight</th>
                        <td className='px-3 py-1.5'>{details.yarnWeight.join(', ')}</td>
                      </tr>
                      <tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Yardage</th>
                        <td className='px-3 py-1.5'>
                          <ul className='gap-y-0.5 divide-y divide-phthalo-400 dark:divide-phthalo-400/50'>
                            {details.yardage.map((yard,index)=>(
                              <li key={index}>{details.yardage.length > 1 && (`${yard.variant}:`)}{yard.yards} yds / {yard.meters} m</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      {details.needles && (<tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Needles</th>
                        <td className='px-3 py-1.5'>{details.needles}</td>
                      </tr>)}
                      {details.hooks && (<tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Hooks</th>
                        <td className='px-3 py-1.5'>{details.hooks}</td>
                      </tr>)}
                      <tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Gauge</th>
                        <td className='px-3 py-1.5'>
                          <ul className='gap-y-1 divide-y divide-phthalo-400 dark:divide-phthalo-400/50'>
                            {details.gauge.map((gauge,index)=>(
                              <li key={index}>{gauge}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th className='text-left px-3 py-1.5' scope='row'>Measurements</th>
                        <td className='px-3 py-1.5'>
                          <ul className='gap-y-0.5 divide-y divide-phthalo-400 dark:divide-phthalo-400/50'>
                            {details.finalMeasure.map((measure,index)=>(
                              <li key={index}>{measure.dimName}: {measure.inches} inches / {measure.cm} cm</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
          <PostPagination pageContext={pageContext} />
        </section>
      </div>
    </main>
  )
}

PatternItemTemplate.propTypes = {
  content: PropTypes.object.isRequired,
  frontmatter: PropTypes.object,
  title: PropTypes.string,
}

const PatternItem = ({ data, pageContext}) => {
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
        content={post.htmlAst}
        frontmatter={post.frontmatter}
        images={images}
        title={post.frontmatter.title}
        pageContext={pageContext}
      />
    </Layout>
  )
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
    htmlAst
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
      hooks
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