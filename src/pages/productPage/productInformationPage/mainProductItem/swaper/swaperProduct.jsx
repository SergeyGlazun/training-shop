import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {  Navigation, Thumbs,Controller,FreeMode } from "swiper";



import { arrTipeItem } from '../../../../../db/ItemPages';

import './swaperProduct.scss';

const ProductSwiper = () =>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const setNext = () => controlledSwiper.slideNext();
    const setPrev = () => controlledSwiper.slidePrev();

    return(
       <>
         <div className='tipeItem'>
          
         <div className='sliderButtons'>
          <div aria-hidden type='button' className='sliderButton upButton' onClick={setPrev} />
          <div aria-hidden type='button' className='sliderButton downDutton' onClick={setNext} />
        </div>
          {
           <Swiper
      
           onSwiper={setThumbsSwiper}
           spaceBetween={10}
           slidesPerView={4}
           watchSlidesProgress
           modules={[Navigation, Thumbs, Controller]}
           className="sliderBlocTipe"
           breakpoints={{
          
            640: {
              width: 640,
             
            },
         
            768: {
              width: 768,
             
            },
          }}
            >

           {arrTipeItem.map((item) => (
             <SwiperSlide key={item.id}  >
             
               <img src={item.imageSrc} alt='img'  className='sliderImgTipe' /> 
             
                       
             </SwiperSlide>
           ))}
         </Swiper>
          }
     
        </div>

         <Swiper 
         data-test-id='product-slider'
          onSwiper={setControlledSwiper}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
          spaceBetween={10}
             slidesPerView={1} 
             navigation
            thumbs={{ swiper: thumbsSwiper }}
            className="sliderBlocItem"  
              >
        {arrTipeItem.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.imageSrc} alt='img' className='sliderImg' />          
          </SwiperSlide>
        ))}
      </Swiper>
       </>
    );
}

export default ProductSwiper;