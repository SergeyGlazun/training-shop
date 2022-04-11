import {
  createAction,
  createReducer
} from "@reduxjs/toolkit";

const initialState = {
  totapPrise: 0,
  arrProduct: []
}

export const increment = createAction('INCRIMENTO')
export const decriment = createAction('DECRIMENTO')
export const addProduct = createAction('ADD')
export const removeProduct = createAction('REMOVE')
export const sumAddProductPrise = createAction('ADDPRODUCTPRISE')
export const deleteProductPrise = createAction('DELETEPRODUCTPRISE')
export const clicBasket = createAction('CLIKBASKET')
export const clear = createAction('CLEAR')

export default createReducer(initialState, {
  [increment]: (state, action) => {
    state.arrProduct.map(item =>
      (item.Id === action.payload.Id) ?
      (item.quantity += 1) :
      item.quantity
    );
  },
  [decriment]: (state, action) => {
    state.arrProduct.map(item =>
      (item.Id === action.payload.Id) ?
      (item.quantity -= 1) :
      item.quantity
    );
  },
  [addProduct]: (state, action) => {
    state.arrProduct.push({
      ...action.payload
    })
  },
  [removeProduct]: (state, action) => {
    state.arrProduct = state.arrProduct.filter((item) => item.Id !== action.payload.Id)
  },
  [sumAddProductPrise]: (state, action) => {
    state.totapPrise += action.payload
  },
  [deleteProductPrise]: (state, action) => {
    state.totapPrise -= action.payload
  },
  [clicBasket]: (state, action) => {
    state.arrProduct = state.arrProduct.filter((item) => item.Id !== action.payload)
  },
  [clear]: (state) => {
    state.arrProduct = [];
  },
})
