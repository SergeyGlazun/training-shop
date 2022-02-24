import { Link } from 'react-router-dom';
import Raiting from '../reiting/raiting';
import ColorSize from './Cardeliment/colorSize';
import Basker from './Cardeliment/basket';

import './cardProduct.scss';

const CardProduct = ({ arrCards, productType }) => {
    return (
        <div className='cards'>
            {
                arrCards[productType].map(({ name, price, imageSrc, rating, sale, id }) => (
                    <Link key={id} to={`/${productType}/${id}`} className='cardsItem' data-test-id={`clothes-card-${productType}`}>
                        {sale && <span className='sale'>{sale}</span>}
                        <img src={imageSrc} alt='imgUser' className='cardsItemImg' />
                        <div className='foterCard'>
                            <div className='PriseReiting'>
                                <div className='cardsItemName'>{name}</div>
                                <div className='cardsItemPrice'>${price}   <Raiting rating={rating} size={14} /></div>
                            </div>
                            
                                <ColorSize/>
                                <Basker/>
                            
                        </div>

                    </Link>
                ))
            }
        </div>
    );
}

export default CardProduct;