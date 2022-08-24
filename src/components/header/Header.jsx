import   {useState} from "react";
import {Nav} from "./HeaderElements"
import {ArrowDown} from "./HeaderElements"
import React from 'react'
import {ShopByCategory  } from "../shopbycategory/Shopbycategory"
import Basket from "../Basket/Basket";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div> <>
    <div>
    <Nav className="nav-sticky">
      <div > 
        <div>
          <div>
            <div className="hamburger" onClick={() => setSidebar(!sidebar)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="user">
              <i></i>
              <ul className="user-option">
                <li>My Account</li>
                <li>My Basket</li>
                <li>My Orders</li>
                <li>My Membership</li>
                <li>Wallet</li>
                <li>Ask Us</li>
                <li>Customer Service</li>
                <li>Logout</li>
              </ul>
            </div>
            <div className="big-basket-logo">
                <i className="big-basket-logo"></i>
            </div>
            <div className="shop-on-scroll">
            
            </div>
            <div className="location">
              <i></i>
            </div>
            <div className="search-bar big-screen">
              <input
                type="text"
                placeholder="Search for Products.."
              />
              <button type="submit">
                <i className="search-icon"></i>
              </button>
            </div>
            <div className="empty-divs"></div>
            <div className="empty-divs"></div>
            <Basket />
          </div>
          <div className="search-bar small-screen">
            <input
              type="text"
              placeholder="Search for Products.."
            />
            <button type="submit">
              <i className="search-icon"></i>
            </button>
          </div>
        </div>
        <ul className="nav-top">
          <li className="telephone">
            <i></i>
            <span>1860 123 1000</span>
          </li>
          <li className="location">
            <i></i>
            <span>
            411026, Pune
            </span>
            <ArrowDown top="-3px" color="#4a4a4a" />
          </li>

            <li className="user">
              <i></i>
              <span>Login/Sign Up</span>
            </li>
        </ul>
      </div>
      <div>
      <ShopByCategory sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </Nav>
    </div>
  </></div>
  )
}

export default Header