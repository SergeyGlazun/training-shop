import {
    all,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import { postReview, loadingActionReview,responseReview,closeForm} from '../actionReview';
import { getIDProductIDObject} from '../actionGetProductId';

function* reviewSagaPost(action) {
 
    yield put(loadingActionReview(true));
    try {
       
         yield call(axios.post, "https://training.cleverland.by/shop/product/review", {
            id: action.payload.id,
            name: action.payload.name,
            text: action.payload.text,
            rating: Number(action.payload.rating)
        });     
     
        const { data } = yield call(axios.get, `https://training.cleverland.by/shop/product/${action.payload.id}`);      
        yield put(getIDProductIDObject(data));
     
        yield put(loadingActionReview(true));  
    } catch (err) {
        yield put(responseReview(err.message))
        console.log(err.message);
    }
    yield put(loadingActionReview(false));
    yield put(closeForm(true));
    yield put(closeForm(false));
}

function* reviewSagaPostWatcher() {
    yield all([takeLatest(postReview().type, reviewSagaPost)]);
}

export default reviewSagaPostWatcher;