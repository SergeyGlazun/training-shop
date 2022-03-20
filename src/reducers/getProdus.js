import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";


const defaultState = {
  
    products: {
        productsArr:[],
        men: [],
        women: [],
      
    },
    isLoading: false, // для отслеживания хода запроса
    isError: false, // для отслеживания ошибки запроса
}

export const getArr = createAction('GETPRODUCT');

export default createReducer(defaultState, {
    [getArr]: (state, action) => {
        state.productsArr = action.payload;     
      
    },
})

