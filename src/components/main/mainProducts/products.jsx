import { Link } from 'react-router-dom';

import { arrProductsMenu } from '../../../db/productMenu';
import { arrCards } from '../../../db/cards';

import CardProduct from '../../cardProduct';

import './product.scss';

const Products = ({ productType }) =>{
    return(
      <div className='product' data-test-id={`clothes-${productType}`}>
       <div   className='productContener'>
       <div className='productTipe'>{`${productType}’s`}</div>
          <div className='productMenu'>
                {arrProductsMenu.map(({ id, name }) => (
                <div className='productMenuItem' key={id}>
                    {name}
                </div>
                ))}
          </div>
       </div>

<CardProduct arrCards={arrCards} productType={productType}/>

    <Link  to={`/${productType}`} >
      <button className='productButton' type='button'>
        SEE ALL
      </button>
    </Link>

      </div>
    );
}

export default Products;