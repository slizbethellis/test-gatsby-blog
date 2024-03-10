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
      <Listbox.Label className='sm:hidden text-fuzz-200'>Switch theme:</Listbox.Label>
      <Listbox.Button className='text-fuzz-200 text-semibold space-x-2 sm:space-x-0 bg-phthalo-800 sm:bg-transparent rounded-lg shadow-lg sm:shadow-none p-1.5 sm:p-0'>
        {theme.icon}
        <span className='sm:hidden text-fuzz-100'>{theme.display}</span>
        <Down className='sm:hidden inline-block h-6 w-6' aria-hidden="true" />
      </Listbox.Button>
      <Listbox.Options className='absolute z-60 top-2/3 right-7 sm:top-full sm:right-2 bg-phthalo-900 rounded-lg ring-1 ring-slate-900/10 shadow-sm shadow-phthalo-50/20 overflow-hidden w-28 sm:w-36 text-sm text-phthalo-100 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 pb-1'>
        {modes.map((mode) => (
          <Listbox.Option className="py-1 px-2 space-x-0 sm:space-x-2 flex items-center cursor-pointer ui-active:bg-phthalo-950 ui-active:underline ui-selected:text-fuzz-200" key={mode.id} value={mode}>
            <div className="hidden sm:flex">{mode.icon}</div><span>{mode.display}</span>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default Toggle