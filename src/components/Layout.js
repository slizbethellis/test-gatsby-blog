import React from 'react'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar color="is-fixed-top" />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
