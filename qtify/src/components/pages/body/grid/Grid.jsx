import React, { useEffect, useState,memo } from 'react';
import "./Grid.css";
import Button from '../../../common/Button';
import GridItem from './GridItem';
import Filter from '../filter/Filter';
import Error from '../../error/Error'
import { CircularProgress,Box,Typography } from '@mui/material';
import useApiCall from '../../../../hooks/useApiCall';


const Grid = (props) => {
    const { name, URL, filter } = props;
    const [collapse, setCollapse] = useState("Show all"); //handle show all and collapse button
    const [data,loading,error]= useApiCall(URL); //custom hook to fetch api data

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
            {error ? <Error msg={error}/> :
                loading ? (
                    <Box className="loading">
                      <CircularProgress color="success" />
                      <Typography gutterBottom >
                        Loading Products...
                      </Typography>
                    </Box>)
                    :
                    (filter ?
                        <Filter data2={data} collapse={collapse} />
                        :
                        <GridItem data={data} collapse={collapse} />)
            }
        </div>
    )
}

export default memo(Grid)