import React from 'react'
import PropTypes from 'prop-types'
import { Anchor } from 'grommet'
import { navigate } from 'gatsby'

// a custom link component that combines Gatsby's navigate function for routing and Grommet's anchor styling
const Link = ({ to, ...rest }) => (
  <Anchor
    href={to}
    onClick={ev => {
      navigate(to)
      ev.preventDefault()
    }}
    {...rest}
  />
)

Link.propTypes = {
  to: PropTypes.string,
}
export default Link