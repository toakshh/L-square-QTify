import React from 'react'
import './Loading.css';
import { Box,CircularProgress,Typography } from '@mui/material';
const Loading = () => {
  return (
    (
        <Box className="loading">
            <CircularProgress color="success" />
            <Typography gutterBottom >
                Loading files...
            </Typography>
        </Box>)
  )
}

export default Loading