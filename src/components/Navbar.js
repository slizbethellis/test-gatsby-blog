import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import {
  Anchor,
  Box,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
  Text
} from 'grommet'
import { Menu as MenuIcon } from 'grommet-icons'
import styled from 'styled-components'

import Link from './Link'
import Toggle from './Toggle'

export const StyledAnchor = styled(Anchor)`
  position: absolute;
  left: 25%;
  right: 25%;
  text-align: center;
`

const Navbar = ({ theme, toggleTheme, componentMounted }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Header
      background={{ dark: "#101F1C", light: "light-3" }}
      pad="medium"
      height={size !== 'small' ? "4.875rem" : "4.125rem"}
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
        {size === "small" ? (
          <React.Fragment>
            <Nav>
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' }, margin: {left: "xsmall"} }}
                elevation="xxsmall"
                icon={<MenuIcon color={{ dark: "accent-1", light: "brand" }} />}
                size="large"
                items={[
                  {
                    label: <Box width="100%" pad={{left: "xsmall", right: "small", vertical: "xsmall"}}>About</Box>,
                    onClick: (ev) => {
                      navigate("/about")
                      ev.preventDefault()
                    }
                  },
                  {
                    label: <Box width="100%" pad={{left: "xsmall", right: "small", vertical: "xsmall"}}>Blog</Box>,
                    onClick: (ev) => {
                      navigate("/blog")
                      ev.preventDefault()
                    }
                  },
                  {
                    label: <Box width="100%" pad={{left: "xsmall", right: "small", vertical: "xsmall"}} style={{textAlign: "right"}}>Patterns</Box>,
                    onClick: (ev) => {
                      navigate("/patterns")
                      ev.preventDefault()
                    }
                  },
                ]}
              />
            </Nav>
            <StyledAnchor
              href="/"
              label={<Text size="large">haloroundmyhead knits</Text>}
            />
          </React.Fragment>
        ) : (
          <Anchor
            href="/"
            label={<Text size="large">haloroundmyhead knits</Text>}
          />
        )}
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
      <Box direction="row" align="center" gap="medium" pad="none">
        {size !== 'small' && (
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
        )}
        {componentMounted && (
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        )}
      </Box>
    </Header>
  )
}

export default Navbar