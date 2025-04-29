import React from 'react'
import { Link } from 'gatsby'

export default function BigButton ({ link, label, external }) {
  const linkClasses = 'block w-full rounded-full text-center text-base font-semibold bg-linear-to-r from-lila-800 to-lila-950 dark:from-fuzz-100 dark:to-fuzz-300 text-phthalo-50 dark:text-phthalo-950 hover:saturate-200 hover:no-underline px-8 py-4'

  return (external === true ?
    (<a href={link} rel='noopener' className={linkClasses}>{label}</a>)
    : (<Link to={link} className={linkClasses}>{label}</Link>))
}