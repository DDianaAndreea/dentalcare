import React from 'react'
import './Appointement.css'
import image from "./img.png"; 

function Appointement() {
  return (
    <div className='section'>
        <div className='img_section'>
        <img src={image} alt=''/>
        </div>
        <div className='info_section'>
            <h3>There Are Lots Of Reasons To Choose Us</h3>
            <p><span className='p_1'><b>Speed:</b></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p><span className='p_2'><b>Simplicity:</b></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p><span className='p_3'><b>Quality:</b></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Request Appointement</button>
        </div>
    </div>
  )
}

export default Appointement