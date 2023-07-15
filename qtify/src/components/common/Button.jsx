import React from 'react';
import "./Button.css"

const Button= ({btnName,className,clickProp}) => {
    return (
        <div item xs={3}>
            <button className={className} onClick={clickProp}>{btnName}</button>
        </div>
    )
}

export default Button;