import React from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import { Down } from './Icon'
import { modes } from './Modes'

// switch that lets user control dark/light mode, also receives state as prop from layout
const Toggle = ({ theme, toggleTheme }) => {
  const icon = (document.documentElement.classList.contains('dark') ? modes[1].icon : modes[0].icon)
  return (
    <Listbox
      value={theme}
      onChange={toggleTheme}
    >
      <Label className='md:hidden text-lila-900 dark:text-fuzz-200'>Switch theme:</Label>
      <ListboxButton className='relative flex md:block text-lila-900 dark:text-fuzz-200 text-semibold justify-between bg-phthalo-50 dark:bg-phthalo-700 md:bg-transparent md:dark:bg-transparent rounded-lg ring-1 md:ring-0 ring-phthalo-900/20 w-32 md:w-6 p-1.5 md:p-0' name='toggle'>
        {icon}
        <span className='md:hidden text-lila-800 dark:text-fuzz-100'>{theme.display}</span>
        <Down className='md:hidden inline-block h-6 w-6' aria-hidden="true" />
      </ListboxButton>
      <ListboxOptions as='ul' anchor="bottom end" className='bg-phthalo-50 dark:bg-phthalo-950 rounded-lg ring-1 ring-phthalo-900/20 shadow-xs shadow-phthalo-50/20 overflow-hidden w-32 md:w-36 text-sm text-phthalo-950 dark:text-phthalo-100 font-semibold dark:ring-0 dark:highlight-white/5 mt-1 py-1 z-60'>
        {modes.map((mode) => (
          <ListboxOption as='li' className='py-1 px-2 space-x-0 md:space-x-2 flex items-center cursor-pointer ui-active:bg-phthalo-100 dark:ui-active:bg-phthalo-800 ui-active:underline ui-selected:text-lila-900 dark:ui-selected:text-fuzz-200' key={mode.id} value={mode}>
            <div className="hidden md:flex">{mode.icon}</div><span>{mode.display}</span>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}

export default Toggle