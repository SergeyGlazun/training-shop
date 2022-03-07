import './filterItem.scss';
import React, { useState, useEffect } from 'react';



const FilterItem = ({ text, id, type, colorChek, colorArr,typeFilter }) => {
  const [checked, setChecked] = useState(colorArr.some(elem => elem === text));

  useEffect(() => { 
    setChecked(colorArr.some(elem => elem === text))
  });
  
  return (
    <label className='checkboxLabel' htmlFor={`${type}-${id}`} key={id}   >

      <input type='checkbox'
        className='checkboxInput'
        id={`${type}-${id}`}
        data-test-id={`filter-${typeFilter}-${text}`}
        checked={checked}
        onChange={() => {setChecked(!checked)}}
        onClick={() => {!checked ? colorArr.push(colorChek) : colorArr.splice(colorArr.indexOf(colorChek), 1).sort()}}
      />
      <span className='checkboText'>{text}</span>
    </label>
  );
}

export default FilterItem;