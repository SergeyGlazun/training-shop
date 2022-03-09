import { Link } from 'react-router-dom';
// import { arrCards } from '../../../../db/cards';
import Raiting from '../../../../components/reiting/raiting';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import { PRODUCTS } from '../../../../db/products';

import Prev from '../../../../components/slider/imgButtonLeftRight/next.svg';
import Next from '../../../../components/slider/imgButtonLeftRight/prev.svg';

import ColorSize from '../../../../components/cardProduct/Cardeliment/colorSize';
import Basker from '../../../../components/cardProduct/Cardeliment/basket';



import './buttonProductTipe.scss';

const ButtonProductTipe = ({ productType }) => {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const setNext = () => controlledSwiper.slideNext();
    const setPrev = () => controlledSwiper.slidePrev();
    return (
        <div className='butonContener'>
            <div className='wrapper'>
                <div className='buttonTitle'>
                    <div className='productsTitle'>RELATED PRODUCTS</div>
                    <div className='butons'>
                        <img src={Next} alt="Next" className='but' onClick={setPrev} />
                        <img src={Prev} alt="Prev" className='but' onClick={setNext} />
                    </div>
                </div>

                <div className='productsCards'>

                    <Swiper
                        data-test-id='related-slider'
                        onSwiper={setControlledSwiper}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            800: {

                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1151: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        loop
                        modules={[Controller, Autoplay]}
                        className="relatedSwiper"
                    >

                        {PRODUCTS[productType].map(({ name, price, images, rating, sale, id }) => (
                            <SwiperSlide key={id}>
                                <Link key={id} to={`/${productType}/${id}`} className='cardsItem' data-test-id={`clothes-card-${productType}`}>
                                    {sale && <span className='sale'>{sale}</span>}
                                    <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt='imgUser' className='cardsItemImg' />
                                    <div className='foterCard'>
                                        <div className='PriseReiting'>
                                            <div className='cardsItemName'>{name}</div>
                                            <div className='cardsItemPrice'><span>${price}</span>  <Raiting rating={rating} size={14} /></div>
                                        </div>

                                        <ColorSize />
                                        <Basker />

                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
         
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ButtonProductTipe;