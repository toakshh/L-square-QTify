import React from 'react'
import CardItem from "../resuable/CardItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import Filter from '../filter/Filter';
import "./Grid.css";

const GridItem = (props) => {
    const {filter, data,collapse}= props;
    
  return (
    <>
    {/* rendering filter section conditionally with filter prop*/}
    {filter &&
        <div className='filter-section'>
            {/* filter component mounted here */}
            <Filter /> 
        </div>
    }

    {/* card container div */}
    <div className={`grid-contents ${collapse}`}>
        {/* removing carousel function when show all is pressed */}
        {collapse === "Collapse" ? (
            data.map((item) => (
                <div key={item.id}>
                    {item.likes ? <CardItem img={item.image} likes={item.likes} title={item.title} songs />
                        :
                        <CardItem img={item.image} followCount={item.follows} title={item.title} />
                    }
                </div>
            ))
        ) : (
            <Swiper
                style={{ padding: "0 25px",margin:"0" }}
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
                                {item.likes ? <CardItem img={item.image} likes={item.likes} title={item.title} songs />
                                    :
                                    <CardItem img={item.image} followCount={item.follows} title={item.title} />
                                }
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>)}
    </div>
    </>
  )
}

export default GridItem