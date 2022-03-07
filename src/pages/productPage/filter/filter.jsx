import React  from "react";

import FilterItem from './filterItem';


import './filter.scss';



const Filter = ({ productType,arrColorNoRepets, colorArr, arrSizeNoRepets, arrSize, arrBrandNoRepets, brendArr, arrPriceNoRepets, priceArr }) => {
  let bufPrise = arrPriceNoRepets.map((item) => Math.round(Number(item))).sort((a, b) => b - a)

  let roundedNumbers = [...new Set(bufPrise.map(item => Math.round((item) / 100) * 100))]

  let SelectionStringPrise = [];
  roundedNumbers.map(item => SelectionStringPrise.push(String((item === 0) ? 100 : item) + "-" + String((item > 0) ? item - 100 : 0)));

console.log()
  return (
    <div className='filterSetings'   data-test-id={`filters-${productType}`}>

      <div className='color'>
        <div className='title'>COLOR</div>
        <div className='filters' data-test-id='filters-color'>
          {arrColorNoRepets.map((color, index) => (

            <FilterItem key={index} id={index} text={color} type='color' colorChek={color} colorArr={colorArr} typeFilter={'color'} productType={productType} />
          ))}

        </div>
      </div>

      <div className='size'  >
        <div className='title'>SIZE</div>
        <div className='filters' data-test-id='filters-size'>
          {arrSizeNoRepets.map((size, index) => (
            <FilterItem key={index} id={index} text={size} type='size' colorChek={size} colorArr={arrSize} typeFilter={'size'} productType={productType} />
          ))}
        </div>
      </div>

      <div className='brand' >
        <div className='title'>BRAND</div>
        <div className='filters' data-test-id='filters-brand'>
          {arrBrandNoRepets.map((brand, index) => (
            <FilterItem key={index} id={index} text={brand} type='brand' colorChek={brand} colorArr={brendArr} typeFilter={'brand'} productType={productType} />
          ))}
        </div>
      </div>

      <div className='price'>
        <div className='title'>PRICE</div>
        <div className='filters'>
          {[...new Set(SelectionStringPrise)].map((price, index) => (
            <FilterItem key={index} id={index} text={price} type='price' colorChek={price} colorArr={priceArr} typeFilter={'price'} productType={productType} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Filter;