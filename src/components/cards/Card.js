import React from 'react'
import './Card.css'

function Card({Icon, title, desciption, iconColor}) {
  return (
    <div className='card'>
        <Icon style={{color:iconColor}}  className="icon"/>
        <h3>{title}</h3>
        <p>{desciption}</p>
    </div>
  )
}

export default Card