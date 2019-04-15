import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const PatternItemTemplate = ({
  data,
  content,
  gauge,
  itemType,
  needles,
  originalPub,
  published,
  sizes,
  title,
  yarn,
  yarnWeight
}) => {
  const PostContent = HTMLContent || Content
  const { markdownRemark: post } = data

  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-10">
          <h1 className="has-text-weight-bold is-size-2 title-padding">
            {title}
          </h1>
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <th>Published in</th>
                <td>{originalPub}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{itemType}</td>
              </tr>
              <tr>
                <th>Published</th>
                <td>{published}</td>
              </tr>
              <tr>
                <th>Yarn(s)</th>
                <td>{yarn.map((yar, index) =>(<span key={index}>{yar}{index !== (yarn.length - 1) && ', '}</span> ))}</td>
              </tr>
              <tr>
                <th>Yarn Weight</th>
                <td>{yarnWeight.map((yar, index) =>(<span key={index}>{yar}{index !== (yarnWeight.length - 1) && ', '}</span> ))}</td>
              </tr>
              <tr>
                <th>Gauge</th>
                <td>{gauge}</td>
              </tr>
              <tr>
                <th>Needles</th>
                <td>{needles}</td>
              </tr>
              <tr>
                <th>Sizes</th>
                <td>{sizes}</td>
              </tr>
            </tbody>
          </table>
          <PostContent className="content" content={post.html || content} />
        </div>
      </div>
    </section>
  )
}

PatternItemTemplate.propTypes = {
  content: PropTypes.node,
  gauge: PropTypes.string,
  itemType: PropTypes.string,
  needles: PropTypes.string,
  originalPub: PropTypes.string,
  published: PropTypes.string,
  sizes: PropTypes.string,
  title: PropTypes.string,
  yarn: PropTypes.array,
  yarnWeight: PropTypes.array
}

export const pattPreviewQuery = graphql`
  query PattPreviewByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`