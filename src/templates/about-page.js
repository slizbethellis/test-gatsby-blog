import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Content from '../components/Content'
import Layout from '../components/Layout'

const AboutPageTemplate = ({ title, image, content }) => {
  return (
    <main className='max-w-full my-7 md:my-10'>
      <article className='flex flex-col prose dark:prose-invert prose-lg prose-phthalo items-center px-6 md:px-24 pb-3 md:pb-6 max-w-6xl'>
        <h1 className='text-center'>{title}</h1>
        <figure className='flex place-self-center overflow-hidden rounded-full [-webkit-transform:translate3d(0,0,0)] [-webkit-backface-visibility:hidden] w-72 md:w-96 h-72 md:h-96 m-0'>
          {image}
        </figure>
        <Content contentAst={content} />
      </article>
    </main>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        content={post.htmlAst}
        image={<GatsbyImage
          image={data.fluidImages.childImageSharp.gatsbyImageData}
          alt="Sarah Ellis - headshot" />}
      />
    </Layout>
  );
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const Head = ({ data }) => {
  return (
    <title>{`About | ${data.site.siteMetadata.title}`}</title>
  )
}

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
    htmlAst
  }
  fluidImages: file(relativePath: {regex: "/headshot.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 390, height: 390, layout: CONSTRAINED)
    }
  }
}
`
