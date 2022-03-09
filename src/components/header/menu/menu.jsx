import { Link } from 'react-router-dom';
import { menu } from '../../../db/menu';

import './menu.scss';

const Menu = ({particularNames,particularsCheck}) => {

    return (
        <div className='menu' data-test-id='menu'>
            {menu.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} className='menuItem' data-test-id={`menu-link-${path}`} onClick={() => particularsCheck(path)}>
                    <span className={particularNames === path ? "ChekItem" : ""}>{name}</span>
                </Link>
            ))}

        </div>
    )
}

export default Menu;