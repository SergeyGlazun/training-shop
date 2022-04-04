import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from "formik";
import * as Yup from 'yup';
import { userEmailAction } from '../../../reducers/actionEmailPost';
import LoaderButtom from '../../loader/loaderButton';
import './formEmail.scss';


const ForEmail = ({ classFooterEmail, classInput, classButtonDisebleTrue, classButtonDisebleFalse, classError, idInput, idButton, inputOK }) => {
    const dispatch = useDispatch();

          

    const [OK, setCount] = useState("");
    const [error, setError] = useState("");

    const { responce, loading, numberFor,  errorEmail } = useSelector(state => state.validationChek);

    return (
        <Formik
            // 
            initialValues={{
                email: "",
                numberFormAction: idInput,
                colbek:null
            }}

            validateOnBlur
            onSubmit={(values, {setSubmitting, resetForm }) => {                                   
                values.colbek=resetForm; 
                dispatch(userEmailAction(values))
                setSubmitting(false);                                            
            }}

            validationSchema={Yup.object().shape({
                email: Yup.string().email('Введите верный email').matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'смените язык')
            })}

        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) =>
            (
                <div className={classFooterEmail + "contenerForm"} onMouseOut={() => { setCount(""); setError("") }}>

                    <input
                        // autoComplete="off"
                        data-test-id={idInput}
                        className={classInput}
                        placeholder="Введите ваш Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}                     
                        value={values.email}
                    />
                    {touched.email && errors.email && <span className={classError}>{errors.email}</span>}

                    <button
                        data-test-id={idButton}

                        className={isValid && values.email.length > 0 ? `${classButtonDisebleFalse}` : `${classButtonDisebleTrue}`}
                        disabled={!isValid || !dirty || loading}
                        onClick={() => {
                                        
                            handleSubmit();
                            setCount("Почта успешно отправлена");
                            setError("Ошибка Отправки");                                         
                        }}
                        type="submit"
                    > {loading && <LoaderButtom />}SUBSCRIBE</button>
                    {numberFor === idInput && <div className={responce === "OK" ? `${inputOK}` : `${classError}`}>
                        {responce === "OK" && OK}
                        {errorEmail && error}
                       
                    </div>}

                </div>
            )}
        </Formik>
    );
}

export default ForEmail;