import React from 'react'
import { Listbox } from '@headlessui/react'

import { Down } from './Icon'
import { modes } from './Modes'

// switch that lets user control dark/light mode, also receives state as prop from layout
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Listbox
      value={theme}
      onChange={toggleTheme}
    >
      <Listbox.Label className='md:hidden text-lila-900 dark:text-fuzz-200'>Switch theme:</Listbox.Label>
      <Listbox.Button className='text-lila-900 dark:text-fuzz-200 text-semibold space-x-2 md:space-x-0 bg-phthalo-50 dark:bg-phthalo-800 md:bg-transparent md:dark:bg-transparent rounded-lg ring-1 md:ring-0 ring-phthalo-900/20 p-1.5 md:p-0'>
        {theme.icon}
        <span className='md:hidden text-lila-800 dark:text-fuzz-100'>{theme.display}</span>
        <Down className='md:hidden inline-block h-6 w-6' aria-hidden="true" />
      </Listbox.Button>
      <Listbox.Options className='absolute z-60 top-2/3 right-7 md:top-full md:right-2 bg-phthalo-50 dark:bg-phthalo-900 rounded-lg ring-1 ring-phthalo-900/20 shadow-sm shadow-phthalo-50/20 overflow-hidden w-28 md:w-36 text-sm text-phthalo-950 dark:text-phthalo-100 font-semibold dark:ring-0 dark:highlight-white/5 pb-1'>
        {modes.map((mode) => (
          <Listbox.Option className="py-1 px-2 space-x-0 md:space-x-2 flex items-center cursor-pointer ui-active:bg-phthalo-100 dark:ui-active:bg-phthalo-950 ui-active:underline ui-selected:text-lila-900 dark:ui-selected:text-fuzz-200" key={mode.id} value={mode}>
            <div className="hidden md:flex">{mode.icon}</div><span>{mode.display}</span>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default Toggle