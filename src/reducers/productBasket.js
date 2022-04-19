import { createAction, createReducer } from '@reduxjs/toolkit';

const defaultState = {
  dataBuy: {
    product: [],
    deliveryMethod: '',
    paymentMethod: '',
    totalPrice: '',
    phone: '',
    email: '',
    country: '',
    cashEmail: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    postcode: '',
    storeAddress: '',
    card: '',
    cardDate: '',
    cardCVV: '',
  },
  loading: false,
  respons: '',
};

export const postProductBasketActionProduct = createAction('POST_PRODUCT_BASKETACT_ON_PRODUCT');
export const clearBasket = createAction('CLEAR_BASKET');

export const postCastumerTotalPrise = createAction('POST_CASTUMER_TOTALPRISE');
export const postCastumerDeliveryMethod = createAction('POST_CASTUMER_DELIVERY_METHOD');

export const getDataDelivery = createAction('GET_DATA_DELIVERY');
export const getDataCard = createAction('GET_DATA_CARD');
export const getObjectBasket = createAction('GET_PROJECT_BASKET');
export const lodingPostBasket = createAction('LOADING_POSTSAGA');
export const responsBasketAction = createAction('RESPONS_BASKET_ACTION');

export default createReducer(defaultState, {
  [postProductBasketActionProduct]: (state, action) => {
    state.dataBuy.product = action.payload;
  },

  [postCastumerTotalPrise]: (state, action) => {
    state.dataBuy.totalPrice = action.payload;
  },
  [postCastumerDeliveryMethod]: (state, action) => {
    state.dataBuy.deliveryMethod = action.payload;
  },

  [getObjectBasket]: () => {},

  [lodingPostBasket]: (state, action) => {
    state.loading = action.payload;
  },

  [responsBasketAction]: (state, action) => {
    state.respons = action.payload;
  },

  [clearBasket]: (state) => {
    state.dataBuy.totalPrice = '';
    state.dataBuy.phone = '';
    state.dataBuy.email = '';
    state.dataBuy.country = '';
    state.dataBuy.city = '';
    state.dataBuy.street = '';
    state.dataBuy.house = '';
    state.dataBuy.apartment = '';
    state.dataBuy.postcode = '';
    state.dataBuy.storeAddress = '';
    state.dataBuy.cashEmail = '';
    state.dataBuy.card = '';
    state.dataBuy.cardDate = '';
    state.dataBuy.cardCVV = '';
    state.dataBuy.deliveryMethod = '';
    state.dataBuy.paymentMethod = '';
  },

  [getDataCard]: (state, action) => {
    state.dataBuy.phone = action.payload.phone;
    state.dataBuy.cashEmail = action.payload.cashEmail;
    state.dataBuy.card = action.payload.card;
    state.dataBuy.cardDate = action.payload.cardDate;
    state.dataBuy.cardCVV = action.payload.cardCVV;
    state.dataBuy.paymentMethod = action.payload.checkedPayments;
  },
  [getDataDelivery]: (state, action) => {
    state.dataBuy.phone = action.payload.phone;
    state.dataBuy.email = action.payload.email;
    state.dataBuy.country = action.payload.country;
    state.dataBuy.city = action.payload.city;
    state.dataBuy.street = action.payload.street;
    state.dataBuy.house = action.payload.house;
    state.dataBuy.apartment = action.payload.apartment;
    state.dataBuy.postcode = action.payload.postcode;
    state.dataBuy.storeAddress = action.payload.storeAddress;
    state.dataBuy.deliveryMethod = action.payload.deliveryMethod;
  },
});
