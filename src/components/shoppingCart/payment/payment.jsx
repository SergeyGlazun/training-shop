import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import LoaderButtom from '../../loader/loaderButton';
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
  const textNotValid = 'Поле должно быть заполнено';

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
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
        <>
          <div className='containerDelivery'>
            <div className='ContenerChooseDeliveryItems'>
              <label className='TextDeliveryItems'>Method of payments</label>
              <Form className='radioBattonChooseDeliveryItems'>
                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='ChoosePayment'
                    type='radio'
                    value='paypal'
                    onClick={() => {
                      setCheckedPayments('paypal');
                      resetStatus(touched);
                    }}
                    checked={checkedPayments === 'paypal'}
                  />
                  <div className='radioButtonChooseDelivery'>
                    <img src={payPal} alt='visa' className='visa' />
                  </div>
                </div>
                <div className='contenerRadio'>
                  <Field
                    // checked='checked'
                    className='inputChooseDelivery'
                    name='ChoosePayment'
                    type='radio'
                    value='visa'
                    onClick={() => {
                      setCheckedPayments('visa');
                      resetStatus(touched);
                    }}
                    checked={checkedPayments === 'visa' ? true : false}
                  />
                  <div className='radioButtonChooseDelivery'>
                    <img src={visa} alt='visa' className='visa' />
                  </div>
                </div>

                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='ChoosePayment'
                    type='radio'
                    value='masterCard'
                    onClick={() => {
                      setCheckedPayments('masterCard');
                      resetStatus(touched);
                    }}
                    checked={checkedPayments === 'masterCard' ? true : false}
                  />
                  <div className='radioButtonChooseDelivery'>
                    <img src={masterCard} alt='visa' className='visa' />
                  </div>
                </div>

                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='ChoosePayment'
                    type='radio'
                    value='cash'
                    onClick={() => {
                      setCheckedPayments('cash');
                      resetStatus(touched);
                    }}
                    checked={checkedPayments === 'cash' ? true : false}
                  />
                  <div className='radioButtonChooseDelivery'>Cash</div>
                </div>
              </Form>

              <div className='containerDeliveryInput'>
                {(checkedPayments === 'visa' || checkedPayments === 'masterCard') && (
                  <>
                    <div className='containerDeliveryInput'>
                      <div className='contenerInput'>
                        <label className='labelDelivery'>card</label>
                        <Field
                          as={InputMask}
                          mask={'9999999999999999'}
                          type='text'
                          name='card'
                          placeholder='----------------'
                          className={
                            touched.card && (errors.card === textNotValid || errors.card === 'не верная карта')
                              ? `inputDeliveryError`
                              : `inputDelivery`
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.card}
                        />

                        {touched.card && errors.card && <span className='error'>{errors.card}</span>}
                      </div>
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
                        {touched.cardDate && errors.cardDate && <span className='error'>{errors.cardDate}</span>}
                      </div>

                      <div className='contenerInput'>
                        <Field
                          as={InputMask}
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
                        {visiblePasword === false ? (
                          <img
                            src={password}
                            alt='password'
                            className='password'
                            onClick={() => {
                              setviseblePasword(true);
                            }}
                          />
                        ) : (
                          <img
                            src={text}
                            alt='password'
                            className='text'
                            onClick={() => {
                              setviseblePasword(false);
                            }}
                          />
                        )}

                        {touched.cardCVV && errors.cardCVV && <span className='error'>{errors.cardCVV}</span>}
                      </div>
                    </div>
                  </>
                )}
                {checkedPayments === 'paypal' && (
                  <div className='contenerInput'>
                    <label className='labelDelivery'>e-mail</label>
                    <Field
                      as={InputMask}
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
                    />
                    {touched.cashEmail && errors.cashEmail && <span className='error'>{errors.cashEmail}</span>}
                  </div>
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
                // disabled={!isValid || !dirty}
                type='submit'
                className='btnShoping'
                onClick={() => {
                  handleSubmit();
                }}
              >
                {loading && <LoaderButtom />}
                {/* {checkedPayments === 'cash' ? 'READY' : 'Check Out'} */}
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

function resetStatus(error) {
  error.card = false;
  error.cashEmail = false;
  error.cardDate = false;
  error.cardCVV = false;
}

const textNotValid = 'Поле должно быть заполнено';

const cardValid = Yup.object().shape({
  card: Yup.string()
    .required(textNotValid)
    .matches(/(\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4})/, 'не верная карта'),

  cardDate: Yup.string()
    .required(textNotValid)
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})/, 'не верные данные карты'),

  cardCVV: Yup.number().min(99, 'не меньше 3 символов').max(9999, 'не больше 3 символов').required(textNotValid),
});

const payPalValid = Yup.object().shape({
  cashEmail: Yup.string()
    .email('Введите верный email')
    .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'смените язык'),
});

function chekYear(card) {
  const today = new Date();
  const year = today.getFullYear();
  const yearNow = today.getMonth() + year.toString();

  if (Number(card.slice(-2)) < Number(yearNow.slice(-2))) {
    return '';
  } else if (
    Number(card.slice(-2)) === Number(yearNow.slice(-2)) &&
    Number(card.substr(0, 2) < Number(yearNow.substr(0, 1)))
  ) {
    return '';
  } else {
    return card;
  }
}
