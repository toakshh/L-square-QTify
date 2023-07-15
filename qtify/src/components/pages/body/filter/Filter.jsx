// // import React,{useState} from 'react'
// // import {Box, Tabs, Tab} from '@mui/material';



// // const Filter = () => {


// //   const [value, setValue] = useState('1');

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   return (
// //     <Box sx={{ width: '100%' }}>
// //       <Tabs
// //         value={value}
// //         onChange={handleChange}
// //         textColor="secondary"
// //         indicatorColor="secondary"
// //         aria-label="secondary tabs example"
// //       >
// //         <Tab value="one" label="Item One" />
// //         <Tab value="two" label="Item Two" />
// //         <Tab value="three" label="Item Three" />
// //       </Tabs>
// //     </Box>
// //   );

// // }

// // export default Filter



// import React, { useEffect } from "react";
// import "swiper/css";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import  {Navigation}  from "swiper/modules";
// //import { useSwiperSlide } from 'swiper/react';




// const Carousel = ({ data, component }) => {
//   return (
//     <div >
//       <Swiper
//         style={{ padding: "0px 20px " }}
//         initialSlide={0}
//         modules={[Navigation]}
//         slidesPerView={"auto"}
//         spaceBetween={40}
//         allowTouchMove
//       >


//         {data.map((item) => {
//           return <SwiperSlide>{component(item)}</SwiperSlide>;
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;