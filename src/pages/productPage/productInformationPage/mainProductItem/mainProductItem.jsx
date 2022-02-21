import React from 'react';

import { arrColotItemProduct } from '../../../../db/ItemPages';
import Raiting from '../../../../components/reiting/raiting';


import hanger from './img/hanger.svg'

import heart from './img/heart.svg';
import scale from './img/scale.svg';
import car from './img//sectionScope/car.svg';
import repit from './img//sectionScope/return.svg';
import mail from './img//sectionScope/mail.svg';
import annotation from './img/anotation.svg';

import { arrMasterCard } from '../../../../db/ItemPages';
import ProductSwiper from './swaper';


import './mainProductItem.scss';


function reting(arrRevies) {
  let overallRating = 0;

  arrRevies.map(({ rating }) => (
    overallRating += +rating
  ))
  return overallRating / arrRevies.length;
}


const MainProductItem = ({ productItem, arrReviews }) => {
  let arr = [];
  arr.push(productItem)

  return (
    <div className='productSection wrapper'>

      <div className='slidecContener'>
      
      <ProductSwiper />
      </div>

      <div className='Information'>
        <div className='parametr'>
          <span>
            COLOR:<span className='bold'>Blue</span>
          </span>
          <div className='colorItem'>
            {
              arrColotItemProduct.map(({ id, imageSrc }) => (
                <div key={id} >
                  <img src={imageSrc} alt='imgUser' />
                </div>
              ))
            }
          </div>
          <div className='size'>
            SIZE:<span className='bold'>S</span>
          </div>
          <div className='sizeBtn'>
            <button type='button'>XS</button>
            <button type='button'>S</button>
            <button type='button'>M</button>
            <button type='button'>L</button>
          </div>
          <div className='hanger'>
            <img src={hanger} alt='hanger' />
            <span>Size guide</span>
          </div>
        </div>
        <div className='pay'>
          <div className='cost'>$ {productItem?.price}</div>
          <button type='button' className='payBtn'>
            ADD TO CARD
          </button>

          <div className='heard'>
            <img className='heartImg' src={heart} alt='heart' />
          </div>
          <div className='heard'>
            <img src={scale} alt='scale' className='scaleImg' />
          </div>

        </div>
        <div className='scope'>
          <div className='car'>
            <img src={car} alt='car' />
            <span>Shipping & Delivery</span>
          </div>
          <div className='repit'>
            <img src={repit} alt='repit' />
            <span>Returns & Exchanges</span>
          </div>
          <div className='mail'>
            <img src={mail} alt='mail' className='mail-img' />
            <span>Ask a question</span>
          </div>
        </div>
        <div className='checkout'>
          <span className='checkoutTitle'>
            GUARANTEED SAFE CHECKOUT <hr />
          </span>
          <div className='checkoutImg'>
            {arrMasterCard.map(({ id: idImage, imageSrc, imgName }) => (
              <img key={idImage} src={imageSrc} alt={imgName} />
            ))}
          </div>
        </div>

        <div className='description'>
          <div className='title'>DESCRIPTION</div>
          <div className='text'>
            <div className='texTitle'>ADDITIONAL INFORMATION</div>
            <div className='specifications'>
              <div className='textColor'>
                Color:<span className='black'> Blue, White, Black, Grey</span>
              </div>
              <div className='textSize'>
                Size:<span className='black'>XS, S, M, L</span>
              </div>
              <div className='textMaterial'>
                Material:<span className='black'>100% Polyester</span>
              </div>
            </div>

          </div>
        </div>
        <div className='reviewsContener'>
          <div className='reviews'>

            <div className='reviewsAbove'>
              <div className='title'>REVIEWS</div>
              <div className='subtitleText'>
                <div className='ratingReviews'>
                  <Raiting rating={reting(arrReviews)} size={22} />
                  <span className='amountRreviews'>{arrReviews.length} Reviews</span>
                </div>

                <div className='annotation'>
                  <img src={annotation} alt='annotation' className='annotationImg' />
                  <span className='writeReviews'>Write a review</span>
                </div>
              </div>
            </div>


            {arrReviews.map(({ id, name, text, rating }) => (
              <div key={id} className='reviewText'>
                <div className='title'>
                  <div className='name'>{name}</div>
                  <div className='timeRating'>
                    <Raiting rating={rating} size={14} />
                  </div>
                </div>
                <div className='text'>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProductItem;