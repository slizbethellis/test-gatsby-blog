import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import TagButtons from '../../components/TagButtons'

const TagsPage = ({
  data: { allMarkdownRemark: { group } }
}) => (
  <Layout>
    <main className='flex flex-col max-w-full my-7 md:my-10'>
      <h1 className='text-center text-5xl leading-none font-bold mb-10'>Tags</h1>
      <div className='self-center mx-6 md:mx-12 w-full'>
        <TagButtons
          group={group}
          margin='medium'
        />
      </div>
    </main>
  </Layout>
)

export default TagsPage

export const Head = ({ data: { site: { siteMetadata: { title } } } }) => {
  return (
    <title>{`Tags | ${title}`}</title>
  )
}

export const tagPageQuery = graphql`query TagsQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    limit: 1000
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
  ) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`
