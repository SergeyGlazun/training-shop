import React from 'react';
import Slider from '../../slider';
import { ArrSliderMainImg } from '../../../db/sliderMain';
import SectionNavigationMain from './navigationMain';

import './mainTop.scss';

const MainTop = ({particularNames,particularsCheck}) =>{
    return (
        <div className='mainTop'>
           <Slider array={ArrSliderMainImg} />
           <SectionNavigationMain particularNames={particularNames} particularsCheck={particularsCheck}/>       
        </div>
        
    )
}

export default MainTop;