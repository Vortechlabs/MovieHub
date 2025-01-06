import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <div className='w-screen max-w-7xl'>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <img src={logo} alt="" className='h-20 w-20'/>
                <div>
                <h1 className='text-xl font-bold'>MovieHub</h1>
                <p className='text-sm'>All films are here</p>
                </div>
            </div>
            <ul className='flex gap-5 items-center'>
                <a href=""><li>Home</li></a>
                <a href=""><li>All movie</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar