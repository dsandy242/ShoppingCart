import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        HPLaptop: {
            name: "HPLaptop",
            price: 299.99,
            numbers: 0,
            inCart: false
        },
        Lenova: {
            name: "Lenova",
            price: 399.99,
            numbers: 0,
            inCart: false
        },
        Dell: {
            name: "Dell",
            price: 499.99,
            numbers: 0,
            inCart: false
        },
        Apple: {
            name: "Apple",
            price: 599.99,
            numbers: 0,
            inCart: false
        },
    }

}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuant={...state.products[action.payload]};
            addQuant.numbers+=1;
            addQuant.inCart=true;
            console.log(addQuant)
            return {
               ...state,
               basketNumbers: state.basketNumbers + 1,
               cartCost:state.cartCost+ state.products[action.payload].price,
               products:{
                   ...state.products,
                   [action.payload]:addQuant
               }
            }
        case GET_NUMBERS_BASKET:
            return { ...state }
        default:
            return state;
    }
}