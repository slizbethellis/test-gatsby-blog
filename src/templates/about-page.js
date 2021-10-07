import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import Helmet from 'react-helmet'
import { Box, Heading, Markdown, ResponsiveContext } from 'grommet'

import Layout from '../components/Layout'

const AboutPageTemplate = ({ title, image, helmet, markdown }) => {
  const size = useContext(ResponsiveContext)
  const boxPad = (size !== 'small' ? "xlarge" : "large")

  return (
    <Box
      as="section"
      alignSelf="center"
      justify="center"
      width="xlarge"
      pad={{
        "top": "small",
        "bottom": "medium",
        "horizontal": boxPad
      }}
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
        style={{ WebkitTransform: `translate3d(0, 0, 0)`, WebkitBackfaceVisibility: `hidden` }}
      >
        {image}
      </Box>
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
        image={<GatsbyImage
          image={data.fluidImages.childImageSharp.gatsbyImageData}
          alt="Sarah Ellis - headshot" />}
        helmet={<Helmet title={`About | ${data.site.siteMetadata.title}`} />}
      />
    </Layout>
  );
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`query AboutPage($id: String!) {
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
    }
    rawMarkdownBody
  }
  fluidImages: file(relativePath: {regex: "/headshot.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 400, layout: FIXED)
    }
  }
}
`
