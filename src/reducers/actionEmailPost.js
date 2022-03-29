import {
    createAction,
    createReducer
  } from "@reduxjs/toolkit";

export const validationChek = createAction('VAKIDATIONCHEK');
export const userEmailAction = createAction('USEREMAIL');
export const responseAction = createAction('REAPONSE');
export const loadingAction = createAction('LOADING');

const initialState ={   
    disable:true,
    userEmail:"",
    responce:null,
    loading:false
}

export default createReducer(initialState, {
    [validationChek]: (state,action) => {
        state.disable=action.payload; 
    },
    [userEmailAction]: (state,action) => {
        state.userEmail=action.payload; 
    },
    [responseAction]: (state,action) => {
        state.responce=action.payload; 
    },
    [loadingAction]: (state,action) => {
        state.loading=action.payload; 
    },
})