import React,{memo} from 'react';
import "./Button.css"

const Button= ({btnName,className,clickProp}) => {
    return (
        <>
            <button className={className} onClick={clickProp}>{btnName}</button>
        </>
        
    )
}

export default memo(Button);