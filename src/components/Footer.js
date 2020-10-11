import React from 'react'
import { Footer, Text } from 'grommet'

import SocialMedia from "./SocialMedia"

const SiteFooter = () => {
  return (
    <Footer background="light-4" justify="center" pad="small">
      <Text textAlign="center" size="small">&copy; 2018-2020 Haloroundmyhead Knits</Text>
      <SocialMedia />
    </Footer>
  )
}

export default SiteFooter