import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket } from '../../redux/action/Action';
import "./CheckoutBilling.css"
const CheckBilling = () => {
    const dispatch = useDispatch();
  const basketItem = useSelector((state) => state.cart);
  let subtotal = 0;
  const subtotal_price = basketItem.map(
    (item) => (subtotal = subtotal + item.quantity * item.productprice)
  );
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">ITEM DESCRIPTION</th>
          <th scope="col">UNIT PRICE</th>
          <th scope="col">QUANTITY</th>
          <th scope="col">SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        {basketItem.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.productName}</td>
              <td>Rs {item.productprice}</td>
              <td>{item.quantity}</td>
              <td className="subtotal">
                <p>RS {subtotal_price[subtotal_price.length - 1]}</p>
                <span
                  onClick={() => dispatch(removeFromBasket(item._id))}
                  style={{ marginLeft: "30px" }}
                >
                  &#10006;
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default CheckBilling