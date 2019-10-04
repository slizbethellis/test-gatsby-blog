import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent, image, helmet }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="columns is-centered">
        <div className="column is-10">
          <h1 className="has-text-weight-bold is-size-2 title-padding">
            {title}
          </h1>
          <div className="columns">
            <div className="column is-5">
              {image}
            </div>
          </div>
          <PageContent className="content" content={content} />
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout location={'/about'}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={<Img fluid={data.fluidImages.childImageSharp.fluid} alt="Sarah Ellis - headshot" />}
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
      html
      frontmatter {
        title
      }
    },
    fluidImages: file(
      relativePath: { regex: "/headshot.jpg/" }
    ) {
      childImageSharp {
        fluid (maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
