import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { countriesArrAction, countriesLocalstorageAction } from '../getCountries';

function* getCountriesWorker() {
  let store = require('store');
  try {
    if (localStorage.getItem('countriesArr') === null) {
      const { data } = yield call(axios.get, `https://training.cleverland.by/shop/countries`);
      yield store.set('countriesArr', {
        data,
      });
      yield put(countriesArrAction(store.get('countriesArr')));
    } else {
      yield put(countriesArrAction(store.get('countriesArr')));
    }
  } catch (err) {
    console.log(err.message);
  }
}

function* getCountriesWatcher() {
  yield all([takeLatest(countriesLocalstorageAction().type, getCountriesWorker)]);
}

export default getCountriesWatcher;
