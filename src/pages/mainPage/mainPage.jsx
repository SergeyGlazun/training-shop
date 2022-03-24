import React  from 'react';
import MainTop from '../../components/main/mainTop/mainTop';
import WeCan from '../../components/main/mainTop/weCan';
import Products from '../../components/main/mainProducts';
import MainNews from '../../components/main/mainNews';
import MainSpecialOffer from '../../components/main/mainSpecialOffer/mainSpecialOffer';
import MainBlog from '../../components/main/mainBlog';
const MainPage = () => {

    return(
        <>
        <div className='wrapper'>
        <MainTop/>
        <WeCan/>   
        <Products productType='women'/>
        <Products productType='men'/>
        <MainNews/>
        </div>
        <MainSpecialOffer/>
        <div className='wrapper'>
      <MainBlog />
    </div>
        </>
    );
}

export default MainPage;
