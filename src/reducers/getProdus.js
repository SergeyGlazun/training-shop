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

}

export const getArr = createAction('GETPRODUCT');

export default createReducer(defaultState, {
    [getArr]: (state, action) => {
        state.productsArr = action.payload;          
    },
})

