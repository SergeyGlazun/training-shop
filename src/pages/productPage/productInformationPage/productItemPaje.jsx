import { useParams } from 'react-router-dom';

// import { arrCards } from "../../../db/cards";
import {PRODUCTS} from '../../../db/products';

import HeaderProductItem from './hederProductItem';
import {arrReviews} from "../../../db/reviews";
import MainProductItem from './mainProductItem';
import ButtonProductTipe from './buttonProductTipe';

import './productItemPaje.scss';

const ProductItem = ({ productType,particularsCheck}) =>{

    const { id } = useParams();
    const bufId = id;
    const filteredArray=[] ;
    const productItem = PRODUCTS[productType].filter((task) => task.id === bufId );

  
    return(
       <div className='productItem' data-test-id={`product-page-${productType}`} id={`/${productType}/${id}`}>       
          <HeaderProductItem productItem={productItem[0]} productType={productType} arrReviews={arrReviews}  particularsCheck={particularsCheck}/>           
          <MainProductItem productItem={productItem[0]}  filteredArray={filteredArray}/>
          <ButtonProductTipe productType={productType}/>     
       </div>
    );
}

export default ProductItem;