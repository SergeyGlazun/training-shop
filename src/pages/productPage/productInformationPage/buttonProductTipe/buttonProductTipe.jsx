import { Link } from 'react-router-dom';
import { arrCards } from '../../../../db/cards';
import Raiting from '../../../../components/reiting/raiting';


import Prev from '../../../../components/slider/imgButtonLeftRight/next.svg';
import Next from '../../../../components/slider/imgButtonLeftRight/prev.svg';

import './buttonProductTipe.scss';

const ButtonProductTipe = ({productType}) =>{
  
    return(
      <div className='butonContener'>
           <div className='wrapper'>
               <div className='buttonTitle'>
               <div className='productsTitle'>RELATED PRODUCTS</div>
                        <div className='butons'>
                        <img src={Next} alt="Next" />
                           <img src={Prev} alt="Prev" />                       
                        </div>
               </div>
             
                    <div className='productsCards'>
                            {arrCards[productType]
                                .filter((_,index) => index <= 3)
                                .map(({ name, price, imageSrc, rating, sale, id }) => (
                                    <Link key={id} to={`/${productType}/${id}`} className='cardsItem' data-test-id={`clothes-card-${productType}`}>
                                        {sale && <span className='sale'>{sale}</span>}
                                        <img src={imageSrc}  alt='imgUser' className='cardsItemImg'/>
                                        <div className='cardsItemName'>{name}</div>
                                        <div className='cardsItemPrice'>${price}   <Raiting rating={rating} size={14}/></div>
                                    </Link>  
                                ))}
                        
                    </div>   
            </div>
        </div>   
    );
}

export default ButtonProductTipe;