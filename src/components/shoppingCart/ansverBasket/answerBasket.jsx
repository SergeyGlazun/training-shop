import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../../../reducers/actionBasket';
import { clearBasket } from '../../../reducers/productBasket';
import './answerBasket.scss';

const AnswerBasket = ({ setMakingPurchase, setCondition }) => {
  const { respons } = useSelector((state) => state.postProductBasket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (respons === 'OK') {
      dispatch(clear());
      dispatch(clearBasket());
    }
  }, [dispatch, respons]);
  return (
    <>
      {respons === 'OK' ? (
        <>
          <div className='containerDelivery'>
            <div className='basketOK'>
              <span className='titleAnswerBasket'>
                Thank you <br />
                for your order
              </span>
              <span className='textAnswerBasket'>Information about your order will appear in your e-mail. </span>
              <span className='textAnswerBasket'>Our manager will call you back.</span>
            </div>
          </div>

          <div className='shopingFooter'>
            <button
              type='submit'
              className='btnShoping'
              onClick={() => {
                setMakingPurchase('Item in cart');
                setCondition(false);
              }}
            >
              BACK TO SHOPPING
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='containerDelivery'>
            <div className='basketOK'>
              <span className='titleAnswerBasket'>
                Sorry,
                <br />
                your payment
                <br /> has not been
                <br /> processed.
              </span>
              <span className='textAnswerBasket'>{respons}</span>
            </div>
          </div>
          <div className='shopingFooter'>
            <button
              type='submit'
              className='btnShoping'
              onClick={() => {
                setMakingPurchase('Payment');
              }}
            >
              BACK TO SHOPPING
            </button>

            <button
              className='btnShoping'
              onClick={() => {
                setMakingPurchase('Item in cart');
                dispatch(clearBasket());
              }}
            >
              View cart
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default AnswerBasket;
