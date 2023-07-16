import React from 'react';
import "./CardItem.css";
import { Card, CardActionArea } from '@mui/material';
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardItem = (props) => {
  const { img, followCount, title, songs, likes } = props
  return (

    <div className="card-main">
      <Card style={{ borderRadius: "10px" }}>
        <CardActionArea>
          <div className='img-follow'>
            {/* <img className='image' src={img} alt="songs cover" loading='lazy' /> */}
            <LazyLoadImage src={img}
              width={159} height={170}
              alt="img cover"
            />
            <div className='follow'>
              <p className='follow-content'>
                {songs ? `${likes} Likes` : `${followCount} Follows`}
              </p>
            </div>
          </div>
        </CardActionArea>
      </Card>
      <div className='title'>{title}</div>
    </div >

  )
}

export default CardItem