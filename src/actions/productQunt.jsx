import {INCREASE_QUANT,DECREASE_QUANT} from './types';
export const productQunt=(action,name)=>{
    return (dispatch)=>{
console.log("Hello Haerer is Quant",action);
dispatch({
    type:action==='increase'?INCREASE_QUANT:DECREASE_QUANT,
    payload:name
})
    }
}
