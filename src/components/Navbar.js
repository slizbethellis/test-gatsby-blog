import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import {
  Anchor,
  Box,
  DropButton,
  Header,
  Nav,
  ResponsiveContext,
  Text
} from 'grommet'
import { Menu as MenuIcon } from 'grommet-icons'

import Link from './Link'
import Toggle from './Toggle'

const Navbar = ({ theme, toggleTheme }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Header
      background={{ dark: "#101F1C", light: "light-3" }}
      pad="medium"
      height={size !== 'small' ? "xsmall" : "4.125rem"}
      border={{
        "color": { dark: "accent-3", light: "neutral-3" },
        "size": "small",
        "side": "bottom"
      }}
      style={{
        position: 'sticky',
        zIndex: '10',
        width: '100%',
        top: '0'
      }}
    >
      <Box direction="row" align="center" gap="small">
        <Anchor
          href="/"
          label={<Text size="large">haloroundmyhead knits</Text>}
        />
      </Box>
      {/* {size => (
        <Box direction="row" align="center" gap="small">
          <Anchor
            href="/"
            label={
              size !== "xsmall" &&
              size !== "small" && <Text size="large">haloroundmyhead knits</Text>
            }
            a11yTitle={
              size === "xsmall" &&
              size === "small" && "haloroundmyhead knits"
            }
          />
        </Box>
      )} */}
      {size === 'small' ? (
        <Nav>
          <DropButton
            a11yTitle="Navigation Menu"
            dropProps={{ align: { top: 'bottom', right: 'right' } }}
            icon={<MenuIcon color={{ dark: "accent-1", light: "brand" }} />}
            dropContent={
              <Box
                pad={{"top": "medium", "bottom": "none", "left": "medium", "right": "medium"}}
                gap="xsmall" justify="stretch">
                <Box
                  hoverIndicator={{ dark: "dark-3", light: "light-4" }}
                  pad="small"
                  onClick={(ev) => {
                    navigate("/about")
                    ev.preventDefault()
                  }}
                >
                  About
                </Box>
                <Box
                  hoverIndicator={{ dark: "dark-3", light: "light-4" }}
                  pad="small"
                  onClick={(ev) => {
                    navigate("/blog")
                    ev.preventDefault()
                  }}
                >
                  Blog
                </Box>
                <Box 
                  hoverIndicator={{ dark: "dark-3", light: "light-4" }}
                  pad="small"
                  onClick={(ev) => {
                    navigate("/patterns")
                    ev.preventDefault()
                  }}
                >
                  Patterns
                </Box>
                <Box
                  margin={{ "top": "medium" }}
                  border="top"
                  pad="medium"
                >
                  <Toggle theme={theme} toggleTheme={toggleTheme} />
                </Box>
              </Box>
            }
          />
        </Nav>
      ) : (
        <Box direction="row" align="center" gap="medium" pad="none">
          <Nav direction="row">
            <Link to="/about" hoverIndicator>
              About
            </Link>
            <Link to="/blog" hoverIndicator>
              Blog
            </Link>
            <Link to="/patterns" hoverIndicator>
              Patterns
            </Link>
          </Nav>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Box>
      )}
    </Header>
  )
}

export default Navbar