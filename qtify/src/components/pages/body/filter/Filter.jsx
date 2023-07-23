import React, { useEffect, useState, memo, useCallback } from 'react'
import genres from "../../../assets/api/index"
import { Tab, Box } from '@mui/material';
import { TabContext, TabList, TabPanel, } from '@mui/lab';
import GridItem from '../grid/GridItem';
import useApiCall from '../../../../hooks/useApiCall';
import "./Filter.css"



const Filter = (props) => {
  const { data, collapse } = props
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

  const handleChange = useCallback( (event, newValue) => {
    setValue(newValue)
  },[])



  return (
    <div className='filter-main'>
      <Box sx={{ typography: 'body1', color: "white" }} >
        <TabContext value={value} >
          {/* only render this component when songs data are available */}
          {songs && 
          <>          
          {/* filter headers */}
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
          {/* body of filtered songs */}
          <TabPanel value={value} sx={{ padding: "24px 0"}}>
            {
              value === "all" ?
                <GridItem data={data} collapse={collapse} />
                :
                <GridItem data={data.filter(item => item.genre.key === value)} collapse={collapse} />
            }
          </TabPanel>
          </>}

        </TabContext>
      </Box>
      
    </div>

  )
}

export default memo(Filter)