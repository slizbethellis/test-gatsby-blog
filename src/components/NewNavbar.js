import React from 'react'
import { navigate } from "gatsby"
import {
  Anchor,
  Box,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Text
} from 'grommet'
import Link from "../components/Link"

import SocialMedia from "../components/SocialMedia"

const NewNavbar = () => (
  <Header background="light-6" pad="medium" height="xsmall" border={{ "color": "neutral-3", "size": "small", "side": "bottom" }} style={{ position: 'fixed', zIndex: '10', width: '100%', top: '0' }}>
    <ResponsiveContext.Consumer>
      {size => (
        <Box direction="row" align="center" gap="small">
          <Anchor
            href="/"
            label={
              size !== "xsmall" &&
              size !== "small" && <Text size="large">haloroundmyhead knits</Text>
            }
          />
        </Box>
      )}
    </ResponsiveContext.Consumer>
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === 'small' ? (
          <Menu
            label="Click me"
            items={[
              { label: 'About', onClick: (ev) => {
                navigate("/about")
                ev.preventDefault()
              } },
              { label: 'Blog', onClick: (ev) => {
                navigate("/blog")
                ev.preventDefault()
              } },
              { label: 'Patterns', onClick: (ev) => {
                navigate("/patterns")
                ev.preventDefault()
              } },
            ]}
          />
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

export default NewNavbar