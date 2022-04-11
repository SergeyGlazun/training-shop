import { useSelector, useDispatch } from "react-redux";
import ClearBasket from "../../function/clearBasket";
import { clear } from "../../../reducers/actionBasket";
import './answerBasket.scss';

const AnswerBasket = ({ setMakingPurchase, setCondition }) => {
    const { responsBasket } = useSelector(state => state.postProductBasket);
    const dispatch = useDispatch();

    return (
        <>
            {responsBasket === 'OK' ?
                <div className='contenerDelivery'>
                    <div className="basketOK">
                        <span className="titleAnswerBasket">Thank you <br />
                            for your order </span>
                        <span className="textAnswerBasket" >Information about your order
                            will appear in your e-mail. </span>
                        <span className="textAnswerBasket">Our manager will call you back.</span>
                    </div>

                </div>
                :
                <div className='contenerDelivery'>
                    <div className="basketOK">
                        <span className="titleAnswerBasket">Sorry,<br />
                            your payment<br /> has not been<br /> processed.</span>
                        <span className="textAnswerBasket">{responsBasket}</span>
                    </div>
                </div>
            }

            {responsBasket === 'OK' ?
                <div className='shopingFooter'>
                    <button
                        type="submit"
                        className='btnShoping'
                        onClick={() => { dispatch(clear()); setMakingPurchase('Item in cart'); setCondition(false); }}><ClearBasket condition={false} />BACK TO SHOPPING</button>
                </div>
                :

                <div className='shopingFooter'>
                    <button
                        type="submit"
                        className='btnShoping'
                        onClick={() => { setMakingPurchase('Payment') }}>BACK TO SHOPPING</button>

                    <button
                        className='btnShoping'
                        onClick={() => { setMakingPurchase('Item in cart'); }}><ClearBasket condition={false} />View cart</button>
                </div>
            }

        </>
    );
}

export default AnswerBasket;