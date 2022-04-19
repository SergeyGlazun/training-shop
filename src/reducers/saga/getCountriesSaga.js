import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { countriesArrAction, countriesLocalstorageAction, getErrorCountry, lodingCity } from '../getCountries';
let store = require('store');
function* getCountriesWorker(action) {
  try {
    const { data } = yield call(axios.get, `https://training.cleverland.by/shop/countries`);
    yield store.set('countriesArr', {
      data,
    });

    yield (action.payload = data);

    yield put(lodingCity(true));
    yield put(lodingCity(false));
  } catch (err) {
    yield put(countriesArrAction(getErrorCountry(err.message)));
  }
}

function* getCountriesWatcher() {
  yield all([takeLatest(countriesLocalstorageAction().type, getCountriesWorker)]);
}

export default getCountriesWatcher;
