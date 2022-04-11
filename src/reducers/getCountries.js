import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";

const defaultState = {
   
    countries: {
        countriesArr:[],
        citiArr:[],
    },

}

export const countriesArrAction = createAction('GETCOUNTRIES');
export const citiArrAction = createAction('GETCITTI');
export const countriesLocalstorageAction = createAction('GETCOUNTRIESLOCALSTORIGE');

export default createReducer(defaultState, {
    [countriesArrAction]: (state, action) => {        
        state.countriesArr = action.payload;      
    },
    [citiArrAction]: (state, action) => {        
        state.citiArrAction = action.payload;      
    },
    [countriesLocalstorageAction]: (state) => {  
          
    },
})
