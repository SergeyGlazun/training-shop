import React from 'react';

import  {arrWeCan} from '../../../../db/weCan';

import './weCan.scss';

const WeCan = () =>{
    return(
        <div className='benefits'>
        {arrWeCan.map(({ id, imageSrc, title, text, name }) => (
         <div key={id} className='weCanItem'>
         <img src={imageSrc} alt={name} className='weCanItemImg' />
         <div className='weCanItemText'>
           <div className='title'>{title}</div>
           <div className='text'>{text}</div>
         </div>
       </div>
        ))}
      </div>
    );
}

export default  WeCan;