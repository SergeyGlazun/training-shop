import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getObjectBasket, lodingPostBasket, responsBasketAction } from '../productBasket';

function* basketSagaPost(action) {
  yield put(lodingPostBasket(true));

  try {
    const responce = yield call(axios.post, 'https://training.cleverland.by/shop/cart', {
      products: action.payload.product,
      deliveryMethod: action.payload.deliveryMethod,
      paymentMethod: action.payload.paymentMethod,
      totalPrice: action.payload.totalPrice,
      phone: action.payload.phone,
      email: action.payload.email,
      country: action.payload.country,
      cashEmail: action.payload.cashEmail,
      city: action.payload.city,
      street: action.payload.street,
      house: action.payload.house,
      apartment: action.payload.apartment,
      postcode: action.payload.postcode,
      storeAddress: action.payload.storeAddress,
      card: action.payload.card,
      cardDate: action.payload.cardDate,
      cardCVV: action.payload.cardCVV,
    });

    yield put(responsBasketAction(responce.statusText));

    yield put(lodingPostBasket(false));
  } catch (err) {
    yield put(responsBasketAction(err.message));
  }
}

function* basketSagaPostSagaPostWatcher() {
  yield all([takeLatest(getObjectBasket().type, basketSagaPost)]);
}

export default basketSagaPostSagaPostWatcher;
