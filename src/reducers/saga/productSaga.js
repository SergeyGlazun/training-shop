import {put,call} from 'redux-saga/effects';
import axios from 'axios';
import {getArr} from '../getProdus';
import { showLoader,hideLoader,showAlert,hideAlert } from '../appReducer';
 
  function* mySaga() {  
      try {
        yield put(showLoader());
        const { data } = yield call(axios.get, 'https://training.cleverland.by/shop/products');              
        yield put(getArr(data));    
        yield put(hideLoader());
        yield put(hideAlert());     
      } catch (err) {
      //   yield put(productsRequestError(err.message));    
      console.log(err.message);
      yield put(showAlert());
      }
     
  }
  export default mySaga;


