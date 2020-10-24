import React from 'react'
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
import SocialMedia from './SocialMedia'

const Navbar = () => (
  <Header
    background="light-3"
    pad="medium"
    height="xsmall"
    border={{
      "color": "neutral-3",
      "size": "small",
      "side": "bottom"
    }}
    style={{
      position: 'fixed',
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
    {/* <ResponsiveContext.Consumer>
      {size => (
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
      )}
    </ResponsiveContext.Consumer> */}
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === 'small' ? (
          <Nav>
            <DropButton
              a11yTitle="Navigation Menu"
              dropProps={{ align: { top: 'bottom', right: 'right' } }}
              icon={<MenuIcon color="brand" />}
              dropContent={
                <Box
                  pad={{"top": "medium", "bottom": "none", "left": "medium", "right": "medium"}}
                  gap="xsmall" justify="stretch">
                  <Box
                    hoverIndicator="light-3"
                    pad="small"
                    onClick={(ev) => {
                      navigate("/about")
                      ev.preventDefault()
                    }}
                  >
                    About
                  </Box>
                  <Box
                    hoverIndicator="light-3"
                    pad="small"
                    onClick={(ev) => {
                      navigate("/blog")
                      ev.preventDefault()
                    }}
                  >
                    Blog
                  </Box>
                  <Box 
                    hoverIndicator="light-3"
                    pad="small"
                    onClick={(ev) => {
                      navigate("/patterns")
                      ev.preventDefault()
                    }}
                  >
                    Patterns
                  </Box>
                  <Box
                    margin={{"top": "medium"}}
                    border="top">
                    <SocialMedia />
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
            <SocialMedia />
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
)

export default Navbar