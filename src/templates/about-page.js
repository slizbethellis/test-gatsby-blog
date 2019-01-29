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
    <section className="section section--gradient">
      {helmet || ''}
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="columns">
                <div className="column is-5">
                  {image}
                </div>
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
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
