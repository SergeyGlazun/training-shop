import { Link } from 'react-router-dom';
import {menu} from '../../../db/menu';

import './menu.scss';

const Menu = () =>{
    return(
        <div className='menu' data-test-id='menu'>

           {menu.map(({ id, path, name }) => (
        <Link key={id} to={`/${path}`} className='menuItem' data-test-id={`menu-link-${path}`}>
            <span>{name}</span>
        </Link>
    ))}

        </div>
    )
}

export default Menu;