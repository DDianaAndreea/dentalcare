import React from 'react'
import './ReviewCard.css'
import { StarIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function ReviewCard({name, review, stars}) {
    
  return (
    <div className='review_card'>
        <UserCircleIcon  className='user_icon'/>
        <p className='name'>{name}</p>
        <p className='review'>"{review}"</p>
        <div className='stars'>
            <StarIcon  style={{height:15}}/>
            <StarIcon  style={{height:15}}/>
            <StarIcon  style={{height:15}}/>
            
        </div> 

    </div>
  )
}

export default ReviewCard