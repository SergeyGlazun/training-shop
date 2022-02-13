import { useState } from 'react';
import { Link } from 'react-router-dom';


import { arrCards } from '../../db/cards';

import Raiting from '../../components/reiting/raiting';
import '../../components/reiting/reiting.scss';
import '../../components/main/mainProducts/product.scss';
import ProductHeaderTipe from './ProductHeaderTipe';
import Setings from './setings';
import Filter from './filter';

import square from './img/Square.png'
import './productPage.scss';


// function filterVisible() {
  
//   const [condition, setCondition] = useState(false);
  
// }



const ProductsPage = ({ productType }) =>{
  const [condition, setCondition] = useState(false);

    return(
    
        <div  className='productsPage' data-test-id={`products-page-${productType}`}>
           <ProductHeaderTipe productType={productType} />

      <div className='wrapper'>

        <Setings condition={condition} setCondition={setCondition}/>    
        {condition && <Filter />}


    <div className='cards'>
        {
             arrCards[productType].map(({ name, price, imageSrc, rating, sale, id }) => (
                <Link key={id} to={`/${productType}/${id}`} className='cardsItem' data-test-id={`clothes-card-${productType}`}>
                    {sale && <span className='sale'>{sale}</span>}
                  <img src={imageSrc}  alt='imgUser' className='cardsItemImg'/>
                  <div className='cardsItemName'>{name}</div>
                  <div className='cardsItemPrice'>${price}   <Raiting rating={rating} /></div>
                  </Link>
                
              ))
        }
        
    </div>

    <div className='square'>
      <img src={square} alt="square" />
    </div>


      </div>
        </div>
    );
}

export default ProductsPage;