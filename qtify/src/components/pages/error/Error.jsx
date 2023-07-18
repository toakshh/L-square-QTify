import React from 'react'
import "./Error.css";
import error from '../../assets/png/error.png';

const Error = (props) => {
    const {msg} = props;
  return (
    <div className='error-main'>
       <img src={error} alt="error" />
       <span>
            {msg}
            <div>Please try again later. Thanks</div>
       </span>  
    </div>
  )
}

export default Error