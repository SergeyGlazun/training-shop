import list from '../../../pages/productPage/setings/img/a2.svg';
import close from '../../../pages/productPage/setings/img/closes.svg';

import './burgerMenu.scss';



function Example(condition,setCondition) {
    
    return(
         <div  onClick={() =>filterSeting(setCondition(condition ? false : true))} data-test-id='filter-button'>
         {filterSeting(condition)}
        </div>
     ); 
 }


function filterSeting(click){
  
    let Body =  document.body;
    if(click){           
        Body.classList.add('lock');          
        return  <img src={close} alt='filter' className='imgBurger close' />
    }else{           
        Body.classList.remove("lock");      
        return  <img src={list} alt='filter' className='imgBurger' />
    }
}



const BurgerMenu = ({condition,setCondition}) =>{
    return(
        <div data-test-id='burger-menu-btn'>           
            {Example(condition,setCondition)}    
        </div>
    );
}

export default BurgerMenu;