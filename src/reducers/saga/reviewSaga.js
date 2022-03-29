import {
    all,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import { postReview, loadingActionReview,responseReview,closeForm} from '../actionReview';
import { getArr } from '../getProdus';


function* reviewSagaPost(action) {
 
    yield put(loadingActionReview(true));
    try {
       
         yield call(axios.post, "https://training.cleverland.by/shop/product/review", {
            id: action.payload.id,
            name: action.payload.name,
            text: action.payload.review,
            rating: Number(action.payload.stars)
        });     
        const { data } = yield call(axios.get, 'https://training.cleverland.by/shop/products');              
        yield put(getArr(data));        
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