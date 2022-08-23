import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk"
import RootReducers from "./reducer/RootReducers";


const configureStore = () =>{
    const  middlewares = [thunk];
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const enhancers = composeEnhancer(applyMiddleware(...middlewares))
 const store = createStore(RootReducers(),enhancers)
 return store
}
export default configureStore;