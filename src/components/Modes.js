import React from 'react'

import { Moon, Sun, Monitor } from './Icon'

const iconClass = 'inline-block h-6 w-6'

export const modes = [
  {
    id: 1,
    name: 'light',
    display: 'Light',
    icon: <Sun className={iconClass} aria-hidden='true' />
  },
  {
    id: 2, 
    name: 'dark',
    display: 'Dark',
    icon: <Moon className={iconClass} aria-hidden='true' />
  },
  {
    id: 3,
    name: 'system',
    display: 'System',
    icon: <Monitor className={iconClass} aria-hidden='true' />
  },
]