import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Instagram from '../components/Instagram'
import Search from '../components/Search'
import TagBlock from '../components/TagBlock'

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <section>
        <div className="columns is-centered">
          <div className="column is-four-fifths">
            <Search searchIndex={data.siteSearchIndex.index}/>
          </div>
        </div>
        <hr className="hr-custom" />
        <Instagram />
        <hr className="hr-custom" />
        <TagBlock />
        <hr className="hr-custom" />
      </section>
    )}
  />
)

export default Sidebar