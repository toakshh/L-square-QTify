import React, { useEffect, useState } from 'react';
import "./Grid.css";
import CardItems from "../resuable/CardItem";
import Button from '../../../common/Button';
import axios from 'axios';

const Grid = () => {
    const [data, setData] = useState([]); //list of songs from top albums   
    const [collapse, setCollapse] = useState("Show all");
    useEffect(() => {
        getTopSongs()
    }, [])

    const getTopSongs = async () => {
        const URL = "https://qtify-backend-labs.crio.do/albums/top";
        try {
            const getApiReq = await axios.get(URL);
            setData(getApiReq.data);
        } catch (e) {
            console.log(e.message)
        }
    }
    const handleCollapse= ()=>{
        if (collapse === "Show all"){
            setCollapse("Collapse");
        }else{
            setCollapse("Show all")
        }
    }
    return (
        <div className='grid-main'>
            <div className="grid-category">
                <h3>Top Albums</h3>
                <Button btnName={collapse} clickProp={handleCollapse}/>
            </div>
            <div className={`grid-contents ${collapse}`}>
                {
                    data.map((song) => {
                        return (
                            <div key={song.id}>
                                <CardItems img={song.image} followCount={song.follows} title={song.title} />
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Grid