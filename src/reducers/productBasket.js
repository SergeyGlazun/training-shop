import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";

const defaultState = {

    dataBuy: {
        product: [],
        deliveryMethod: "",
        paymentMethod: "", 
        totalPrice: "",
        phone: "",
        email: "",
        country: "",
        cashEmail: "",
        city: "",
        street: "",
        house: "",
        apartment: "",
        postcode: "",
        storeAddress: "",
        card: "", 
        cardDate: "", 
        cardCVV: "" 
    },
    loading:false,
    responsBasket:""

}

export const postProductBasketActionProduct = createAction('POSTPRODUCTBASKETACTION_PRODUCT');
export const postCastumerPhone = createAction('POSTCASTUMER_PHONE');
export const postCastumerEmail = createAction('POSTCASTUM_EMAIL');
export const postCastumerCity = createAction('POSTCASTUM_CITY');
export const postCastumerStreet = createAction('POSTCASTUM_STREET');
export const postCastumerHouse = createAction('POSTCASTUM_HOUSE');
export const postCastumerApartment = createAction('POSTCASTUMAP_APARTMENT');
export const postCastumerPostcod = createAction('POSTCASTUMAP_POSTCOD');
export const postCastumerTotalPrise = createAction('POSTCASTUMAP_TOTALPRISE');
export const postCastumerCountry = createAction('POSTCASTUMAP_COUNTRY');
export const postCastumerStoryAdress = createAction('POSTCASTUMAP_STORYADRESS');

export const postCastumerStoryCashEmaik = createAction('POSTCASTUMAP_CASHEMAIL');
export const postCastumerStoryCard = createAction('POSTCASTUMAP_CARD');
export const postCastumerCardDate = createAction('POSTCASTUMAP_CARDDATA');
export const postCastumerCardCVV = createAction('POSTCASTUMAP_CARDDCW');

export const postCastumerDeliveryMethod = createAction('POSTCASTUMAP_DELIVERYMETHOD');
export const postCastumerPaymentMethod = createAction('POSTCASTUMAP_PAYMENTMETOD');

export const  getObjectBasket = createAction('GETPROJECTBASKET'); 

export const  lodingPostBasket = createAction('LOADINGPOSTSAGA');
export const  responsBasketAction = createAction('RESPONSBASKETACTION');

export default createReducer(defaultState, {
    [postProductBasketActionProduct]: (state, action) => {
        state.dataBuy.product = action.payload;
    },
    [postCastumerTotalPrise]: (state, action) => {
        state.dataBuy.totalPrice = action.payload;
    },
    [postCastumerPhone]: (state, action) => {
        state.dataBuy.phone = action.payload;
    },
    [postCastumerEmail]: (state, action) => {
        state.dataBuy.email = action.payload;
    },
    [postCastumerCountry]: (state, action) => {
        state.dataBuy.country = action.payload;
    },
    [postCastumerCity]: (state, action) => {
        state.dataBuy.city = action.payload;
    },
    [postCastumerStreet]: (state, action) => {
        state.dataBuy.street = action.payload;
    },
    [postCastumerHouse]: (state, action) => {
        state.dataBuy.house = action.payload;
    },
    [postCastumerApartment]: (state, action) => {
        state.dataBuy.apartment = action.payload;
    },
    [postCastumerPostcod]: (state, action) => {
        state.dataBuy.postcode = action.payload;
    },
    [postCastumerStoryAdress]: (state, action) => {
        state.dataBuy.storeAddress = action.payload;
    },

    [postCastumerStoryCashEmaik]: (state, action) => {
        state.dataBuy.cashEmail = action.payload;
    },
    [postCastumerStoryCard]: (state, action) => {
        state.dataBuy.card = action.payload;
    },
    [postCastumerCardDate]: (state, action) => {
        state.dataBuy.cardDate = action.payload;
    },
    [postCastumerCardCVV]: (state, action) => {
        state.dataBuy.cardCVV = action.payload;
    },

    [postCastumerDeliveryMethod]: (state, action) => {
        state.dataBuy.deliveryMethod = action.payload;
    },
    [postCastumerPaymentMethod]: (state, action) => {
        state.dataBuy.paymentMethod = action.payload;
    },

    [getObjectBasket]: () => {     
    },

    [lodingPostBasket]: (state, action) => {  
        state.loading = action.payload;   
    },

    [responsBasketAction]: (state, action) => {  
        state.responsBasket = action.payload;   
    },
 
})