import React from 'react';
import { Grid } from '@mui/material';
import {ReactComponent as LogoImg} from "../assets/logo.svg";
import "./Logo.css"

const Logo = () => {
    return (
        <Grid item xs={3}>
            <a href='./'><LogoImg /></a>
        </Grid>
    )
}

export default Logo