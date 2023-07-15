import React, { useEffect, useState } from 'react';
import "./Grid.css";
import CardItems from "../resuable/CardItem";
import Button from '../../../common/Button';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';



const Grid = (props) => {
    const { name, URL, filter } = props;
    const [data, setData] = useState([]); //list of items from top albums   
    const [collapse, setCollapse] = useState("Show all"); //handle show all and collapse button
    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchApi = async () => {
        try {
            const getApiReq = await axios.get(URL);
            setData(getApiReq.data);
        } catch (e) {
            console.log(e.message)
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
            {/* rendering filter section conditionally with filter prop*/}
            {filter &&
                <div className='filter-section'>
                    <p>filter section</p>
                </div>
            }

            {/* card container div */}
            <div className={`grid-contents ${collapse}`}>
                {/* removing carousel function when show all is pressed */}
                {collapse === "Collapse" ? (
                    data.map((item) => (
                        <div key={item.id}>
                            {item.likes ? <CardItems img={item.image} likes={item.likes} title={item.title} songs />
                                :
                                <CardItems img={item.image} followCount={item.follows} title={item.title} />
                            }
                        </div>
                    ))
                ) : (
                    <Swiper
                        style={{ padding: "0px 32px " }}
                        initialSlide={0}
                        modules={[Navigation]}
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        allowTouchMove
                        className="swiper-slide-custom"
                    >

                        {
                            data.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        {/* checking if data is albums or songs */}
                                        {item.likes ? <CardItems img={item.image} likes={item.likes} title={item.title} songs />
                                            :
                                            <CardItems img={item.image} followCount={item.follows} title={item.title} />
                                        }
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>)}
            </div>

        </div>
    )
}

export default Grid