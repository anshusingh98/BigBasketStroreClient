import { combineReducers } from "redux"
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer"

const RootReducers = () => combineReducers({
    products : ProductReducer,
    cart: CartReducer,
});
export default RootReducers;