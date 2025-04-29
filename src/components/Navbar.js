import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Link } from 'gatsby'

import { Bars, Xmark } from './Icon'
import { LogoIcon, LogoText } from './Logo'
import Search from './Search'
import Toggle from './Toggle'

const navigation = [
  { name: 'About', href: '/about'},
  { name: 'Blog', href: '/blog'},
  { name: 'Patterns', href: '/patterns'},
]

export default function Navbar({ theme, toggleTheme, componentMounted }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className='sticky top-0 z-40 w-full backdrop-blur-sm border-b  border-phthalo-950/10  dark:border-phthalo-50/10 bg-phthalo-50/95 .supports-backdrop-blur:bg-phthalo-50/95 dark:bg-phthalo-950/85'>
      <nav className='mx-auto px-2 md:px-6 lg:px-8 relative flex h-16 items-center justify-between'>
        <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
          {/* Mobile menu button*/}
          <button
            className='relative inline-flex items-center justify-center rounded-md p-2 text-phthalo-800 dark:text-phthalo-300 hover:bg-phthalo-200 dark:hover:bg-phthalo-800 hover:text-phthalo-900 dark:hover:text-phthalo-100 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-phthalo-950 dark:focus:ring-phthalo-50'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='absolute -inset-0.5' />
            <span className='sr-only'>Open main menu</span>
            <Bars className='block h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-between'>
          <div className='flex shrink-0 items-center'>
            <Link to='/' className='space-x-2.5' aria-label='Haloroundmyhead Knits home page'>
              <LogoIcon className='inline-block fill-zomp' height='34px' />
              <LogoText className='hidden min-[360px]:inline-block mt-1 fill-lila-950 dark:fill-fuzz-300' height='20px' />
            </Link>
          </div>
        </div>
        <div className='md:ml-6'>
          <div className='flex items-center space-x-3'>
            <div className='hidden md:inline-block'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='text-phthalo-900 dark:text-phthalo-100 hover:underline hover:text-lila-800 dark:hover:text-fuzz-200 rounded-md px-3 py-2 text-base font-semibold'
                  activeClassName='bg-phthalo-100 dark:bg-phthalo-900 text-phthalo-950 dark:text-phthalo-50'
                  partiallyActive={true}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {componentMounted && (
              <div className='absolute inset-y-0 right-0 self-center md:static flex items-center md:border-l md:border-phthalo-200 md:dark:border-phthalo-700 md:pl-5 md:space-x-3'>
                <div><Search /></div>
                <div className='hidden md:flex'><Toggle theme={theme} toggleTheme={toggleTheme} /></div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Dialog as='div' className='md:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 bg-phthalo-100/90 dark:bg-phthalo-950/85 z-50" />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full max-h-72 overflow-y-auto shadow-lg shadow-phthalo-200 dark:shadow-phthalo-950 rounded-b-lg bg-phthalo-50 dark:bg-phthalo-900'>
          <div className="flex h-16 items-center justify-center border-b border-phthalo-950/10 dark:bg-phthalo-950 dark:border-phthalo-50/10">
            <div className='absolute left-0 flex self-center items-center'>
              {/* Mobile menu button*/}
              <button
                className='relative inline-flex items-center justify-center rounded-md p-2 text-phthalo-800 dark:text-phthalo-300 hover:bg-phthalo-200 dark:hover:bg-phthalo-800 hover:text-phthalo-900 dark:hover:text-phthalo-100 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-phthalo-950 dark:focus:ring-phthalo-50'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Close main menu</span>
                <Xmark className='block h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='flex shrink-0 items-center'>
              <Link to='/' className='space-x-2.5' aria-label='Haloroundmyhead Knits home page'>
                <LogoIcon className='inline-block fill-zomp' height='34px' />
                <LogoText className='hidden min-[360px]:inline-block mt-1 fill-lila-950 dark:fill-fuzz-300' height='20px' />
              </Link>
            </div>
            <div className='absolute right-0 flex self-center items-center'>
              <Search />
            </div>
          </div>
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='text-phthalo-900 dark:text-phthalo-100 hover:underline hover:text-lila-800 dark:hover:text-fuzz-200 block rounded-md px-3 py-2 text-base font-semibold'
                activeClassName='bg-phthalo-100 dark:bg-phthalo-800 text-phthalo-950 dark:text-phthalo-50'
                partiallyActive={true}
              >
                {item.name}
              </Link>
            ))}
            {componentMounted && (
              <div className='flex border-t border-phthalo-200 dark:border-phthalo-700 justify-between items-center px-5 pt-5'>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
