import React from 'react'
import "./CheckOutContainer.css"
import { useSelector } from 'react-redux';
import CheckoutBasketItems from '../../components/checkout/CheckoutBasketItems';
import CheckBilling from '../../components/CheckOutBillTables/CheckBilling';
const CheckOutContainer = () => {
  const basketList = useSelector(state=>state.cart);

  return (
    <section className='checkout-body'>
    <div className="container checkoutBody ">
        <h3>Your Basket ({basketList.length})</h3>
        <hr className="solid" />
        {basketList.length>0? <div>
          <CheckBilling />
        <CheckoutBasketItems /> 
        </div>:<h3>No Item in the basket</h3>}

    </div> 
   
</section>  )
}

export default CheckOutContainer