import React from 'react';
import man from './img/man.png';
import woman from './img/woman.png';
import ForEmail from '../../Form/FormEmail/formEmail';
import './mainSpecialOffer.scss';

const MainSpecialOffer = () => {

  return (
    <div className='mainSpecialOfferBlock'>
      <div className='smallBlockWrapper'>
        <div className='smallBlock'>
          <div className='title'>SPECIAL OFFER</div>
          <span className='subtitle'>
            SUBSCRIBE <br /> AND <span className='percent'>GET 10% OFF</span>
          </span>
          {/* <form action="">
            <input type='text'
              placeholder={placeholder}
              className='input'
              onChange={event => { 
                dispatch(validationChek(validateEmail(event.target.value))); 
                inptMail = event.target.value;             
               }}             
              />
            
            <div className={responce === null ? "" : responce === "OK" ? "responseOK" : "responseError"}>
              {responce === null ? "" : responce === "OK" ? "Почта успешно отправлена" : `${responce}`}
            </div>


            <div className='emailInputContener'>
            
              <input type="submit"
                className={disable ? "buttonDisebleFalse" : "buttonDisebleTrue"}
                value=" SUBSCRIBE"            
                disabled={disable || loadingAction  }
                onClick={() => {
                  dispatch(userEmailAction(inptMail));
                  dispatch(validationChek(validateEmail(false)));
                  setPlaceholder("Enter your email");
                  dispatch(loadingAction(true));
                
                }}>
              </input>
              <div className="emailLoader">
                {loadingAction && <Loader />}
              </div>

            </div>
          </form> */}      
          <ForEmail classInput={"input"} 
          classButtonDisebleTrue={"buttonDisebleFalse"}
          classButtonDisebleFalse={"buttonDisebleTrue"}
          classError={"error"}
          idInput={'main-subscribe-mail-field'}
          idButton={'main-subscribe-mail-button'}
          />
        </div>
        <img src={woman} alt='woman' className='woman' />
        <img src={man} alt='man' className='man' />
      </div>
    </div>
  );
};

export default MainSpecialOffer;
