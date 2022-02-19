import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';

import './slider.scss';

const Slider = ({ array }) => {

  return (
    <div className='slider' data-test-id='main-slider'>



      <Swiper modules={[Navigation]} navigation slidesPerView={1} className="sliderBloc">
        {array.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.imageSrc} alt='img' className='sliderImg' />
            <div className='btn'>
              <div className='title'>{item.title}</div>
              <div className='text'>{item.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default Slider;