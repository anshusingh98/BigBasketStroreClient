import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/action/Action";
import QuantityComponent from "../QuantityComponent/QuantityComponent";
import "./Card.css";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cart);

  const Addedtobasket = basket.findIndex((item) => item._id === product._id);
  let addedtocart = true;
  if (Addedtobasket === -1) {
    addedtocart = false;
  }
  const [basketItem, setBasketItem] = useState(addedtocart);
  return (
    <>
      <div className="product-card">
        <div className="offer">
          <p>GET 40% OFF</p> <i className="fa-solid fa-sun mx-1"></i>
        </div>
        <div className="image-box">
          <div className="image">
            <img
              src={product.image}
              className="img-fluid"
              height="120px"
              alt="veg"
            />
          </div>
          <img
            className="veg-nonVeg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png"
            height="30px"
            alt="veg"
          />
        </div>

        <p style={{ color: "grey", fontSize: "12px", margin: "0px" }}>
          {product.brand}
        </p>

        <p>{product.productName}</p>

        <p>{product.QtyPieceForOneElement}</p>

        <div className="price-box">
          <p style={{ margin: "0px", fontSize: "12px" }}>
            MRP:
            <span style={{ fontSize: "14px" }}>RS {product.productprice}</span>
          </p>
          <div className="delivery">
            <i
              style={{ fontSize: "20px", color: "#84c225" }}
              className="fa-solid fa-truck truck"
            ></i>
           
            <p style={{ fontSize: "9px", margin: "0px 0px 0px 3px" }}>
             {product.Date}
            </p>
          </div>
          <div className="add-box my-1">
            { basketItem ? (
              <QuantityComponent  id={product._id} quantity={product.quantity} basketItem={basketItem}  setBasketItem={setBasketItem}/>
            ) : (
              <div className="add-box my-1">
                <div className="initial-quantity">
                  <div className="qty">
                    <p style={{ color: "rgb(204, 204, 204)" }}>Qty</p>
                  </div>
                  <div className="quantity">
                    <p>{product.quantity}</p>
                  </div>
                </div>
              <div
                onClick={() => {
                  setBasketItem(true);
                  dispatch(addToBasket(product));
                }}
                className="add-button"
              >
                
                <p>ADD</p>
                <i
                  style={{ color: "grey" }}
                  className="fa-solid fa-basket-shopping"
                ></i>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
