import { arrFilter } from '../../../db/filter';
import FilterItem from './filterItem';

import './filter.scss';

const Filter = () => {
  return (
    <div className='filterSetings'>

      <div className='color'>
        <div className='title'>COLOR</div>
        <div className='filters'>
          {arrFilter.color.map(({ id, color }) => (
            <FilterItem key={id} id={id} text={color} type='color' />
          ))}
        </div>
      </div>

      <div className='size'>
        <div className='title'>SIZE</div>
        <div className='filters'>
          {arrFilter.size.map(({ id, size }) => (
            <FilterItem key={id} id={id} text={size} type='size' />
          ))}
        </div>
      </div>

         <div className='brand'>
        <div className='title'>BRAND</div>
        <div className='filters'>
          {arrFilter.brand.map(({ id, brand }) => (
            <FilterItem key={id} id={id} text={brand} type='brand' />
          ))}
        </div>
      </div>

      <div className='price'>
        <div className='title'>PRICE</div>
        <div className='filters'>
          {arrFilter.prise.map(({ id, price }) => (
            <FilterItem key={id} id={id} text={price} type='price' />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Filter;