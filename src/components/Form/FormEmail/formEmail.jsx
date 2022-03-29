import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from "formik";
import * as Yup from 'yup';
import { userEmailAction } from '../../../reducers/actionEmailPost';
import LoaderButtom from '../../loader/loaderButton';
import { responseAction } from '../../../reducers/actionEmailPost';
import './formEmail.scss';

const ForEmail = ({ classFooterEmail, classInput, classButtonDisebleTrue, classButtonDisebleFalse, classError, idInput, idButton }) => {
    const dispatch = useDispatch();

    const loadingAction = useSelector(state => state.validationChek.loading);
    const responce = useSelector(state => state.validationChek.responce);

    return (
        <Formik
            initialValues={{
                email: ""
            }}
            validateOnBlur
            onSubmit={values => dispatch(userEmailAction(values))}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Введите верный email')
            })}

        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) =>
            (
                <div className={classFooterEmail}>

                    <input
                        data-test-id={idInput}
                        className={classInput}
                        placeholder="Введите ваш Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onClick={() => { dispatch(responseAction(null)) }}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email && <span className={classError}>{errors.email}</span>}

                    <button
                        data-test-id={idButton}
                        className={isValid && values.email.length > 0 ? `${classButtonDisebleFalse}` : `${classButtonDisebleTrue}`}
                        disabled={!isValid || !dirty || loadingAction}
                        onClick={() => { handleSubmit(); values.email = "" }}
                        type="submit"
                    > {loadingAction && <LoaderButtom />} SUBSCRIBE</button>
                    <div className={responce === null ? "" : responce === "OK" ? "responseOK" : `${classError}`}>
                        {responce === null ? "" : responce === "OK" ? "Почта успешно отправлена" : `${responce}`}
                    </div>
                </div>
            )}
        </Formik>
    );
}

export default ForEmail;