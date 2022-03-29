import close from './img/close.svg';
import { useSelector } from "react-redux";
import ItemInCart from './ItemInCard';
import DeliveryInfo from './deliveryInfo/deliveryInfo';
import { useState } from 'react';
import Payment from './payment';
import { locScroll } from '../function/locScroll';
import './shopping.scss';

const ShoppingCart = ({ setCondition, condition }) => {

    locScroll(condition);
    const items = useSelector(state => state.toolkit.arrProduct);
    const prise = useSelector(state => state.toolkit.totapPrise);
    let [makingPurchase, setMakingPurchase] = useState('Item in cart');
    return (
        <>
            <div className={condition ? "shopingContener active" : "shopingContener"} data-test-id='cart'>
                <div className="shopingHeader">
                    <h3 className="shopingTitle">Shopping Card</h3>
                    <div onClick={() => { setCondition(false) }} className="close" >
                        <img src={close} alt="close"></img>
                    </div>
                </div>
                {
                    (items.length > 0) ?
                        <div className='makingPurchase'>
                            <div className="shopingNav">
                                <span className={makingPurchase === 'Item in cart' ? 'ItemInCart' : ""} onClick={() => { setMakingPurchase('Item in cart') }}>Item in cart</span>
                                <span className={makingPurchase === 'Delivery Info' ? 'ItemInCart' : ""} onClick={() => { setMakingPurchase('Delivery Info') }}>Delivery Info</span>
                                <span className={makingPurchase === 'Payment' ? 'ItemInCart' : ""} onClick={() => { setMakingPurchase('Payment') }}>Payment</span>
                            </div>
                        </div>
                        :
                        <div></div>
                }
                {makingPurchase === 'Item in cart' ? <ItemInCart /> : makingPurchase === 'Delivery Info' ? <DeliveryInfo /> : <Payment />}


                {(items.length > 0) ?
                    <div className='shopingFooter'>
                        <div className="shopingPrice">
                            <span className='title'>Total</span>
                            <span className='prise'>{prise.toFixed(2)}</span>
                        </div>
                        <button className='btnShoping'>Further</button>
                        <button className='btnShoping' onClick={() => { setCondition(false) }}>View cart</button>
                    </div>
                    :
                    <div className='shopingFooter'>
                        <button className='btnShopingBack' onClick={() => { setCondition(false) }}>BACK TO SHOPPING</button>
                    </div>
                }

            </div>

            <div onClick={() => { setCondition(false); locScroll(false) }} className={condition ? "overlay" : ""}></div>

        </>
    )
}

export default ShoppingCart;