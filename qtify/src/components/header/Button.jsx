import React from 'react';
import { Grid } from '@mui/material';
import "./Button.css"

const Button= ({btnName,className}) => {
    return (
        <Grid item xs={3}>
            <button className={className}>{btnName}</button>
        </Grid>
    )
}

export default Button;