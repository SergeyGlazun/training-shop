import deleteProductImg from './../img/delete.svg';
import { useSelector, useDispatch } from "react-redux";
import { increment, decriment, sumAddProductPrise, deleteProductPrise, clicBasket } from '../../../reducers//actionBasket';

import './itemInCart.scss';


const ItemInCart = () =>{

    const dispatch = useDispatch();
    const items = useSelector(state => state.toolkit.arrProduct);

    return(
        <div className='shopingMain'>
                    <div className="items">

                        {(items.length > 0) ?
                            items.map((item, id) => (
                                <div key={id} className="item" data-test-id='cart-card'>
                                    <img width={85} src={`https://training.cleverland.by/shop${item.img}`} alt=''></img>
                                    <div className="cart">

                                        <div className="cartTop">
                                            <h4 className="title">{item.name}</h4>
                                            <span className="color">{item.colors}</span>,
                                            <span className="size">{item.size}</span>
                                        </div>
                                        <div className="cartBot">
                                            <div className="counter">
                                                {item.quantity > 1 ?
                                                    <input onClick={() => { dispatch(decriment(item)); dispatch(deleteProductPrise(item.prise)) }} type='button' value='-' data-test-id='minus-product' /> :
                                                    <input type='button' value='-' data-test-id='minus-product' />
                                                }
                                                <span>{item.quantity}</span>
                                                <input onClick={() => { dispatch(increment(item)); dispatch(sumAddProductPrise(item.prise)) }} type='button' value='+' data-test-id='plus-product' />
                                            </div>
                                            <span className="price"> {(item.quantity * item.prise).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="trash">
                                        <img onClick={() => { dispatch(clicBasket(item.Id)); dispatch(deleteProductPrise((item.prise * item.quantity))) }} src={deleteProductImg} alt="delete" data-test-id='remove-product' />
                                    </div>
                                </div>
                            )) : <span className="noneCart">Sorry, your cart is empty</span>}
                    </div>
                </div>

    );
}

export default ItemInCart;