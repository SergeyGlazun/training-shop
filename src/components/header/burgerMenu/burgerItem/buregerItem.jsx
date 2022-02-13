import { Link } from 'react-router-dom';
import { menu } from '../../../../db/menu';

import './burgerItem.scss';

const BurgerItem = ({ condition, setCondition }) => {

    return (
        <div className={condition ? "burgerItem active" : "burgerItem"} onClick={() => (setCondition(false))}>
            {menu.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} className='burgerMenu' >
                    <span>{name}</span>
                </Link>
            ))}
        </div>
    );
}

export default BurgerItem;