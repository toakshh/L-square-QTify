import React,{memo} from 'react';
import CardItem from "../resuable/CardItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import "./Grid.css";

const GridItem = (props) => {
    const { data,collapse}= props;
    
  return (
    <div className={`grid-contents ${collapse}`}>
        {/* removing carousel function when show all is pressed */}
        {collapse === "Collapse" ? (
            data.map((item) => (
                <div key={item.id}>
                    {item.likes ? <CardItem img={item.image} likes={item.likes} title={item.title} songs />
                        :
                        <CardItem img={item.image} followCount={item.follows} title={item.title} tooltip={item.songs.length}/>
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
                                {item.likes ? 
                                    <CardItem img={item.image} likes={item.likes} title={item.title} songs />
                                    :
                                    <CardItem img={item.image} followCount={item.follows} title={item.title} tooltip={item.songs.length}/>
                                }
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>)}
    </div>
  )
}

export default memo(GridItem)