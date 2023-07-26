import React from 'react'
import './ReviewSection.css'
import ReviewCard from './ReviewCard'

function ReviewSection() {
  return (
    <>
        <div className='review_header'>
            <h3>
                What Our Patients Are Saying
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

        <div className='review_section'>
        <ReviewCard 
            name="Some One"
             review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            stars={3}
        />
        <ReviewCard 
            name="Some One"
             review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            stars={3}
        />
        <ReviewCard 
            name="Some One"
             review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            stars={3}
        />
        <ReviewCard 
            name="Some One"
             review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            stars={3}
        />
        <ReviewCard 
            name="Some One"
             review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            stars={3}
        />
        <ReviewCard 
            name="Some One"
             review ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            stars={3}
        />
      

    </div>
    </>
    
  )
}

export default ReviewSection