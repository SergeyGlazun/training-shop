import { Link } from 'react-router-dom';

import { arrProductsMenu } from '../../../db/productMenu';
import { arrCards } from '../../../db/cards';
import Raiting from '../../reiting/raiting';
import './product.scss';

const Products = ({ productType }) =>{
    return(
      <div className='product' data-test-id={`clothes-${productType}`}>
       <div  className='productContener'>
       <div className='productTipe'>{`${productType}’s`}</div>
          <div className='productMenu'>
                {arrProductsMenu.map(({ id, name }) => (
                <div className='productMenuItem' key={id}>
                    {name}
                </div>
                ))}
          </div>
       </div>

       <div className='cards'>

    
{
     arrCards[productType].map(({ name, price, imageSrc, rating, sale, id }) => (
        <Link to={`/${productType}/${id}`} className='cardsItem' data-test-id={`clothes-card-${productType}`}>
            {sale && <span className='sale'>{sale}</span>}
          <img src={imageSrc}  alt='imgUser' className='cardsItemImg'/>
          <div className='cardsItemName'>{name}</div>
          <div className='cardsItemPrice'>${price}   <Raiting rating={rating} /></div>
          </Link>
        
      ))
}

    </div>

    <Link to={`/${productType}`} >
      <button className='productButton' type='button'>
        SEE ALL
      </button>
    </Link>

      </div>
    );
}

export default Products;