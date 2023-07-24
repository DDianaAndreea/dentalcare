import React from 'react'
import './Home.css'

import {PlayCircleIcon} from '@heroicons/react/24/solid'
import bannerImg from "./banner1.png"; 


function Home() {
  return (
    <div className='home_banner' >
        <div className='left'>
            <h3>Best Dental Care in Town</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            <div className='appointment'>
                <button>Request Appointment</button>
                <PlayCircleIcon className='play' />
            </div>
        </div>

        <div className='right' >
            <img src={bannerImg} alt=''/>
            

        </div>

    </div>
  )
}

export default Home