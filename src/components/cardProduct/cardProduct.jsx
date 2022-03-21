import CardsItem from '../cardItem/cardItem';
import './cardProduct.scss';

const CardProduct = ({ arrCards, productType, particularsCheck }) => {
    return (
        <div className='cards' onClick={() => particularsCheck(productType)}>
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