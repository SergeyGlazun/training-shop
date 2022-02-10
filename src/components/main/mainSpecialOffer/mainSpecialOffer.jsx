import React from 'react';

import man from './img/man.png';
import woman from './img/woman.png';

import './mainSpecialOffer.scss';

 const MainSpecialOffer = () => {
  return (
    <div className='mainSpecialOfferBlock'>
    <div className='smallBlockWrapper'>
      <div className='smallBlock'>
        <div className='title'>SPECIAL OFFER</div>
        <span className='subtitle'>
          SUBSCRIBE <br /> AND <span className='percent'>GET 10% OFF</span>
        </span>

        <input type='text' placeholder='Enter your email' className='input' />

        <button className='button' type='button'>
          SUBSCRIBE
        </button>
      </div>
      <img src={woman} alt='woman' className='woman' />
      <img src={man} alt='man' className='man' />
    </div>
  </div>
  );
};

export default MainSpecialOffer;
