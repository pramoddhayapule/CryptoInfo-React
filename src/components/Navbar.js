import React from 'react'
import {GiTwoCoins} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'>
    <div>
        <div className='navbar'>
        <GiTwoCoins className='icon'/>
        <h1> Crypto <span className='cadetblue'>Info</span></h1>
        </div>
    </div>
    </Link>
  )
}

export default Navbar