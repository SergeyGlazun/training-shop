import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct} from '../../../reducers/selectedProductType';
import { menu } from '../../../db/menu';

import './menu.scss';

const Menu = () => {
    const dispatch = useDispatch();
    const selectTipe = useSelector(item => item.selectProductTipe.selectTipe); 
    return (
        <div className='menu' data-test-id='menu'>
            {menu.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} className='menuItem' data-test-id={`menu-link-${path}`} onClick={() => dispatch(selectedProduct(path))}>
                    <span className={selectTipe === path ? "ChekItem" : ""}>{name}</span>
                </Link>
            ))}
        </div>
    )
}

export default Menu;