import apiClient from "../helper/apiClient";

 class FetchProduct  {
    
     getAllProduct = (category) => apiClient().get(`/products/${category}`);

}
export default new FetchProduct();