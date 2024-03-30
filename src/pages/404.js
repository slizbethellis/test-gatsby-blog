import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <main className='self-center max-w-full my-7 md:my-10'>
      <article className='flex flex-col prose dark:prose-invert prose-lg prose-phthalo items-center px-6 md:px-24 max-w-[1152px]'>
        <h1 className='text-center'>404: Page Not Found</h1>
        <p className='-mt-2'>Were you hoping to find a secret yarn stash large enough to help you achieve SABLE? I'm supposed to be helping you figure out how to <em>use</em> your stash! But at least you found this secret photo of Henry with his own mini stash of yarn.</p>
        <figure className='flex place-self-center overflow-hidden rounded-[48px] [-webkit-transform:translate3d(0,0,0)] [-webkit-backface-visibility:hidden] w-72 md:w-96 h-72 md:h-96 m-0'>
          <StaticImage
            width={390}
            height={390}
            layout="fixed"
            src="../../static/img/henry-and-yarn.jpg"
            alt="Brown tabby cat sprawled out on couch with skeins of yarn in many colors"
          />
        </figure>
      </article>
    </main>
  </Layout>
)

export default NotFoundPage

export const Head = () => {
  return (
    <title>404 | Haloroundmyhead Knits</title>
  )
}
