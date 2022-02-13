import list from '../../../pages/productPage/setings/img/a2.svg';
import close from '../../../pages/productPage/setings/img/closes.svg';

import './burgerMenu.scss';


function Example(condition,setCondition) {
    return(
         <div  onClick={() =>filterSeting(setCondition(condition ? false : true))} >
         {filterSeting(condition)}
        </div>
     ); 
 }

function filterSeting(click){

    if(click){
        return  <img src={close} alt='filter' className='imgBurger close' />
    }else{
        return  <img src={list} alt='filter' className='imgBurger' />
    }
}



const BurgerMenu = ({condition,setCondition}) =>{
    return(
        <div >
            { Example(condition,setCondition)}    
        </div>
    );
}

export default BurgerMenu;