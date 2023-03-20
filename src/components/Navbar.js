import React, { useContext, useRef } from 'react'
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

import Link from './Link'
import Toggle from './Toggle'

const Navbar = ({ theme, toggleTheme, componentMounted }) => {
  const size = useContext(ResponsiveContext)
  const targetRef = useRef()

  return (
    <Header
      background={{ dark: "#111b1f", light: "light-3" }}
      pad="medium"
      height="4.875rem"
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
      ref={targetRef}
    >
      <Box direction="row" align="center" gap="small">
        {size === "small" ? (
          <React.Fragment>
            <Nav>
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' }, target: targetRef.current }}
                elevation="xxsmall"
                icon={<MenuIcon color={{ dark: "accent-1", light: "brand" }} size="medium" />}
                size="medium"
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
                    label: <Box width="100%" pad={{left: "xsmall", right: "small", vertical: "xsmall"}} >Patterns</Box>,
                    onClick: (ev) => {
                      navigate("/patterns")
                      ev.preventDefault()
                    }
                  },
                ]}
              />
            </Nav>
            <Anchor
              href="/"
              label={<Text size="large">haloroundmyhead knits</Text>}
              style={{ position: "absolute", left: '25%', right: '25%', textAlign: 'center' }}
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