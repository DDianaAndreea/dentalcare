import React from 'react'
import './Footer.css'
import { CalendarDaysIcon, MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'

function Footer() {
  return (
    <div className='footer-container'>
    <div className='footer'>
        <div className='address'>
            <div className='address_item'><MapPinIcon /><p>123 Street, NY</p></div>
            <div className='address_item'><PhoneArrowUpRightIcon /><p>123-456-7890</p></div>
            <div className='address_item'><CalendarDaysIcon /><p>Mon-Fri: 8.30am - 4pm</p></div>
        </div>

        <div className='company'>
          <h4>Company</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          
        </div>

        <div className='service'>
          <h4>Services</h4>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
        </div>
    </div>
    <hr style={{margin:10}}/> 
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  )
}

export default Footer