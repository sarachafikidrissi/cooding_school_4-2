import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-red-400 w-[80vw]'>
        <ul className='flex gap-x-4 items-center'>
            <Link to={{ pathname: '/todo' }}><li>Todo</li></Link>
            <Link to={{ pathname: '/product' }}><li>Product</li></Link>
        </ul>
    </nav>
  )
}
