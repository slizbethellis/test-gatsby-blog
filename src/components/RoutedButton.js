import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

// a custom button component that uses Gatsby's navigate function for routing
const RoutedButton = ({ to, children, ...rest }) => (
  <a
    href={to}
    onClick={ev => {
      navigate(to)
      ev.preventDefault()
    }}
    {...rest}
  >
    {children}
  </a>
)

RoutedButton.propTypes = {
  to: PropTypes.string,
}
export default RoutedButton