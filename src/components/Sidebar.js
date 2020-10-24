import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box } from 'grommet'
// import Instagram from './Instagram'
import Search from './Search'
import TagBlock from './TagBlock'

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
      <Box as="section" border="between" gap="small">
        <Box justify="center">
          <Search searchIndex={data.siteSearchIndex.index}/>
        </Box>
        {/* <Instagram /> */}
        <TagBlock />
      </Box>
    )}
  />
)

export default Sidebar