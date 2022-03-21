import { useSelector } from "react-redux";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay } from 'swiper';
import CardsItem from '../../../../components/cardItem/cardItem';
import Prev from '../../../../components/slider/imgButtonLeftRight/next.svg';
import Next from '../../../../components/slider/imgButtonLeftRight/prev.svg';
import ScrollUp from '../../../../components/function/scrollUp';
import { Loader } from '../../../../components/loader/loader';
import './buttonProductTipe.scss';

const ButtonProductTipe = ({ productType }) => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const PRODUCTS = useSelector(state => state.getproduct.productsArr);
    ////////////////////////////
    const loading = useSelector(state => state.app.loading);
    if (loading) {
        return <Loader />
    }
    ////////////////////////////////////////////

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
                    <ScrollUp top={{ scroll: 0 }} />
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

                        {PRODUCTS[productType].map(({ name, price, images, rating, id, sizes, discount }) => (
                            <SwiperSlide key={id} >
                                <CardsItem                                 
                                    name={name}
                                    price={price}
                                    images={images}
                                    rating={rating}                               
                                    discount={discount}
                                    id={id}
                                    sizes={sizes}
                                    productType={productType}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ButtonProductTipe;