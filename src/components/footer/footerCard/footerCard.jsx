import stripe from './img/stripe.svg';
import aes from './img/aes.svg';
import paypal from './img/paypal.svg';
import visa from './img/visa.svg';
import mastercard from './img/mastercard.svg';
import discover from './img/discover.svg';
import americanExpress from './img/americanExpress.svg';

import './footerCard.scss'
const FooterCard = () =>{
    return(
        <div className='footerCard'>
        <div className='wrapper'>
          <div className='text'>Copyright © 2032 all rights reserved</div>
          <div className='icons'>
            <img src={stripe} alt='stripe' className='stripe' />
            <img src={aes} alt='aes' className='aes' />
            <img src={paypal} alt='paypal' className='paypal' />
            <img src={visa} alt='visa' className='visa' />
            <img src={mastercard} alt='mastercard' className='mastercard' />
            <img src={discover} alt='discover' className='discover' />
            <img src={americanExpress} alt='americanExpress' className='americanExpress' />
          </div>
          <a href='https://clevertec.ru/study/frontend.html' target='_blank' rel='noreferrer' className='text-link'>
            Clevertec.ru/training
          </a>
        </div>
      </div>
    );
}

export default FooterCard ;