import {
    createAction,
    createReducer
  } from "@reduxjs/toolkit";

export const hideLoader = createAction('HIDE_LOADER')
export const showLoader = createAction('SHOW_LOADER')
export const showAlert = createAction('SHOW_ALERT')
export const hideAlert = createAction('HIDE_ALERT')

const initialState ={
    loading:false,
    alert:false
}

export default createReducer(initialState, {
    [hideLoader]: (state) => {
        state.loading=false
    },
    [showLoader]: (state) => { 
        state.loading=true
    },
    [showAlert]: (state) => {
        state.alert=true
    },
    [hideAlert]: (state) => {
        state.alert=false
    },
})

