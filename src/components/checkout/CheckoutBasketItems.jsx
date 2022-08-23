import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyBasket } from '../../redux/action/Action';
import "./CheckoutBasket.css"

const CheckoutBasketItems = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const basketItem = useSelector((state) => state.cart);
    let subtotal = 0;
    const subtotal_price = basketItem.map(
      (item) => (subtotal = subtotal + item.quantity * item.productprice)
    );
  
  return (
    <div className="checksection my-3 py-3">
    <div className="row">
      <div className="col col-lg-6 checkout-button-section">
        <div
          onClick={() => dispatch(emptyBasket())}
          className="empty-basket checkout-alt-button"
        >
          <p>Empty Basket</p>
        </div>
        <div onClick={()=>navigate("/")} className="continue-shopping checkout-alt-button">
          <p>CONTINUE SHOPPING</p>
        </div>
      </div>
      <div className="col col-lg-6 checkout-section">
        <div className="final-checkout-box">
          <div className="final-price final-charges">
            <p>Subtotal</p>
            <p>Rs.{subtotal_price[subtotal_price.length - 1]}</p>
          </div>
          <div className="final-delivery-charge final-charges">
            <p>Delivery Charges</p>
            <p>
              {subtotal_price[subtotal_price.length - 1] < 500
                ? "**"
                : "Rs.30.00"}
            </p>
          </div>
          <hr className="solid" />
          <div className="final-price final-charges">
            <h3>Total</h3>
            <h3>
              {subtotal_price[subtotal_price.length - 1] < 500
                ? subtotal_price[subtotal_price.length - 1]
                : subtotal_price[subtotal_price.length - 1] + 50}
            </h3>
          </div>
          <p style={{ margin: "0px" }}>
            *For this order no coupon is applied!!!
          </p>
          <hr style={{ margin: "0px" }} className="solid" />
          <div className="final-button-box">
            <div onClick={()=>{dispatch(emptyBasket()); navigate("/")}} className="final-checkout-button final-charges">
              <h5>CHECKOUT</h5>
              <i
                style={{ marginLeft: "5px" }}
                className="fa-solid fa-circle-right"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CheckoutBasketItems