import {
    createAction,
    createReducer
  } from "@reduxjs/toolkit";

export const postReview = createAction('POSTREVIEW');
export const loadingActionReview = createAction('LOADINGREVIEW');
export const responseReview = createAction('REAPONSEREVIEW');
export const closeForm = createAction('CLOSEFORM');

const initialState ={   
        data: {
                id: "",
                name: "",
                text: "",
                rating: 1
                },
        responce:null,
        error:false,
        loading:false,
        closeForm:false
}

export default createReducer(initialState, {
    [postReview]: (state,action) => {
        state.data.id=action.payload.id;
        state.data.name=action.payload.name;
        state.data.text=action.payload.review;
        state.data.rating=action.payload.stars;    
        state.error=false;    
    },
    [responseReview]: (state,action) => {
        state.responce=action.payload; 
        state.error=true; 
    },
    [loadingActionReview]: (state,action) => {
        state.loading=action.payload; 
    },
    [closeForm]: (state,action) => {
        state.closeForm=action.payload; 
        // state.error=false; 
    },
})