import {ADD_PRODUCT_BASKET} from './types';
export const addBasket=(productName)=>{
    // debugger
      return (dispatch) => {
         console.log("Adding to Basket");
         console.log("product Name"+productName)
        dispatch({
            type:ADD_PRODUCT_BASKET,
            payload: productName})
    }
}