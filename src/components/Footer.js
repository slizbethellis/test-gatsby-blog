import React from 'react'

import SocialMedia from "./SocialMedia"

const Footer = () => {
  const date = new Date()
  const formattedDate = new Intl.DateTimeFormat("en-US", { year: 'numeric' }).format(date)

  return (
    <footer className='flex items-center justify-center w-full h-16 bg-phthalo-50 border-t border-phthalo-200 dark:bg-phthalo-950 dark:border-phthalo-700/50'>
      <p className='text-center text-small leading-5 text-phthalo-950 dark:text-phthalo-50'>&copy; 2018-{formattedDate} Haloroundmyhead Knits</p>
      <SocialMedia />
    </footer>
  )
}

export default Footer