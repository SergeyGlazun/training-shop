// import {
//     all,
//     put,
//     call,
//     takeLatest
// } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//     userEmailAction,
//     responseAction,
//     loadingAction,
//     validationChek
// } from '../actionEmailPost';


// function* emailSagaPost(action) {
//     console.log(action.payload);
//     yield put(loadingAction(true));
//     try {
//         const responce = yield call(axios.post, "https://training.cleverland.by/shop/email", action);     
//         yield put(responseAction(responce.statusText));
      
//         yield put(validationChek(""));
//     } catch (err) {
      
//         yield put(validationChek(action.payload.email));
//          put(responseAction(err.message));
      
//         console.log(err.message);
//     }
//     yield put(loadingAction(false));
// }

// function* emailSagaPostWatcher() {
//     yield all([takeLatest(userEmailAction().type, emailSagaPost)]);
// }

// export default emailSagaPostWatcher;
//////////////////////////////////////////////////


import {
    all,
    put,
    call,
    takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
    userEmailAction,
    responseAction,
    loadingAction,
    validationChek,
    numberFormAction,
    userEmailValueAction,
    errorAction
} from '../actionEmailPost';


function* emailSagaPost(action) {
   
  console.log(action.payload);
yield put(loadingAction(true));
    try {
      
        const responce = yield call(axios.post, "https://training.cleverland.by/shop/email",  {
			mail: action.payload.email,
		});     
        yield put(responseAction(responce.statusText));
        yield put(numberFormAction(action.payload.numberFormAction));
        yield put(userEmailValueAction(""));     
        yield  put(errorAction(false));
        yield (action.payload.colbek()); 
    } catch (err) {
      
        yield put(numberFormAction(action.payload.numberFormAction));
        yield put(validationChek(action.payload.email));
        yield  put(responseAction(err.message));
        yield  put(errorAction(true));
        yield put(userEmailValueAction(action.payload.email));   
        console.log(err.message);
    }
    yield put(loadingAction(false));
}

function* emailSagaPostWatcher() {
    yield all([takeLatest(userEmailAction().type, emailSagaPost)]);
}

export default emailSagaPostWatcher;