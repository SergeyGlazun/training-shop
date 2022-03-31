import React from 'react';
import man from './img/man.png';
import woman from './img/woman.png';
import ForEmail from '../../Form/FormEmail/formEmail';
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
        
          <ForEmail classInput={"input"} 
          classButtonDisebleTrue={"buttonDisebleFalse"}
          classButtonDisebleFalse={"buttonDisebleTrue"}
          classError={"error"}
          idInput={'main-subscribe-mail-field'}
          idButton={'main-subscribe-mail-button'}  
          inputOK={'inputOKMain'}
          />
        </div>
        <img src={woman} alt='woman' className='woman' />
        <img src={man} alt='man' className='man' />
      </div>
    </div>
  );
};

export default MainSpecialOffer;
