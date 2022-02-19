import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';

import './slider.scss';



// function Example(array) {
//     let [count, setCount] = useState(0);

//     if(count>=array.length-1){
//         count = array.length-1;
//     }

//     if(count<=0){
//         count = 0;
//     }

//     return (
//       <div  className="sliderBloc">
//         {<div><img src={Prev} alt='prev'  onClick={(e) =>setCount(--count)} className="prevImg"/></div>}
//         {<div><img src={Next}alt='next' onClick={(e) =>setCount(count+1)} className="nextImg"/></div>}
//         <img src={ array[count].imageSrc} alt='img' className='sliderImg' />                
//         {
//             <div className='btn'>
//               <div className='title'>{array[count].title}</div>
//               <div className='text'>{array[count].text}</div>
//             </div>
//         }
//       </div>
//     );
//   }


const Slider = ({ array }) => {

  return (
    <div className='slider' data-test-id='main-slider'>
   


      <Swiper  modules={[Navigation, EffectFade]} navigation effect='fade' slidesPerView={1} className="sliderBloc">
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