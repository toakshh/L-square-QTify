import React from 'react'
import { Grid } from '@mui/material';
import {ReactComponent as Searchicon} from "../../assets/svg/Search icon.svg";
import "./Search.css";

const Search = () => {
    return (
        <Grid className='search-main' item xs={6}>
            <form className='search-parent'>
                <input type="text" placeholder='Search an album of your choice'/>
                <button className='search-btn' onClick={(e)=>{e.preventDefault()}}><Searchicon /></button>
            </form>
            
        </Grid>
    )
}

export default Search