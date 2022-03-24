import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { Loader } from '../../loader/loader';
import { MAIN_CLOTHES_BLOCK_MENU } from '../../../db/productMenu';
import CardProduct from '../../cardProduct';
import { selectedProduct } from '../../../reducers/selectedProductType';

import './product.scss';

const Products = ({ productType}) => {
  const dispatch = useDispatch();
  const [particularNamesMain, particularsCheckMain] = useState('isNewArrivals');
  const loading = useSelector(state => state.app.loading);
  const PRODUCTS = useSelector(state => state.getproduct.productsArr);
  if (loading) {
      return <Loader />
  }

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
      />

      <Link to={`/${productType}`} >
        <button className='productButton' type='button' onClick={() => dispatch(selectedProduct(productType))}>       
          SEE ALL
        </button>
      </Link>

    </div>
  );
}

export default Products;