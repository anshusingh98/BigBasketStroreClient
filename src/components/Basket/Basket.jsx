import React,{useState,useRef} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";
import styles from "./Basket.css"
import { useSelector } from 'react-redux';
import CheckoutSmallview from '../CheckoutSmallView/CheckoutSmallview';
import BasketCard from '../ProductBasketCard copy/BasketCard';



const useStyles = makeStyles(theme => ({
    popover: {
      pointerEvents: 'none',
    },
    popoverContent: {
      pointerEvents: 'auto',
    },
  }));
const Basket = () => {

  const basketItem = useSelector((state) => state.cart);
    const [openedPopover, setOpenedPopover] = useState(false)
    const popoverAnchor = useRef(null);
  
    const popoverEnter = ({ currentTarget }) => {
      setOpenedPopover(true)
    };
  
    const popoverLeave = ({ currentTarget }) => {
      setOpenedPopover(false)
    };
  
    const classes = useStyles();

  return (

    <div className={styles.basketDiv} >
    <span
     ref={popoverAnchor}
     aria-owns="mouse-over-popover"
     aria-haspopup="true"
     onMouseEnter={popoverEnter}
     onMouseLeave={popoverLeave}
   >
    <div >
     <div className="basket" >
       <span>
         <i className="basket-image"></i>
         <b className="cart-count">No. of Products</b>
       </span>
       <div>
         <span className="my-basket">My Basket</span>
         <span className="cart-value">
              {basketItem.length}
           <span>items</span>
         </span>
       </div>
     </div>
   </div>
 </span>
 <Popover
   id="mouse-over-popover"
   className={classes.popover}
   classes={{
     paper: classes.popoverContent,
   }}
   open={openedPopover}
   anchorEl={popoverAnchor.current}
   anchorOrigin={{
     vertical: 'bottom',
     horizontal: 'right',
   }}
   transformOrigin={{
     vertical: 'top',
     horizontal: 'left',
   }}
   PaperProps={{onMouseEnter: popoverEnter, onMouseLeave: popoverLeave}}
 >
 
     

                {basketItem.length > 0 ? (
                  <div className="bucket-items">
                    <div className="review-card-section">
                      {basketItem?.map((el, index) => {
                        return (
                          <div key={index}>
                            <BasketCard data={el} />
                          </div>
                        );
                      })}
                    </div>
<CheckoutSmallview />                  </div>
                ) : (
                  <div className="container bucket-item-container">
                  <p>Your basket is empty. Start shopping now!</p>
                  </div>
                )}


 </Popover>
</div>
  )
}

export default Basket