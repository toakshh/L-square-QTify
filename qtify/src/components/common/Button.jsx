import React from 'react';
import { Grid } from '@mui/material';
import "./Button.css"

const Button= ({btnName,className,clickProp}) => {
    return (
        <Grid item xs={3}>
            <button className={className} onClick={clickProp}>{btnName}</button>
        </Grid>
    )
}

export default Button;