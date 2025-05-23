import React from 'react'
import { Bluesky, Instagram } from './Icon'

const iconClass = 'inline-block h-4 h-6 w-6 text-lila-900 dark:text-fuzz-300'

const socials = [
  {
    id: 1,
    label: 'Follow me on Bluesky',
    link: 'https://bsky.app/profile/haloroundmyhead.com',
    icon: <Bluesky className={iconClass} aria-hidden='true' />
  },
  { 
    id: 2,
    label: 'Follow me on Instagram',
    link: 'https://www.instagram.com/haloroundmyhead/',
    icon: <Instagram className={iconClass} aria-hidden='true' />
  },
]

// a tiny box of social media icon links
const SocialMedia = () => (
  <div className='flex items-center justify-center space-x-1 border-l border-phthalo-200 ml-6 px-4 dark:border-phthalo-700'>
    <ul className='flex'>
      {socials.map((social) => (
        <li key={social.id} className='hover:bg-phthalo-100 dark:hover:bg-phthalo-900 rounded-full max-[370px]:p-1 p-2'>
          <a
            href={social.link}
            aria-label={social.label}
            rel='noopener'
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialMedia