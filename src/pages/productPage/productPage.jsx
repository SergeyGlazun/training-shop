import { useState } from 'react';

import { PRODUCTS } from '../../db/products';


import '../../components/reiting/reiting.scss';
import '../../components/main/mainProducts/product.scss';
import ProductHeaderTipe from './ProductHeaderTipe';
import Setings from './setings';
import Filter from './filter';
import CardProduct from '../../components/cardProduct';
import FilterString from './filter/filterString/filterString';

import square from './img/Square.png'
import './productPage.scss';



const ProductsPage = ({ productType }) => {
  const [condition, setCondition] = useState(false);
  ////////////////////////цыет//////////////////////////////
  let arrColor = [];
  PRODUCTS[productType].map((item) => item.images.map((item) => arrColor.push(item.color)));
  let arrColorNoRepets = [...new Set(arrColor)];

  ////////////////////////размер//////////////////////////////
  let arrSize = [];
  PRODUCTS[productType].map((item) => arrSize.push(...item.sizes));
  let arrSizeNoRepets = [...new Set(arrSize)];

  ////////////////////////бренд//////////////////////////////
  let arrBrand = [];
  PRODUCTS[productType].map((item) => arrBrand.push(item.brand));
  let arrBrandNoRepets = [...new Set(arrBrand)];

  ////////////////////////для цен//////////////////////////////
  let arrPrice = [];
  PRODUCTS[productType].map((item) => arrPrice.push(item.price));
  let arrPriceNoRepets = [...new Set(arrPrice)];
  ////////////////////////......//////////////////////////////
  let [colorArr] = useState([]);
  let [colorArrBuf, setResult] = useState([]);
  let [sizeArr] = useState([]);
  let [brendArr] = useState([]);
  let [priceArr] = useState([]);
  /////////////////////////////////////для фильтра///////////////////////////////

  let [countSetings, setCountSetings] = useState(0);

  return (

    <div className='productsPage'
      data-test-id={`products-page-${productType}`}

      onClick={() => {
        countSetings = 0;
        setResult(PRODUCTS[productType].filter(item =>

          (colorArr.length > 0
            ?
            (item.images.filter(etem => colorArr.some(elem => elem === etem.color)).length)
            : true)

          &&

          (sizeArr.length > 0
            ?
            (item.sizes.filter(etem => sizeArr.some(elem => elem === etem)).length)
            : true)

          &&
          (
            brendArr.length > 0 ?
              (brendArr.some(elem => elem === item.brand))
              : true
          )
          &&
          (
            priceArr.length > 0
              ?
              (priceArr.map(i => i.split('-').map(z => Number(z))).some(chek =>
                chek[0] >= item.price && chek[1] <= item.price))
              : true
          )


        ));

        if (colorArr.length > 0) {
          setCountSetings(countSetings++);
        }
        if (sizeArr.length > 0) {
          setCountSetings(countSetings++);
        }
        if (brendArr.length > 0) {
          setCountSetings(countSetings++);
        }
        if (priceArr.length > 0) {
          setCountSetings(countSetings++);
        }


      }}

    >
      <ProductHeaderTipe productType={productType} />

      <div className='wrapper'>

        <Setings condition={condition} setCondition={setCondition} />
        {condition && <Filter
          data-test-id={`filter-${productType}`}

          arrColorNoRepets={arrColorNoRepets}
          colorArr={colorArr}

          arrSizeNoRepets={arrSizeNoRepets}
          arrSize={sizeArr}

          arrBrandNoRepets={arrBrandNoRepets}
          brendArr={brendArr}

          arrPriceNoRepets={arrPriceNoRepets}
          priceArr={priceArr}
        />}

        {((colorArrBuf.length !== PRODUCTS[productType].length && colorArrBuf.length !== 0) ? true : false) &&
          <FilterString countSetings={colorArrBuf.length}
            sizeArr={sizeArr}
            colorArr={colorArr}
            brendArr={brendArr}
            priceArr={priceArr}
          />}

        <CardProduct arrCards={colorArrBuf.length !== 0 || countSetings > 0 ? colorArrBuf : PRODUCTS[productType]} productType={productType} />

        <div className='square'>
          <img src={square} alt="square" />
        </div>


      </div>
    </div>
  );
}

export default ProductsPage;