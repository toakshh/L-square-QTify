import React,{memo, useState, useRef, useContext} from 'react';
import { Grid } from '@mui/material';
import {ReactComponent as Searchicon} from "../../assets/svg/Search icon.svg";
import "./Search.css";
// import apiURL from "../../assets/api/index";
// import useApiCall from "../../../hooks/useApiCall";
// import Context from '../../../context/Context';


const Search = () => {
    // const [data] = useApiCall(apiURL.songs)
    // const [showDropDown, setShowDropDown] = useState([]);
    // const [show,setShow] = useState(false);

    const first = useRef("");
    const handleSearching= ()=>{
        // if(first.current.value.length>=1) setShow(true);
        // if(first.current.value.length===0) setShow(false);
        // return first.current.value;
    }
    const handleSearch= (e)=>{
        e.preventDefault();
        // const searched= data.filter(item =>{
        //     const title= item.title.toLowerCase();
        //     return title.includes(first.current.value.toLowerCase());
        // })
        // setShowDropDown(searched)
    }
    return (
        <Grid className='search-main' item xs={6}>
            <form className='search-parent'>
                <input type="text" placeholder='Search an album of your choice' onChange={handleSearching} ref={first} />
                <button className='search-btn' onClick={(e)=>handleSearch(e)}><Searchicon /></button>
            </form>

            
        </Grid>
    )
}

export default memo(Search)