import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../../../reducers/selectedProductType';
import share from './img/share.svg';
import './ProductHeaderTipe.scss';

const ProductHeaderTipe = ({ productType }) =>{
  const dispatch = useDispatch();
    return(
        <div className='productHeader'>
        <div className='headerShare wrapper'>
          <div className='back'>
            <Link to='/' className='home'>
              <span className='home' onClick={() => dispatch(selectedProduct(""))}>Home</span>
            </Link>
            ►<span className='way'>{productType}</span>
          </div>
          <div className='share'>
            <img src={share} alt='share' className='shareImg' />
            Share
          </div>
        </div>
        <div className='headerTitle wrapper'>
          <span className='title'>{productType}</span>
        </div>
      </div>
    );
}

export default ProductHeaderTipe;