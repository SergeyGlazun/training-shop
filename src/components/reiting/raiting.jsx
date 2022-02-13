
import fulStar from './img/fulStar.svg';
import star from './img/star.svg';

import './reiting.scss';

function reiting(rating){

  let arrStar = [];
    for(let i=0;i<5;i++){
        if(rating>i){
            arrStar.push(<img key={i} src={fulStar}  alt='imgUser' width={14}/>);
         
        }else{
            arrStar.push(<img key={i} src={star}  alt='imgUser' width={14}/>);
        }
      
    }
return arrStar;
}

const Raiting = ({ rating }) =>{
    return(
       <div className='rating'>
             {reiting(rating)}           
       </div>
    );
}

export default Raiting;
