import { useDispatch } from 'react-redux';
import CardsItem from '../cardItem/cardItem';
import { selectedProduct } from '../../reducers/selectedProductType';
import './cardProduct.scss';

const CardProduct = ({ arrCards, productType }) => {
    const dispatch = useDispatch();
    return (      
        <div className='cards' onClick={() => dispatch(selectedProduct(productType))}>
            {
                arrCards.map(({ name, price, images, rating, discount, id, sizes }) => (                
                   <CardsItem 
                   key={id} 
                   name={name}
                   price={price}
                   images={images}
                   rating={rating}
                   discount={discount}
                   id={id}
                   sizes={sizes}
                   productType={productType}
                   />
                ))
            }
        </div>
    );
}

export default CardProduct;