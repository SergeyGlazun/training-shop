import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Loader } from '../../../components/loader/loader';
import HeaderProductItem from './hederProductItem';
import MainProductItem from './mainProductItem';
import ButtonProductTipe from './buttonProductTipe';
import { locScroll } from '../../../components/function/locScroll';
import './productItemPaje.scss';

import React from 'react';
import { useDispatch } from "react-redux";
import { getIDProductIDObject } from '../../../reducers/actionGetProductId';
const ProductItem = ({ productType }) => {
   const { id } = useParams();
   const filteredArray = [];
   const PRODUCTS = useSelector(state => state.getproduct.productsArr);
   let productItem = null;

   const dispatch = useDispatch();
   const PRODUCTS1 = useSelector(state => state.getIDProduct.getProductIDODJECT);
   const bufId = id;
   const loading = useSelector(state => state.app.loading);
   let countRevies=0;

   if(PRODUCTS1 === undefined){    
      countRevies=0;
   }else
   if(PRODUCTS1.id!==id){  
      dispatch(getIDProductIDObject(undefined))   
   }
   else
   {
      countRevies=PRODUCTS1.reviews.length;
   }

   if (loading) {
      return <Loader />
   } else{
      if(PRODUCTS1 === undefined) {
         productItem = PRODUCTS[productType].filter((task) => task.id === bufId);
         productItem = productItem[0];
      }
    else{
      productItem = PRODUCTS[productType].filter((task) => task.id === bufId);
      if (productItem[0].reviews.length >= countRevies) {        
         productItem = productItem[0];
      }else{
         productItem = PRODUCTS1;
         locScroll(false);
      }
    }
        
   }

   return (
      <div className='productItem' data-test-id={`product-page-${productType}`} id={`/${productType}/${id}`}>
         <HeaderProductItem productItem={productItem} productType={productType} />
         <MainProductItem productItem={productItem} filteredArray={filteredArray} />
         <ButtonProductTipe productType={productType} />
      </div>
   );
}

export default ProductItem;