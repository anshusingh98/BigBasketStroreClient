import FetchProduct from "../../services/FetchProduct";
import Action from "../action/Action";
export const loadProductAsync = (category) =>(dispatch) =>
{
    dispatch(Action.productLoadStart())
    FetchProduct.getAllProduct(category)
    .then((res) => dispatch(Action.productLoadSuccess(res.data.products)))
    .catch((error)=>dispatch(Action.productLoadError(error.message)));
};
