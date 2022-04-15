import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemInCart from './ItemInCard';
import DeliveryInfo from './deliveryInfo/deliveryInfo';
import { useState } from 'react';
import Payment from './payment';
import { clearBasket } from '../../reducers/productBasket';
import { locScroll } from '../function/locScroll';
import AnswerBasket from './ansverBasket/answerBasket';
import close from './img/close.svg';
import './shopping.scss';

const ShoppingCart = ({ setCondition, condition }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.toolkit.arrProduct);
  const price = useSelector((state) => state.toolkit.totapPrise);
  let [makingPurchase, setMakingPurchase] = useState('Item in cart');

  useEffect(() => {
    locScroll(condition);
  }, [condition]);

  return (
    <>
      <div className={condition ? 'shopingContener active' : 'shopingContener'} data-test-id='cart'>
        <div className='shopingHeader'>
          <h3 className='shopingTitle'>Shopping Card</h3>
          <div
            onClick={() => {
              setCondition(false);
              setMakingPurchase('Item in cart');
              dispatch(clearBasket());
            }}
            className='close'
          >
            <img src={close} alt='close'></img>
          </div>
        </div>
        {items.length > 0 && makingPurchase !== 'AnswerBasket' ? (
          <div className='makingPurchase'>
            <div className='shopingNav'>
              <span className={makingPurchase === 'Item in cart' ? 'ItemInCart' : 'ItemInCartNoChek'}>
                Item in cart
              </span>
              <span className={makingPurchase === 'Delivery Info' ? 'ItemInCart' : 'ItemInCartNoChek'}>
                Delivery Info
              </span>
              <span className={makingPurchase === 'Payment' ? 'ItemInCart' : 'ItemInCartNoChek'}>Payment</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {makingPurchase === 'Item in cart' && <ItemInCart price={price} />}
        {makingPurchase === 'Delivery Info' && condition && (
          <DeliveryInfo price={price} setMakingPurchase={setMakingPurchase} />
        )}
        {makingPurchase === 'Payment' && condition && <Payment price={price} setMakingPurchase={setMakingPurchase} />}
        {makingPurchase === 'AnswerBasket' && condition && (
          <AnswerBasket setMakingPurchase={setMakingPurchase} setCondition={setCondition} />
        )}

        {makingPurchase === 'Item in cart' &&
          (items.length > 0 ? (
            <div className='shopingFooter'>
              <div className='shopingPrice'>
                <span className='title'>Total</span>
                <span className='price'>{price.toFixed(2)}</span>
              </div>
              <button
                className='btnShoping'
                onClick={() => {
                  setMakingPurchase('Delivery Info');
                }}
              >
                Further
              </button>
              <button className='btnShopingViseble'>View cart</button>
            </div>
          ) : (
            <div className='shopingFooter'>
              <button
                className='btnShoping'
                onClick={() => {
                  setCondition(false);
                  dispatch(clearBasket());
                }}
              >
                BACK TO SHOPPING
              </button>
            </div>
          ))}
      </div>

      <div
        onClick={() => {
          setCondition(false);
          locScroll(false);
          setMakingPurchase('Item in cart');
          dispatch(clearBasket());
        }}
        className={condition ? 'overlay' : ''}
      ></div>
    </>
  );
};

export default ShoppingCart;
