import { all } from 'redux-saga/effects';
import GetProductWatcher from './productSaga';
import emailSagaPostWatcher from './emailSaga';
import reviewSagaPostWatcher from './reviewSaga';
import getCountriesWatcher from './getCountriesSaga';
import basketSagaPostSagaPostWatcher from './postBasketSaga';

export  function* rootSaga() {
    yield all([
        GetProductWatcher(),
        emailSagaPostWatcher(),
        reviewSagaPostWatcher(),
        getCountriesWatcher(),
        basketSagaPostSagaPostWatcher()
    ]);
  }