import { createAction, createReducer } from '@reduxjs/toolkit';

const defaultState = {
  countries: {
    countriesArr: [],
    citiArr: [],
    errpr: '',
    loading: '',
  },
};

export const countriesArrAction = createAction('GET_COUNTRIES');
export const citiArrAction = createAction('GET_CITTY');
export const countriesLocalstorageAction = createAction('GET_COUNTRIES_LOCALSTORIGE');
export const countryLoaading = createAction('COUNTRY_LOADING');
export const getErrorCountry = createAction('GET_ERROR_COUNTRY');
export const lodingCity = createAction('LOADING_CITY');

export default createReducer(defaultState, {
  [countriesArrAction]: (state, action) => {
    state.countriesArr = action.payload;
  },
  [citiArrAction]: (state, action) => {
    state.citiArrAction = action.payload;
  },
  [getErrorCountry]: (state, action) => {
    state.errpr = action.payload;
  },
  [lodingCity]: (state, action) => {
    state.loading = action.payload;
  },
  [countriesLocalstorageAction]: () => {},
});
