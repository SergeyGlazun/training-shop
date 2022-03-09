import { Link } from 'react-router-dom';
import { useState } from 'react';

import { MAIN_CLOTHES_BLOCK_MENU } from '../../../db/productMenu';

import CardProduct from '../../cardProduct';


import { PRODUCTS } from '../../../db/products';


import './product.scss';

const Products = ({ productType,particularNames,particularsCheck}) => {

  const [particularNamesMain, particularsCheckMain] = useState('isNewArrivals');

  return (
    <div className='product' data-test-id={`clothes-${productType}`}>
      <div className='productContener'>
        <div className='productTipe'>{`${productType}’s`}</div>
        <div className='productMenu'>
          {MAIN_CLOTHES_BLOCK_MENU.map(({ id, name, particularName }) => (
            <div className={"productMenuItem"} key={id} type='button' onClick={() => particularsCheckMain(particularName)} data-test-id={`clothes-${productType}-${particularName}`}>
              <span className={particularNamesMain === particularName ? "ChekItem" : ""}>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <CardProduct 
      arrCards={PRODUCTS[productType].filter((element) => element.particulars[particularNamesMain] === true)} 
      productType={productType} 
      particularsType={particularNamesMain} 
      particularNames={particularNames} 
      particularsCheck={particularsCheck}
      />

      <Link to={`/${productType}`} >
        <button className='productButton' type='button'>
          SEE ALL
        </button>
      </Link>

    </div>
  );
}

export default Products;