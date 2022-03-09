import { Link } from 'react-router-dom';
import Raiting from '../reiting/raiting';
import ColorSize from './Cardeliment/colorSize';
import Basker from './Cardeliment/basket';
// import { PRODUCTS } from '../../db/products';
import './cardProduct.scss';

const CardProduct = ({ arrCards, productType ,particularsCheck}) => {

    // console.log(arrCards);
    // console.log(countSetings +"кол");
    // if(arrCards.length === 0 && countSetings === 0){
    //     arrCards=PRODUCTS[productType]

       
    // }

    return (
        <div className='cards' onClick={() => particularsCheck(productType)}>
            {
                arrCards.map(({ name, price, images, rating, discount, id }) => (
                    <Link key={id} to={`/${productType}/${id}`} className='cardsItem' data-test-id={`clothes-card-${productType}`}>
                        {discount && <span className='sale'>{discount}</span>}
                        <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt='imgUser' className='cardsItemImg' />
                        <div className='foterCard'>
                            <div className='PriseReiting'>
                                <div className='cardsItemName'>{name}</div>
                                <div className='cardsItemPrice'> <span>${price}</span>  <Raiting rating={rating} size={14} /></div>
                            </div>

                            <ColorSize />
                            <Basker />

                        </div>

                    </Link>
                ))
            }
        </div>
    );
}

export default CardProduct;