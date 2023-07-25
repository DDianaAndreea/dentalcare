import React from 'react'
import './Description.css'
import image from "./img.png"

function Description() {
  return (
    <div className='grid_container'>
        <div className='grid_left'>
            <h3>Meet Our Expert Dentist</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <h2>Licenses And Certifications</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor </li>
            </ul>
        </div>
        <div className='grid_right'>
        <img src={image} alt=''/>
        </div>

    </div>
  )
}

export default Description