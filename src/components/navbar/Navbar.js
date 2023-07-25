import React from 'react'
import  './Navbar.css'
import {Bars3Icon, PhoneIcon} from '@heroicons/react/24/solid'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='btn_menu'>
        < Bars3Icon className='menu_icon'/>
      </div>
      <div className='nav_logo'> 
        <p>DentalCare</p>
      </div>
      <div className='nav_menu'>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>SERVICES</p>
        <p>PATIENT</p>
        <p>RESOURCES</p>
        <p>CONTACT</p>
      </div>
      <div className='nav_right'>
        <PhoneIcon className='phone_icon'/>
        <p> 237-565-4586</p>
      </div>
    </div>
  )
}

export default Navbar