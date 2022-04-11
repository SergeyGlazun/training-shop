import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import InputMask from "react-input-mask";
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { countriesLocalstorageAction } from '../../../../reducers/getCountries';


const ItemInCart = ({ prise, setMakingPurchase }) => {
    const [checkedDelivery, setCheckedDelivery] = useState("offices");
    const [agree, setAgree] = useState("notAgree");
    const textNotValid = 'Поле должно быть заполнено';
    //////////////////////////////////////////////////////////
    const [currentCountry, setCurrentCountry] = useState('Беларусь');
    const [currentCountryInput, setCurrentCountryInput] = useState("Беларусь");
    ///////////////////////////////////////
    const [currentCity, setCurrentCity] = useState([]);
    const [currentCityInput, setCurrentCityInput] = useState("");
    const getCitiArr = () => {
 
       if (currentCity.length !== 0) {
          try{
             for (let i = 0; i < currentCity.length; i++) {
           
                if (currentCity[i].city === currentCityInput) {
                   return currentCityInput;
                }
             }
             return ""
          }catch{
             return ""
          }
         
       } else {
          return "";
       }
 
    }
    ///////////////////////////////////////
 
    const dispatch = useDispatch();
    const { countriesArr } = useSelector(state => state.getCountriesArr);
 
    const options = [];
    if (countriesArr !== undefined) {
       for (let i = 0; i < countriesArr.dataObject.length; i++) {
          options.push(
             {
                value: countriesArr.dataObject[i].name, label: countriesArr.dataObject[i].name
             }
          )
       }
    }
 
    const getCountrie = () => {
 
       return currentCountry ? options.find(item => item.value === currentCountry) : "";
    }
 
    const onChange = (newValue) => {
       setCurrentCountryInput(newValue.value);
       setCurrentCountry(newValue.value);
    }
 
    const onChangeCiti = async (newValue) => {
       setCurrentCityInput(newValue.target.value);
 
 
       if (newValue.target.value.length === 3) {
          await axios.post("https://training.cleverland.by/shop/search/cities", {
             city: newValue.target.value,
             country: currentCountryInput
 
          })
             .then(function (response) {
                setCurrentCity(response.data)
 
 
             })
             .catch(function (error) {
                console.log(error);
             });
       }
 
       if (newValue.target.value.length > 3) {
          if (currentCity.length === 0) {
             newValue.target.value = "Store adress not founded"
             currentCity.length = 2;
          } else {
             currentCity.sort();
          }
       }
    }
    return (
        <Formik
            initialValues={{
                phone: "",
                email: "",
                adress: "",
                city: "",
                street: "",
                house: "",
                apartment: "",
                post: "",
                adressStore: "",
                personalInformation: false
            }}

            validationSchema={Yup.object().shape({
                phone: Yup
                    .string()
                    .required(textNotValid)
                    .matches(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}/, "Не правильный номер"),

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
                // adressStore: Yup.string().required(textNotValid),
                personalInformation: Yup.bool().oneOf([true], 'Вы должны согласиться на обработку личной информации'),


            })}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("отправка")
                setMakingPurchase('Payment');
            }}
        >

            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, }) => (
                <> <div className='contenerDelivery'>
                    <div className='ContenerChooseDeliveryItems'>
                        <label className='TextDeliveryItems'>Choose the method of delivery of the items</label>
                        {/* <div className="radioBattonChooseDeliveryItems">
                            <div className="contenerRadio">
                                <input className="inputChooseDelivery"
                                    name="ChooseDelivery"
                                    type="radio"
                                    value="offices"
                                    onClick={() => { setCheckedDelivery("offices"); resetStatus(touched); }}
                                    onChange={handleChange}
                                    checked={checkedDelivery === "offices" ? true : false} />  <div className='radioButtonChooseDelivery'>Pickup from post offices</div>
                            </div>
                            <div className="contenerRadio">
                                <input className="inputChooseDelivery"
                                    name="ChooseDelivery"
                                    type="radio"
                                    value="delivery"
                                    onClick={() => { setCheckedDelivery("delivery"); resetStatus(touched); }}
                                    onChange={handleChange}
                                    checked={checkedDelivery === "delivery" ? true : false} /> <div className='radioButtonChooseDelivery'>Express delivery</div>
                            </div>

                            <div className="contenerRadio">
                                <input className="inputChooseDelivery"
                                    name="ChooseDelivery"
                                    type="radio"
                                    value="pickup"
                                    onClick={() => { setCheckedDelivery("pickup"); resetStatus(touched); dispatch(countriesLocalstorageAction()); }}
                                    onChange={handleChange}
                                    checked={checkedDelivery === "pickup" ? true : false} /><div className='radioButtonChooseDelivery'>Store pickup</div>
                            </div>
                        </div> */}

                        <div className="contenerDeliveryInput">
                            <div className='contenerInput'>
                                <label className="labelDelivery">Phone</label>
                                <InputMask
                                    mask={"+375 (99) 9999999"}
                                    type="tel"
                                    name="phone"
                                    placeholder="+375 (__) _______"
                                    className={(touched.phone && ((errors.phone === textNotValid) || (errors.phone === "Не правильный номер"))) ? `inputDeliveryError` : `inputDelivery`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />

                                {touched.phone && errors.phone && <span className="error">{errors.phone}</span>}
                            </div>
                            <div className='contenerInput'>
                                <label className="labelDelivery">e-mail</label>
                                <input
                                    className={(touched.email && ((errors.email === textNotValid) || (errors.email === "Введите верный email") || (errors.email === "смените язык"))) ? `inputDeliveryError` : `inputDelivery`}
                                    placeholder="Введите ваш Email"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {touched.email && errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            {((checkedDelivery === "delivery") || (checkedDelivery === "offices")) && <>
                                {(checkedDelivery === "delivery") &&
                                    <div className='contenerInput'>
                                        <label className="labelDelivery">ADRESS</label>
                                        <input
                                            className={touched.adress && (errors.adress === textNotValid) ? `inputDeliveryError` : `inputDelivery`}
                                            placeholder="Country"
                                            type="text"
                                            name="adress"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.adress}
                                        />
                                        {touched.adress && errors.adress && <span className="error">{errors.adress}</span>}
                                    </div>}

                                {(checkedDelivery === "offices") &&
                                    <div className='contenerInput'>
                                        <label className="labelDelivery">ADRESS</label>

                                        <input
                                            className='inputDelivery'
                                            placeholder="Country"
                                            type="text"
                                            name="adress"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.adress = 'Беларусь'}
                                        />
                                        {touched.adress && errors.adress && <span className="error">{errors.adress}</span>}
                                    </div>}


                                <div className='contenerInput'>
                                    <input
                                        className={touched.city && (errors.city === textNotValid) ? `inputDeliveryError` : `inputDelivery`}
                                        placeholder="City"
                                        type="text"
                                        name="city"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.city}
                                    />
                                    {touched.city && errors.city && <span className="error">{errors.city}</span>}
                                </div>
                                <div className='contenerInput'>
                                    <input
                                        className={touched.street && (errors.street === textNotValid) ? `inputDeliveryError` : `inputDelivery`}
                                        placeholder="Street"
                                        type="text"
                                        name="street"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.street}
                                    />
                                    {touched.street && errors.street && <span className="error">{errors.street}</span>}
                                </div>

                                <div className='hoeseApartment'>
                                    <input
                                        className={touched.house && (errors.house === textNotValid) ? `inputDeliveryError` : `inputDeliveryHouse`}
                                        placeholder="House"
                                        type="text"
                                        name="house"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.house}
                                    />

                                    <input
                                        className="inputDeliveryHouse"
                                        placeholder="Apartment"
                                        type="text"
                                        name="apartment"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.apartment}
                                    />
                                </div>
                                {touched.house && errors.house && <span className="error">{errors.house}</span>}

                                {checkedDelivery === "offices" &&
                                    <div className='contenerInput'>
                                        <InputMask
                                            mask={"BY999999"}
                                            className={touched.post && (errors.post === textNotValid) ? `inputDeliveryError` : `inputDeliveryHouse`}
                                            type="text"
                                            name="post"
                                            placeholder="BY ______"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.post}
                                        />
                                        {touched.post && errors.post && <span className="error">{errors.post}</span>}
                                    </div>}
                            </>}
                            {(checkedDelivery === "pickup") && <>
                                <div className='contenerInput'>
                                    <label className="labelDelivery">ADRESS OF STORE</label>
                                    {/* <input
                     className={touched.adress && (errors.adress === textNotValid) ? `inputDeliveryError` : `inputDelivery`}
                     placeholder="Country"
                     type="text"
                     name="adress"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.adress}
                  />
                  {touched.adress && errors.adress && <span className="error">{errors.adress}</span>} */}

                                    <Select
                                        options={options}
                                        styles={styles}
                                        name="adress"
                                        onChange={onChange}
                                        onBlur={handleBlur}
                                        value={getCountrie()}

                                    />
                                    {touched.adress && errors.adress && <span className="error">{errors.adress}</span>}
                                    <div className='NotVisible'> {values.adres = currentCountryInput}    </div>
                                </div>
                                <div className='contenerInput'>
                                    <input

                                        className={touched.adressStore && (errors.adressStore === textNotValid) ? `inputDeliveryError` : `inputDelivery`}
                                        placeholder="Store adress"
                                        name="adressStore"
                                        type="text"
                                        onChange={onChangeCiti}
                                        onBlur={handleBlur}
                                        list="city-list"
                                    />
                                    <datalist id="city-list">
                                        {
                                            currentCity.map(({ city, id }) => (
                                                <option key={id} value={city}>{city}</option>
                                            ))}

                                    </datalist>
                                    {touched.adressStore && errors.adressStore && <span className="error">{errors.adressStore}</span>}
                                    <div className='NotVisible'>{values.adressStore = getCitiArr()}</div>


                                </div>
                            </>}


                            <div className="contenerInputChek">
                                <div className={((agree === "notAgree") && touched.personalInformation && errors.personalInformation) ? "checkbox-other checkbox-other-error" : "checkbox-other"}
                                    onClick={() => {
                                        setAgree(agree === "setAgreeDelivery" ? "notAgree" : "setAgreeDelivery"); values.personalInformation === true ? values.personalInformation = false : values.personalInformation = true;
                                    }}>
                                    <input
                                        name="personalInformation"
                                        type="checkbox"
                                        className="heckboxDelivery"
                                        checked={agree === "setAgreeDelivery" ? true : false}
                                        onChange={handleChange}
                                        value={values.personalInformation}
                                    />
                                    <span>I agree to the processing of my personal information</span>
                                </div>
                            </div>
                            {(agree === "notAgree") && touched.personalInformation && errors.personalInformation && <span className="error">{errors.personalInformation}</span>}
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
                            onClick={() => {
                                handleSubmit();
                                (isValid === false ? values.personalInformation = false : values.personalInformation = true);
                                (isValid === false ? setAgree("notAgree") : setAgree("setAgreeDelivery"));
                            }}>Further</button>

                        <button
                            className='btnShoping'
                            onClick={() => { setMakingPurchase('Item in cart'); }}>View cart</button>

                    </div>
                </>

            )}
        </Formik >
    );
}

export default ItemInCart;

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
 
 const styles = {
    menu: (provided, state) => ({
       ...provided,
       background: "#f8f8f8",
    }),
 
    control: (base, state) => ({
       ...base,
       background: "#f8f8f8",
       border: "none",
       height: "50px",
       boxShadow: state.isFocused ? null : null,
    }),
    option: (base) => ({
       ...base,
       background: "#f8f8f8",
       color: "#141414"
    }),
 };