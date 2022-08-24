import { ArrowDown } from "../header/HeaderElements";
import { BiWallet } from "react-icons/bi";
import { CategoryDiv, ShopByCategorySection } from "../header/HeaderElements";
import { useDispatch } from "react-redux";
import Action from "../../redux/action/Action";
import { Link } from "react-router-dom";
export const ShopByCategory = ({ sidebar, setSidebar }) => {  
  return (
    <ShopByCategorySection
      left={sidebar ? "0%" : "-100%"}
      className="nav-category cats"
    >
      {sidebar && (
        <>
          <div className="on-sidebar-show" >
            <Link to="/">HOME</Link>
            <div className="close-modal" onClick={() => setSidebar(!sidebar)}>
              <span></span>
              <span></span>
            </div>
          </div>
         
          <div className="small_nav"style={{display:"flex" ,justifyContent:"space-between"}}>
        <span className="title"> SHOP BY CATEGORY</span> 
        <ArrowDown top="-3px" />
          </div>
          <div className="row">
          <TopSmallNav />
          </div>
        </>
      )}
      {!sidebar && (
        <>
          <div className="shop-by-category">
            <span>SHOP BY CATEGORY</span>
            <ArrowDown top="-3px" />
            <TopCategory />
          </div>
          <div className="offers">
            <i></i>
            <span>OFFERS</span>
          </div>
          <div className="bb-specialty">
            <BiWallet color={"black"} size={20} />

            <span>BB WALLET</span>
          </div>
        </>
      )}
    </ShopByCategorySection>
  );
};

const TopCategory = () => {

 
  const dispatch =  useDispatch();
  return (
    <CategoryDiv className="show-category">
      <ul className="top_category" style={{ listStyle: "none" }}>
        <li
          className="top_category_item"
          value="Allproducts"
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "ProximaNovaA-Regular !important",
          }}
          onClick = {()=>{dispatch(Action.setCategory("Allproducts"))}}
          
        >
          <span>All Products</span>
        </li>
        <li
          className="top_category_item"
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "ProximaNovaA-Regular !important",
          }}
          onClick = {()=>{dispatch(Action.setCategory("vegitable"))}}
        >
          <span >vegitable</span>
        </li>
        <li
          className="top_category_item"
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "ProximaNovaA-Regular !important",
          }}
          onClick = {(e)=>{dispatch(Action.setCategory("fruit"))}}
        >
          <span>Fruit</span>
        </li>
        <li
          className="top_category_item"
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "ProximaNovaA-Regular !important",
          }}
          onClick = {(e)=>{dispatch(Action.setCategory("herb"))}}
        >
          <span>Herbs</span>
        </li>
      </ul>
    </CategoryDiv>
  );
};


const TopSmallNav = () => {

 
  const dispatch =  useDispatch();
  return (
    <CategoryDiv>
      <ul  style={{ listStyle: "none" }}>
        <li
         
          value="Allproducts"
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "ProximaNovaA-Regular !important",
          }}
          onClick = {()=>{dispatch(Action.setCategory("Allproducts"))}}
          
        >
          <span>All Products</span>
        </li>
        <li
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "ProximaNovaA-Regular !important",
          }}
          onClick = {()=>{dispatch(Action.setCategory("vegitable"))}}
        >
          <span >vegitable</span>
        </li>
        <li
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "ProximaNovaA-Regular !important",
          }}
          onClick = {(e)=>{dispatch(Action.setCategory("fruit"))}}
        >
          <span>Fruit</span>
        </li>
        <li
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "ProximaNovaA-Regular !important",
          }}
          onClick = {(e)=>{dispatch(Action.setCategory("herb"))}}
        >
          <span>Herbs</span>
        </li>
      </ul>
    </CategoryDiv>
  );
};