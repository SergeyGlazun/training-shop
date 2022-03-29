import { all } from 'redux-saga/effects';
import GetProductWatcher from './productSaga';
import emailSagaPostWatcher from './emailSaga';
import reviewSagaPostWatcher from './reviewSaga';

export  function* rootSaga() {
    yield all([
        GetProductWatcher(),
        emailSagaPostWatcher(),
        reviewSagaPostWatcher()
    ]);
  }