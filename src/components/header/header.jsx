import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { selectedProduct } from '../../reducers/selectedProductType';
import Contacts from "./contacts";
import NetworkContact from '../networkContact';
import logo from '../../Img/header/logoImg/logo.svg';
import Menu from "./menu";
import HeaderPanelIcon from "./headerPanelIcon";
import BurgerMenu from './burgerMenu';
import BurgerItem from './burgerMenu/burgerItem';

import './header.scss';

const Header = () => {
  const [condition, setCondition] = useState(false);
  const dispatch = useDispatch();

  function closeBurger(condition) {
    if (condition)
      setCondition(false);
  }
  
  return (
    <div className="header" data-test-id='header' onClick={() =>closeBurger(condition)}>
      <div className="headerContacts" >
        <div className="wrapper" >
          <Contacts />
          <NetworkContact />
        </div>
      </div>

      <div className='navigation'  >
        <div className='wrapper'>

          <Link to='/' data-test-id='header-logo-link'>
            <img src={logo} alt='Logo' className='navigationLogo' onClick={() => dispatch(selectedProduct(""))} />
          </Link>

          <Menu />
          <HeaderPanelIcon/>
          <BurgerMenu condition={condition} setCondition={setCondition} />
          <BurgerItem condition={condition} setCondition={setCondition} />
        </div>
      </div>

    </div>
  );
}

export default Header;