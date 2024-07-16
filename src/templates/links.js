import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import BigButton from '../components/BigButtons'
import Layout from '../components/Layout'

// Linktree-like page full of big link buttons
const LinkPage = ({ data }) => {
  const page = data.markdownRemark.frontmatter
  const buttons = page.buttons
  console.log(buttons)
  return (
    <Layout>
      <main className='flex flex-col justify-items-center w-full max-w-xl mx-3 sm:mx-auto my-7'>
        <GatsbyImage image={page.heroImage.childImageSharp.gatsbyImageData} alt={page.heroAltText} />
        <h1 className='text-center text-4xl text-bold pt-7 pb-5'>Links</h1>
        <div className='flex flex-col justify-items-center w-full mx-auto space-y-3'>
          {buttons.map(( button, index ) =>(
            <BigButton key={index} link={button.link} label={button.label} external={button.external} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default LinkPage

export const Head = ({ data }) => {
  return (
    <title>{`Links | ${data.site.siteMetadata.title}`}</title>
  )
}

export const linksQuery = graphql`query Links($id: String!) {
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      buttons {
        link
        label
        external
      }
      heroImage {
        childImageSharp {
          gatsbyImageData(width: 576, layout: CONSTRAINED)
        }
      }
      heroAltText
    }
  }
}
`