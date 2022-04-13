import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
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
  const [checkedDelivery, setCheckedDelivery] = useState('offices');
  const [agree, setAgree] = useState('notAgree');

  const textNotValid = 'Поле должно быть заполнено';

  const [sityInput, setSityInput] = useState('');

  const { countriesArr } = useSelector((state) => state.getCountriesArr);

  const options = [];

  try {
    if (countriesArr !== undefined) {
      for (let i = 0; i < countriesArr.data.length; i++) {
        options.push({
          value: countriesArr.data[i].name,
          label: countriesArr.data[i].name,
        });
      }
    } else {
    }
  } catch {}

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
  return (
    <Formik
      initialValues={{
        phone: dataBuy.phone,
        email: dataBuy.email,
        adress: dataBuy.country,
        city: dataBuy.city,
        street: dataBuy.street,
        house: dataBuy.house,
        apartment: dataBuy.apartment,
        post: dataBuy.postcode,
        adressStore: dataBuy.storeAddress,
        personalInformation: false,
      }}
      validationSchema={
        checkedDelivery === 'offices'
          ? offices
          : checkedDelivery === 'delivery'
          ? delivery
          : checkedDelivery === 'pickup'
          ? pickup
          : null
      }
      onSubmit={(values) => {
        setMakingPurchase('Payment');

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
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
        <>
          <div className='containerDelivery'>
            <div className='ContenerChooseDeliveryItems'>
              <label className='TextDeliveryItems'>Choose the method of delivery of the items</label>
              <div className='radioBattonChooseDeliveryItems'>
                <div className='contenerRadio'>
                  <input
                    className='inputChooseDelivery'
                    name='ChooseDelivery'
                    type='radio'
                    value='offices'
                    onClick={() => {
                      setCheckedDelivery('offices');
                      resetStatus(touched);
                    }}
                    onChange={handleChange}
                    checked={checkedDelivery === 'offices' ? true : false}
                  />
                  <div className='radioButtonChooseDelivery'>Pickup from post offices</div>
                </div>
                <div className='contenerRadio'>
                  <input
                    className='inputChooseDelivery'
                    name='ChooseDelivery'
                    type='radio'
                    value='delivery'
                    onClick={() => {
                      setCheckedDelivery('delivery');
                      resetStatus(touched);
                    }}
                    onChange={handleChange}
                    checked={checkedDelivery === 'delivery' ? true : false}
                  />
                  <div className='radioButtonChooseDelivery'>Express delivery</div>
                </div>

                <div className='contenerRadio'>
                  <input
                    className='inputChooseDelivery'
                    name='ChooseDelivery'
                    type='radio'
                    value='pickup'
                    onClick={() => {
                      setCheckedDelivery('pickup');
                      resetStatus(touched);
                      dispatch(countriesLocalstorageAction());
                    }}
                    onChange={handleChange}
                    checked={checkedDelivery === 'pickup' ? true : false}
                  />
                  <div className='radioButtonChooseDelivery'>Store pickup</div>
                </div>
              </div>

              <Form className='containerDeliveryInput'>
                <div className='contenerInput'>
                  <label className='labelDelivery'>Phone</label>
                  <InputMask
                    mask={'+375 (99) 9999999'}
                    type='tel'
                    name='phone'
                    placeholder='+375 (__) _______'
                    className={
                      touched.phone && (errors.phone === textNotValid || errors.phone === 'Не правильный номер')
                        ? `inputDeliveryError`
                        : `inputDelivery`
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />

                  {touched.phone && errors.phone && <span className='error'>{errors.phone}</span>}
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
                  {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                </div>
                {(checkedDelivery === 'delivery' || checkedDelivery === 'offices') && (
                  <>
                    {checkedDelivery === 'delivery' && (
                      <div className='contenerInput'>
                        <label className='labelDelivery'>ADRESS</label>
                        <Field
                          className={
                            touched.adress && errors.adress === textNotValid ? `inputDeliveryError` : `inputDelivery`
                          }
                          placeholder='Country'
                          type='text'
                          name='adress'
                        />
                        {touched.adress && errors.adress && <span className='error'>{errors.adress}</span>}
                      </div>
                    )}

                    {checkedDelivery === 'offices' && (
                      <div className='contenerInput'>
                        <label className='labelDelivery'>ADRESS</label>

                        <Field
                          className='inputDelivery'
                          placeholder='Country'
                          type='text'
                          name='adress'

                          // value={(values.adress = 'Беларусь')}
                        />
                        {touched.adress && errors.adress && <span className='error'>{errors.adress}</span>}
                      </div>
                    )}

                    <div className='contenerInput'>
                      <Field
                        className={
                          touched.city && errors.city === textNotValid ? `inputDeliveryError` : `inputDelivery`
                        }
                        placeholder='City'
                        type='text'
                        name='city'
                      />
                      {touched.city && errors.city && <span className='error'>{errors.city}</span>}
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
                      {touched.street && errors.street && <span className='error'>{errors.street}</span>}
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
                    {touched.house && errors.house && <span className='error'>{errors.house}</span>}

                    {checkedDelivery === 'offices' && (
                      <div className='contenerInput'>
                        <InputMask
                          mask={'BY999999'}
                          className={
                            touched.post && errors.post === textNotValid ? `inputDeliveryError` : `inputDeliveryHouse`
                          }
                          type='text'
                          name='post'
                          placeholder='BY ______'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.post}
                        />
                        {touched.post && errors.post && <span className='error'>{errors.post}</span>}
                      </div>
                    )}
                  </>
                )}
                {checkedDelivery === 'pickup' && (
                  <>
                    <div className='contenerInput'>
                      <label className='labelDelivery'>ADRESS OF STORE</label>
                      <Field
                        as='select'
                        className={
                          touched.adress && errors.adress === textNotValid ? `inputDeliveryError` : `inputDelivery`
                        }
                        name='adress'
                      >
                        <option></option>
                        {options.map((item, id) => (
                          <option key={id} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </Field>

                      {touched.adress && errors.adress && <span className='error'>{errors.adress}</span>}
                    </div>

                    <div className='contenerInput'>
                      <Field
                        className={
                          touched.adressStore && errors.adressStore === textNotValid
                            ? `inputDeliveryError`
                            : `inputDelivery`
                        }
                        disabled={values.adress === ''}
                        placeholder='Store adress'
                        name='adressStore'
                        type='text'
                        list='city-list'
                        validate={validate}
                        onClick={() => {
                          setSityInput(values.adress);
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

                      {touched.adressStore && errors.adressStore && <span className='error'>{errors.adressStore}</span>}
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
                    <input
                      name='personalInformation'
                      type='checkbox'
                      className='heckboxDelivery'
                      checked={agree === 'setAgreeDelivery' ? true : false}
                      onChange={handleChange}
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
                isValid === false ? (values.personalInformation = false) : (values.personalInformation = true);
                isValid === false ? setAgree('notAgree') : setAgree('setAgreeDelivery');
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
  error.adress = false;
  error.apartment = false;
  error.city = false;
  error.email = false;
  error.house = false;
  error.personalInformation = false;
  error.phone = false;
  error.post = false;
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
  adress: Yup.string().required(textNotValid),
  city: Yup.string().required(textNotValid),
  street: Yup.string().required(textNotValid),
  house: Yup.number().required(textNotValid),
  apartment: Yup.number(),
  post: Yup.string().required(textNotValid),
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
  adress: Yup.string().required(textNotValid),
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
  adress: Yup.string().required(textNotValid),
  adressStore: Yup.string().required(textNotValid),
  personalInformation: Yup.bool().oneOf([true], 'Вы должны согласиться на обработку личной информации'),
});
