import * as Yup from 'yup';
export const textNotValid = 'Поле должно быть заполнено';
export const textPhone = 'Не правильный номер';
export const personalData = 'Вы должны согласиться на обработку личной информации';
export const lenguage = 'смените язык';

const email = Yup.string()
  .required(textNotValid)
  .email('Введите верный email')
  .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, lenguage);

const stringEmti = Yup.string().required(textNotValid);

const postcode = Yup.string()
  .required(textNotValid)
  .matches(/[0-9]{6,}/, textPhone);

const phone = Yup.string()
  .required(textNotValid)
  .matches(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}/, textPhone);

export const offices = Yup.object().shape({
  phone: Yup.string()
    .required(textNotValid)
    .matches(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}/, textPhone),

  email: email,
  country: stringEmti,
  city: stringEmti,
  street: stringEmti,
  house: stringEmti,
  apartment: Yup.number(),
  postcode: postcode,
  personalInformation: Yup.bool().oneOf([true], personalData),
});

export const delivery = Yup.object().shape({
  phone: phone,
  email: email,
  country: stringEmti,
  city: stringEmti,
  street: stringEmti,
  house: Yup.number().required(textNotValid),
  apartment: Yup.number(),
  personalInformation: Yup.bool().oneOf([true], personalData),
});

export const pickup = Yup.object().shape({
  phone: phone,
  email: email,
  country: stringEmti,
  storeAddress: stringEmti,
  personalInformation: Yup.bool().oneOf([true], personalData),
});

export const cardValid = Yup.object().shape({
  card: Yup.string()
    .required(textNotValid)
    .matches(/(\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4})/, 'не верная карта'),

  cardDate: Yup.string()
    .required(textNotValid)
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})/, 'не верные данные карты'),

  cardCVV: Yup.number().min(99, 'не меньше 3 символов').max(9999, 'не больше 3 символов').required(textNotValid),
});

export const payPalValid = Yup.object().shape({
  cashEmail: email,
});

export function resetStatusDelivery(touched) {
  touched.country = false;
  touched.apartment = false;
  touched.city = false;
  touched.email = false;
  touched.house = false;
  touched.personalInformation = false;
  touched.phone = false;
  touched.postcode = false;
  touched.street = false;
  touched.storeAddress = false;
  touched.deliveryMethod = false;
  touched.cashEmail = false;
}

export function resetStatusPayment(touched, errors) {
  touched.card = false;
  touched.cashEmail = false;
  touched.cardDate = false;
  touched.cardCVV = false;
  // errors.cashEmail = false;
  errors.card = false;
  errors.cardDate = false;
  errors.cardCVV = false;
}
export function chekYear(cardNumber) {
  const today = new Date();
  const year = today.getFullYear();
  const yearNow = today.getMonth() + year.toString();

  if (Number(cardNumber.slice(-2)) < Number(yearNow.slice(-2))) {
    return '';
  } else if (
    Number(cardNumber.slice(-2)) === Number(yearNow.slice(-2)) &&
    Number(cardNumber.substr(0, 2) < Number(yearNow.substr(0, 1)))
  ) {
    return '';
  } else {
    return cardNumber;
  }
}
