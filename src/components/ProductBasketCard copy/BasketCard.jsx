import React from 'react';
import { useDispatch} from 'react-redux/es/hooks/useDispatch';
import { removeFromBasket } from '../../redux/action/Action';
import QuantityComponent from '../QuantityComponent/QuantityComponent';
import "./BasketCard.css";
const BasketCard = (products) => {
  const product = products.data;
  const dispatch = useDispatch();
  return (
    <div className="review-card">
      <div className="image-review-box">
        <img src={product.image} width="65px" alt="veg-img" />
      </div>
      <div className="name-brand-review">
      <p style={{fontSize:"10px", margin:"5px 0px 0px 0px"}}>{product.quantity} X {product.productprice}</p>
      <div className="nameDiv">
      <span>{product.brand}</span>
        <span>{product.productName}</span>
      </div>
     
      </div>
      <div className="qty-box">
        <QuantityComponent id={product._id} quantity={product.quantity} />
      </div> 
      <div className="final-price-box">
        <p>Rs {product.productprice}</p>
        <span onClick={()=>dispatch(removeFromBasket(product._id))}>&#10060;</span>
      </div>
    </div>
  )
}

export default BasketCard;