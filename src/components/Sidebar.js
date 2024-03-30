import React from 'react'

import Favorites from './Favorites'
import Search from './Search'
import TagBlock from './TagBlock'

const Sidebar = ({ tags }) => (
  <div className='flex flex-col justify-items-start bg-lila-100 dark:bg-phthalo-900 divide-y divide-lila-950 dark:divide-phthalo-200/50 rounded-3xl mr-3'
  >
    {/* <Search searchIndex={searchIndex} size={size} /> */}
    <aside>
      <TagBlock tags={tags} />
    </aside>
    <aside>
      <Favorites />
    </aside>
  </div>
)

export default Sidebar