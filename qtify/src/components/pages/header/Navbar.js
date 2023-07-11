import React from 'react';
import "./Navbar.css";
import Logo from './Logo';
import Search from './Search';
import Button from '../../common/Button';
import { Grid } from '@mui/material';


const Navbar = () => {
    return (
        <Grid container  >
        <nav className='navbar-main'>
            <Logo />
            <Search />
            <Button btnName="Give Feedback" className="feedback-btn" />
        </nav>
        </Grid>
    )
}

export default Navbar