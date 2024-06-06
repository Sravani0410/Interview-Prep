import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return (
    <div>
        <div className='p-2 text-red-500'>Notfound</div>
        <div className='p-2 text-green-500'>Hi! Wanna go back to Home Page <Link href={'/'}>Back to Home</Link></div>
    </div>
  )
}

export default Notfound