import { GET_NUMBERS_BASKET} from './types';
export const getNumbers=()=>{
    // debugger
    return ((dispatch)=>{
        console.log("getting all basket numbers");
        dispatch({type: GET_NUMBERS_BASKET});
    })
}