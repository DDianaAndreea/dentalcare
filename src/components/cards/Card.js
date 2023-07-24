import React from 'react'
import './Card.css'

function Card({Icon, title, description, iconColor}) {
  return (
    <div className='card'>
        <Icon style={{color:iconColor}}  className="icon"/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card