import { Link } from 'react-router-dom';
import { useState } from 'react';

import { MAIN_CLOTHES_BLOCK_MENU } from '../../../db/productMenu';

import CardProduct from '../../cardProduct';


import { PRODUCTS } from '../../../db/products';


import './product.scss';

const Products = ({ productType }) => {

  const [particularNames, particularsCheck] = useState('isNewArrivals');


  return (
    <div className='product' data-test-id={`clothes-${productType}`}>
      <div className='productContener'>
        <div className='productTipe'>{`${productType}’s`}</div>
        <div className='productMenu'>
          {MAIN_CLOTHES_BLOCK_MENU.map(({ id, name, particularName }) => (
            <div className='productMenuItem' key={id} type='button' onClick={() => particularsCheck(particularName)} data-test-id={`clothes-${productType}-${particularName}`}>
              {name}
            </div>
          ))}
        </div>
      </div>

      <CardProduct arrCards={PRODUCTS[productType].filter((element) =>element.particulars[particularNames] === true  )} productType={productType} particularsType={particularNames} />

      <Link to={`/${productType}`} >
        <button className='productButton' type='button'>
          SEE ALL
        </button>
      </Link>

    </div>
  );
}

export default Products;