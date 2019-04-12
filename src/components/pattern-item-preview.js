import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const PatternItemTemplate = ({
  content,
  frontmatter,
  title
}) => {
  const PostContent = HTMLContent || Content

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
                <td>{frontmatter.originalPub}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{frontmatter.itemType}</td>
              </tr>
              <tr>
                <th>Published</th>
                <td>{frontmatter.published}</td>
              </tr>
              <tr>
                <th>Yarn(s)</th>
                <td>{frontmatter.yarn.map((yar, index) =>(<span key={index}>{yar}{index !== (frontmatter.yarn.length - 1) && ', '}</span> ))}</td>
              </tr>
              <tr>
                <th>Yarn Weight</th>
                <td>{frontmatter.yarnWeight.map((yar, index) =>(<span key={index}>{yar}{index !== (frontmatter.yarnWeight.length - 1) && ', '}</span> ))}</td>
              </tr>
              <tr>
                <th>Gauge</th>
                <td>{frontmatter.gauge}</td>
              </tr>
              <tr>
                <th>Needles</th>
                <td>{frontmatter.needles}</td>
              </tr>
              <tr>
                <th>Sizes</th>
                <td>{frontmatter.sizes}</td>
              </tr>
            </tbody>
          </table>
          <PostContent className="content" content={content} />
        </div>
      </div>
    </section>
  )
}

PatternItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  frontmatter: PropTypes.object,
  title: PropTypes.string,
}