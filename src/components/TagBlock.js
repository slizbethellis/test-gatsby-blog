import React from 'react'
import { kebabCase } from 'lodash'
import { Link, StaticQuery, graphql } from 'gatsby'

const TagBlock = () => (
  <StaticQuery
    query={graphql`
      query TagBlockQuery {
        allMarkdownRemark(limit: 20) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div className="columns">
        <div className="column is-12">
          <h2 className="has-text-weight-bold has-text-centered is-size-4">Tags</h2>
          <ul className="taglist-sidebar">
            {data.allMarkdownRemark.group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
          <Link className="is-small read-more tag-link has-text-centered" to="/tags">
            all tags →
          </Link>
        </div>
      </div>
    )}
  />
)

export default TagBlock