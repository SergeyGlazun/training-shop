import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from "react-input-mask";
import {
   postCastumerPaymentMethod,
   postCastumerStoryCashEmaik,
   postCastumerStoryCard,
   postCastumerCardDate,
   postCastumerCardCVV,
   postCastumerPhone,
   getObjectBasket,
} from '../../../reducers/productBasket';
import { getYear } from '../../function/getNowYear';
import password from './img/pasword.svg';
import text from './img/text.svg';
import payPal from '../../../pages/productPage/productInformationPage/mainProductItem/img/MasterCard/paypal.png';
import visa from '../../../pages/productPage/productInformationPage/mainProductItem/img/MasterCard/visa.png';
import masterCard from '../../../pages/productPage/productInformationPage/mainProductItem/img/MasterCard/mastercard.png';
import LoaderButtom from '../../loader/loaderButton';
import './payment.scss';
import "../deliveryInfo/deliveryInfo.scss";


const Payment = ({ prise, setMakingPurchase }) => {

   const year = getYear();
   const { dataBuy ,loading} = useSelector(state => state.postProductBasket);
   const [checkedPayments, setCheckedPayments] = useState("visa");
   const [viseblePasword, setviseblePasword] = useState(false);
   const dispatch = useDispatch();
   const textNotValid = 'Поле должно быть заполнено';


   return (

      <Formik
         initialValues={{
            card: dataBuy.card,
            cashEmail: dataBuy.cashEmail,
            cardDate: dataBuy.cardDate,
            cardCVV: dataBuy.cardCVV
         }}
         validationSchema={(checkedPayments === "visa" || checkedPayments === "card") ? cardValid : (checkedPayments === "paypal") ? payPalValid : null}

         onSubmit={(values) => {
            setMakingPurchase('AnswerBasket');

            dispatch(postCastumerStoryCashEmaik(values.cashEmail));
            dispatch(postCastumerStoryCard(values.card));
            dispatch(postCastumerCardDate(values.cardDate));
            dispatch(postCastumerCardCVV(values.cardCVV));
            dispatch(postCastumerPaymentMethod(checkedPayments));
            dispatch(postCastumerPhone(dataBuy.phone.replace(/[()\s]/g, "")));
                
            dispatch(getObjectBasket({
            product: dataBuy.product,
            deliveryMethod: dataBuy.deliveryMethod,
            paymentMethod: checkedPayments,
            totalPrice:dataBuy.totalPrice,
            phone: dataBuy.phone.replace(/[()\s]/g, ""),
            email: dataBuy.email,
            country: dataBuy.country,
            cashEmail: values.cashEmail,
            city:dataBuy.city,
            street: dataBuy.street,
            house: dataBuy.house,
            apartment:dataBuy.apartment,
            postcode: dataBuy.postcode,
            storeAddress: dataBuy.storeAddress,
            card: values.card,
            cardDate:values.cardDate,
            cardCVV: values.cardCVV,
            }));
         }}
      >
         {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <>
               <div className='contenerDelivery'>
                  <div className='ContenerChooseDeliveryItems'>
                     <label className='TextDeliveryItems'>Method of payments</label>
                     <div className="radioBattonChooseDeliveryItems">
                        <div className="contenerRadio">
                           <input className="inputChooseDelivery"
                              name="ChoosePayment"
                              type="radio"
                              value="PayPal"
                              onClick={() => { setCheckedPayments("paypal"); resetStatus(touched); }}
                              onChange={handleChange}
                              checked={checkedPayments === "paypal" ? true : false} />  <div className='radioButtonChooseDelivery'><img src={payPal} alt='visa' className='visa' /></div>
                        </div>
                        <div className="contenerRadio">
                           <input className="inputChooseDelivery"
                              name="ChoosePayment"
                              type="radio"
                              value="Visa"
                              onClick={() => { setCheckedPayments("visa"); resetStatus(touched); }}
                              onChange={handleChange}
                              checked={checkedPayments === "visa" ? true : false} /> <div className='radioButtonChooseDelivery'><img src={visa} alt='visa' className='visa' /></div>
                        </div>

                        <div className="contenerRadio">
                           <input className="inputChooseDelivery"
                              name="ChoosePayment"
                              type="radio"
                              value="MasterCard"
                              onClick={() => { setCheckedPayments("card"); resetStatus(touched); }}
                              onChange={handleChange}
                              checked={checkedPayments === "card" ? true : false} /> <div className='radioButtonChooseDelivery'><img src={masterCard} alt='visa' className='visa' /></div>
                        </div>

                        <div className="contenerRadio">
                           <input className="inputChooseDelivery"
                              name="ChoosePayment"
                              type="radio"
                              value="Cash"
                              onClick={() => { setCheckedPayments("cash"); resetStatus(touched); }}
                              onChange={handleChange}
                              checked={checkedPayments === "cash" ? true : false} /><div className='radioButtonChooseDelivery'>Cash</div>
                        </div>
                     </div>

                     <div className="contenerDeliveryInput">
                        {(checkedPayments === "visa" || checkedPayments === "card") && <>
                           <div className="contenerDeliveryInput">
                              <div className='contenerInput'>
                                 <label className="labelDelivery">card</label>
                                 <InputMask
                                    mask={"9999999999999999"}
                                    type="tel"
                                    name="card"
                                    placeholder="----------------"
                                    className={(touched.card && ((errors.card === textNotValid) || (errors.card === "не верная карта"))) ? `inputDeliveryError` : `inputDelivery`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.card}
                                 />
                                 {touched.card && errors.card && <span className="error">{errors.card}</span>}
                              </div>
                           </div>

                           <div className='contwnerCard'>
                              <div className='contenerInput'>
                                 <InputMask
                                    className={touched.cardDate && ((errors.cardDate === textNotValid) || (errors.cardDate === "не верные данные карты")) ? `inputDeliveryError` : `inputDeliveryHouse`}
                                    placeholder="MM/YY"
                                    mask={"99/99"}
                                    type="text"
                                    name="cardDate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={chekYear(values.cardDate, year)}
                                 />
                                 {touched.cardDate && errors.cardDate && <span className="error">{errors.cardDate}</span>}
                              </div>

                              <div className='contenerInput'>
                                 <input
                                    className={touched.cardCVV && (errors.cardCVV === textNotValid) ? `inputDeliveryError` : `inputDeliveryHouse`}
                                    placeholder="CVV"
                                    type={viseblePasword === false ? "password" : "number"}
                                    min="99"
                                    max="9999"
                                    name="cardCVV"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cardCVV}
                                 />
                                 {viseblePasword === false ? <img src={password} alt="password" className='password' onClick={() => { setviseblePasword(true) }} />
                                    :
                                    <img src={text} alt="password" className='text' onClick={() => { setviseblePasword(false) }} />
                                 }


                                 {touched.cardCVV && errors.cardCVV && <span className="error">{errors.cardCVV}</span>}


                              </div>

                           </div>


                        </>}
                        {checkedPayments === "paypal" &&
                           <div className='contenerInput'>
                              <label className="labelDelivery">e-mail</label>
                              <input
                                 className={(touched.cashEmail && ((errors.cashEmail === textNotValid) || (errors.cashEmail === "Введите верный email") || (errors.cashEmail === "смените язык"))) ? `inputDeliveryError` : `inputDelivery`}
                                 placeholder="e-mail"
                                 type="email"
                                 name="cashEmail"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.cashEmail}
                              />
                              {touched.cashEmail && errors.cashEmail && <span className="error">{errors.cashEmail}</span>}
                           </div>}
                     </div>



                  </div>
               </div>

               <div className='shopingFooter'>
                  <div className="shopingPrice">
                     <span className='title'>Total</span>
                     <span className='prise'>{prise.toFixed(2)}</span>
                  </div>
                  <button
                     type="submit"
                     // disabled={!isValid || !dirty}
                     className='btnShoping'
                     onClick={() => { handleSubmit(); }}> {loading && <LoaderButtom />}{checkedPayments === "cash" ? "READY" : "Check Out"}</button>
                  <button
                     className='btnShoping'
                     onClick={() => { setMakingPurchase('Delivery Info') }}>View cart</button>
               </div>
            </>
         )}
      </Formik>
   );
}

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

   cardCVV: Yup.number()
      .min(99, 'не меньше 3 символов')
      .max(9999, 'не больше 3 символов')
      .required(textNotValid)
});

const payPalValid = Yup.object().shape({
   cashEmail: Yup.string().email('Введите верный email').matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'смените язык')
})

function chekYear(card, yearNow) {
   if (Number(card.slice(-2)) < Number(yearNow.slice(-2))) {
      return ""
   } else if (Number(card.slice(-2)) === Number(yearNow.slice(-2)) && (Number(card.substr(0, 2) < Number(yearNow.substr(0, 1))))) {
      return ""
   } else {
      return card;
   }
}
