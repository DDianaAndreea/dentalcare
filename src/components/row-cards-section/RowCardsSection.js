import React from 'react'
import Card from '../cards/Card'
import {MicrophoneIcon} from '@heroicons/react/24/solid'
import {AcademicCapIcon} from '@heroicons/react/24/solid'
import {SparklesIcon} from '@heroicons/react/24/solid'
import './RowCardsSection.css'

function RowCardsSection() {
  return (
    <div className='row'>
      <Card 
        Icon={MicrophoneIcon}
        iconColor='#48d6cb'
        title='Free Consultation'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      
      <Card 
        Icon={AcademicCapIcon}
        iconColor='#1c4891'
        title='Expert Dentist'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />

      <Card 
        Icon={SparklesIcon}
        iconColor='#0093fe'
        title='Over 4.9 User Rating'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />

    </div>
  )
}

export default RowCardsSection