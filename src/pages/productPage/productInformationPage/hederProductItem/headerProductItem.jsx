import { Link } from 'react-router-dom';
import share from '../../ProductHeaderTipe/img/share.svg';
import Raiting from '../../../../components/reiting/raiting';



import './headerProductItem.scss';
const HeaderProductItem = ({productItem,productType,particularsCheck}) =>{
    return(
        <div className='headerProductItem'>
              <div className='contenerHeaderProductItem wrapper'>
                    <div className='headerNavigation'>
                        <div className='back'>
                        <Link to='/' className='home'>
                            <span className='home' onClick={() => particularsCheck('')}>Home</span>
                        </Link>
                            <span className='arr'>►</span>
                        <Link to={`/${productType}`} className='product-back'>
                            {productType}
                        </Link>
                        <span className='arr'>►</span>
                        <span className='product'>{productItem.name}</span>
                        </div>
                        <div className='share'>
            <img src={share} alt='share' className='shareImg' />
            Share
          </div>
                    </div>
                    <div className='titleheaderProduct'>{productItem.name}</div>
                    <div className='fidbeckHeaderProduct'>
                        <div className='reviews'>
                            <Raiting rating={productItem.rating} size={14}/>
                            <div className='reviewsCount'>
                            {productItem.reviews.length} Reviews
                            </div>
                        </div>
                        <div className='count'>
                            <span className='sku'>
                            SKU: <span className='bold'>777</span>
                            </span>
                            <span className='availability'>
                            Availability: <span className='bold'>In Stock</span>
                            </span>
                        </div>
                    </div>
              </div>
        </div>
    );
}

export default HeaderProductItem;