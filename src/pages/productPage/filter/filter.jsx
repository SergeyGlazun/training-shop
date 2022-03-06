import React from "react";

import FilterItem from './filterItem';

import './filter.scss';



const Filter = ({ arrColorNoRepets, colorArr, arrSizeNoRepets, arrSize, arrBrandNoRepets, brendArr, arrPriceNoRepets, priceArr }) => {
  let bufPrise = arrPriceNoRepets.map((item) => Math.round(Number(item))).sort((a, b) => b - a)

  let roundedNumbers = [...new Set(bufPrise.map(item => Math.round((item) / 100) * 100))]

  let SelectionStringPrise = [];
  roundedNumbers.map(item => SelectionStringPrise.push(String((item === 0) ? 100 : item) + "-" + String((item > 0) ? item - 100 : 0)));
  
  return (
    <div className='filterSetings'>

      <div className='color'   data-test-id='filters-color'>
        <div className='title'>COLOR</div>
        <div className='filters'>
          {arrColorNoRepets.map((color, index) => (

            <FilterItem key={index} id={index} text={color} type='color' colorChek={color} colorArr={colorArr}  data-test-id={`filter-${'color'}-${color}`}/>
          ))}

        </div>
      </div>

      <div className='size'  data-test-id='filters-size'>
        <div className='title'>SIZE</div>
        <div className='filters'>
          {arrSizeNoRepets.map((size, index) => (
            <FilterItem key={index} id={index} text={size} type='size' colorChek={size} colorArr={arrSize} data-test-id={`filter-${'size'}-${size}`}/>
          ))}
        </div>
      </div>

      <div className='brand' data-test-id='filters-brand'>
        <div className='title'>BRAND</div>
        <div className='filters'>
          {arrBrandNoRepets.map((brand, index) => (
            <FilterItem key={index} id={index} text={brand} type='brand' colorChek={brand} colorArr={brendArr} data-test-id={`filter-${'brand'}-${brand}`}/>
          ))}
        </div>
      </div>

      <div className='price'>
        <div className='title'>PRICE</div>
        <div className='filters'>
          {[...new Set(SelectionStringPrise)].map((price, index) => (
            <FilterItem key={index} id={index} text={price} type='price' colorChek={price} colorArr={priceArr} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Filter;