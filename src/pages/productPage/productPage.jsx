import { useState } from 'react';
import { arrCards } from '../../db/cards';

import '../../components/reiting/reiting.scss';
import '../../components/main/mainProducts/product.scss';
import ProductHeaderTipe from './ProductHeaderTipe';
import Setings from './setings';
import Filter from './filter';
import CardProduct from '../../components/cardProduct';

import square from './img/Square.png'
import './productPage.scss';



const ProductsPage = ({ productType }) =>{
  const [condition, setCondition] = useState(false);

    return(
    
        <div  className='productsPage' data-test-id={`products-page-${productType}`}>
           <ProductHeaderTipe productType={productType} />

      <div className='wrapper'>

        <Setings condition={condition} setCondition={setCondition}/>    
        {condition && <Filter />}

    <CardProduct arrCards={arrCards} productType={productType}/>

    <div className='square'>
      <img src={square} alt="square" />
    </div>


      </div>
        </div>
    );
}

export default ProductsPage;