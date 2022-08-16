import React from 'react'
import { FaLinkedin, FaTwitter, FaEnvelope, FaRegNewspaper } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'random',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://twitter.com/Johntran1203',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://johntran-portfolio.netlify.app/',
    icon: <FaRegNewspaper />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/john-tran123/',
    icon: <FaLinkedin/>
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaEnvelope />,
  },
]
