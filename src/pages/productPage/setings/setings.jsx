
import closes from './img//filter.svg';
import filter from './img/closes.svg';

import list from './img/a1.svg';
import table from './img/a2.svg';


import './setings.scss';

function Example(condition,setCondition) {
   return(
        <div onClick={() =>filterSeting(setCondition(condition ? false : true))} >
        {filterSeting(condition)}
       </div>
    ); 
}

function filterSeting(click){
        if(click){
            return  <img src={filter} alt='filter' className='filteImg' />
        }else{
            return  <img src={closes} alt='filter' className='filteImg' />
        }
    }

const Setings = ({condition,setCondition}) =>{
  
    return(
        <div className='setings'> 
            <div className='filter' type='button'>
            { Example(condition,setCondition)} FILTER
            </div>        
          

           <div className='listOrTable'>
                <img src={table} alt='view-list' className='listImg' />
                <img src={list} alt='view-grid' className='tableImg' />
           </div>
        </div>

       
    );
}

export default Setings;