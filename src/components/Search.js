import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useFlexSearch } from 'react-use-flexsearch'

import { Search as FormSearch } from './Icon'


// Search component
const Search = () => {
  const posts = useStaticQuery(graphql`
    query SearchQuery {
      localSearchPages {
        index
        store
      }
    }
  `)
  const index = posts.localSearchPages.index
  const store = posts.localSearchPages.store
  const [searchQuery, setSearchQuery] = useState('')
  const results = useFlexSearch(searchQuery, index, store)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <React.Fragment>
      <button
        className='text-phthalo-900 dark:text-phthalo-200 text-semibold bg-transparent dark:bg-transparent pr-2 md:p-0'
        onClick={() => setIsOpen(true)}
      >
        <span className='sr-only'>Open search dialog</span>
        <FormSearch className='inline-block h-6 w-6' aria-hidden='true'/>
      </button>
      <Dialog open={isOpen} onClose={() => {setIsOpen(false); setSearchQuery('');}}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className='fixed inset-0 bg-phthalo-100/90 dark:bg-phthalo-950/85 z-[60]' aria-hidden='true' />
        {/* Full-screen container to center the panel */}
        <div className='fixed inset-0 flex w-screen justify-center z-[60] p-4 sm:p-8'>
          <DialogPanel className='mx-auto mb-16 md:my-16 w-full md:w-3/4 lg:w-2/3 max-w-3xl shadow-lg rounded-lg bg-phthalo-50 dark:bg-phthalo-900'>
            <div className='flex self-center items-center w-full border-b border-phthalo-400 dark:border-phthalo-400/50 px-3'>
              {/* Search input field */}
              <form
                action='/'
                method='get'
                autoComplete='off'
                className='flex grow justify-center items-center text-phthalo-900 dark:text-phthalo-100'
              >
                <label htmlFor='header-search'>
                  <FormSearch className='inline-block h-6 w-6' aria-hidden='true'/>
                  <span className='sr-only'>
                    Search posts
                  </span>
                </label>
                <input
                  value={searchQuery}
                  onInput={(e) => setSearchQuery(e.target.value)}
                  type='search'
                  id='header-search'
                  placeholder='Search all posts'
                  name='s'
                  className='w-full appearance-none bg-phthalo-50 dark:bg-phthalo-900 text-lg focus:outline-none px-2 py-4'
                />
              </form>
              {/* Close button*/}
              <button
                className='relative inline-flex items-center justify-center rounded-md p-1 text-phthalo-900 dark:text-phthalo-100 text-xs bg-phthalo-100 dark:bg-phthalo-800 hover:text-phthalo-800 dark:hover:text-phthalo-200 ring-1 ring-phthalo-800 dark:ring-phthalo-200 focus:outline-none focus:ring-1 focus:ring-inset hover:ring-zomp'
                onClick={() => {setIsOpen(false); setSearchQuery('');}}
              >
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Close search dialog</span>
                ESC
              </button>
            </div>
            {/* Search results */}
            <div className='w-full h-[calc(100%_-_86px)] overflow-y-auto dark:[scrollbar-color:#689999_#131f20] p-6'>
              <span className='text-base font-medium'>Results</span>
              <ul className='pt-5'>
                {searchQuery.length >= 3 && results.map(({ id, slug, title, tags, itemType }) => (
                  <li key={id} className='group border-t [&:last-child]:border-b border-lila-800/40 dark:border-phthalo-400/50'>
                    <Link to={slug} className='flex flex-col hover:no-underline hover:bg-lila-100 hover:dark:bg-phthalo-800 p-4'>
                      <span className='text-lg font-semibold dark:group-hover:text-fuzz-200 group-hover:underline'>{title}</span>
                      <span className='text-base text-phthalo-800 dark:text-phthalo-200 dark:group-hover:text-phthalo-100'>{(itemType === null ? "Blog Post | " : `Pattern | ${itemType} | `) + (tags && tags.join(`, `))}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <footer className='h-6 border-t border-phthalo-400 dark:border-phthalo-400/50'></footer>
          </DialogPanel>
        </div>
      </Dialog>
    </React.Fragment>
  )
}

export default Search