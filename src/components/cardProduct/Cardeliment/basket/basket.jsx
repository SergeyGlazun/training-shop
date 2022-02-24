import heart from '../../../../pages/productPage/productInformationPage/mainProductItem/img/heart.svg';
import scale from '../../../../pages/productPage/productInformationPage/mainProductItem/img/scale.svg';

import './basket.scss';

const Basker = () => {
    return (
        <div className='pay'>
          <button type='button' className='payBtn'>
            ADD TO CARD
          </button>

          <div className='heard'>
            <img className='heartImg' src={heart} alt='heart' />
          </div>
          <div className='heard'>
            <img src={scale} alt='scale' className='scaleImg' />
          </div>
        </div>
    );
}

export default Basker;