import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./CheckoutSmallview.css";
const CheckoutSmallview = () => {
  const navigate = useNavigate();
  const ProductList = useSelector((state) => state.cart);
  let initialsubtotal = 0;
  const subtotal = ProductList.map(
    (product) => (initialsubtotal = initialsubtotal + product.quantity * product.productprice)
  );

  return (
    <div className="review-checkout">
      <div className="apply-delivery-charges">
        <p>**Actual Delivery Charges computed at checkout</p>
      </div>
      <div className="review-checkout-box">
        <div className="sub-total">
          <div className="subtotal-price sub">
            <p>Sub Total:</p>
            <p>{subtotal[subtotal.length - 1]}</p>
          </div>
          <div className="delivery-charges sub">
            <p>Delivery:</p>
            <p>**</p>
          </div>
        </div>
        <div onClick={() => navigate("/checkout")}  className="checkout-button">
          <p>View Basket & Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSmallview;
