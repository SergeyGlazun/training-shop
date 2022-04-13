import { createAction, createReducer } from '@reduxjs/toolkit';

const defaultState = {
  countries: {
    countriesArr: [],
    citiArr: [],
  },
};

export const countriesArrAction = createAction('GET_COUNTRIES');
export const citiArrAction = createAction('GET_CITTY');
export const countriesLocalstorageAction = createAction('GET_COUNTRIES_LOCALSTORIGE');
export const countryLoaading = createAction('COUNTRY_LOADING');

export default createReducer(defaultState, {
  [countriesArrAction]: (state, action) => {
    state.countriesArr = action.payload;
  },
  [citiArrAction]: (state, action) => {
    state.citiArrAction = action.payload;
  },
  [countriesLocalstorageAction]: () => {},
});
