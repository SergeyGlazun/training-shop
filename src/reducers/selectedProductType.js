import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";

const initialState = {
    selectTipe: ""
}

export const selectedProduct = createAction('SELECTEDRODUCT')

export default createReducer(initialState, {
    [selectedProduct]: (state,action) => {
        state.selectTipe = action.payload; 
    },
})