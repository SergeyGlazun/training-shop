import { Link } from 'react-router-dom';
import ColorSize from '../cardProduct/Cardeliment/colorSize';
import Raiting from '../reiting/raiting';
import './cardItem.scss';

const CardsItem = ({ name, price, images, rating, id, sizes, discount ,productType}) =>{
    return (
        <div className='cardsItem' > 
                                    <Link to={`/${productType}/${id}`} data-test-id={`clothes-card-${productType}`}>
                                        {discount && <span className='sale'>{discount}</span>}
                                        <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt='imgUser' className='cardsItemImg' />
                                    </Link>
                                    <div className='foterCard'>
                                        <div className='PriseReiting'>
                                            <div className='cardsItemName'>{name}</div>
                                            <div className='cardsItemPrice'><span>${price}<span className="priceDiscount">{discount !== null ? `$ ${(price + Math.abs((((+discount.replace(/%/g, ''))) / 100) * price)).toFixed(1)}` : ""}</span></span>  <Raiting rating={rating} size={14} /></div>
                                        </div>
                                        <ColorSize dataProductCard={{ name, price, images, rating, id, sizes }} />
                                    </div>
                                </div>
    );
}
export default CardsItem;