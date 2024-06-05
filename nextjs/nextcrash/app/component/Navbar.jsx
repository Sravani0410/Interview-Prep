import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about-us">About</Link>
        </nav>
  )
}

export default Navbar