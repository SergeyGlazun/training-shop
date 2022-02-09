import { Link } from 'react-router-dom';
import Contacts from "./contacts";
import NetworkContact from '../networkContact';
import logo from '../../Img/header/logoImg/logo.svg';
import Menu from "./menu";
import HeaderPanelIcon from "./headerPanelIcon";


import './header.scss';

 const Header = () => {
    return( 
     <div className="header" data-test-id='header'>
      <div className="headerContacts">
        <div className="wrapper">
        <Contacts />
         <NetworkContact />
        </div>
      </div>

      <div className='navigation'>
        <div className='wrapper'>

        <Link to='/'  data-test-id='header-logo-link'>
          <img src={logo} alt='Logo' className='navigationLogo'/>
        </Link>

       <Menu/>
       <HeaderPanelIcon/>
        </div>
      </div>

     </div>
     );
 }

export default Header;