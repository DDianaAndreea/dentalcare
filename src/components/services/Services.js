import React from 'react'
import Card from '../cards/Card'
import {SparklesIcon,SunIcon} from '@heroicons/react/24/solid'
import './Services.css'

function Services() {
  return (
    <div className='services'>
        <div className='info'>
            <h3>Our Services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div> 
            
            <div className='section_1'>
                <Card 
                    Icon={SunIcon}
                    iconColor='#0294fe'
                    title='Whitening'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <Card 
                    Icon={SparklesIcon}
                    iconColor='#244e95'
                    title='Bonding'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <Card 
                    Icon={SunIcon}
                    iconColor='#43d4ca'
                    title='Veneers'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
            </div>
            
            <div className='section_2'>
                <Card 
                    Icon={SparklesIcon}
                    iconColor='#f26458'
                    title='Crowns'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <Card 
                    Icon={SunIcon}
                    iconColor='#6dbdca'
                    title='Implants'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <Card 
                    Icon={SparklesIcon}
                    iconColor='#628fd3'
                    title='Bridges'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
            </div>
           
    
    </div>
  )
}

export default Services