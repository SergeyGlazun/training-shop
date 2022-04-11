import {
    useEffect
  } from "react";
import {  
    postCastumerTotalPrise,
    postCastumerPhone,
    postCastumerEmail,
    postCastumerCountry,
    postCastumerCity,
    postCastumerStreet,
    postCastumerHouse,
    postCastumerApartment,
    postCastumerPostcod,
    postCastumerStoryAdress,
    postCastumerDeliveryMethod,
    postCastumerPaymentMethod,
    postCastumerStoryCashEmaik,
    postCastumerStoryCard,
    postCastumerCardDate,
    postCastumerCardCVV
} from '../../reducers/productBasket';
import {
    useDispatch
} from 'react-redux';

export default function ClearBasket(condition) {
    const dispatch = useDispatch();

    useEffect(() => {         
        if(condition.condition===false){        
            dispatch(postCastumerPhone(""));
            dispatch(postCastumerEmail(""));
            dispatch(postCastumerCountry(""));
            dispatch(postCastumerCity(""));
            dispatch(postCastumerStreet(""));
            dispatch(postCastumerHouse(""));
            dispatch(postCastumerApartment(""));
            dispatch(postCastumerPostcod(""));
            dispatch(postCastumerStoryAdress(""));
            dispatch(postCastumerTotalPrise(""));

            dispatch(postCastumerStoryCashEmaik(""));
            dispatch(postCastumerStoryCard(""));
            dispatch(postCastumerCardDate(""));
            dispatch(postCastumerCardCVV(""));

            dispatch(postCastumerDeliveryMethod(""));
            dispatch(postCastumerPaymentMethod(""));
        }     
      });
    
    return null;
}