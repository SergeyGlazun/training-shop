import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";


const defaultState = {
  
    products: {
        getProductID:"",
        getProductIDODJECT:{},
        loading:false
    },

}

export const getIDProductID = createAction('GETPRODUCTID');
export const getIDProductIDObject = createAction('GETPRODUCTIDOBJECT');
export const loadingIDProduct = createAction('LOADINGIDPRODUCT');

export default createReducer(defaultState, {
    [getIDProductID]: (state, action) => {   
        state.getProductId = action.payload;           
    },
    [getIDProductIDObject]: (state, action) => {          
        state.getProductIDODJECT = action.payload;     
    },
    [loadingIDProduct]: (state, action) => {
        state.loading = action.payload;           
    },
})
