import React from 'react'
import { Box } from 'grommet'
// import Instagram from './Instagram'
import Search from './Search'
import TagBlock from './TagBlock'

const Sidebar = ({ size, tags }) => (
  <Box
    as="section"
    background={{ dark: "dark-1", light: "light-2" }}
    border="between"
    flex="shrink"
    gap="small"
    margin={{ "bottom": "small" }}
    pad={{ "bottom": "medium" }}
    round="medium"
  >
    {/* <Search searchIndex={searchIndex} size={size} /> */}
    {/* <Instagram /> */}
    <TagBlock size={size} tags={tags} />
  </Box>
)

export default Sidebar