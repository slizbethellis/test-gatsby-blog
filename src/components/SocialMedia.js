import React from "react"
import { Anchor, Box } from "grommet"
import { Facebook, Instagram, Twitter } from "grommet-icons"

// a tiny box of social media icon links
const SocialMedia = () => (
  <Box direction="row" gap="none" justify="center" pad="none" >
    <Anchor
      target="_blank"
      rel="noopener"
      a11yTitle="Follow me on Instagram"
      href="https://www.instagram.com/haloroundmyhead/"
      icon={<Instagram />}
      hoverIndicator
    />
    <Anchor
      target="_blank"
      rel="noopener"
      a11yTitle="Visit my Facebook page"
      href="https://www.facebook.com/haloroundmyhead"
      icon={<Facebook />}
      hoverIndicator
    />
    <Anchor
      target="_blank"
      rel="noopener"
      a11yTitle="Follow me on Twitter"
      href="https://twitter.com/haloroundmyhead"
      icon={<Twitter />}
      hoverIndicator
    />
  </Box>
);

export default SocialMedia