import React, {useState} from 'react';

import Prev from './imgButtonLeftRight/prev.svg';
import Next from './imgButtonLeftRight/next.svg';

import './slider.scss';

function Example(array) {
    let [count, setCount] = useState(0);

    if(count>=array.length-1){
        count = array.length-1;
    }

    if(count<=0){
        count = 0;
    }

    return (
      <div  className="sliderBloc">
        {<div><img src={Prev} alt='prev'  onClick={(e) =>setCount(--count)} className="prevImg"/></div>}
        {<div><img src={Next}alt='next' onClick={(e) =>setCount(count+1)} className="nextImg"/></div>}
        <img src={ array[count].imageSrc} alt='img' className='sliderImg' />                
        {
            <div className='btn'>
              <div className='title'>{array[count].title}</div>
              <div className='text'>{array[count].text}</div>
            </div>
        }
      </div>
    );
  }


 const Slider = ({array}) =>{

     return(
        <div className='slider'>
            {Example(array)}
        </div>
     );
 }

 export default Slider;