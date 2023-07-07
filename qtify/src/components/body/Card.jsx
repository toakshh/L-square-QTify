import React from 'react';
import "./Card.css";

const Card = (props) => {
    const {img,followCount,title}= props
  return (
    <div className='card-main'>
        <div className='img-follow'>
        <img className='image' src={img} alt="" />
        <div className='follow'>
            <p className='follow-content'>
            {`${followCount} Follows`}
            </p>    
        </div>
        </div>
        
        <div className='title'>{title}</div>
    </div>
  )
}

export default Card