import Input from '../../input/inputField';
import { textPhone, textNotValid, lenguage } from '../../../../db/BasketData';
const PhoneEmail = ({ touched, errors }) => {
  return (
    <>
      <Input
        mask={'+375 (99) 9999999'}
        type='tel'
        name='phone'
        placeholder='+375 (__) _______'
        className={
          touched.phone && (errors.phone === textNotValid || errors.phone === textPhone)
            ? `inputDeliveryError`
            : `inputDelivery`
        }
        lable='Phone'
      />
      <Input
        className={
          touched.email &&
          (errors.email === textNotValid || errors.email === 'Введите верный email' || errors.email === lenguage)
            ? `inputDeliveryError`
            : `inputDelivery`
        }
        placeholder='e-mail'
        type='email'
        name='email'
        lable={'e-mail'}
      />
    </>
  );
};

export default PhoneEmail;
