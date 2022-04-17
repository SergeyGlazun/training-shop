import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../../reducers/actionGetCity';
import { countriesLocalstorageAction } from '../../../reducers/getCountries';
import { getDataDelivery } from '../../../reducers/productBasket';
import { offices, delivery, pickup, textNotValid, textPhone, resetStatusDelivery } from '../../../db/BasketData';
import Adress from '../componentDelivery/adress/adress';
import PhoneEmail from '../componentDelivery/phoneEmail/pnoneEmail';
import Input from '../input/inputField';
import './deliveryInfo.scss';

const DeliveryInfo = ({ price, setMakingPurchase }) => {
  const dispatch = useDispatch();
  const { dataBuy } = useSelector((state) => state.postProductBasket);
  const { cities } = useSelector((state) => state.getCity.city);
  const [checkedDelivery, setCheckedDelivery] = useState('pickup from post offices');
  const [agree, setAgree] = useState('notAgree');

  const [sityInput, setSityInput] = useState('');

  let { loading } = useSelector((state) => state.getCountriesArr.countries);

  let options = [];

  const validate = (value) => {
    let buf = '';

    if (value.length >= 3) {
      dispatch(
        getCharacters({
          city: value,
          country: sityInput,
        })
      );
    }
    if (cities.length !== 0) {
      const abjArr = Object.entries(cities);
      abjArr.forEach((e) => {
        if (e[1].city.toLowerCase() !== value.toLowerCase()) {
          return (buf = 'Store adress not founded');
        }
      });
    }
    if (buf !== '') {
      return (buf = 'Store adress not founded');
    }

    if (value.length >= 3 && cities.length === 0 && value !== dataBuy.storeAddress) {
      return 'Store adress not founded';
    }
    if (value.length < 3 && cities.length !== 0) {
      return 'Store adress not founded';
    }
  };

  let store = require('store');

  if (checkedDelivery === 'store pickup') {
    if (localStorage.getItem('countriesArr') === null) {
      dispatch(countriesLocalstorageAction(options));
    } else {
      options = store.get('countriesArr').data;
    }
  }

  if (loading) {
    options = store.get('countriesArr').data;
  }

  return (
    <Formik
      initialValues={{
        phone: dataBuy.phone,
        email: dataBuy.email,
        country: dataBuy.country,
        city: dataBuy.city,
        street: dataBuy.street,
        house: dataBuy.house,
        apartment: dataBuy.apartment,
        postcode: dataBuy.postcode,
        storeAddress: dataBuy.storeAddress,
        personalInformation: false,
      }}
      validationSchema={
        checkedDelivery === 'pickup from post offices'
          ? offices
          : checkedDelivery === 'express delivery'
          ? delivery
          : checkedDelivery === 'store pickup'
          ? pickup
          : null
      }
      onSubmit={(values) => {
        setMakingPurchase('Payment');

        dispatch(
          getDataDelivery({
            phone: values.phone,
            email: values.email,
            country: values.country,
            city: values.city,
            street: values.street,
            house: values.house,
            apartment: values.apartment,
            postcode: values.postcode,
            storeAddress: values.storeAddress,
            deliveryMethod: checkedDelivery,
          })
        );
      }}
    >
      {({ values, errors, touched, isValid, handleSubmit, dirty }) => (
        <>
          <div className='containerDelivery'>
            <div className='ContenerChooseDeliveryItems'>
              <label className='TextDeliveryItems'>Choose the method of delivery of the items</label>
              <Form className='radioBattonChooseDeliveryItems'>
                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='deliveryMethod'
                    type='radio'
                    id='deliveryMethod_1'
                    value='pickup from post offices'
                    onClick={() => {
                      setCheckedDelivery('pickup from post offices');
                      resetStatusDelivery(touched);
                    }}
                    checked={checkedDelivery === 'pickup from post offices'}
                  />
                  <label htmlFor='deliveryMethod_1' className='radioButtonChooseDelivery'>
                    Pickup from post offices
                  </label>
                </div>
                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='deliveryMethod'
                    id='deliveryMethod_2'
                    type='radio'
                    value='express delivery'
                    onClick={() => {
                      setCheckedDelivery('express delivery');
                      resetStatusDelivery(touched);
                    }}
                    checked={checkedDelivery === 'express delivery'}
                  />
                  <label htmlFor='deliveryMethod_2' className='radioButtonChooseDelivery'>
                    Express delivery
                  </label>
                </div>

                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='deliveryMethod'
                    id='deliveryMethod_3'
                    type='radio'
                    value='store pickup'
                    onClick={() => {
                      setCheckedDelivery('store pickup');
                      resetStatusDelivery(touched);
                    }}
                    checked={checkedDelivery === 'store pickup'}
                  />
                  <label htmlFor='deliveryMethod_3' className='radioButtonChooseDelivery'>
                    Store pickup
                  </label>
                </div>
              </Form>

              <Form className='containerDeliveryInput'>
                {checkedDelivery === 'pickup from post offices' && (
                  <>
                    <PhoneEmail touched={touched} errors={errors} />
                    <Adress touched={touched} errors={errors} />
                    <Input
                      as={InputMask}
                      mask={'BY 999999'}
                      className={
                        touched.postcode && (errors.postcode === textNotValid || errors.postcode === textPhone)
                          ? `inputDeliveryError`
                          : `inputDeliveryHouse`
                      }
                      type='text'
                      name='postcode'
                      placeholder='BY ______'
                      lable={'POSTCODE'}
                    />
                  </>
                )}
                {checkedDelivery === 'express delivery' && (
                  <>
                    <PhoneEmail touched={touched} errors={errors} />
                    <Adress touched={touched} errors={errors} />
                  </>
                )}
                {checkedDelivery === 'store pickup' && (
                  <>
                    <PhoneEmail touched={touched} errors={errors} />
                    <div className='contenerInput'>
                      <label className='labelDelivery'>ADRESS OF STORE</label>
                      <Field
                        as='select'
                        className={
                          touched.country && errors.country === textNotValid ? `inputDeliveryError` : `inputDelivery`
                        }
                        placeholder='Сountry'
                        name='country'
                        onClick={() => {
                          setSityInput((values.storeAddress = ''));
                        }}
                      >
                        <option label='Сountry'></option>

                        {options.map((item) => (
                          <option key={item._id} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name='country' component='span' style={{ color: 'red' }} />
                    </div>

                    <div className='contenerInput'>
                      <Field
                        className={
                          touched.storeAddress && errors.storeAddress === textNotValid
                            ? `inputDeliveryError`
                            : `inputDelivery`
                        }
                        autoComplete='off'
                        disabled={values.country === ''}
                        placeholder='Store adress'
                        name='storeAddress'
                        type='text'
                        list='city-list'
                        validate={validate}
                        onClick={() => {
                          setSityInput(values.country);
                        }}
                      />

                      {values.storeAddress.length >= 3 && (
                        <datalist id='city-list'>
                          {cities
                            ?.map((item, _id) => (
                              <option key={_id} value={item.city}>
                                {item.city}
                              </option>
                            ))
                            .sort()}
                        </datalist>
                      )}
                      <ErrorMessage name='storeAddress' component='span' style={{ color: 'red' }} />
                    </div>
                  </>
                )}

                <div className='contenerInputChek'>
                  <div
                    className={
                      agree === 'notAgree' && touched.personalInformation && errors.personalInformation
                        ? 'checkbox-other checkbox-other-error'
                        : 'checkbox-other'
                    }
                    onClick={() => {
                      setAgree(agree === 'setAgreeDelivery' ? 'notAgree' : 'setAgreeDelivery');
                      values.personalInformation === true
                        ? (values.personalInformation = false)
                        : (values.personalInformation = true);
                    }}
                  >
                    <Field
                      name='personalInformation'
                      type='checkbox'
                      className='heckboxDelivery'
                      checked={agree === 'setAgreeDelivery'}
                      value={values.personalInformation}
                    />
                    <span>I agree to the processing of my personal information</span>
                  </div>
                </div>

                {agree === 'notAgree' && touched.personalInformation && errors.personalInformation && (
                  <span className='error'>{errors.personalInformation}</span>
                )}
              </Form>
            </div>
          </div>

          <div className='shopingFooter'>
            <div className='shopingPrice'>
              <span className='title'>Total</span>
              <span className='price'>{price.toFixed(2)}</span>
            </div>
            <button
              type='submit'
              // disabled={!isValid || !dirty}
              className='btnShoping'
              onClick={() => {
                handleSubmit();

                values.personalInformation === true && isValid === false ? setAgree('notAgree') : console.log();
                values.personalInformation === true && isValid === false
                  ? (values.personalInformation = false)
                  : console.log();
              }}
            >
              Further
            </button>

            <button
              className='btnShoping'
              onClick={() => {
                setMakingPurchase('Item in cart');
                dispatch(
                  getDataDelivery({
                    phone: values.phone,
                    email: values.email,
                    adress: values.adress,
                    city: values.city,
                    street: values.street,
                    house: values.house,
                    apartment: values.apartment,
                    post: values.post,
                    storeAddress: values.adressStore,
                    deliveryMethod: checkedDelivery,
                  })
                );
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

export default DeliveryInfo;
