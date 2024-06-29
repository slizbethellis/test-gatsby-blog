import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import BigButton from '../components/BigButtons'
import Layout from '../components/Layout'

// Linktree-like page full of big link buttons
const LinkPage = () => (
  <Layout>
    <main className='flex flex-col justify-items-center w-full max-w-xl mx-3 sm:mx-auto my-7'>
      <StaticImage
        src='../../static/img/fruhlingsblumchen-hero.jpg'
        alt='Woman with brightly colored asymmetrical lace wrap draped across shoulders, peering out of copper scaffolding'
        layout='fullWidth'
        cropFocus='top'
      />
      <h1 className='text-center text-4xl text-bold pt-7 pb-5'>Links</h1>
      <div className='flex flex-col justify-items-center w-full mx-auto space-y-3'>
        <BigButton link='/' label={`My Website (You're Already Here)`} />
        <BigButton link='https://www.ravelry.com/designers/sarah-ellis' label={`My Designs on Ravelry`} type='external' />
        <BigButton link='https://knitty.com/ISSUEss24/PATTfruhling/PATTfruhling.php' label={`See Frühlingsblümchen in Knitty S/S '24`} type='external' />
        <BigButton link='/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex' label={`A Useful Coffee Tutorial`} />
      </div>
    </main>
  </Layout>
)

export default LinkPage

export const Head = () => {
  return (
    <title>Links | Haloroundmyhead Knits</title>
  )
}