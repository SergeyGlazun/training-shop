import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { locScroll } from '../function/locScroll';
import { useDispatch, useSelector } from 'react-redux';
import { postReview } from '../../reducers/actionReview';
import LoaderButtom from '../loader/loaderButton/loaderButton';
import { getIDProductID } from '../../reducers/actionGetProductId';

import './formReview.scss';

const FormReview = ({ formRevieew, SetFormRevieew, id }) => {
  const dispatch = useDispatch();

  const loding = useSelector((state) => state.postReviewReducer.loading);
  const error = useSelector((state) => state.postReviewReducer.error);
  const responce = useSelector((state) => state.postReviewReducer.responce);
  const closeForm = useSelector((state) => state.postReviewReducer.closeForm);

  locScroll(formRevieew);

  useEffect(() => {
    if (closeForm && !error) {
      SetFormRevieew(false);
      locScroll(false);
    }
  });

  return (
    <div
      className='container'
      onClick={() => {
        SetFormRevieew(false);
        locScroll(false);
      }}
    >
      <div className='conteberFormReview'>
        <Formik
          initialValues={{
            name: '',
            text: '',
            rating: '1',
            id: id,
          }}
          validateOnMount
          onSubmit={(values) => {
            dispatch(postReview(values));
            dispatch(getIDProductID(id));
          }}
          validationSchema={Yup.object({
            name: Yup.string().typeError('Должно быть строкой').required('Введите ваше имя'),
            text: Yup.string().typeError('Должно быть строкой').required('Введите ваш коментарий'),
          })}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className='form' onClick={(e) => e.stopPropagation()} data-test-id='review-modal'>
              <span className='heandel'>Write a review</span>
              <div className='raiting'>
                <div className='itemsReitings'>
                  <input
                    id='simpleRaiting_5'
                    type='radio'
                    value={5}
                    className='itemsReiting'
                    name='rating'
                    onChange={handleChange}
                  />
                  <label htmlFor='simpleRaiting_5' className='simpleRaitingLabel' />

                  <input
                    id='simpleRaiting_4'
                    type='radio'
                    value={4}
                    className='itemsReiting'
                    name='rating'
                    onChange={handleChange}
                  />
                  <label htmlFor='simpleRaiting_4' className='simpleRaitingLabel' />

                  <input
                    id='simpleRaiting_3'
                    type='radio'
                    value={3}
                    className='itemsReiting'
                    name='rating'
                    onChange={handleChange}
                  />
                  <label htmlFor='simpleRaiting_3' className='simpleRaitingLabel' />

                  <input
                    id='simpleRaiting_2'
                    type='radio'
                    value={2}
                    className='itemsReiting'
                    name='rating'
                    onChange={handleChange}
                  />
                  <label htmlFor='simpleRaiting_2' className='simpleRaitingLabel' />

                  <input
                    id='simpleRaiting_1'
                    type='radio'
                    value={1}
                    className='itemsReiting'
                    name='rating'
                    onChange={handleChange}
                  />
                  <label htmlFor='simpleRaiting_1' className='simpleRaitingLabel' />
                </div>
              </div>
              <div className='inputForm'>
                <label htmlFor='name'>Имя</label>
                <br />
                <input
                  data-test-id='review-name-field'
                  className='input'
                  placeholder='Имя'
                  type='text'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                {touched.name && errors.name && <span className='error'>{errors.name}</span>}
              </div>

              <div className='inputForm'>
                <label htmlFor='review'>Комментарий</label>
                <textarea
                  data-test-id='review-text-field'
                  name='text'
                  onChange={handleChange}
                  value={values.text}
                  onBlur={handleBlur}
                  placeholder='Комментарий'
                />
                {touched.text && errors.text && <span className='error'>{errors.text}</span>}
                {error && <span className='error'>{responce}</span>}
              </div>

              <button
                data-test-id='review-submit-button'
                type='submit'
                onClick={() => {
                  handleSubmit();
                }}
                disabled={!isValid || !dirty || loding}
              >
                {loding && <LoaderButtom />}
                Send
              </button>
            </div>
          )}
        </Formik>
      </div>

      <div
        onClick={() => {
          SetFormRevieew(false);
          locScroll(false);
        }}
        className={formRevieew ? 'overlay' : ''}
      />
    </div>
  );
};

export default FormReview;
