import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import LoaderButtom from '../../loader/loaderButton';
import { cardValid, payPalValid, textNotValid, chekYear, resetStatusPayment } from '../../../db/BasketData';
import Input from '../input/inputField';
import { getObjectBasket, getDataCard } from '../../../reducers/productBasket';
import password from './img/pasword.svg';
import text from './img/text.svg';
import payPal from '../../../pages/productPage/productInformationPage/mainProductItem/img/MasterCard/paypal.png';
import visa from '../../../pages/productPage/productInformationPage/mainProductItem/img/MasterCard/visa.png';
import masterCard from '../../../pages/productPage/productInformationPage/mainProductItem/img/MasterCard/mastercard.png';
import './payment.scss';
import '../deliveryInfo/deliveryInfo.scss';

const Payment = ({ price, setMakingPurchase }) => {
  const { dataBuy, loading } = useSelector((state) => state.postProductBasket);
  const [checkedPayments, setCheckedPayments] = useState('visa');
  const [visiblePasword, setviseblePasword] = useState(false);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        card: dataBuy.card,
        cashEmail: dataBuy.cashEmail,
        cardDate: dataBuy.cardDate,
        cardCVV: dataBuy.cardCVV,
      }}
      validationSchema={
        checkedPayments === 'visa' || checkedPayments === 'masterCard'
          ? cardValid
          : checkedPayments === 'paypal'
          ? payPalValid
          : null
      }
      onSubmit={(values) => {
        setMakingPurchase('AnswerBasket');

        dispatch(
          getDataCard({
            phone: dataBuy.phone.replace(/[()\s]/g, ''),
            cashEmail: values.cashEmail,
            paymentMethod: checkedPayments,
            card: values.card,
            cardDate: values.cardDate,
            cardCVV: values.cardCVV,
          })
        );
        dispatch(
          getObjectBasket({
            product: dataBuy.product,
            deliveryMethod: dataBuy.deliveryMethod,
            paymentMethod: checkedPayments,
            totalPrice: dataBuy.totalPrice,
            phone: dataBuy.phone.replace(/[()\s]/g, ''),
            email: dataBuy.email,
            country: dataBuy.country,
            cashEmail: values.cashEmail,
            city: dataBuy.city,
            street: dataBuy.street,
            house: dataBuy.house,
            apartment: dataBuy.apartment,
            postcode: dataBuy.postcode,
            storeAddress: dataBuy.storeAddress,
            card: values.card,
            cardDate: values.cardDate,
            cardCVV: values.cardCVV,
          })
        );
      }}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <>
          <div className='containerDelivery'>
            <div className='ContenerChooseDeliveryItems'>
              <label className='TextDeliveryItems'>Method of payments</label>
              <Form className='radioBattonChooseDeliveryItems'>
                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='ChoosePayment'
                    id='ChoosePayment_1'
                    type='radio'
                    value='paypal'
                    onClick={() => {
                      setCheckedPayments('paypal');
                      resetStatusPayment(touched, errors);
                    }}
                    checked={checkedPayments === 'paypal'}
                  />
                  <label htmlFor='ChoosePayment_1' className='radioButtonChooseDelivery'>
                    <img src={payPal} alt='visa' className='visa' />
                  </label>
                </div>
                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='ChoosePayment'
                    id='ChoosePayment_2'
                    type='radio'
                    value='visa'
                    onClick={() => {
                      setCheckedPayments('visa');
                      resetStatusPayment(touched, errors);
                    }}
                    checked={checkedPayments === 'visa'}
                  />
                  <label htmlFor='ChoosePayment_2' className='radioButtonChooseDelivery'>
                    <img src={visa} alt='visa' className='visa' />
                  </label>
                </div>

                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='ChoosePayment'
                    id='ChoosePayment_3'
                    type='radio'
                    value='masterCard'
                    onClick={() => {
                      setCheckedPayments('masterCard');
                      resetStatusPayment(touched, errors);
                    }}
                    checked={checkedPayments === 'masterCard'}
                  />
                  <label htmlFor='ChoosePayment_3' className='radioButtonChooseDelivery'>
                    <img src={masterCard} alt='visa' className='visa' />
                  </label>
                </div>

                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='ChoosePayment'
                    id='ChoosePayment_4'
                    type='radio'
                    value='cash'
                    onClick={() => {
                      setCheckedPayments('cash');
                      resetStatusPayment(touched, errors);
                    }}
                    checked={checkedPayments === 'cash'}
                  />
                  <label htmlFor='ChoosePayment_4' className='radioButtonChooseDelivery'>
                    Cash
                  </label>
                </div>
              </Form>

              <div className='containerDeliveryInput'>
                {(checkedPayments === 'visa' || checkedPayments === 'masterCard') && (
                  <>
                    <div className='containerDeliveryInput'>
                      <Input
                        mask={'9999999999999999'}
                        type='text'
                        name='card'
                        placeholder='----------------'
                        className={
                          touched.card && (errors.card === textNotValid || errors.card === 'не верная карта')
                            ? `inputDeliveryError`
                            : `inputDelivery`
                        }
                        lable={'CARD'}
                      />
                    </div>

                    <div className='contwnerCard'>
                      <div className='contenerInput'>
                        <Field
                          as={InputMask}
                          className={
                            touched.cardDate &&
                            (errors.cardDate === textNotValid || errors.cardDate === 'не верные данные карты')
                              ? `inputDeliveryError`
                              : `inputDeliveryHouse`
                          }
                          placeholder='MM/YY'
                          mask={'99/99'}
                          type='text'
                          name='cardDate'
                          value={chekYear(values.cardDate)}
                        />
                        <ErrorMessage name='cardDate' component='span' style={{ color: 'red' }} />
                      </div>

                      <div className='contenerInput'>
                        <Field
                          // as={InputMask}
                          className={
                            touched.cardCVV && errors.cardCVV === textNotValid
                              ? `inputDeliveryError`
                              : `inputDeliveryHouse`
                          }
                          placeholder='CVV'
                          type={visiblePasword === false ? 'password' : 'number'}
                          min='99'
                          max='9999'
                          name='cardCVV'
                        />
                        {visiblePasword ? (
                          <img
                            src={text}
                            alt='password'
                            className='text'
                            onClick={() => {
                              setviseblePasword(false);
                            }}
                          />
                        ) : (
                          <img
                            src={password}
                            alt='password'
                            className='password'
                            onClick={() => {
                              setviseblePasword(true);
                            }}
                          />
                        )}
                        <ErrorMessage name='cardCVV' component='span' style={{ color: 'red' }} />
                      </div>
                    </div>
                  </>
                )}
                {checkedPayments === 'paypal' && (
                  <Input
                    className={
                      touched.cashEmail &&
                      (errors.cashEmail === textNotValid ||
                        errors.cashEmail === 'Введите верный email' ||
                        errors.cashEmail === 'смените язык')
                        ? `inputDeliveryError`
                        : `inputDelivery`
                    }
                    placeholder='e-mail'
                    type='email'
                    name='cashEmail'
                    lable={'E-MAIL'}
                  />
                )}
              </div>
            </div>
          </div>

          <div className='shopingFooter'>
            <div className='shopingPrice'>
              <span className='title'>Total</span>
              <span className='price'>{price.toFixed(2)}</span>
            </div>
            {(checkedPayments === 'paypal' || checkedPayments === 'masterCard' || checkedPayments === 'visa') && (
              <button
                type='submit'
                className='btnShoping'
                onClick={() => {
                  handleSubmit();
                }}
              >
                {loading && <LoaderButtom />}

                {'CHECK OUT'}
              </button>
            )}
            {checkedPayments === 'cash' && (
              <button
                type='submit'
                className='btnShoping'
                onClick={() => {
                  handleSubmit();
                }}
              >
                {loading && <LoaderButtom />}

                {'READY'}
              </button>
            )}
            <button
              className='btnShoping'
              onClick={() => {
                setMakingPurchase('Delivery Info');
              }}
            >
              View cart
            </button>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Payment;
