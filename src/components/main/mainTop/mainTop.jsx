import React from 'react';
import Slider from '../../slider';
import { ArrSliderMainImg } from '../../../db/sliderMain';
import SectionNavigationMain from './navigationMain';

import './mainTop.scss';

const MainTop = () =>{
    return (
        <div className='mainTop'>
           <Slider array={ArrSliderMainImg} />
           <SectionNavigationMain/>       
        </div>
        
    )
}

export default MainTop;