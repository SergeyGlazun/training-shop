import close from './img/close.svg';
import { useSelector,useDispatch } from "react-redux";
import ItemInCart from './ItemInCard';
import DeliveryInfo from './deliveryInfo/deliveryInfo';
import { useState } from 'react';
import Payment from './payment';
import { locScroll } from '../function/locScroll';
import ClearBasket from '../function/clearBasket';
import AnswerBasket from './ansverBasket/answerBasket';
import { countriesLocalstorageAction } from '../../reducers/getCountries';
import './shopping.scss';

const ShoppingCart = ({ setCondition, condition }) => {
    const dispatch = useDispatch();
    locScroll(condition);
    const items = useSelector(state => state.toolkit.arrProduct);
    const prise = useSelector(state => state.toolkit.totapPrise);
    let [makingPurchase, setMakingPurchase] = useState('Item in cart');
    dispatch(countriesLocalstorageAction());

    return (
        <>
            { }<div className={condition ? "shopingContener active" : "shopingContener"} data-test-id='cart'>
                <div className="shopingHeader">
                    <h3 className="shopingTitle">Shopping Card</h3>
                    <div onClick={() => { setCondition(false); setMakingPurchase('Item in cart'); }} className="close" >
                        <ClearBasket condition={condition} />
                        <img src={close} alt="close"></img>
                    </div>
                </div>
                {
                    ((items.length > 0) && (makingPurchase !== 'AnswerBasket'))?
                        <div className='makingPurchase'>
                            <div className="shopingNav">
                                <span className={makingPurchase === 'Item in cart' ? 'ItemInCart' : "ItemInCartNoChek"} >Item in cart</span>
                                <span className={makingPurchase === 'Delivery Info' ? 'ItemInCart' : "ItemInCartNoChek"} >Delivery Info</span>
                                <span className={makingPurchase === 'Payment' ? 'ItemInCart' : "ItemInCartNoChek"} >Payment</span>
                            </div>
                        </div>
                        :
                        <div></div>
                }
              
                {makingPurchase === 'Item in cart' && <ItemInCart prise={prise}/>}
                {makingPurchase === 'Delivery Info' && condition && <DeliveryInfo prise={prise} setMakingPurchase={setMakingPurchase} />}
                {makingPurchase === 'Payment' && condition && <Payment prise={prise} setMakingPurchase={setMakingPurchase} />}
                {makingPurchase === 'AnswerBasket' && condition && <AnswerBasket  setMakingPurchase={setMakingPurchase} setCondition={setCondition}/>}
                
                {
                    makingPurchase === 'Item in cart' && ((items.length > 0) ?
                        <div className='shopingFooter'>
                            <div className="shopingPrice">
                                <span className='title'>Total</span>
                                <span className='prise'>{prise.toFixed(2)}</span>
                            </div>
                            <button className='btnShoping' onClick={() => { setMakingPurchase('Delivery Info');}}>Further</button>
                            <button className='btnShopingViseble'>View cart</button>

                        </div>
                        :
                        <div className='shopingFooter'>
                            <button className='btnShoping' onClick={() => { setCondition(false) }}>BACK TO SHOPPING<ClearBasket condition={condition} /></button>
                        </div>)
                }



            </div>

            <div onClick={() => { setCondition(false); locScroll(false); setMakingPurchase('Item in cart');  }} className={condition ? "overlay" : ""}><ClearBasket condition={condition} /></div>

        </>
    )
}

export default ShoppingCart;