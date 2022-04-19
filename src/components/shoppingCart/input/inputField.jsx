import { Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
const Input = ({ className, placeholder, type, name, mask, lable }) => (
  <div className='contenerInput'>
    <label className='labelDelivery'>{lable}</label>
    <Field as={InputMask} className={className} placeholder={placeholder} type={type} name={name} mask={mask} />
    <ErrorMessage name={name} component='span' style={{ color: 'red' }} />
  </div>
);

export default Input;
