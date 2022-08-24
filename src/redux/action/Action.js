import ActionTypes from "./ActionTypes";
const productLoadStart = () =>({
    type : ActionTypes.PRODUCT_LOAD_START,
});
const productLoadSuccess = (products) =>({
      type:ActionTypes.PRODUCT_LOAD_SUCCESS,
      payload:products,

    });
const productLoadError = (errorMessage) => ({
    type:ActionTypes.PRODUCT_LOAD_ERROR,
    payload:errorMessage,
});
const setCategory = (category) =>({
    type:ActionTypes.SET_CATEGORY,
    payload:category
})

const fetchcart = (cartItem) =>({
    type:ActionTypes.SET_CART,
})


export const addToBasket = (basketItem) => {
    return {
      type: ActionTypes.ADD_TO_BASKET,
      payload: basketItem,
    };
  };
  
  export const removeFromBasket = (id) => {
    return {
      type: ActionTypes.REMOVE_FROM_BASKET,
      payload: id,
    };
  };
  
  export const incQuantity = (id) => {
    return {
      type:ActionTypes.INC_QUANTITY,
      payload: id,
    };
  };
  
  export const decQuantity = (id) => {
    return {
      type: ActionTypes.DEC_QUANTITY,
      payload: id,
    };
  };
 


  export const emptyBasket = () => {
    return {
      type: ActionTypes.EMPTY_BASKET,
    };
  };



export default {
    productLoadStart,
    productLoadSuccess,
    productLoadError,
    setCategory,
    fetchcart,
    
};