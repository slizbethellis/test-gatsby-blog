import React from 'react'
import { Box } from 'grommet'
// import Instagram from './Instagram'
import Search from './Search'
import TagBlock from './TagBlock'

const Sidebar = ({ searchIndex, size }) => (
  <Box
    as="section"
    background={{ dark: "dark-1", light: "light-2" }}
    border="between"
    flex="shrink"
    gap="small"
    margin={{ "bottom": "small" }}
    round="medium"
  >
    <Search searchIndex={searchIndex} size={size} />
    {/* <Instagram /> */}
    <TagBlock size={size} />
  </Box>
)

export default Sidebar