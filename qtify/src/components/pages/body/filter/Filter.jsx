import React, { useEffect, useState } from 'react'
import genres from "../../../assets/api/index"
import axios from 'axios';
import "./Filter.css"
import {Tab,Box} from '@mui/material';
import {TabContext, TabList,TabPanel,} from '@mui/lab';
import GridItem from '../grid/GridItem';

const Filter = (props) => {
  const {data,collapse}= props
    const [userData,setUserData] = useState([]);
    const URL= genres.genres;
    const [value, setValue] = useState("all");
    const fetchApi= async()=>{
      try{
        const api = await axios.get(URL);
        setUserData(api.data.data)
      }catch(e){
        console.log(e.message)
      }
    }
    useEffect(()=>{
      fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  const handleChange = (event,newValue) => {
    setValue(newValue)
  };
  return (
    <div className='filter-main'>
     <Box sx={{ width: '100%', typography: 'body1', color:"white" }}>
      <TabContext value={value}>

        <Box style={{color:'white'}}>
          <TabList onChange={handleChange} textColor="inherit"
            indicatorColor="primary">
            <Tab label="All" value="all" sx={{color:'white',fontSize:'16px', fontWeight:'600',maxWidth:"100%"}}
            />
              {userData.map(item=>{
                  return <Tab label={item.label} value={item.key} key={item.key} sx={{color:'white',fontSize:'16px', fontWeight:'600'}}/>
              })}
          </TabList>
        </Box>
        <TabPanel value={value} sx={{padding:"24px 0"}}>
              {
              value === "all" ? 
                <GridItem data={data} collapse={collapse} />
                :
                <GridItem data={data.filter(item=>item.genre.key===value)} collapse={collapse} />
              }
        </TabPanel>
        
      </TabContext>
    </Box>
    </div>
    
  )
}

export default Filter