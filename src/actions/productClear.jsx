import {CLEAR_PRODUCT} from './types';
export const productClear=(name)=>{
    // debugger
      return (dis) => {
         console.log("Adding to Basket");
                 dis({
            type:CLEAR_PRODUCT,
            payload: name})
    }
}