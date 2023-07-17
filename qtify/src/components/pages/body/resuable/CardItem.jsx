import React from 'react';
import "./CardItem.css";
import { Card, CardActionArea,Tooltip,Zoom } from '@mui/material';
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardItem = (props) => {
  const { img, followCount, title, songs, likes ,tooltip} = props
  return (

    <div className="card-main">
      { tooltip ? 
      <Tooltip title={`${tooltip} songs`} placement='top' TransitionComponent={Zoom} disableFocusListener disableTouchListener arrow>
      <Card style={{ borderRadius: "10px" }}>
        <CardActionArea>
          <div className='img-follow'>
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
      </Tooltip>
      :
      <Card style={{ borderRadius: "10px" }}>
        <CardActionArea>
          <div className='img-follow'>
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
      }
      <div className='title'>{title}</div>
    </div >

  )
}

export default CardItem