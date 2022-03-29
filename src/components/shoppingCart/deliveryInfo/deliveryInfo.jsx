import './deliveryInfo.scss'

const DeliveryInfo = () => {
   return (
      <form className='contenerDelivery'>
         <div className='ContenerChooseDeliveryItems'>
            <div className='TextDeliveryItems'>Choose the method of delivery of the items</div>
            <div className="radioBattonChooseDeliveryItems">

               <div className="contenerRadio">
                  <input className="inputChooseDelivery" name="ChooseDelivery" type="radio" value="" defaultChecked={true}/>  <div className='radioButtonChooseDelivery'>Pickup from post offices</div>
               </div>
               <div className="contenerRadio">
                  <input className="inputChooseDelivery" name="ChooseDelivery" type="radio" value=""/> <div className='radioButtonChooseDelivery'>Express delivery</div>
               </div>

               <div className="contenerRadio">
                  <input className="inputChooseDelivery" name="ChooseDelivery" type="radio" value=""/><div className='radioButtonChooseDelivery'>Store pickup</div>
               </div>

            </div>
         </div>

         <div></div>
         <div></div>

      </form>
   );
}

export default DeliveryInfo;