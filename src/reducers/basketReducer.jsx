import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANT, DECREASE_QUANT, CLEAR_PRODUCT } from '../actions/types';
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        HPLaptop: {
            name: "HPLaptop",
            price: 299.99,
            numbers: 0,
            tagName: 'HPLaptop',
            inCart: false
        },
        Lenova: {
            name: "Lenova",
            price: 399.99,
            numbers: 0,
            tagName: 'Lenova',
            inCart: false
        },
        Dell: {
            name: "Dell",
            price: 499.99,
            numbers: 0,
            tagName: 'Dell',
            inCart: false
        },
        Apple: {
            name: "Apple",
            price: 599.99,
            numbers: 0,
            tagName: 'Apple',
            inCart: false
        },
    }

}
export default (state = initialState, action) => {
    let addQuant = '';
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            addQuant = { ...state.products[action.payload] };
            addQuant.numbers += 1;
            addQuant.inCart = true;
            console.log(addQuant)
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuant
                }
            }
        case GET_NUMBERS_BASKET:
            return { ...state }
        case INCREASE_QUANT:
            addQuant = { ...state.products[action.payload] };
            addQuant.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuant
                }
            }
        case DECREASE_QUANT:
            addQuant = { ...state.products[action.payload] };
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if (addQuant.numbers === 0) {
                addQuant.numbers = 0;
                newBasketNumbers = state.basketNumbers;
                // newBasketNumbers= 0;
                newCartCost = state.cartCost

            } else {
                addQuant.numbers -= 1;
                newBasketNumbers = state.basketNumbers - 1;
                newCartCost = state.cartCost - state.products[action.payload].price;
                // basketNumbers= state.basketNumbers - 1;
            }
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: addQuant
                }
            }
        case CLEAR_PRODUCT:
            addQuant = { ...state.products[action.payload] };
            let beforeClearNum=addQuant.numbers;
            addQuant.numbers =0;
            addQuant.inCart = false;
            console.log(addQuant)
            return {
                ...state,
                basketNumbers: state.basketNumbers - beforeClearNum,
                cartCost: state.cartCost -( beforeClearNum* addQuant.price),
                products: {
                    ...state.products,
                    [action.payload]: addQuant
                }
            }
        default:
            return state;
    }
}