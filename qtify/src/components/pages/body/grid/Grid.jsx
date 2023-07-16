import React, { useEffect, useState } from 'react';
import "./Grid.css";
import axios from 'axios';
import 'swiper/css';
import Button from '../../../common/Button';
import GridItem from './GridItem';
import Filter from '../filter/Filter';
import { CircularProgress,Box,Typography } from '@mui/material';



const Grid = (props) => {
    const { name, URL, filter } = props;
    const [data, setData] = useState([]); //list of items from top albums   
    const [collapse, setCollapse] = useState("Show all"); //handle show all and collapse button
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchApi = async () => {
        try {
            setLoading(true);
            const getApiReq = await axios.get(URL);
            setData(getApiReq.data);
            setLoading(false);
        } catch (e) {
            setLoading(true)
            console.log(e.message)
            setLoading(false)
        }
    }
    const handleCollapse = () => {
        if (collapse === "Show all") {
            setCollapse("Collapse");
        } else {
            setCollapse("Show all")
        }
    }
    return (
        <div className='grid-main'>

            <div className="grid-category">
                <h3>{name}</h3>
                <Button btnName={collapse} clickProp={handleCollapse} />
            </div>
            {
                loading ? (
                    <Box className="loading">
                      <CircularProgress color="success" />
                      <Typography gutterBottom >
                        Loading Products...
                      </Typography>
                    </Box>)
                    :
                    (filter ?
                        <Filter data={data} collapse={collapse} />
                        :
                        <GridItem data={data} collapse={collapse} />)
            }
        </div>
    )
}

export default Grid