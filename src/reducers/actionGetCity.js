import { createAction, createReducer } from '@reduxjs/toolkit';

const defaultState = {
  city: {
    cities: [],
    fersTreeCharacters: '',
    country: '',
    erro: '',
  },
};

export const getArrSity = createAction('GET_SITY');
export const getCharacters = createAction('GET_CHARACTERS');
export const getErorr = createAction('GET_ERROR_CITY');

export default createReducer(defaultState, {
  [getArrSity]: (state, action) => {
    state.city.cities = action.payload;
  },
  [getCharacters]: (state, action) => {
    state.city.fersTreeCharacters = action.payload.fersTreeCharacters;
    state.city.country = action.payload.country;
  },
  [getErorr]: (state, action) => {
    state.city.erro = action.payload;
  },
});
