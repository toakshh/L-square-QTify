import React,{memo} from 'react';
import Grid  from './grid/Grid';
import apiUrl from '../../assets/api/index';
import Hero from './hero/Hero';
import "./Body.css"
import AccordionParent from './accordian/AccordionParent';

const Body = () => {
  return (
    <>
        <Hero />
        <Grid name="Top Albums" URL = {apiUrl.top} />
        <Grid name="New Albums" URL= {apiUrl.new} />
        <div className='grid-filter'>
          <Grid name="Songs" URL= {apiUrl.songs} filter />
        </div>
        <AccordionParent />
    </>
  )
}

export default memo(Body)