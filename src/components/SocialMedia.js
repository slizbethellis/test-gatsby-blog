import React from "react"
import { Anchor, Box } from "grommet"
import { FacebookOption, Instagram, Twitter } from "grommet-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = () => (
  <Box a11ytitle="Social Media Links" direction="row" gap="none" justify="evenly" pad="none" basis="xsmall" margin={{"left": "large",}} >
    <Anchor
      target="_blank"
      rel="noopener"
      a11yTitle="Follow me on Instagram"
      href="https://www.instagram.com/haloroundmyhead/"
      style={{ paddingBottom: "-12px" }}
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