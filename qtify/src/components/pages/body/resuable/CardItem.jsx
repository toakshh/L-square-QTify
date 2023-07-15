import React from 'react';
import "./CardItem.css";


const CardItem = (props) => {
    const {img,followCount,title,songs,likes}= props
  return (
    <div className="card-main">
        <div className='img-follow'>
            <img className='image' src={img} alt="songs cover" loading='lazy'/>
        <div className='follow'>
            <p className='follow-content'>
            {songs ? `${likes} Likes` : `${followCount} Follows`}
            </p>    
        </div>
        </div>
        <div className='title'>{title}</div>
    </div>
  )
}

export default CardItem