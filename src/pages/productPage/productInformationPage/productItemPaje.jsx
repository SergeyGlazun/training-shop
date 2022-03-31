import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Loader } from '../../../components/loader/loader';
import HeaderProductItem from './hederProductItem';
import MainProductItem from './mainProductItem';
import ButtonProductTipe from './buttonProductTipe';

import './productItemPaje.scss';

const ProductItem = ({productType}) =>{
   const PRODUCTS = useSelector(state => state.getproduct.productsArr);

    const { id } = useParams();

    const loading = useSelector(state => state.app.loading);  
       if (loading) {
          return <Loader />
      }  

    const bufId = id;
    const filteredArray=[] ;
    const productItem = PRODUCTS[productType].filter((task) => task.id === bufId );

  
    return(
       <div className='productItem' data-test-id={`product-page-${productType}`} id={`/${productType}/${id}`}>       
          <HeaderProductItem productItem={productItem[0]} productType={productType}/>           
          <MainProductItem productItem={productItem[0]}  filteredArray={filteredArray}/>
          <ButtonProductTipe productType={productType}/>     
       </div>
    );
}

export default ProductItem;