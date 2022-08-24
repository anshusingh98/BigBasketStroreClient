import ActionTypes from "../action/ActionTypes"  
  
  
  const initialState = {
     isLoading:false,
     products:null,
     errorMessage:null,
     category:"Allproducts"
 }
 
 const ProductReducer = (state = initialState , {type,payload}) => {
     switch (type) {
         case ActionTypes.PRODUCT_LOAD_START:
            return{
                ...state,
                isLoading:true,
                errorMessage:null
            };
        case ActionTypes.PRODUCT_LOAD_SUCCESS:
            return {
                ...state,
                isLoading:false,
                products:payload
              
            };
            case ActionTypes.SET_CATEGORY:
                return {
                    ...state,
                    isLoading:false,
                    category:payload
                  
                };
         case ActionTypes.PRODUCT_LOAD_ERROR:
                return {
                   ...state,
                   isLoading:false,
                   errorMessage:payload


                }
     
         default:
return state     }


   
 };
 
 export default ProductReducer