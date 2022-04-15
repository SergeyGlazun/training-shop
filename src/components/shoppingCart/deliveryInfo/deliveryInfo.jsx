import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../../reducers/actionGetCity';
import { countriesLocalstorageAction } from '../../../reducers/getCountries';
import { getDataDelivery } from '../../../reducers/productBasket';

import './deliveryInfo.scss';

const DeliveryInfo = ({ price, setMakingPurchase }) => {
  const dispatch = useDispatch();
  const { dataBuy } = useSelector((state) => state.postProductBasket);
  const { cities } = useSelector((state) => state.getCity.city);
  const [checkedDelivery, setCheckedDelivery] = useState('pickup from post offices');
  const [agree, setAgree] = useState('notAgree');

  const textNotValid = 'Поле должно быть заполнено';

  const [sityInput, setSityInput] = useState('');

  let { loading } = useSelector((state) => state.getCountriesArr.countries);

  let options = [];

  const validate = (value) => {
    if (value.length === 3) {
      dispatch(
        getCharacters({
          city: value,
          country: sityInput,
        })
      );
    }
    if (value.length >= 3 && cities.length === 0) {
      return (value = 'Store adress not founded');
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
        adressStore: dataBuy.storeAddress,
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
            storeAddress: values.adressStore,
            deliveryMethod: checkedDelivery,
          })
        );
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
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
                    value='pickup from post offices'
                    onClick={() => {
                      setCheckedDelivery('pickup from post offices');
                      resetStatus(touched);
                    }}
                    checked={checkedDelivery === 'pickup from post offices'}
                  />
                  <div className='radioButtonChooseDelivery'>Pickup from post offices</div>
                </div>
                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='deliveryMethod'
                    type='radio'
                    value='express delivery'
                    onClick={() => {
                      setCheckedDelivery('express delivery');
                      resetStatus(touched);
                    }}
                    checked={checkedDelivery === 'express delivery'}
                  />
                  <div className='radioButtonChooseDelivery'>Express delivery</div>
                </div>

                <div className='contenerRadio'>
                  <Field
                    className='inputChooseDelivery'
                    name='deliveryMethod'
                    type='radio'
                    value='store pickup'
                    onClick={() => {
                      setCheckedDelivery('store pickup');
                      resetStatus(touched);
                      // dispatch(countriesLocalstorageAction());
                    }}
                    checked={checkedDelivery === 'store pickup'}
                  />
                  <div className='radioButtonChooseDelivery'>Store pickup</div>
                </div>
              </Form>

              <Form className='containerDeliveryInput'>
                <div className='contenerInput'>
                  <label className='labelDelivery'>Phone</label>
                  <Field
                    as={InputMask}
                    mask={'+375 (99) 9999999'}
                    type='tel'
                    name='phone'
                    placeholder='+375 (__) _______'
                    className={
                      touched.phone && (errors.phone === textNotValid || errors.phone === 'Не правильный номер')
                        ? `inputDeliveryError`
                        : `inputDelivery`
                    }
                  />
                  <ErrorMessage name='phone' component='span' style={{ color: 'red' }} />
                </div>
                <div className='contenerInput'>
                  <label className='labelDelivery'>e-mail</label>
                  <Field
                    className={
                      touched.email &&
                      (errors.email === textNotValid ||
                        errors.email === 'Введите верный email' ||
                        errors.email === 'смените язык')
                        ? `inputDeliveryError`
                        : `inputDelivery`
                    }
                    placeholder='e-mail'
                    type='email'
                    name='email'
                  />
                  <ErrorMessage name='email' component='span' style={{ color: 'red' }} />
                  {/* {touched.email && errors.email && <span className='error'>{errors.email}</span>} */}
                </div>
                {(checkedDelivery === 'express delivery' || checkedDelivery === 'pickup from post offices') && (
                  <>
                    <div className='contenerInput'>
                      <label className='labelDelivery'>ADRESS</label>

                      <Field
                        className={
                          touched.country && errors.country === textNotValid ? `inputDeliveryError` : `inputDelivery`
                        }
                        placeholder='Country'
                        type='text'
                        name='country'

                        // value={(values.adress = 'Беларусь')}
                      />
                      <ErrorMessage name='country' component='span' style={{ color: 'red' }} />
                      {/* {touched.country && errors.country && <span className='error'>{errors.country}</span>} */}
                    </div>

                    <div className='contenerInput'>
                      <Field
                        className={
                          touched.city && errors.city === textNotValid ? `inputDeliveryError` : `inputDelivery`
                        }
                        placeholder='City'
                        type='text'
                        name='city'
                      />
                      <ErrorMessage name='city' component='span' style={{ color: 'red' }} />
                      {/* {touched.city && errors.city && <span className='error'>{errors.city}</span>} */}
                    </div>
                    <div className='contenerInput'>
                      <Field
                        className={
                          touched.street && errors.street === textNotValid ? `inputDeliveryError` : `inputDelivery`
                        }
                        placeholder='Street'
                        type='text'
                        name='street'
                      />
                      <ErrorMessage name='street' component='span' style={{ color: 'red' }} />
                      {/* {touched.street && errors.street && <span className='error'>{errors.street}</span>} */}
                    </div>

                    <div className='hoeseApartment'>
                      <Field
                        className={
                          touched.house && errors.house === textNotValid ? `inputDeliveryError` : `inputDeliveryHouse`
                        }
                        placeholder='House'
                        type='text'
                        name='house'
                      />

                      <Field className='inputDeliveryHouse' placeholder='Apartment' type='text' name='apartment' />
                    </div>
                    {/* {touched.house && errors.house && <span className='error'>{errors.house}</span>} */}
                    <ErrorMessage name='house' component='span' style={{ color: 'red' }} />
                    {checkedDelivery === 'pickup from post offices' && (
                      <div className='contenerInput'>
                        <Field
                          as={InputMask}
                          mask={'BY 999999'}
                          className={
                            touched.postcode &&
                            (errors.postcode === textNotValid || errors.postcode === 'Не правильный номер')
                              ? `inputDeliveryError`
                              : `inputDeliveryHouse`
                          }
                          type='text'
                          name='postcode'
                          placeholder='BY ______'
                        />
                        <ErrorMessage name='postcode' component='span' style={{ color: 'red' }} />
                        {/* {touched.postcode && errors.postcode && <span className='error'>{errors.postcode}</span>} */}
                      </div>
                    )}
                  </>
                )}
                {checkedDelivery === 'store pickup' && (
                  <>
                    <div className='contenerInput'>
                      <label className='labelDelivery'>ADRESS OF STORE</label>
                      <Field
                        as='select'
                        className={
                          touched.country && errors.country === textNotValid ? `inputDeliveryError` : `inputDelivery`
                        }
                        name='country'
                      >
                        <option></option>
                        {/* {options.length > 0 ? ( */}
                        {options.map((item) => (
                          <option key={item._id} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                        {/* ) : (
                          <option></option>
                        )} */}
                      </Field>
                      <ErrorMessage name='country' component='span' style={{ color: 'red' }} />
                      {/* {touched.country && errors.country && <span className='error'>{errors.country}</span>} */}
                    </div>

                    <div className='contenerInput'>
                      <Field
                        className={
                          touched.adressStore && errors.adressStore === textNotValid
                            ? `inputDeliveryError`
                            : `inputDelivery`
                        }
                        disabled={values.country === ''}
                        placeholder='Store adress'
                        name='adressStore'
                        type='text'
                        list='city-list'
                        validate={validate}
                        onClick={() => {
                          setSityInput(values.country);
                        }}
                      />

                      {values.adressStore.length >= 3 ? (
                        <datalist id='city-list'>
                          {cities
                            ?.map((item, _id) => (
                              <option key={_id} value={item.city}>
                                {item.city}
                              </option>
                            ))
                            .sort()}
                        </datalist>
                      ) : (
                        <option></option>
                      )}
                      <ErrorMessage name='adressStore' component='span' style={{ color: 'red' }} />
                      {/* {touched.adressStore && errors.adressStore && <span className='error'>{errors.adressStore}</span>} */}
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
                      // onChange={handleChange}
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

function resetStatus(error) {
  error.country = false;
  error.apartment = false;
  error.city = false;
  error.email = false;
  error.house = false;
  error.personalInformation = false;
  error.phone = false;
  error.postcode = false;
  error.street = false;
  error.adressStore = false;
}

const textNotValid = 'Поле должно быть заполнено';

const offices = Yup.object().shape({
  phone: Yup.string()
    .required(textNotValid)
    .matches(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}/, 'Не правильный номер'),

  email: Yup.string()
    .required(textNotValid)
    .email('Введите верный email')
    .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'смените язык'),
  country: Yup.string().required(textNotValid),
  city: Yup.string().required(textNotValid),
  street: Yup.string().required(textNotValid),
  house: Yup.number().required(textNotValid),
  apartment: Yup.number(),
  postcode: Yup.string()
    .required(textNotValid)
    .matches(/[0-9]{6,}/, 'Не правильный номер'),
  personalInformation: Yup.bool().oneOf([true], 'Вы должны согласиться на обработку личной информации'),
});

const delivery = Yup.object().shape({
  phone: Yup.string()
    .required(textNotValid)
    .matches(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}/, 'Не правильный номер'),

  email: Yup.string()
    .required(textNotValid)
    .email('Введите верный email')
    .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'смените язык'),
  country: Yup.string().required(textNotValid),
  city: Yup.string().required(textNotValid),
  street: Yup.string().required(textNotValid),
  house: Yup.number().required(textNotValid),
  apartment: Yup.number(),
  personalInformation: Yup.bool().oneOf([true], 'Вы должны согласиться на обработку личной информации'),
});

const pickup = Yup.object().shape({
  phone: Yup.string()
    .required(textNotValid)
    .matches(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}/, 'Не правильный номер'),

  email: Yup.string()
    .required(textNotValid)
    .email('Введите верный email')
    .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'смените язык'),
  country: Yup.string().required(textNotValid),
  adressStore: Yup.string().required(textNotValid),
  personalInformation: Yup.bool().oneOf([true], 'Вы должны согласиться на обработку личной информации'),
});
