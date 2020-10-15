import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Box, Heading, Markdown } from 'grommet'

import Layout from '../components/Layout'

export const AboutPageTemplate = ({ title, image, helmet, markdown }) => {
  return (
    <Box
      as="section"
      alignSelf="center"
      justify="center"
      width="xlarge"
      margin={{"horizontal": "large" }}
    >
      {helmet || ''}
      <Heading level={1} textAlign="center">{title}</Heading>
      <Box
        as="figure"
        alignSelf="center"
        justify="center"
        margin="none"
        round="full"
        overflow="auto"
        width="medium"
        height="medium"
      >
        {image}
      </Box>
      <Box width="xlarge" alignSelf="center" pad={{"top": "small", "bottom": "medium", "horizontal": "large"}}>
        <Markdown
          components={{
            "p": {
              "props": {"fill": true}
            }
          }}
        >
          {markdown}
        </Markdown>
      </Box>
    </Box>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  markdown: PropTypes.node,
  helmet: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        markdown={post.rawMarkdownBody}
        image={<Img fixed={data.fluidImages.childImageSharp.fixed} alt="Sarah Ellis - headshot" />}
        helmet={<Helmet title={`About | ${data.site.siteMetadata.title}`} />}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    site {
      siteMetadata {
        title
      }
    },
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      rawMarkdownBody
    },
    fluidImages: file(
      relativePath: { regex: "/headshot.jpg/" }
    ) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
