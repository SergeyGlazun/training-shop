import './filterItem.scss';
import React, { useState} from 'react';



const FilterItem = ({ text, id, type, colorChek, colorArr,typeFilter}) => {
  const [checked, setChecked] = useState(colorArr.some(elem => elem === text));

  // console.log(text)
  return (
    <label className='checkboxLabel' htmlFor={`${type}-${id}`} key={id}   data-test-id={`filter-${typeFilter}-${text}`}>

      <input type='checkbox'
        className='checkboxInput'
        id={`${type}-${id}`}
      
        checked={checked}
        onChange={() => {setChecked(!checked)}}
        onClick={() => {!checked ? colorArr.push(colorChek) : colorArr.splice(colorArr.indexOf(colorChek), 1).sort()}}
      />
      <span className='checkboText'>{text}</span>
    </label>
  );
}

export default FilterItem;