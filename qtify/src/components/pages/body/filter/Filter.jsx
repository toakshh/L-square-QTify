import React, { useEffect, useState, memo } from 'react'
import genres from "../../../assets/api/index"
import "./Filter.css"
import { Tab, Box } from '@mui/material';
import { TabContext, TabList, TabPanel, } from '@mui/lab';
import GridItem from '../grid/GridItem';
import useApiCall from '../../../../hooks/useApiCall';



const Filter = (props) => {
  const { data2, collapse } = props
  const [songs, setSongs] = useState([]);
  const URL = genres.genres;
  const [value, setValue] = useState("all");
  const [apiData,loading,error] = useApiCall(URL); 

  useEffect(() => {
    if (apiData && apiData.data) {
      setSongs(apiData.data);
    }else{
      setSongs([]);
    }
  }, [apiData, loading, error]);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };



  return (
    <div className='filter-main'>
      <Box sx={{ typography: 'body1', color: "white" }} >
        <TabContext value={value} >
          {songs && 
          <>          
          <Box style={{ color: 'white', display: 'flex', width: "60%" }} >
            <TabList onChange={handleChange}
              textColor="inherit"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              style={{maxWidth:"fit-content"}}
            >
              <Tab label="All" value="all" sx={{ color: 'white', fontSize: '16px', fontWeight: '600' }}
              />
              {songs.map(item => {
                return <Tab label={item.label} value={item.key} key={item.key} sx={{ color: 'white', fontSize: '16px', fontWeight: '600' }} />
              })}
            </TabList>
          </Box>
          
          <TabPanel value={value} sx={{ padding: "24px 0"}}>
            {
              value === "all" ?
                <GridItem data={data2} collapse={collapse} />
                :
                <GridItem data={data2.filter(item => item.genre.key === value)} collapse={collapse} />
            }
          </TabPanel>
          </>}

        </TabContext>
      </Box>
      
    </div>

  )
}

export default memo(Filter)