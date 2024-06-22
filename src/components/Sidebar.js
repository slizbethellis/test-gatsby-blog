import React from 'react'

import Favorites from './Favorites'
import TagBlock from './TagBlock'

const Sidebar = ({ tags }) => (
  <div className='flex flex-col justify-items-start bg-lila-100 dark:bg-phthalo-900 divide-y divide-lila-950 dark:divide-phthalo-200/50 rounded-3xl mx-3 mt-6 md:ml-0 md:mr-3 md:mt-0'
  >
    <aside>
      <TagBlock tags={tags} size='small' />
    </aside>
    <aside className='hidden md:block'>
      <Favorites />
    </aside>
  </div>
)

export default Sidebar