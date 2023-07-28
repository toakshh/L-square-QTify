import React, { useState, memo } from 'react';
import "./Grid.css";
import Button from '../../../common/Button';
import GridItem from './GridItem';
import Filter from '../filter/Filter';
import Error from '../../error/Error'
// import { CircularProgress, Box, Typography } frm '@mui/material';
import useApiCall from '../../../../hooks/useApiCall';
import Loading from '../../loading/Loading';


const Grid = (props) => {
    const { name, URL, filter } = props;
    const [collapse, setCollapse] = useState("Show all"); //handle show all and collapse button
    const [data, loading, error] = useApiCall(URL); //custom hook to fetch api data

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
            {/* if gets any error then show error page */}
            {error ? 
                <Error msg={error} /> 
                :
                // if api loading then show loading component
                loading ? (<Loading />)
                    :
                    // filter exist in prop then show filter component else griditems
                    (filter ?
                        <Filter data={data} collapse={collapse} />
                        :
                        <GridItem data={data} collapse={collapse} />)
            }
        </div>
    )
}

export default memo(Grid)