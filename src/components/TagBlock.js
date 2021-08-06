import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
import { Box, Heading } from 'grommet'

import Link from './Link'
import TagButtons from './TagButtons'

// group of featured tags for top level blog sidebar
const TagBlock = ({ size, tags }) => {
  const data = tags

  return (
    <Box 
      alignSelf="center"
      border={{ 
        "side": (size !== "small" ? "bottom" : "top"),
        "color": (size !== "small" ? "border" : { dark: "light-4", light: "dark-4" }) }}
      pad={size !== "small" ? "none" : "medium"}
    >
      <Heading level={2} size="small" textAlign="center">Tags</Heading>
      <TagButtons
        group={data.group}
        margin="xxsmall"
        size="small"
      />
      <Link alignSelf="center" margin={{"bottom": "1.5rem"}} to="/tags">
        all tags →
      </Link>
    </Box>
  )
}

export default TagBlock