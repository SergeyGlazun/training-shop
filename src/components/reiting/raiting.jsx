
import fulStar from './img/fulStar.svg';
import star from './img/star.svg';

import './reiting.scss';

function reiting(rating,size=14){

  let arrStar = [];
    for(let i=0;i<5;i++){
        if(rating>i){
            arrStar.push(<img key={i} src={fulStar}  alt='imgUser' width={size}/>);
         
        }else{
            arrStar.push(<img key={i} src={star}  alt='imgUser' width={size}/>);
        }
      
    }
return arrStar;
}

const Raiting = ({ rating,size }) =>{
    return(
       <div className='rating'>
             {reiting(rating,size)}           
       </div>
    );
}

export default Raiting;
