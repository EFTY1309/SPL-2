import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='navbar'>
      <img  src="/images/Logo.png"
            alt="Dhaka University Swimming Pools Logo" className="nav-logo" />
      <img  src="/images/nav-profile.svg" alt="navprofile" className="navProfile" />
    </div>
  )
}

export default Header
