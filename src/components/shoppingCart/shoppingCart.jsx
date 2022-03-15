import close from './img/close.svg';
import deleteProductImg from './img/delete.svg';
import { useSelector, useDispatch } from "react-redux";
import { increment, decriment,sumAddProductPrise,deleteProductPrise,clicBasket} from '../../reducers';


import './shopping.scss';

function filterSeting(click) {
    let Body = document.body;

    if (click) {
        Body.classList.add('lock');

    } else {
        Body.classList.remove("lock");
    }
}

const ShoppingCart = ({ setCondition, condition, removeProduct }) => {

    filterSeting(condition);

    const dispatch = useDispatch();
    const items = useSelector(state => state.toolkit.arrProduct);
    const prise = useSelector(state => state.toolkit.totapPrise);
  
    return (
        <>
            <div className={condition ? "shopingContener active" : "shopingContener"}>
                <div className="shopingHeader">
                    <h3 className="shopingTitle">Shopping Card</h3>
                    <div onClick={() => { setCondition(false) }} className="close" >
                        <img src={close} alt="close"></img>
                    </div>
                </div>
                <div className='shopingMain'>
                    <div className="shopingNav">
                        <span>Item in cart</span>
                        <span>Delivery Info</span>
                        <span>Payment</span>
                    </div>
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
                                                    <input onClick={() => { dispatch(decriment(item));  dispatch(deleteProductPrise(Math.round(item.prise))) }} type='button' value='-' data-test-id='minus-product' /> :
                                                    <input type='button' value='-' data-test-id='minus-product' />
                                                }
                                                <span>{item.quantity}</span>
                                                <input onClick={() => { dispatch(increment(item)); dispatch(sumAddProductPrise(Math.round(item.prise))) }} type='button' value='+' data-test-id='plus-product' />
                                            </div>
                                            <span className="price">{item.quantity * Math.round(item.prise)}</span>
                                        </div>
                                    </div>
                                    <div className="trash">
                                        <img onClick={() => {dispatch(clicBasket(item.Id));dispatch(deleteProductPrise(Math.round(item.prise * item.quantity))) }} src={deleteProductImg} alt="delete" data-test-id='remove-product' />
                                    </div>
                                </div>
                            )) : <span className="empty_cart">Sorry, your cart is empty</span>}
                    </div>
                </div>
                <div className='shopingFooter'>
                    <div className="shopingPrice">
                        <span className='title'>Total</span>
                        <span className='prise'>{prise}</span>
                    </div>
                    <button className='btnShoping'>Further</button>
                    <button className='btnShoping' onClick={() => { setCondition(false) }}>View cart</button>
                </div>
            </div>
            <div onClick={() => { setCondition(false) }} className={condition ? "overlay" : ""}></div>
        </>
    )
}

export default ShoppingCart;