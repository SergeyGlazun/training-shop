import { ArrHeaderPanelIcon } from "../../../db/headerPanelIcon";
import { useState } from 'react';
import Bag from '../../../Img/header/headerPanelIconImg/bag.svg';
import ShoppingCart from '../../shoppingCart/index';
import { useSelector } from 'react-redux';


import './headerPanelIcon.scss';

const HeaderPanelIcon = () => {
  const [condition, setCondition] = useState(false);
  const items = useSelector(state => state.toolkit.arrProduct)
  return (
    <div className='headerPanelIcon'>
      {ArrHeaderPanelIcon.map(({ id, imageSrc, href }) => (
        <a href={href} className='headerPanelIconItem' key={id}>
          <img src={imageSrc} alt='imgUser' className='headerPanelIconItemImg' />
        </a>
      ))}

      <span className='headerPanelIconItem' onClick={() =>{setCondition(condition ? false : true)}} data-test-id='cart-button'>
        <img src={Bag} alt='' className='headerPanelIconItemImg' />
        <span className="numberGoods">{items.length}</span>
      </span>
      <ShoppingCart condition={condition} setCondition={setCondition} />
    </div>
  )
}

export default HeaderPanelIcon;