import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getArrSity, getCharacters, getErorr } from '../actionGetCity';

function* getCityWorker(action) {
  try {
    const { data } = yield call(axios.post, `https://training.cleverland.by/shop/search/cities`, {
      city: action.payload.city,
      country: action.payload.country,
    });
    yield put(getArrSity(data));
  } catch (err) {
    yield put(getErorr(err.message));
  }
}

function* getCityWatcher() {
  yield all([takeLatest(getCharacters().type, getCityWorker)]);
}

export default getCityWatcher;
