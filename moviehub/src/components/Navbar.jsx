import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

function Navbar() {
  return ( 
    <div>
    <div className='fixed bg-white dark:bg-[#242424] w-full z-10 shadow-md p-5 px-20'>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <img src={logo} alt="" className='h-20 w-20'/>
                <div>
                <h1 className='text-xl font-bold'>MovieHub</h1>
                <p className='text-sm'>All films are here</p>
                </div>
            </div>
            <ul className='flex gap-5 items-center'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/allmovie'>All movie</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className='flex items-center'>
                <SearchBox />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar