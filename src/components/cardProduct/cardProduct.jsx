import { Link } from 'react-router-dom';
import Raiting from '../reiting/raiting';
import ColorSize from './Cardeliment/colorSize';

import './cardProduct.scss';

const CardProduct = ({ arrCards, productType ,particularsCheck}) => {
  

    return (
        <div className='cards' onClick={() => particularsCheck(productType)}>
            {
                arrCards.map(({ name, price, images, rating, discount, id,sizes}) => (
                    <Link key={id} to={`/${productType}/${id}`} className='cardsItem' data-test-id={`clothes-card-${productType}`}>
                        {discount && <span className='sale'>{discount}</span>}
                        <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt='imgUser' className='cardsItemImg' />
                        <div className='foterCard'>
                            <div className='PriseReiting'>
                                <div className='cardsItemName'>{name}</div>
                                <div className='cardsItemPrice'> <span>${price}</span>  <Raiting rating={rating} size={14} /></div>
                            </div>

                            <ColorSize dataProductCard={{name, price, images, rating, discount, id,sizes}}/>
                            {/* <Basker /> */}

                        </div>

                    </Link>
                ))
            }
        </div>
    );
}

export default CardProduct;