import {
    all,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import { getIDProductIDObject, getIDProductID,loadingIDProduct } from '../actionGetProductId';


function* getProductIDWorker(action) {  
    yield put(loadingIDProduct(true));  
    try {     
        const { data } = yield call(axios.get, `https://training.cleverland.by/shop/product/${action.payload}`);      
        yield put(getIDProductIDObject(data));        
    } catch (err) {
     
        console.log(err.message);
    }
    yield put(loadingIDProduct(false)); 
}

function* getProductIDWatcher() {
    yield all([takeLatest( getIDProductID().type, getProductIDWorker)]);
}

export default getProductIDWatcher;