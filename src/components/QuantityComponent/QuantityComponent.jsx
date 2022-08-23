import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { decQuantity, incQuantity } from "../../redux/action/Action";
import "./QuantityComponent.css";

const QuantityComponent = (prop) => {
  const [qyt, setQyt] = useState(prop.quantity);
  const dispatch = useDispatch();
  
  return (
    <div className="change-qty">
      <div
        onClick={() => {
          dispatch(decQuantity(prop.id));
          setQyt(qyt - 1);
        }}
        className="dec-qty qty-button"
      >
        <p>-</p>
      </div>
      <div className="show-qty">
        <p>{qyt}</p>
      </div>
      <div
        onClick={() => {
          dispatch(incQuantity(prop.id));
          setQyt(qyt + 1);
        }}
        className="inc-qty  qty-button"
      >
        <p>+</p>
      </div>
    </div>
  );
};

export default QuantityComponent;
