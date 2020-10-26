import React from "react"
import { Anchor, Box } from "grommet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// a tiny box of social media icon links
const SocialMedia = () => (
  <Box direction="row" gap="none" justify="center" pad="none" >
    <Anchor
      target="_blank"
      rel="noopener"
      a11yTitle="Follow me on Instagram"
      href="https://www.instagram.com/haloroundmyhead/"
      icon={<FontAwesomeIcon icon={['fab', 'instagram']} style={{ fontSize: "1.5em"}} />}
      hoverIndicator="false"
    />
    <Anchor
      target="_blank"
      rel="noopener"
      a11yTitle="Visit my Facebook page"
      href="https://www.facebook.com/haloroundmyhead"
      icon={<FontAwesomeIcon icon={['fab', 'facebook-square']} style={{ fontSize: "1.5em"}} />}
      hoverIndicator
    />
    <Anchor
      target="_blank"
      rel="noopener"
      a11yTitle="Follow me on Twitter"
      href="https://twitter.com/haloroundmyhead"
      icon={<FontAwesomeIcon icon={['fab', 'twitter']} style={{ fontSize: "1.5em"}} />}
      hoverIndicator
    />
  </Box>
);

export default SocialMedia