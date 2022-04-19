import { Field, ErrorMessage } from 'formik';
import Input from '../../input/inputField';
import { textNotValid } from '../../../../db/BasketData';
const Adress = ({ touched, errors }) => (
  <>
    <Input
      className={touched.country && errors.country === textNotValid ? `inputDeliveryError` : `inputDelivery`}
      placeholder='Country'
      type='text'
      name='country'
      lable='ADRESS'
    />

    <Input
      className={touched.city && errors.city === textNotValid ? `inputDeliveryError` : `inputDelivery`}
      placeholder='City'
      type='text'
      name='city'
    />
    <Input
      className={touched.street && errors.street === textNotValid ? `inputDeliveryError` : `inputDelivery`}
      placeholder='Street'
      type='text'
      name='street'
    />

    <div className='hoeseApartment'>
      <Field
        className={touched.house && errors.house === textNotValid ? `inputDeliveryError` : `inputDeliveryHouse`}
        placeholder='House'
        type='text'
        name='house'
      />

      <Field className='inputDeliveryHouse' placeholder='Apartment' type='text' name='apartment' />
    </div>
    <ErrorMessage name='house' component='span' style={{ color: 'red' }} />
  </>
);

export default Adress;
