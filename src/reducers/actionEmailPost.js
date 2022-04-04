// import {
//     createAction,
//     createReducer
//   } from "@reduxjs/toolkit";

// export const validationChek = createAction('VAKIDATIONCHEK');
// export const userEmailAction = createAction('USEREMAIL');
// export const responseAction = createAction('REAPONSE');
// export const loadingAction = createAction('LOADING');

// const initialState ={   
//     disable:"",
//     userEmail:"",
//     responce:null,
//     loading:false
// }

// export default createReducer(initialState, {
//     [validationChek]: (state,action) => {
//         state.disable=action.payload; 
//     },
//     [userEmailAction]: (state,action) => {
//         state.userEmail=action.payload; 
//     },
//     [responseAction]: (state,action) => {
//         state.responce=action.payload; 
//     },
//     [loadingAction]: (state,action) => {
//         state.loading=action.payload; 
//     },
// })

import {
    createAction,
    createReducer
  } from "@reduxjs/toolkit";

export const validationChek = createAction('VAKIDATIONCHEK');
export const userEmailAction = createAction('USEREMAIL');
export const responseAction = createAction('REAPONSE');
export const loadingAction = createAction('LOADINGMAIL');
export const numberFormAction = createAction('NUMBERFORM');
export const userEmailValueAction = createAction('USEREMAILVALUE');
export const errorAction = createAction('ERROREMAIL');

const initialState ={   
    disable:"",
    userEmail:"",
    responce:'OK',
    loading:false,
    numberFor:"",
    userEmailValue:"",
    errorEmail:false
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
    [numberFormAction]: (state,action) => {        
        state.numberFor=action.payload; 
    },
    [userEmailValueAction]: (state,action) => {        
        state.userEmailValue=action.payload; 
    },
    [errorAction]: (state,action) => {        
        state.errorEmail=action.payload; 
    },
})