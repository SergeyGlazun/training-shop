import React from 'react';

import { arrColotItemProduct } from "../../../../db/ItemPages";
import './colorSize.scss';

const ColorSize = () =>{
    return(
  <div>
          <div className='colorItem'>
            {
              arrColotItemProduct.map(({ id, imageSrc }) => (
                <div key={id} >
                  <img src={imageSrc} alt='imgUser' className='colorImg'/>
                </div>
              ))
            }
          </div>
         
          <div className='sizeBtn'>
            <button type='button'>XS</button>
            <button type='button'>S</button>
            <button type='button'>M</button>
            <button type='button'>L</button>
          </div>
  </div>
    );
}

export default ColorSize;