import React,{memo} from 'react';
import "./CardItem.css";
import { Card, CardActionArea,Tooltip,Zoom, styled, tooltipClasses } from '@mui/material';
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardItem = (props) => {
  const { img, followCount, title, songs, likes ,tooltip} = props

  const ThemedTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "var(--dark-color)",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--dark-color)",
    color:theme.palette.primary.main,
    padding: "10px",
    fontSize:"12px",
    fontWeight: "bold",
    borderRadius:"15px",
    boxShadow: " 0 0 15px green",
    border: "1px solid green",
  },
  
}));

  return (

    <div className="card-main">
      { tooltip ? 
      <ThemedTooltip title={`${tooltip} songs`} placement='top' TransitionComponent={Zoom} disableFocusListener enterTouchDelay={0}  >
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
      </ThemedTooltip>
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

export default memo(CardItem);