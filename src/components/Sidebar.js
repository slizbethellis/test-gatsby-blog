import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box } from 'grommet'
// import Instagram from './Instagram'
import Search from './Search'
import TagBlock from './TagBlock'

const Sidebar = ({size}) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <Box as="section" border="between" gap="small" margin={{ "bottom": "large" }}>
        <Box alignContent="center">
          <Search searchIndex={data.siteSearchIndex.index} size={size} />
        </Box>
        {/* <Instagram /> */}
        <TagBlock />
      </Box>
    )}
  />
)

export default Sidebar