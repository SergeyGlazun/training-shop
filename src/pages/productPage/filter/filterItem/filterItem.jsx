import './filterItem.scss';

const FilterItem = ({text,id,type}) =>{
    return(
  <label className='checkboxLabel' htmlFor={`${type}-${id}`} key={id}>
    <input type='checkbox' className='checkboxInput' id={`${type}-${id}`} />
    <span className='checkboText'>{text}</span>
  </label>
     );
}

export default FilterItem;