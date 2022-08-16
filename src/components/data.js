import React from 'react'
import { FaLinkedin, FaTwitter, FaEnvelope, FaRegNewspaper } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
  },
  {
    id: 3,
    url: '/contact',
    text: 'Contact',
  },
  {
    id: 4,
    url: '/table',
    text: 'Table',
  },
  {
    id: 5,
    url: '/pictures',
    text: 'pictures',
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
