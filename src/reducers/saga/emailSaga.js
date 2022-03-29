import {
    all,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import {
    userEmailAction,
    responseAction,
    loadingAction
} from '../actionEmailPost';


function* emailSagaPost(action) {
    yield put(loadingAction(true));
    try {
        const responce = yield call(axios.post, "https://training.cleverland.by/shop/email", action);     
        yield put(responseAction(responce.statusText))
    } catch (err) {
        yield put(responseAction(err.message))
        console.log(err.message);
    }
    yield put(loadingAction(false));
}

function* emailSagaPostWatcher() {
    yield all([takeLatest(userEmailAction().type, emailSagaPost)]);
}

export default emailSagaPostWatcher;