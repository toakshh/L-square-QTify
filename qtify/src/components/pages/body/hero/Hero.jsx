import React,{memo} from 'react';
import {ReactComponent as HeroImage} from "../../../assets/svg/vibratingheadphone.svg";
import "./Hero.css"
import { Grid } from '@mui/material';

const Hero = () => {
  return (
    <Grid container className='hero-main'>
        <h1 className='hero-text'>
            <div>100 Thousand Songs, ad free</div>
            <div>Over thousands podcast episodes</div>
        </h1>
        <HeroImage />
    </Grid>
  )
}

export default memo(Hero)