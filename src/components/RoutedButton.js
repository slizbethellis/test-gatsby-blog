import React from "react"
import PropTypes from "prop-types"
import { Button } from "grommet"
import { navigate } from "gatsby"

// a custom button component that combines Gatsby's navigate function for routing and Grommet's button styling
const RoutedButton = ({ to, ...rest }) => (
  <Button
    href={to}
    onClick={ev => {
      navigate(to)
      ev.preventDefault()
    }}
    {...rest}
  />
)

RoutedButton.propTypes = {
  to: PropTypes.string,
}
export default RoutedButton