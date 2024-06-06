import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
          <Link href="/">Home</Link> &emsp;&emsp;&emsp;
          <Link href="/contact">Contact</Link>  &emsp;&emsp;&emsp;
          <Link href="/about-us">About</Link>  &emsp;&emsp;&emsp;
          <Link href="/todo">Todo</Link>&emsp;&emsp;&emsp;
        </nav>
  )
}

export default Navbar